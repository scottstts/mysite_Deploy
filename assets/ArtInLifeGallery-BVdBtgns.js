const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/EffectComposer-CFqXK4wW.js","assets/CopyShader-BzTUYzf6.js","assets/Pass-C8ijqbKo.js","assets/index-DyZp6DgJ.js","assets/index-BDCnFSys.css","assets/ArtInLifeTab-Cf_OCiRq.js","assets/ArtInLifeTab-BAD9x7jk.css","assets/RenderPass-Dsizzt1l.js","assets/UnrealBloomPass-BI5chNc4.js","assets/OutputPass-DrZHgG7t.js","assets/SVGLoader-C8tEV3I0.js"])))=>i.map(i=>d[i]);
import{r as Kt,j as Ut,_ as Ys}from"./index-DyZp6DgJ.js";import{s as mt,c as Bh}from"./ArtInLifeTab-Cf_OCiRq.js";/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const pl="184",Zu=0,mc=1,Ju=2,Qr=1,Ku=2,ys=3,Xn=0,cn=1,En=2,ai=0,ws=1,go=2,gc=3,_c=4,$u=5,Hi=100,ju=101,Qu=102,ed=103,td=104,nd=200,id=201,sd=202,rd=203,_o=204,xo=205,ad=206,od=207,ld=208,cd=209,hd=210,ud=211,dd=212,fd=213,pd=214,vo=0,Mo=1,So=2,Rs=3,yo=4,Eo=5,bo=6,To=7,zh=0,md=1,gd=2,kn=0,Gh=1,Hh=2,Vh=3,ml=4,kh=5,Wh=6,Xh=7,Yh=300,qi=301,Cs=302,Ca=303,Pa=304,ma=306,Zi=1e3,rn=1001,wo=1002,Xt=1003,_d=1004,Ar=1005,jt=1006,La=1007,Wi=1008,gn=1009,qh=1010,Zh=1011,ur=1012,gl=1013,Yn=1014,In=1015,li=1016,_l=1017,xl=1018,dr=1020,Jh=35902,Kh=35899,$h=1021,jh=1022,Dn=1023,ci=1026,Xi=1027,vl=1028,Ml=1029,Ji=1030,Sl=1031,yl=1033,ea=33776,ta=33777,na=33778,ia=33779,Ao=35840,Ro=35841,Co=35842,Po=35843,Lo=36196,Io=37492,Do=37496,Uo=37488,No=37489,la=37490,Fo=37491,Oo=37808,Bo=37809,zo=37810,Go=37811,Ho=37812,Vo=37813,ko=37814,Wo=37815,Xo=37816,Yo=37817,qo=37818,Zo=37819,Jo=37820,Ko=37821,$o=36492,jo=36494,Qo=36495,el=36283,tl=36284,ca=36285,nl=36286,xd=3200,il=0,vd=1,Ei="",Ft="srgb",ha="srgb-linear",ua="linear",yt="srgb",ns=7680,xc=519,Md=512,Sd=513,yd=514,El=515,Ed=516,bd=517,bl=518,Td=519,vc=35044,Mc="300 es",Vn=2e3,fr=2001;function wd(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function pr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Ad(){const i=pr("canvas");return i.style.display="block",i}const Sc={};function yc(...i){const e="THREE."+i.shift();console.log(e,...i)}function Qh(i){const e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Ke(...i){i=Qh(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function ft(...i){i=Qh(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function sl(...i){const e=i.join(" ");e in Sc||(Sc[e]=!0,Ke(...i))}function Rd(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}const Cd={[vo]:Mo,[So]:bo,[yo]:To,[Rs]:Eo,[Mo]:vo,[bo]:So,[To]:yo,[Eo]:Rs};class $i{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const s=n[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}}const qt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Ec=1234567;const rr=Math.PI/180,Ps=180/Math.PI;function ji(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(qt[i&255]+qt[i>>8&255]+qt[i>>16&255]+qt[i>>24&255]+"-"+qt[e&255]+qt[e>>8&255]+"-"+qt[e>>16&15|64]+qt[e>>24&255]+"-"+qt[t&63|128]+qt[t>>8&255]+"-"+qt[t>>16&255]+qt[t>>24&255]+qt[n&255]+qt[n>>8&255]+qt[n>>16&255]+qt[n>>24&255]).toLowerCase()}function at(i,e,t){return Math.max(e,Math.min(t,i))}function Tl(i,e){return(i%e+e)%e}function Pd(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function Ld(i,e,t){return i!==e?(t-i)/(e-i):0}function ar(i,e,t){return(1-t)*i+t*e}function Id(i,e,t,n){return ar(i,e,1-Math.exp(-t*n))}function Dd(i,e=1){return e-Math.abs(Tl(i,e*2)-e)}function Ud(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Nd(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Fd(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Od(i,e){return i+Math.random()*(e-i)}function Bd(i){return i*(.5-Math.random())}function zd(i){i!==void 0&&(Ec=i);let e=Ec+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Gd(i){return i*rr}function Hd(i){return i*Ps}function Vd(i){return(i&i-1)===0&&i!==0}function kd(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Wd(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Xd(i,e,t,n,s){const r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+n)/2),u=a((e+n)/2),d=r((e-n)/2),h=a((e-n)/2),p=r((n-e)/2),g=a((n-e)/2);switch(s){case"XYX":i.set(o*u,l*d,l*h,o*c);break;case"YZY":i.set(l*h,o*u,l*d,o*c);break;case"ZXZ":i.set(l*d,l*h,o*u,o*c);break;case"XZX":i.set(o*u,l*g,l*p,o*c);break;case"YXY":i.set(l*p,o*u,l*g,o*c);break;case"ZYZ":i.set(l*g,l*p,o*u,o*c);break;default:Ke("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Ss(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function nn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const bc={DEG2RAD:rr,RAD2DEG:Ps,generateUUID:ji,clamp:at,euclideanModulo:Tl,mapLinear:Pd,inverseLerp:Ld,lerp:ar,damp:Id,pingpong:Dd,smoothstep:Ud,smootherstep:Nd,randInt:Fd,randFloat:Od,randFloatSpread:Bd,seededRandom:zd,degToRad:Gd,radToDeg:Hd,isPowerOfTwo:Vd,ceilPowerOfTwo:kd,floorPowerOfTwo:Wd,setQuaternionFromProperEuler:Xd,normalize:nn,denormalize:Ss},Dl=class Dl{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=at(this.x,e.x,t.x),this.y=at(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=at(this.x,e,t),this.y=at(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(at(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(at(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Dl.prototype.isVector2=!0;let Me=Dl;class hi{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let l=n[s+0],c=n[s+1],u=n[s+2],d=n[s+3],h=r[a+0],p=r[a+1],g=r[a+2],E=r[a+3];if(d!==E||l!==h||c!==p||u!==g){let m=l*h+c*p+u*g+d*E;m<0&&(h=-h,p=-p,g=-g,E=-E,m=-m);let f=1-o;if(m<.9995){const v=Math.acos(m),S=Math.sin(v);f=Math.sin(f*v)/S,o=Math.sin(o*v)/S,l=l*f+h*o,c=c*f+p*o,u=u*f+g*o,d=d*f+E*o}else{l=l*f+h*o,c=c*f+p*o,u=u*f+g*o,d=d*f+E*o;const v=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=v,c*=v,u*=v,d*=v}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,s,r,a){const o=n[s],l=n[s+1],c=n[s+2],u=n[s+3],d=r[a],h=r[a+1],p=r[a+2],g=r[a+3];return e[t]=o*g+u*d+l*p-c*h,e[t+1]=l*g+u*h+c*d-o*p,e[t+2]=c*g+u*p+o*h-l*d,e[t+3]=u*g-o*d-l*h-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(s/2),d=o(r/2),h=l(n/2),p=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=h*u*d+c*p*g,this._y=c*p*d-h*u*g,this._z=c*u*g+h*p*d,this._w=c*u*d-h*p*g;break;case"YXZ":this._x=h*u*d+c*p*g,this._y=c*p*d-h*u*g,this._z=c*u*g-h*p*d,this._w=c*u*d+h*p*g;break;case"ZXY":this._x=h*u*d-c*p*g,this._y=c*p*d+h*u*g,this._z=c*u*g+h*p*d,this._w=c*u*d-h*p*g;break;case"ZYX":this._x=h*u*d-c*p*g,this._y=c*p*d+h*u*g,this._z=c*u*g-h*p*d,this._w=c*u*d+h*p*g;break;case"YZX":this._x=h*u*d+c*p*g,this._y=c*p*d+h*u*g,this._z=c*u*g-h*p*d,this._w=c*u*d-h*p*g;break;case"XZY":this._x=h*u*d-c*p*g,this._y=c*p*d-h*u*g,this._z=c*u*g+h*p*d,this._w=c*u*d+h*p*g;break;default:Ke("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],d=t[10],h=n+o+d;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(u-l)*p,this._y=(r-c)*p,this._z=(a-s)*p}else if(n>o&&n>d){const p=2*Math.sqrt(1+n-o-d);this._w=(u-l)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+c)/p}else if(o>d){const p=2*Math.sqrt(1+o-n-d);this._w=(r-c)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+d-n-o);this._w=(a-s)/p,this._x=(r+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(at(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+a*o+s*c-r*l,this._y=s*u+a*l+r*o-n*c,this._z=r*u+a*c+n*l-s*o,this._w=a*u-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let l=1-t;if(o<.9995){const c=Math.acos(o),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Ul=class Ul{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Tc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Tc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*n),u=2*(o*t-r*s),d=2*(r*n-a*t);return this.x=t+l*c+a*d-o*u,this.y=n+l*u+o*c-r*d,this.z=s+l*d+r*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=at(this.x,e.x,t.x),this.y=at(this.y,e.y,t.y),this.z=at(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=at(this.x,e,t),this.y=at(this.y,e,t),this.z=at(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(at(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ia.copy(this).projectOnVector(e),this.sub(Ia)}reflect(e){return this.sub(Ia.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(at(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Ul.prototype.isVector3=!0;let P=Ul;const Ia=new P,Tc=new hi,Nl=class Nl{constructor(e,t,n,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c)}set(e,t,n,s,r,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=s,u[2]=o,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],d=n[7],h=n[2],p=n[5],g=n[8],E=s[0],m=s[3],f=s[6],v=s[1],S=s[4],M=s[7],R=s[2],b=s[5],C=s[8];return r[0]=a*E+o*v+l*R,r[3]=a*m+o*S+l*b,r[6]=a*f+o*M+l*C,r[1]=c*E+u*v+d*R,r[4]=c*m+u*S+d*b,r[7]=c*f+u*M+d*C,r[2]=h*E+p*v+g*R,r[5]=h*m+p*S+g*b,r[8]=h*f+p*M+g*C,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-n*r*u+n*o*l+s*r*c-s*a*l}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],d=u*a-o*c,h=o*l-u*r,p=c*r-a*l,g=t*d+n*h+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const E=1/g;return e[0]=d*E,e[1]=(s*c-u*n)*E,e[2]=(o*n-s*a)*E,e[3]=h*E,e[4]=(u*t-s*l)*E,e[5]=(s*r-o*t)*E,e[6]=p*E,e[7]=(n*l-c*t)*E,e[8]=(a*t-n*r)*E,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Da.makeScale(e,t)),this}rotate(e){return this.premultiply(Da.makeRotation(-e)),this}translate(e,t){return this.premultiply(Da.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Nl.prototype.isMatrix3=!0;let st=Nl;const Da=new st,wc=new st().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ac=new st().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Yd(){const i={enabled:!0,workingColorSpace:ha,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===yt&&(s.r=oi(s.r),s.g=oi(s.g),s.b=oi(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===yt&&(s.r=As(s.r),s.g=As(s.g),s.b=As(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Ei?ua:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return sl("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return sl("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[ha]:{primaries:e,whitePoint:n,transfer:ua,toXYZ:wc,fromXYZ:Ac,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Ft},outputColorSpaceConfig:{drawingBufferColorSpace:Ft}},[Ft]:{primaries:e,whitePoint:n,transfer:yt,toXYZ:wc,fromXYZ:Ac,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Ft}}}),i}const ut=Yd();function oi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function As(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let is;class qd{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{is===void 0&&(is=pr("canvas")),is.width=e.width,is.height=e.height;const s=is.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=is}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=pr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=oi(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(oi(t[n]/255)*255):t[n]=oi(t[n]);return{data:t,width:e.width,height:e.height}}else return Ke("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Zd=0;class wl{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Zd++}),this.uuid=ji(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Ua(s[a].image)):r.push(Ua(s[a]))}else r=Ua(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function Ua(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?qd.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Ke("Texture: Unable to serialize Texture."),{})}let Jd=0;const Na=new P;class Yt extends $i{constructor(e=Yt.DEFAULT_IMAGE,t=Yt.DEFAULT_MAPPING,n=rn,s=rn,r=jt,a=Wi,o=Dn,l=gn,c=Yt.DEFAULT_ANISOTROPY,u=Ei){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Jd++}),this.uuid=ji(),this.name="",this.source=new wl(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Me(0,0),this.repeat=new Me(1,1),this.center=new Me(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new st,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Na).x}get height(){return this.source.getSize(Na).y}get depth(){return this.source.getSize(Na).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){Ke(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){Ke(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Yh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Zi:e.x=e.x-Math.floor(e.x);break;case rn:e.x=e.x<0?0:1;break;case wo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Zi:e.y=e.y-Math.floor(e.y);break;case rn:e.y=e.y<0?0:1;break;case wo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Yt.DEFAULT_IMAGE=null;Yt.DEFAULT_MAPPING=Yh;Yt.DEFAULT_ANISOTROPY=1;const Fl=class Fl{constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const l=e.elements,c=l[0],u=l[4],d=l[8],h=l[1],p=l[5],g=l[9],E=l[2],m=l[6],f=l[10];if(Math.abs(u-h)<.01&&Math.abs(d-E)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+E)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const S=(c+1)/2,M=(p+1)/2,R=(f+1)/2,b=(u+h)/4,C=(d+E)/4,_=(g+m)/4;return S>M&&S>R?S<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(S),s=b/n,r=C/n):M>R?M<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),n=b/s,r=_/s):R<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(R),n=C/r,s=_/r),this.set(n,s,r,t),this}let v=Math.sqrt((m-g)*(m-g)+(d-E)*(d-E)+(h-u)*(h-u));return Math.abs(v)<.001&&(v=1),this.x=(m-g)/v,this.y=(d-E)/v,this.z=(h-u)/v,this.w=Math.acos((c+p+f-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=at(this.x,e.x,t.x),this.y=at(this.y,e.y,t.y),this.z=at(this.z,e.z,t.z),this.w=at(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=at(this.x,e,t),this.y=at(this.y,e,t),this.z=at(this.z,e,t),this.w=at(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(at(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Fl.prototype.isVector4=!0;let It=Fl;class Kd extends $i{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:jt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new It(0,0,e,t),this.scissorTest=!1,this.viewport=new It(0,0,e,t),this.textures=[];const s={width:e,height:t,depth:n.depth},r=new Yt(s),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:jt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new wl(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Wn extends Kd{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class eu extends Yt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Xt,this.minFilter=Xt,this.wrapR=rn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class $d extends Yt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Xt,this.minFilter=Xt,this.wrapR=rn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const pa=class pa{constructor(e,t,n,s,r,a,o,l,c,u,d,h,p,g,E,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c,u,d,h,p,g,E,m)}set(e,t,n,s,r,a,o,l,c,u,d,h,p,g,E,m){const f=this.elements;return f[0]=e,f[4]=t,f[8]=n,f[12]=s,f[1]=r,f[5]=a,f[9]=o,f[13]=l,f[2]=c,f[6]=u,f[10]=d,f[14]=h,f[3]=p,f[7]=g,f[11]=E,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new pa().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,n=e.elements,s=1/ss.setFromMatrixColumn(e,0).length(),r=1/ss.setFromMatrixColumn(e,1).length(),a=1/ss.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){const h=a*u,p=a*d,g=o*u,E=o*d;t[0]=l*u,t[4]=-l*d,t[8]=c,t[1]=p+g*c,t[5]=h-E*c,t[9]=-o*l,t[2]=E-h*c,t[6]=g+p*c,t[10]=a*l}else if(e.order==="YXZ"){const h=l*u,p=l*d,g=c*u,E=c*d;t[0]=h+E*o,t[4]=g*o-p,t[8]=a*c,t[1]=a*d,t[5]=a*u,t[9]=-o,t[2]=p*o-g,t[6]=E+h*o,t[10]=a*l}else if(e.order==="ZXY"){const h=l*u,p=l*d,g=c*u,E=c*d;t[0]=h-E*o,t[4]=-a*d,t[8]=g+p*o,t[1]=p+g*o,t[5]=a*u,t[9]=E-h*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const h=a*u,p=a*d,g=o*u,E=o*d;t[0]=l*u,t[4]=g*c-p,t[8]=h*c+E,t[1]=l*d,t[5]=E*c+h,t[9]=p*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const h=a*l,p=a*c,g=o*l,E=o*c;t[0]=l*u,t[4]=E-h*d,t[8]=g*d+p,t[1]=d,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=p*d+g,t[10]=h-E*d}else if(e.order==="XZY"){const h=a*l,p=a*c,g=o*l,E=o*c;t[0]=l*u,t[4]=-d,t[8]=c*u,t[1]=h*d+E,t[5]=a*u,t[9]=p*d-g,t[2]=g*d-p,t[6]=o*u,t[10]=E*d+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(jd,e,Qd)}lookAt(e,t,n){const s=this.elements;return fn.subVectors(e,t),fn.lengthSq()===0&&(fn.z=1),fn.normalize(),_i.crossVectors(n,fn),_i.lengthSq()===0&&(Math.abs(n.z)===1?fn.x+=1e-4:fn.z+=1e-4,fn.normalize(),_i.crossVectors(n,fn)),_i.normalize(),Rr.crossVectors(fn,_i),s[0]=_i.x,s[4]=Rr.x,s[8]=fn.x,s[1]=_i.y,s[5]=Rr.y,s[9]=fn.y,s[2]=_i.z,s[6]=Rr.z,s[10]=fn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],d=n[5],h=n[9],p=n[13],g=n[2],E=n[6],m=n[10],f=n[14],v=n[3],S=n[7],M=n[11],R=n[15],b=s[0],C=s[4],_=s[8],w=s[12],D=s[1],L=s[5],O=s[9],X=s[13],Y=s[2],N=s[6],G=s[10],k=s[14],ne=s[3],oe=s[7],ge=s[11],Ae=s[15];return r[0]=a*b+o*D+l*Y+c*ne,r[4]=a*C+o*L+l*N+c*oe,r[8]=a*_+o*O+l*G+c*ge,r[12]=a*w+o*X+l*k+c*Ae,r[1]=u*b+d*D+h*Y+p*ne,r[5]=u*C+d*L+h*N+p*oe,r[9]=u*_+d*O+h*G+p*ge,r[13]=u*w+d*X+h*k+p*Ae,r[2]=g*b+E*D+m*Y+f*ne,r[6]=g*C+E*L+m*N+f*oe,r[10]=g*_+E*O+m*G+f*ge,r[14]=g*w+E*X+m*k+f*Ae,r[3]=v*b+S*D+M*Y+R*ne,r[7]=v*C+S*L+M*N+R*oe,r[11]=v*_+S*O+M*G+R*ge,r[15]=v*w+S*X+M*k+R*Ae,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],d=e[6],h=e[10],p=e[14],g=e[3],E=e[7],m=e[11],f=e[15],v=l*p-c*h,S=o*p-c*d,M=o*h-l*d,R=a*p-c*u,b=a*h-l*u,C=a*d-o*u;return t*(E*v-m*S+f*M)-n*(g*v-m*R+f*b)+s*(g*S-E*R+f*C)-r*(g*M-E*b+m*C)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],d=e[9],h=e[10],p=e[11],g=e[12],E=e[13],m=e[14],f=e[15],v=t*o-n*a,S=t*l-s*a,M=t*c-r*a,R=n*l-s*o,b=n*c-r*o,C=s*c-r*l,_=u*E-d*g,w=u*m-h*g,D=u*f-p*g,L=d*m-h*E,O=d*f-p*E,X=h*f-p*m,Y=v*X-S*O+M*L+R*D-b*w+C*_;if(Y===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const N=1/Y;return e[0]=(o*X-l*O+c*L)*N,e[1]=(s*O-n*X-r*L)*N,e[2]=(E*C-m*b+f*R)*N,e[3]=(h*b-d*C-p*R)*N,e[4]=(l*D-a*X-c*w)*N,e[5]=(t*X-s*D+r*w)*N,e[6]=(m*M-g*C-f*S)*N,e[7]=(u*C-h*M+p*S)*N,e[8]=(a*O-o*D+c*_)*N,e[9]=(n*D-t*O-r*_)*N,e[10]=(g*b-E*M+f*v)*N,e[11]=(d*M-u*b-p*v)*N,e[12]=(o*w-a*L-l*_)*N,e[13]=(t*L-n*w+s*_)*N,e[14]=(E*S-g*R-m*v)*N,e[15]=(u*R-d*S+h*v)*N,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,u=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,u*o+n,u*l-s*a,0,c*l-s*o,u*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,u=a+a,d=o+o,h=r*c,p=r*u,g=r*d,E=a*u,m=a*d,f=o*d,v=l*c,S=l*u,M=l*d,R=n.x,b=n.y,C=n.z;return s[0]=(1-(E+f))*R,s[1]=(p+M)*R,s[2]=(g-S)*R,s[3]=0,s[4]=(p-M)*b,s[5]=(1-(h+f))*b,s[6]=(m+v)*b,s[7]=0,s[8]=(g+S)*C,s[9]=(m-v)*C,s[10]=(1-(h+E))*C,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];const r=this.determinant();if(r===0)return n.set(1,1,1),t.identity(),this;let a=ss.set(s[0],s[1],s[2]).length();const o=ss.set(s[4],s[5],s[6]).length(),l=ss.set(s[8],s[9],s[10]).length();r<0&&(a=-a),Rn.copy(this);const c=1/a,u=1/o,d=1/l;return Rn.elements[0]*=c,Rn.elements[1]*=c,Rn.elements[2]*=c,Rn.elements[4]*=u,Rn.elements[5]*=u,Rn.elements[6]*=u,Rn.elements[8]*=d,Rn.elements[9]*=d,Rn.elements[10]*=d,t.setFromRotationMatrix(Rn),n.x=a,n.y=o,n.z=l,this}makePerspective(e,t,n,s,r,a,o=Vn,l=!1){const c=this.elements,u=2*r/(t-e),d=2*r/(n-s),h=(t+e)/(t-e),p=(n+s)/(n-s);let g,E;if(l)g=r/(a-r),E=a*r/(a-r);else if(o===Vn)g=-(a+r)/(a-r),E=-2*a*r/(a-r);else if(o===fr)g=-a/(a-r),E=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=d,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=E,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=Vn,l=!1){const c=this.elements,u=2/(t-e),d=2/(n-s),h=-(t+e)/(t-e),p=-(n+s)/(n-s);let g,E;if(l)g=1/(a-r),E=a/(a-r);else if(o===Vn)g=-2/(a-r),E=-(a+r)/(a-r);else if(o===fr)g=-1/(a-r),E=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=d,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=g,c[14]=E,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};pa.prototype.isMatrix4=!0;let Et=pa;const ss=new P,Rn=new Et,jd=new P(0,0,0),Qd=new P(1,1,1),_i=new P,Rr=new P,fn=new P,Rc=new Et,Cc=new hi;class Wt{constructor(e=0,t=0,n=0,s=Wt.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],u=s[9],d=s[2],h=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(at(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-at(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(at(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-at(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(at(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-at(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,p),this._y=0);break;default:Ke("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Rc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Rc,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Cc.setFromEuler(this),this.setFromQuaternion(Cc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Wt.DEFAULT_ORDER="XYZ";class tu{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let ef=0;const Pc=new P,rs=new hi,Qn=new Et,Cr=new P,qs=new P,tf=new P,nf=new hi,Lc=new P(1,0,0),Ic=new P(0,1,0),Dc=new P(0,0,1),Uc={type:"added"},sf={type:"removed"},as={type:"childadded",child:null},Fa={type:"childremoved",child:null};class Ot extends $i{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ef++}),this.uuid=ji(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ot.DEFAULT_UP.clone();const e=new P,t=new Wt,n=new hi,s=new P(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Et},normalMatrix:{value:new st}}),this.matrix=new Et,this.matrixWorld=new Et,this.matrixAutoUpdate=Ot.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ot.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new tu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return rs.setFromAxisAngle(e,t),this.quaternion.multiply(rs),this}rotateOnWorldAxis(e,t){return rs.setFromAxisAngle(e,t),this.quaternion.premultiply(rs),this}rotateX(e){return this.rotateOnAxis(Lc,e)}rotateY(e){return this.rotateOnAxis(Ic,e)}rotateZ(e){return this.rotateOnAxis(Dc,e)}translateOnAxis(e,t){return Pc.copy(e).applyQuaternion(this.quaternion),this.position.add(Pc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Lc,e)}translateY(e){return this.translateOnAxis(Ic,e)}translateZ(e){return this.translateOnAxis(Dc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Qn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Cr.copy(e):Cr.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),qs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Qn.lookAt(qs,Cr,this.up):Qn.lookAt(Cr,qs,this.up),this.quaternion.setFromRotationMatrix(Qn),s&&(Qn.extractRotation(s.matrixWorld),rs.setFromRotationMatrix(Qn),this.quaternion.premultiply(rs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(ft("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Uc),as.child=e,this.dispatchEvent(as),as.child=null):ft("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(sf),Fa.child=e,this.dispatchEvent(Fa),Fa.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Qn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Qn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Qn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Uc),as.child=e,this.dispatchEvent(as),as.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qs,e,tf),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qs,nf,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),this.static!==!1&&(s.static=this.static),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];r(e.shapes,d)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),d=a(e.shapes),h=a(e.skeletons),p=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),d.length>0&&(n.shapes=d),h.length>0&&(n.skeletons=h),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}Ot.DEFAULT_UP=new P(0,1,0);Ot.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ot.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class $t extends Ot{constructor(){super(),this.isGroup=!0,this.type="Group"}}const rf={type:"move"};class Oa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new $t,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new $t,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new $t,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const E of e.hand.values()){const m=t.getJointPose(E,n),f=this._getHandJoint(c,E);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],h=u.position.distanceTo(d.position),p=.02,g=.005;c.inputState.pinching&&h>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(rf)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new $t;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const nu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},xi={h:0,s:0,l:0},Pr={h:0,s:0,l:0};function Ba(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class lt{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ft){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ut.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=ut.workingColorSpace){return this.r=e,this.g=t,this.b=n,ut.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=ut.workingColorSpace){if(e=Tl(e,1),t=at(t,0,1),n=at(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=Ba(a,r,e+1/3),this.g=Ba(a,r,e),this.b=Ba(a,r,e-1/3)}return ut.colorSpaceToWorking(this,s),this}setStyle(e,t=Ft){function n(r){r!==void 0&&parseFloat(r)<1&&Ke("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Ke("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);Ke("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ft){const n=nu[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Ke("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=oi(e.r),this.g=oi(e.g),this.b=oi(e.b),this}copyLinearToSRGB(e){return this.r=As(e.r),this.g=As(e.g),this.b=As(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ft){return ut.workingToColorSpace(Zt.copy(this),e),Math.round(at(Zt.r*255,0,255))*65536+Math.round(at(Zt.g*255,0,255))*256+Math.round(at(Zt.b*255,0,255))}getHexString(e=Ft){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ut.workingColorSpace){ut.workingToColorSpace(Zt.copy(this),t);const n=Zt.r,s=Zt.g,r=Zt.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const d=a-o;switch(c=u<=.5?d/(a+o):d/(2-a-o),a){case n:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-n)/d+2;break;case r:l=(n-s)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=ut.workingColorSpace){return ut.workingToColorSpace(Zt.copy(this),t),e.r=Zt.r,e.g=Zt.g,e.b=Zt.b,e}getStyle(e=Ft){ut.workingToColorSpace(Zt.copy(this),e);const t=Zt.r,n=Zt.g,s=Zt.b;return e!==Ft?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(xi),this.setHSL(xi.h+e,xi.s+t,xi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(xi),e.getHSL(Pr);const n=ar(xi.h,Pr.h,t),s=ar(xi.s,Pr.s,t),r=ar(xi.l,Pr.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Zt=new lt;lt.NAMES=nu;class Nc extends Ot{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Wt,this.environmentIntensity=1,this.environmentRotation=new Wt,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Cn=new P,ei=new P,za=new P,ti=new P,os=new P,ls=new P,Fc=new P,Ga=new P,Ha=new P,Va=new P,ka=new It,Wa=new It,Xa=new It;class Ln{constructor(e=new P,t=new P,n=new P){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Cn.subVectors(e,t),s.cross(Cn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Cn.subVectors(s,t),ei.subVectors(n,t),za.subVectors(e,t);const a=Cn.dot(Cn),o=Cn.dot(ei),l=Cn.dot(za),c=ei.dot(ei),u=ei.dot(za),d=a*c-o*o;if(d===0)return r.set(0,0,0),null;const h=1/d,p=(c*l-o*u)*h,g=(a*u-o*l)*h;return r.set(1-p-g,g,p)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,ti)===null?!1:ti.x>=0&&ti.y>=0&&ti.x+ti.y<=1}static getInterpolation(e,t,n,s,r,a,o,l){return this.getBarycoord(e,t,n,s,ti)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,ti.x),l.addScaledVector(a,ti.y),l.addScaledVector(o,ti.z),l)}static getInterpolatedAttribute(e,t,n,s,r,a){return ka.setScalar(0),Wa.setScalar(0),Xa.setScalar(0),ka.fromBufferAttribute(e,t),Wa.fromBufferAttribute(e,n),Xa.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(ka,r.x),a.addScaledVector(Wa,r.y),a.addScaledVector(Xa,r.z),a}static isFrontFacing(e,t,n,s){return Cn.subVectors(n,t),ei.subVectors(e,t),Cn.cross(ei).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Cn.subVectors(this.c,this.b),ei.subVectors(this.a,this.b),Cn.cross(ei).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ln.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Ln.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return Ln.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return Ln.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ln.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let a,o;os.subVectors(s,n),ls.subVectors(r,n),Ga.subVectors(e,n);const l=os.dot(Ga),c=ls.dot(Ga);if(l<=0&&c<=0)return t.copy(n);Ha.subVectors(e,s);const u=os.dot(Ha),d=ls.dot(Ha);if(u>=0&&d<=u)return t.copy(s);const h=l*d-u*c;if(h<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(n).addScaledVector(os,a);Va.subVectors(e,r);const p=os.dot(Va),g=ls.dot(Va);if(g>=0&&p<=g)return t.copy(r);const E=p*c-l*g;if(E<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(n).addScaledVector(ls,o);const m=u*g-p*d;if(m<=0&&d-u>=0&&p-g>=0)return Fc.subVectors(r,s),o=(d-u)/(d-u+(p-g)),t.copy(s).addScaledVector(Fc,o);const f=1/(m+E+h);return a=E*f,o=h*f,t.copy(n).addScaledVector(os,a).addScaledVector(ls,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class ui{constructor(e=new P(1/0,1/0,1/0),t=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Pn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Pn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Pn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Pn):Pn.fromBufferAttribute(r,a),Pn.applyMatrix4(e.matrixWorld),this.expandByPoint(Pn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Lr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Lr.copy(n.boundingBox)),Lr.applyMatrix4(e.matrixWorld),this.union(Lr)}const s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Pn),Pn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Zs),Ir.subVectors(this.max,Zs),cs.subVectors(e.a,Zs),hs.subVectors(e.b,Zs),us.subVectors(e.c,Zs),vi.subVectors(hs,cs),Mi.subVectors(us,hs),Fi.subVectors(cs,us);let t=[0,-vi.z,vi.y,0,-Mi.z,Mi.y,0,-Fi.z,Fi.y,vi.z,0,-vi.x,Mi.z,0,-Mi.x,Fi.z,0,-Fi.x,-vi.y,vi.x,0,-Mi.y,Mi.x,0,-Fi.y,Fi.x,0];return!Ya(t,cs,hs,us,Ir)||(t=[1,0,0,0,1,0,0,0,1],!Ya(t,cs,hs,us,Ir))?!1:(Dr.crossVectors(vi,Mi),t=[Dr.x,Dr.y,Dr.z],Ya(t,cs,hs,us,Ir))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Pn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Pn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ni[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ni[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ni[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ni[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ni[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ni[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ni[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ni[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ni),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const ni=[new P,new P,new P,new P,new P,new P,new P,new P],Pn=new P,Lr=new ui,cs=new P,hs=new P,us=new P,vi=new P,Mi=new P,Fi=new P,Zs=new P,Ir=new P,Dr=new P,Oi=new P;function Ya(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Oi.fromArray(i,r);const o=s.x*Math.abs(Oi.x)+s.y*Math.abs(Oi.y)+s.z*Math.abs(Oi.z),l=e.dot(Oi),c=t.dot(Oi),u=n.dot(Oi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const Dt=new P,Ur=new Me;let af=0;class Un extends $i{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:af++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=vc,this.updateRanges=[],this.gpuType=In,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ur.fromBufferAttribute(this,t),Ur.applyMatrix3(e),this.setXY(t,Ur.x,Ur.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Dt.fromBufferAttribute(this,t),Dt.applyMatrix3(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Dt.fromBufferAttribute(this,t),Dt.applyMatrix4(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Dt.fromBufferAttribute(this,t),Dt.applyNormalMatrix(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Dt.fromBufferAttribute(this,t),Dt.transformDirection(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Ss(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=nn(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ss(t,this.array)),t}setX(e,t){return this.normalized&&(t=nn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ss(t,this.array)),t}setY(e,t){return this.normalized&&(t=nn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ss(t,this.array)),t}setZ(e,t){return this.normalized&&(t=nn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ss(t,this.array)),t}setW(e,t){return this.normalized&&(t=nn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=nn(t,this.array),n=nn(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=nn(t,this.array),n=nn(n,this.array),s=nn(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=nn(t,this.array),n=nn(n,this.array),s=nn(s,this.array),r=nn(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==vc&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class iu extends Un{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class su extends Un{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class bt extends Un{constructor(e,t,n){super(new Float32Array(e),t,n)}}const of=new ui,Js=new P,qa=new P;class xr{constructor(e=new P,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):of.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Js.subVectors(e,this.center);const t=Js.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Js,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(qa.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Js.copy(e.center).add(qa)),this.expandByPoint(Js.copy(e.center).sub(qa))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let lf=0;const Sn=new Et,Za=new Ot,ds=new P,pn=new ui,Ks=new ui,Vt=new P;class Qt extends $i{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:lf++}),this.uuid=ji(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(wd(e)?su:iu)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new st().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Sn.makeRotationFromQuaternion(e),this.applyMatrix4(Sn),this}rotateX(e){return Sn.makeRotationX(e),this.applyMatrix4(Sn),this}rotateY(e){return Sn.makeRotationY(e),this.applyMatrix4(Sn),this}rotateZ(e){return Sn.makeRotationZ(e),this.applyMatrix4(Sn),this}translate(e,t,n){return Sn.makeTranslation(e,t,n),this.applyMatrix4(Sn),this}scale(e,t,n){return Sn.makeScale(e,t,n),this.applyMatrix4(Sn),this}lookAt(e){return Za.lookAt(e),Za.updateMatrix(),this.applyMatrix4(Za.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ds).negate(),this.translate(ds.x,ds.y,ds.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let s=0,r=e.length;s<r;s++){const a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new bt(n,3))}else{const n=Math.min(e.length,t.count);for(let s=0;s<n;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Ke("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ui);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ft("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];pn.setFromBufferAttribute(r),this.morphTargetsRelative?(Vt.addVectors(this.boundingBox.min,pn.min),this.boundingBox.expandByPoint(Vt),Vt.addVectors(this.boundingBox.max,pn.max),this.boundingBox.expandByPoint(Vt)):(this.boundingBox.expandByPoint(pn.min),this.boundingBox.expandByPoint(pn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ft('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new xr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ft("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(e){const n=this.boundingSphere.center;if(pn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];Ks.setFromBufferAttribute(o),this.morphTargetsRelative?(Vt.addVectors(pn.min,Ks.min),pn.expandByPoint(Vt),Vt.addVectors(pn.max,Ks.max),pn.expandByPoint(Vt)):(pn.expandByPoint(Ks.min),pn.expandByPoint(Ks.max))}pn.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)Vt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Vt));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Vt.fromBufferAttribute(o,c),l&&(ds.fromBufferAttribute(e,c),Vt.add(ds)),s=Math.max(s,n.distanceToSquared(Vt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&ft('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){ft("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Un(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let _=0;_<n.count;_++)o[_]=new P,l[_]=new P;const c=new P,u=new P,d=new P,h=new Me,p=new Me,g=new Me,E=new P,m=new P;function f(_,w,D){c.fromBufferAttribute(n,_),u.fromBufferAttribute(n,w),d.fromBufferAttribute(n,D),h.fromBufferAttribute(r,_),p.fromBufferAttribute(r,w),g.fromBufferAttribute(r,D),u.sub(c),d.sub(c),p.sub(h),g.sub(h);const L=1/(p.x*g.y-g.x*p.y);isFinite(L)&&(E.copy(u).multiplyScalar(g.y).addScaledVector(d,-p.y).multiplyScalar(L),m.copy(d).multiplyScalar(p.x).addScaledVector(u,-g.x).multiplyScalar(L),o[_].add(E),o[w].add(E),o[D].add(E),l[_].add(m),l[w].add(m),l[D].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let _=0,w=v.length;_<w;++_){const D=v[_],L=D.start,O=D.count;for(let X=L,Y=L+O;X<Y;X+=3)f(e.getX(X+0),e.getX(X+1),e.getX(X+2))}const S=new P,M=new P,R=new P,b=new P;function C(_){R.fromBufferAttribute(s,_),b.copy(R);const w=o[_];S.copy(w),S.sub(R.multiplyScalar(R.dot(w))).normalize(),M.crossVectors(b,w);const L=M.dot(l[_])<0?-1:1;a.setXYZW(_,S.x,S.y,S.z,L)}for(let _=0,w=v.length;_<w;++_){const D=v[_],L=D.start,O=D.count;for(let X=L,Y=L+O;X<Y;X+=3)C(e.getX(X+0)),C(e.getX(X+1)),C(e.getX(X+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Un(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,p=n.count;h<p;h++)n.setXYZ(h,0,0,0);const s=new P,r=new P,a=new P,o=new P,l=new P,c=new P,u=new P,d=new P;if(e)for(let h=0,p=e.count;h<p;h+=3){const g=e.getX(h+0),E=e.getX(h+1),m=e.getX(h+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,E),a.fromBufferAttribute(t,m),u.subVectors(a,r),d.subVectors(s,r),u.cross(d),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,E),c.fromBufferAttribute(n,m),o.add(u),l.add(u),c.add(u),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(E,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,p=t.count;h<p;h+=3)s.fromBufferAttribute(t,h+0),r.fromBufferAttribute(t,h+1),a.fromBufferAttribute(t,h+2),u.subVectors(a,r),d.subVectors(s,r),u.cross(d),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Vt.fromBufferAttribute(e,t),Vt.normalize(),e.setXYZ(t,Vt.x,Vt.y,Vt.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,d=o.normalized,h=new c.constructor(l.length*u);let p=0,g=0;for(let E=0,m=l.length;E<m;E++){o.isInterleavedBufferAttribute?p=l[E]*o.data.stride+o.offset:p=l[E]*u;for(let f=0;f<u;f++)h[g++]=c[p++]}return new Un(h,u,d)}if(this.index===null)return Ke("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Qt,n=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=e(l,n);t.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let u=0,d=c.length;u<d;u++){const h=c[u],p=e(h,n);l.push(p)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,h=c.length;d<h;d++){const p=c[d];u.push(p.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const s=e.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],d=r[c];for(let h=0,p=d.length;h<p;h++)u.push(d[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let cf=0;class vr extends $i{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:cf++}),this.uuid=ji(),this.name="",this.type="Material",this.blending=ws,this.side=Xn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=_o,this.blendDst=xo,this.blendEquation=Hi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new lt(0,0,0),this.blendAlpha=0,this.depthFunc=Rs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=xc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ns,this.stencilZFail=ns,this.stencilZPass=ns,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){Ke(`Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){Ke(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ws&&(n.blending=this.blending),this.side!==Xn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==_o&&(n.blendSrc=this.blendSrc),this.blendDst!==xo&&(n.blendDst=this.blendDst),this.blendEquation!==Hi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Rs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==xc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ns&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ns&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ns&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(t){const r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const ii=new P,Ja=new P,Nr=new P,Si=new P,Ka=new P,Fr=new P,$a=new P;class hf{constructor(e=new P,t=new P(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ii)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=ii.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ii.copy(this.origin).addScaledVector(this.direction,t),ii.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Ja.copy(e).add(t).multiplyScalar(.5),Nr.copy(t).sub(e).normalize(),Si.copy(this.origin).sub(Ja);const r=e.distanceTo(t)*.5,a=-this.direction.dot(Nr),o=Si.dot(this.direction),l=-Si.dot(Nr),c=Si.lengthSq(),u=Math.abs(1-a*a);let d,h,p,g;if(u>0)if(d=a*l-o,h=a*o-l,g=r*u,d>=0)if(h>=-g)if(h<=g){const E=1/u;d*=E,h*=E,p=d*(d+a*h+2*o)+h*(a*d+h+2*l)+c}else h=r,d=Math.max(0,-(a*h+o)),p=-d*d+h*(h+2*l)+c;else h=-r,d=Math.max(0,-(a*h+o)),p=-d*d+h*(h+2*l)+c;else h<=-g?(d=Math.max(0,-(-a*r+o)),h=d>0?-r:Math.min(Math.max(-r,-l),r),p=-d*d+h*(h+2*l)+c):h<=g?(d=0,h=Math.min(Math.max(-r,-l),r),p=h*(h+2*l)+c):(d=Math.max(0,-(a*r+o)),h=d>0?r:Math.min(Math.max(-r,-l),r),p=-d*d+h*(h+2*l)+c);else h=a>0?-r:r,d=Math.max(0,-(a*h+o)),p=-d*d+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Ja).addScaledVector(Nr,h),p}intersectSphere(e,t){ii.subVectors(e.center,this.origin);const n=ii.dot(this.direction),s=ii.dot(ii)-n*n,r=e.radius*e.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return c>=0?(n=(e.min.x-h.x)*c,s=(e.max.x-h.x)*c):(n=(e.max.x-h.x)*c,s=(e.min.x-h.x)*c),u>=0?(r=(e.min.y-h.y)*u,a=(e.max.y-h.y)*u):(r=(e.max.y-h.y)*u,a=(e.min.y-h.y)*u),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),d>=0?(o=(e.min.z-h.z)*d,l=(e.max.z-h.z)*d):(o=(e.max.z-h.z)*d,l=(e.min.z-h.z)*d),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,ii)!==null}intersectTriangle(e,t,n,s,r){Ka.subVectors(t,e),Fr.subVectors(n,e),$a.crossVectors(Ka,Fr);let a=this.direction.dot($a),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Si.subVectors(this.origin,e);const l=o*this.direction.dot(Fr.crossVectors(Si,Fr));if(l<0)return null;const c=o*this.direction.dot(Ka.cross(Si));if(c<0||l+c>a)return null;const u=-o*Si.dot($a);return u<0?null:this.at(u/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Al extends vr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new lt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Wt,this.combine=zh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Oc=new Et,Bi=new hf,Or=new xr,Bc=new P,Br=new P,zr=new P,Gr=new P,ja=new P,Hr=new P,zc=new P,Vr=new P;class xt extends Ot{constructor(e=new Qt,t=new Al){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const o=this.morphTargetInfluences;if(r&&o){Hr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=o[l],d=r[l];u!==0&&(ja.fromBufferAttribute(d,e),a?Hr.addScaledVector(ja,u):Hr.addScaledVector(ja.sub(t),u))}t.add(Hr)}return t}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Or.copy(n.boundingSphere),Or.applyMatrix4(r),Bi.copy(e.ray).recast(e.near),!(Or.containsPoint(Bi.origin)===!1&&(Bi.intersectSphere(Or,Bc)===null||Bi.origin.distanceToSquared(Bc)>(e.far-e.near)**2))&&(Oc.copy(r).invert(),Bi.copy(e.ray).applyMatrix4(Oc),!(n.boundingBox!==null&&Bi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Bi)))}_computeIntersections(e,t,n){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,d=r.attributes.normal,h=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,E=h.length;g<E;g++){const m=h[g],f=a[m.materialIndex],v=Math.max(m.start,p.start),S=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let M=v,R=S;M<R;M+=3){const b=o.getX(M),C=o.getX(M+1),_=o.getX(M+2);s=kr(this,f,e,n,c,u,d,b,C,_),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,p.start),E=Math.min(o.count,p.start+p.count);for(let m=g,f=E;m<f;m+=3){const v=o.getX(m),S=o.getX(m+1),M=o.getX(m+2);s=kr(this,a,e,n,c,u,d,v,S,M),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,E=h.length;g<E;g++){const m=h[g],f=a[m.materialIndex],v=Math.max(m.start,p.start),S=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let M=v,R=S;M<R;M+=3){const b=M,C=M+1,_=M+2;s=kr(this,f,e,n,c,u,d,b,C,_),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,p.start),E=Math.min(l.count,p.start+p.count);for(let m=g,f=E;m<f;m+=3){const v=m,S=m+1,M=m+2;s=kr(this,a,e,n,c,u,d,v,S,M),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function uf(i,e,t,n,s,r,a,o){let l;if(e.side===cn?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,e.side===Xn,o),l===null)return null;Vr.copy(o),Vr.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(Vr);return c<t.near||c>t.far?null:{distance:c,point:Vr.clone(),object:i}}function kr(i,e,t,n,s,r,a,o,l,c){i.getVertexPosition(o,Br),i.getVertexPosition(l,zr),i.getVertexPosition(c,Gr);const u=uf(i,e,t,n,Br,zr,Gr,zc);if(u){const d=new P;Ln.getBarycoord(zc,Br,zr,Gr,d),s&&(u.uv=Ln.getInterpolatedAttribute(s,o,l,c,d,new Me)),r&&(u.uv1=Ln.getInterpolatedAttribute(r,o,l,c,d,new Me)),a&&(u.normal=Ln.getInterpolatedAttribute(a,o,l,c,d,new P),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a:o,b:l,c,normal:new P,materialIndex:0};Ln.getNormal(Br,zr,Gr,h.normal),u.face=h,u.barycoord=d}return u}class ru extends Yt{constructor(e=null,t=1,n=1,s,r,a,o,l,c=Xt,u=Xt,d,h){super(null,a,o,l,c,u,s,r,d,h),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Gc extends Un{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const fs=new Et,Hc=new Et,Wr=[],Vc=new ui,df=new Et,$s=new xt,js=new xr;class ps extends xt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Gc(new Float32Array(n*16),16),this.previousInstanceMatrix=null,this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,df)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new ui),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,fs),Vc.copy(e.boundingBox).applyMatrix4(fs),this.boundingBox.union(Vc)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new xr),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,fs),js.copy(e.boundingSphere).applyMatrix4(fs),this.boundingSphere.union(js)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.previousInstanceMatrix!==null&&(this.previousInstanceMatrix=e.previousInstanceMatrix.clone()),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(e,t){const n=this.matrixWorld,s=this.count;if($s.geometry=this.geometry,$s.material=this.material,$s.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),js.copy(this.boundingSphere),js.applyMatrix4(n),e.ray.intersectsSphere(js)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,fs),Hc.multiplyMatrices(n,fs),$s.matrixWorld=Hc,$s.raycast(e,Wr);for(let a=0,o=Wr.length;a<o;a++){const l=Wr[a];l.instanceId=r,l.object=this,t.push(l)}Wr.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Gc(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){const n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new ru(new Float32Array(s*this.count),s,this.count,vl,In));const r=this.morphTexture.source.data.data;let a=0;for(let c=0;c<n.length;c++)a+=n[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=s*e;return r[l]=o,r.set(n,l+1),this}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Qa=new P,ff=new P,pf=new st;class Gi{constructor(e=new P(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=Qa.subVectors(n,t).cross(ff.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){const s=e.delta(Qa),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||pf.getNormalMatrix(e),s=this.coplanarPoint(Qa).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const zi=new xr,mf=new Me(.5,.5),Xr=new P;class Rl{constructor(e=new Gi,t=new Gi,n=new Gi,s=new Gi,r=new Gi,a=new Gi){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Vn,n=!1){const s=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],u=r[4],d=r[5],h=r[6],p=r[7],g=r[8],E=r[9],m=r[10],f=r[11],v=r[12],S=r[13],M=r[14],R=r[15];if(s[0].setComponents(c-a,p-u,f-g,R-v).normalize(),s[1].setComponents(c+a,p+u,f+g,R+v).normalize(),s[2].setComponents(c+o,p+d,f+E,R+S).normalize(),s[3].setComponents(c-o,p-d,f-E,R-S).normalize(),n)s[4].setComponents(l,h,m,M).normalize(),s[5].setComponents(c-l,p-h,f-m,R-M).normalize();else if(s[4].setComponents(c-l,p-h,f-m,R-M).normalize(),t===Vn)s[5].setComponents(c+l,p+h,f+m,R+M).normalize();else if(t===fr)s[5].setComponents(l,h,m,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),zi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),zi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(zi)}intersectsSprite(e){zi.center.set(0,0,0);const t=mf.distanceTo(e.center);return zi.radius=.7071067811865476+t,zi.applyMatrix4(e.matrixWorld),this.intersectsSphere(zi)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(Xr.x=s.normal.x>0?e.max.x:e.min.x,Xr.y=s.normal.y>0?e.max.y:e.min.y,Xr.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Xr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class au extends Yt{constructor(e=[],t=qi,n,s,r,a,o,l,c,u){super(e,t,n,s,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class ga extends Yt{constructor(e,t,n,s,r,a,o,l,c){super(e,t,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Ls extends Yt{constructor(e,t,n=Yn,s,r,a,o=Xt,l=Xt,c,u=ci,d=1){if(u!==ci&&u!==Xi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:e,height:t,depth:d};super(h,s,r,a,o,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new wl(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class gf extends Ls{constructor(e,t=Yn,n=qi,s,r,a=Xt,o=Xt,l,c=ci){const u={width:e,height:e,depth:1},d=[u,u,u,u,u,u];super(e,e,t,n,s,r,a,o,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class ou extends Yt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Us extends Qt{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],u=[],d=[];let h=0,p=0;g("z","y","x",-1,-1,n,t,e,a,r,0),g("z","y","x",1,-1,n,t,-e,a,r,1),g("x","z","y",1,1,e,n,t,s,a,2),g("x","z","y",1,-1,e,n,-t,s,a,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new bt(c,3)),this.setAttribute("normal",new bt(u,3)),this.setAttribute("uv",new bt(d,2));function g(E,m,f,v,S,M,R,b,C,_,w){const D=M/C,L=R/_,O=M/2,X=R/2,Y=b/2,N=C+1,G=_+1;let k=0,ne=0;const oe=new P;for(let ge=0;ge<G;ge++){const Ae=ge*L-X;for(let Ie=0;Ie<N;Ie++){const $e=Ie*D-O;oe[E]=$e*v,oe[m]=Ae*S,oe[f]=Y,c.push(oe.x,oe.y,oe.z),oe[E]=0,oe[m]=0,oe[f]=b>0?1:-1,u.push(oe.x,oe.y,oe.z),d.push(Ie/C),d.push(1-ge/_),k+=1}}for(let ge=0;ge<_;ge++)for(let Ae=0;Ae<C;Ae++){const Ie=h+Ae+N*ge,$e=h+Ae+N*(ge+1),ot=h+(Ae+1)+N*(ge+1),qe=h+(Ae+1)+N*ge;l.push(Ie,$e,qe),l.push($e,ot,qe),ne+=6}o.addGroup(p,ne,w),p+=ne,h+=k}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Us(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class kt extends Qt{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const u=[],d=[],h=[],p=[];let g=0;const E=[],m=n/2;let f=0;v(),a===!1&&(e>0&&S(!0),t>0&&S(!1)),this.setIndex(u),this.setAttribute("position",new bt(d,3)),this.setAttribute("normal",new bt(h,3)),this.setAttribute("uv",new bt(p,2));function v(){const M=new P,R=new P;let b=0;const C=(t-e)/n;for(let _=0;_<=r;_++){const w=[],D=_/r,L=D*(t-e)+e;for(let O=0;O<=s;O++){const X=O/s,Y=X*l+o,N=Math.sin(Y),G=Math.cos(Y);R.x=L*N,R.y=-D*n+m,R.z=L*G,d.push(R.x,R.y,R.z),M.set(N,C,G).normalize(),h.push(M.x,M.y,M.z),p.push(X,1-D),w.push(g++)}E.push(w)}for(let _=0;_<s;_++)for(let w=0;w<r;w++){const D=E[w][_],L=E[w+1][_],O=E[w+1][_+1],X=E[w][_+1];(e>0||w!==0)&&(u.push(D,L,X),b+=3),(t>0||w!==r-1)&&(u.push(L,O,X),b+=3)}c.addGroup(f,b,0),f+=b}function S(M){const R=g,b=new Me,C=new P;let _=0;const w=M===!0?e:t,D=M===!0?1:-1;for(let O=1;O<=s;O++)d.push(0,m*D,0),h.push(0,D,0),p.push(.5,.5),g++;const L=g;for(let O=0;O<=s;O++){const Y=O/s*l+o,N=Math.cos(Y),G=Math.sin(Y);C.x=w*G,C.y=m*D,C.z=w*N,d.push(C.x,C.y,C.z),h.push(0,D,0),b.x=N*.5+.5,b.y=G*.5*D+.5,p.push(b.x,b.y),g++}for(let O=0;O<s;O++){const X=R+O,Y=L+O;M===!0?u.push(Y,Y+1,X):u.push(Y+1,Y,X),_+=3}c.addGroup(f,_,M===!0?1:2),f+=_}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new kt(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class or extends kt{constructor(e=1,t=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new or(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Cl extends Qt{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};const r=[],a=[];o(s),c(n),u(),this.setAttribute("position",new bt(r,3)),this.setAttribute("normal",new bt(r.slice(),3)),this.setAttribute("uv",new bt(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(v){const S=new P,M=new P,R=new P;for(let b=0;b<t.length;b+=3)p(t[b+0],S),p(t[b+1],M),p(t[b+2],R),l(S,M,R,v)}function l(v,S,M,R){const b=R+1,C=[];for(let _=0;_<=b;_++){C[_]=[];const w=v.clone().lerp(M,_/b),D=S.clone().lerp(M,_/b),L=b-_;for(let O=0;O<=L;O++)O===0&&_===b?C[_][O]=w:C[_][O]=w.clone().lerp(D,O/L)}for(let _=0;_<b;_++)for(let w=0;w<2*(b-_)-1;w++){const D=Math.floor(w/2);w%2===0?(h(C[_][D+1]),h(C[_+1][D]),h(C[_][D])):(h(C[_][D+1]),h(C[_+1][D+1]),h(C[_+1][D]))}}function c(v){const S=new P;for(let M=0;M<r.length;M+=3)S.x=r[M+0],S.y=r[M+1],S.z=r[M+2],S.normalize().multiplyScalar(v),r[M+0]=S.x,r[M+1]=S.y,r[M+2]=S.z}function u(){const v=new P;for(let S=0;S<r.length;S+=3){v.x=r[S+0],v.y=r[S+1],v.z=r[S+2];const M=m(v)/2/Math.PI+.5,R=f(v)/Math.PI+.5;a.push(M,1-R)}g(),d()}function d(){for(let v=0;v<a.length;v+=6){const S=a[v+0],M=a[v+2],R=a[v+4],b=Math.max(S,M,R),C=Math.min(S,M,R);b>.9&&C<.1&&(S<.2&&(a[v+0]+=1),M<.2&&(a[v+2]+=1),R<.2&&(a[v+4]+=1))}}function h(v){r.push(v.x,v.y,v.z)}function p(v,S){const M=v*3;S.x=e[M+0],S.y=e[M+1],S.z=e[M+2]}function g(){const v=new P,S=new P,M=new P,R=new P,b=new Me,C=new Me,_=new Me;for(let w=0,D=0;w<r.length;w+=9,D+=6){v.set(r[w+0],r[w+1],r[w+2]),S.set(r[w+3],r[w+4],r[w+5]),M.set(r[w+6],r[w+7],r[w+8]),b.set(a[D+0],a[D+1]),C.set(a[D+2],a[D+3]),_.set(a[D+4],a[D+5]),R.copy(v).add(S).add(M).divideScalar(3);const L=m(R);E(b,D+0,v,L),E(C,D+2,S,L),E(_,D+4,M,L)}}function E(v,S,M,R){R<0&&v.x===1&&(a[S]=v.x-1),M.x===0&&M.z===0&&(a[S]=R/2/Math.PI+.5)}function m(v){return Math.atan2(v.z,-v.x)}function f(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Cl(e.vertices,e.indices,e.radius,e.detail)}}class Zn{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Ke("Curve: .getPoint() not implemented.")}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const n=this.getLengths();let s=0;const r=n.length;let a;t?a=t:a=e*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);const u=n[s],h=n[s+1]-u,p=(a-u)/h;return(s+p)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);const a=this.getPoint(s),o=this.getPoint(r),l=t||(a.isVector2?new Me:new P);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){const n=new P,s=[],r=[],a=[],o=new P,l=new Et;for(let p=0;p<=e;p++){const g=p/e;s[p]=this.getTangentAt(g,new P)}r[0]=new P,a[0]=new P;let c=Number.MAX_VALUE;const u=Math.abs(s[0].x),d=Math.abs(s[0].y),h=Math.abs(s[0].z);u<=c&&(c=u,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),h<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let p=1;p<=e;p++){if(r[p]=r[p-1].clone(),a[p]=a[p-1].clone(),o.crossVectors(s[p-1],s[p]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(at(s[p-1].dot(s[p]),-1,1));r[p].applyMatrix4(l.makeRotationAxis(o,g))}a[p].crossVectors(s[p],r[p])}if(t===!0){let p=Math.acos(at(r[0].dot(r[e]),-1,1));p/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(p=-p);for(let g=1;g<=e;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],p*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Pl extends Zn{constructor(e=0,t=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new Me){const n=t,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);const o=this.aStartAngle+e*r;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const u=Math.cos(this.aRotation),d=Math.sin(this.aRotation),h=l-this.aX,p=c-this.aY;l=h*u-p*d+this.aX,c=h*d+p*u+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class _f extends Pl{constructor(e,t,n,s,r,a){super(e,t,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}}function Ll(){let i=0,e=0,t=0,n=0;function s(r,a,o,l){i=r,e=o,t=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,u,d){let h=(a-r)/c-(o-r)/(c+u)+(o-a)/u,p=(o-a)/u-(l-a)/(u+d)+(l-o)/d;h*=u,p*=u,s(a,o,h,p)},calc:function(r){const a=r*r,o=a*r;return i+e*r+t*a+n*o}}}const kc=new P,Wc=new P,eo=new Ll,to=new Ll,no=new Ll;class nr extends Zn{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new P){const n=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,u;this.closed||o>0?c=s[(o-1)%r]:(Wc.subVectors(s[0],s[1]).add(s[0]),c=Wc);const d=s[o%r],h=s[(o+1)%r];if(this.closed||o+2<r?u=s[(o+2)%r]:(kc.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=kc),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(d),p),E=Math.pow(d.distanceToSquared(h),p),m=Math.pow(h.distanceToSquared(u),p);E<1e-4&&(E=1),g<1e-4&&(g=E),m<1e-4&&(m=E),eo.initNonuniformCatmullRom(c.x,d.x,h.x,u.x,g,E,m),to.initNonuniformCatmullRom(c.y,d.y,h.y,u.y,g,E,m),no.initNonuniformCatmullRom(c.z,d.z,h.z,u.z,g,E,m)}else this.curveType==="catmullrom"&&(eo.initCatmullRom(c.x,d.x,h.x,u.x,this.tension),to.initCatmullRom(c.y,d.y,h.y,u.y,this.tension),no.initCatmullRom(c.z,d.z,h.z,u.z,this.tension));return n.set(eo.calc(l),to.calc(l),no.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(new P().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Xc(i,e,t,n,s){const r=(n-e)*.5,a=(s-t)*.5,o=i*i,l=i*o;return(2*t-2*n+r+a)*l+(-3*t+3*n-2*r-a)*o+r*i+t}function xf(i,e){const t=1-i;return t*t*e}function vf(i,e){return 2*(1-i)*i*e}function Mf(i,e){return i*i*e}function lr(i,e,t,n){return xf(i,e)+vf(i,t)+Mf(i,n)}function Sf(i,e){const t=1-i;return t*t*t*e}function yf(i,e){const t=1-i;return 3*t*t*i*e}function Ef(i,e){return 3*(1-i)*i*i*e}function bf(i,e){return i*i*i*e}function cr(i,e,t,n,s){return Sf(i,e)+yf(i,t)+Ef(i,n)+bf(i,s)}class lu extends Zn{constructor(e=new Me,t=new Me,n=new Me,s=new Me){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new Me){const n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(cr(e,s.x,r.x,a.x,o.x),cr(e,s.y,r.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Tf extends Zn{constructor(e=new P,t=new P,n=new P,s=new P){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new P){const n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(cr(e,s.x,r.x,a.x,o.x),cr(e,s.y,r.y,a.y,o.y),cr(e,s.z,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class cu extends Zn{constructor(e=new Me,t=new Me){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Me){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Me){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class wf extends Zn{constructor(e=new P,t=new P){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new P){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new P){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class hu extends Zn{constructor(e=new Me,t=new Me,n=new Me){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new Me){const n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(lr(e,s.x,r.x,a.x),lr(e,s.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class uu extends Zn{constructor(e=new P,t=new P,n=new P){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new P){const n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(lr(e,s.x,r.x,a.x),lr(e,s.y,r.y,a.y),lr(e,s.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class du extends Zn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Me){const n=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],u=s[a>s.length-2?s.length-1:a+1],d=s[a>s.length-3?s.length-1:a+2];return n.set(Xc(o,l.x,c.x,u.x,d.x),Xc(o,l.y,c.y,u.y,d.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(new Me().fromArray(s))}return this}}var da=Object.freeze({__proto__:null,ArcCurve:_f,CatmullRomCurve3:nr,CubicBezierCurve:lu,CubicBezierCurve3:Tf,EllipseCurve:Pl,LineCurve:cu,LineCurve3:wf,QuadraticBezierCurve:hu,QuadraticBezierCurve3:uu,SplineCurve:du});class Af extends Zn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new da[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const a=s[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const a=r[s],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){const u=l[c];n&&n.equals(u)||(t.push(u),n=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const s=e.curves[t];this.curves.push(new da[s.type]().fromJSON(s))}return this}}class rl extends Af{constructor(e){super(),this.type="Path",this.currentPoint=new Me,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new cu(this.currentPoint.clone(),new Me(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){const r=new hu(this.currentPoint.clone(),new Me(e,t),new Me(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,a){const o=new lu(this.currentPoint.clone(),new Me(e,t),new Me(n,s),new Me(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new du(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,a){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,n,s,r,a),this}absarc(e,t,n,s,r,a){return this.absellipse(e,t,n,n,s,r,a),this}ellipse(e,t,n,s,r,a,o,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,n,s,r,a,o,l),this}absellipse(e,t,n,s,r,a,o,l){const c=new Pl(e,t,n,s,r,a,o,l);if(this.curves.length>0){const d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class sa extends rl{constructor(e){super(e),this.uuid=ji(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const s=e.holes[t];this.holes.push(new rl().fromJSON(s))}return this}}function Rf(i,e,t=2){const n=e&&e.length,s=n?e[0]*t:i.length;let r=fu(i,0,s,t,!0);const a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(n&&(r=Df(i,e,r,t)),i.length>80*t){o=i[0],l=i[1];let u=o,d=l;for(let h=t;h<s;h+=t){const p=i[h],g=i[h+1];p<o&&(o=p),g<l&&(l=g),p>u&&(u=p),g>d&&(d=g)}c=Math.max(u-o,d-l),c=c!==0?32767/c:0}return mr(r,a,t,o,l,c,0),a}function fu(i,e,t,n,s){let r;if(s===Wf(i,e,t,n)>0)for(let a=e;a<t;a+=n)r=Yc(a/n|0,i[a],i[a+1],r);else for(let a=t-n;a>=e;a-=n)r=Yc(a/n|0,i[a],i[a+1],r);return r&&Is(r,r.next)&&(_r(r),r=r.next),r}function Ki(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(Is(t,t.next)||Pt(t.prev,t,t.next)===0)){if(_r(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function mr(i,e,t,n,s,r,a){if(!i)return;!a&&r&&Bf(i,n,s,r);let o=i;for(;i.prev!==i.next;){const l=i.prev,c=i.next;if(r?Pf(i,n,s,r):Cf(i)){e.push(l.i,i.i,c.i),_r(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=Lf(Ki(i),e),mr(i,e,t,n,s,r,2)):a===2&&If(i,e,t,n,s,r):mr(Ki(i),e,t,n,s,r,1);break}}}function Cf(i){const e=i.prev,t=i,n=i.next;if(Pt(e,t,n)>=0)return!1;const s=e.x,r=t.x,a=n.x,o=e.y,l=t.y,c=n.y,u=Math.min(s,r,a),d=Math.min(o,l,c),h=Math.max(s,r,a),p=Math.max(o,l,c);let g=n.next;for(;g!==e;){if(g.x>=u&&g.x<=h&&g.y>=d&&g.y<=p&&ir(s,o,r,l,a,c,g.x,g.y)&&Pt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Pf(i,e,t,n){const s=i.prev,r=i,a=i.next;if(Pt(s,r,a)>=0)return!1;const o=s.x,l=r.x,c=a.x,u=s.y,d=r.y,h=a.y,p=Math.min(o,l,c),g=Math.min(u,d,h),E=Math.max(o,l,c),m=Math.max(u,d,h),f=al(p,g,e,t,n),v=al(E,m,e,t,n);let S=i.prevZ,M=i.nextZ;for(;S&&S.z>=f&&M&&M.z<=v;){if(S.x>=p&&S.x<=E&&S.y>=g&&S.y<=m&&S!==s&&S!==a&&ir(o,u,l,d,c,h,S.x,S.y)&&Pt(S.prev,S,S.next)>=0||(S=S.prevZ,M.x>=p&&M.x<=E&&M.y>=g&&M.y<=m&&M!==s&&M!==a&&ir(o,u,l,d,c,h,M.x,M.y)&&Pt(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;S&&S.z>=f;){if(S.x>=p&&S.x<=E&&S.y>=g&&S.y<=m&&S!==s&&S!==a&&ir(o,u,l,d,c,h,S.x,S.y)&&Pt(S.prev,S,S.next)>=0)return!1;S=S.prevZ}for(;M&&M.z<=v;){if(M.x>=p&&M.x<=E&&M.y>=g&&M.y<=m&&M!==s&&M!==a&&ir(o,u,l,d,c,h,M.x,M.y)&&Pt(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function Lf(i,e){let t=i;do{const n=t.prev,s=t.next.next;!Is(n,s)&&mu(n,t,t.next,s)&&gr(n,s)&&gr(s,n)&&(e.push(n.i,t.i,s.i),_r(t),_r(t.next),t=i=s),t=t.next}while(t!==i);return Ki(t)}function If(i,e,t,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Hf(a,o)){let l=gu(a,o);a=Ki(a,a.next),l=Ki(l,l.next),mr(a,e,t,n,s,r,0),mr(l,e,t,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function Df(i,e,t,n){const s=[];for(let r=0,a=e.length;r<a;r++){const o=e[r]*n,l=r<a-1?e[r+1]*n:i.length,c=fu(i,o,l,n,!1);c===c.next&&(c.steiner=!0),s.push(Gf(c))}s.sort(Uf);for(let r=0;r<s.length;r++)t=Nf(s[r],t);return t}function Uf(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){const n=(i.next.y-i.y)/(i.next.x-i.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=n-s}return t}function Nf(i,e){const t=Ff(i,e);if(!t)return e;const n=gu(t,i);return Ki(n,n.next),Ki(t,t.next)}function Ff(i,e){let t=e;const n=i.x,s=i.y;let r=-1/0,a;if(Is(i,t))return t;do{if(Is(i,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){const d=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=n&&d>r&&(r=d,a=t.x<t.next.x?t:t.next,d===n))return a}t=t.next}while(t!==e);if(!a)return null;const o=a,l=a.x,c=a.y;let u=1/0;t=a;do{if(n>=t.x&&t.x>=l&&n!==t.x&&pu(s<c?n:r,s,l,c,s<c?r:n,s,t.x,t.y)){const d=Math.abs(s-t.y)/(n-t.x);gr(t,i)&&(d<u||d===u&&(t.x>a.x||t.x===a.x&&Of(a,t)))&&(a=t,u=d)}t=t.next}while(t!==o);return a}function Of(i,e){return Pt(i.prev,i,e.prev)<0&&Pt(e.next,i,i.next)<0}function Bf(i,e,t,n){let s=i;do s.z===0&&(s.z=al(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,zf(s)}function zf(i){let e,t=1;do{let n=i,s;i=null;let r=null;for(e=0;n;){e++;let a=n,o=0;for(let c=0;c<t&&(o++,a=a.nextZ,!!a);c++);let l=t;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||n.z<=a.z)?(s=n,n=n.nextZ,o--):(s=a,a=a.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=a}r.nextZ=null,t*=2}while(e>1);return i}function al(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function Gf(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function pu(i,e,t,n,s,r,a,o){return(s-a)*(e-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(s-a)*(n-o)}function ir(i,e,t,n,s,r,a,o){return!(i===a&&e===o)&&pu(i,e,t,n,s,r,a,o)}function Hf(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!Vf(i,e)&&(gr(i,e)&&gr(e,i)&&kf(i,e)&&(Pt(i.prev,i,e.prev)||Pt(i,e.prev,e))||Is(i,e)&&Pt(i.prev,i,i.next)>0&&Pt(e.prev,e,e.next)>0)}function Pt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function Is(i,e){return i.x===e.x&&i.y===e.y}function mu(i,e,t,n){const s=qr(Pt(i,e,t)),r=qr(Pt(i,e,n)),a=qr(Pt(t,n,i)),o=qr(Pt(t,n,e));return!!(s!==r&&a!==o||s===0&&Yr(i,t,e)||r===0&&Yr(i,n,e)||a===0&&Yr(t,i,n)||o===0&&Yr(t,e,n))}function Yr(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function qr(i){return i>0?1:i<0?-1:0}function Vf(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&mu(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function gr(i,e){return Pt(i.prev,i,i.next)<0?Pt(i,e,i.next)>=0&&Pt(i,i.prev,e)>=0:Pt(i,e,i.prev)<0||Pt(i,i.next,e)<0}function kf(i,e){let t=i,n=!1;const s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function gu(i,e){const t=ol(i.i,i.x,i.y),n=ol(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function Yc(i,e,t,n){const s=ol(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function _r(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function ol(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Wf(i,e,t,n){let s=0;for(let r=e,a=t-n;r<t;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}class Xf{static triangulate(e,t,n=2){return Rf(e,t,n)}}class Yi{static area(e){const t=e.length;let n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return Yi.area(e)<0}static triangulateShape(e,t){const n=[],s=[],r=[];qc(e),Zc(n,e);let a=e.length;t.forEach(qc);for(let l=0;l<t.length;l++)s.push(a),a+=t[l].length,Zc(n,t[l]);const o=Xf.triangulate(n,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}}function qc(i){const e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function Zc(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}class Il extends Qt{constructor(e=new sa([new Me(.5,.5),new Me(-.5,.5),new Me(-.5,-.5),new Me(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,s=[],r=[];for(let o=0,l=e.length;o<l;o++){const c=e[o];a(c)}this.setAttribute("position",new bt(s,3)),this.setAttribute("uv",new bt(r,2)),this.computeVertexNormals();function a(o){const l=[],c=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,d=t.depth!==void 0?t.depth:1;let h=t.bevelEnabled!==void 0?t.bevelEnabled:!0,p=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:p-.1,E=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3;const f=t.extrudePath,v=t.UVGenerator!==void 0?t.UVGenerator:Yf;let S,M=!1,R,b,C,_;if(f){S=f.getSpacedPoints(u),M=!0,h=!1;const ee=f.isCatmullRomCurve3?f.closed:!1;R=f.computeFrenetFrames(u,ee),b=new P,C=new P,_=new P}h||(m=0,p=0,g=0,E=0);const w=o.extractPoints(c);let D=w.shape;const L=w.holes;if(!Yi.isClockWise(D)){D=D.reverse();for(let ee=0,se=L.length;ee<se;ee++){const J=L[ee];Yi.isClockWise(J)&&(L[ee]=J.reverse())}}function X(ee){const J=10000000000000001e-36;let be=ee[0];for(let fe=1;fe<=ee.length;fe++){const Ye=fe%ee.length,I=ee[Ye],Ve=I.x-be.x,Ne=I.y-be.y,Ze=Ve*Ve+Ne*Ne,le=Math.max(Math.abs(I.x),Math.abs(I.y),Math.abs(be.x),Math.abs(be.y)),dt=J*le*le;if(Ze<=dt){ee.splice(Ye,1),fe--;continue}be=I}}X(D),L.forEach(X);const Y=L.length,N=D;for(let ee=0;ee<Y;ee++){const se=L[ee];D=D.concat(se)}function G(ee,se,J){return se||ft("ExtrudeGeometry: vec does not exist"),ee.clone().addScaledVector(se,J)}const k=D.length;function ne(ee,se,J){let be,fe,Ye;const I=ee.x-se.x,Ve=ee.y-se.y,Ne=J.x-ee.x,Ze=J.y-ee.y,le=I*I+Ve*Ve,dt=I*Ze-Ve*Ne;if(Math.abs(dt)>Number.EPSILON){const T=Math.sqrt(le),x=Math.sqrt(Ne*Ne+Ze*Ze),B=se.x-Ve/T,j=se.y+I/T,ae=J.x-Ze/x,he=J.y+Ne/x,pe=((ae-B)*Ze-(he-j)*Ne)/(I*Ze-Ve*Ne);be=B+I*pe-ee.x,fe=j+Ve*pe-ee.y;const Z=be*be+fe*fe;if(Z<=2)return new Me(be,fe);Ye=Math.sqrt(Z/2)}else{let T=!1;I>Number.EPSILON?Ne>Number.EPSILON&&(T=!0):I<-Number.EPSILON?Ne<-Number.EPSILON&&(T=!0):Math.sign(Ve)===Math.sign(Ze)&&(T=!0),T?(be=-Ve,fe=I,Ye=Math.sqrt(le)):(be=I,fe=Ve,Ye=Math.sqrt(le/2))}return new Me(be/Ye,fe/Ye)}const oe=[];for(let ee=0,se=N.length,J=se-1,be=ee+1;ee<se;ee++,J++,be++)J===se&&(J=0),be===se&&(be=0),oe[ee]=ne(N[ee],N[J],N[be]);const ge=[];let Ae,Ie=oe.concat();for(let ee=0,se=Y;ee<se;ee++){const J=L[ee];Ae=[];for(let be=0,fe=J.length,Ye=fe-1,I=be+1;be<fe;be++,Ye++,I++)Ye===fe&&(Ye=0),I===fe&&(I=0),Ae[be]=ne(J[be],J[Ye],J[I]);ge.push(Ae),Ie=Ie.concat(Ae)}let $e;if(m===0)$e=Yi.triangulateShape(N,L);else{const ee=[],se=[];for(let J=0;J<m;J++){const be=J/m,fe=p*Math.cos(be*Math.PI/2),Ye=g*Math.sin(be*Math.PI/2)+E;for(let I=0,Ve=N.length;I<Ve;I++){const Ne=G(N[I],oe[I],Ye);Fe(Ne.x,Ne.y,-fe),be===0&&ee.push(Ne)}for(let I=0,Ve=Y;I<Ve;I++){const Ne=L[I];Ae=ge[I];const Ze=[];for(let le=0,dt=Ne.length;le<dt;le++){const T=G(Ne[le],Ae[le],Ye);Fe(T.x,T.y,-fe),be===0&&Ze.push(T)}be===0&&se.push(Ze)}}$e=Yi.triangulateShape(ee,se)}const ot=$e.length,qe=g+E;for(let ee=0;ee<k;ee++){const se=h?G(D[ee],Ie[ee],qe):D[ee];M?(C.copy(R.normals[0]).multiplyScalar(se.x),b.copy(R.binormals[0]).multiplyScalar(se.y),_.copy(S[0]).add(C).add(b),Fe(_.x,_.y,_.z)):Fe(se.x,se.y,0)}for(let ee=1;ee<=u;ee++)for(let se=0;se<k;se++){const J=h?G(D[se],Ie[se],qe):D[se];M?(C.copy(R.normals[ee]).multiplyScalar(J.x),b.copy(R.binormals[ee]).multiplyScalar(J.y),_.copy(S[ee]).add(C).add(b),Fe(_.x,_.y,_.z)):Fe(J.x,J.y,d/u*ee)}for(let ee=m-1;ee>=0;ee--){const se=ee/m,J=p*Math.cos(se*Math.PI/2),be=g*Math.sin(se*Math.PI/2)+E;for(let fe=0,Ye=N.length;fe<Ye;fe++){const I=G(N[fe],oe[fe],be);Fe(I.x,I.y,d+J)}for(let fe=0,Ye=L.length;fe<Ye;fe++){const I=L[fe];Ae=ge[fe];for(let Ve=0,Ne=I.length;Ve<Ne;Ve++){const Ze=G(I[Ve],Ae[Ve],be);M?Fe(Ze.x,Ze.y+S[u-1].y,S[u-1].x+J):Fe(Ze.x,Ze.y,d+J)}}}K(),Se();function K(){const ee=s.length/3;if(h){let se=0,J=k*se;for(let be=0;be<ot;be++){const fe=$e[be];We(fe[2]+J,fe[1]+J,fe[0]+J)}se=u+m*2,J=k*se;for(let be=0;be<ot;be++){const fe=$e[be];We(fe[0]+J,fe[1]+J,fe[2]+J)}}else{for(let se=0;se<ot;se++){const J=$e[se];We(J[2],J[1],J[0])}for(let se=0;se<ot;se++){const J=$e[se];We(J[0]+k*u,J[1]+k*u,J[2]+k*u)}}n.addGroup(ee,s.length/3-ee,0)}function Se(){const ee=s.length/3;let se=0;ce(N,se),se+=N.length;for(let J=0,be=L.length;J<be;J++){const fe=L[J];ce(fe,se),se+=fe.length}n.addGroup(ee,s.length/3-ee,1)}function ce(ee,se){let J=ee.length;for(;--J>=0;){const be=J;let fe=J-1;fe<0&&(fe=ee.length-1);for(let Ye=0,I=u+m*2;Ye<I;Ye++){const Ve=k*Ye,Ne=k*(Ye+1),Ze=se+be+Ve,le=se+fe+Ve,dt=se+fe+Ne,T=se+be+Ne;Xe(Ze,le,dt,T)}}}function Fe(ee,se,J){l.push(ee),l.push(se),l.push(J)}function We(ee,se,J){He(ee),He(se),He(J);const be=s.length/3,fe=v.generateTopUV(n,s,be-3,be-2,be-1);Je(fe[0]),Je(fe[1]),Je(fe[2])}function Xe(ee,se,J,be){He(ee),He(se),He(be),He(se),He(J),He(be);const fe=s.length/3,Ye=v.generateSideWallUV(n,s,fe-6,fe-3,fe-2,fe-1);Je(Ye[0]),Je(Ye[1]),Je(Ye[3]),Je(Ye[1]),Je(Ye[2]),Je(Ye[3])}function He(ee){s.push(l[ee*3+0]),s.push(l[ee*3+1]),s.push(l[ee*3+2])}function Je(ee){r.push(ee.x),r.push(ee.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return qf(t,n,e)}static fromJSON(e,t){const n=[];for(let r=0,a=e.shapes.length;r<a;r++){const o=t[e.shapes[r]];n.push(o)}const s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new da[s.type]().fromJSON(s)),new Il(n,e.options)}}const Yf={generateTopUV:function(i,e,t,n,s){const r=e[t*3],a=e[t*3+1],o=e[n*3],l=e[n*3+1],c=e[s*3],u=e[s*3+1];return[new Me(r,a),new Me(o,l),new Me(c,u)]},generateSideWallUV:function(i,e,t,n,s,r){const a=e[t*3],o=e[t*3+1],l=e[t*3+2],c=e[n*3],u=e[n*3+1],d=e[n*3+2],h=e[s*3],p=e[s*3+1],g=e[s*3+2],E=e[r*3],m=e[r*3+1],f=e[r*3+2];return Math.abs(o-u)<Math.abs(a-c)?[new Me(a,1-l),new Me(c,1-d),new Me(h,1-g),new Me(E,1-f)]:[new Me(o,1-l),new Me(u,1-d),new Me(p,1-g),new Me(m,1-f)]}};function qf(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){const r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class fa extends Cl{constructor(e=1,t=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new fa(e.radius,e.detail)}}class yn extends Qt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(s),c=o+1,u=l+1,d=e/o,h=t/l,p=[],g=[],E=[],m=[];for(let f=0;f<u;f++){const v=f*h-a;for(let S=0;S<c;S++){const M=S*d-r;g.push(M,-v,0),E.push(0,0,1),m.push(S/o),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let v=0;v<o;v++){const S=v+c*f,M=v+c*(f+1),R=v+1+c*(f+1),b=v+1+c*f;p.push(S,M,b),p.push(M,R,b)}this.setIndex(p),this.setAttribute("position",new bt(g,3)),this.setAttribute("normal",new bt(E,3)),this.setAttribute("uv",new bt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new yn(e.width,e.height,e.widthSegments,e.heightSegments)}}class on extends Qt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const u=[],d=new P,h=new P,p=[],g=[],E=[],m=[];for(let f=0;f<=n;f++){const v=[],S=f/n;let M=0;f===0&&a===0?M=.5/t:f===n&&l===Math.PI&&(M=-.5/t);for(let R=0;R<=t;R++){const b=R/t;d.x=-e*Math.cos(s+b*r)*Math.sin(a+S*o),d.y=e*Math.cos(a+S*o),d.z=e*Math.sin(s+b*r)*Math.sin(a+S*o),g.push(d.x,d.y,d.z),h.copy(d).normalize(),E.push(h.x,h.y,h.z),m.push(b+M,1-S),v.push(c++)}u.push(v)}for(let f=0;f<n;f++)for(let v=0;v<t;v++){const S=u[f][v+1],M=u[f][v],R=u[f+1][v],b=u[f+1][v+1];(f!==0||a>0)&&p.push(S,M,b),(f!==n-1||l<Math.PI)&&p.push(M,R,b)}this.setIndex(p),this.setAttribute("position",new bt(g,3)),this.setAttribute("normal",new bt(E,3)),this.setAttribute("uv",new bt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new on(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class mn extends Qt{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),s=Math.floor(s);const l=[],c=[],u=[],d=[],h=new P,p=new P,g=new P;for(let E=0;E<=n;E++){const m=a+E/n*o;for(let f=0;f<=s;f++){const v=f/s*r;p.x=(e+t*Math.cos(m))*Math.cos(v),p.y=(e+t*Math.cos(m))*Math.sin(v),p.z=t*Math.sin(m),c.push(p.x,p.y,p.z),h.x=e*Math.cos(v),h.y=e*Math.sin(v),g.subVectors(p,h).normalize(),u.push(g.x,g.y,g.z),d.push(f/s),d.push(E/n)}}for(let E=1;E<=n;E++)for(let m=1;m<=s;m++){const f=(s+1)*E+m-1,v=(s+1)*(E-1)+m-1,S=(s+1)*(E-1)+m,M=(s+1)*E+m;l.push(f,v,M),l.push(v,S,M)}this.setIndex(l),this.setAttribute("position",new bt(c,3)),this.setAttribute("normal",new bt(u,3)),this.setAttribute("uv",new bt(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new mn(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Es extends Qt{constructor(e=new uu(new P(-1,-1,0),new P(-1,1,0),new P(1,1,0)),t=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:s,closed:r};const a=e.computeFrenetFrames(t,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;const o=new P,l=new P,c=new Me;let u=new P;const d=[],h=[],p=[],g=[];E(),this.setIndex(g),this.setAttribute("position",new bt(d,3)),this.setAttribute("normal",new bt(h,3)),this.setAttribute("uv",new bt(p,2));function E(){for(let S=0;S<t;S++)m(S);m(r===!1?t:0),v(),f()}function m(S){u=e.getPointAt(S/t,u);const M=a.normals[S],R=a.binormals[S];for(let b=0;b<=s;b++){const C=b/s*Math.PI*2,_=Math.sin(C),w=-Math.cos(C);l.x=w*M.x+_*R.x,l.y=w*M.y+_*R.y,l.z=w*M.z+_*R.z,l.normalize(),h.push(l.x,l.y,l.z),o.x=u.x+n*l.x,o.y=u.y+n*l.y,o.z=u.z+n*l.z,d.push(o.x,o.y,o.z)}}function f(){for(let S=1;S<=t;S++)for(let M=1;M<=s;M++){const R=(s+1)*(S-1)+(M-1),b=(s+1)*S+(M-1),C=(s+1)*S+M,_=(s+1)*(S-1)+M;g.push(R,b,_),g.push(b,C,_)}}function v(){for(let S=0;S<=t;S++)for(let M=0;M<=s;M++)c.x=S/t,c.y=M/s,p.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new Es(new da[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}function Ds(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];if(Jc(s))s.isRenderTargetTexture?(Ke("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(Jc(s[0])){const r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function sn(i){const e={};for(let t=0;t<i.length;t++){const n=Ds(i[t]);for(const s in n)e[s]=n[s]}return e}function Jc(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Zf(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function _u(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ut.workingColorSpace}const Jf={clone:Ds,merge:sn};var Kf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,$f=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class qn extends vr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Kf,this.fragmentShader=$f,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ds(e.uniforms),this.uniformsGroups=Zf(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class jf extends qn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Jt extends vr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new lt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new lt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=il,this.normalScale=new Me(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Wt,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class si extends Jt{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Me(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return at(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new lt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new lt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new lt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Qf extends vr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=xd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class ep extends vr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const hr={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(Kc(i)||(this.files[i]=e))},get:function(i){if(this.enabled!==!1&&!Kc(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function Kc(i){try{const e=i.slice(i.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class tp{constructor(e,t,n){const s=this;let r=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(u){o++,r===!1&&s.onStart!==void 0&&s.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,s.onProgress!==void 0&&s.onProgress(u,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,d){return c.push(u,d),this},this.removeHandler=function(u){const d=c.indexOf(u);return d!==-1&&c.splice(d,2),this},this.getHandler=function(u){for(let d=0,h=c.length;d<h;d+=2){const p=c[d],g=c[d+1];if(p.global&&(p.lastIndex=0),p.test(u))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const np=new tp;class _a{constructor(e){this.manager=e!==void 0?e:np,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){const n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}_a.DEFAULT_MATERIAL_NAME="__DEFAULT";const ri={};class ip extends Error{constructor(e,t){super(e),this.response=t}}class jx extends _a{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=hr.get(`file:${e}`);if(r!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0);return}if(ri[e]!==void 0){ri[e].push({onLoad:t,onProgress:n,onError:s});return}ri[e]=[],ri[e].push({onLoad:t,onProgress:n,onError:s});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&Ke("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=ri[e],d=c.body.getReader(),h=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),p=h?parseInt(h):0,g=p!==0;let E=0;const m=new ReadableStream({start(f){v();function v(){d.read().then(({done:S,value:M})=>{if(S)f.close();else{E+=M.byteLength;const R=new ProgressEvent("progress",{lengthComputable:g,loaded:E,total:p});for(let b=0,C=u.length;b<C;b++){const _=u[b];_.onProgress&&_.onProgress(R)}f.enqueue(M),v()}},S=>{f.error(S)})}}});return new Response(m)}else throw new ip(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,o));case"json":return c.json();default:if(o==="")return c.text();{const d=/charset="?([^;"\s]*)"?/i.exec(o),h=d&&d[1]?d[1].toLowerCase():void 0,p=new TextDecoder(h);return c.arrayBuffer().then(g=>p.decode(g))}}}).then(c=>{hr.add(`file:${e}`,c);const u=ri[e];delete ri[e];for(let d=0,h=u.length;d<h;d++){const p=u[d];p.onLoad&&p.onLoad(c)}}).catch(c=>{const u=ri[e];if(u===void 0)throw this.manager.itemError(e),c;delete ri[e];for(let d=0,h=u.length;d<h;d++){const p=u[d];p.onError&&p.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const ms=new WeakMap;class sp extends _a{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=hr.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);else{let d=ms.get(a);d===void 0&&(d=[],ms.set(a,d)),d.push({onLoad:t,onError:s})}return a}const o=pr("img");function l(){u(),t&&t(this);const d=ms.get(this)||[];for(let h=0;h<d.length;h++){const p=d[h];p.onLoad&&p.onLoad(this)}ms.delete(this),r.manager.itemEnd(e)}function c(d){u(),s&&s(d),hr.remove(`image:${e}`);const h=ms.get(this)||[];for(let p=0;p<h.length;p++){const g=h[p];g.onError&&g.onError(d)}ms.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),hr.add(`image:${e}`,o),r.manager.itemStart(e),o.src=e,o}}class rp extends _a{constructor(e){super(e)}load(e,t,n,s){const r=new Yt,a=new sp(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}}class xu extends Ot{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new lt(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}const io=new Et,$c=new P,jc=new P;class vu{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Me(512,512),this.mapType=gn,this.map=null,this.mapPass=null,this.matrix=new Et,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Rl,this._frameExtents=new Me(1,1),this._viewportCount=1,this._viewports=[new It(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;$c.setFromMatrixPosition(e.matrixWorld),t.position.copy($c),jc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(jc),t.updateMatrixWorld(),io.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(io,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===fr||t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(io)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Zr=new P,Jr=new hi,Bn=new P;class Mu extends Ot{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Et,this.projectionMatrix=new Et,this.projectionMatrixInverse=new Et,this.coordinateSystem=Vn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Zr,Jr,Bn),Bn.x===1&&Bn.y===1&&Bn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Zr,Jr,Bn.set(1,1,1)).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorld.decompose(Zr,Jr,Bn),Bn.x===1&&Bn.y===1&&Bn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Zr,Jr,Bn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const yi=new P,Qc=new Me,eh=new Me;class ln extends Mu{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ps*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(rr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ps*2*Math.atan(Math.tan(rr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){yi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(yi.x,yi.y).multiplyScalar(-e/yi.z),yi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(yi.x,yi.y).multiplyScalar(-e/yi.z)}getViewSize(e,t){return this.getViewBounds(e,Qc,eh),t.subVectors(eh,Qc)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(rr*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class ap extends vu{constructor(){super(new ln(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,n=Ps*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class ll extends xu{constructor(e,t,n=0,s=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Ot.DEFAULT_UP),this.updateMatrix(),this.target=new Ot,this.distance=n,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new ap}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}}class op extends vu{constructor(){super(new ln(90,1,.5,500)),this.isPointLightShadow=!0}}class lp extends xu{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new op}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class Su extends Mu{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,a=n+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const gs=-90,_s=1;class cp extends Ot{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new ln(gs,_s,e,t);s.layers=this.layers,this.add(s);const r=new ln(gs,_s,e,t);r.layers=this.layers,this.add(r);const a=new ln(gs,_s,e,t);a.layers=this.layers,this.add(a);const o=new ln(gs,_s,e,t);o.layers=this.layers,this.add(o);const l=new ln(gs,_s,e,t);l.layers=this.layers,this.add(l);const c=new ln(gs,_s,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,l]=t;for(const c of t)this.remove(c);if(e===Vn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===fr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,u]=this.children,d=e.getRenderTarget(),h=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const E=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=E,e.setRenderTarget(n,5,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(d,h,p),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class hp extends ln{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class Qx{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=up.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}}function up(){this._document.hidden===!1&&this.reset()}const Ol=class Ol{constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){const r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}};Ol.prototype.isMatrix2=!0;let th=Ol;const nh=new Me;class ev{constructor(e=new Me(1/0,1/0),t=new Me(-1/0,-1/0)){this.isBox2=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=nh.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(e){return this.isEmpty()?e.set(0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,nh).distanceTo(e)}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}class tv{constructor(){this.type="ShapePath",this.color=new lt,this.subPaths=[],this.currentPath=null}moveTo(e,t){return this.currentPath=new rl,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,t),this}lineTo(e,t){return this.currentPath.lineTo(e,t),this}quadraticCurveTo(e,t,n,s){return this.currentPath.quadraticCurveTo(e,t,n,s),this}bezierCurveTo(e,t,n,s,r,a){return this.currentPath.bezierCurveTo(e,t,n,s,r,a),this}splineThru(e){return this.currentPath.splineThru(e),this}toShapes(e){function t(f){const v=[];for(let S=0,M=f.length;S<M;S++){const R=f[S],b=new sa;b.curves=R.curves,v.push(b)}return v}function n(f,v){const S=v.length;let M=!1;for(let R=S-1,b=0;b<S;R=b++){let C=v[R],_=v[b],w=_.x-C.x,D=_.y-C.y;if(Math.abs(D)>Number.EPSILON){if(D<0&&(C=v[b],w=-w,_=v[R],D=-D),f.y<C.y||f.y>_.y)continue;if(f.y===C.y){if(f.x===C.x)return!0}else{const L=D*(f.x-C.x)-w*(f.y-C.y);if(L===0)return!0;if(L<0)continue;M=!M}}else{if(f.y!==C.y)continue;if(_.x<=f.x&&f.x<=C.x||C.x<=f.x&&f.x<=_.x)return!0}}return M}const s=Yi.isClockWise,r=this.subPaths;if(r.length===0)return[];let a,o,l;const c=[];if(r.length===1)return o=r[0],l=new sa,l.curves=o.curves,c.push(l),c;let u=!s(r[0].getPoints());u=e?!u:u;const d=[],h=[];let p=[],g=0,E;h[g]=void 0,p[g]=[];for(let f=0,v=r.length;f<v;f++)o=r[f],E=o.getPoints(),a=s(E),a=e?!a:a,a?(!u&&h[g]&&g++,h[g]={s:new sa,p:E},h[g].s.curves=o.curves,u&&g++,p[g]=[]):p[g].push({h:o,p:E[0]});if(!h[0])return t(r);if(h.length>1){let f=!1,v=0;for(let S=0,M=h.length;S<M;S++)d[S]=[];for(let S=0,M=h.length;S<M;S++){const R=p[S];for(let b=0;b<R.length;b++){const C=R[b];let _=!0;for(let w=0;w<h.length;w++)n(C.p,h[w].p)&&(S!==w&&v++,_?(_=!1,d[w].push(C)):f=!0);_&&d[S].push(C)}}v>0&&f===!1&&(p=d)}let m;for(let f=0,v=h.length;f<v;f++){l=h[f].s,c.push(l),m=p[f];for(let S=0,M=m.length;S<M;S++)l.holes.push(m[S].h)}return c}}function ih(i,e,t,n){const s=dp(n);switch(t){case $h:return i*e;case vl:return i*e/s.components*s.byteLength;case Ml:return i*e/s.components*s.byteLength;case Ji:return i*e*2/s.components*s.byteLength;case Sl:return i*e*2/s.components*s.byteLength;case jh:return i*e*3/s.components*s.byteLength;case Dn:return i*e*4/s.components*s.byteLength;case yl:return i*e*4/s.components*s.byteLength;case ea:case ta:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case na:case ia:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ro:case Po:return Math.max(i,16)*Math.max(e,8)/4;case Ao:case Co:return Math.max(i,8)*Math.max(e,8)/2;case Lo:case Io:case Uo:case No:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Do:case la:case Fo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Oo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Bo:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case zo:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Go:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Ho:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Vo:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case ko:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Wo:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Xo:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Yo:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case qo:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Zo:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Jo:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Ko:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case $o:case jo:case Qo:return Math.ceil(i/4)*Math.ceil(e/4)*16;case el:case tl:return Math.ceil(i/4)*Math.ceil(e/4)*8;case ca:case nl:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function dp(i){switch(i){case gn:case qh:return{byteLength:1,components:1};case ur:case Zh:case li:return{byteLength:2,components:1};case _l:case xl:return{byteLength:2,components:4};case Yn:case gl:case In:return{byteLength:4,components:1};case Jh:case Kh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:pl}}));typeof window<"u"&&(window.__THREE__?Ke("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=pl);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function yu(){let i=null,e=!1,t=null,n=null;function s(r,a){t(r,a),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function fp(i){const e=new WeakMap;function t(o,l){const c=o.array,u=o.usage,d=c.byteLength,h=i.createBuffer();i.bindBuffer(l,h),i.bufferData(l,c,u),o.onUploadCallback();let p;if(c instanceof Float32Array)p=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=i.SHORT;else if(c instanceof Uint32Array)p=i.UNSIGNED_INT;else if(c instanceof Int32Array)p=i.INT;else if(c instanceof Int8Array)p=i.BYTE;else if(c instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,l,c){const u=l.array,d=l.updateRanges;if(i.bindBuffer(c,o),d.length===0)i.bufferSubData(c,0,u);else{d.sort((p,g)=>p.start-g.start);let h=0;for(let p=1;p<d.length;p++){const g=d[h],E=d[p];E.start<=g.start+g.count+1?g.count=Math.max(g.count,E.start+E.count-g.start):(++h,d[h]=E)}d.length=h+1;for(let p=0,g=d.length;p<g;p++){const E=d[p];i.bufferSubData(c,E.start*u.BYTES_PER_ELEMENT,u,E.start,E.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var pp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,mp=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,gp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,_p=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,xp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,vp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Mp=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Sp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,yp=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Ep=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,bp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Tp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,wp=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Ap=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Rp=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Cp=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Pp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Lp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ip=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Dp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Up=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Np=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Fp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Op=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Bp=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,zp=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Gp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Hp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Vp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,kp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Wp="gl_FragColor = linearToOutputTexel( gl_FragColor );",Xp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Yp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,qp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Zp=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Jp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Kp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,$p=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,jp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Qp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,em=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,tm=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,nm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,im=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,sm=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,rm=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,am=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,om=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lm=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,cm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,hm=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,um=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,dm=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,fm=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = inverseTransformDirection( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,pm=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,mm=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,gm=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,_m=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,xm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,vm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Mm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Sm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ym=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Em=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,bm=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Tm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,wm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Am=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Rm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Cm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Pm=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Lm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Im=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Dm=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Um=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Nm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Fm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Om=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Bm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,zm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Gm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Hm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Vm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,km=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Wm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Xm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ym=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,qm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Zm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Jm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Km=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,$m=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,jm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Qm=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,e0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,t0=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,n0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,i0=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,s0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,r0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,a0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,o0=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,l0=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,c0=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,h0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,u0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,d0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,f0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const p0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,m0=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,g0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_0=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,x0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,v0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,M0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,S0=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,y0=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,E0=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,b0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,T0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,w0=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,A0=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,R0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,C0=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,P0=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,L0=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,I0=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,D0=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,U0=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,N0=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,F0=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,O0=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,B0=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,z0=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,G0=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,H0=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,V0=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,k0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,W0=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,X0=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Y0=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,q0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,rt={alphahash_fragment:pp,alphahash_pars_fragment:mp,alphamap_fragment:gp,alphamap_pars_fragment:_p,alphatest_fragment:xp,alphatest_pars_fragment:vp,aomap_fragment:Mp,aomap_pars_fragment:Sp,batching_pars_vertex:yp,batching_vertex:Ep,begin_vertex:bp,beginnormal_vertex:Tp,bsdfs:wp,iridescence_fragment:Ap,bumpmap_pars_fragment:Rp,clipping_planes_fragment:Cp,clipping_planes_pars_fragment:Pp,clipping_planes_pars_vertex:Lp,clipping_planes_vertex:Ip,color_fragment:Dp,color_pars_fragment:Up,color_pars_vertex:Np,color_vertex:Fp,common:Op,cube_uv_reflection_fragment:Bp,defaultnormal_vertex:zp,displacementmap_pars_vertex:Gp,displacementmap_vertex:Hp,emissivemap_fragment:Vp,emissivemap_pars_fragment:kp,colorspace_fragment:Wp,colorspace_pars_fragment:Xp,envmap_fragment:Yp,envmap_common_pars_fragment:qp,envmap_pars_fragment:Zp,envmap_pars_vertex:Jp,envmap_physical_pars_fragment:am,envmap_vertex:Kp,fog_vertex:$p,fog_pars_vertex:jp,fog_fragment:Qp,fog_pars_fragment:em,gradientmap_pars_fragment:tm,lightmap_pars_fragment:nm,lights_lambert_fragment:im,lights_lambert_pars_fragment:sm,lights_pars_begin:rm,lights_toon_fragment:om,lights_toon_pars_fragment:lm,lights_phong_fragment:cm,lights_phong_pars_fragment:hm,lights_physical_fragment:um,lights_physical_pars_fragment:dm,lights_fragment_begin:fm,lights_fragment_maps:pm,lights_fragment_end:mm,lightprobes_pars_fragment:gm,logdepthbuf_fragment:_m,logdepthbuf_pars_fragment:xm,logdepthbuf_pars_vertex:vm,logdepthbuf_vertex:Mm,map_fragment:Sm,map_pars_fragment:ym,map_particle_fragment:Em,map_particle_pars_fragment:bm,metalnessmap_fragment:Tm,metalnessmap_pars_fragment:wm,morphinstance_vertex:Am,morphcolor_vertex:Rm,morphnormal_vertex:Cm,morphtarget_pars_vertex:Pm,morphtarget_vertex:Lm,normal_fragment_begin:Im,normal_fragment_maps:Dm,normal_pars_fragment:Um,normal_pars_vertex:Nm,normal_vertex:Fm,normalmap_pars_fragment:Om,clearcoat_normal_fragment_begin:Bm,clearcoat_normal_fragment_maps:zm,clearcoat_pars_fragment:Gm,iridescence_pars_fragment:Hm,opaque_fragment:Vm,packing:km,premultiplied_alpha_fragment:Wm,project_vertex:Xm,dithering_fragment:Ym,dithering_pars_fragment:qm,roughnessmap_fragment:Zm,roughnessmap_pars_fragment:Jm,shadowmap_pars_fragment:Km,shadowmap_pars_vertex:$m,shadowmap_vertex:jm,shadowmask_pars_fragment:Qm,skinbase_vertex:e0,skinning_pars_vertex:t0,skinning_vertex:n0,skinnormal_vertex:i0,specularmap_fragment:s0,specularmap_pars_fragment:r0,tonemapping_fragment:a0,tonemapping_pars_fragment:o0,transmission_fragment:l0,transmission_pars_fragment:c0,uv_pars_fragment:h0,uv_pars_vertex:u0,uv_vertex:d0,worldpos_vertex:f0,background_vert:p0,background_frag:m0,backgroundCube_vert:g0,backgroundCube_frag:_0,cube_vert:x0,cube_frag:v0,depth_vert:M0,depth_frag:S0,distance_vert:y0,distance_frag:E0,equirect_vert:b0,equirect_frag:T0,linedashed_vert:w0,linedashed_frag:A0,meshbasic_vert:R0,meshbasic_frag:C0,meshlambert_vert:P0,meshlambert_frag:L0,meshmatcap_vert:I0,meshmatcap_frag:D0,meshnormal_vert:U0,meshnormal_frag:N0,meshphong_vert:F0,meshphong_frag:O0,meshphysical_vert:B0,meshphysical_frag:z0,meshtoon_vert:G0,meshtoon_frag:H0,points_vert:V0,points_frag:k0,shadow_vert:W0,shadow_frag:X0,sprite_vert:Y0,sprite_frag:q0},Te={common:{diffuse:{value:new lt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new st},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new st}},envmap:{envMap:{value:null},envMapRotation:{value:new st},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new st}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new st}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new st},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new st},normalScale:{value:new Me(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new st},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new st}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new st}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new st}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new lt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new P},probesMax:{value:new P},probesResolution:{value:new P}},points:{diffuse:{value:new lt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0},uvTransform:{value:new st}},sprite:{diffuse:{value:new lt(16777215)},opacity:{value:1},center:{value:new Me(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new st},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0}}},Hn={basic:{uniforms:sn([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.fog]),vertexShader:rt.meshbasic_vert,fragmentShader:rt.meshbasic_frag},lambert:{uniforms:sn([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,Te.lights,{emissive:{value:new lt(0)},envMapIntensity:{value:1}}]),vertexShader:rt.meshlambert_vert,fragmentShader:rt.meshlambert_frag},phong:{uniforms:sn([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,Te.lights,{emissive:{value:new lt(0)},specular:{value:new lt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:rt.meshphong_vert,fragmentShader:rt.meshphong_frag},standard:{uniforms:sn([Te.common,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.roughnessmap,Te.metalnessmap,Te.fog,Te.lights,{emissive:{value:new lt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:rt.meshphysical_vert,fragmentShader:rt.meshphysical_frag},toon:{uniforms:sn([Te.common,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.gradientmap,Te.fog,Te.lights,{emissive:{value:new lt(0)}}]),vertexShader:rt.meshtoon_vert,fragmentShader:rt.meshtoon_frag},matcap:{uniforms:sn([Te.common,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,{matcap:{value:null}}]),vertexShader:rt.meshmatcap_vert,fragmentShader:rt.meshmatcap_frag},points:{uniforms:sn([Te.points,Te.fog]),vertexShader:rt.points_vert,fragmentShader:rt.points_frag},dashed:{uniforms:sn([Te.common,Te.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:rt.linedashed_vert,fragmentShader:rt.linedashed_frag},depth:{uniforms:sn([Te.common,Te.displacementmap]),vertexShader:rt.depth_vert,fragmentShader:rt.depth_frag},normal:{uniforms:sn([Te.common,Te.bumpmap,Te.normalmap,Te.displacementmap,{opacity:{value:1}}]),vertexShader:rt.meshnormal_vert,fragmentShader:rt.meshnormal_frag},sprite:{uniforms:sn([Te.sprite,Te.fog]),vertexShader:rt.sprite_vert,fragmentShader:rt.sprite_frag},background:{uniforms:{uvTransform:{value:new st},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:rt.background_vert,fragmentShader:rt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new st}},vertexShader:rt.backgroundCube_vert,fragmentShader:rt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:rt.cube_vert,fragmentShader:rt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:rt.equirect_vert,fragmentShader:rt.equirect_frag},distance:{uniforms:sn([Te.common,Te.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:rt.distance_vert,fragmentShader:rt.distance_frag},shadow:{uniforms:sn([Te.lights,Te.fog,{color:{value:new lt(0)},opacity:{value:1}}]),vertexShader:rt.shadow_vert,fragmentShader:rt.shadow_frag}};Hn.physical={uniforms:sn([Hn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new st},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new st},clearcoatNormalScale:{value:new Me(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new st},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new st},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new st},sheen:{value:0},sheenColor:{value:new lt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new st},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new st},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new st},transmissionSamplerSize:{value:new Me},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new st},attenuationDistance:{value:0},attenuationColor:{value:new lt(0)},specularColor:{value:new lt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new st},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new st},anisotropyVector:{value:new Me},anisotropyMap:{value:null},anisotropyMapTransform:{value:new st}}]),vertexShader:rt.meshphysical_vert,fragmentShader:rt.meshphysical_frag};const Kr={r:0,b:0,g:0},Z0=new Et,Eu=new st;Eu.set(-1,0,0,0,1,0,0,0,1);function J0(i,e,t,n,s,r){const a=new lt(0);let o=s===!0?0:1,l,c,u=null,d=0,h=null;function p(v){let S=v.isScene===!0?v.background:null;if(S&&S.isTexture){const M=v.backgroundBlurriness>0;S=e.get(S,M)}return S}function g(v){let S=!1;const M=p(v);M===null?m(a,o):M&&M.isColor&&(m(M,1),S=!0);const R=i.xr.getEnvironmentBlendMode();R==="additive"?t.buffers.color.setClear(0,0,0,1,r):R==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||S)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function E(v,S){const M=p(S);M&&(M.isCubeTexture||M.mapping===ma)?(c===void 0&&(c=new xt(new Us(1,1,1),new qn({name:"BackgroundCubeMaterial",uniforms:Ds(Hn.backgroundCube.uniforms),vertexShader:Hn.backgroundCube.vertexShader,fragmentShader:Hn.backgroundCube.fragmentShader,side:cn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(R,b,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=M,c.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Z0.makeRotationFromEuler(S.backgroundRotation)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Eu),c.material.toneMapped=ut.getTransfer(M.colorSpace)!==yt,(u!==M||d!==M.version||h!==i.toneMapping)&&(c.material.needsUpdate=!0,u=M,d=M.version,h=i.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new xt(new yn(2,2),new qn({name:"BackgroundMaterial",uniforms:Ds(Hn.background.uniforms),vertexShader:Hn.background.vertexShader,fragmentShader:Hn.background.fragmentShader,side:Xn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,l.material.toneMapped=ut.getTransfer(M.colorSpace)!==yt,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(u!==M||d!==M.version||h!==i.toneMapping)&&(l.material.needsUpdate=!0,u=M,d=M.version,h=i.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function m(v,S){v.getRGB(Kr,_u(i)),t.buffers.color.setClear(Kr.r,Kr.g,Kr.b,S,r)}function f(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(v,S=1){a.set(v),o=S,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(v){o=v,m(a,o)},render:g,addToRenderList:E,dispose:f}}function K0(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=h(null);let r=s,a=!1;function o(L,O,X,Y,N){let G=!1;const k=d(L,Y,X,O);r!==k&&(r=k,c(r.object)),G=p(L,Y,X,N),G&&g(L,Y,X,N),N!==null&&e.update(N,i.ELEMENT_ARRAY_BUFFER),(G||a)&&(a=!1,M(L,O,X,Y),N!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(N).buffer))}function l(){return i.createVertexArray()}function c(L){return i.bindVertexArray(L)}function u(L){return i.deleteVertexArray(L)}function d(L,O,X,Y){const N=Y.wireframe===!0;let G=n[O.id];G===void 0&&(G={},n[O.id]=G);const k=L.isInstancedMesh===!0?L.id:0;let ne=G[k];ne===void 0&&(ne={},G[k]=ne);let oe=ne[X.id];oe===void 0&&(oe={},ne[X.id]=oe);let ge=oe[N];return ge===void 0&&(ge=h(l()),oe[N]=ge),ge}function h(L){const O=[],X=[],Y=[];for(let N=0;N<t;N++)O[N]=0,X[N]=0,Y[N]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:X,attributeDivisors:Y,object:L,attributes:{},index:null}}function p(L,O,X,Y){const N=r.attributes,G=O.attributes;let k=0;const ne=X.getAttributes();for(const oe in ne)if(ne[oe].location>=0){const Ae=N[oe];let Ie=G[oe];if(Ie===void 0&&(oe==="instanceMatrix"&&L.instanceMatrix&&(Ie=L.instanceMatrix),oe==="instanceColor"&&L.instanceColor&&(Ie=L.instanceColor)),Ae===void 0||Ae.attribute!==Ie||Ie&&Ae.data!==Ie.data)return!0;k++}return r.attributesNum!==k||r.index!==Y}function g(L,O,X,Y){const N={},G=O.attributes;let k=0;const ne=X.getAttributes();for(const oe in ne)if(ne[oe].location>=0){let Ae=G[oe];Ae===void 0&&(oe==="instanceMatrix"&&L.instanceMatrix&&(Ae=L.instanceMatrix),oe==="instanceColor"&&L.instanceColor&&(Ae=L.instanceColor));const Ie={};Ie.attribute=Ae,Ae&&Ae.data&&(Ie.data=Ae.data),N[oe]=Ie,k++}r.attributes=N,r.attributesNum=k,r.index=Y}function E(){const L=r.newAttributes;for(let O=0,X=L.length;O<X;O++)L[O]=0}function m(L){f(L,0)}function f(L,O){const X=r.newAttributes,Y=r.enabledAttributes,N=r.attributeDivisors;X[L]=1,Y[L]===0&&(i.enableVertexAttribArray(L),Y[L]=1),N[L]!==O&&(i.vertexAttribDivisor(L,O),N[L]=O)}function v(){const L=r.newAttributes,O=r.enabledAttributes;for(let X=0,Y=O.length;X<Y;X++)O[X]!==L[X]&&(i.disableVertexAttribArray(X),O[X]=0)}function S(L,O,X,Y,N,G,k){k===!0?i.vertexAttribIPointer(L,O,X,N,G):i.vertexAttribPointer(L,O,X,Y,N,G)}function M(L,O,X,Y){E();const N=Y.attributes,G=X.getAttributes(),k=O.defaultAttributeValues;for(const ne in G){const oe=G[ne];if(oe.location>=0){let ge=N[ne];if(ge===void 0&&(ne==="instanceMatrix"&&L.instanceMatrix&&(ge=L.instanceMatrix),ne==="instanceColor"&&L.instanceColor&&(ge=L.instanceColor)),ge!==void 0){const Ae=ge.normalized,Ie=ge.itemSize,$e=e.get(ge);if($e===void 0)continue;const ot=$e.buffer,qe=$e.type,K=$e.bytesPerElement,Se=qe===i.INT||qe===i.UNSIGNED_INT||ge.gpuType===gl;if(ge.isInterleavedBufferAttribute){const ce=ge.data,Fe=ce.stride,We=ge.offset;if(ce.isInstancedInterleavedBuffer){for(let Xe=0;Xe<oe.locationSize;Xe++)f(oe.location+Xe,ce.meshPerAttribute);L.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let Xe=0;Xe<oe.locationSize;Xe++)m(oe.location+Xe);i.bindBuffer(i.ARRAY_BUFFER,ot);for(let Xe=0;Xe<oe.locationSize;Xe++)S(oe.location+Xe,Ie/oe.locationSize,qe,Ae,Fe*K,(We+Ie/oe.locationSize*Xe)*K,Se)}else{if(ge.isInstancedBufferAttribute){for(let ce=0;ce<oe.locationSize;ce++)f(oe.location+ce,ge.meshPerAttribute);L.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=ge.meshPerAttribute*ge.count)}else for(let ce=0;ce<oe.locationSize;ce++)m(oe.location+ce);i.bindBuffer(i.ARRAY_BUFFER,ot);for(let ce=0;ce<oe.locationSize;ce++)S(oe.location+ce,Ie/oe.locationSize,qe,Ae,Ie*K,Ie/oe.locationSize*ce*K,Se)}}else if(k!==void 0){const Ae=k[ne];if(Ae!==void 0)switch(Ae.length){case 2:i.vertexAttrib2fv(oe.location,Ae);break;case 3:i.vertexAttrib3fv(oe.location,Ae);break;case 4:i.vertexAttrib4fv(oe.location,Ae);break;default:i.vertexAttrib1fv(oe.location,Ae)}}}}v()}function R(){w();for(const L in n){const O=n[L];for(const X in O){const Y=O[X];for(const N in Y){const G=Y[N];for(const k in G)u(G[k].object),delete G[k];delete Y[N]}}delete n[L]}}function b(L){if(n[L.id]===void 0)return;const O=n[L.id];for(const X in O){const Y=O[X];for(const N in Y){const G=Y[N];for(const k in G)u(G[k].object),delete G[k];delete Y[N]}}delete n[L.id]}function C(L){for(const O in n){const X=n[O];for(const Y in X){const N=X[Y];if(N[L.id]===void 0)continue;const G=N[L.id];for(const k in G)u(G[k].object),delete G[k];delete N[L.id]}}}function _(L){for(const O in n){const X=n[O],Y=L.isInstancedMesh===!0?L.id:0,N=X[Y];if(N!==void 0){for(const G in N){const k=N[G];for(const ne in k)u(k[ne].object),delete k[ne];delete N[G]}delete X[Y],Object.keys(X).length===0&&delete n[O]}}}function w(){D(),a=!0,r!==s&&(r=s,c(r.object))}function D(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:w,resetDefaultState:D,dispose:R,releaseStatesOfGeometry:b,releaseStatesOfObject:_,releaseStatesOfProgram:C,initAttributes:E,enableAttribute:m,disableUnusedAttributes:v}}function $0(i,e,t){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),t.update(c,n,1)}function a(l,c,u){u!==0&&(i.drawArraysInstanced(n,l,c,u),t.update(c,n,u))}function o(l,c,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,u);let h=0;for(let p=0;p<u;p++)h+=c[p];t.update(h,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function j0(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(C){return!(C!==Dn&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){const _=C===li&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==gn&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==In&&!_)}function l(C){if(C==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(Ke("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const d=t.logarithmicDepthBuffer===!0,h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&h===!1&&Ke("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),E=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),v=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),S=i.getParameter(i.MAX_VARYING_VECTORS),M=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),R=i.getParameter(i.MAX_SAMPLES),b=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:h,maxTextures:p,maxVertexTextures:g,maxTextureSize:E,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:v,maxVaryings:S,maxFragmentUniforms:M,maxSamples:R,samples:b}}function Q0(i){const e=this;let t=null,n=0,s=!1,r=!1;const a=new Gi,o=new st,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const p=d.length!==0||h||n!==0||s;return s=h,n=d.length,p},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,h){t=u(d,h,0)},this.setState=function(d,h,p){const g=d.clippingPlanes,E=d.clipIntersection,m=d.clipShadows,f=i.get(d);if(!s||g===null||g.length===0||r&&!m)r?u(null):c();else{const v=r?0:n,S=v*4;let M=f.clippingState||null;l.value=M,M=u(g,h,S,p);for(let R=0;R!==S;++R)M[R]=t[R];f.clippingState=M,this.numIntersection=E?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(d,h,p,g){const E=d!==null?d.length:0;let m=null;if(E!==0){if(m=l.value,g!==!0||m===null){const f=p+E*4,v=h.matrixWorldInverse;o.getNormalMatrix(v),(m===null||m.length<f)&&(m=new Float32Array(f));for(let S=0,M=p;S!==E;++S,M+=4)a.copy(d[S]).applyMatrix4(v,o),a.normal.toArray(m,M),m[M+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=E,e.numIntersection=0,m}}const bi=4,sh=[.125,.215,.35,.446,.526,.582],Vi=20,eg=256,Qs=new Su,rh=new lt;let so=null,ro=0,ao=0,oo=!1;const tg=new P;class ah{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){const{size:a=256,position:o=tg}=r;so=this._renderer.getRenderTarget(),ro=this._renderer.getActiveCubeFace(),ao=this._renderer.getActiveMipmapLevel(),oo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,s,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ch(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=lh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(so,ro,ao),this._renderer.xr.enabled=oo,e.scissorTest=!1,xs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===qi||e.mapping===Cs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),so=this._renderer.getRenderTarget(),ro=this._renderer.getActiveCubeFace(),ao=this._renderer.getActiveMipmapLevel(),oo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:jt,minFilter:jt,generateMipmaps:!1,type:li,format:Dn,colorSpace:ha,depthBuffer:!1},s=oh(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=oh(e,t,n);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=ng(r)),this._blurMaterial=sg(r,e,t),this._ggxMaterial=ig(r,e,t)}return s}_compileMaterial(e){const t=new xt(new Qt,e);this._renderer.compile(t,Qs)}_sceneToCubeUV(e,t,n,s,r){const l=new ln(90,1,t,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,h=d.autoClear,p=d.toneMapping;d.getClearColor(rh),d.toneMapping=kn,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new xt(new Us,new Al({name:"PMREM.Background",side:cn,depthWrite:!1,depthTest:!1})));const E=this._backgroundBox,m=E.material;let f=!1;const v=e.background;v?v.isColor&&(m.color.copy(v),e.background=null,f=!0):(m.color.copy(rh),f=!0);for(let S=0;S<6;S++){const M=S%3;M===0?(l.up.set(0,c[S],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[S],r.y,r.z)):M===1?(l.up.set(0,0,c[S]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[S],r.z)):(l.up.set(0,c[S],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[S]));const R=this._cubeSize;xs(s,M*R,S>2?R:0,R,R),d.setRenderTarget(s),f&&d.render(E,l),d.render(e,l)}d.toneMapping=p,d.autoClear=h,e.background=v}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===qi||e.mapping===Cs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=ch()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=lh());const r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;const o=r.uniforms;o.envMap.value=e;const l=this._cubeSize;xs(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,Qs)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){const s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;const l=a.uniforms,c=n/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),d=Math.sqrt(c*c-u*u),h=0+c*1.25,p=d*h,{_lodMax:g}=this,E=this._sizeLods[n],m=3*E*(n>g-bi?n-g+bi:0),f=4*(this._cubeSize-E);l.envMap.value=e.texture,l.roughness.value=p,l.mipInt.value=g-t,xs(r,m,f,3*E,2*E),s.setRenderTarget(r),s.render(o,Qs),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=g-n,xs(e,m,f,3*E,2*E),s.setRenderTarget(e),s.render(o,Qs)}_blur(e,t,n,s,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,s,"latitudinal",r),this._halfBlur(a,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&ft("blur direction must be either latitudinal or longitudinal!");const u=3,d=this._lodMeshes[s];d.material=c;const h=c.uniforms,p=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Vi-1),E=r/g,m=isFinite(r)?1+Math.floor(u*E):Vi;m>Vi&&Ke(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Vi}`);const f=[];let v=0;for(let C=0;C<Vi;++C){const _=C/E,w=Math.exp(-_*_/2);f.push(w),C===0?v+=w:C<m&&(v+=2*w)}for(let C=0;C<f.length;C++)f[C]=f[C]/v;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=f,h.latitudinal.value=a==="latitudinal",o&&(h.poleAxis.value=o);const{_lodMax:S}=this;h.dTheta.value=g,h.mipInt.value=S-n;const M=this._sizeLods[s],R=3*M*(s>S-bi?s-S+bi:0),b=4*(this._cubeSize-M);xs(t,R,b,3*M,2*M),l.setRenderTarget(t),l.render(d,Qs)}}function ng(i){const e=[],t=[],n=[];let s=i;const r=i-bi+1+sh.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);e.push(o);let l=1/o;a>i-bi?l=sh[a-i+bi-1]:a===0&&(l=0),t.push(l);const c=1/(o-2),u=-c,d=1+c,h=[u,u,d,u,d,d,u,u,d,d,u,d],p=6,g=6,E=3,m=2,f=1,v=new Float32Array(E*g*p),S=new Float32Array(m*g*p),M=new Float32Array(f*g*p);for(let b=0;b<p;b++){const C=b%3*2/3-1,_=b>2?0:-1,w=[C,_,0,C+2/3,_,0,C+2/3,_+1,0,C,_,0,C+2/3,_+1,0,C,_+1,0];v.set(w,E*g*b),S.set(h,m*g*b);const D=[b,b,b,b,b,b];M.set(D,f*g*b)}const R=new Qt;R.setAttribute("position",new Un(v,E)),R.setAttribute("uv",new Un(S,m)),R.setAttribute("faceIndex",new Un(M,f)),n.push(new xt(R,null)),s>bi&&s--}return{lodMeshes:n,sizeLods:e,sigmas:t}}function oh(i,e,t){const n=new Wn(i,e,t);return n.texture.mapping=ma,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function xs(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function ig(i,e,t){return new qn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:eg,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:xa(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:ai,depthTest:!1,depthWrite:!1})}function sg(i,e,t){const n=new Float32Array(Vi),s=new P(0,1,0);return new qn({name:"SphericalGaussianBlur",defines:{n:Vi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:xa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ai,depthTest:!1,depthWrite:!1})}function lh(){return new qn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:xa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ai,depthTest:!1,depthWrite:!1})}function ch(){return new qn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:xa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ai,depthTest:!1,depthWrite:!1})}function xa(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class bu extends Wn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new au(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Us(5,5,5),r=new qn({name:"CubemapFromEquirect",uniforms:Ds(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:cn,blending:ai});r.uniforms.tEquirect.value=t;const a=new xt(s,r),o=t.minFilter;return t.minFilter===Wi&&(t.minFilter=jt),new cp(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}}function rg(i){let e=new WeakMap,t=new WeakMap,n=null;function s(h,p=!1){return h==null?null:p?a(h):r(h)}function r(h){if(h&&h.isTexture){const p=h.mapping;if(p===Ca||p===Pa)if(e.has(h)){const g=e.get(h).texture;return o(g,h.mapping)}else{const g=h.image;if(g&&g.height>0){const E=new bu(g.height);return E.fromEquirectangularTexture(i,h),e.set(h,E),h.addEventListener("dispose",c),o(E.texture,h.mapping)}else return null}}return h}function a(h){if(h&&h.isTexture){const p=h.mapping,g=p===Ca||p===Pa,E=p===qi||p===Cs;if(g||E){let m=t.get(h);const f=m!==void 0?m.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==f)return n===null&&(n=new ah(i)),m=g?n.fromEquirectangular(h,m):n.fromCubemap(h,m),m.texture.pmremVersion=h.pmremVersion,t.set(h,m),m.texture;if(m!==void 0)return m.texture;{const v=h.image;return g&&v&&v.height>0||E&&v&&l(v)?(n===null&&(n=new ah(i)),m=g?n.fromEquirectangular(h):n.fromCubemap(h),m.texture.pmremVersion=h.pmremVersion,t.set(h,m),h.addEventListener("dispose",u),m.texture):null}}}return h}function o(h,p){return p===Ca?h.mapping=qi:p===Pa&&(h.mapping=Cs),h}function l(h){let p=0;const g=6;for(let E=0;E<g;E++)h[E]!==void 0&&p++;return p===g}function c(h){const p=h.target;p.removeEventListener("dispose",c);const g=e.get(p);g!==void 0&&(e.delete(p),g.dispose())}function u(h){const p=h.target;p.removeEventListener("dispose",u);const g=t.get(p);g!==void 0&&(t.delete(p),g.dispose())}function d(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:d}}function ag(i){const e={};function t(n){if(e[n]!==void 0)return e[n];const s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&sl("WebGLRenderer: "+n+" extension not supported."),s}}}function og(i,e,t,n){const s={},r=new WeakMap;function a(d){const h=d.target;h.index!==null&&e.remove(h.index);for(const g in h.attributes)e.remove(h.attributes[g]);h.removeEventListener("dispose",a),delete s[h.id];const p=r.get(h);p&&(e.remove(p),r.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function o(d,h){return s[h.id]===!0||(h.addEventListener("dispose",a),s[h.id]=!0,t.memory.geometries++),h}function l(d){const h=d.attributes;for(const p in h)e.update(h[p],i.ARRAY_BUFFER)}function c(d){const h=[],p=d.index,g=d.attributes.position;let E=0;if(g===void 0)return;if(p!==null){const v=p.array;E=p.version;for(let S=0,M=v.length;S<M;S+=3){const R=v[S+0],b=v[S+1],C=v[S+2];h.push(R,b,b,C,C,R)}}else{const v=g.array;E=g.version;for(let S=0,M=v.length/3-1;S<M;S+=3){const R=S+0,b=S+1,C=S+2;h.push(R,b,b,C,C,R)}}const m=new(g.count>=65535?su:iu)(h,1);m.version=E;const f=r.get(d);f&&e.remove(f),r.set(d,m)}function u(d){const h=r.get(d);if(h){const p=d.index;p!==null&&h.version<p.version&&c(d)}else c(d);return r.get(d)}return{get:o,update:l,getWireframeAttribute:u}}function lg(i,e,t){let n;function s(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,h){i.drawElements(n,h,r,d*a),t.update(h,n,1)}function c(d,h,p){p!==0&&(i.drawElementsInstanced(n,h,r,d*a,p),t.update(h,n,p))}function u(d,h,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,h,0,r,d,0,p);let E=0;for(let m=0;m<p;m++)E+=h[m];t.update(E,n,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function cg(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:ft("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function hg(i,e,t){const n=new WeakMap,s=new It;function r(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=u!==void 0?u.length:0;let h=n.get(o);if(h===void 0||h.count!==d){let w=function(){C.dispose(),n.delete(o),o.removeEventListener("dispose",w)};h!==void 0&&h.texture.dispose();const p=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,E=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],f=o.morphAttributes.normal||[],v=o.morphAttributes.color||[];let S=0;p===!0&&(S=1),g===!0&&(S=2),E===!0&&(S=3);let M=o.attributes.position.count*S,R=1;M>e.maxTextureSize&&(R=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);const b=new Float32Array(M*R*4*d),C=new eu(b,M,R,d);C.type=In,C.needsUpdate=!0;const _=S*4;for(let D=0;D<d;D++){const L=m[D],O=f[D],X=v[D],Y=M*R*4*D;for(let N=0;N<L.count;N++){const G=N*_;p===!0&&(s.fromBufferAttribute(L,N),b[Y+G+0]=s.x,b[Y+G+1]=s.y,b[Y+G+2]=s.z,b[Y+G+3]=0),g===!0&&(s.fromBufferAttribute(O,N),b[Y+G+4]=s.x,b[Y+G+5]=s.y,b[Y+G+6]=s.z,b[Y+G+7]=0),E===!0&&(s.fromBufferAttribute(X,N),b[Y+G+8]=s.x,b[Y+G+9]=s.y,b[Y+G+10]=s.z,b[Y+G+11]=X.itemSize===4?s.w:1)}}h={count:d,texture:C,size:new Me(M,R)},n.set(o,h),o.addEventListener("dispose",w)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let p=0;for(let E=0;E<c.length;E++)p+=c[E];const g=o.morphTargetsRelative?1:1-p;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",h.size)}return{update:r}}function ug(i,e,t,n,s){let r=new WeakMap;function a(c){const u=s.render.frame,d=c.geometry,h=e.get(c,d);if(r.get(h)!==u&&(e.update(h),r.set(h,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==u&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){const p=c.skeleton;r.get(p)!==u&&(p.update(),r.set(p,u))}return h}function o(){r=new WeakMap}function l(c){const u=c.target;u.removeEventListener("dispose",l),n.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:a,dispose:o}}const dg={[Gh]:"LINEAR_TONE_MAPPING",[Hh]:"REINHARD_TONE_MAPPING",[Vh]:"CINEON_TONE_MAPPING",[ml]:"ACES_FILMIC_TONE_MAPPING",[Wh]:"AGX_TONE_MAPPING",[Xh]:"NEUTRAL_TONE_MAPPING",[kh]:"CUSTOM_TONE_MAPPING"};function fg(i,e,t,n,s){const r=new Wn(e,t,{type:i,depthBuffer:n,stencilBuffer:s,depthTexture:n?new Ls(e,t):void 0}),a=new Wn(e,t,{type:li,depthBuffer:!1,stencilBuffer:!1}),o=new Qt;o.setAttribute("position",new bt([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new bt([0,2,0,0,2,0],2));const l=new jf({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),c=new xt(o,l),u=new Su(-1,1,1,-1,0,1);let d=null,h=null,p=!1,g,E=null,m=[],f=!1;this.setSize=function(v,S){r.setSize(v,S),a.setSize(v,S);for(let M=0;M<m.length;M++){const R=m[M];R.setSize&&R.setSize(v,S)}},this.setEffects=function(v){m=v,f=m.length>0&&m[0].isRenderPass===!0;const S=r.width,M=r.height;for(let R=0;R<m.length;R++){const b=m[R];b.setSize&&b.setSize(S,M)}},this.begin=function(v,S){if(p||v.toneMapping===kn&&m.length===0)return!1;if(E=S,S!==null){const M=S.width,R=S.height;(r.width!==M||r.height!==R)&&this.setSize(M,R)}return f===!1&&v.setRenderTarget(r),g=v.toneMapping,v.toneMapping=kn,!0},this.hasRenderPass=function(){return f},this.end=function(v,S){v.toneMapping=g,p=!0;let M=r,R=a;for(let b=0;b<m.length;b++){const C=m[b];if(C.enabled!==!1&&(C.render(v,R,M,S),C.needsSwap!==!1)){const _=M;M=R,R=_}}if(d!==v.outputColorSpace||h!==v.toneMapping){d=v.outputColorSpace,h=v.toneMapping,l.defines={},ut.getTransfer(d)===yt&&(l.defines.SRGB_TRANSFER="");const b=dg[h];b&&(l.defines[b]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=M.texture,v.setRenderTarget(E),v.render(c,u),E=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){r.depthTexture&&r.depthTexture.dispose(),r.dispose(),a.dispose(),o.dispose(),l.dispose()}}const Tu=new Yt,cl=new Ls(1,1),wu=new eu,Au=new $d,Ru=new au,hh=[],uh=[],dh=new Float32Array(16),fh=new Float32Array(9),ph=new Float32Array(4);function Ns(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=hh[s];if(r===void 0&&(r=new Float32Array(s),hh[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function Bt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function zt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function va(i,e){let t=uh[e];t===void 0&&(t=new Int32Array(e),uh[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function pg(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function mg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Bt(t,e))return;i.uniform2fv(this.addr,e),zt(t,e)}}function gg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Bt(t,e))return;i.uniform3fv(this.addr,e),zt(t,e)}}function _g(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Bt(t,e))return;i.uniform4fv(this.addr,e),zt(t,e)}}function xg(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Bt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),zt(t,e)}else{if(Bt(t,n))return;ph.set(n),i.uniformMatrix2fv(this.addr,!1,ph),zt(t,n)}}function vg(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Bt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),zt(t,e)}else{if(Bt(t,n))return;fh.set(n),i.uniformMatrix3fv(this.addr,!1,fh),zt(t,n)}}function Mg(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Bt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),zt(t,e)}else{if(Bt(t,n))return;dh.set(n),i.uniformMatrix4fv(this.addr,!1,dh),zt(t,n)}}function Sg(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function yg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Bt(t,e))return;i.uniform2iv(this.addr,e),zt(t,e)}}function Eg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Bt(t,e))return;i.uniform3iv(this.addr,e),zt(t,e)}}function bg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Bt(t,e))return;i.uniform4iv(this.addr,e),zt(t,e)}}function Tg(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function wg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Bt(t,e))return;i.uniform2uiv(this.addr,e),zt(t,e)}}function Ag(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Bt(t,e))return;i.uniform3uiv(this.addr,e),zt(t,e)}}function Rg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Bt(t,e))return;i.uniform4uiv(this.addr,e),zt(t,e)}}function Cg(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(cl.compareFunction=t.isReversedDepthBuffer()?bl:El,r=cl):r=Tu,t.setTexture2D(e||r,s)}function Pg(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Au,s)}function Lg(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Ru,s)}function Ig(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||wu,s)}function Dg(i){switch(i){case 5126:return pg;case 35664:return mg;case 35665:return gg;case 35666:return _g;case 35674:return xg;case 35675:return vg;case 35676:return Mg;case 5124:case 35670:return Sg;case 35667:case 35671:return yg;case 35668:case 35672:return Eg;case 35669:case 35673:return bg;case 5125:return Tg;case 36294:return wg;case 36295:return Ag;case 36296:return Rg;case 35678:case 36198:case 36298:case 36306:case 35682:return Cg;case 35679:case 36299:case 36307:return Pg;case 35680:case 36300:case 36308:case 36293:return Lg;case 36289:case 36303:case 36311:case 36292:return Ig}}function Ug(i,e){i.uniform1fv(this.addr,e)}function Ng(i,e){const t=Ns(e,this.size,2);i.uniform2fv(this.addr,t)}function Fg(i,e){const t=Ns(e,this.size,3);i.uniform3fv(this.addr,t)}function Og(i,e){const t=Ns(e,this.size,4);i.uniform4fv(this.addr,t)}function Bg(i,e){const t=Ns(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function zg(i,e){const t=Ns(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Gg(i,e){const t=Ns(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Hg(i,e){i.uniform1iv(this.addr,e)}function Vg(i,e){i.uniform2iv(this.addr,e)}function kg(i,e){i.uniform3iv(this.addr,e)}function Wg(i,e){i.uniform4iv(this.addr,e)}function Xg(i,e){i.uniform1uiv(this.addr,e)}function Yg(i,e){i.uniform2uiv(this.addr,e)}function qg(i,e){i.uniform3uiv(this.addr,e)}function Zg(i,e){i.uniform4uiv(this.addr,e)}function Jg(i,e,t){const n=this.cache,s=e.length,r=va(t,s);Bt(n,r)||(i.uniform1iv(this.addr,r),zt(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=cl:a=Tu;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function Kg(i,e,t){const n=this.cache,s=e.length,r=va(t,s);Bt(n,r)||(i.uniform1iv(this.addr,r),zt(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||Au,r[a])}function $g(i,e,t){const n=this.cache,s=e.length,r=va(t,s);Bt(n,r)||(i.uniform1iv(this.addr,r),zt(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||Ru,r[a])}function jg(i,e,t){const n=this.cache,s=e.length,r=va(t,s);Bt(n,r)||(i.uniform1iv(this.addr,r),zt(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||wu,r[a])}function Qg(i){switch(i){case 5126:return Ug;case 35664:return Ng;case 35665:return Fg;case 35666:return Og;case 35674:return Bg;case 35675:return zg;case 35676:return Gg;case 5124:case 35670:return Hg;case 35667:case 35671:return Vg;case 35668:case 35672:return kg;case 35669:case 35673:return Wg;case 5125:return Xg;case 36294:return Yg;case 36295:return qg;case 36296:return Zg;case 35678:case 36198:case 36298:case 36306:case 35682:return Jg;case 35679:case 36299:case 36307:return Kg;case 35680:case 36300:case 36308:case 36293:return $g;case 36289:case 36303:case 36311:case 36292:return jg}}class e_{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Dg(t.type)}}class t_{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Qg(t.type)}}class n_{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(e,t[o.id],n)}}}const lo=/(\w+)(\])?(\[|\.)?/g;function mh(i,e){i.seq.push(e),i.map[e.id]=e}function i_(i,e,t){const n=i.name,s=n.length;for(lo.lastIndex=0;;){const r=lo.exec(n),a=lo.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){mh(t,c===void 0?new e_(o,i,e):new t_(o,i,e));break}else{let d=t.map[o];d===void 0&&(d=new n_(o),mh(t,d)),t=d}}}class ra{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);i_(o,l,this)}const s=[],r=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){const o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const a=e[s];a.id in t&&n.push(a)}return n}}function gh(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const s_=37297;let r_=0;function a_(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const _h=new st;function o_(i){ut._getMatrix(_h,ut.workingColorSpace,i);const e=`mat3( ${_h.elements.map(t=>t.toFixed(4))} )`;switch(ut.getTransfer(i)){case ua:return[e,"LinearTransferOETF"];case yt:return[e,"sRGBTransferOETF"];default:return Ke("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function xh(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+a_(i.getShaderSource(e),o)}else return r}function l_(i,e){const t=o_(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const c_={[Gh]:"Linear",[Hh]:"Reinhard",[Vh]:"Cineon",[ml]:"ACESFilmic",[Wh]:"AgX",[Xh]:"Neutral",[kh]:"Custom"};function h_(i,e){const t=c_[e];return t===void 0?(Ke("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const $r=new P;function u_(){ut.getLuminanceCoefficients($r);const i=$r.x.toFixed(4),e=$r.y.toFixed(4),t=$r.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function d_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(sr).join(`
`)}function f_(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function p_(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function sr(i){return i!==""}function vh(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Mh(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const m_=/^[ \t]*#include +<([\w\d./]+)>/gm;function hl(i){return i.replace(m_,__)}const g_=new Map;function __(i,e){let t=rt[e];if(t===void 0){const n=g_.get(e);if(n!==void 0)t=rt[n],Ke('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return hl(t)}const x_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Sh(i){return i.replace(x_,v_)}function v_(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function yh(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const M_={[Qr]:"SHADOWMAP_TYPE_PCF",[ys]:"SHADOWMAP_TYPE_VSM"};function S_(i){return M_[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const y_={[qi]:"ENVMAP_TYPE_CUBE",[Cs]:"ENVMAP_TYPE_CUBE",[ma]:"ENVMAP_TYPE_CUBE_UV"};function E_(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":y_[i.envMapMode]||"ENVMAP_TYPE_CUBE"}const b_={[Cs]:"ENVMAP_MODE_REFRACTION"};function T_(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":b_[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const w_={[zh]:"ENVMAP_BLENDING_MULTIPLY",[md]:"ENVMAP_BLENDING_MIX",[gd]:"ENVMAP_BLENDING_ADD"};function A_(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":w_[i.combine]||"ENVMAP_BLENDING_NONE"}function R_(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function C_(i,e,t,n){const s=i.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=S_(t),c=E_(t),u=T_(t),d=A_(t),h=R_(t),p=d_(t),g=f_(r),E=s.createProgram();let m,f,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(sr).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(sr).join(`
`),f.length>0&&(f+=`
`)):(m=[yh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(sr).join(`
`),f=[yh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==kn?"#define TONE_MAPPING":"",t.toneMapping!==kn?rt.tonemapping_pars_fragment:"",t.toneMapping!==kn?h_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",rt.colorspace_pars_fragment,l_("linearToOutputTexel",t.outputColorSpace),u_(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(sr).join(`
`)),a=hl(a),a=vh(a,t),a=Mh(a,t),o=hl(o),o=vh(o,t),o=Mh(o,t),a=Sh(a),o=Sh(o),t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",t.glslVersion===Mc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Mc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const S=v+m+a,M=v+f+o,R=gh(s,s.VERTEX_SHADER,S),b=gh(s,s.FRAGMENT_SHADER,M);s.attachShader(E,R),s.attachShader(E,b),t.index0AttributeName!==void 0?s.bindAttribLocation(E,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(E,0,"position"),s.linkProgram(E);function C(L){if(i.debug.checkShaderErrors){const O=s.getProgramInfoLog(E)||"",X=s.getShaderInfoLog(R)||"",Y=s.getShaderInfoLog(b)||"",N=O.trim(),G=X.trim(),k=Y.trim();let ne=!0,oe=!0;if(s.getProgramParameter(E,s.LINK_STATUS)===!1)if(ne=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,E,R,b);else{const ge=xh(s,R,"vertex"),Ae=xh(s,b,"fragment");ft("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(E,s.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+N+`
`+ge+`
`+Ae)}else N!==""?Ke("WebGLProgram: Program Info Log:",N):(G===""||k==="")&&(oe=!1);oe&&(L.diagnostics={runnable:ne,programLog:N,vertexShader:{log:G,prefix:m},fragmentShader:{log:k,prefix:f}})}s.deleteShader(R),s.deleteShader(b),_=new ra(s,E),w=p_(s,E)}let _;this.getUniforms=function(){return _===void 0&&C(this),_};let w;this.getAttributes=function(){return w===void 0&&C(this),w};let D=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return D===!1&&(D=s.getProgramParameter(E,s_)),D},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(E),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=r_++,this.cacheKey=e,this.usedTimes=1,this.program=E,this.vertexShader=R,this.fragmentShader=b,this}let P_=0;class L_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new I_(e),t.set(e,n)),n}}class I_{constructor(e){this.id=P_++,this.code=e,this.usedTimes=0}}function D_(i){return i===Ji||i===la||i===ca}function U_(i,e,t,n,s,r){const a=new tu,o=new L_,l=new Set,c=[],u=new Map,d=n.logarithmicDepthBuffer;let h=n.precision;const p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(_){return l.add(_),_===0?"uv":`uv${_}`}function E(_,w,D,L,O,X){const Y=L.fog,N=O.geometry,G=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?L.environment:null,k=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,ne=e.get(_.envMap||G,k),oe=ne&&ne.mapping===ma?ne.image.height:null,ge=p[_.type];_.precision!==null&&(h=n.getMaxPrecision(_.precision),h!==_.precision&&Ke("WebGLProgram.getParameters:",_.precision,"not supported, using",h,"instead."));const Ae=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,Ie=Ae!==void 0?Ae.length:0;let $e=0;N.morphAttributes.position!==void 0&&($e=1),N.morphAttributes.normal!==void 0&&($e=2),N.morphAttributes.color!==void 0&&($e=3);let ot,qe,K,Se;if(ge){const et=Hn[ge];ot=et.vertexShader,qe=et.fragmentShader}else ot=_.vertexShader,qe=_.fragmentShader,o.update(_),K=o.getVertexShaderID(_),Se=o.getFragmentShaderID(_);const ce=i.getRenderTarget(),Fe=i.state.buffers.depth.getReversed(),We=O.isInstancedMesh===!0,Xe=O.isBatchedMesh===!0,He=!!_.map,Je=!!_.matcap,ee=!!ne,se=!!_.aoMap,J=!!_.lightMap,be=!!_.bumpMap,fe=!!_.normalMap,Ye=!!_.displacementMap,I=!!_.emissiveMap,Ve=!!_.metalnessMap,Ne=!!_.roughnessMap,Ze=_.anisotropy>0,le=_.clearcoat>0,dt=_.dispersion>0,T=_.iridescence>0,x=_.sheen>0,B=_.transmission>0,j=Ze&&!!_.anisotropyMap,ae=le&&!!_.clearcoatMap,he=le&&!!_.clearcoatNormalMap,pe=le&&!!_.clearcoatRoughnessMap,Z=T&&!!_.iridescenceMap,te=T&&!!_.iridescenceThicknessMap,we=x&&!!_.sheenColorMap,De=x&&!!_.sheenRoughnessMap,_e=!!_.specularMap,ue=!!_.specularColorMap,Qe=!!_.specularIntensityMap,tt=B&&!!_.transmissionMap,ht=B&&!!_.thicknessMap,U=!!_.gradientMap,de=!!_.alphaMap,$=_.alphaTest>0,Ce=!!_.alphaHash,me=!!_.extensions;let re=kn;_.toneMapped&&(ce===null||ce.isXRRenderTarget===!0)&&(re=i.toneMapping);const Be={shaderID:ge,shaderType:_.type,shaderName:_.name,vertexShader:ot,fragmentShader:qe,defines:_.defines,customVertexShaderID:K,customFragmentShaderID:Se,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:h,batching:Xe,batchingColor:Xe&&O._colorsTexture!==null,instancing:We,instancingColor:We&&O.instanceColor!==null,instancingMorph:We&&O.morphTexture!==null,outputColorSpace:ce===null?i.outputColorSpace:ce.isXRRenderTarget===!0?ce.texture.colorSpace:ut.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:He,matcap:Je,envMap:ee,envMapMode:ee&&ne.mapping,envMapCubeUVHeight:oe,aoMap:se,lightMap:J,bumpMap:be,normalMap:fe,displacementMap:Ye,emissiveMap:I,normalMapObjectSpace:fe&&_.normalMapType===vd,normalMapTangentSpace:fe&&_.normalMapType===il,packedNormalMap:fe&&_.normalMapType===il&&D_(_.normalMap.format),metalnessMap:Ve,roughnessMap:Ne,anisotropy:Ze,anisotropyMap:j,clearcoat:le,clearcoatMap:ae,clearcoatNormalMap:he,clearcoatRoughnessMap:pe,dispersion:dt,iridescence:T,iridescenceMap:Z,iridescenceThicknessMap:te,sheen:x,sheenColorMap:we,sheenRoughnessMap:De,specularMap:_e,specularColorMap:ue,specularIntensityMap:Qe,transmission:B,transmissionMap:tt,thicknessMap:ht,gradientMap:U,opaque:_.transparent===!1&&_.blending===ws&&_.alphaToCoverage===!1,alphaMap:de,alphaTest:$,alphaHash:Ce,combine:_.combine,mapUv:He&&g(_.map.channel),aoMapUv:se&&g(_.aoMap.channel),lightMapUv:J&&g(_.lightMap.channel),bumpMapUv:be&&g(_.bumpMap.channel),normalMapUv:fe&&g(_.normalMap.channel),displacementMapUv:Ye&&g(_.displacementMap.channel),emissiveMapUv:I&&g(_.emissiveMap.channel),metalnessMapUv:Ve&&g(_.metalnessMap.channel),roughnessMapUv:Ne&&g(_.roughnessMap.channel),anisotropyMapUv:j&&g(_.anisotropyMap.channel),clearcoatMapUv:ae&&g(_.clearcoatMap.channel),clearcoatNormalMapUv:he&&g(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:pe&&g(_.clearcoatRoughnessMap.channel),iridescenceMapUv:Z&&g(_.iridescenceMap.channel),iridescenceThicknessMapUv:te&&g(_.iridescenceThicknessMap.channel),sheenColorMapUv:we&&g(_.sheenColorMap.channel),sheenRoughnessMapUv:De&&g(_.sheenRoughnessMap.channel),specularMapUv:_e&&g(_.specularMap.channel),specularColorMapUv:ue&&g(_.specularColorMap.channel),specularIntensityMapUv:Qe&&g(_.specularIntensityMap.channel),transmissionMapUv:tt&&g(_.transmissionMap.channel),thicknessMapUv:ht&&g(_.thicknessMap.channel),alphaMapUv:de&&g(_.alphaMap.channel),vertexTangents:!!N.attributes.tangent&&(fe||Ze),vertexNormals:!!N.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!N.attributes.uv&&(He||de),fog:!!Y,useFog:_.fog===!0,fogExp2:!!Y&&Y.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||N.attributes.normal===void 0&&fe===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:Fe,skinning:O.isSkinnedMesh===!0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:Ie,morphTextureStride:$e,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numLightProbeGrids:X.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&D.length>0,shadowMapType:i.shadowMap.type,toneMapping:re,decodeVideoTexture:He&&_.map.isVideoTexture===!0&&ut.getTransfer(_.map.colorSpace)===yt,decodeVideoTextureEmissive:I&&_.emissiveMap.isVideoTexture===!0&&ut.getTransfer(_.emissiveMap.colorSpace)===yt,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===En,flipSided:_.side===cn,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:me&&_.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(me&&_.extensions.multiDraw===!0||Xe)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Be.vertexUv1s=l.has(1),Be.vertexUv2s=l.has(2),Be.vertexUv3s=l.has(3),l.clear(),Be}function m(_){const w=[];if(_.shaderID?w.push(_.shaderID):(w.push(_.customVertexShaderID),w.push(_.customFragmentShaderID)),_.defines!==void 0)for(const D in _.defines)w.push(D),w.push(_.defines[D]);return _.isRawShaderMaterial===!1&&(f(w,_),v(w,_),w.push(i.outputColorSpace)),w.push(_.customProgramCacheKey),w.join()}function f(_,w){_.push(w.precision),_.push(w.outputColorSpace),_.push(w.envMapMode),_.push(w.envMapCubeUVHeight),_.push(w.mapUv),_.push(w.alphaMapUv),_.push(w.lightMapUv),_.push(w.aoMapUv),_.push(w.bumpMapUv),_.push(w.normalMapUv),_.push(w.displacementMapUv),_.push(w.emissiveMapUv),_.push(w.metalnessMapUv),_.push(w.roughnessMapUv),_.push(w.anisotropyMapUv),_.push(w.clearcoatMapUv),_.push(w.clearcoatNormalMapUv),_.push(w.clearcoatRoughnessMapUv),_.push(w.iridescenceMapUv),_.push(w.iridescenceThicknessMapUv),_.push(w.sheenColorMapUv),_.push(w.sheenRoughnessMapUv),_.push(w.specularMapUv),_.push(w.specularColorMapUv),_.push(w.specularIntensityMapUv),_.push(w.transmissionMapUv),_.push(w.thicknessMapUv),_.push(w.combine),_.push(w.fogExp2),_.push(w.sizeAttenuation),_.push(w.morphTargetsCount),_.push(w.morphAttributeCount),_.push(w.numDirLights),_.push(w.numPointLights),_.push(w.numSpotLights),_.push(w.numSpotLightMaps),_.push(w.numHemiLights),_.push(w.numRectAreaLights),_.push(w.numDirLightShadows),_.push(w.numPointLightShadows),_.push(w.numSpotLightShadows),_.push(w.numSpotLightShadowsWithMaps),_.push(w.numLightProbes),_.push(w.shadowMapType),_.push(w.toneMapping),_.push(w.numClippingPlanes),_.push(w.numClipIntersection),_.push(w.depthPacking)}function v(_,w){a.disableAll(),w.instancing&&a.enable(0),w.instancingColor&&a.enable(1),w.instancingMorph&&a.enable(2),w.matcap&&a.enable(3),w.envMap&&a.enable(4),w.normalMapObjectSpace&&a.enable(5),w.normalMapTangentSpace&&a.enable(6),w.clearcoat&&a.enable(7),w.iridescence&&a.enable(8),w.alphaTest&&a.enable(9),w.vertexColors&&a.enable(10),w.vertexAlphas&&a.enable(11),w.vertexUv1s&&a.enable(12),w.vertexUv2s&&a.enable(13),w.vertexUv3s&&a.enable(14),w.vertexTangents&&a.enable(15),w.anisotropy&&a.enable(16),w.alphaHash&&a.enable(17),w.batching&&a.enable(18),w.dispersion&&a.enable(19),w.batchingColor&&a.enable(20),w.gradientMap&&a.enable(21),w.packedNormalMap&&a.enable(22),w.vertexNormals&&a.enable(23),_.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.reversedDepthBuffer&&a.enable(4),w.skinning&&a.enable(5),w.morphTargets&&a.enable(6),w.morphNormals&&a.enable(7),w.morphColors&&a.enable(8),w.premultipliedAlpha&&a.enable(9),w.shadowMapEnabled&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),w.decodeVideoTextureEmissive&&a.enable(20),w.alphaToCoverage&&a.enable(21),w.numLightProbeGrids>0&&a.enable(22),_.push(a.mask)}function S(_){const w=p[_.type];let D;if(w){const L=Hn[w];D=Jf.clone(L.uniforms)}else D=_.uniforms;return D}function M(_,w){let D=u.get(w);return D!==void 0?++D.usedTimes:(D=new C_(i,w,_,s),c.push(D),u.set(w,D)),D}function R(_){if(--_.usedTimes===0){const w=c.indexOf(_);c[w]=c[c.length-1],c.pop(),u.delete(_.cacheKey),_.destroy()}}function b(_){o.remove(_)}function C(){o.dispose()}return{getParameters:E,getProgramCacheKey:m,getUniforms:S,acquireProgram:M,releaseProgram:R,releaseShaderCache:b,programs:c,dispose:C}}function N_(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function F_(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function Eh(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function bh(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(h){let p=0;return h.isInstancedMesh&&(p+=2),h.isSkinnedMesh&&(p+=1),p}function o(h,p,g,E,m,f){let v=i[e];return v===void 0?(v={id:h.id,object:h,geometry:p,material:g,materialVariant:a(h),groupOrder:E,renderOrder:h.renderOrder,z:m,group:f},i[e]=v):(v.id=h.id,v.object=h,v.geometry=p,v.material=g,v.materialVariant=a(h),v.groupOrder=E,v.renderOrder=h.renderOrder,v.z=m,v.group=f),e++,v}function l(h,p,g,E,m,f){const v=o(h,p,g,E,m,f);g.transmission>0?n.push(v):g.transparent===!0?s.push(v):t.push(v)}function c(h,p,g,E,m,f){const v=o(h,p,g,E,m,f);g.transmission>0?n.unshift(v):g.transparent===!0?s.unshift(v):t.unshift(v)}function u(h,p){t.length>1&&t.sort(h||F_),n.length>1&&n.sort(p||Eh),s.length>1&&s.sort(p||Eh)}function d(){for(let h=e,p=i.length;h<p;h++){const g=i[h];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:d,sort:u}}function O_(){let i=new WeakMap;function e(n,s){const r=i.get(n);let a;return r===void 0?(a=new bh,i.set(n,[a])):s>=r.length?(a=new bh,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function B_(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new P,color:new lt};break;case"SpotLight":t={position:new P,direction:new P,color:new lt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new P,color:new lt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new P,skyColor:new lt,groundColor:new lt};break;case"RectAreaLight":t={color:new lt,position:new P,halfWidth:new P,halfHeight:new P};break}return i[e.id]=t,t}}}function z_(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Me};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Me};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Me,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let G_=0;function H_(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function V_(i){const e=new B_,t=z_(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new P);const s=new P,r=new Et,a=new Et;function o(c){let u=0,d=0,h=0;for(let w=0;w<9;w++)n.probe[w].set(0,0,0);let p=0,g=0,E=0,m=0,f=0,v=0,S=0,M=0,R=0,b=0,C=0;c.sort(H_);for(let w=0,D=c.length;w<D;w++){const L=c[w],O=L.color,X=L.intensity,Y=L.distance;let N=null;if(L.shadow&&L.shadow.map&&(L.shadow.map.texture.format===Ji?N=L.shadow.map.texture:N=L.shadow.map.depthTexture||L.shadow.map.texture),L.isAmbientLight)u+=O.r*X,d+=O.g*X,h+=O.b*X;else if(L.isLightProbe){for(let G=0;G<9;G++)n.probe[G].addScaledVector(L.sh.coefficients[G],X);C++}else if(L.isDirectionalLight){const G=e.get(L);if(G.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const k=L.shadow,ne=t.get(L);ne.shadowIntensity=k.intensity,ne.shadowBias=k.bias,ne.shadowNormalBias=k.normalBias,ne.shadowRadius=k.radius,ne.shadowMapSize=k.mapSize,n.directionalShadow[p]=ne,n.directionalShadowMap[p]=N,n.directionalShadowMatrix[p]=L.shadow.matrix,v++}n.directional[p]=G,p++}else if(L.isSpotLight){const G=e.get(L);G.position.setFromMatrixPosition(L.matrixWorld),G.color.copy(O).multiplyScalar(X),G.distance=Y,G.coneCos=Math.cos(L.angle),G.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),G.decay=L.decay,n.spot[E]=G;const k=L.shadow;if(L.map&&(n.spotLightMap[R]=L.map,R++,k.updateMatrices(L),L.castShadow&&b++),n.spotLightMatrix[E]=k.matrix,L.castShadow){const ne=t.get(L);ne.shadowIntensity=k.intensity,ne.shadowBias=k.bias,ne.shadowNormalBias=k.normalBias,ne.shadowRadius=k.radius,ne.shadowMapSize=k.mapSize,n.spotShadow[E]=ne,n.spotShadowMap[E]=N,M++}E++}else if(L.isRectAreaLight){const G=e.get(L);G.color.copy(O).multiplyScalar(X),G.halfWidth.set(L.width*.5,0,0),G.halfHeight.set(0,L.height*.5,0),n.rectArea[m]=G,m++}else if(L.isPointLight){const G=e.get(L);if(G.color.copy(L.color).multiplyScalar(L.intensity),G.distance=L.distance,G.decay=L.decay,L.castShadow){const k=L.shadow,ne=t.get(L);ne.shadowIntensity=k.intensity,ne.shadowBias=k.bias,ne.shadowNormalBias=k.normalBias,ne.shadowRadius=k.radius,ne.shadowMapSize=k.mapSize,ne.shadowCameraNear=k.camera.near,ne.shadowCameraFar=k.camera.far,n.pointShadow[g]=ne,n.pointShadowMap[g]=N,n.pointShadowMatrix[g]=L.shadow.matrix,S++}n.point[g]=G,g++}else if(L.isHemisphereLight){const G=e.get(L);G.skyColor.copy(L.color).multiplyScalar(X),G.groundColor.copy(L.groundColor).multiplyScalar(X),n.hemi[f]=G,f++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Te.LTC_FLOAT_1,n.rectAreaLTC2=Te.LTC_FLOAT_2):(n.rectAreaLTC1=Te.LTC_HALF_1,n.rectAreaLTC2=Te.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=d,n.ambient[2]=h;const _=n.hash;(_.directionalLength!==p||_.pointLength!==g||_.spotLength!==E||_.rectAreaLength!==m||_.hemiLength!==f||_.numDirectionalShadows!==v||_.numPointShadows!==S||_.numSpotShadows!==M||_.numSpotMaps!==R||_.numLightProbes!==C)&&(n.directional.length=p,n.spot.length=E,n.rectArea.length=m,n.point.length=g,n.hemi.length=f,n.directionalShadow.length=v,n.directionalShadowMap.length=v,n.pointShadow.length=S,n.pointShadowMap.length=S,n.spotShadow.length=M,n.spotShadowMap.length=M,n.directionalShadowMatrix.length=v,n.pointShadowMatrix.length=S,n.spotLightMatrix.length=M+R-b,n.spotLightMap.length=R,n.numSpotLightShadowsWithMaps=b,n.numLightProbes=C,_.directionalLength=p,_.pointLength=g,_.spotLength=E,_.rectAreaLength=m,_.hemiLength=f,_.numDirectionalShadows=v,_.numPointShadows=S,_.numSpotShadows=M,_.numSpotMaps=R,_.numLightProbes=C,n.version=G_++)}function l(c,u){let d=0,h=0,p=0,g=0,E=0;const m=u.matrixWorldInverse;for(let f=0,v=c.length;f<v;f++){const S=c[f];if(S.isDirectionalLight){const M=n.directional[d];M.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(m),d++}else if(S.isSpotLight){const M=n.spot[p];M.position.setFromMatrixPosition(S.matrixWorld),M.position.applyMatrix4(m),M.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(m),p++}else if(S.isRectAreaLight){const M=n.rectArea[g];M.position.setFromMatrixPosition(S.matrixWorld),M.position.applyMatrix4(m),a.identity(),r.copy(S.matrixWorld),r.premultiply(m),a.extractRotation(r),M.halfWidth.set(S.width*.5,0,0),M.halfHeight.set(0,S.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),g++}else if(S.isPointLight){const M=n.point[h];M.position.setFromMatrixPosition(S.matrixWorld),M.position.applyMatrix4(m),h++}else if(S.isHemisphereLight){const M=n.hemi[E];M.direction.setFromMatrixPosition(S.matrixWorld),M.direction.transformDirection(m),E++}}}return{setup:o,setupView:l,state:n}}function Th(i){const e=new V_(i),t=[],n=[],s=[];function r(h){d.camera=h,t.length=0,n.length=0,s.length=0}function a(h){t.push(h)}function o(h){n.push(h)}function l(h){s.push(h)}function c(){e.setup(t)}function u(h){e.setupView(t,h)}const d={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:d,setupLights:c,setupLightsView:u,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function k_(i){let e=new WeakMap;function t(s,r=0){const a=e.get(s);let o;return a===void 0?(o=new Th(i),e.set(s,[o])):r>=a.length?(o=new Th(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const W_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,X_=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Y_=[new P(1,0,0),new P(-1,0,0),new P(0,1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1)],q_=[new P(0,-1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1),new P(0,-1,0),new P(0,-1,0)],wh=new Et,er=new P,co=new P;function Z_(i,e,t){let n=new Rl;const s=new Me,r=new Me,a=new It,o=new Qf,l=new ep,c={},u=t.maxTextureSize,d={[Xn]:cn,[cn]:Xn,[En]:En},h=new qn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Me},radius:{value:4}},vertexShader:W_,fragmentShader:X_}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const g=new Qt;g.setAttribute("position",new Un(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const E=new xt(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Qr;let f=this.type;this.render=function(b,C,_){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||b.length===0)return;this.type===Ku&&(Ke("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Qr);const w=i.getRenderTarget(),D=i.getActiveCubeFace(),L=i.getActiveMipmapLevel(),O=i.state;O.setBlending(ai),O.buffers.depth.getReversed()===!0?O.buffers.color.setClear(0,0,0,0):O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const X=f!==this.type;X&&C.traverse(function(Y){Y.material&&(Array.isArray(Y.material)?Y.material.forEach(N=>N.needsUpdate=!0):Y.material.needsUpdate=!0)});for(let Y=0,N=b.length;Y<N;Y++){const G=b[Y],k=G.shadow;if(k===void 0){Ke("WebGLShadowMap:",G,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;s.copy(k.mapSize);const ne=k.getFrameExtents();s.multiply(ne),r.copy(k.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/ne.x),s.x=r.x*ne.x,k.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/ne.y),s.y=r.y*ne.y,k.mapSize.y=r.y));const oe=i.state.buffers.depth.getReversed();if(k.camera._reversedDepth=oe,k.map===null||X===!0){if(k.map!==null&&(k.map.depthTexture!==null&&(k.map.depthTexture.dispose(),k.map.depthTexture=null),k.map.dispose()),this.type===ys){if(G.isPointLight){Ke("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}k.map=new Wn(s.x,s.y,{format:Ji,type:li,minFilter:jt,magFilter:jt,generateMipmaps:!1}),k.map.texture.name=G.name+".shadowMap",k.map.depthTexture=new Ls(s.x,s.y,In),k.map.depthTexture.name=G.name+".shadowMapDepth",k.map.depthTexture.format=ci,k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=Xt,k.map.depthTexture.magFilter=Xt}else G.isPointLight?(k.map=new bu(s.x),k.map.depthTexture=new gf(s.x,Yn)):(k.map=new Wn(s.x,s.y),k.map.depthTexture=new Ls(s.x,s.y,Yn)),k.map.depthTexture.name=G.name+".shadowMap",k.map.depthTexture.format=ci,this.type===Qr?(k.map.depthTexture.compareFunction=oe?bl:El,k.map.depthTexture.minFilter=jt,k.map.depthTexture.magFilter=jt):(k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=Xt,k.map.depthTexture.magFilter=Xt);k.camera.updateProjectionMatrix()}const ge=k.map.isWebGLCubeRenderTarget?6:1;for(let Ae=0;Ae<ge;Ae++){if(k.map.isWebGLCubeRenderTarget)i.setRenderTarget(k.map,Ae),i.clear();else{Ae===0&&(i.setRenderTarget(k.map),i.clear());const Ie=k.getViewport(Ae);a.set(r.x*Ie.x,r.y*Ie.y,r.x*Ie.z,r.y*Ie.w),O.viewport(a)}if(G.isPointLight){const Ie=k.camera,$e=k.matrix,ot=G.distance||Ie.far;ot!==Ie.far&&(Ie.far=ot,Ie.updateProjectionMatrix()),er.setFromMatrixPosition(G.matrixWorld),Ie.position.copy(er),co.copy(Ie.position),co.add(Y_[Ae]),Ie.up.copy(q_[Ae]),Ie.lookAt(co),Ie.updateMatrixWorld(),$e.makeTranslation(-er.x,-er.y,-er.z),wh.multiplyMatrices(Ie.projectionMatrix,Ie.matrixWorldInverse),k._frustum.setFromProjectionMatrix(wh,Ie.coordinateSystem,Ie.reversedDepth)}else k.updateMatrices(G);n=k.getFrustum(),M(C,_,k.camera,G,this.type)}k.isPointLightShadow!==!0&&this.type===ys&&v(k,_),k.needsUpdate=!1}f=this.type,m.needsUpdate=!1,i.setRenderTarget(w,D,L)};function v(b,C){const _=e.update(E);h.defines.VSM_SAMPLES!==b.blurSamples&&(h.defines.VSM_SAMPLES=b.blurSamples,p.defines.VSM_SAMPLES=b.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new Wn(s.x,s.y,{format:Ji,type:li})),h.uniforms.shadow_pass.value=b.map.depthTexture,h.uniforms.resolution.value=b.mapSize,h.uniforms.radius.value=b.radius,i.setRenderTarget(b.mapPass),i.clear(),i.renderBufferDirect(C,null,_,h,E,null),p.uniforms.shadow_pass.value=b.mapPass.texture,p.uniforms.resolution.value=b.mapSize,p.uniforms.radius.value=b.radius,i.setRenderTarget(b.map),i.clear(),i.renderBufferDirect(C,null,_,p,E,null)}function S(b,C,_,w){let D=null;const L=_.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(L!==void 0)D=L;else if(D=_.isPointLight===!0?l:o,i.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){const O=D.uuid,X=C.uuid;let Y=c[O];Y===void 0&&(Y={},c[O]=Y);let N=Y[X];N===void 0&&(N=D.clone(),Y[X]=N,C.addEventListener("dispose",R)),D=N}if(D.visible=C.visible,D.wireframe=C.wireframe,w===ys?D.side=C.shadowSide!==null?C.shadowSide:C.side:D.side=C.shadowSide!==null?C.shadowSide:d[C.side],D.alphaMap=C.alphaMap,D.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,D.map=C.map,D.clipShadows=C.clipShadows,D.clippingPlanes=C.clippingPlanes,D.clipIntersection=C.clipIntersection,D.displacementMap=C.displacementMap,D.displacementScale=C.displacementScale,D.displacementBias=C.displacementBias,D.wireframeLinewidth=C.wireframeLinewidth,D.linewidth=C.linewidth,_.isPointLight===!0&&D.isMeshDistanceMaterial===!0){const O=i.properties.get(D);O.light=_}return D}function M(b,C,_,w,D){if(b.visible===!1)return;if(b.layers.test(C.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&D===ys)&&(!b.frustumCulled||n.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,b.matrixWorld);const X=e.update(b),Y=b.material;if(Array.isArray(Y)){const N=X.groups;for(let G=0,k=N.length;G<k;G++){const ne=N[G],oe=Y[ne.materialIndex];if(oe&&oe.visible){const ge=S(b,oe,w,D);b.onBeforeShadow(i,b,C,_,X,ge,ne),i.renderBufferDirect(_,null,X,ge,b,ne),b.onAfterShadow(i,b,C,_,X,ge,ne)}}}else if(Y.visible){const N=S(b,Y,w,D);b.onBeforeShadow(i,b,C,_,X,N,null),i.renderBufferDirect(_,null,X,N,b,null),b.onAfterShadow(i,b,C,_,X,N,null)}}const O=b.children;for(let X=0,Y=O.length;X<Y;X++)M(O[X],C,_,w,D)}function R(b){b.target.removeEventListener("dispose",R);for(const _ in c){const w=c[_],D=b.target.uuid;D in w&&(w[D].dispose(),delete w[D])}}}function J_(i,e){function t(){let U=!1;const de=new It;let $=null;const Ce=new It(0,0,0,0);return{setMask:function(me){$!==me&&!U&&(i.colorMask(me,me,me,me),$=me)},setLocked:function(me){U=me},setClear:function(me,re,Be,et,Ct){Ct===!0&&(me*=et,re*=et,Be*=et),de.set(me,re,Be,et),Ce.equals(de)===!1&&(i.clearColor(me,re,Be,et),Ce.copy(de))},reset:function(){U=!1,$=null,Ce.set(-1,0,0,0)}}}function n(){let U=!1,de=!1,$=null,Ce=null,me=null;return{setReversed:function(re){if(de!==re){const Be=e.get("EXT_clip_control");re?Be.clipControlEXT(Be.LOWER_LEFT_EXT,Be.ZERO_TO_ONE_EXT):Be.clipControlEXT(Be.LOWER_LEFT_EXT,Be.NEGATIVE_ONE_TO_ONE_EXT),de=re;const et=me;me=null,this.setClear(et)}},getReversed:function(){return de},setTest:function(re){re?ce(i.DEPTH_TEST):Fe(i.DEPTH_TEST)},setMask:function(re){$!==re&&!U&&(i.depthMask(re),$=re)},setFunc:function(re){if(de&&(re=Cd[re]),Ce!==re){switch(re){case vo:i.depthFunc(i.NEVER);break;case Mo:i.depthFunc(i.ALWAYS);break;case So:i.depthFunc(i.LESS);break;case Rs:i.depthFunc(i.LEQUAL);break;case yo:i.depthFunc(i.EQUAL);break;case Eo:i.depthFunc(i.GEQUAL);break;case bo:i.depthFunc(i.GREATER);break;case To:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Ce=re}},setLocked:function(re){U=re},setClear:function(re){me!==re&&(me=re,de&&(re=1-re),i.clearDepth(re))},reset:function(){U=!1,$=null,Ce=null,me=null,de=!1}}}function s(){let U=!1,de=null,$=null,Ce=null,me=null,re=null,Be=null,et=null,Ct=null;return{setTest:function(_t){U||(_t?ce(i.STENCIL_TEST):Fe(i.STENCIL_TEST))},setMask:function(_t){de!==_t&&!U&&(i.stencilMask(_t),de=_t)},setFunc:function(_t,_n,hn){($!==_t||Ce!==_n||me!==hn)&&(i.stencilFunc(_t,_n,hn),$=_t,Ce=_n,me=hn)},setOp:function(_t,_n,hn){(re!==_t||Be!==_n||et!==hn)&&(i.stencilOp(_t,_n,hn),re=_t,Be=_n,et=hn)},setLocked:function(_t){U=_t},setClear:function(_t){Ct!==_t&&(i.clearStencil(_t),Ct=_t)},reset:function(){U=!1,de=null,$=null,Ce=null,me=null,re=null,Be=null,et=null,Ct=null}}}const r=new t,a=new n,o=new s,l=new WeakMap,c=new WeakMap;let u={},d={},h={},p=new WeakMap,g=[],E=null,m=!1,f=null,v=null,S=null,M=null,R=null,b=null,C=null,_=new lt(0,0,0),w=0,D=!1,L=null,O=null,X=null,Y=null,N=null;const G=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let k=!1,ne=0;const oe=i.getParameter(i.VERSION);oe.indexOf("WebGL")!==-1?(ne=parseFloat(/^WebGL (\d)/.exec(oe)[1]),k=ne>=1):oe.indexOf("OpenGL ES")!==-1&&(ne=parseFloat(/^OpenGL ES (\d)/.exec(oe)[1]),k=ne>=2);let ge=null,Ae={};const Ie=i.getParameter(i.SCISSOR_BOX),$e=i.getParameter(i.VIEWPORT),ot=new It().fromArray(Ie),qe=new It().fromArray($e);function K(U,de,$,Ce){const me=new Uint8Array(4),re=i.createTexture();i.bindTexture(U,re),i.texParameteri(U,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(U,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Be=0;Be<$;Be++)U===i.TEXTURE_3D||U===i.TEXTURE_2D_ARRAY?i.texImage3D(de,0,i.RGBA,1,1,Ce,0,i.RGBA,i.UNSIGNED_BYTE,me):i.texImage2D(de+Be,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,me);return re}const Se={};Se[i.TEXTURE_2D]=K(i.TEXTURE_2D,i.TEXTURE_2D,1),Se[i.TEXTURE_CUBE_MAP]=K(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Se[i.TEXTURE_2D_ARRAY]=K(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Se[i.TEXTURE_3D]=K(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ce(i.DEPTH_TEST),a.setFunc(Rs),be(!1),fe(mc),ce(i.CULL_FACE),se(ai);function ce(U){u[U]!==!0&&(i.enable(U),u[U]=!0)}function Fe(U){u[U]!==!1&&(i.disable(U),u[U]=!1)}function We(U,de){return h[U]!==de?(i.bindFramebuffer(U,de),h[U]=de,U===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=de),U===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=de),!0):!1}function Xe(U,de){let $=g,Ce=!1;if(U){$=p.get(de),$===void 0&&($=[],p.set(de,$));const me=U.textures;if($.length!==me.length||$[0]!==i.COLOR_ATTACHMENT0){for(let re=0,Be=me.length;re<Be;re++)$[re]=i.COLOR_ATTACHMENT0+re;$.length=me.length,Ce=!0}}else $[0]!==i.BACK&&($[0]=i.BACK,Ce=!0);Ce&&i.drawBuffers($)}function He(U){return E!==U?(i.useProgram(U),E=U,!0):!1}const Je={[Hi]:i.FUNC_ADD,[ju]:i.FUNC_SUBTRACT,[Qu]:i.FUNC_REVERSE_SUBTRACT};Je[ed]=i.MIN,Je[td]=i.MAX;const ee={[nd]:i.ZERO,[id]:i.ONE,[sd]:i.SRC_COLOR,[_o]:i.SRC_ALPHA,[hd]:i.SRC_ALPHA_SATURATE,[ld]:i.DST_COLOR,[ad]:i.DST_ALPHA,[rd]:i.ONE_MINUS_SRC_COLOR,[xo]:i.ONE_MINUS_SRC_ALPHA,[cd]:i.ONE_MINUS_DST_COLOR,[od]:i.ONE_MINUS_DST_ALPHA,[ud]:i.CONSTANT_COLOR,[dd]:i.ONE_MINUS_CONSTANT_COLOR,[fd]:i.CONSTANT_ALPHA,[pd]:i.ONE_MINUS_CONSTANT_ALPHA};function se(U,de,$,Ce,me,re,Be,et,Ct,_t){if(U===ai){m===!0&&(Fe(i.BLEND),m=!1);return}if(m===!1&&(ce(i.BLEND),m=!0),U!==$u){if(U!==f||_t!==D){if((v!==Hi||R!==Hi)&&(i.blendEquation(i.FUNC_ADD),v=Hi,R=Hi),_t)switch(U){case ws:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case go:i.blendFunc(i.ONE,i.ONE);break;case gc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case _c:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:ft("WebGLState: Invalid blending: ",U);break}else switch(U){case ws:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case go:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case gc:ft("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case _c:ft("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ft("WebGLState: Invalid blending: ",U);break}S=null,M=null,b=null,C=null,_.set(0,0,0),w=0,f=U,D=_t}return}me=me||de,re=re||$,Be=Be||Ce,(de!==v||me!==R)&&(i.blendEquationSeparate(Je[de],Je[me]),v=de,R=me),($!==S||Ce!==M||re!==b||Be!==C)&&(i.blendFuncSeparate(ee[$],ee[Ce],ee[re],ee[Be]),S=$,M=Ce,b=re,C=Be),(et.equals(_)===!1||Ct!==w)&&(i.blendColor(et.r,et.g,et.b,Ct),_.copy(et),w=Ct),f=U,D=!1}function J(U,de){U.side===En?Fe(i.CULL_FACE):ce(i.CULL_FACE);let $=U.side===cn;de&&($=!$),be($),U.blending===ws&&U.transparent===!1?se(ai):se(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),a.setFunc(U.depthFunc),a.setTest(U.depthTest),a.setMask(U.depthWrite),r.setMask(U.colorWrite);const Ce=U.stencilWrite;o.setTest(Ce),Ce&&(o.setMask(U.stencilWriteMask),o.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),o.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),I(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?ce(i.SAMPLE_ALPHA_TO_COVERAGE):Fe(i.SAMPLE_ALPHA_TO_COVERAGE)}function be(U){L!==U&&(U?i.frontFace(i.CW):i.frontFace(i.CCW),L=U)}function fe(U){U!==Zu?(ce(i.CULL_FACE),U!==O&&(U===mc?i.cullFace(i.BACK):U===Ju?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Fe(i.CULL_FACE),O=U}function Ye(U){U!==X&&(k&&i.lineWidth(U),X=U)}function I(U,de,$){U?(ce(i.POLYGON_OFFSET_FILL),(Y!==de||N!==$)&&(Y=de,N=$,a.getReversed()&&(de=-de),i.polygonOffset(de,$))):Fe(i.POLYGON_OFFSET_FILL)}function Ve(U){U?ce(i.SCISSOR_TEST):Fe(i.SCISSOR_TEST)}function Ne(U){U===void 0&&(U=i.TEXTURE0+G-1),ge!==U&&(i.activeTexture(U),ge=U)}function Ze(U,de,$){$===void 0&&(ge===null?$=i.TEXTURE0+G-1:$=ge);let Ce=Ae[$];Ce===void 0&&(Ce={type:void 0,texture:void 0},Ae[$]=Ce),(Ce.type!==U||Ce.texture!==de)&&(ge!==$&&(i.activeTexture($),ge=$),i.bindTexture(U,de||Se[U]),Ce.type=U,Ce.texture=de)}function le(){const U=Ae[ge];U!==void 0&&U.type!==void 0&&(i.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function dt(){try{i.compressedTexImage2D(...arguments)}catch(U){ft("WebGLState:",U)}}function T(){try{i.compressedTexImage3D(...arguments)}catch(U){ft("WebGLState:",U)}}function x(){try{i.texSubImage2D(...arguments)}catch(U){ft("WebGLState:",U)}}function B(){try{i.texSubImage3D(...arguments)}catch(U){ft("WebGLState:",U)}}function j(){try{i.compressedTexSubImage2D(...arguments)}catch(U){ft("WebGLState:",U)}}function ae(){try{i.compressedTexSubImage3D(...arguments)}catch(U){ft("WebGLState:",U)}}function he(){try{i.texStorage2D(...arguments)}catch(U){ft("WebGLState:",U)}}function pe(){try{i.texStorage3D(...arguments)}catch(U){ft("WebGLState:",U)}}function Z(){try{i.texImage2D(...arguments)}catch(U){ft("WebGLState:",U)}}function te(){try{i.texImage3D(...arguments)}catch(U){ft("WebGLState:",U)}}function we(U){return d[U]!==void 0?d[U]:i.getParameter(U)}function De(U,de){d[U]!==de&&(i.pixelStorei(U,de),d[U]=de)}function _e(U){ot.equals(U)===!1&&(i.scissor(U.x,U.y,U.z,U.w),ot.copy(U))}function ue(U){qe.equals(U)===!1&&(i.viewport(U.x,U.y,U.z,U.w),qe.copy(U))}function Qe(U,de){let $=c.get(de);$===void 0&&($=new WeakMap,c.set(de,$));let Ce=$.get(U);Ce===void 0&&(Ce=i.getUniformBlockIndex(de,U.name),$.set(U,Ce))}function tt(U,de){const Ce=c.get(de).get(U);l.get(de)!==Ce&&(i.uniformBlockBinding(de,Ce,U.__bindingPointIndex),l.set(de,Ce))}function ht(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),u={},d={},ge=null,Ae={},h={},p=new WeakMap,g=[],E=null,m=!1,f=null,v=null,S=null,M=null,R=null,b=null,C=null,_=new lt(0,0,0),w=0,D=!1,L=null,O=null,X=null,Y=null,N=null,ot.set(0,0,i.canvas.width,i.canvas.height),qe.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:ce,disable:Fe,bindFramebuffer:We,drawBuffers:Xe,useProgram:He,setBlending:se,setMaterial:J,setFlipSided:be,setCullFace:fe,setLineWidth:Ye,setPolygonOffset:I,setScissorTest:Ve,activeTexture:Ne,bindTexture:Ze,unbindTexture:le,compressedTexImage2D:dt,compressedTexImage3D:T,texImage2D:Z,texImage3D:te,pixelStorei:De,getParameter:we,updateUBOMapping:Qe,uniformBlockBinding:tt,texStorage2D:he,texStorage3D:pe,texSubImage2D:x,texSubImage3D:B,compressedTexSubImage2D:j,compressedTexSubImage3D:ae,scissor:_e,viewport:ue,reset:ht}}function K_(i,e,t,n,s,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Me,u=new WeakMap,d=new Set;let h;const p=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(T,x){return g?new OffscreenCanvas(T,x):pr("canvas")}function m(T,x,B){let j=1;const ae=dt(T);if((ae.width>B||ae.height>B)&&(j=B/Math.max(ae.width,ae.height)),j<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const he=Math.floor(j*ae.width),pe=Math.floor(j*ae.height);h===void 0&&(h=E(he,pe));const Z=x?E(he,pe):h;return Z.width=he,Z.height=pe,Z.getContext("2d").drawImage(T,0,0,he,pe),Ke("WebGLRenderer: Texture has been resized from ("+ae.width+"x"+ae.height+") to ("+he+"x"+pe+")."),Z}else return"data"in T&&Ke("WebGLRenderer: Image in DataTexture is too big ("+ae.width+"x"+ae.height+")."),T;return T}function f(T){return T.generateMipmaps}function v(T){i.generateMipmap(T)}function S(T){return T.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?i.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function M(T,x,B,j,ae,he=!1){if(T!==null){if(i[T]!==void 0)return i[T];Ke("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let pe;j&&(pe=e.get("EXT_texture_norm16"),pe||Ke("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Z=x;if(x===i.RED&&(B===i.FLOAT&&(Z=i.R32F),B===i.HALF_FLOAT&&(Z=i.R16F),B===i.UNSIGNED_BYTE&&(Z=i.R8),B===i.UNSIGNED_SHORT&&pe&&(Z=pe.R16_EXT),B===i.SHORT&&pe&&(Z=pe.R16_SNORM_EXT)),x===i.RED_INTEGER&&(B===i.UNSIGNED_BYTE&&(Z=i.R8UI),B===i.UNSIGNED_SHORT&&(Z=i.R16UI),B===i.UNSIGNED_INT&&(Z=i.R32UI),B===i.BYTE&&(Z=i.R8I),B===i.SHORT&&(Z=i.R16I),B===i.INT&&(Z=i.R32I)),x===i.RG&&(B===i.FLOAT&&(Z=i.RG32F),B===i.HALF_FLOAT&&(Z=i.RG16F),B===i.UNSIGNED_BYTE&&(Z=i.RG8),B===i.UNSIGNED_SHORT&&pe&&(Z=pe.RG16_EXT),B===i.SHORT&&pe&&(Z=pe.RG16_SNORM_EXT)),x===i.RG_INTEGER&&(B===i.UNSIGNED_BYTE&&(Z=i.RG8UI),B===i.UNSIGNED_SHORT&&(Z=i.RG16UI),B===i.UNSIGNED_INT&&(Z=i.RG32UI),B===i.BYTE&&(Z=i.RG8I),B===i.SHORT&&(Z=i.RG16I),B===i.INT&&(Z=i.RG32I)),x===i.RGB_INTEGER&&(B===i.UNSIGNED_BYTE&&(Z=i.RGB8UI),B===i.UNSIGNED_SHORT&&(Z=i.RGB16UI),B===i.UNSIGNED_INT&&(Z=i.RGB32UI),B===i.BYTE&&(Z=i.RGB8I),B===i.SHORT&&(Z=i.RGB16I),B===i.INT&&(Z=i.RGB32I)),x===i.RGBA_INTEGER&&(B===i.UNSIGNED_BYTE&&(Z=i.RGBA8UI),B===i.UNSIGNED_SHORT&&(Z=i.RGBA16UI),B===i.UNSIGNED_INT&&(Z=i.RGBA32UI),B===i.BYTE&&(Z=i.RGBA8I),B===i.SHORT&&(Z=i.RGBA16I),B===i.INT&&(Z=i.RGBA32I)),x===i.RGB&&(B===i.UNSIGNED_SHORT&&pe&&(Z=pe.RGB16_EXT),B===i.SHORT&&pe&&(Z=pe.RGB16_SNORM_EXT),B===i.UNSIGNED_INT_5_9_9_9_REV&&(Z=i.RGB9_E5),B===i.UNSIGNED_INT_10F_11F_11F_REV&&(Z=i.R11F_G11F_B10F)),x===i.RGBA){const te=he?ua:ut.getTransfer(ae);B===i.FLOAT&&(Z=i.RGBA32F),B===i.HALF_FLOAT&&(Z=i.RGBA16F),B===i.UNSIGNED_BYTE&&(Z=te===yt?i.SRGB8_ALPHA8:i.RGBA8),B===i.UNSIGNED_SHORT&&pe&&(Z=pe.RGBA16_EXT),B===i.SHORT&&pe&&(Z=pe.RGBA16_SNORM_EXT),B===i.UNSIGNED_SHORT_4_4_4_4&&(Z=i.RGBA4),B===i.UNSIGNED_SHORT_5_5_5_1&&(Z=i.RGB5_A1)}return(Z===i.R16F||Z===i.R32F||Z===i.RG16F||Z===i.RG32F||Z===i.RGBA16F||Z===i.RGBA32F)&&e.get("EXT_color_buffer_float"),Z}function R(T,x){let B;return T?x===null||x===Yn||x===dr?B=i.DEPTH24_STENCIL8:x===In?B=i.DEPTH32F_STENCIL8:x===ur&&(B=i.DEPTH24_STENCIL8,Ke("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===Yn||x===dr?B=i.DEPTH_COMPONENT24:x===In?B=i.DEPTH_COMPONENT32F:x===ur&&(B=i.DEPTH_COMPONENT16),B}function b(T,x){return f(T)===!0||T.isFramebufferTexture&&T.minFilter!==Xt&&T.minFilter!==jt?Math.log2(Math.max(x.width,x.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?x.mipmaps.length:1}function C(T){const x=T.target;x.removeEventListener("dispose",C),w(x),x.isVideoTexture&&u.delete(x),x.isHTMLTexture&&d.delete(x)}function _(T){const x=T.target;x.removeEventListener("dispose",_),L(x)}function w(T){const x=n.get(T);if(x.__webglInit===void 0)return;const B=T.source,j=p.get(B);if(j){const ae=j[x.__cacheKey];ae.usedTimes--,ae.usedTimes===0&&D(T),Object.keys(j).length===0&&p.delete(B)}n.remove(T)}function D(T){const x=n.get(T);i.deleteTexture(x.__webglTexture);const B=T.source,j=p.get(B);delete j[x.__cacheKey],a.memory.textures--}function L(T){const x=n.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),n.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(x.__webglFramebuffer[j]))for(let ae=0;ae<x.__webglFramebuffer[j].length;ae++)i.deleteFramebuffer(x.__webglFramebuffer[j][ae]);else i.deleteFramebuffer(x.__webglFramebuffer[j]);x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer[j])}else{if(Array.isArray(x.__webglFramebuffer))for(let j=0;j<x.__webglFramebuffer.length;j++)i.deleteFramebuffer(x.__webglFramebuffer[j]);else i.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&i.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let j=0;j<x.__webglColorRenderbuffer.length;j++)x.__webglColorRenderbuffer[j]&&i.deleteRenderbuffer(x.__webglColorRenderbuffer[j]);x.__webglDepthRenderbuffer&&i.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const B=T.textures;for(let j=0,ae=B.length;j<ae;j++){const he=n.get(B[j]);he.__webglTexture&&(i.deleteTexture(he.__webglTexture),a.memory.textures--),n.remove(B[j])}n.remove(T)}let O=0;function X(){O=0}function Y(){return O}function N(T){O=T}function G(){const T=O;return T>=s.maxTextures&&Ke("WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+s.maxTextures),O+=1,T}function k(T){const x=[];return x.push(T.wrapS),x.push(T.wrapT),x.push(T.wrapR||0),x.push(T.magFilter),x.push(T.minFilter),x.push(T.anisotropy),x.push(T.internalFormat),x.push(T.format),x.push(T.type),x.push(T.generateMipmaps),x.push(T.premultiplyAlpha),x.push(T.flipY),x.push(T.unpackAlignment),x.push(T.colorSpace),x.join()}function ne(T,x){const B=n.get(T);if(T.isVideoTexture&&Ze(T),T.isRenderTargetTexture===!1&&T.isExternalTexture!==!0&&T.version>0&&B.__version!==T.version){const j=T.image;if(j===null)Ke("WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)Ke("WebGLRenderer: Texture marked for update but image is incomplete");else{Fe(B,T,x);return}}else T.isExternalTexture&&(B.__webglTexture=T.sourceTexture?T.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,B.__webglTexture,i.TEXTURE0+x)}function oe(T,x){const B=n.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&B.__version!==T.version){Fe(B,T,x);return}else T.isExternalTexture&&(B.__webglTexture=T.sourceTexture?T.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,B.__webglTexture,i.TEXTURE0+x)}function ge(T,x){const B=n.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&B.__version!==T.version){Fe(B,T,x);return}t.bindTexture(i.TEXTURE_3D,B.__webglTexture,i.TEXTURE0+x)}function Ae(T,x){const B=n.get(T);if(T.isCubeDepthTexture!==!0&&T.version>0&&B.__version!==T.version){We(B,T,x);return}t.bindTexture(i.TEXTURE_CUBE_MAP,B.__webglTexture,i.TEXTURE0+x)}const Ie={[Zi]:i.REPEAT,[rn]:i.CLAMP_TO_EDGE,[wo]:i.MIRRORED_REPEAT},$e={[Xt]:i.NEAREST,[_d]:i.NEAREST_MIPMAP_NEAREST,[Ar]:i.NEAREST_MIPMAP_LINEAR,[jt]:i.LINEAR,[La]:i.LINEAR_MIPMAP_NEAREST,[Wi]:i.LINEAR_MIPMAP_LINEAR},ot={[Md]:i.NEVER,[Td]:i.ALWAYS,[Sd]:i.LESS,[El]:i.LEQUAL,[yd]:i.EQUAL,[bl]:i.GEQUAL,[Ed]:i.GREATER,[bd]:i.NOTEQUAL};function qe(T,x){if(x.type===In&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===jt||x.magFilter===La||x.magFilter===Ar||x.magFilter===Wi||x.minFilter===jt||x.minFilter===La||x.minFilter===Ar||x.minFilter===Wi)&&Ke("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(T,i.TEXTURE_WRAP_S,Ie[x.wrapS]),i.texParameteri(T,i.TEXTURE_WRAP_T,Ie[x.wrapT]),(T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY)&&i.texParameteri(T,i.TEXTURE_WRAP_R,Ie[x.wrapR]),i.texParameteri(T,i.TEXTURE_MAG_FILTER,$e[x.magFilter]),i.texParameteri(T,i.TEXTURE_MIN_FILTER,$e[x.minFilter]),x.compareFunction&&(i.texParameteri(T,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(T,i.TEXTURE_COMPARE_FUNC,ot[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===Xt||x.minFilter!==Ar&&x.minFilter!==Wi||x.type===In&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){const B=e.get("EXT_texture_filter_anisotropic");i.texParameterf(T,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function K(T,x){let B=!1;T.__webglInit===void 0&&(T.__webglInit=!0,x.addEventListener("dispose",C));const j=x.source;let ae=p.get(j);ae===void 0&&(ae={},p.set(j,ae));const he=k(x);if(he!==T.__cacheKey){ae[he]===void 0&&(ae[he]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,B=!0),ae[he].usedTimes++;const pe=ae[T.__cacheKey];pe!==void 0&&(ae[T.__cacheKey].usedTimes--,pe.usedTimes===0&&D(x)),T.__cacheKey=he,T.__webglTexture=ae[he].texture}return B}function Se(T,x,B){return Math.floor(Math.floor(T/B)/x)}function ce(T,x,B,j){const he=T.updateRanges;if(he.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,x.width,x.height,B,j,x.data);else{he.sort((De,_e)=>De.start-_e.start);let pe=0;for(let De=1;De<he.length;De++){const _e=he[pe],ue=he[De],Qe=_e.start+_e.count,tt=Se(ue.start,x.width,4),ht=Se(_e.start,x.width,4);ue.start<=Qe+1&&tt===ht&&Se(ue.start+ue.count-1,x.width,4)===tt?_e.count=Math.max(_e.count,ue.start+ue.count-_e.start):(++pe,he[pe]=ue)}he.length=pe+1;const Z=t.getParameter(i.UNPACK_ROW_LENGTH),te=t.getParameter(i.UNPACK_SKIP_PIXELS),we=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,x.width);for(let De=0,_e=he.length;De<_e;De++){const ue=he[De],Qe=Math.floor(ue.start/4),tt=Math.ceil(ue.count/4),ht=Qe%x.width,U=Math.floor(Qe/x.width),de=tt,$=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,ht),t.pixelStorei(i.UNPACK_SKIP_ROWS,U),t.texSubImage2D(i.TEXTURE_2D,0,ht,U,de,$,B,j,x.data)}T.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,Z),t.pixelStorei(i.UNPACK_SKIP_PIXELS,te),t.pixelStorei(i.UNPACK_SKIP_ROWS,we)}}function Fe(T,x,B){let j=i.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(j=i.TEXTURE_2D_ARRAY),x.isData3DTexture&&(j=i.TEXTURE_3D);const ae=K(T,x),he=x.source;t.bindTexture(j,T.__webglTexture,i.TEXTURE0+B);const pe=n.get(he);if(he.version!==pe.__version||ae===!0){if(t.activeTexture(i.TEXTURE0+B),(typeof ImageBitmap<"u"&&x.image instanceof ImageBitmap)===!1){const $=ut.getPrimaries(ut.workingColorSpace),Ce=x.colorSpace===Ei?null:ut.getPrimaries(x.colorSpace),me=x.colorSpace===Ei||$===Ce?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,me)}t.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment);let te=m(x.image,!1,s.maxTextureSize);te=le(x,te);const we=r.convert(x.format,x.colorSpace),De=r.convert(x.type);let _e=M(x.internalFormat,we,De,x.normalized,x.colorSpace,x.isVideoTexture);qe(j,x);let ue;const Qe=x.mipmaps,tt=x.isVideoTexture!==!0,ht=pe.__version===void 0||ae===!0,U=he.dataReady,de=b(x,te);if(x.isDepthTexture)_e=R(x.format===Xi,x.type),ht&&(tt?t.texStorage2D(i.TEXTURE_2D,1,_e,te.width,te.height):t.texImage2D(i.TEXTURE_2D,0,_e,te.width,te.height,0,we,De,null));else if(x.isDataTexture)if(Qe.length>0){tt&&ht&&t.texStorage2D(i.TEXTURE_2D,de,_e,Qe[0].width,Qe[0].height);for(let $=0,Ce=Qe.length;$<Ce;$++)ue=Qe[$],tt?U&&t.texSubImage2D(i.TEXTURE_2D,$,0,0,ue.width,ue.height,we,De,ue.data):t.texImage2D(i.TEXTURE_2D,$,_e,ue.width,ue.height,0,we,De,ue.data);x.generateMipmaps=!1}else tt?(ht&&t.texStorage2D(i.TEXTURE_2D,de,_e,te.width,te.height),U&&ce(x,te,we,De)):t.texImage2D(i.TEXTURE_2D,0,_e,te.width,te.height,0,we,De,te.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){tt&&ht&&t.texStorage3D(i.TEXTURE_2D_ARRAY,de,_e,Qe[0].width,Qe[0].height,te.depth);for(let $=0,Ce=Qe.length;$<Ce;$++)if(ue=Qe[$],x.format!==Dn)if(we!==null)if(tt){if(U)if(x.layerUpdates.size>0){const me=ih(ue.width,ue.height,x.format,x.type);for(const re of x.layerUpdates){const Be=ue.data.subarray(re*me/ue.data.BYTES_PER_ELEMENT,(re+1)*me/ue.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,$,0,0,re,ue.width,ue.height,1,we,Be)}x.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,$,0,0,0,ue.width,ue.height,te.depth,we,ue.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,$,_e,ue.width,ue.height,te.depth,0,ue.data,0,0);else Ke("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else tt?U&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,$,0,0,0,ue.width,ue.height,te.depth,we,De,ue.data):t.texImage3D(i.TEXTURE_2D_ARRAY,$,_e,ue.width,ue.height,te.depth,0,we,De,ue.data)}else{tt&&ht&&t.texStorage2D(i.TEXTURE_2D,de,_e,Qe[0].width,Qe[0].height);for(let $=0,Ce=Qe.length;$<Ce;$++)ue=Qe[$],x.format!==Dn?we!==null?tt?U&&t.compressedTexSubImage2D(i.TEXTURE_2D,$,0,0,ue.width,ue.height,we,ue.data):t.compressedTexImage2D(i.TEXTURE_2D,$,_e,ue.width,ue.height,0,ue.data):Ke("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):tt?U&&t.texSubImage2D(i.TEXTURE_2D,$,0,0,ue.width,ue.height,we,De,ue.data):t.texImage2D(i.TEXTURE_2D,$,_e,ue.width,ue.height,0,we,De,ue.data)}else if(x.isDataArrayTexture)if(tt){if(ht&&t.texStorage3D(i.TEXTURE_2D_ARRAY,de,_e,te.width,te.height,te.depth),U)if(x.layerUpdates.size>0){const $=ih(te.width,te.height,x.format,x.type);for(const Ce of x.layerUpdates){const me=te.data.subarray(Ce*$/te.data.BYTES_PER_ELEMENT,(Ce+1)*$/te.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Ce,te.width,te.height,1,we,De,me)}x.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,te.width,te.height,te.depth,we,De,te.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,_e,te.width,te.height,te.depth,0,we,De,te.data);else if(x.isData3DTexture)tt?(ht&&t.texStorage3D(i.TEXTURE_3D,de,_e,te.width,te.height,te.depth),U&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,te.width,te.height,te.depth,we,De,te.data)):t.texImage3D(i.TEXTURE_3D,0,_e,te.width,te.height,te.depth,0,we,De,te.data);else if(x.isFramebufferTexture){if(ht)if(tt)t.texStorage2D(i.TEXTURE_2D,de,_e,te.width,te.height);else{let $=te.width,Ce=te.height;for(let me=0;me<de;me++)t.texImage2D(i.TEXTURE_2D,me,_e,$,Ce,0,we,De,null),$>>=1,Ce>>=1}}else if(x.isHTMLTexture){if("texElementImage2D"in i){const $=i.canvas;if($.hasAttribute("layoutsubtree")||$.setAttribute("layoutsubtree","true"),te.parentNode!==$){$.appendChild(te),d.add(x),$.onpaint=et=>{const Ct=et.changedElements;for(const _t of d)Ct.includes(_t.image)&&(_t.needsUpdate=!0)},$.requestPaint();return}const Ce=0,me=i.RGBA,re=i.RGBA,Be=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,Ce,me,re,Be,te),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Qe.length>0){if(tt&&ht){const $=dt(Qe[0]);t.texStorage2D(i.TEXTURE_2D,de,_e,$.width,$.height)}for(let $=0,Ce=Qe.length;$<Ce;$++)ue=Qe[$],tt?U&&t.texSubImage2D(i.TEXTURE_2D,$,0,0,we,De,ue):t.texImage2D(i.TEXTURE_2D,$,_e,we,De,ue);x.generateMipmaps=!1}else if(tt){if(ht){const $=dt(te);t.texStorage2D(i.TEXTURE_2D,de,_e,$.width,$.height)}U&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,we,De,te)}else t.texImage2D(i.TEXTURE_2D,0,_e,we,De,te);f(x)&&v(j),pe.__version=he.version,x.onUpdate&&x.onUpdate(x)}T.__version=x.version}function We(T,x,B){if(x.image.length!==6)return;const j=K(T,x),ae=x.source;t.bindTexture(i.TEXTURE_CUBE_MAP,T.__webglTexture,i.TEXTURE0+B);const he=n.get(ae);if(ae.version!==he.__version||j===!0){t.activeTexture(i.TEXTURE0+B);const pe=ut.getPrimaries(ut.workingColorSpace),Z=x.colorSpace===Ei?null:ut.getPrimaries(x.colorSpace),te=x.colorSpace===Ei||pe===Z?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,te);const we=x.isCompressedTexture||x.image[0].isCompressedTexture,De=x.image[0]&&x.image[0].isDataTexture,_e=[];for(let re=0;re<6;re++)!we&&!De?_e[re]=m(x.image[re],!0,s.maxCubemapSize):_e[re]=De?x.image[re].image:x.image[re],_e[re]=le(x,_e[re]);const ue=_e[0],Qe=r.convert(x.format,x.colorSpace),tt=r.convert(x.type),ht=M(x.internalFormat,Qe,tt,x.normalized,x.colorSpace),U=x.isVideoTexture!==!0,de=he.__version===void 0||j===!0,$=ae.dataReady;let Ce=b(x,ue);qe(i.TEXTURE_CUBE_MAP,x);let me;if(we){U&&de&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Ce,ht,ue.width,ue.height);for(let re=0;re<6;re++){me=_e[re].mipmaps;for(let Be=0;Be<me.length;Be++){const et=me[Be];x.format!==Dn?Qe!==null?U?$&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Be,0,0,et.width,et.height,Qe,et.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Be,ht,et.width,et.height,0,et.data):Ke("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):U?$&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Be,0,0,et.width,et.height,Qe,tt,et.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Be,ht,et.width,et.height,0,Qe,tt,et.data)}}}else{if(me=x.mipmaps,U&&de){me.length>0&&Ce++;const re=dt(_e[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Ce,ht,re.width,re.height)}for(let re=0;re<6;re++)if(De){U?$&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,_e[re].width,_e[re].height,Qe,tt,_e[re].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,ht,_e[re].width,_e[re].height,0,Qe,tt,_e[re].data);for(let Be=0;Be<me.length;Be++){const Ct=me[Be].image[re].image;U?$&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Be+1,0,0,Ct.width,Ct.height,Qe,tt,Ct.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Be+1,ht,Ct.width,Ct.height,0,Qe,tt,Ct.data)}}else{U?$&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,Qe,tt,_e[re]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,ht,Qe,tt,_e[re]);for(let Be=0;Be<me.length;Be++){const et=me[Be];U?$&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Be+1,0,0,Qe,tt,et.image[re]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Be+1,ht,Qe,tt,et.image[re])}}}f(x)&&v(i.TEXTURE_CUBE_MAP),he.__version=ae.version,x.onUpdate&&x.onUpdate(x)}T.__version=x.version}function Xe(T,x,B,j,ae,he){const pe=r.convert(B.format,B.colorSpace),Z=r.convert(B.type),te=M(B.internalFormat,pe,Z,B.normalized,B.colorSpace),we=n.get(x),De=n.get(B);if(De.__renderTarget=x,!we.__hasExternalTextures){const _e=Math.max(1,x.width>>he),ue=Math.max(1,x.height>>he);ae===i.TEXTURE_3D||ae===i.TEXTURE_2D_ARRAY?t.texImage3D(ae,he,te,_e,ue,x.depth,0,pe,Z,null):t.texImage2D(ae,he,te,_e,ue,0,pe,Z,null)}t.bindFramebuffer(i.FRAMEBUFFER,T),Ne(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,j,ae,De.__webglTexture,0,Ve(x)):(ae===i.TEXTURE_2D||ae>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ae<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,j,ae,De.__webglTexture,he),t.bindFramebuffer(i.FRAMEBUFFER,null)}function He(T,x,B){if(i.bindRenderbuffer(i.RENDERBUFFER,T),x.depthBuffer){const j=x.depthTexture,ae=j&&j.isDepthTexture?j.type:null,he=R(x.stencilBuffer,ae),pe=x.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Ne(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ve(x),he,x.width,x.height):B?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ve(x),he,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,he,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,pe,i.RENDERBUFFER,T)}else{const j=x.textures;for(let ae=0;ae<j.length;ae++){const he=j[ae],pe=r.convert(he.format,he.colorSpace),Z=r.convert(he.type),te=M(he.internalFormat,pe,Z,he.normalized,he.colorSpace);Ne(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ve(x),te,x.width,x.height):B?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ve(x),te,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,te,x.width,x.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Je(T,x,B){const j=x.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,T),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ae=n.get(x.depthTexture);if(ae.__renderTarget=x,(!ae.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),j){if(ae.__webglInit===void 0&&(ae.__webglInit=!0,x.depthTexture.addEventListener("dispose",C)),ae.__webglTexture===void 0){ae.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,ae.__webglTexture),qe(i.TEXTURE_CUBE_MAP,x.depthTexture);const we=r.convert(x.depthTexture.format),De=r.convert(x.depthTexture.type);let _e;x.depthTexture.format===ci?_e=i.DEPTH_COMPONENT24:x.depthTexture.format===Xi&&(_e=i.DEPTH24_STENCIL8);for(let ue=0;ue<6;ue++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,_e,x.width,x.height,0,we,De,null)}}else ne(x.depthTexture,0);const he=ae.__webglTexture,pe=Ve(x),Z=j?i.TEXTURE_CUBE_MAP_POSITIVE_X+B:i.TEXTURE_2D,te=x.depthTexture.format===Xi?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(x.depthTexture.format===ci)Ne(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,te,Z,he,0,pe):i.framebufferTexture2D(i.FRAMEBUFFER,te,Z,he,0);else if(x.depthTexture.format===Xi)Ne(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,te,Z,he,0,pe):i.framebufferTexture2D(i.FRAMEBUFFER,te,Z,he,0);else throw new Error("Unknown depthTexture format")}function ee(T){const x=n.get(T),B=T.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==T.depthTexture){const j=T.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),j){const ae=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,j.removeEventListener("dispose",ae)};j.addEventListener("dispose",ae),x.__depthDisposeCallback=ae}x.__boundDepthTexture=j}if(T.depthTexture&&!x.__autoAllocateDepthBuffer)if(B)for(let j=0;j<6;j++)Je(x.__webglFramebuffer[j],T,j);else{const j=T.texture.mipmaps;j&&j.length>0?Je(x.__webglFramebuffer[0],T,0):Je(x.__webglFramebuffer,T,0)}else if(B){x.__webglDepthbuffer=[];for(let j=0;j<6;j++)if(t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[j]),x.__webglDepthbuffer[j]===void 0)x.__webglDepthbuffer[j]=i.createRenderbuffer(),He(x.__webglDepthbuffer[j],T,!1);else{const ae=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,he=x.__webglDepthbuffer[j];i.bindRenderbuffer(i.RENDERBUFFER,he),i.framebufferRenderbuffer(i.FRAMEBUFFER,ae,i.RENDERBUFFER,he)}}else{const j=T.texture.mipmaps;if(j&&j.length>0?t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=i.createRenderbuffer(),He(x.__webglDepthbuffer,T,!1);else{const ae=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,he=x.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,he),i.framebufferRenderbuffer(i.FRAMEBUFFER,ae,i.RENDERBUFFER,he)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function se(T,x,B){const j=n.get(T);x!==void 0&&Xe(j.__webglFramebuffer,T,T.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),B!==void 0&&ee(T)}function J(T){const x=T.texture,B=n.get(T),j=n.get(x);T.addEventListener("dispose",_);const ae=T.textures,he=T.isWebGLCubeRenderTarget===!0,pe=ae.length>1;if(pe||(j.__webglTexture===void 0&&(j.__webglTexture=i.createTexture()),j.__version=x.version,a.memory.textures++),he){B.__webglFramebuffer=[];for(let Z=0;Z<6;Z++)if(x.mipmaps&&x.mipmaps.length>0){B.__webglFramebuffer[Z]=[];for(let te=0;te<x.mipmaps.length;te++)B.__webglFramebuffer[Z][te]=i.createFramebuffer()}else B.__webglFramebuffer[Z]=i.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){B.__webglFramebuffer=[];for(let Z=0;Z<x.mipmaps.length;Z++)B.__webglFramebuffer[Z]=i.createFramebuffer()}else B.__webglFramebuffer=i.createFramebuffer();if(pe)for(let Z=0,te=ae.length;Z<te;Z++){const we=n.get(ae[Z]);we.__webglTexture===void 0&&(we.__webglTexture=i.createTexture(),a.memory.textures++)}if(T.samples>0&&Ne(T)===!1){B.__webglMultisampledFramebuffer=i.createFramebuffer(),B.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let Z=0;Z<ae.length;Z++){const te=ae[Z];B.__webglColorRenderbuffer[Z]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,B.__webglColorRenderbuffer[Z]);const we=r.convert(te.format,te.colorSpace),De=r.convert(te.type),_e=M(te.internalFormat,we,De,te.normalized,te.colorSpace,T.isXRRenderTarget===!0),ue=Ve(T);i.renderbufferStorageMultisample(i.RENDERBUFFER,ue,_e,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Z,i.RENDERBUFFER,B.__webglColorRenderbuffer[Z])}i.bindRenderbuffer(i.RENDERBUFFER,null),T.depthBuffer&&(B.__webglDepthRenderbuffer=i.createRenderbuffer(),He(B.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(he){t.bindTexture(i.TEXTURE_CUBE_MAP,j.__webglTexture),qe(i.TEXTURE_CUBE_MAP,x);for(let Z=0;Z<6;Z++)if(x.mipmaps&&x.mipmaps.length>0)for(let te=0;te<x.mipmaps.length;te++)Xe(B.__webglFramebuffer[Z][te],T,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,te);else Xe(B.__webglFramebuffer[Z],T,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0);f(x)&&v(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(pe){for(let Z=0,te=ae.length;Z<te;Z++){const we=ae[Z],De=n.get(we);let _e=i.TEXTURE_2D;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(_e=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(_e,De.__webglTexture),qe(_e,we),Xe(B.__webglFramebuffer,T,we,i.COLOR_ATTACHMENT0+Z,_e,0),f(we)&&v(_e)}t.unbindTexture()}else{let Z=i.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(Z=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Z,j.__webglTexture),qe(Z,x),x.mipmaps&&x.mipmaps.length>0)for(let te=0;te<x.mipmaps.length;te++)Xe(B.__webglFramebuffer[te],T,x,i.COLOR_ATTACHMENT0,Z,te);else Xe(B.__webglFramebuffer,T,x,i.COLOR_ATTACHMENT0,Z,0);f(x)&&v(Z),t.unbindTexture()}T.depthBuffer&&ee(T)}function be(T){const x=T.textures;for(let B=0,j=x.length;B<j;B++){const ae=x[B];if(f(ae)){const he=S(T),pe=n.get(ae).__webglTexture;t.bindTexture(he,pe),v(he),t.unbindTexture()}}}const fe=[],Ye=[];function I(T){if(T.samples>0){if(Ne(T)===!1){const x=T.textures,B=T.width,j=T.height;let ae=i.COLOR_BUFFER_BIT;const he=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,pe=n.get(T),Z=x.length>1;if(Z)for(let we=0;we<x.length;we++)t.bindFramebuffer(i.FRAMEBUFFER,pe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+we,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,pe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+we,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,pe.__webglMultisampledFramebuffer);const te=T.texture.mipmaps;te&&te.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,pe.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,pe.__webglFramebuffer);for(let we=0;we<x.length;we++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(ae|=i.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(ae|=i.STENCIL_BUFFER_BIT)),Z){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,pe.__webglColorRenderbuffer[we]);const De=n.get(x[we]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,De,0)}i.blitFramebuffer(0,0,B,j,0,0,B,j,ae,i.NEAREST),l===!0&&(fe.length=0,Ye.length=0,fe.push(i.COLOR_ATTACHMENT0+we),T.depthBuffer&&T.resolveDepthBuffer===!1&&(fe.push(he),Ye.push(he),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Ye)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,fe))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Z)for(let we=0;we<x.length;we++){t.bindFramebuffer(i.FRAMEBUFFER,pe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+we,i.RENDERBUFFER,pe.__webglColorRenderbuffer[we]);const De=n.get(x[we]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,pe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+we,i.TEXTURE_2D,De,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,pe.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&l){const x=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[x])}}}function Ve(T){return Math.min(s.maxSamples,T.samples)}function Ne(T){const x=n.get(T);return T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function Ze(T){const x=a.render.frame;u.get(T)!==x&&(u.set(T,x),T.update())}function le(T,x){const B=T.colorSpace,j=T.format,ae=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||B!==ha&&B!==Ei&&(ut.getTransfer(B)===yt?(j!==Dn||ae!==gn)&&Ke("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ft("WebGLTextures: Unsupported texture color space:",B)),x}function dt(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=G,this.resetTextureUnits=X,this.getTextureUnits=Y,this.setTextureUnits=N,this.setTexture2D=ne,this.setTexture2DArray=oe,this.setTexture3D=ge,this.setTextureCube=Ae,this.rebindTextures=se,this.setupRenderTarget=J,this.updateRenderTargetMipmap=be,this.updateMultisampleRenderTarget=I,this.setupDepthRenderbuffer=ee,this.setupFrameBufferTexture=Xe,this.useMultisampledRTT=Ne,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function $_(i,e){function t(n,s=Ei){let r;const a=ut.getTransfer(s);if(n===gn)return i.UNSIGNED_BYTE;if(n===_l)return i.UNSIGNED_SHORT_4_4_4_4;if(n===xl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Jh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Kh)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===qh)return i.BYTE;if(n===Zh)return i.SHORT;if(n===ur)return i.UNSIGNED_SHORT;if(n===gl)return i.INT;if(n===Yn)return i.UNSIGNED_INT;if(n===In)return i.FLOAT;if(n===li)return i.HALF_FLOAT;if(n===$h)return i.ALPHA;if(n===jh)return i.RGB;if(n===Dn)return i.RGBA;if(n===ci)return i.DEPTH_COMPONENT;if(n===Xi)return i.DEPTH_STENCIL;if(n===vl)return i.RED;if(n===Ml)return i.RED_INTEGER;if(n===Ji)return i.RG;if(n===Sl)return i.RG_INTEGER;if(n===yl)return i.RGBA_INTEGER;if(n===ea||n===ta||n===na||n===ia)if(a===yt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===ea)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ta)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===na)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ia)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===ea)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ta)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===na)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ia)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ao||n===Ro||n===Co||n===Po)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Ao)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ro)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Co)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Po)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Lo||n===Io||n===Do||n===Uo||n===No||n===la||n===Fo)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Lo||n===Io)return a===yt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Do)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Uo)return r.COMPRESSED_R11_EAC;if(n===No)return r.COMPRESSED_SIGNED_R11_EAC;if(n===la)return r.COMPRESSED_RG11_EAC;if(n===Fo)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Oo||n===Bo||n===zo||n===Go||n===Ho||n===Vo||n===ko||n===Wo||n===Xo||n===Yo||n===qo||n===Zo||n===Jo||n===Ko)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Oo)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Bo)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===zo)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Go)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ho)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Vo)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ko)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Wo)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Xo)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Yo)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===qo)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Zo)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Jo)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ko)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===$o||n===jo||n===Qo)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===$o)return a===yt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===jo)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Qo)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===el||n===tl||n===ca||n===nl)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===el)return r.COMPRESSED_RED_RGTC1_EXT;if(n===tl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ca)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===nl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===dr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const j_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Q_=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class ex{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new ou(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new qn({vertexShader:j_,fragmentShader:Q_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new xt(new yn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class tx extends $i{constructor(e,t){super();const n=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,u=null,d=null,h=null,p=null,g=null;const E=typeof XRWebGLBinding<"u",m=new ex,f={},v=t.getContextAttributes();let S=null,M=null;const R=[],b=[],C=new Me;let _=null;const w=new ln;w.viewport=new It;const D=new ln;D.viewport=new It;const L=[w,D],O=new hp;let X=null,Y=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let Se=R[K];return Se===void 0&&(Se=new Oa,R[K]=Se),Se.getTargetRaySpace()},this.getControllerGrip=function(K){let Se=R[K];return Se===void 0&&(Se=new Oa,R[K]=Se),Se.getGripSpace()},this.getHand=function(K){let Se=R[K];return Se===void 0&&(Se=new Oa,R[K]=Se),Se.getHandSpace()};function N(K){const Se=b.indexOf(K.inputSource);if(Se===-1)return;const ce=R[Se];ce!==void 0&&(ce.update(K.inputSource,K.frame,c||a),ce.dispatchEvent({type:K.type,data:K.inputSource}))}function G(){s.removeEventListener("select",N),s.removeEventListener("selectstart",N),s.removeEventListener("selectend",N),s.removeEventListener("squeeze",N),s.removeEventListener("squeezestart",N),s.removeEventListener("squeezeend",N),s.removeEventListener("end",G),s.removeEventListener("inputsourceschange",k);for(let K=0;K<R.length;K++){const Se=b[K];Se!==null&&(b[K]=null,R[K].disconnect(Se))}X=null,Y=null,m.reset();for(const K in f)delete f[K];e.setRenderTarget(S),p=null,h=null,d=null,s=null,M=null,qe.stop(),n.isPresenting=!1,e.setPixelRatio(_),e.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){r=K,n.isPresenting===!0&&Ke("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){o=K,n.isPresenting===!0&&Ke("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(K){c=K},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return d===null&&E&&(d=new XRWebGLBinding(s,t)),d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(K){if(s=K,s!==null){if(S=e.getRenderTarget(),s.addEventListener("select",N),s.addEventListener("selectstart",N),s.addEventListener("selectend",N),s.addEventListener("squeeze",N),s.addEventListener("squeezestart",N),s.addEventListener("squeezeend",N),s.addEventListener("end",G),s.addEventListener("inputsourceschange",k),v.xrCompatible!==!0&&await t.makeXRCompatible(),_=e.getPixelRatio(),e.getSize(C),E&&"createProjectionLayer"in XRWebGLBinding.prototype){let ce=null,Fe=null,We=null;v.depth&&(We=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ce=v.stencil?Xi:ci,Fe=v.stencil?dr:Yn);const Xe={colorFormat:t.RGBA8,depthFormat:We,scaleFactor:r};d=this.getBinding(),h=d.createProjectionLayer(Xe),s.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),M=new Wn(h.textureWidth,h.textureHeight,{format:Dn,type:gn,depthTexture:new Ls(h.textureWidth,h.textureHeight,Fe,void 0,void 0,void 0,void 0,void 0,void 0,ce),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{const ce={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,ce),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),M=new Wn(p.framebufferWidth,p.framebufferHeight,{format:Dn,type:gn,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),qe.setContext(s),qe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function k(K){for(let Se=0;Se<K.removed.length;Se++){const ce=K.removed[Se],Fe=b.indexOf(ce);Fe>=0&&(b[Fe]=null,R[Fe].disconnect(ce))}for(let Se=0;Se<K.added.length;Se++){const ce=K.added[Se];let Fe=b.indexOf(ce);if(Fe===-1){for(let Xe=0;Xe<R.length;Xe++)if(Xe>=b.length){b.push(ce),Fe=Xe;break}else if(b[Xe]===null){b[Xe]=ce,Fe=Xe;break}if(Fe===-1)break}const We=R[Fe];We&&We.connect(ce)}}const ne=new P,oe=new P;function ge(K,Se,ce){ne.setFromMatrixPosition(Se.matrixWorld),oe.setFromMatrixPosition(ce.matrixWorld);const Fe=ne.distanceTo(oe),We=Se.projectionMatrix.elements,Xe=ce.projectionMatrix.elements,He=We[14]/(We[10]-1),Je=We[14]/(We[10]+1),ee=(We[9]+1)/We[5],se=(We[9]-1)/We[5],J=(We[8]-1)/We[0],be=(Xe[8]+1)/Xe[0],fe=He*J,Ye=He*be,I=Fe/(-J+be),Ve=I*-J;if(Se.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(Ve),K.translateZ(I),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),We[10]===-1)K.projectionMatrix.copy(Se.projectionMatrix),K.projectionMatrixInverse.copy(Se.projectionMatrixInverse);else{const Ne=He+I,Ze=Je+I,le=fe-Ve,dt=Ye+(Fe-Ve),T=ee*Je/Ze*Ne,x=se*Je/Ze*Ne;K.projectionMatrix.makePerspective(le,dt,T,x,Ne,Ze),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function Ae(K,Se){Se===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(Se.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(s===null)return;let Se=K.near,ce=K.far;m.texture!==null&&(m.depthNear>0&&(Se=m.depthNear),m.depthFar>0&&(ce=m.depthFar)),O.near=D.near=w.near=Se,O.far=D.far=w.far=ce,(X!==O.near||Y!==O.far)&&(s.updateRenderState({depthNear:O.near,depthFar:O.far}),X=O.near,Y=O.far),O.layers.mask=K.layers.mask|6,w.layers.mask=O.layers.mask&-5,D.layers.mask=O.layers.mask&-3;const Fe=K.parent,We=O.cameras;Ae(O,Fe);for(let Xe=0;Xe<We.length;Xe++)Ae(We[Xe],Fe);We.length===2?ge(O,w,D):O.projectionMatrix.copy(w.projectionMatrix),Ie(K,O,Fe)};function Ie(K,Se,ce){ce===null?K.matrix.copy(Se.matrixWorld):(K.matrix.copy(ce.matrixWorld),K.matrix.invert(),K.matrix.multiply(Se.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(Se.projectionMatrix),K.projectionMatrixInverse.copy(Se.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=Ps*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return O},this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function(K){l=K,h!==null&&(h.fixedFoveation=K),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=K)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(O)},this.getCameraTexture=function(K){return f[K]};let $e=null;function ot(K,Se){if(u=Se.getViewerPose(c||a),g=Se,u!==null){const ce=u.views;p!==null&&(e.setRenderTargetFramebuffer(M,p.framebuffer),e.setRenderTarget(M));let Fe=!1;ce.length!==O.cameras.length&&(O.cameras.length=0,Fe=!0);for(let Je=0;Je<ce.length;Je++){const ee=ce[Je];let se=null;if(p!==null)se=p.getViewport(ee);else{const be=d.getViewSubImage(h,ee);se=be.viewport,Je===0&&(e.setRenderTargetTextures(M,be.colorTexture,be.depthStencilTexture),e.setRenderTarget(M))}let J=L[Je];J===void 0&&(J=new ln,J.layers.enable(Je),J.viewport=new It,L[Je]=J),J.matrix.fromArray(ee.transform.matrix),J.matrix.decompose(J.position,J.quaternion,J.scale),J.projectionMatrix.fromArray(ee.projectionMatrix),J.projectionMatrixInverse.copy(J.projectionMatrix).invert(),J.viewport.set(se.x,se.y,se.width,se.height),Je===0&&(O.matrix.copy(J.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale)),Fe===!0&&O.cameras.push(J)}const We=s.enabledFeatures;if(We&&We.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&E){d=n.getBinding();const Je=d.getDepthInformation(ce[0]);Je&&Je.isValid&&Je.texture&&m.init(Je,s.renderState)}if(We&&We.includes("camera-access")&&E){e.state.unbindTexture(),d=n.getBinding();for(let Je=0;Je<ce.length;Je++){const ee=ce[Je].camera;if(ee){let se=f[ee];se||(se=new ou,f[ee]=se);const J=d.getCameraImage(ee);se.sourceTexture=J}}}}for(let ce=0;ce<R.length;ce++){const Fe=b[ce],We=R[ce];Fe!==null&&We!==void 0&&We.update(Fe,Se,c||a)}$e&&$e(K,Se),Se.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Se}),g=null}const qe=new yu;qe.setAnimationLoop(ot),this.setAnimationLoop=function(K){$e=K},this.dispose=function(){}}}const nx=new Et,Cu=new st;Cu.set(-1,0,0,0,1,0,0,0,1);function ix(i,e){function t(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,_u(i)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function s(m,f,v,S,M){f.isNodeMaterial?f.uniformsNeedUpdate=!1:f.isMeshBasicMaterial?r(m,f):f.isMeshLambertMaterial?(r(m,f),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)):f.isMeshToonMaterial?(r(m,f),d(m,f)):f.isMeshPhongMaterial?(r(m,f),u(m,f),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)):f.isMeshStandardMaterial?(r(m,f),h(m,f),f.isMeshPhysicalMaterial&&p(m,f,M)):f.isMeshMatcapMaterial?(r(m,f),g(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),E(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(a(m,f),f.isLineDashedMaterial&&o(m,f)):f.isPointsMaterial?l(m,f,v,S):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,t(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===cn&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,t(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===cn&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,t(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,t(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const v=e.get(f),S=v.envMap,M=v.envMapRotation;S&&(m.envMap.value=S,m.envMapRotation.value.setFromMatrix4(nx.makeRotationFromEuler(M)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Cu),m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,m.aoMapTransform))}function a(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform))}function o(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,v,S){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*v,m.scale.value=S*.5,f.map&&(m.map.value=f.map,t(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function u(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function d(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function h(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,v){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===cn&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function E(m,f){const v=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function sx(i,e,t,n){let s={},r={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,S){const M=S.program;n.uniformBlockBinding(v,M)}function c(v,S){let M=s[v.id];M===void 0&&(g(v),M=u(v),s[v.id]=M,v.addEventListener("dispose",m));const R=S.program;n.updateUBOMapping(v,R);const b=e.render.frame;r[v.id]!==b&&(h(v),r[v.id]=b)}function u(v){const S=d();v.__bindingPointIndex=S;const M=i.createBuffer(),R=v.__size,b=v.usage;return i.bindBuffer(i.UNIFORM_BUFFER,M),i.bufferData(i.UNIFORM_BUFFER,R,b),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,S,M),M}function d(){for(let v=0;v<o;v++)if(a.indexOf(v)===-1)return a.push(v),v;return ft("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(v){const S=s[v.id],M=v.uniforms,R=v.__cache;i.bindBuffer(i.UNIFORM_BUFFER,S);for(let b=0,C=M.length;b<C;b++){const _=Array.isArray(M[b])?M[b]:[M[b]];for(let w=0,D=_.length;w<D;w++){const L=_[w];if(p(L,b,w,R)===!0){const O=L.__offset,X=Array.isArray(L.value)?L.value:[L.value];let Y=0;for(let N=0;N<X.length;N++){const G=X[N],k=E(G);typeof G=="number"||typeof G=="boolean"?(L.__data[0]=G,i.bufferSubData(i.UNIFORM_BUFFER,O+Y,L.__data)):G.isMatrix3?(L.__data[0]=G.elements[0],L.__data[1]=G.elements[1],L.__data[2]=G.elements[2],L.__data[3]=0,L.__data[4]=G.elements[3],L.__data[5]=G.elements[4],L.__data[6]=G.elements[5],L.__data[7]=0,L.__data[8]=G.elements[6],L.__data[9]=G.elements[7],L.__data[10]=G.elements[8],L.__data[11]=0):ArrayBuffer.isView(G)?L.__data.set(new G.constructor(G.buffer,G.byteOffset,L.__data.length)):(G.toArray(L.__data,Y),Y+=k.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,O,L.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(v,S,M,R){const b=v.value,C=S+"_"+M;if(R[C]===void 0)return typeof b=="number"||typeof b=="boolean"?R[C]=b:ArrayBuffer.isView(b)?R[C]=b.slice():R[C]=b.clone(),!0;{const _=R[C];if(typeof b=="number"||typeof b=="boolean"){if(_!==b)return R[C]=b,!0}else{if(ArrayBuffer.isView(b))return!0;if(_.equals(b)===!1)return _.copy(b),!0}}return!1}function g(v){const S=v.uniforms;let M=0;const R=16;for(let C=0,_=S.length;C<_;C++){const w=Array.isArray(S[C])?S[C]:[S[C]];for(let D=0,L=w.length;D<L;D++){const O=w[D],X=Array.isArray(O.value)?O.value:[O.value];for(let Y=0,N=X.length;Y<N;Y++){const G=X[Y],k=E(G),ne=M%R,oe=ne%k.boundary,ge=ne+oe;M+=oe,ge!==0&&R-ge<k.storage&&(M+=R-ge),O.__data=new Float32Array(k.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=M,M+=k.storage}}}const b=M%R;return b>0&&(M+=R-b),v.__size=M,v.__cache={},this}function E(v){const S={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(S.boundary=4,S.storage=4):v.isVector2?(S.boundary=8,S.storage=8):v.isVector3||v.isColor?(S.boundary=16,S.storage=12):v.isVector4?(S.boundary=16,S.storage=16):v.isMatrix3?(S.boundary=48,S.storage=48):v.isMatrix4?(S.boundary=64,S.storage=64):v.isTexture?Ke("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(S.boundary=16,S.storage=v.byteLength):Ke("WebGLRenderer: Unsupported uniform value type.",v),S}function m(v){const S=v.target;S.removeEventListener("dispose",m);const M=a.indexOf(S.__bindingPointIndex);a.splice(M,1),i.deleteBuffer(s[S.id]),delete s[S.id],delete r[S.id]}function f(){for(const v in s)i.deleteBuffer(s[v]);a=[],s={},r={}}return{bind:l,update:c,dispose:f}}const rx=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let zn=null;function ax(){return zn===null&&(zn=new ru(rx,16,16,Ji,li),zn.name="DFG_LUT",zn.minFilter=jt,zn.magFilter=jt,zn.wrapS=rn,zn.wrapT=rn,zn.generateMipmaps=!1,zn.needsUpdate=!0),zn}class ox{constructor(e={}){const{canvas:t=Ad(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:h=!1,outputBufferType:p=gn}=e;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=a;const E=p,m=new Set([yl,Sl,Ml]),f=new Set([gn,Yn,ur,dr,_l,xl]),v=new Uint32Array(4),S=new Int32Array(4),M=new P;let R=null,b=null;const C=[],_=[];let w=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=kn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const D=this;let L=!1,O=null;this._outputColorSpace=Ft;let X=0,Y=0,N=null,G=-1,k=null;const ne=new It,oe=new It;let ge=null;const Ae=new lt(0);let Ie=0,$e=t.width,ot=t.height,qe=1,K=null,Se=null;const ce=new It(0,0,$e,ot),Fe=new It(0,0,$e,ot);let We=!1;const Xe=new Rl;let He=!1,Je=!1;const ee=new Et,se=new P,J=new It,be={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let fe=!1;function Ye(){return N===null?qe:1}let I=n;function Ve(y,F){return t.getContext(y,F)}try{const y={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${pl}`),t.addEventListener("webglcontextlost",re,!1),t.addEventListener("webglcontextrestored",Be,!1),t.addEventListener("webglcontextcreationerror",et,!1),I===null){const F="webgl2";if(I=Ve(F,y),I===null)throw Ve(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(y){throw ft("WebGLRenderer: "+y.message),y}let Ne,Ze,le,dt,T,x,B,j,ae,he,pe,Z,te,we,De,_e,ue,Qe,tt,ht,U,de,$;function Ce(){Ne=new ag(I),Ne.init(),U=new $_(I,Ne),Ze=new j0(I,Ne,e,U),le=new J_(I,Ne),Ze.reversedDepthBuffer&&h&&le.buffers.depth.setReversed(!0),dt=new cg(I),T=new N_,x=new K_(I,Ne,le,T,Ze,U,dt),B=new rg(D),j=new fp(I),de=new K0(I,j),ae=new og(I,j,dt,de),he=new ug(I,ae,j,de,dt),Qe=new hg(I,Ze,x),De=new Q0(T),pe=new U_(D,B,Ne,Ze,de,De),Z=new ix(D,T),te=new O_,we=new k_(Ne),ue=new J0(D,B,le,he,g,l),_e=new Z_(D,he,Ze),$=new sx(I,dt,Ze,le),tt=new $0(I,Ne,dt),ht=new lg(I,Ne,dt),dt.programs=pe.programs,D.capabilities=Ze,D.extensions=Ne,D.properties=T,D.renderLists=te,D.shadowMap=_e,D.state=le,D.info=dt}Ce(),E!==gn&&(w=new fg(E,t.width,t.height,s,r));const me=new tx(D,I);this.xr=me,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const y=Ne.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){const y=Ne.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return qe},this.setPixelRatio=function(y){y!==void 0&&(qe=y,this.setSize($e,ot,!1))},this.getSize=function(y){return y.set($e,ot)},this.setSize=function(y,F,W=!0){if(me.isPresenting){Ke("WebGLRenderer: Can't change size while VR device is presenting.");return}$e=y,ot=F,t.width=Math.floor(y*qe),t.height=Math.floor(F*qe),W===!0&&(t.style.width=y+"px",t.style.height=F+"px"),w!==null&&w.setSize(t.width,t.height),this.setViewport(0,0,y,F)},this.getDrawingBufferSize=function(y){return y.set($e*qe,ot*qe).floor()},this.setDrawingBufferSize=function(y,F,W){$e=y,ot=F,qe=W,t.width=Math.floor(y*W),t.height=Math.floor(F*W),this.setViewport(0,0,y,F)},this.setEffects=function(y){if(E===gn){ft("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(y){for(let F=0;F<y.length;F++)if(y[F].isOutputPass===!0){Ke("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}w.setEffects(y||[])},this.getCurrentViewport=function(y){return y.copy(ne)},this.getViewport=function(y){return y.copy(ce)},this.setViewport=function(y,F,W,H){y.isVector4?ce.set(y.x,y.y,y.z,y.w):ce.set(y,F,W,H),le.viewport(ne.copy(ce).multiplyScalar(qe).round())},this.getScissor=function(y){return y.copy(Fe)},this.setScissor=function(y,F,W,H){y.isVector4?Fe.set(y.x,y.y,y.z,y.w):Fe.set(y,F,W,H),le.scissor(oe.copy(Fe).multiplyScalar(qe).round())},this.getScissorTest=function(){return We},this.setScissorTest=function(y){le.setScissorTest(We=y)},this.setOpaqueSort=function(y){K=y},this.setTransparentSort=function(y){Se=y},this.getClearColor=function(y){return y.copy(ue.getClearColor())},this.setClearColor=function(){ue.setClearColor(...arguments)},this.getClearAlpha=function(){return ue.getClearAlpha()},this.setClearAlpha=function(){ue.setClearAlpha(...arguments)},this.clear=function(y=!0,F=!0,W=!0){let H=0;if(y){let V=!1;if(N!==null){const Ee=N.texture.format;V=m.has(Ee)}if(V){const Ee=N.texture.type,Pe=f.has(Ee),ye=ue.getClearColor(),Oe=ue.getClearAlpha(),ze=ye.r,je=ye.g,it=ye.b;Pe?(v[0]=ze,v[1]=je,v[2]=it,v[3]=Oe,I.clearBufferuiv(I.COLOR,0,v)):(S[0]=ze,S[1]=je,S[2]=it,S[3]=Oe,I.clearBufferiv(I.COLOR,0,S))}else H|=I.COLOR_BUFFER_BIT}F&&(H|=I.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),W&&(H|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H!==0&&I.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(y){y.setRenderer(this),O=y},this.dispose=function(){t.removeEventListener("webglcontextlost",re,!1),t.removeEventListener("webglcontextrestored",Be,!1),t.removeEventListener("webglcontextcreationerror",et,!1),ue.dispose(),te.dispose(),we.dispose(),T.dispose(),B.dispose(),he.dispose(),de.dispose(),$.dispose(),pe.dispose(),me.dispose(),me.removeEventListener("sessionstart",Jn),me.removeEventListener("sessionend",Mt),Gt.stop()};function re(y){y.preventDefault(),yc("WebGLRenderer: Context Lost."),L=!0}function Be(){yc("WebGLRenderer: Context Restored."),L=!1;const y=dt.autoReset,F=_e.enabled,W=_e.autoUpdate,H=_e.needsUpdate,V=_e.type;Ce(),dt.autoReset=y,_e.enabled=F,_e.autoUpdate=W,_e.needsUpdate=H,_e.type=V}function et(y){ft("WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function Ct(y){const F=y.target;F.removeEventListener("dispose",Ct),_t(F)}function _t(y){_n(y),T.remove(y)}function _n(y){const F=T.get(y).programs;F!==void 0&&(F.forEach(function(W){pe.releaseProgram(W)}),y.isShaderMaterial&&pe.releaseShaderCache(y))}this.renderBufferDirect=function(y,F,W,H,V,Ee){F===null&&(F=be);const Pe=V.isMesh&&V.matrixWorld.determinant()<0,ye=Ma(y,F,W,H,V);le.setMaterial(H,Pe);let Oe=W.index,ze=1;if(H.wireframe===!0){if(Oe=ae.getWireframeAttribute(W),Oe===void 0)return;ze=2}const je=W.drawRange,it=W.attributes.position;let Ge=je.start*ze,gt=(je.start+je.count)*ze;Ee!==null&&(Ge=Math.max(Ge,Ee.start*ze),gt=Math.min(gt,(Ee.start+Ee.count)*ze)),Oe!==null?(Ge=Math.max(Ge,0),gt=Math.min(gt,Oe.count)):it!=null&&(Ge=Math.max(Ge,0),gt=Math.min(gt,it.count));const wt=gt-Ge;if(wt<0||wt===1/0)return;de.setup(V,H,ye,W,Oe);let Tt,pt=tt;if(Oe!==null&&(Tt=j.get(Oe),pt=ht,pt.setIndex(Tt)),V.isMesh)H.wireframe===!0?(le.setLineWidth(H.wireframeLinewidth*Ye()),pt.setMode(I.LINES)):pt.setMode(I.TRIANGLES);else if(V.isLine){let Lt=H.linewidth;Lt===void 0&&(Lt=1),le.setLineWidth(Lt*Ye()),V.isLineSegments?pt.setMode(I.LINES):V.isLineLoop?pt.setMode(I.LINE_LOOP):pt.setMode(I.LINE_STRIP)}else V.isPoints?pt.setMode(I.POINTS):V.isSprite&&pt.setMode(I.TRIANGLES);if(V.isBatchedMesh)if(Ne.get("WEBGL_multi_draw"))pt.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{const Lt=V._multiDrawStarts,Re=V._multiDrawCounts,Nt=V._multiDrawCount,ct=Oe?j.get(Oe).bytesPerElement:1,en=T.get(H).currentProgram.getUniforms();for(let bn=0;bn<Nt;bn++)en.setValue(I,"_gl_DrawID",bn),pt.render(Lt[bn]/ct,Re[bn])}else if(V.isInstancedMesh)pt.renderInstances(Ge,wt,V.count);else if(W.isInstancedBufferGeometry){const Lt=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,Re=Math.min(W.instanceCount,Lt);pt.renderInstances(Ge,wt,Re)}else pt.render(Ge,wt)};function hn(y,F,W){y.transparent===!0&&y.side===En&&y.forceSinglePass===!1?(y.side=cn,y.needsUpdate=!0,Ci(y,F,W),y.side=Xn,y.needsUpdate=!0,Ci(y,F,W),y.side=En):Ci(y,F,W)}this.compile=function(y,F,W=null){W===null&&(W=y),b=we.get(W),b.init(F),_.push(b),W.traverseVisible(function(V){V.isLight&&V.layers.test(F.layers)&&(b.pushLight(V),V.castShadow&&b.pushShadow(V))}),y!==W&&y.traverseVisible(function(V){V.isLight&&V.layers.test(F.layers)&&(b.pushLight(V),V.castShadow&&b.pushShadow(V))}),b.setupLights();const H=new Set;return y.traverse(function(V){if(!(V.isMesh||V.isPoints||V.isLine||V.isSprite))return;const Ee=V.material;if(Ee)if(Array.isArray(Ee))for(let Pe=0;Pe<Ee.length;Pe++){const ye=Ee[Pe];hn(ye,W,V),H.add(ye)}else hn(Ee,W,V),H.add(Ee)}),b=_.pop(),H},this.compileAsync=function(y,F,W=null){const H=this.compile(y,F,W);return new Promise(V=>{function Ee(){if(H.forEach(function(Pe){T.get(Pe).currentProgram.isReady()&&H.delete(Pe)}),H.size===0){V(y);return}setTimeout(Ee,10)}Ne.get("KHR_parallel_shader_compile")!==null?Ee():setTimeout(Ee,10)})};let di=null;function wi(y){di&&di(y)}function Jn(){Gt.stop()}function Mt(){Gt.start()}const Gt=new yu;Gt.setAnimationLoop(wi),typeof self<"u"&&Gt.setContext(self),this.setAnimationLoop=function(y){di=y,me.setAnimationLoop(y),y===null?Gt.stop():Gt.start()},me.addEventListener("sessionstart",Jn),me.addEventListener("sessionend",Mt),this.render=function(y,F){if(F!==void 0&&F.isCamera!==!0){ft("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;O!==null&&O.renderStart(y,F);const W=me.enabled===!0&&me.isPresenting===!0,H=w!==null&&(N===null||W)&&w.begin(D,N);if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),me.enabled===!0&&me.isPresenting===!0&&(w===null||w.isCompositing()===!1)&&(me.cameraAutoUpdate===!0&&me.updateCamera(F),F=me.getCamera()),y.isScene===!0&&y.onBeforeRender(D,y,F,N),b=we.get(y,_.length),b.init(F),b.state.textureUnits=x.getTextureUnits(),_.push(b),ee.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),Xe.setFromProjectionMatrix(ee,Vn,F.reversedDepth),Je=this.localClippingEnabled,He=De.init(this.clippingPlanes,Je),R=te.get(y,C.length),R.init(),C.push(R),me.enabled===!0&&me.isPresenting===!0){const Pe=D.xr.getDepthSensingMesh();Pe!==null&&Qi(Pe,F,-1/0,D.sortObjects)}Qi(y,F,0,D.sortObjects),R.finish(),D.sortObjects===!0&&R.sort(K,Se),fe=me.enabled===!1||me.isPresenting===!1||me.hasDepthSensing()===!1,fe&&ue.addToRenderList(R,y),this.info.render.frame++,He===!0&&De.beginShadows();const V=b.state.shadowsArray;if(_e.render(V,y,F),He===!0&&De.endShadows(),this.info.autoReset===!0&&this.info.reset(),(H&&w.hasRenderPass())===!1){const Pe=R.opaque,ye=R.transmissive;if(b.setupLights(),F.isArrayCamera){const Oe=F.cameras;if(ye.length>0)for(let ze=0,je=Oe.length;ze<je;ze++){const it=Oe[ze];an(Pe,ye,y,it)}fe&&ue.render(y);for(let ze=0,je=Oe.length;ze<je;ze++){const it=Oe[ze];es(R,y,it,it.viewport)}}else ye.length>0&&an(Pe,ye,y,F),fe&&ue.render(y),es(R,y,F)}N!==null&&Y===0&&(x.updateMultisampleRenderTarget(N),x.updateRenderTargetMipmap(N)),H&&w.end(D),y.isScene===!0&&y.onAfterRender(D,y,F),de.resetDefaultState(),G=-1,k=null,_.pop(),_.length>0?(b=_[_.length-1],x.setTextureUnits(b.state.textureUnits),He===!0&&De.setGlobalState(D.clippingPlanes,b.state.camera)):b=null,C.pop(),C.length>0?R=C[C.length-1]:R=null,O!==null&&O.renderEnd()};function Qi(y,F,W,H){if(y.visible===!1)return;if(y.layers.test(F.layers)){if(y.isGroup)W=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(F);else if(y.isLightProbeGrid)b.pushLightProbeGrid(y);else if(y.isLight)b.pushLight(y),y.castShadow&&b.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||Xe.intersectsSprite(y)){H&&J.setFromMatrixPosition(y.matrixWorld).applyMatrix4(ee);const Pe=he.update(y),ye=y.material;ye.visible&&R.push(y,Pe,ye,W,J.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||Xe.intersectsObject(y))){const Pe=he.update(y),ye=y.material;if(H&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),J.copy(y.boundingSphere.center)):(Pe.boundingSphere===null&&Pe.computeBoundingSphere(),J.copy(Pe.boundingSphere.center)),J.applyMatrix4(y.matrixWorld).applyMatrix4(ee)),Array.isArray(ye)){const Oe=Pe.groups;for(let ze=0,je=Oe.length;ze<je;ze++){const it=Oe[ze],Ge=ye[it.materialIndex];Ge&&Ge.visible&&R.push(y,Pe,Ge,W,J.z,it)}}else ye.visible&&R.push(y,Pe,ye,W,J.z,null)}}const Ee=y.children;for(let Pe=0,ye=Ee.length;Pe<ye;Pe++)Qi(Ee[Pe],F,W,H)}function es(y,F,W,H){const{opaque:V,transmissive:Ee,transparent:Pe}=y;b.setupLightsView(W),He===!0&&De.setGlobalState(D.clippingPlanes,W),H&&le.viewport(ne.copy(H)),V.length>0&&Ai(V,F,W),Ee.length>0&&Ai(Ee,F,W),Pe.length>0&&Ai(Pe,F,W),le.buffers.depth.setTest(!0),le.buffers.depth.setMask(!0),le.buffers.color.setMask(!0),le.setPolygonOffset(!1)}function an(y,F,W,H){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;if(b.state.transmissionRenderTarget[H.id]===void 0){const Ge=Ne.has("EXT_color_buffer_half_float")||Ne.has("EXT_color_buffer_float");b.state.transmissionRenderTarget[H.id]=new Wn(1,1,{generateMipmaps:!0,type:Ge?li:gn,minFilter:Wi,samples:Math.max(4,Ze.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ut.workingColorSpace})}const Ee=b.state.transmissionRenderTarget[H.id],Pe=H.viewport||ne;Ee.setSize(Pe.z*D.transmissionResolutionScale,Pe.w*D.transmissionResolutionScale);const ye=D.getRenderTarget(),Oe=D.getActiveCubeFace(),ze=D.getActiveMipmapLevel();D.setRenderTarget(Ee),D.getClearColor(Ae),Ie=D.getClearAlpha(),Ie<1&&D.setClearColor(16777215,.5),D.clear(),fe&&ue.render(W);const je=D.toneMapping;D.toneMapping=kn;const it=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),b.setupLightsView(H),He===!0&&De.setGlobalState(D.clippingPlanes,H),Ai(y,W,H),x.updateMultisampleRenderTarget(Ee),x.updateRenderTargetMipmap(Ee),Ne.has("WEBGL_multisampled_render_to_texture")===!1){let Ge=!1;for(let gt=0,wt=F.length;gt<wt;gt++){const Tt=F[gt],{object:pt,geometry:Lt,material:Re,group:Nt}=Tt;if(Re.side===En&&pt.layers.test(H.layers)){const ct=Re.side;Re.side=cn,Re.needsUpdate=!0,Ri(pt,W,H,Lt,Re,Nt),Re.side=ct,Re.needsUpdate=!0,Ge=!0}}Ge===!0&&(x.updateMultisampleRenderTarget(Ee),x.updateRenderTargetMipmap(Ee))}D.setRenderTarget(ye,Oe,ze),D.setClearColor(Ae,Ie),it!==void 0&&(H.viewport=it),D.toneMapping=je}function Ai(y,F,W){const H=F.isScene===!0?F.overrideMaterial:null;for(let V=0,Ee=y.length;V<Ee;V++){const Pe=y[V],{object:ye,geometry:Oe,group:ze}=Pe;let je=Pe.material;je.allowOverride===!0&&H!==null&&(je=H),ye.layers.test(W.layers)&&Ri(ye,F,W,Oe,je,ze)}}function Ri(y,F,W,H,V,Ee){y.onBeforeRender(D,F,W,H,V,Ee),y.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),V.onBeforeRender(D,F,W,H,y,Ee),V.transparent===!0&&V.side===En&&V.forceSinglePass===!1?(V.side=cn,V.needsUpdate=!0,D.renderBufferDirect(W,F,H,V,y,Ee),V.side=Xn,V.needsUpdate=!0,D.renderBufferDirect(W,F,H,V,y,Ee),V.side=En):D.renderBufferDirect(W,F,H,V,y,Ee),y.onAfterRender(D,F,W,H,V,Ee)}function Ci(y,F,W){F.isScene!==!0&&(F=be);const H=T.get(y),V=b.state.lights,Ee=b.state.shadowsArray,Pe=V.state.version,ye=pe.getParameters(y,V.state,Ee,F,W,b.state.lightProbeGridArray),Oe=pe.getProgramCacheKey(ye);let ze=H.programs;H.environment=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?F.environment:null,H.fog=F.fog;const je=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap;H.envMap=B.get(y.envMap||H.environment,je),H.envMapRotation=H.environment!==null&&y.envMap===null?F.environmentRotation:y.envMapRotation,ze===void 0&&(y.addEventListener("dispose",Ct),ze=new Map,H.programs=ze);let it=ze.get(Oe);if(it!==void 0){if(H.currentProgram===it&&H.lightsStateVersion===Pe)return Fs(y,ye),it}else ye.uniforms=pe.getUniforms(y),O!==null&&y.isNodeMaterial&&O.build(y,W,ye),y.onBeforeCompile(ye,D),it=pe.acquireProgram(ye,Oe),ze.set(Oe,it),H.uniforms=ye.uniforms;const Ge=H.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(Ge.clippingPlanes=De.uniform),Fs(y,ye),H.needsLights=Os(y),H.lightsStateVersion=Pe,H.needsLights&&(Ge.ambientLightColor.value=V.state.ambient,Ge.lightProbe.value=V.state.probe,Ge.directionalLights.value=V.state.directional,Ge.directionalLightShadows.value=V.state.directionalShadow,Ge.spotLights.value=V.state.spot,Ge.spotLightShadows.value=V.state.spotShadow,Ge.rectAreaLights.value=V.state.rectArea,Ge.ltc_1.value=V.state.rectAreaLTC1,Ge.ltc_2.value=V.state.rectAreaLTC2,Ge.pointLights.value=V.state.point,Ge.pointLightShadows.value=V.state.pointShadow,Ge.hemisphereLights.value=V.state.hemi,Ge.directionalShadowMatrix.value=V.state.directionalShadowMatrix,Ge.spotLightMatrix.value=V.state.spotLightMatrix,Ge.spotLightMap.value=V.state.spotLightMap,Ge.pointShadowMatrix.value=V.state.pointShadowMatrix),H.lightProbeGrid=b.state.lightProbeGridArray.length>0,H.currentProgram=it,H.uniformsList=null,it}function fi(y){if(y.uniformsList===null){const F=y.currentProgram.getUniforms();y.uniformsList=ra.seqWithValue(F.seq,y.uniforms)}return y.uniformsList}function Fs(y,F){const W=T.get(y);W.outputColorSpace=F.outputColorSpace,W.batching=F.batching,W.batchingColor=F.batchingColor,W.instancing=F.instancing,W.instancingColor=F.instancingColor,W.instancingMorph=F.instancingMorph,W.skinning=F.skinning,W.morphTargets=F.morphTargets,W.morphNormals=F.morphNormals,W.morphColors=F.morphColors,W.morphTargetsCount=F.morphTargetsCount,W.numClippingPlanes=F.numClippingPlanes,W.numIntersection=F.numClipIntersection,W.vertexAlphas=F.vertexAlphas,W.vertexTangents=F.vertexTangents,W.toneMapping=F.toneMapping}function Mr(y,F){if(y.length===0)return null;if(y.length===1)return y[0].texture!==null?y[0]:null;M.setFromMatrixPosition(F.matrixWorld);for(let W=0,H=y.length;W<H;W++){const V=y[W];if(V.texture!==null&&V.boundingBox.containsPoint(M))return V}return null}function Ma(y,F,W,H,V){F.isScene!==!0&&(F=be),x.resetTextureUnits();const Ee=F.fog,Pe=H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial?F.environment:null,ye=N===null?D.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:ut.workingColorSpace,Oe=H.isMeshStandardMaterial||H.isMeshLambertMaterial&&!H.envMap||H.isMeshPhongMaterial&&!H.envMap,ze=B.get(H.envMap||Pe,Oe),je=H.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,it=!!W.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),Ge=!!W.morphAttributes.position,gt=!!W.morphAttributes.normal,wt=!!W.morphAttributes.color;let Tt=kn;H.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&(Tt=D.toneMapping);const pt=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,Lt=pt!==void 0?pt.length:0,Re=T.get(H),Nt=b.state.lights;if(He===!0&&(Je===!0||y!==k)){const St=y===k&&H.id===G;De.setState(H,y,St)}let ct=!1;H.version===Re.__version?(Re.needsLights&&Re.lightsStateVersion!==Nt.state.version||Re.outputColorSpace!==ye||V.isBatchedMesh&&Re.batching===!1||!V.isBatchedMesh&&Re.batching===!0||V.isBatchedMesh&&Re.batchingColor===!0&&V.colorTexture===null||V.isBatchedMesh&&Re.batchingColor===!1&&V.colorTexture!==null||V.isInstancedMesh&&Re.instancing===!1||!V.isInstancedMesh&&Re.instancing===!0||V.isSkinnedMesh&&Re.skinning===!1||!V.isSkinnedMesh&&Re.skinning===!0||V.isInstancedMesh&&Re.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&Re.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&Re.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&Re.instancingMorph===!1&&V.morphTexture!==null||Re.envMap!==ze||H.fog===!0&&Re.fog!==Ee||Re.numClippingPlanes!==void 0&&(Re.numClippingPlanes!==De.numPlanes||Re.numIntersection!==De.numIntersection)||Re.vertexAlphas!==je||Re.vertexTangents!==it||Re.morphTargets!==Ge||Re.morphNormals!==gt||Re.morphColors!==wt||Re.toneMapping!==Tt||Re.morphTargetsCount!==Lt||!!Re.lightProbeGrid!=b.state.lightProbeGridArray.length>0)&&(ct=!0):(ct=!0,Re.__version=H.version);let en=Re.currentProgram;ct===!0&&(en=Ci(H,F,V),O&&H.isNodeMaterial&&O.onUpdateProgram(H,en,Re));let bn=!1,un=!1,Tn=!1;const Ue=en.getUniforms(),At=Re.uniforms;if(le.useProgram(en.program)&&(bn=!0,un=!0,Tn=!0),H.id!==G&&(G=H.id,un=!0),Re.needsLights){const St=Mr(b.state.lightProbeGridArray,V);Re.lightProbeGrid!==St&&(Re.lightProbeGrid=St,un=!0)}if(bn||k!==y){le.buffers.depth.getReversed()&&y.reversedDepth!==!0&&(y._reversedDepth=!0,y.updateProjectionMatrix()),Ue.setValue(I,"projectionMatrix",y.projectionMatrix),Ue.setValue(I,"viewMatrix",y.matrixWorldInverse);const Nn=Ue.map.cameraPosition;Nn!==void 0&&Nn.setValue(I,se.setFromMatrixPosition(y.matrixWorld)),Ze.logarithmicDepthBuffer&&Ue.setValue(I,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&Ue.setValue(I,"isOrthographic",y.isOrthographicCamera===!0),k!==y&&(k=y,un=!0,Tn=!0)}if(Re.needsLights&&(Nt.state.directionalShadowMap.length>0&&Ue.setValue(I,"directionalShadowMap",Nt.state.directionalShadowMap,x),Nt.state.spotShadowMap.length>0&&Ue.setValue(I,"spotShadowMap",Nt.state.spotShadowMap,x),Nt.state.pointShadowMap.length>0&&Ue.setValue(I,"pointShadowMap",Nt.state.pointShadowMap,x)),V.isSkinnedMesh){Ue.setOptional(I,V,"bindMatrix"),Ue.setOptional(I,V,"bindMatrixInverse");const St=V.skeleton;St&&(St.boneTexture===null&&St.computeBoneTexture(),Ue.setValue(I,"boneTexture",St.boneTexture,x))}V.isBatchedMesh&&(Ue.setOptional(I,V,"batchingTexture"),Ue.setValue(I,"batchingTexture",V._matricesTexture,x),Ue.setOptional(I,V,"batchingIdTexture"),Ue.setValue(I,"batchingIdTexture",V._indirectTexture,x),Ue.setOptional(I,V,"batchingColorTexture"),V._colorsTexture!==null&&Ue.setValue(I,"batchingColorTexture",V._colorsTexture,x));const xn=W.morphAttributes;if((xn.position!==void 0||xn.normal!==void 0||xn.color!==void 0)&&Qe.update(V,W,en),(un||Re.receiveShadow!==V.receiveShadow)&&(Re.receiveShadow=V.receiveShadow,Ue.setValue(I,"receiveShadow",V.receiveShadow)),(H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial)&&H.envMap===null&&F.environment!==null&&(At.envMapIntensity.value=F.environmentIntensity),At.dfgLUT!==void 0&&(At.dfgLUT.value=ax()),un){if(Ue.setValue(I,"toneMappingExposure",D.toneMappingExposure),Re.needsLights&&Kn(At,Tn),Ee&&H.fog===!0&&Z.refreshFogUniforms(At,Ee),Z.refreshMaterialUniforms(At,H,qe,ot,b.state.transmissionRenderTarget[y.id]),Re.needsLights&&Re.lightProbeGrid){const St=Re.lightProbeGrid;At.probesSH.value=St.texture,At.probesMin.value.copy(St.boundingBox.min),At.probesMax.value.copy(St.boundingBox.max),At.probesResolution.value.copy(St.resolution)}ra.upload(I,fi(Re),At,x)}if(H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(ra.upload(I,fi(Re),At,x),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&Ue.setValue(I,"center",V.center),Ue.setValue(I,"modelViewMatrix",V.modelViewMatrix),Ue.setValue(I,"normalMatrix",V.normalMatrix),Ue.setValue(I,"modelMatrix",V.matrixWorld),H.uniformsGroups!==void 0){const St=H.uniformsGroups;for(let Nn=0,pi=St.length;Nn<pi;Nn++){const vn=St[Nn];$.update(vn,en),$.bind(vn,en)}}return en}function Kn(y,F){y.ambientLightColor.needsUpdate=F,y.lightProbe.needsUpdate=F,y.directionalLights.needsUpdate=F,y.directionalLightShadows.needsUpdate=F,y.pointLights.needsUpdate=F,y.pointLightShadows.needsUpdate=F,y.spotLights.needsUpdate=F,y.spotLightShadows.needsUpdate=F,y.rectAreaLights.needsUpdate=F,y.hemisphereLights.needsUpdate=F}function Os(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return X},this.getActiveMipmapLevel=function(){return Y},this.getRenderTarget=function(){return N},this.setRenderTargetTextures=function(y,F,W){const H=T.get(y);H.__autoAllocateDepthBuffer=y.resolveDepthBuffer===!1,H.__autoAllocateDepthBuffer===!1&&(H.__useRenderToTexture=!1),T.get(y.texture).__webglTexture=F,T.get(y.depthTexture).__webglTexture=H.__autoAllocateDepthBuffer?void 0:W,H.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(y,F){const W=T.get(y);W.__webglFramebuffer=F,W.__useDefaultFramebuffer=F===void 0};const Bs=I.createFramebuffer();this.setRenderTarget=function(y,F=0,W=0){N=y,X=F,Y=W;let H=null,V=!1,Ee=!1;if(y){const ye=T.get(y);if(ye.__useDefaultFramebuffer!==void 0){le.bindFramebuffer(I.FRAMEBUFFER,ye.__webglFramebuffer),ne.copy(y.viewport),oe.copy(y.scissor),ge=y.scissorTest,le.viewport(ne),le.scissor(oe),le.setScissorTest(ge),G=-1;return}else if(ye.__webglFramebuffer===void 0)x.setupRenderTarget(y);else if(ye.__hasExternalTextures)x.rebindTextures(y,T.get(y.texture).__webglTexture,T.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){const je=y.depthTexture;if(ye.__boundDepthTexture!==je){if(je!==null&&T.has(je)&&(y.width!==je.image.width||y.height!==je.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");x.setupDepthRenderbuffer(y)}}const Oe=y.texture;(Oe.isData3DTexture||Oe.isDataArrayTexture||Oe.isCompressedArrayTexture)&&(Ee=!0);const ze=T.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(ze[F])?H=ze[F][W]:H=ze[F],V=!0):y.samples>0&&x.useMultisampledRTT(y)===!1?H=T.get(y).__webglMultisampledFramebuffer:Array.isArray(ze)?H=ze[W]:H=ze,ne.copy(y.viewport),oe.copy(y.scissor),ge=y.scissorTest}else ne.copy(ce).multiplyScalar(qe).floor(),oe.copy(Fe).multiplyScalar(qe).floor(),ge=We;if(W!==0&&(H=Bs),le.bindFramebuffer(I.FRAMEBUFFER,H)&&le.drawBuffers(y,H),le.viewport(ne),le.scissor(oe),le.setScissorTest(ge),V){const ye=T.get(y.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+F,ye.__webglTexture,W)}else if(Ee){const ye=F;for(let Oe=0;Oe<y.textures.length;Oe++){const ze=T.get(y.textures[Oe]);I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0+Oe,ze.__webglTexture,W,ye)}}else if(y!==null&&W!==0){const ye=T.get(y.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,ye.__webglTexture,W)}G=-1},this.readRenderTargetPixels=function(y,F,W,H,V,Ee,Pe,ye=0){if(!(y&&y.isWebGLRenderTarget)){ft("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Oe=T.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&Pe!==void 0&&(Oe=Oe[Pe]),Oe){le.bindFramebuffer(I.FRAMEBUFFER,Oe);try{const ze=y.textures[ye],je=ze.format,it=ze.type;if(y.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+ye),!Ze.textureFormatReadable(je)){ft("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ze.textureTypeReadable(it)){ft("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=y.width-H&&W>=0&&W<=y.height-V&&I.readPixels(F,W,H,V,U.convert(je),U.convert(it),Ee)}finally{const ze=N!==null?T.get(N).__webglFramebuffer:null;le.bindFramebuffer(I.FRAMEBUFFER,ze)}}},this.readRenderTargetPixelsAsync=async function(y,F,W,H,V,Ee,Pe,ye=0){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Oe=T.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&Pe!==void 0&&(Oe=Oe[Pe]),Oe)if(F>=0&&F<=y.width-H&&W>=0&&W<=y.height-V){le.bindFramebuffer(I.FRAMEBUFFER,Oe);const ze=y.textures[ye],je=ze.format,it=ze.type;if(y.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+ye),!Ze.textureFormatReadable(je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ze.textureTypeReadable(it))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ge=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,Ge),I.bufferData(I.PIXEL_PACK_BUFFER,Ee.byteLength,I.STREAM_READ),I.readPixels(F,W,H,V,U.convert(je),U.convert(it),0);const gt=N!==null?T.get(N).__webglFramebuffer:null;le.bindFramebuffer(I.FRAMEBUFFER,gt);const wt=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await Rd(I,wt,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,Ge),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,Ee),I.deleteBuffer(Ge),I.deleteSync(wt),Ee}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(y,F=null,W=0){const H=Math.pow(2,-W),V=Math.floor(y.image.width*H),Ee=Math.floor(y.image.height*H),Pe=F!==null?F.x:0,ye=F!==null?F.y:0;x.setTexture2D(y,0),I.copyTexSubImage2D(I.TEXTURE_2D,W,0,0,Pe,ye,V,Ee),le.unbindTexture()};const Sr=I.createFramebuffer(),zs=I.createFramebuffer();this.copyTextureToTexture=function(y,F,W=null,H=null,V=0,Ee=0){let Pe,ye,Oe,ze,je,it,Ge,gt,wt;const Tt=y.isCompressedTexture?y.mipmaps[Ee]:y.image;if(W!==null)Pe=W.max.x-W.min.x,ye=W.max.y-W.min.y,Oe=W.isBox3?W.max.z-W.min.z:1,ze=W.min.x,je=W.min.y,it=W.isBox3?W.min.z:0;else{const At=Math.pow(2,-V);Pe=Math.floor(Tt.width*At),ye=Math.floor(Tt.height*At),y.isDataArrayTexture?Oe=Tt.depth:y.isData3DTexture?Oe=Math.floor(Tt.depth*At):Oe=1,ze=0,je=0,it=0}H!==null?(Ge=H.x,gt=H.y,wt=H.z):(Ge=0,gt=0,wt=0);const pt=U.convert(F.format),Lt=U.convert(F.type);let Re;F.isData3DTexture?(x.setTexture3D(F,0),Re=I.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(x.setTexture2DArray(F,0),Re=I.TEXTURE_2D_ARRAY):(x.setTexture2D(F,0),Re=I.TEXTURE_2D),le.activeTexture(I.TEXTURE0),le.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,F.flipY),le.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),le.pixelStorei(I.UNPACK_ALIGNMENT,F.unpackAlignment);const Nt=le.getParameter(I.UNPACK_ROW_LENGTH),ct=le.getParameter(I.UNPACK_IMAGE_HEIGHT),en=le.getParameter(I.UNPACK_SKIP_PIXELS),bn=le.getParameter(I.UNPACK_SKIP_ROWS),un=le.getParameter(I.UNPACK_SKIP_IMAGES);le.pixelStorei(I.UNPACK_ROW_LENGTH,Tt.width),le.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Tt.height),le.pixelStorei(I.UNPACK_SKIP_PIXELS,ze),le.pixelStorei(I.UNPACK_SKIP_ROWS,je),le.pixelStorei(I.UNPACK_SKIP_IMAGES,it);const Tn=y.isDataArrayTexture||y.isData3DTexture,Ue=F.isDataArrayTexture||F.isData3DTexture;if(y.isDepthTexture){const At=T.get(y),xn=T.get(F),St=T.get(At.__renderTarget),Nn=T.get(xn.__renderTarget);le.bindFramebuffer(I.READ_FRAMEBUFFER,St.__webglFramebuffer),le.bindFramebuffer(I.DRAW_FRAMEBUFFER,Nn.__webglFramebuffer);for(let pi=0;pi<Oe;pi++)Tn&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,T.get(y).__webglTexture,V,it+pi),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,T.get(F).__webglTexture,Ee,wt+pi)),I.blitFramebuffer(ze,je,Pe,ye,Ge,gt,Pe,ye,I.DEPTH_BUFFER_BIT,I.NEAREST);le.bindFramebuffer(I.READ_FRAMEBUFFER,null),le.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(V!==0||y.isRenderTargetTexture||T.has(y)){const At=T.get(y),xn=T.get(F);le.bindFramebuffer(I.READ_FRAMEBUFFER,Sr),le.bindFramebuffer(I.DRAW_FRAMEBUFFER,zs);for(let St=0;St<Oe;St++)Tn?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,At.__webglTexture,V,it+St):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,At.__webglTexture,V),Ue?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,xn.__webglTexture,Ee,wt+St):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,xn.__webglTexture,Ee),V!==0?I.blitFramebuffer(ze,je,Pe,ye,Ge,gt,Pe,ye,I.COLOR_BUFFER_BIT,I.NEAREST):Ue?I.copyTexSubImage3D(Re,Ee,Ge,gt,wt+St,ze,je,Pe,ye):I.copyTexSubImage2D(Re,Ee,Ge,gt,ze,je,Pe,ye);le.bindFramebuffer(I.READ_FRAMEBUFFER,null),le.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else Ue?y.isDataTexture||y.isData3DTexture?I.texSubImage3D(Re,Ee,Ge,gt,wt,Pe,ye,Oe,pt,Lt,Tt.data):F.isCompressedArrayTexture?I.compressedTexSubImage3D(Re,Ee,Ge,gt,wt,Pe,ye,Oe,pt,Tt.data):I.texSubImage3D(Re,Ee,Ge,gt,wt,Pe,ye,Oe,pt,Lt,Tt):y.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,Ee,Ge,gt,Pe,ye,pt,Lt,Tt.data):y.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,Ee,Ge,gt,Tt.width,Tt.height,pt,Tt.data):I.texSubImage2D(I.TEXTURE_2D,Ee,Ge,gt,Pe,ye,pt,Lt,Tt);le.pixelStorei(I.UNPACK_ROW_LENGTH,Nt),le.pixelStorei(I.UNPACK_IMAGE_HEIGHT,ct),le.pixelStorei(I.UNPACK_SKIP_PIXELS,en),le.pixelStorei(I.UNPACK_SKIP_ROWS,bn),le.pixelStorei(I.UNPACK_SKIP_IMAGES,un),Ee===0&&F.generateMipmaps&&I.generateMipmap(Re),le.unbindTexture()},this.initRenderTarget=function(y){T.get(y).__webglFramebuffer===void 0&&x.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?x.setTextureCube(y,0):y.isData3DTexture?x.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?x.setTexture2DArray(y,0):x.setTexture2D(y,0),le.unbindTexture()},this.resetState=function(){X=0,Y=0,N=null,le.reset(),de.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Vn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=ut._getDrawingBufferColorSpace(e),t.unpackColorSpace=ut._getUnpackColorSpace()}}const Ah=new P,lx=new hi,Rh=new P;class cx extends Ot{constructor(e=document.createElement("div")){super(),this.isCSS3DObject=!0,this.element=e,this.element.style.position="absolute",this.element.style.pointerEvents="auto",this.element.style.userSelect="none",this.element.setAttribute("draggable",!1),this.addEventListener("removed",function(){this.traverse(function(t){t.element&&t.element instanceof t.element.ownerDocument.defaultView.Element&&t.element.parentNode!==null&&t.element.remove()})})}copy(e,t){return super.copy(e,t),this.element=e.element.cloneNode(!0),this}}const Gn=new Et,hx=new Et;class ux{constructor(e={}){const t=this;let n,s,r,a;const o={camera:{style:""},objects:new WeakMap},l=e.element!==void 0?e.element:document.createElement("div");l.style.overflow="hidden",this.domElement=l;const c=document.createElement("div");c.style.transformOrigin="0 0",c.style.pointerEvents="none",l.appendChild(c);const u=document.createElement("div");u.style.transformStyle="preserve-3d",c.appendChild(u),this.getSize=function(){return{width:n,height:s}},this.render=function(m,f){const v=f.projectionMatrix.elements[5]*a;f.view&&f.view.enabled?(c.style.transform=`translate( ${-f.view.offsetX*(n/f.view.width)}px, ${-f.view.offsetY*(s/f.view.height)}px )`,c.style.transform+=`scale( ${f.view.fullWidth/f.view.width}, ${f.view.fullHeight/f.view.height} )`):c.style.transform="",m.matrixWorldAutoUpdate===!0&&m.updateMatrixWorld(),f.parent===null&&f.matrixWorldAutoUpdate===!0&&f.updateMatrixWorld();let S,M;f.isOrthographicCamera&&(S=-(f.right+f.left)/2,M=(f.top+f.bottom)/2);const R=f.view&&f.view.enabled?f.view.height/f.view.fullHeight:1,b=f.isOrthographicCamera?`scale( ${R} )scale(`+v+")translate("+d(S)+"px,"+d(M)+"px)"+h(f.matrixWorldInverse):`scale( ${R} )translateZ(`+v+"px)"+h(f.matrixWorldInverse),_=(f.isPerspectiveCamera?"perspective("+v+"px) ":"")+b+"translate("+r+"px,"+a+"px)";o.camera.style!==_&&(u.style.transform=_,o.camera.style=_),E(m,m,f)},this.setSize=function(m,f){n=m,s=f,r=n/2,a=s/2,l.style.width=m+"px",l.style.height=f+"px",c.style.width=m+"px",c.style.height=f+"px",u.style.width=m+"px",u.style.height=f+"px"};function d(m){return Math.abs(m)<1e-10?0:m}function h(m){const f=m.elements;return"matrix3d("+d(f[0])+","+d(-f[1])+","+d(f[2])+","+d(f[3])+","+d(f[4])+","+d(-f[5])+","+d(f[6])+","+d(f[7])+","+d(f[8])+","+d(-f[9])+","+d(f[10])+","+d(f[11])+","+d(f[12])+","+d(-f[13])+","+d(f[14])+","+d(f[15])+")"}function p(m){const f=m.elements;return"translate(-50%,-50%)"+("matrix3d("+d(f[0])+","+d(f[1])+","+d(f[2])+","+d(f[3])+","+d(-f[4])+","+d(-f[5])+","+d(-f[6])+","+d(-f[7])+","+d(f[8])+","+d(f[9])+","+d(f[10])+","+d(f[11])+","+d(f[12])+","+d(f[13])+","+d(f[14])+","+d(f[15])+")")}function g(m){m.isCSS3DObject&&(m.element.style.display="none");for(let f=0,v=m.children.length;f<v;f++)g(m.children[f])}function E(m,f,v,S){if(m.visible===!1){g(m);return}if(m.isCSS3DObject){const M=m.layers.test(v.layers)===!0,R=m.element;if(R.style.display=M===!0?"":"none",M===!0){m.onBeforeRender(t,f,v);let b;m.isCSS3DSprite?(Gn.copy(v.matrixWorldInverse),Gn.transpose(),m.rotation2D!==0&&Gn.multiply(hx.makeRotationZ(m.rotation2D)),m.matrixWorld.decompose(Ah,lx,Rh),Gn.setPosition(Ah),Gn.scale(Rh),Gn.elements[3]=0,Gn.elements[7]=0,Gn.elements[11]=0,Gn.elements[15]=1,b=p(Gn)):b=p(m.matrixWorld);const C=o.objects.get(m);if(C===void 0||C.style!==b){R.style.transform=b;const _={style:b};o.objects.set(m,_)}R.parentNode!==u&&u.appendChild(R),m.onAfterRender(t,f,v)}}for(let M=0,R=m.children.length;M<R;M++)E(m.children[M],f,v)}}}const dx="/assets/aged-walnut-frame-Ck2E4jhK.webp",fx="/assets/antique-gold-frame-QZ7KkU0f.webp",px="/assets/dark-ebony-frame-C3iWNz36.webp",mx="/assets/gallery-floor-CP2wCrA8.webp",gx="data:image/webp;base64,UklGRrAMAABXRUJQVlA4IKQMAAAQtgCdASoAAwADPpVEnU2lo6MjIDJJYLASiWlu3PzsT/6/0r/L/AfwTd1ueF/56C+1/x9lXpH/c0sGnVvdRo29+5J8qhA2gWSWnp3f9//Yz7/v9/NH/9u/AAtNJydroxfU/ryU0njY/SxmS7w3WMe8iHAI7iLDLteNwzl/lEDMivNMT71BY58bhXJWbD7OyaBrKQrdChg+uyEkJ2us5naGxl1R/jbYZoDAt2iTZZunEFg79d2UG6TtPTBVqnj87MiejRKA4iQ4VG31cXESFsaD7r8XrTpAh/6FX5wGbg6Gi74c9c51IIZjocJvN6xwuCv/TXgjHuEeOhf8tsnYFQ7xKGP/+yrVwi9DflDVafm5xtyTQI8vzus1eGRXLKYEBMFnMZxOKbdITapAmbNIVU9atn0OFE2JwCZRtmkFOMTaY1RSmh692Bm8EvJNDl9Y95h5X0/UZD1ScwXgblcbL5MiduK3jVJuKNIc3h5rkK8lNCcVR3ir0Ykx3TbV69EWeig/CS1YdMADPUDol96wEgA2uQ+kL66ACVopCg7yZ7XDwOeDxV5AHBwuBkOSeGJQ4BSRRDuK9NNosYPpB5pQgqG7j0HxaDK3LSmlf+mCO5aSQiYdbRVWBASHvz8Ek5/fTUO0LBO9WJBMs8SJ03yTJvkSFDVgFL6ILpVJJkGvbEvi9ro8cFeQ6QeaEmS1EME/kFjDJDdYx7yN3iI+WyVRAoHg4jyH02d13U12ZHqH0w+RDx+hCmAq6ubeQ6Rvl82K0zs276xZrgZD5pxcRVF7N0re6PUT8ZY1hq31YhDE7BRgR+cxV/DA6XdMs7ARWxKBWdDeBxug6luneiGIld+VGZN8ltAHYIekn5sUup/fHiiCrqTX3HAqDXSxl2KY+KCwbK/APLJOMkhiB4I1LrOmhwhJgUGtX8h1XPdgIWBjPc+f6hmMfF8cSwSjRIwRiZ70+IotNRkXOASzvKXVemdH4pbyzIAUDBEqQP/KvoJ4DrF1UyUgQxChWGJ4Ul3a3SIOA8KjrOGE8S5vrl7UfDFxS1BARHKbS7lJRUQQR+i5QH+InWGLqrj0wRgiOj/h0vOZEBb/JRxTeim96qe7KKzlDrhRz7+wVKhLvYGArY1XQV/qePYRsqlVFQflZ+F/c3Rezqp6VQSRfOsDgpiUie5SaBiY+U4qhY1oX/zN0B+eCwHldwIACcf8rfpGFiqmSRQkwfksmAqq9p8a1Pr5N3gqF2PPgkyIP3PzMlcJKUoRaip1yJKaSmBYVfGP2Bf7OFc5cdQpzTZ1Pa1001H/FroPEY9L00U7DqD0rYS1I64Td5CYFLajCkOQIpLpyNGLtbQu0BYh4FomUCwI8h9Io3/PaTmLLdeG6d3zMwFZViet7QROuBjBRTfIkppO8pdXb+G6x2sJiflrFqBZgcHDRR9IijQdMEf7kXj6aTuwR+KnR3NDP0gQMO+vk28Ntc+TbhjbshodYJyhaUm84bRgT5IG4UR2RC9uLBRuuY5LD/Ddk9jdhHGBWTUZYzAeUwppdH5PvcQFdq6woWa4+LFoXsmonP418nuZJOd9DOF17O8h0vTUmg/RSHp7sozJeXRg+X7GPeigM5iPzWRR4eGS4wcwVC+mpttwWEFOixICXOt7Q+cfES8kxcZ56iIVqZymUhO+u8OEBnmnky23xaMwaGjBF62Mq4aYoWjkWCCTb4GEFwHXTPfJRBMniLFLfJNC+ngYkFTCWQxrOmg0X30gOb4brAS8mhFSNMfrUO+pRlVQ1t1cneiAE0K6vJPbN8Tnczhla1dYuOKkJoAU+qYYIJaBfw5EPdZ2JuGFSDAId9StcDGW3YCwqH2yFo6BMsIoigTcdoobV3wIm9J/hundhtLFACKw9BxMFxGpG59nVEWpGwqO2cdXA4cxGXpBo2CJz7AfJgUWvuI8CdVOoQiGK+uaAri/7wDaOCCAUJAAAP73Gt/e++8Pq6rfA+WWkkM9zRUYmNsXL0Ed7Ce7XbK+4tEGybIi3Gg0sipsIpjQUrCilEX2nndJCWdl2NfLzJE6kdMH0UZe1z+xBrCiySG+5kdGKc8sQhqO+N2zbcCXKm8lkGGGgCxsfCvo1EU6dD+6jw5sTWh67xQKyUQMKkr20BF1tG5kyu692034Wbr3qGdwZqzWToEqNSRGpPn9HSyiK2os3m3mTocomMcCVEBjk0051jb5sZvNkY8NB+Ez3jCW0IfqJUc/eQLRSZSIWiVc46pl7ap5yToEGQ82jwfYiTO8YOveLX/DIeN18zlzdjd3u9xXBo47EgKFexIsphXx0QFLHZOl1sGWQfFj/sdU5e08fEEE0WVIPbLHR44AAVGR2uxGN8htXoQb9z3TpAXRsCxr9voLBQEwCCpt9tg4lEqym44r8E9gQ4ImvCeG1ldYmy7n1nl+Ijd7Uewln71PlbRG5LqfQ6x1Ut4BfcKWmQnu2A07x027IRAjCUl4UNbOzfFLbrogeupX/zHjvr1+DW8IWkrpFL0A6VKQ7t55idAeuqR6Mw8f/aYhoErRuwHoI2WF7fv+srs6Uhs5JpZ9N4ZQ5LxmAknbL5Cq92SHwdcuQUFTUxvmW8+P03si/YWcfQPtHw7+VwNpHp9HHZUVWc3vYcPrYYyTUOnqIIZYIEkpLXj8RZa+dGK3rucAdcitC8zvb+syVnKb/HZAl5rLq0It4eLu+SJFVaJKNJR3lq1+ooGnr74KrNvlk+ScVrmoToUVtjgimfLRaeLkiaAh1caQwKXra8DXcELuAW7cj7FSV2VGPwSUSwQLqfX2kMp+anSpTBzNd1YQZHfThQLcmsDhPS8P26EKSV+PRGWqkQH5pWrWquKpxcF5tpgDbqqqeD5KOQAJGvElpn83M5Igjxkzm+DuRbLTIiQDbDSYB79Q7YBNB3SBtHtVW85bGEXY/hPj17Gxh+vRFqy5Bhq4kCop/FAytaE5VV3XULSTZju1v7CQTMkYg0Epv/QQ33W9WP8d9F3nlUYA1HKESkLhhevHiSdB6WTgedJEU9qKmiz7WrsDKGw+Ghieq3Vk9YtwgnZaZiJQ+YlWHOxo2HNTcKT3Q8t7ZzbEB1mDXozIYcZNzG3pFNxr44Byq1EoLFTYXLbrlT7K0GDLUtAgeHhGkGfLjAmEOz88xLIH/zhxtHtOcr/o14AYVo/pgAAfbhEjujZ5n+BECE+wHWNsWZsdzMB8/tH8zEnYn8CzBc1LutiC5IIPQI2T8gI2EfO0kKhNPT2eR4fNdQ4gtEKJcyTSlvFz2WECA36MOkL9EU83bu+FcGPMOAyQTCaIhGNCJtNeAT6k1V/pQG2uWgHr6RckZCLTbJaVoryBH1nuHbRprxxaXvmgfJKLMiObRJIKykYN7kPyXK86UuKC1/vQyqzIHHaMLA5k1LxQrmbJLWBwph15C2a5r3YVIqRSQxtkrSTjzE596bHOzToE+Afm1yy6u16ZxsjvAdOHglpz0y24dzpFQLIZdv1QCD1rOgRiD87joK/+8uT8TadyR4DLEAdv0jq2pCv9+VsFrzMI5Rcd4IMxcdlPyxFyF717HgfV8WiuuZLK4DC4z1DD8iW1DkMw+JpXwA2bVWPQlJoeCDdUeFO2cAsVElASpKmqr7wGlwmg42leWhax8xJL4DUgf5EQ4JgfBr6BEFHAgsMsL3oLjnTod+1SfRBTAVHslLZcSbqRYMX9aVd9/icZaDRxTlgzd73ImmkF4aCOrVEpnOcBfPQUNGEforRjt1JZ2sWOac2GKiet333B6VFfRVgEB9GSskFWCDYzkmfz6nxXda1/DajulGGxXxoidXALM91FniRq6782T7QDhwSXsdGRIWwVWywci3P0qaCj0YuGZrt0jhWA2IDbh143c8vipA67TRZCyWT7Ur0Wo5kWlCYzCodp/PujZaKQV7IF9iRx1B9uINvGymyf6/B17itCnORZFk03VMYuhn0/5D9sNj4CWwRgIRzO/c6UG2JGjovpOLAotIiBr8JD/HhijX7CcC+1t3jlwQmHqndvkPxHYAOz9eZRtZfyw4A28PCUweS3ZBFaV+z2QwxgguCEkz0dOt5ODe6ZVvoyD8jVxE+51UXBCXbL+ss70KK+3PlPKkBMlMYiu3ESestrJHKvYON2vlBA0kgZQak0GNt0wwZcichRomtJRoZtXzP7ZZKL3WHBYhjle76oHVtDrxi76x7tYrxMIGRcLlfVK8mEVJgWJQYnv21RETIs9mEg3gmyrR+Nh05iSl4JhfjSuYEOjgBuPPU822MCqm/Qjbw3VV1XATZBCxtEfWhoR6/T2mBQPiY5JkbtGa2V0ZmtFdwAAA==",ho="/assets/gallery-plaster-bump-BHqCGYVu.webp",uo="/assets/gallery-plaster-c-fu2xyU.webp",_x="/assets/art_in_life_text_strokes_cropped_smooth-CtEiRldO.svg",aa=326,oa=492,xx=aa/oa,bs=.055,vx=0,ul=1,Mx="clipboard-write; encrypted-media; picture-in-picture; web-share",Sx=8,Ch=new P(1e-4,1e-4,1e-4),yx="gallery-chandelier",Ex="gallery-group-ceiling-spotlight",Pu="painting-overhead-spotlight",tr=320,Ph=520,fo=10.4*(2/3),bx=.08;typeof window<"u"&&(window.__ART_IN_LIFE_CARD_SIZE_SCALE__=ul,window.dispatchEvent(new Event("art-in-life-card-scale-change")));const Rt={exposure:4,paintingSpot:{color:16762252,intensity:5.65,distance:9.4,angle:.4,penumbra:.88,decay:1.8,heightOffset:3.6,depth:1.42,targetY:-.22,targetZ:-.06},ceilingSpot:{color:16775399,intensity:2.5,distance:19,angle:1.4,penumbra:.72,decay:1.8},chandelier:{color:16760941,intensity:50,distance:18,decay:1.75,yOffset:1.05}},Tx="(max-width: 767px)",wx="(max-width: 1180px)",Ax="(prefers-reduced-motion: reduce)";let jr=null;const ki=(i,e,t)=>Math.min(Math.max(i,e),t),Ts=(i,e,t)=>i+(e-i)*t,Ti=(i,e,t)=>{const n=ki((t-i)/(e-i),0,1);return n*n*(3-2*n)},po=i=>i<.5?4*i*i*i:1-Math.pow(-2*i+2,3)/2,Lh=(i,e)=>{const t=i.documentElement,n=t.getAttribute("viewBox")||"0 0 1251 918",s=t.getAttribute("width")||"1251",r=t.getAttribute("height")||"918",a=i.getElementById(e);if(!a)throw new Error(`Missing SVG group: ${e}`);return`<svg xmlns="http://www.w3.org/2000/svg" width="${s}" height="${r}" viewBox="${n}">${a.outerHTML}</svg>`},Rx=i=>i==="blue"?{front:16055807,emissive:2607359,side:7986175}:{front:16774651,emissive:16717704,side:16740794},Ih=(i,e,t,n,s,r)=>{const o=new i().parse(e),l=Rx(t),c=new $t;return o.paths.forEach(u=>{i.createShapes(u).forEach(h=>{const p=new Il(h,{depth:8,steps:1,bevelEnabled:!1,curveSegments:10}),g=new Jt({color:l.front,emissive:l.emissive,emissiveIntensity:t==="blue"?2.25:2.7,roughness:.35,metalness:0}),E=new Jt({color:l.side,emissive:l.emissive,emissiveIntensity:t==="blue"?.5:.64,roughness:.45,metalness:0}),m=new xt(p,[g,E]);m.castShadow=!1,m.receiveShadow=!1,c.add(m),s.push(p),r.push(g,E),t==="blue"?(n.frontBlue.push(g),n.sideBlue.push(E)):(n.frontPink.push(g),n.sidePink.push(E))})}),c},Cx=(i,e,t,n,s,r)=>{const a=new DOMParser().parseFromString(e,"image/svg+xml"),o=new $t,l=Ih(i,Lh(a,"blue-word-group"),"blue",n,s,r),c=Ih(i,Lh(a,"pink-word-group"),"pink",n,s,r),u=new $t;u.add(l),u.add(c),u.scale.y=-1,u.updateMatrixWorld(!0);const d=new ui().setFromObject(u),h=d.getCenter(new P),p=d.getSize(new P);u.position.sub(h),u.position.z=0;const g=t/p.x;u.scale.set(g,-g,g),o.add(u),o.position.set(0,-.04,0),o.updateMatrixWorld(!0);const m=new ui().setFromObject(o).getCenter(new P);return o.position.x-=m.x,o.position.y-=m.y,o},Px=i=>{const e=(i+.6)%6.4/6.4;let t=1;const n=Ti(.55,.6,e),s=Ti(.72,.84,e);t*=1-.4*n*(1-s);const r=Ti(.61,.64,e)*(1-Ti(.77,.81,e)),a=Math.sin(i*38)*Math.sin(i*71)*.5+.5;return t-=r*.16*Math.pow(a,3),t+=.018*Math.sin(i*13)+.01*Math.sin(i*29.5),ki(t,.5,1.03)},mo=i=>{const[e,t]=Kt.useState(()=>typeof window>"u"?!1:window.matchMedia(i).matches);return Kt.useEffect(()=>{const n=window.matchMedia(i),s=()=>t(n.matches);return s(),n.addEventListener("change",s),()=>{n.removeEventListener("change",s)}},[i]),e},Lx=(i,e)=>i?{spacing:3,frameOuterWidth:2.26,frameOuterHeight:3.42,frameDepth:.28,postWidth:1.86,postHeight:2.8,frameY:.32,cameraY:.2,cameraFov:47,groupSize:1,frameWindowGroups:1,hallwayWidth:14.3,groupDepth:4.7,floorY:-2.72,ceilingY:4.55,wallHeight:8.25,transitionDuration:1700,transitionLift:.22,transitionLookDistance:8.8}:e?{spacing:3.34,frameOuterWidth:2.48,frameOuterHeight:3.62,frameDepth:.3,postWidth:2.02,postHeight:3.05,frameY:.34,cameraY:.28,cameraFov:41,groupSize:2,frameWindowGroups:1,hallwayWidth:16.9,groupDepth:7.45,floorY:-2.72,ceilingY:4.65,wallHeight:8.35,transitionDuration:1850,transitionLift:.24,transitionLookDistance:11.5}:{spacing:3.62,frameOuterWidth:2.58,frameOuterHeight:3.66,frameDepth:.32,postWidth:2.08,postHeight:3.14,frameY:.42,cameraY:.3,cameraFov:40,groupSize:3,frameWindowGroups:1,hallwayWidth:18.5,groupDepth:9.45,floorY:-2.72,ceilingY:4.72,wallHeight:8.45,transitionDuration:1950,transitionLift:.26,transitionLookDistance:13.2},Ix=()=>{try{const i=document.createElement("canvas");return!!(window.WebGLRenderingContext&&(i.getContext("webgl")||i.getContext("experimental-webgl")))}catch{return!1}},Dx=()=>{["https://www.instagram.com","https://static.cdninstagram.com"].forEach(i=>{const e=`link[data-instagram-preconnect="${i}"]`;if(document.querySelector(e))return;const t=document.createElement("link");t.rel="preconnect",t.href=i,t.crossOrigin="anonymous",t.dataset.instagramPreconnect=i,document.head.appendChild(t)})},Lu=()=>window.instgrm?.Embeds?Promise.resolve():jr||(jr=new Promise((i,e)=>{const t=document.querySelector("script[data-instagram-embed-sdk]");if(t){t.addEventListener("load",()=>i(),{once:!0}),t.addEventListener("error",e,{once:!0});return}Dx();const n=document.createElement("script");n.async=!0,n.defer=!0,n.crossOrigin="anonymous",n.src="https://www.instagram.com/embed.js",n.dataset.instagramEmbedSdk="true",n.addEventListener("load",()=>i(),{once:!0}),n.addEventListener("error",e,{once:!0}),document.body.appendChild(n)}),jr),Ux=i=>new Promise(e=>{window.requestAnimationFrame(()=>{try{window.instgrm?.Embeds.process(i)}catch{}finally{window.setTimeout(()=>{e()},0)}})}),Nx=(i,e=2600)=>i.querySelector('iframe[src*="instagram.com"]')?Promise.resolve(!0):new Promise(t=>{let n=!1;const s=o=>{n||(n=!0,window.clearTimeout(a),r.disconnect(),t(o))},r=new MutationObserver(()=>{i.querySelector('iframe[src*="instagram.com"]')&&s(!0)}),a=window.setTimeout(()=>s(!!i.querySelector('iframe[src*="instagram.com"]')),e);r.observe(i,{childList:!0,subtree:!0})}),dl=(i,e)=>{i.querySelectorAll('iframe[src*="instagram.com"]').forEach(n=>{n.setAttribute("title",`Instagram post in Art in Life gallery ${e+1}`),n.setAttribute("loading","lazy"),n.setAttribute("allow",Mx),n.referrerPolicy="strict-origin-when-cross-origin"})},Iu=(i,e)=>{dl(i,e);const t=new MutationObserver(()=>{dl(i,e)});return t.observe(i,{childList:!0,subtree:!0}),t},Fx=i=>{const e=window;return e.requestIdleCallback?{type:"idle",id:e.requestIdleCallback(i,{timeout:1500})}:{type:"timeout",id:window.setTimeout(i,520)}},Dh=i=>{if(!i)return;const e=window;if(i.type==="idle"&&e.cancelIdleCallback){e.cancelIdleCallback(i.id);return}window.clearTimeout(i.id)},Uh=i=>`<a href="${i}" target="_blank" rel="noopener noreferrer">Open Instagram post</a>`,Nh=(i,e,t,n,s=!0)=>{s&&(i.colorSpace=Ft),i.wrapS=Zi,i.wrapT=Zi,i.repeat.set(e,t),i.anisotropy=n},Ox=(i,e)=>{i.colorSpace=Ft,i.wrapS=rn,i.wrapT=rn,i.repeat.set(1,1),i.anisotropy=e},Bx=i=>{const e=document.createElement("canvas");e.width=768,e.height=512;const t=e.getContext("2d");if(t){t.clearRect(0,0,e.width,e.height),t.globalCompositeOperation="lighter";const s=(r,a,o,l,c)=>{const u=t.createRadialGradient(r,a,0,r,a,o);u.addColorStop(0,`rgba(${l[0]}, ${l[1]}, ${l[2]}, ${c})`),u.addColorStop(.32,`rgba(${l[0]}, ${l[1]}, ${l[2]}, ${c*.42})`),u.addColorStop(.72,`rgba(${l[0]}, ${l[1]}, ${l[2]}, ${c*.11})`),u.addColorStop(1,`rgba(${l[0]}, ${l[1]}, ${l[2]}, 0)`),t.fillStyle=u,t.fillRect(r-o,a-o,o*2,o*2)};s(e.width*.34,e.height*.42,250,[39,200,255],.54),s(e.width*.58,e.height*.5,290,[255,23,136],.44),s(e.width*.72,e.height*.58,220,[255,113,186],.34),s(e.width*.48,e.height*.65,300,[255,80,164],.18)}const n=new ga(e);return n.colorSpace=Ft,n.wrapS=rn,n.wrapT=rn,n.anisotropy=i,n.needsUpdate=!0,n},zx=()=>{const i=document.createElement("canvas");i.width=512,i.height=128;const e=i.getContext("2d");e&&(e.clearRect(0,0,i.width,i.height),e.fillStyle="rgba(55, 31, 8, 0.78)",e.font="600 70px Georgia, Times New Roman, serif",e.letterSpacing="2px",e.textAlign="center",e.textBaseline="middle",e.shadowColor="rgba(255, 238, 188, 0.42)",e.shadowBlur=1.2,e.shadowOffsetY=1,e.fillText("Scott Sun",i.width/2,i.height/2+1));const t=new ga(i);return t.colorSpace=Ft,t.anisotropy=4,t.needsUpdate=!0,t},Gx=i=>{let e=i>>>0;return()=>{e+=1831565813;let t=e;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}},Hx=(i,e)=>{const t=Gx(i),n=document.createElement("canvas");n.width=384,n.height=580;const s=n.getContext("2d");if(s){const a=["#6fd7d2","#4f7dff","#ca42c9","#f26c54","#f4df68","#68c75f","#9d78ff","#f1a968"],o=s.createLinearGradient(0,0,0,n.height);o.addColorStop(0,"#203345"),o.addColorStop(1,"#142334"),s.fillStyle=o,s.fillRect(0,0,n.width,n.height),s.globalAlpha=.13,s.fillStyle="#ffffff";for(let c=8;c<n.height;c+=9)for(let u=8;u<n.width;u+=9)s.beginPath(),s.arc(u,c,1.1,0,Math.PI*2),s.fill();s.globalCompositeOperation="screen";for(let c=0;c<28;c++){const u=18+t()*74,d=t()*n.width,h=t()*n.height,p=a[Math.floor(t()*a.length)];s.globalAlpha=.24+t()*.28,s.fillStyle=p,s.beginPath(),s.ellipse(d,h,u*(.78+t()*.72),u,t()*Math.PI,0,Math.PI*2),s.fill()}for(let c=0;c<44;c++){const u=5+t()*8,d=28+t()*86,h=t()*n.width,p=t()*n.height;s.save(),s.translate(h,p),s.rotate(-.9+t()*1.8),s.globalAlpha=.34+t()*.3,s.fillStyle=a[Math.floor(t()*a.length)],s.fillRect(-u/2,-d/2,u,d),s.restore()}s.globalCompositeOperation="multiply",s.globalAlpha=.18;const l=s.createLinearGradient(n.width*.12,n.height,n.width,0);l.addColorStop(0,"rgba(0, 0, 0, 0.02)"),l.addColorStop(.64,"rgba(0, 0, 0, 0.7)"),l.addColorStop(1,"rgba(0, 0, 0, 0.08)"),s.fillStyle=l,s.fillRect(0,0,n.width,n.height),s.globalCompositeOperation="source-over",s.globalAlpha=.16,s.strokeStyle="#f3d49d",s.lineWidth=4,s.strokeRect(2,2,n.width-4,n.height-4)}const r=new ga(n);return r.colorSpace=Ft,r.wrapS=rn,r.wrapT=rn,r.anisotropy=Math.min(e,4),r.needsUpdate=!0,r},Vx=i=>{const t=document.createElement("canvas");t.width=256,t.height=256;const n=t.getContext("2d");if(n){const r=n.createImageData(256,256);for(let a=0;a<256;a++)for(let o=0;o<256;o++){const l=(a*256+o)*4,c=Math.sin(o*.06+Math.sin(a*.022)*3.1)*.5+.5,u=Math.sin(o*12.9898+a*78.233+17)*43758.5453,d=u-Math.floor(u),h=Math.floor(118+c*44+d*42);r.data[l]=h,r.data[l+1]=Math.floor(h*.92),r.data[l+2]=Math.floor(h*.78),r.data[l+3]=255}n.putImageData(r,0,0)}const s=new ga(t);return s.wrapS=Zi,s.wrapT=Zi,s.repeat.set(5,2),s.colorSpace=Ft,s.anisotropy=Math.min(i,8),s.needsUpdate=!0,s},vs=(i,e)=>{const t=i.getAttribute("position");for(let n=0;n<t.count;n++){const s=t.getX(n),r=t.getY(n),a=Math.sin(s*3.1+r*1.7)*.45+Math.sin(s*8.2-r*5.4)*.18+Math.sin((s+r)*14.3)*.08;t.setZ(n,a*e)}t.needsUpdate=!0,i.computeVertexNormals()},Ms=(i,e,t,n,s)=>{i.push(e,t,n,t,s,n)},Du=(i,e)=>{const t=e/.75,n=.355*t*Math.pow(Math.max(0,Math.sin(Math.PI*i)),.56),s=.105*t*Math.exp(-Math.pow((i-.085)/.033,2)),r=.092*t*Math.exp(-Math.pow((i-.905)/.038,2)),a=-.115*t*Math.exp(-Math.pow((i-.205)/.043,2)),o=-.102*t*Math.exp(-Math.pow((i-.735)/.052,2)),l=.045*t*Math.exp(-Math.pow((i-.42)/.15,2)),c=-.035*t*Math.exp(-Math.pow((i-.61)/.095,2));let u=.07*t+n+s+r+a+o+l+c;return u=Ts(.105*t,u,Ti(0,.052,i)),u=Ts(u,.095*t,Ti(.952,1,i)),u},kx=(i,e=92)=>Array.from({length:e},(t,n)=>{const s=n/(e-1);return{t:s,z:Du(s,i)}}),Fh=(i,e,t,n,s)=>{const r=e.outerWidth/2,a=e.outerHeight/2,o=e.innerWidth/2,l=e.innerHeight/2,c=i==="top"||i==="bottom"?e.railWidthY:e.railWidthX,u=t*c;let d=0,h=0;return i==="top"?(h=l+u,d=Ts(-r+e.railWidthX-t*e.railWidthX,r-e.railWidthX+t*e.railWidthX,n)):i==="bottom"?(h=-l-u,d=Ts(-r+e.railWidthX-t*e.railWidthX,r-e.railWidthX+t*e.railWidthX,n)):i==="right"?(d=o+u,h=Ts(-a+e.railWidthY-t*e.railWidthY,a-e.railWidthY+t*e.railWidthY,n)):(d=-o-u,h=Ts(-a+e.railWidthY-t*e.railWidthY,a-e.railWidthY+t*e.railWidthY,n)),new P(d,h,s)},Wx=(i,e)=>{i==="top"||i==="bottom"?e.railWidthY:e.railWidthX;const t=kx(e.profileRailWidth),n=i==="top"||i==="bottom"?132:156,s=-.18*(e.profileRailWidth/.75),r=[],a=[],o=[],l=[],c=[],u=(h,p,g)=>{const E=r.length/3;return r.push(h.x,h.y,h.z),a.push(p,g),E};t.forEach(({t:h,z:p},g)=>{l[g]=[],c[g]=[];for(let E=0;E<=n;E++){const m=E/n,f=m,v=h,S=Fh(i,e,h,m,p),M=Fh(i,e,h,m,s);l[g][E]=u(S,f,v),c[g][E]=u(M,f,v+.08)}});for(let h=0;h<t.length-1;h++)for(let p=0;p<n;p++)Ms(o,l[h][p],l[h][p+1],l[h+1][p],l[h+1][p+1]),Ms(o,c[h+1][p],c[h+1][p+1],c[h][p],c[h][p+1]);for(let h=0;h<n;h++)Ms(o,c[0][h],c[0][h+1],l[0][h],l[0][h+1]),Ms(o,l[t.length-1][h],l[t.length-1][h+1],c[t.length-1][h],c[t.length-1][h+1]);for(let h=0;h<t.length-1;h++)Ms(o,c[h][0],l[h][0],c[h+1][0],l[h+1][0]),Ms(o,l[h][n],c[h][n],l[h+1][n],c[h+1][n]);const d=new Qt;return d.setAttribute("position",new bt(r,3)),d.setAttribute("uv",new bt(a,2)),d.setIndex(o),d.computeVertexNormals(),d.computeBoundingSphere(),d},Xx=()=>typeof window>"u"?ul:window.__ART_IN_LIFE_CARD_SIZE_SCALE__??ul,fl=i=>{const e=i.postWidth,t=e/xx,n=(i.frameOuterWidth-e)/2,s=(i.frameOuterHeight-t)/2,r=Math.min(n,s),a=Xx();return{innerWidth:e,innerHeight:t,railWidthX:n,railWidthY:s,profileRailWidth:r,cardWidth:e*a,cardHeight:t*a,cardZ:bs+Du(vx,r)}},Oh=i=>{(Array.isArray(i)?i:[i]).forEach(t=>t.dispose())},Yx=({index:i,x:e,layout:t,materials:n,unitBox:s,unitPlane:r})=>{const a=new $t,o=n.frame[i%n.frame.length],l=t.frameOuterHeight/2,c=l+Rt.paintingSpot.heightOffset,u=fl(t),d=Math.min(.86,t.frameOuterWidth*.34),h=.18,p=l+.34;a.position.set(e,t.frameY,0);const g=(S,M,R,b,C=!0)=>{const _=new xt(s,b);_.name=S,_.scale.set(...M),_.position.set(...R),_.castShadow=C,_.receiveShadow=!0,a.add(_)};g("backing",[u.innerWidth+.08,u.innerHeight+.08,.045],[0,0,.018],n.backing,!1);const E=new xt(r,n.placeholderArt);E.name="procedural-placeholder-art",E.scale.set(u.cardWidth,u.cardHeight,1),E.position.set(0,0,u.cardZ-.006),E.castShadow=!1,E.receiveShadow=!0,a.add(E),g("artist-plaque",[d,h,.035],[0,p,.02],n.plaque);const m=new xt(r,n.plaqueText);m.name="artist-plaque-engraving",m.scale.set(d*.76,h*.54,1),m.position.set(0,p,.041),m.castShadow=!1,m.receiveShadow=!1,a.add(m);const f={outerWidth:t.frameOuterWidth,outerHeight:t.frameOuterHeight,innerWidth:u.innerWidth,innerHeight:u.innerHeight,railWidthX:u.railWidthX,railWidthY:u.railWidthY,profileRailWidth:u.profileRailWidth,frameDepth:t.frameDepth};["top","bottom","left","right"].forEach(S=>{const M=new xt(Wx(S,f),o);M.name=`sculpted-${S}-frame-rail`,M.position.z=bs,M.castShadow=!0,M.receiveShadow=!0,a.add(M)}),g("picture-light-bar",[t.frameOuterWidth*.42,.07,.12],[0,c,Rt.paintingSpot.depth],n.plaque,!1);const v=new ll(Rt.paintingSpot.color,0,Rt.paintingSpot.distance,Rt.paintingSpot.angle,Rt.paintingSpot.penumbra,Rt.paintingSpot.decay);return v.name=Pu,v.userData.baseIntensity=Rt.paintingSpot.intensity,v.position.set(0,c,Rt.paintingSpot.depth),v.target.position.set(0,Rt.paintingSpot.targetY,Rt.paintingSpot.targetZ),v.castShadow=!1,a.add(v,v.target),a},qx=({url:i,index:e})=>{const t=Kt.useRef(null),[n,s]=Kt.useState(!1);return Kt.useEffect(()=>{const r=t.current;if(!r)return;const a=new IntersectionObserver(([o])=>{o.isIntersecting&&(s(!0),a.disconnect())},{rootMargin:"240px 0px"});return a.observe(r),()=>{a.disconnect()}},[]),Kt.useEffect(()=>{if(!n||!t.current)return;const r=t.current,a=Iu(r,e);return r.innerHTML=Bh(i),Lu().then(()=>{try{window.instgrm?.Embeds.process(r)}catch{r.innerHTML=Uh(i);return}window.setTimeout(()=>dl(r,e),900)}).catch(()=>{r.innerHTML=Uh(i)}),()=>{a.disconnect()}},[e,n,i]),Ut.jsx("div",{ref:t,className:mt.fallbackEmbed,children:!n&&Ut.jsx("div",{className:mt.embedSkeleton,"aria-label":`Instagram post placeholder ${e+1}`})})},Zx=({urls:i})=>Ut.jsx("div",{className:mt.fallbackGallery,children:i.map((e,t)=>Ut.jsx("div",{className:mt.fallbackFrame,children:Ut.jsx(qx,{url:e,index:t})},`${e}-${t}`))}),Jx=({urls:i})=>{const e=Kt.useRef(null),t=Kt.useRef(null),n=Kt.useRef(null),s=Kt.useRef(null),[r,a]=Kt.useState(!1),[o,l]=Kt.useState(!1),[c,u]=Kt.useState(0),d=mo(Tx),h=mo(wx),p=mo(Ax),g=Kt.useMemo(()=>Lx(d,h),[d,h]),E=Math.max(1,Math.ceil(i.length/g.groupSize)),m=Kt.useMemo(()=>({webglLayer:mt.webglLayer,cssLayer:mt.cssLayer,embedCrop:mt.embedCrop,embedContent:mt.embedContent,embedPlane:mt.embedPlane,embedSkeleton:mt.embedSkeleton,skeletonHeader:mt.skeletonHeader,skeletonAvatar:mt.skeletonAvatar,skeletonLines:mt.skeletonLines,skeletonLine:mt.skeletonLine,skeletonLineShort:mt.skeletonLineShort,skeletonImage:mt.skeletonImage,skeletonFooter:mt.skeletonFooter,skeletonActions:mt.skeletonActions,skeletonDot:mt.skeletonDot,skeletonCaptionLine:mt.skeletonCaptionLine,skeletonCaptionShort:mt.skeletonCaptionShort}),[]);return Kt.useEffect(()=>{if(p||!Ix()){l(!0),a(!0);return}const f=t.current,v=e.current;if(!f||!v||i.length===0)return;let S=!0,M=0,R=0,b=-1,C=null,_=()=>{};const w=new Map,D=new Map,L=Math.max(0,E-1),O=Math.max(0,(g.groupSize-1)*g.spacing),X=O/2+g.groupDepth*.82,N=-L*g.groupDepth-O/2-g.groupDepth*.9,G=X-N,k=(X+N)/2,ne=g.hallwayWidth/2,oe=.35,ge=.45,Ae=g.ceilingY-g.floorY,Ie=Ae+oe*2,$e=g.floorY+Ae/2,ot=new rp,qe=[],K=new Us(1,1,1),Se=new yn(1,1),ce=document.createElement("div");ce.className=m.webglLayer;const Fe=document.createElement("div");Fe.className=m.cssLayer;const We=document.createElement("div");We.setAttribute("aria-hidden","true"),We.style.cssText=`position:fixed;left:-10000px;top:0;width:${aa}px;min-height:${oa}px;overflow:hidden;opacity:0;pointer-events:none;z-index:-1;contain:layout paint style;`,f.append(ce,Fe),document.body.appendChild(We);const Xe=()=>{const A=f.getBoundingClientRect(),z=Math.max(1,Math.round(A.width));let q=Math.max(1,Math.round(A.height));return d&&q%2===1&&(q-=1),{width:z,height:q}},He=new Nc;He.background=new lt(15656665);const Je=new Nc,ee=Xe(),se=new ln(g.cameraFov,ee.width/ee.height,.1,Math.max(120,G+90));se.position.set(0,g.cameraY,0);const J=new ox({antialias:!0,alpha:!0,powerPreference:"high-performance"}),be=Math.min(window.devicePixelRatio,d?1.5:2);J.setPixelRatio(be),J.setSize(ee.width,ee.height,!0),J.outputColorSpace=Ft,J.toneMapping=ml,J.toneMappingExposure=Rt.exposure,J.shadowMap.enabled=!0,J.shadowMap.type=ys,J.domElement.style.display="block",J.domElement.style.width=`${ee.width}px`,J.domElement.style.height=`${ee.height}px`,J.domElement.style.pointerEvents="none",ce.appendChild(J.domElement);let fe=null,Ye=null;(async()=>{const[{EffectComposer:A},{RenderPass:z},{UnrealBloomPass:q},{OutputPass:ie}]=await Promise.all([Ys(()=>import("./EffectComposer-CFqXK4wW.js"),__vite__mapDeps([0,1,2,3,4,5,6])),Ys(()=>import("./RenderPass-Dsizzt1l.js"),__vite__mapDeps([7,2,3,4,5,6])),Ys(()=>import("./UnrealBloomPass-BI5chNc4.js"),__vite__mapDeps([8,2,1,3,4,5,6])),Ys(()=>import("./OutputPass-DrZHgG7t.js"),__vite__mapDeps([9,2,3,4,5,6]))]);if(!S)return;const{width:Q,height:xe}=Xe(),ve=Math.min(window.devicePixelRatio,d?1.5:2),Le=new A(J);Le.setPixelRatio(ve),Le.setSize(Q,xe),Le.addPass(new z(He,se));const nt=new q(new Me(Q,xe),.15,.08,.8);Le.addPass(nt),Le.addPass(new ie),fe=Le,Ye=nt,_()})().catch(()=>{});const Ve=new ux;Ve.setSize(ee.width,ee.height),Ve.domElement.style.position="absolute",Ve.domElement.style.inset="0",Ve.domElement.style.width=`${ee.width}px`,Ve.domElement.style.height=`${ee.height}px`,Ve.domElement.style.pointerEvents="none",Fe.appendChild(Ve.domElement);const Ne=Math.min(J.capabilities.getMaxAnisotropy(),8),Ze=(A,z,q)=>{const ie=ot.load(A,()=>{S&&J.render(He,se)});return Nh(ie,z,q,Ne),qe.push(ie),ie},le=A=>{const z=ot.load(A,()=>{S&&J.render(He,se)});return Ox(z,Ne),qe.push(z),z},dt=(A,z,q)=>{const ie=ot.load(A,()=>{S&&J.render(He,se)});return Nh(ie,z,q,Ne,!1),qe.push(ie),ie},T={x:Math.max(1,G/12),y:Ie/6.4},x={x:Math.max(1,(g.hallwayWidth+ge*2)/8),y:Ie/6.4},B={x:Math.max(1,(g.hallwayWidth+ge*2)/6.5),y:Math.max(1,G/11)},j=d?3.6:h?4.2:4.6,ae=g.hallwayWidth/j,he={x:j,y:Math.max(1,G/ae)},pe=Ze(uo,T.x,T.y),Z=dt(ho,T.x,T.y),te=Ze(uo,x.x,x.y),we=dt(ho,x.x,x.y),De=Ze(uo,B.x,B.y),_e=dt(ho,B.x,B.y),ue=Ze(mx,he.x,he.y),Qe=Ze(gx,1,1),tt=le(dx),ht=le(fx),U=le(px),de=zx();qe.push(de);const $=Vx(Ne);qe.push($);const Ce=Array.from({length:Sx},(A,z)=>Hx(5351360+z*2654435761,Ne));qe.push(...Ce);const me=new Jt({map:pe,bumpMap:Z,bumpScale:.024,color:15919321,roughness:.94,metalness:0}),re=new Jt({map:te,bumpMap:we,bumpScale:.023,color:15919321,roughness:.94,metalness:0}),Be=new Jt({map:De,bumpMap:_e,bumpScale:.018,color:16050908,roughness:.96,metalness:0,side:Xn}),et=new Jt({map:ue,bumpMap:ue,bumpScale:.005,color:15982015,roughness:.68,metalness:0}),Ct=new si({map:tt,bumpMap:tt,bumpScale:.022,color:16777215,roughness:.42,metalness:.04,clearcoat:.62,clearcoatRoughness:.28,side:En}),_t=new si({map:ht,bumpMap:ht,bumpScale:.012,color:16767121,roughness:.24,metalness:.78,clearcoat:.24,clearcoatRoughness:.2,side:En}),_n=new si({map:U,bumpMap:U,bumpScale:.018,color:16777215,roughness:.4,metalness:.03,clearcoat:.7,clearcoatRoughness:.24,side:En}),hn=new Jt({map:Qe,color:15985372,roughness:.92}),di=Ce.map(A=>new Jt({map:A,color:16777215,roughness:.74,metalness:.01,side:Xn})),wi=new Jt({color:3811357,roughness:.58,metalness:.03}),Jn=new Jt({color:15261392,roughness:.78,metalness:0}),Mt=new si({color:13146693,metalness:1,roughness:.27,clearcoat:.65,clearcoatRoughness:.22,sheen:.15,envMapIntensity:1.15,map:$}),Gt=new si({color:9397291,metalness:1,roughness:.36,clearcoat:.38,clearcoatRoughness:.28,envMapIntensity:.92,map:$}),Qi=new si({color:4863272,metalness:.08,roughness:.84,clearcoat:.08,clearcoatRoughness:.72,envMapIntensity:.35}),es=new si({color:16773317,roughness:.05,metalness:0,transmission:.55,thickness:.38,ior:1.48,transparent:!0,opacity:.55,clearcoat:1,clearcoatRoughness:.025,envMapIntensity:1.35}),an=new si({color:16251903,roughness:.015,metalness:0,transmission:.82,thickness:.8,ior:1.74,transparent:!0,opacity:.58,clearcoat:1,clearcoatRoughness:.01,attenuationColor:new lt(16774364),attenuationDistance:4.5,envMapIntensity:1.9}),Ai=new Jt({color:16182482,roughness:.48,metalness:0}),Ri=new Jt({color:16775138,roughness:.22,metalness:0}),Ci=new Jt({color:16765050,roughness:.32,metalness:0}),fi=new Jt({color:16758617,roughness:.38,metalness:0,transparent:!0,opacity:.55,depthWrite:!1}),Fs=new si({color:12157485,roughness:.16,metalness:.96,clearcoat:.42,clearcoatRoughness:.1}),Mr=new Jt({map:de,color:4006664,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1,roughness:.82,metalness:.04}),Ma=[me,re,Be,et,Ct,_t,_n,hn,...di,wi,Jn,Mt,Gt,Qi,es,an,Ai,Ri,Ci,fi,Fs,Mr],Kn=[],Os=[],Bs=[],Sr=[],zs=[],y={frontBlue:[],frontPink:[],sideBlue:[],sidePink:[]},F=Math.max(96,Math.min(420,E*10)),W=Math.max(96,Math.min(480,E*12)),H=new yn(G,Ie,F,42);vs(H,.009),Kn.push(H);const V=new xt(H,me);V.rotation.y=Math.PI/2,V.position.set(-ne,$e,k),V.receiveShadow=!0,He.add(V);const Ee=new yn(G,Ie,F,42);vs(Ee,.009),Kn.push(Ee);const Pe=new xt(Ee,me);Pe.rotation.y=-Math.PI/2,Pe.position.set(ne,$e,k),Pe.receiveShadow=!0,He.add(Pe);const ye=new yn(g.hallwayWidth+ge*2,Ie,48,42);vs(ye,.008),Kn.push(ye);const Oe=new xt(ye,re);Oe.position.set(0,$e,N),Oe.receiveShadow=!0,He.add(Oe);const ze=new yn(g.hallwayWidth+ge*2,Ie,48,42);vs(ze,.008),Kn.push(ze);const je=new xt(ze,re);je.rotation.y=Math.PI,je.position.set(0,$e,X),je.receiveShadow=!0,He.add(je);const it=new yn(g.hallwayWidth+ge*2,G,28,W);vs(it,.006),Kn.push(it);const Ge=new xt(it,et);Ge.rotation.x=-Math.PI/2,Ge.position.set(0,g.floorY,k),Ge.receiveShadow=!0,He.add(Ge);const gt=new yn(g.hallwayWidth+ge*2,G,24,W);vs(gt,.004),Kn.push(gt);const wt=new xt(gt,Be);wt.rotation.x=Math.PI/2,wt.position.set(0,g.ceilingY,k),wt.receiveShadow=!1,He.add(wt);const Tt=(A,z,q,ie)=>{const Q=A==="left"?1:-1,xe=new xt(K,Jn);xe.rotation.y=A==="left"?Math.PI/2:-Math.PI/2,xe.scale.set(G,q,ie),xe.position.set((A==="left"?-ne:ne)+Q*ie*.5,z,k),xe.castShadow=!0,xe.receiveShadow=!0,He.add(xe)};Tt("left",g.floorY+.2,.13,.18),Tt("right",g.floorY+.2,.13,.18),Tt("left",g.floorY+.29,.025,.055),Tt("right",g.floorY+.29,.025,.055);const pt=new xt(K,Jn);pt.scale.set(g.hallwayWidth,.13,.18),pt.position.set(0,g.floorY+.2,N+.09),pt.castShadow=!0,pt.receiveShadow=!0,He.add(pt);const Lt=new xt(K,Jn);Lt.scale.set(g.hallwayWidth,.025,.055),Lt.position.set(0,g.floorY+.29,N+.03),Lt.castShadow=!0,Lt.receiveShadow=!0,He.add(Lt);const Re=new xt(K,Jn);Re.scale.set(g.hallwayWidth,.13,.18),Re.position.set(0,g.floorY+.2,X-.09),Re.castShadow=!0,Re.receiveShadow=!0,He.add(Re);const Nt=new xt(K,Jn);Nt.scale.set(g.hallwayWidth,.025,.055),Nt.position.set(0,g.floorY+.29,X-.03),Nt.castShadow=!0,Nt.receiveShadow=!0,He.add(Nt);const ct=Bx(Ne);qe.push(ct);const en=(A,z,q,ie)=>{const Q=new $t;Q.rotation.y=ie,Q.position.set(0,$e,q);const xe=new yn(fo*1.38,fo*.82,1,1),ve=new Al({map:ct,transparent:!0,opacity:.34,blending:go,depthWrite:!1,toneMapped:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}),Le=new xt(xe,ve);Le.position.z=.012,Le.renderOrder=1,Q.add(Le),Os.push(xe),Bs.push(ve),Sr.push(ve);const nt=Cx(A,z,fo,y,Os,Bs);nt.position.z+=bx,Q.add(nt),He.add(Q),zs.push(Q)};(async()=>{try{const[{SVGLoader:A},z]=await Promise.all([Ys(()=>import("./SVGLoader-C8tEV3I0.js"),__vite__mapDeps([10,3,4,5,6])),fetch(_x)]);if(!z.ok)return;const q=await z.text();if(!S)return;en(A,q,N,0),en(A,q,X,Math.PI),_()}catch{}})();const un=new $t;He.add(un);const Tn=new Set,Ue=(A,z,q,ie=[0,0,0],Q=[0,0,0],xe=[1,1,1],ve=!0,Le=!1)=>{Tn.add(z);const nt=new xt(z,q);return nt.position.set(...ie),nt.rotation.set(...Q),nt.scale.set(...xe),nt.castShadow=ve,nt.receiveShadow=Le,nt.frustumCulled=!0,nt.userData.detailCull=q===an||q===es||q===fi,A.add(nt),nt},At=(A,z,q,ie,Q,xe=18)=>{const ve=new P(...z),Le=new P(...q),nt=new kt(ie,ie,ve.distanceTo(Le),xe,1,!1),ke=Ue(A,nt,Q);return ke.position.copy(ve.clone().add(Le).multiplyScalar(.5)),ke.quaternion.setFromUnitVectors(new P(0,1,0),Le.clone().sub(ve).normalize()),ke},xn=(A=1)=>{const z=new $t;return Ue(z,new fa(.17*A,0),an,[0,.16*A,0],[0,.22,0],[.78,1.25,.78]),Ue(z,new on(.18*A,14,18),an,[0,-.09*A,0],[0,0,0],[.82,1.42,.82]),Ue(z,new or(.15*A,.22*A,7,1),an,[0,-.33*A,0],[Math.PI,.15,0]),Ue(z,new mn(.055*A,.008*A,8,16),Mt,[0,.35*A,0],[Math.PI/2,0,0]),z},St=(A=1)=>{const z=new $t;return Ue(z,new kt(.055*A,.065*A,.52*A,6,1,!1),an,[0,0,0],[0,Math.PI/6,0]),Ue(z,new or(.064*A,.12*A,6),an,[0,-.32*A,0],[Math.PI,Math.PI/6,0]),Ue(z,new or(.054*A,.11*A,6),an,[0,.32*A,0],[0,Math.PI/6,0]),z},Nn=(A,z=3.28,q=1.66)=>{const ie=new nr([new P(0,z,0),new P(.01,bc.lerp(z,q,.32),-.008),new P(-.012,bc.lerp(z,q,.68),.006),new P(0,q,0)]);Ue(A,new Es(ie,64,.026,18,!1),Qi),Ue(A,new kt(.05,.06,.1,24),Mt,[0,z+.015,0]),Ue(A,new kt(.044,.052,.09,24),Mt,[0,q-.015,0])},pi=()=>{const A=new $t,z=new on(.043,18,12);Tn.add(z),Ue(A,new kt(.74,.84,.12,96),Gt,[0,3.62,0]),Ue(A,new mn(.79,.035,14,128),Mt,[0,3.55,0],[Math.PI/2,0,0]),Ue(A,new kt(.34,.45,.2,96),Mt,[0,3.42,0]),Ue(A,new mn(.39,.035,14,96),Gt,[0,3.31,0],[Math.PI/2,0,0]),Nn(A),Ue(A,new kt(.09,.09,1.75,48),Mt,[0,1.55,0]),Ue(A,new on(.18,48,24),Mt,[0,2.34,0],[0,0,0],[1,.8,1]),Ue(A,new on(.25,64,28),Mt,[0,1.22,0],[0,0,0],[1,.72,1]),Ue(A,new on(.16,48,24),Gt,[0,.38,0],[0,0,0],[1,1.4,1]),[[.52,.045,18,128,1.83,Mt],[.34,.035,14,128,1.98,Gt],[.74,.05,18,160,.83,Mt],[.92,.036,18,160,.66,Gt]].forEach(([Q,xe,ve,Le,nt,ke])=>{Ue(A,new mn(Q,xe,ve,Le),ke,[0,nt,0],[Math.PI/2,0,0])}),Ue(A,new on(.72,96,24,0,Math.PI*2,0,Math.PI*.42),es,[0,.98,0],[Math.PI,0,0],[1,.28,1]),Ue(A,new mn(.71,.028,14,128),Mt,[0,.78,0],[Math.PI/2,0,0]),Ue(A,new mn(.42,.018,10,96),Gt,[0,.95,0],[Math.PI/2,0,0]);for(let Q=0;Q<72;Q++){const xe=Q/72*Math.PI*2;Ue(A,z,an,[Math.cos(xe)*.94,.61+Math.sin(Q*.5)*.012,Math.sin(xe)*.94],[0,0,0],[1,1,1])}const q=(Q,xe,ve,Le)=>{const nt=Q/xe*Math.PI*2,ke=new $t;ke.rotation.y=-nt,A.add(ke);const dn=new nr([new P(.46,Le-.03,0),new P(.83,Le-.24,0),new P(1.25,Le-.28,0),new P(1.7,Le-.05,0),new P(ve,Le+.24,0)]);Ue(ke,new Es(dn,72,.035,16,!1),Mt),Ue(ke,new mn(.25,.018,10,52,Math.PI*1.42),Gt,[1.05,Le-.15,0],[0,Math.PI/2,.2],[1,.7,1]),Ue(ke,new mn(.17,.014,10,44,Math.PI*1.55),Mt,[1.48,Le-.05,0],[0,-Math.PI/2,-.45],[1,.7,1]),Ue(ke,new kt(.19,.29,.18,64),Mt,[ve,Le+.21,0]),Ue(ke,new mn(.29,.035,14,90),Mt,[ve,Le+.32,0],[Math.PI/2,0,0]),Ue(ke,new mn(.19,.022,10,70),Gt,[ve,Le+.39,0],[Math.PI/2,0,0]),Ue(ke,new kt(.13,.13,.42,48),Ai,[ve,Le+.62,0]),Ue(ke,new kt(.105,.13,.09,48),Mt,[ve,Le+.39,0]),Ue(ke,new on(.135,36,24),Ri,[ve,Le+.89,0],[0,0,0],[.82,1.28,.82]),Ue(ke,new on(.09,24,16),fi,[ve,Le+.91,0],[0,0,0],[.9,1.65,.9],!1);const wn=new nr([new P(ve-.035,Le+.83,0),new P(ve-.015,Le+.875,.022),new P(ve+.018,Le+.875,-.022),new P(ve+.038,Le+.83,0)]);Ue(ke,new Es(wn,24,.006,6,!1),Ci,[0,0,0],[0,0,0],[1,1,1],!1);for(let Ht=-1;Ht<=1;Ht++){const On=xn(.62-Math.abs(Ht)*.08);On.position.set(ve+Ht*.13,Le-.08-Math.abs(Ht)*.035,.03*Math.abs(Ht)),On.rotation.set(0,Ht*.28,Ht*.06),ke.add(On),At(ke,[ve+Ht*.13,Le+.22,0],[ve+Ht*.13,Le+.09-Math.abs(Ht)*.035,.03*Math.abs(Ht)],.004,Mt,8)}};for(let Q=0;Q<10;Q++)q(Q,10,Q%2===0?2.14:1.88,Q%2===0?1.13:1.02);for(let Q=0;Q<5;Q++){const xe=Q/5*Math.PI*2+Math.PI/5,ve=new $t;ve.rotation.y=-xe,A.add(ve);const Le=1.96,nt=new nr([new P(.28,Le,0),new P(.62,Le+.1,0),new P(.92,Le+.22,0),new P(1.18,Le+.44,0)]);Ue(ve,new Es(nt,52,.025,14,!1),Mt),Ue(ve,new kt(.1,.16,.12,48),Mt,[1.18,Le+.47,0]),Ue(ve,new on(.08,24,18),fi,[1.18,Le+.66,0],[0,0,0],[.9,1.55,.9],!1),Ue(ve,new on(.105,24,18),Ri,[1.18,Le+.64,0],[0,0,0],[.75,1.22,.75])}for(let Q=0;Q<40;Q++){const xe=Q/40*Math.PI*2,ve=Q%2===0?.83:.68,Le=Q%3===0?.58:.43,nt=new $t;nt.position.set(Math.cos(xe)*ve,.73,Math.sin(xe)*ve),nt.rotation.y=-xe,A.add(nt);const ke=Q%3===0?4:3;for(let wn=0;wn<ke;wn++){const Ht=-wn*(Le/ke);Ue(nt,z,an,[0,Ht,0],[0,0,0],[.72,.72,.72]),wn>0&&At(nt,[0,Ht+Le/ke*.78,0],[0,Ht+.04,0],.0035,Mt,6)}const dn=Q%4===0?xn(.72):St(.74);dn.position.set(0,-Le-.08,0),dn.rotation.set(.04*Math.sin(Q),xe*.37,.08*Math.cos(Q)),nt.add(dn)}At(A,[0,.42,0],[0,-.27,0],.007,Mt,8);const ie=xn(1.25);ie.position.set(0,-.38,0),A.add(ie);for(let Q=0;Q<8;Q++){const xe=Q/8*Math.PI*2,ve=St(.78);ve.position.set(Math.cos(xe)*.33,.12+Math.sin(Q*.7)*.03,Math.sin(xe)*.33),ve.rotation.set(.25,-xe,.05*Math.sin(Q)),A.add(ve),At(A,[Math.cos(xe)*.27,.55,Math.sin(xe)*.27],[Math.cos(xe)*.33,.28,Math.sin(xe)*.33],.004,Mt,8)}return A},vn=Math.max(1,Math.min(d?8:9,Math.ceil(E/6))),yr=G/vn,Er=d?.46:.5,Gs=Array.from({length:vn},(A,z)=>({index:z,rotationY:z%2===0?0:Math.PI/10,position:new P(0,g.ceilingY-3.62*Er,X-yr*(z+.5))})),mi=pi();mi.name=yx,mi.visible=!1,mi.scale.setScalar(Er),un.add(mi),Gs.forEach(A=>{const z=new lp(Rt.chandelier.color,Rt.chandelier.intensity*(d?.78:1),Rt.chandelier.distance,Rt.chandelier.decay);z.position.set(A.position.x,A.position.y+Rt.chandelier.yOffset*Er,A.position.z),z.castShadow=!1,un.add(z)});const Hs=new Ot,Pi=new Et().compose(new P(0,0,0),new hi,Ch),Bl=new kt(.42,.52,.1,24),zl=new kt(.035,.035,1.25,12),Gl=new mn(.72,.028,8,42),Hl=new on(.095,14,10),Vl=new on(.15,12,8),kl=new fa(.115,0),Wl=new kt(.018,.018,1.25,8);[Bl,zl,Gl,Hl,Vl,kl,Wl].forEach(A=>Tn.add(A));const Li=(A,z,q)=>{const ie=new ps(A,z,q);return ie.frustumCulled=!0,ie.castShadow=!1,ie.receiveShadow=!1,un.add(ie),ie},tn={canopy:Li(Bl,Gt,vn),stem:Li(zl,Mt,vn),ring:Li(Gl,Mt,vn),bulbs:Li(Hl,Ri,vn*6),glow:Li(Vl,fi,vn*6),crystals:Li(kl,an,vn*8),arms:Li(Wl,Mt,vn*6)},Uu=Object.values(tn);let Xl="";const Ii=(A,z,q,ie,Q)=>{Hs.position.copy(q),Hs.rotation.copy(ie),Hs.scale.copy(Q),Hs.updateMatrix(),A.setMatrixAt(z,Hs.matrix)},Nu=(A,z)=>{tn.canopy.setMatrixAt(A,Pi),tn.stem.setMatrixAt(A,Pi),tn.ring.setMatrixAt(A,Pi);for(let q=0;q<6;q++){const ie=A*6+q;tn.arms.setMatrixAt(ie,Pi),tn.bulbs.setMatrixAt(ie,Pi),tn.glow.setMatrixAt(ie,Pi)}for(let q=0;q<8;q++)tn.crystals.setMatrixAt(A*8+q,Pi)},Yl=A=>{let z=0,q=Number.POSITIVE_INFINITY;Gs.forEach(ke=>{const dn=Math.abs(ke.position.z-A.position.z);dn<q&&(q=dn,z=ke.index)});const ie=yr*.58,Q=q<=ie,xe=q<ie*.72,ve=Gs[z],Le=Gs.map(ke=>Math.abs(ke.position.z-A.position.z)<=yr*(d?2:2.8)?"1":"0").join(""),nt=`${z}:${Q?"1":"0"}:${xe?"1":"0"}:${Le}`;nt!==Xl&&(Xl=nt,mi.visible=Q,Q&&(mi.position.copy(ve.position),mi.rotation.y=ve.rotationY,mi.traverse(ke=>{ke instanceof xt&&(ke.visible=!ke.userData.detailCull||xe)})),Gs.forEach(ke=>{const dn=Math.abs(ke.position.z-A.position.z),wn=!Q||ke.index!==z,Ht=dn<=yr*(d?2:2.8);if(Nu(ke.index),!wn)return;const On=ke.position.y,Ni=ke.rotationY,vt=Er,Mn=ke.position;Ii(tn.canopy,ke.index,new P(Mn.x,On+3.6*vt,Mn.z),new Wt(0,Ni,0),new P(vt,vt,vt)),Ii(tn.stem,ke.index,new P(Mn.x,On+2.28*vt,Mn.z),new Wt(0,Ni,0),new P(vt,vt,vt)),Ii(tn.ring,ke.index,new P(Mn.x,On+.86*vt,Mn.z),new Wt(Math.PI/2,Ni,0),new P(vt,vt,vt));for(let An=0;An<6;An++){const jn=Ni+An/6*Math.PI*2,Xs=1.75*vt,fc=.95*vt,Ra=ke.index*6+An,pc=new P(Mn.x+Math.cos(jn)*Xs,On+1.88*vt,Mn.z+Math.sin(jn)*Xs);Ii(tn.arms,Ra,new P(Mn.x+Math.cos(jn)*fc,On+1.32*vt,Mn.z+Math.sin(jn)*fc),new Wt(Math.PI/2,0,Math.PI/2-jn),new P(vt,vt,vt)),Ii(tn.bulbs,Ra,pc,new Wt(0,Ni,0),new P(vt,vt*1.3,vt)),Ii(tn.glow,Ra,pc,new Wt(0,Ni,0),new P(vt,vt*1.45,vt))}if(Ht)for(let An=0;An<8;An++){const jn=Ni+An/8*Math.PI*2,Xs=(An%2===0?.72:.52)*vt;Ii(tn.crystals,ke.index*8+An,new P(Mn.x+Math.cos(jn)*Xs,On+(.26-An%3*.08)*vt,Mn.z+Math.sin(jn)*Xs),new Wt(.25,-jn,.1),new P(vt,vt*1.35,vt))}}),Uu.forEach(ke=>{ke.instanceMatrix.needsUpdate=!0,ke.computeBoundingSphere()}))},Sa=A=>A%2===0?"left":"right",ya=A=>-A*g.groupDepth,Di=A=>ki(A,0,L)*g.groupSize,ts=A=>{const z=Di(A);return Math.min(i.length-1,z+g.groupSize-1)},br=A=>{const z=ki(Math.floor(A/g.groupSize),0,L),q=Di(z),ie=ts(z),Q=Math.max(1,ie-q+1),xe=A-q,ve=Sa(z),Le=ve==="left"?1:-1,nt=(xe-(Q-1)/2)*g.spacing;return{groupIndex:z,side:ve,x:ve==="left"?-ne:ne,y:g.frameY,z:ya(z)+nt,rotationY:ve==="left"?Math.PI/2:-Math.PI/2,normalX:Le}},Vs=(A,z=0,q=0)=>{const ie=Sa(A),Q=ya(A),xe=.16;return{position:new P(0,g.cameraY,Q),target:new P(ie==="left"?-ne+xe:ne-xe,g.frameY-.02+q,Q+z)}},ql=A=>{se.position.copy(A.position),se.lookAt(A.target)},Ea=(A,z,q,ie)=>{const Q=new P(z,q,ie);return Q.applyAxisAngle(new P(0,1,0),A.rotationY),Q.set(A.x+Q.x,A.y+Q.y,A.z+Q.z)},Fu=A=>{const z=Sa(A),q=z==="left"?1:-1,ie=z==="left"?-ne:ne,Q=ya(A),xe=new ll(Rt.ceilingSpot.color,0,Rt.ceilingSpot.distance,Rt.ceilingSpot.angle,Rt.ceilingSpot.penumbra,Rt.ceilingSpot.decay);return xe.name=Ex,xe.userData.baseIntensity=Rt.ceilingSpot.intensity,xe.position.set(ie+q*Math.min(4.2,ne*.46),g.ceilingY-.24,Q),xe.target.position.set(ie+q*.42,g.frameY-.1,Q),xe.castShadow=!1,xe.visible=!1,He.add(xe,xe.target),xe.target.updateMatrixWorld(),xe},Zl=A=>{He.remove(A,A.target),A.shadow.dispose()},Jl=A=>{const z=new Set(A.map(q=>ki(q,0,L)));z.forEach(q=>{D.has(q)||D.set(q,Fu(q))}),D.forEach((q,ie)=>{z.has(ie)||(Zl(q),D.delete(ie))})},gi=Math.min(.16,g.frameOuterWidth*.07),Tr=.055,Fn=new Ot,Kl=new Et().compose(new P(0,0,0),new hi,Ch),ba=di.map(A=>{const z=new ps(Se,A,i.length);return z.frustumCulled=!0,z.castShadow=!1,z.receiveShadow=!0,He.add(z),z}),Ui={top:new ps(K,wi,i.length),bottom:new ps(K,wi,i.length),left:new ps(K,wi,i.length),right:new ps(K,wi,i.length)};Object.values(Ui).forEach(A=>{A.frustumCulled=!0,A.castShadow=!1,A.receiveShadow=!0,He.add(A)});const wr=(A,z,q,ie,Q,xe,ve,Le,nt)=>{const ke=Ea(q,ie,Q,xe);Fn.position.copy(ke),Fn.quaternion.setFromEuler(new Wt(0,q.rotationY,0)),Fn.scale.set(ve,Le,nt),Fn.updateMatrix(),A.setMatrixAt(z,Fn.matrix)},Ou=(A,z,q)=>{const ie=fl(g),Q=Ea(q,0,0,ie.cardZ-.012);Fn.position.copy(Q),Fn.quaternion.setFromEuler(new Wt(0,q.rotationY,0)),Fn.scale.set(ie.cardWidth,ie.cardHeight,1),Fn.updateMatrix(),A.setMatrixAt(z,Fn.matrix)},$l=(A,z)=>{const q=g.frameOuterWidth/2,ie=g.frameOuterHeight/2;for(let Q=0;Q<i.length;Q++){const xe=Q>=A&&Q<=z,ve=br(Q),Le=Q%ba.length;if(ba.forEach((nt,ke)=>{if(xe||ke!==Le){nt.setMatrixAt(Q,Kl);return}Ou(nt,Q,ve)}),xe){Object.values(Ui).forEach(nt=>{nt.setMatrixAt(Q,Kl)});continue}wr(Ui.top,Q,ve,0,ie-gi/2,bs,g.frameOuterWidth,gi,Tr),wr(Ui.bottom,Q,ve,0,-ie+gi/2,bs,g.frameOuterWidth,gi,Tr),wr(Ui.left,Q,ve,-q+gi/2,0,bs,gi,g.frameOuterHeight,Tr),wr(Ui.right,Q,ve,q-gi/2,0,bs,gi,g.frameOuterHeight,Tr)}ba.forEach(Q=>{Q.instanceMatrix.needsUpdate=!0,Q.computeBoundingSphere()}),Object.values(Ui).forEach(Q=>{Q.instanceMatrix.needsUpdate=!0,Q.computeBoundingSphere()})},jl=A=>{const z=document.createElement("article");return z.className=m.embedPlane,z.setAttribute("aria-label",`Art in Life Instagram post ${A+1}`),z.style.width=`${aa}px`,z.style.height=`${oa}px`,z.style.opacity="0",z},Bu=A=>`
      <div class="${m.embedCrop}">
        <div class="${m.embedContent}">
          ${Bh(A)}
        </div>
      </div>
    `,Ta=(A,z=!1)=>{if(A.embedMounted)return;if(A.embedRequested){if(!z||!A.schedule)return;Dh(A.schedule),A.schedule=void 0,A.embedRequested=!1}A.embedRequested=!0;const q=()=>{if(A.schedule=void 0,!w.has(A.index)){A.embedRequested=!1;return}Lu().then(async()=>{if(!w.has(A.index)){A.embedRequested=!1;return}const ie=jl(A.index);ie.innerHTML=Bu(i[A.index]),We.appendChild(ie),await Ux(ie);const Q=await Nx(ie);if(!w.has(A.index)){ie.remove(),A.embedRequested=!1;return}if(!Q){ie.remove(),A.embedRequested=!1,A.element.innerHTML="",A.element.style.opacity="0";return}A.element.replaceChildren(...ie.childNodes),A.element.style.opacity="1",ie.remove(),A.iframeObserver?.disconnect(),A.iframeObserver=Iu(A.element,A.index),A.embedMounted=!0}).catch(()=>{A.embedRequested=!1,A.element.innerHTML="",A.element.style.opacity="0"})};z?q():A.schedule=Fx(q)},zu=A=>{Dh(A.schedule),A.schedule=void 0,A.iframeObserver?.disconnect(),A.iframeObserver=void 0,A.embedMounted=!1,A.embedRequested=!1,A.element.style.opacity="0",A.element.innerHTML=""},Ql=A=>{const z=fl(g),q=Math.min(z.cardWidth/aa,z.cardHeight/oa),ie=br(A.index),Q=Ea(ie,0,0,z.cardZ);A.cssObject.position.copy(Q),A.cssObject.rotation.set(0,ie.rotationY,0),A.cssObject.scale.set(q,q,q)},ec=()=>{w.forEach(Ql),_()},tc=A=>{const z=br(A),q=Yx({index:A,x:0,layout:g,materials:{frame:[Ct,_t,_n],backing:hn,placeholderArt:di[A%di.length],plaque:Fs,plaqueText:Mr},unitBox:K,unitPlane:Se});q.position.set(z.x,z.y,z.z),q.rotation.y=z.rotationY,He.add(q);const ie=jl(A),Q=new cx(ie);Je.add(Q);const xe={index:A,group:q,cssObject:Q,element:ie,embedMounted:!1,embedRequested:!1,lastTouched:performance.now()};return Ql(xe),xe},Gu=A=>{A.group.traverse(z=>{z instanceof xt&&z.geometry!==K&&z.geometry!==Se&&z.geometry.dispose()}),A.element.remove()},wa=A=>{zu(A),He.remove(A.group),Je.remove(A.cssObject),Gu(A)},Aa=A=>{const z=Math.max(0,Di(A-g.frameWindowGroups)),q=Math.min(i.length-1,ts(A+g.frameWindowGroups)),ie=Di(A),Q=ts(A);$l(z,q),Jl([A]),w.forEach((xe,ve)=>{(ve<z||ve>q)&&(wa(xe),w.delete(ve))});for(let xe=z;xe<=q;xe++)w.has(xe)||w.set(xe,tc(xe));w.forEach((xe,ve)=>{ve>=ie&&ve<=Q&&Ta(xe,!0)}),w.forEach((xe,ve)=>{(ve<ie||ve>Q)&&Ta(xe,!1)})},Hu=(A,z)=>{const q=Math.min(Di(A),Di(z)),ie=Math.max(ts(A),ts(z)),Q=Di(z),xe=ts(z);$l(q,ie),Jl([A,z]),w.forEach((ve,Le)=>{(Le<q||Le>ie)&&(wa(ve),w.delete(Le))});for(let ve=q;ve<=ie;ve++)w.has(ve)||w.set(ve,tc(ve));w.forEach((ve,Le)=>{Le>=Q&&Le<=xe&&Ta(ve,!0)})},$n=()=>{const{width:A,height:z}=Xe();se.aspect=A/z,se.fov=g.cameraFov,se.updateProjectionMatrix();const q=Math.min(window.devicePixelRatio,d?1.5:2);J.setPixelRatio(q),J.setSize(A,z,!0),fe&&(fe.setPixelRatio(q),fe.setSize(A,z)),Ye?.resolution.set(A,z),Ve.setSize(A,z),J.domElement.style.width=`${A}px`,J.domElement.style.height=`${z}px`,Ve.domElement.style.width=`${A}px`,Ve.domElement.style.height=`${z}px`,_()},nc=n.current,ic=s.current,sc=A=>{if(C)return;const z=ki(A,0,L);if(z===R)return;const q=R,ie=z>R?1:-1;C={fromGroupIndex:q,toGroupIndex:z,startedAt:performance.now(),duration:g.transitionDuration,settled:!1,direction:ie},R=z,u(z),Hu(q,z),_()},rc=()=>sc(R-1),ac=()=>sc(R+1);let ks=0,Ws=0;const oc=A=>{d||(ks=(A.clientX/window.innerWidth-.5)*.18,Ws=(A.clientY/window.innerHeight-.5)*.12,_())},Vu=performance.now(),ku=()=>{const A=(performance.now()-Vu)/1e3,z=Px(A);y.frontBlue.forEach((q,ie)=>{const Q=z*(.985+.02*Math.sin(A*7.5+ie*.7));q.emissiveIntensity=2.25*Q}),y.sideBlue.forEach((q,ie)=>{const Q=z*(.985+.02*Math.sin(A*7.5+ie*.7));q.emissiveIntensity=.5*Q}),y.frontPink.forEach((q,ie)=>{const Q=z*(1+.025*Math.sin(A*9+ie*.55));q.emissiveIntensity=2.7*Q}),y.sidePink.forEach((q,ie)=>{const Q=z*(1+.025*Math.sin(A*9+ie*.55));q.emissiveIntensity=.64*Q}),Sr.forEach(q=>{q.opacity=.34*z}),Ye&&(Ye.strength=.11+z*.04,Ye.radius=.06+z*.02,Ye.threshold=.8)},lc=()=>{fe?fe.render():J.render(He,se),Ve.render(Je,se)},Wu=(A,z)=>{A.group.traverse(q=>{if(!(q instanceof ll)||q.name!==Pu)return;const ie=typeof q.userData.baseIntensity=="number"?q.userData.baseIntensity:Rt.paintingSpot.intensity;q.intensity=ie*z,q.visible=z>.001})},cc=(A,z)=>{let q=A===R?1:0;if(C&&z!==null){const ie=z-C.startedAt,Q=ie-tr-C.duration;A===C.fromGroupIndex&&ie<tr?q=1-Ti(0,tr,ie):A===C.toGroupIndex&&Q>0?q=Ti(0,Ph,Q):q=0}return q},Xu=(A,z)=>{const q=typeof A.userData.baseIntensity=="number"?A.userData.baseIntensity:Rt.ceilingSpot.intensity;A.intensity=q*z,A.visible=z>.001},hc=A=>{w.forEach(z=>{const q=br(z.index).groupIndex;Wu(z,cc(q,A))})},uc=A=>{D.forEach((z,q)=>{Xu(z,cc(q,A))})},Yu=(A,z)=>{const q=z-A.startedAt,ie=ki((q-tr)/A.duration,0,1),Q=po(ie),xe=Vs(A.fromGroupIndex,ks,-Ws),ve=Vs(A.toGroupIndex,ks,-Ws),Le=xe.position.clone().lerp(ve.position,Q),nt=xe.target.clone().sub(xe.position).normalize(),ke=ve.target.clone().sub(ve.position).normalize(),dn=new P(0,(g.frameY-g.cameraY)/g.transitionLookDistance,A.direction>0?-1:1).normalize(),wn=ie<.5?nt.lerp(dn,po(ie*2)):dn.lerp(ke,po((ie-.5)*2));return wn.normalize(),{cameraProgress:ie,elapsed:q,pose:{position:Le,target:Le.clone().add(wn.multiplyScalar(g.transitionLookDistance))}}},qu=A=>{M=0;let z,q=!1;if(C){const ie=Yu(C,A);z=ie.pose,q=ie.elapsed<tr+C.duration+Ph,!C.settled&&ie.cameraProgress>=1&&(C.settled=!0,b=R,Aa(R)),q||(C=null,z=Vs(R,ks,-Ws))}else z=Vs(R,ks,-Ws);ql(z),Yl(z),!C&&R!==b&&(b=R,Aa(R)),hc(C?A:null),uc(C?A:null),ku(),lc(),_()};_=()=>{!S||M||(M=window.requestAnimationFrame(qu))},R=0,u(0);const dc=Vs(R);return ql(dc),$n(),Aa(R),b=R,Yl(dc),hc(null),uc(null),lc(),a(!0),window.addEventListener("resize",$n,{passive:!0}),window.addEventListener("orientationchange",$n,{passive:!0}),window.visualViewport?.addEventListener("resize",$n,{passive:!0}),window.visualViewport?.addEventListener("scroll",$n,{passive:!0}),window.addEventListener("pointermove",oc,{passive:!0}),window.addEventListener("art-in-life-card-scale-change",ec),nc?.addEventListener("click",rc),ic?.addEventListener("click",ac),()=>{S=!1,window.cancelAnimationFrame(M),window.removeEventListener("resize",$n),window.removeEventListener("orientationchange",$n),window.visualViewport?.removeEventListener("resize",$n),window.visualViewport?.removeEventListener("scroll",$n),window.removeEventListener("pointermove",oc),window.removeEventListener("art-in-life-card-scale-change",ec),nc?.removeEventListener("click",rc),ic?.removeEventListener("click",ac),w.forEach(wa),w.clear(),D.forEach(Zl),D.clear(),zs.forEach(A=>He.remove(A)),zs.length=0,Tn.forEach(A=>A.dispose()),Os.forEach(A=>A.dispose()),K.dispose(),Se.dispose(),Kn.forEach(A=>A.dispose()),qe.forEach(A=>A.dispose()),Ma.forEach(Oh),Bs.forEach(Oh),Ye?.dispose(),fe?.dispose(),J.dispose(),ce.remove(),Fe.remove(),We.remove()}},[E,d,g,p,m,i]),o?Ut.jsx(Zx,{urls:i}):Ut.jsxs("div",{ref:e,className:mt.galleryStage,children:[Ut.jsxs("div",{ref:t,className:mt.sceneViewport,children:[Ut.jsx("div",{className:mt.sceneOverlay,"aria-hidden":"true"}),Ut.jsxs("div",{className:`${mt.loadingCurtain} ${r?mt.loadingCurtainHidden:""}`,role:"status",children:[Ut.jsx("span",{className:mt.loadingMark,"aria-hidden":"true"}),Ut.jsx("span",{children:"Preparing gallery"})]})]}),Ut.jsxs("div",{className:mt.galleryControls,"aria-label":"Gallery navigation",children:[Ut.jsx("button",{ref:n,type:"button",className:mt.galleryControlButton,"aria-label":"Previous paintings",disabled:c<=0,children:Ut.jsx("span",{className:mt.galleryControlIcon,"aria-hidden":"true",children:"‹"})}),Ut.jsx("button",{ref:s,type:"button",className:mt.galleryControlButton,"aria-label":"Next paintings",disabled:c>=E-1,children:Ut.jsx("span",{className:mt.galleryControlIcon,"aria-hidden":"true",children:"›"})})]}),Ut.jsx("ul",{className:mt.srOnly,children:i.map((f,v)=>Ut.jsx("li",{children:Ut.jsxs("a",{href:f,children:["Instagram post ",v+1]})},`${f}-sr-${v}`))})]})},nv=Object.freeze(Object.defineProperty({__proto__:null,default:Jx},Symbol.toStringTag,{value:"Module"}));export{go as A,Qt as B,lt as C,bt as F,li as H,Gh as L,Al as M,ai as N,Su as O,rl as P,jf as R,qn as S,Qx as T,Jf as U,Me as V,Wn as W,P as a,ut as b,yt as c,Hh as d,Vh as e,ml as f,Wh as g,Xh as h,kh as i,xt as j,_a as k,jx as l,ev as m,Yi as n,sa as o,Ft as p,st as q,tv as r,nv as s};
