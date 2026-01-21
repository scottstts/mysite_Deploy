import{r as f,j}from"./index-BIdLquty.js";const B=15,N=1e3,O=`
  attribute vec3 aPosition;
  uniform mat4 uProjectionMatrix;
  uniform mat4 uModelViewMatrix;
  uniform float uPointSize;
  uniform float uPixelRatio;
  
  void main() {
    vec4 mvPosition = uModelViewMatrix * vec4(aPosition, 1.0);
    gl_Position = uProjectionMatrix * mvPosition;
    
    // Size attenuation: size decreases with distance (matches Three.js sizeAttenuation: true)
    // Three.js uses: size * (scale / -mvPosition.z) where scale is related to canvas height
    // For a canvas height of ~900px at 75deg FOV, scale ≈ 450
    float scale = 450.0 * uPixelRatio;
    gl_PointSize = uPointSize * (scale / -mvPosition.z);
  }
`,H=`
  precision mediump float;
  uniform vec3 uColor;
  
  void main() {
    // Create circular points (discard corners to make circles)
    vec2 center = gl_PointCoord - vec2(0.5);
    float dist = length(center);
    
    // Smooth edge for anti-aliasing
    float alpha = 1.0 - smoothstep(0.4, 0.5, dist);
    if (alpha < 0.01) discard;
    
    gl_FragColor = vec4(uColor, alpha);
  }
`,V=(e,o)=>{const r=new Float32Array(e*3);for(let n=0;n<e;n++){const s=Math.random(),a=Math.random(),i=2*Math.PI*s,m=Math.acos(2*a-1),d=o*Math.cbrt(Math.random()),u=n*3;r[u]=d*Math.sin(m)*Math.cos(i),r[u+1]=d*Math.sin(m)*Math.sin(i),r[u+2]=d*Math.cos(m)}return r},k=(e,o,r,n)=>{const s=e*Math.PI/180,a=1/Math.tan(s/2),i=1/(r-n);return new Float32Array([a/o,0,0,0,0,a,0,0,0,0,(r+n)*i,-1,0,0,r*n*i*2,0])},P=(e,o)=>{const r=new Float32Array(16);for(let n=0;n<4;n++)for(let s=0;s<4;s++){let a=0;for(let i=0;i<4;i++)a+=e[n+i*4]*o[i+s*4];r[n+s*4]=a}return r},D=e=>{const o=Math.cos(e),r=Math.sin(e);return new Float32Array([1,0,0,0,0,o,r,0,0,-r,o,0,0,0,0,1])},Y=e=>{const o=Math.cos(e),r=Math.sin(e);return new Float32Array([o,0,-r,0,0,1,0,0,r,0,o,0,0,0,0,1])},W=e=>{const o=Math.cos(e),r=Math.sin(e);return new Float32Array([o,r,0,0,-r,o,0,0,0,0,1,0,0,0,0,1])},X=(e,o,r)=>new Float32Array([1,0,0,0,0,1,0,0,0,0,1,0,e,o,r,1]),g=(e,o,r)=>{const n=e.createShader(r);return e.shaderSource(n,o),e.compileShader(n),e.getShaderParameter(n,e.COMPILE_STATUS)?n:(console.error("Shader compile error:",e.getShaderInfoLog(n)),e.deleteShader(n),null)},q=(e,o,r)=>{const n=g(e,o,e.VERTEX_SHADER),s=g(e,r,e.FRAGMENT_SHADER);if(!n||!s)return null;const a=e.createProgram();return e.attachShader(a,n),e.attachShader(a,s),e.linkProgram(a),e.getProgramParameter(a,e.LINK_STATUS)?(e.deleteShader(n),e.deleteShader(s),a):(console.error("Program link error:",e.getProgramInfoLog(a)),null)},G=e=>{const o=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);return o?[parseInt(o[1],16)/255,parseInt(o[2],16)/255,parseInt(o[3],16)/255]:[1,1,1]},Z=({onBenchmarkComplete:e})=>{const o=f.useRef(null),r=f.useRef(null),n=f.useRef(null),s=f.useRef(null),a=f.useRef(0),i=f.useRef(0),m=f.useRef(e);m.current=e;const d=f.useRef({isRunning:!0,startTime:null,frameCount:0,completed:!1});return f.useEffect(()=>{const u=o.current;if(!u)return;const t=u.getContext("webgl",{antialias:!1,alpha:!0,premultipliedAlpha:!1,powerPreference:"high-performance",stencil:!1,depth:!1});if(!t){console.error("WebGL not supported"),m.current(!1);return}n.current=t;const l=q(t,O,H);if(!l){m.current(!1);return}s.current=l,t.useProgram(l);const S=t.getAttribLocation(l,"aPosition"),w=t.getUniformLocation(l,"uProjectionMatrix"),F=t.getUniformLocation(l,"uModelViewMatrix"),_=t.getUniformLocation(l,"uPointSize"),T=t.getUniformLocation(l,"uPixelRatio"),C=t.getUniformLocation(l,"uColor"),L=V(1e3,1.2),x=t.createBuffer();t.bindBuffer(t.ARRAY_BUFFER,x),t.bufferData(t.ARRAY_BUFFER,L,t.STATIC_DRAW),t.enableVertexAttribArray(S),t.vertexAttribPointer(S,3,t.FLOAT,!1,0,0);const E=G("#f272c8");t.uniform3fv(C,E),t.uniform1f(_,.004),t.uniform1f(T,1),t.enable(t.BLEND),t.blendFunc(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA);const R=()=>{const h=u.clientWidth,p=u.clientHeight;u.width=h,u.height=p,t.viewport(0,0,h,p);const c=k(75,h/p,.1,1e3);t.uniformMatrix4fv(w,!1,c)};R(),window.addEventListener("resize",R);const I=X(0,0,-1),b=W(Math.PI/4),A=h=>{r.current=requestAnimationFrame(A),i.current===0&&(i.current=h);const p=(h-i.current)/1e3;i.current=h;const c=d.current;if(c.isRunning&&!c.completed){c.startTime===null&&(c.startTime=performance.now()),c.frameCount++;const v=performance.now()-c.startTime;if(v>=N){c.isRunning=!1,c.completed=!0;const U=c.frameCount/v*1e3;m.current(U>=B)}}a.current+=p;const z=D(-a.current/10),y=Y(-a.current/15);let M=P(y,z);M=P(b,M),M=P(I,M),t.uniformMatrix4fv(F,!1,M),t.clearColor(0,0,0,0),t.clear(t.COLOR_BUFFER_BIT),t.drawArrays(t.POINTS,0,1e3)};return r.current=requestAnimationFrame(A),()=>{window.removeEventListener("resize",R),r.current&&cancelAnimationFrame(r.current),t.deleteBuffer(x),t.deleteProgram(l)}},[]),j.jsx("canvas",{ref:o,style:{width:"100%",height:"100%",position:"absolute",top:0,left:0,display:"block"}})};export{Z as default};
