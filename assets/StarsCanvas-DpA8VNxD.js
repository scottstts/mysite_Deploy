import{r as f,j as W}from"./index-CMj5Cgjh.js";const K=15,X=1e3,Z=800,q=420,G=1e3/30,Q=.85,J="(max-width: 767px), (pointer: coarse)",$=`
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
`,ee=`
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
`,te=(t,a)=>{const o=new Float32Array(t*3);for(let r=0;r<t;r++){const s=Math.random(),c=Math.random(),i=2*Math.PI*s,p=Math.acos(2*c-1),d=a*Math.cbrt(Math.random()),m=r*3;o[m]=d*Math.sin(p)*Math.cos(i),o[m+1]=d*Math.sin(p)*Math.sin(i),o[m+2]=d*Math.cos(p)}return o},re=(t,a,o,r)=>{const s=t*Math.PI/180,c=1/Math.tan(s/2),i=1/(o-r);return new Float32Array([c/a,0,0,0,0,c,0,0,0,0,(o+r)*i,-1,0,0,o*r*i*2,0])},F=(t,a)=>{const o=new Float32Array(16);for(let r=0;r<4;r++)for(let s=0;s<4;s++){let c=0;for(let i=0;i<4;i++)c+=t[r+i*4]*a[i+s*4];o[r+s*4]=c}return o},oe=t=>{const a=Math.cos(t),o=Math.sin(t);return new Float32Array([1,0,0,0,0,a,o,0,0,-o,a,0,0,0,0,1])},ne=t=>{const a=Math.cos(t),o=Math.sin(t);return new Float32Array([a,0,-o,0,0,1,0,0,o,0,a,0,0,0,0,1])},ae=t=>{const a=Math.cos(t),o=Math.sin(t);return new Float32Array([a,o,0,0,-o,a,0,0,0,0,1,0,0,0,0,1])},se=(t,a,o)=>new Float32Array([1,0,0,0,0,1,0,0,0,0,1,0,t,a,o,1]),V=(t,a,o)=>{const r=t.createShader(o);return r?(t.shaderSource(r,a),t.compileShader(r),t.getShaderParameter(r,t.COMPILE_STATUS)?r:(console.error("Shader compile error:",t.getShaderInfoLog(r)),t.deleteShader(r),null)):null},ce=(t,a,o)=>{const r=V(t,a,t.VERTEX_SHADER),s=V(t,o,t.FRAGMENT_SHADER);if(!r||!s)return null;const c=t.createProgram();return c?(t.attachShader(c,r),t.attachShader(c,s),t.linkProgram(c),t.getProgramParameter(c,t.LINK_STATUS)?(t.deleteShader(r),t.deleteShader(s),c):(console.error("Program link error:",t.getProgramInfoLog(c)),t.deleteProgram(c),t.deleteShader(r),t.deleteShader(s),null)):(t.deleteShader(r),t.deleteShader(s),null)},le=({isActive:t,onBenchmarkComplete:a})=>{const o=f.useRef(null),r=f.useRef(null),s=f.useRef(null),c=f.useRef(0),i=f.useRef(0),p=f.useRef(0),d=f.useRef(t),m=f.useRef(!1),x=f.useRef(window.matchMedia(J).matches),P=f.useRef(()=>{}),A=f.useRef(()=>{}),S=f.useRef(a);S.current=a,d.current=t;const w=f.useRef({isRunning:!0,startTime:null,frameCount:0,completed:!1});return f.useEffect(()=>{const j=()=>{w.current.completed||(w.current={isRunning:!0,startTime:null,frameCount:0,completed:!1})},y=()=>{r.current!==null&&(cancelAnimationFrame(r.current),r.current=null),i.current=0,p.current=0},k=()=>{const n=s.current;n&&(n.gl.deleteBuffer(n.positionBuffer),n.gl.deleteBuffer(n.seedBuffer),n.gl.deleteProgram(n.program),s.current=null)},B=()=>{const n=s.current;if(!n)return;const e=x.current?Q:1,l=Math.max(1,Math.floor(n.canvas.clientWidth*e)),u=Math.max(1,Math.floor((n.canvas.clientHeight||1)*e));n.canvas.width=l,n.canvas.height=u,n.gl.viewport(0,0,l,u);const v=re(75,l/u,.1,1e3);n.gl.uniformMatrix4fv(n.uProjectionMatrix,!1,v)},I=()=>{const n=o.current;if(!n||s.current)return!!s.current;const e=n.getContext("webgl",{antialias:!1,alpha:!0,premultipliedAlpha:!1,powerPreference:x.current?"low-power":"default",stencil:!1,depth:!1});if(!e)return console.error("WebGL not supported"),S.current(!1),!1;const l=ce(e,$,ee);if(!l)return S.current(!1),!1;e.useProgram(l);const u=e.getAttribLocation(l,"aPosition"),v=e.getAttribLocation(l,"aSeed"),E=e.getUniformLocation(l,"uProjectionMatrix"),h=e.getUniformLocation(l,"uModelViewMatrix"),M=e.getUniformLocation(l,"uPointSize"),C=e.getUniformLocation(l,"uPixelRatio"),H=e.getUniformLocation(l,"uTime"),g=x.current?q:Z,Y=te(g,1.2),L=e.createBuffer(),_=e.createBuffer();if(!L||!_)return e.deleteProgram(l),S.current(!1),!1;e.bindBuffer(e.ARRAY_BUFFER,L),e.bufferData(e.ARRAY_BUFFER,Y,e.STATIC_DRAW),e.enableVertexAttribArray(u),e.vertexAttribPointer(u,3,e.FLOAT,!1,0,0);const N=new Float32Array(g);for(let T=0;T<g;T++)N[T]=Math.random();return e.bindBuffer(e.ARRAY_BUFFER,_),e.bufferData(e.ARRAY_BUFFER,N,e.STATIC_DRAW),e.enableVertexAttribArray(v),e.vertexAttribPointer(v,1,e.FLOAT,!1,0,0),e.uniform1f(M,x.current?.017:.02),e.uniform1f(C,1),e.enable(e.BLEND),e.blendFunc(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA),s.current={gl:e,program:l,canvas:n,positionBuffer:L,seedBuffer:_,uProjectionMatrix:E,uModelViewMatrix:h,uTime:H,petalCount:g,viewMatrix:se(0,0,-1),groupRotationZ:ae(Math.PI/4)},B(),!0},U=n=>{if(!d.current||m.current){r.current=null;return}if(r.current=requestAnimationFrame(U),x.current&&p.current!==0&&n-p.current<G)return;const e=s.current;if(!e)return;i.current===0&&(i.current=n);const l=(n-i.current)/1e3;i.current=n,p.current=n;const u=w.current;if(u.isRunning&&!u.completed){u.startTime===null&&(u.startTime=performance.now()),u.frameCount+=1;const M=performance.now()-u.startTime;if(M>=X){u.isRunning=!1,u.completed=!0;const C=u.frameCount/M*1e3;S.current(C>=K)}}c.current+=l;const v=oe(-c.current/10),E=ne(-c.current/15);let h=F(E,v);h=F(e.groupRotationZ,h),h=F(e.viewMatrix,h),e.gl.uniformMatrix4fv(e.uModelViewMatrix,!1,h),e.gl.uniform1f(e.uTime,c.current),e.gl.clearColor(0,0,0,0),e.gl.clear(e.gl.COLOR_BUFFER_BIT),e.gl.drawArrays(e.gl.POINTS,0,e.petalCount)},b=()=>{r.current!==null||!d.current||I()&&(j(),i.current=0,p.current=0,r.current=requestAnimationFrame(U))};P.current=b,A.current=y;const D=()=>{B()},O=n=>{n.preventDefault(),m.current=!0,y(),k()},z=()=>{m.current=!1,I()&&d.current&&b()},R=o.current;if(R)return R.addEventListener("webglcontextlost",O),R.addEventListener("webglcontextrestored",z),window.addEventListener("resize",D),d.current&&b(),()=>{R.removeEventListener("webglcontextlost",O),R.removeEventListener("webglcontextrestored",z),window.removeEventListener("resize",D),y(),k(),P.current=()=>{},A.current=()=>{}}},[]),f.useEffect(()=>{d.current=t},[t]),f.useEffect(()=>{if(!t){A.current();return}m.current||r.current!==null||P.current()},[t]),W.jsx("canvas",{ref:o,style:{width:"100%",height:"100%",position:"absolute",top:0,left:0,display:"block"}})};export{le as default};
