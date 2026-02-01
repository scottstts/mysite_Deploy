import{r as p,j as D}from"./index-B_Bvwe6j.js";const N=15,O=1e3,H=`
  attribute vec3 aPosition;
  attribute float aSeed;
  uniform mat4 uProjectionMatrix;
  uniform mat4 uModelViewMatrix;
  uniform float uPointSize;
  uniform float uPixelRatio;
  uniform float uTime;
  varying float vSeed;

  void main() {
    vec4 mvPosition = uModelViewMatrix * vec4(aPosition, 1.0);
    gl_Position = uProjectionMatrix * mvPosition;
    vSeed = aSeed;

    float scale = 450.0 * uPixelRatio;
    // Wider size range for organic variety
    float sizeVariation = 0.6 + 0.8 * fract(aSeed * 7.31);
    gl_PointSize = uPointSize * sizeVariation * (scale / -mvPosition.z);
  }
`,j=`
  precision mediump float;
  uniform float uTime;
  varying float vSeed;

  void main() {
    vec2 uv = gl_PointCoord - vec2(0.5);

    // Per-petal fixed rotation (spread across full 360) + slow drift
    float baseAngle = fract(vSeed * 47.13) * 6.2831;
    float drift = uTime * (0.15 + fract(vSeed * 2.71) * 0.25);
    float angle = baseAngle + drift;
    float ca = cos(angle);
    float sa = sin(angle);
    vec2 ruv = vec2(ca * uv.x - sa * uv.y, sa * uv.x + ca * uv.y);

    // Slight asymmetry per petal
    float skew = 0.2 * (fract(vSeed * 11.3) - 0.5);
    ruv.x += skew * ruv.y;

    // Select shape variant (4 types based on seed)
    float shapeSelect = fract(vSeed * 29.7);
    float petal = 0.0;
    float d = 0.0;
    vec2 p;

    if (shapeSelect < 0.3) {
      // Shape A: Wide rounded petal (broad, almost circular with taper)
      p = vec2(ruv.x * 2.2, ruv.y * 2.0 - 0.02);
      float wm = 1.0 - 0.4 * smoothstep(-0.4, 0.5, p.y);
      float dx = p.x / wm;
      d = dx * dx + p.y * p.y;
      petal = 1.0 - smoothstep(0.18, 0.26, d);
      // Soft rounded tip notch
      float notch = smoothstep(0.0, 0.04, abs(p.x)) + smoothstep(0.35, 0.5, p.y);
      petal *= clamp(notch, 0.0, 1.0);

    } else if (shapeSelect < 0.55) {
      // Shape B: Narrow elongated petal (slender, pointed)
      p = vec2(ruv.x * 3.5, ruv.y * 1.6 - 0.03);
      float wm = 1.0 - 0.7 * smoothstep(-0.5, 0.4, p.y);
      float dx = p.x / wm;
      d = dx * dx + p.y * p.y;
      petal = 1.0 - smoothstep(0.14, 0.20, d);

    } else if (shapeSelect < 0.8) {
      // Shape C: Heart-tipped petal (classic sakura with visible notch)
      p = vec2(ruv.x * 2.6, ruv.y * 1.8 - 0.04);
      float wm = 1.0 - 0.55 * smoothstep(-0.5, 0.45, p.y);
      float dx = p.x / wm;
      d = dx * dx + p.y * p.y;
      petal = 1.0 - smoothstep(0.16, 0.23, d);
      // Deeper notch at tip
      float notch = smoothstep(0.0, 0.06, abs(p.x)) + smoothstep(0.25, 0.42, p.y);
      petal *= clamp(notch, 0.0, 1.0);

    } else {
      // Shape D: Curled petal (slightly off-center, organic)
      vec2 curled = ruv;
      curled.x += 0.04 * sin(ruv.y * 8.0);
      p = vec2(curled.x * 2.8, curled.y * 1.9 - 0.03);
      float wm = 1.0 - 0.5 * smoothstep(-0.45, 0.5, p.y);
      float dx = p.x / wm;
      d = dx * dx + p.y * p.y;
      petal = 1.0 - smoothstep(0.15, 0.22, d);
      float notch = smoothstep(0.0, 0.035, abs(p.x)) + smoothstep(0.32, 0.48, p.y);
      petal *= clamp(notch, 0.0, 1.0);
    }

    // Center vein highlight
    float vein = exp(-abs(p.x) * 25.0) * 0.2 * petal;

    float alpha = petal * 0.85;
    if (alpha < 0.02) discard;

    // Vibrant saturated pink palette
    vec3 hotPink = vec3(1.0, 0.25, 0.55);
    vec3 magenta = vec3(0.95, 0.30, 0.65);
    vec3 rosePink = vec3(1.0, 0.42, 0.62);
    vec3 sakuraPink = vec3(1.0, 0.55, 0.72);
    vec3 brightBlush = vec3(1.0, 0.65, 0.78);

    float colorPick = fract(vSeed * 13.37);
    vec3 petalColor;
    if (colorPick < 0.25) {
      petalColor = mix(hotPink, rosePink, fract(vSeed * 3.7));
    } else if (colorPick < 0.5) {
      petalColor = mix(magenta, sakuraPink, fract(vSeed * 5.1));
    } else if (colorPick < 0.75) {
      petalColor = mix(rosePink, brightBlush, fract(vSeed * 9.3));
    } else {
      petalColor = mix(sakuraPink, rosePink, fract(vSeed * 7.7));
    }

    // Edge-to-center gradient: edges deeper, center brighter
    float edgeFade = smoothstep(0.04, 0.2, d);
    petalColor = mix(petalColor + 0.08, petalColor * 0.88, edgeFade * 0.5);

    // Vein highlight (lighter streak)
    petalColor += vec3(vein);

    gl_FragColor = vec4(petalColor, alpha);
  }
`,W=(t,a)=>{const r=new Float32Array(t*3);for(let o=0;o<t;o++){const s=Math.random(),n=Math.random(),i=2*Math.PI*s,d=Math.acos(2*n-1),m=a*Math.cbrt(Math.random()),u=o*3;r[u]=m*Math.sin(d)*Math.cos(i),r[u+1]=m*Math.sin(d)*Math.sin(i),r[u+2]=m*Math.cos(d)}return r},Y=(t,a,r,o)=>{const s=t*Math.PI/180,n=1/Math.tan(s/2),i=1/(r-o);return new Float32Array([n/a,0,0,0,0,n,0,0,0,0,(r+o)*i,-1,0,0,r*o*i*2,0])},P=(t,a)=>{const r=new Float32Array(16);for(let o=0;o<4;o++)for(let s=0;s<4;s++){let n=0;for(let i=0;i<4;i++)n+=t[o+i*4]*a[i+s*4];r[o+s*4]=n}return r},X=t=>{const a=Math.cos(t),r=Math.sin(t);return new Float32Array([1,0,0,0,0,a,r,0,0,-r,a,0,0,0,0,1])},q=t=>{const a=Math.cos(t),r=Math.sin(t);return new Float32Array([a,0,-r,0,0,1,0,0,r,0,a,0,0,0,0,1])},G=t=>{const a=Math.cos(t),r=Math.sin(t);return new Float32Array([a,r,0,0,-r,a,0,0,0,0,1,0,0,0,0,1])},K=(t,a,r)=>new Float32Array([1,0,0,0,0,1,0,0,0,0,1,0,t,a,r,1]),C=(t,a,r)=>{const o=t.createShader(r);return t.shaderSource(o,a),t.compileShader(o),t.getShaderParameter(o,t.COMPILE_STATUS)?o:(console.error("Shader compile error:",t.getShaderInfoLog(o)),t.deleteShader(o),null)},Z=(t,a,r)=>{const o=C(t,a,t.VERTEX_SHADER),s=C(t,r,t.FRAGMENT_SHADER);if(!o||!s)return null;const n=t.createProgram();return t.attachShader(n,o),t.attachShader(n,s),t.linkProgram(n),t.getProgramParameter(n,t.LINK_STATUS)?(t.deleteShader(o),t.deleteShader(s),n):(console.error("Program link error:",t.getProgramInfoLog(n)),null)},Q=({onBenchmarkComplete:t})=>{const a=p.useRef(null),r=p.useRef(null),o=p.useRef(null),s=p.useRef(null),n=p.useRef(0),i=p.useRef(0),d=p.useRef(t);d.current=t;const m=p.useRef({isRunning:!0,startTime:null,frameCount:0,completed:!1});return p.useEffect(()=>{const u=a.current;if(!u)return;const e=u.getContext("webgl",{antialias:!1,alpha:!0,premultipliedAlpha:!1,powerPreference:"high-performance",stencil:!1,depth:!1});if(!e){console.error("WebGL not supported"),d.current(!1);return}o.current=e;const c=Z(e,H,j);if(!c){d.current(!1);return}s.current=c,e.useProgram(c);const R=e.getAttribLocation(c,"aPosition"),g=e.getAttribLocation(c,"aSeed"),F=e.getUniformLocation(c,"uProjectionMatrix"),k=e.getUniformLocation(c,"uModelViewMatrix"),T=e.getUniformLocation(c,"uPointSize"),_=e.getUniformLocation(c,"uPixelRatio"),E=e.getUniformLocation(c,"uTime"),x=800,L=W(x,1.2),A=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,A),e.bufferData(e.ARRAY_BUFFER,L,e.STATIC_DRAW),e.enableVertexAttribArray(R),e.vertexAttribPointer(R,3,e.FLOAT,!1,0,0);const M=new Float32Array(x);for(let l=0;l<x;l++)M[l]=Math.random();const y=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,y),e.bufferData(e.ARRAY_BUFFER,M,e.STATIC_DRAW),e.enableVertexAttribArray(g),e.vertexAttribPointer(g,1,e.FLOAT,!1,0,0),e.uniform1f(T,.02),e.uniform1f(_,1),e.enable(e.BLEND),e.blendFunc(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA);const S=()=>{const l=u.clientWidth,h=u.clientHeight;u.width=l,u.height=h,e.viewport(0,0,l,h);const f=Y(75,l/h,.1,1e3);e.uniformMatrix4fv(F,!1,f)};S(),window.addEventListener("resize",S);const B=K(0,0,-1),I=G(Math.PI/4),w=l=>{r.current=requestAnimationFrame(w),i.current===0&&(i.current=l);const h=(l-i.current)/1e3;i.current=l;const f=m.current;if(f.isRunning&&!f.completed){f.startTime===null&&(f.startTime=performance.now()),f.frameCount++;const b=performance.now()-f.startTime;if(b>=O){f.isRunning=!1,f.completed=!0;const V=f.frameCount/b*1e3;d.current(V>=N)}}n.current+=h;const U=X(-n.current/10),z=q(-n.current/15);let v=P(z,U);v=P(I,v),v=P(B,v),e.uniformMatrix4fv(k,!1,v),e.uniform1f(E,n.current),e.clearColor(0,0,0,0),e.clear(e.COLOR_BUFFER_BIT),e.drawArrays(e.POINTS,0,x)};return r.current=requestAnimationFrame(w),()=>{window.removeEventListener("resize",S),r.current&&cancelAnimationFrame(r.current),e.deleteBuffer(A),e.deleteBuffer(y),e.deleteProgram(c)}},[]),D.jsx("canvas",{ref:a,style:{width:"100%",height:"100%",position:"absolute",top:0,left:0,display:"block"}})};export{Q as default};
