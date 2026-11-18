var ju=0,zc=1,ef=2;var mu=1,tf=2,Ni=3,es=0,fn=1,Gn=2;var Ei=0,js=1,Nn=2,Oc=3,Fc=4,nf=5,ps=100,sf=101,rf=102,Bc=103,Hc=104,of=200,af=201,lf=202,cf=203,Sl=204,El=205,hf=206,uf=207,ff=208,df=209,pf=210,mf=211,gf=212,xf=213,_f=214,vf=0,yf=1,Mf=2,Do=3,Sf=4,Ef=5,bf=6,wf=7,gu=0,Tf=1,Af=2,bi=0,fc=1,dc=2,pc=3,mc=4,Rf=5,gc=6;var xu=300,nr=301,ir=302,bl=303,wl=304,da=306,Tl=1e3,xi=1001,Al=1002,Vn=1003,kc=1004;var Ba=1005;var Xn=1006,Cf=1007;var Ir=1008;var ji=1009,Pf=1010,If=1011,xc=1012,_u=1013,Ki=1014,Qi=1015,vi=1016,vu=1017,yu=1018,xs=1020,Lf=1021,_i=1023,Uf=1024,Df=1025,_s=1026,sr=1027,Nf=1028,Mu=1029,zf=1030,Su=1031,Eu=1033,Ha=33776,ka=33777,Va=33778,Ga=33779,Vc=35840,Gc=35841,Wc=35842,Xc=35843,bu=36196,qc=37492,Yc=37496,Zc=37808,Jc=37809,$c=37810,Kc=37811,Qc=37812,jc=37813,eh=37814,th=37815,nh=37816,ih=37817,sh=37818,rh=37819,oh=37820,ah=37821,Wa=36492,lh=36494,ch=36495,Of=36283,hh=36284,uh=36285,fh=36286;var No=2300,zo=2301,Xa=2302,dh=2400,ph=2401,mh=2402;var wu=3e3,vs=3001,Ff=3200,Bf=3201,Tu=0,Hf=1,ii="",It="srgb",Hi="srgb-linear",_c="display-p3",pa="display-p3-linear",Oo="linear",Ht="srgb",Fo="rec709",Bo="p3";var Cs=7680;var gh=519,kf=512,Vf=513,Gf=514,Au=515,Wf=516,Xf=517,qf=518,Yf=519,Rl=35044;var xh="300 es",Cl=1035,Fi=2e3,Ho=2001,ts=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let i=this._listeners[e];if(i!==void 0){let r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let n=this._listeners[e.type];if(n!==void 0){e.target=this;let i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,e);e.target=null}}},In=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var qa=Math.PI/180,Pl=180/Math.PI;function Bi(){let s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(In[s&255]+In[s>>8&255]+In[s>>16&255]+In[s>>24&255]+"-"+In[e&255]+In[e>>8&255]+"-"+In[e>>16&15|64]+In[e>>24&255]+"-"+In[t&63|128]+In[t>>8&255]+"-"+In[t>>16&255]+In[t>>24&255]+In[n&255]+In[n>>8&255]+In[n>>16&255]+In[n>>24&255]).toLowerCase()}function An(s,e,t){return Math.max(e,Math.min(t,s))}function Zf(s,e){return(s%e+e)%e}function Ya(s,e,t){return(1-t)*s+t*e}function _h(s){return(s&s-1)===0&&s!==0}function Il(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Oi(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function kt(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}var Me=class s{constructor(e=0,t=0){s.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(An(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*i+e.x,this.y=r*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},St=class s{constructor(e,t,n,i,r,o,a,l,c){s.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,l,c)}set(e,t,n,i,r,o,a,l,c){let h=this.elements;return h[0]=e,h[1]=i,h[2]=a,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],f=n[2],p=n[5],x=n[8],y=i[0],m=i[3],d=i[6],C=i[1],_=i[4],T=i[7],B=i[2],U=i[5],A=i[8];return r[0]=o*y+a*C+l*B,r[3]=o*m+a*_+l*U,r[6]=o*d+a*T+l*A,r[1]=c*y+h*C+u*B,r[4]=c*m+h*_+u*U,r[7]=c*d+h*T+u*A,r[2]=f*y+p*C+x*B,r[5]=f*m+p*_+x*U,r[8]=f*d+p*T+x*A,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-n*r*h+n*a*l+i*r*c-i*o*l}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=h*o-a*c,f=a*l-h*r,p=c*r-o*l,x=t*u+n*f+i*p;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/x;return e[0]=u*y,e[1]=(i*c-h*n)*y,e[2]=(a*n-i*o)*y,e[3]=f*y,e[4]=(h*t-i*l)*y,e[5]=(i*r-a*t)*y,e[6]=p*y,e[7]=(n*l-c*t)*y,e[8]=(o*t-n*r)*y,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-i*c,i*l,-i*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Za.makeScale(e,t)),this}rotate(e){return this.premultiply(Za.makeRotation(-e)),this}translate(e,t){return this.premultiply(Za.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Za=new St;function Ru(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function ko(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Jf(){let s=ko("canvas");return s.style.display="block",s}var vh={};function Tr(s){s in vh||(vh[s]=!0,console.warn(s))}var yh=new St().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Mh=new St().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),io={[Hi]:{transfer:Oo,primaries:Fo,toReference:s=>s,fromReference:s=>s},[It]:{transfer:Ht,primaries:Fo,toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[pa]:{transfer:Oo,primaries:Bo,toReference:s=>s.applyMatrix3(Mh),fromReference:s=>s.applyMatrix3(yh)},[_c]:{transfer:Ht,primaries:Bo,toReference:s=>s.convertSRGBToLinear().applyMatrix3(Mh),fromReference:s=>s.applyMatrix3(yh).convertLinearToSRGB()}},$f=new Set([Hi,pa]),Lt={enabled:!0,_workingColorSpace:Hi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!$f.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,e,t){if(this.enabled===!1||e===t||!e||!t)return s;let n=io[e].toReference,i=io[t].fromReference;return i(n(s))},fromWorkingColorSpace:function(s,e){return this.convert(s,this._workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this._workingColorSpace)},getPrimaries:function(s){return io[s].primaries},getTransfer:function(s){return s===ii?Oo:io[s].transfer}};function er(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Ja(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var Ps,Vo=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ps===void 0&&(Ps=ko("canvas")),Ps.width=e.width,Ps.height=e.height;let n=Ps.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Ps}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=ko("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=er(r[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(er(t[n]/255)*255):t[n]=er(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Kf=0,Go=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Kf++}),this.uuid=Bi(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push($a(i[o].image)):r.push($a(i[o]))}else r=$a(i);n.url=r}return t||(e.images[this.uuid]=n),n}};function $a(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Vo.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Qf=0,si=class s extends ts{constructor(e=s.DEFAULT_IMAGE,t=s.DEFAULT_MAPPING,n=xi,i=xi,r=Xn,o=Ir,a=_i,l=ji,c=s.DEFAULT_ANISOTROPY,h=ii){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Qf++}),this.uuid=Bi(),this.name="",this.source=new Go(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Me(0,0),this.repeat=new Me(1,1),this.center=new Me(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new St,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(Tr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===vs?It:ii),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==xu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Tl:e.x=e.x-Math.floor(e.x);break;case xi:e.x=e.x<0?0:1;break;case Al:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Tl:e.y=e.y-Math.floor(e.y);break;case xi:e.y=e.y<0?0:1;break;case Al:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Tr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===It?vs:wu}set encoding(e){Tr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===vs?It:ii}};si.DEFAULT_IMAGE=null;si.DEFAULT_MAPPING=xu;si.DEFAULT_ANISOTROPY=1;var Zt=class s{constructor(e=0,t=0,n=0,i=1){s.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r,l=e.elements,c=l[0],h=l[4],u=l[8],f=l[1],p=l[5],x=l[9],y=l[2],m=l[6],d=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-y)<.01&&Math.abs(x-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+y)<.1&&Math.abs(x+m)<.1&&Math.abs(c+p+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let _=(c+1)/2,T=(p+1)/2,B=(d+1)/2,U=(h+f)/4,A=(u+y)/4,$=(x+m)/4;return _>T&&_>B?_<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(_),i=U/n,r=A/n):T>B?T<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(T),n=U/i,r=$/i):B<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(B),n=A/r,i=$/r),this.set(n,i,r,t),this}let C=Math.sqrt((m-x)*(m-x)+(u-y)*(u-y)+(f-h)*(f-h));return Math.abs(C)<.001&&(C=1),this.x=(m-x)/C,this.y=(u-y)/C,this.z=(f-h)/C,this.w=Math.acos((c+p+d-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Ll=class extends ts{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Zt(0,0,e,t),this.scissorTest=!1,this.viewport=new Zt(0,0,e,t);let i={width:e,height:t,depth:1};n.encoding!==void 0&&(Tr("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===vs?It:ii),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Xn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new si(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new Go(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Wn=class extends Ll{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Wo=class extends si{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Vn,this.minFilter=Vn,this.wrapR=xi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ul=class extends si{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Vn,this.minFilter=Vn,this.wrapR=xi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var un=class{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,o,a){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3],f=r[o+0],p=r[o+1],x=r[o+2],y=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=f,e[t+1]=p,e[t+2]=x,e[t+3]=y;return}if(u!==y||l!==f||c!==p||h!==x){let m=1-a,d=l*f+c*p+h*x+u*y,C=d>=0?1:-1,_=1-d*d;if(_>Number.EPSILON){let B=Math.sqrt(_),U=Math.atan2(B,d*C);m=Math.sin(m*U)/B,a=Math.sin(a*U)/B}let T=a*C;if(l=l*m+f*T,c=c*m+p*T,h=h*m+x*T,u=u*m+y*T,m===1-a){let B=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=B,c*=B,h*=B,u*=B}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,r,o){let a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=r[o],f=r[o+1],p=r[o+2],x=r[o+3];return e[t]=a*x+h*u+l*p-c*f,e[t+1]=l*x+h*f+c*u-a*p,e[t+2]=c*x+h*p+a*f-l*u,e[t+3]=h*x-a*u-l*f-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,i=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),u=a(r/2),f=l(n/2),p=l(i/2),x=l(r/2);switch(o){case"XYZ":this._x=f*h*u+c*p*x,this._y=c*p*u-f*h*x,this._z=c*h*x+f*p*u,this._w=c*h*u-f*p*x;break;case"YXZ":this._x=f*h*u+c*p*x,this._y=c*p*u-f*h*x,this._z=c*h*x-f*p*u,this._w=c*h*u+f*p*x;break;case"ZXY":this._x=f*h*u-c*p*x,this._y=c*p*u+f*h*x,this._z=c*h*x+f*p*u,this._w=c*h*u-f*p*x;break;case"ZYX":this._x=f*h*u-c*p*x,this._y=c*p*u+f*h*x,this._z=c*h*x-f*p*u,this._w=c*h*u+f*p*x;break;case"YZX":this._x=f*h*u+c*p*x,this._y=c*p*u+f*h*x,this._z=c*h*x-f*p*u,this._w=c*h*u-f*p*x;break;case"XZY":this._x=f*h*u-c*p*x,this._y=c*p*u-f*h*x,this._z=c*h*x+f*p*u,this._w=c*h*u+f*p*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],i=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],u=t[10],f=n+a+u;if(f>0){let p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(h-l)*p,this._y=(r-c)*p,this._z=(o-i)*p}else if(n>a&&n>u){let p=2*Math.sqrt(1+n-a-u);this._w=(h-l)/p,this._x=.25*p,this._y=(i+o)/p,this._z=(r+c)/p}else if(a>u){let p=2*Math.sqrt(1+a-n-u);this._w=(r-c)/p,this._x=(i+o)/p,this._y=.25*p,this._z=(l+h)/p}else{let p=2*Math.sqrt(1+u-n-a);this._w=(o-i)/p,this._x=(r+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(An(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,i=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+o*a+i*c-r*l,this._y=i*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-i*a,this._w=o*h-n*a-i*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,i=this._y,r=this._z,o=this._w,a=o*e._w+n*e._x+i*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let p=1-t;return this._w=p*o+t*this._w,this._x=p*n+t*this._x,this._y=p*i+t*this._y,this._z=p*r+t*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-t)*h)/c,f=Math.sin(t*h)/c;return this._w=o*u+this._w*f,this._x=n*u+this._x*f,this._y=i*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(r),n*Math.cos(r),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},L=class s{constructor(e=0,t=0,n=0){s.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Sh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Sh.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,i=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*i-a*n),h=2*(a*t-r*i),u=2*(r*n-o*t);return this.x=t+l*c+o*u-a*h,this.y=n+l*h+a*c-r*u,this.z=i+l*u+r*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,i=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=i*l-r*a,this.y=r*o-n*l,this.z=n*a-i*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ka.copy(this).projectOnVector(e),this.sub(Ka)}reflect(e){return this.sub(Ka.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(An(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Ka=new L,Sh=new un,ki=class{constructor(e=new L(1/0,1/0,1/0),t=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(pi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(pi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=pi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,pi):pi.fromBufferAttribute(r,o),pi.applyMatrix4(e.matrixWorld),this.expandByPoint(pi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),so.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),so.copy(n.boundingBox)),so.applyMatrix4(e.matrixWorld),this.union(so)}let i=e.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,pi),pi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(gr),ro.subVectors(this.max,gr),Is.subVectors(e.a,gr),Ls.subVectors(e.b,gr),Us.subVectors(e.c,gr),qi.subVectors(Ls,Is),Yi.subVectors(Us,Ls),cs.subVectors(Is,Us);let t=[0,-qi.z,qi.y,0,-Yi.z,Yi.y,0,-cs.z,cs.y,qi.z,0,-qi.x,Yi.z,0,-Yi.x,cs.z,0,-cs.x,-qi.y,qi.x,0,-Yi.y,Yi.x,0,-cs.y,cs.x,0];return!Qa(t,Is,Ls,Us,ro)||(t=[1,0,0,0,1,0,0,0,1],!Qa(t,Is,Ls,Us,ro))?!1:(oo.crossVectors(qi,Yi),t=[oo.x,oo.y,oo.z],Qa(t,Is,Ls,Us,ro))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,pi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(pi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Pi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Pi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Pi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Pi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Pi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Pi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Pi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Pi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Pi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},Pi=[new L,new L,new L,new L,new L,new L,new L,new L],pi=new L,so=new ki,Is=new L,Ls=new L,Us=new L,qi=new L,Yi=new L,cs=new L,gr=new L,ro=new L,oo=new L,hs=new L;function Qa(s,e,t,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){hs.fromArray(s,r);let a=i.x*Math.abs(hs.x)+i.y*Math.abs(hs.y)+i.z*Math.abs(hs.z),l=e.dot(hs),c=t.dot(hs),h=n.dot(hs);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var jf=new ki,xr=new L,ja=new L,ys=class{constructor(e=new L,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):jf.setFromPoints(e).getCenter(n);let i=0;for(let r=0,o=e.length;r<o;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;xr.subVectors(e,this.center);let t=xr.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(xr,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ja.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(xr.copy(e.center).add(ja)),this.expandByPoint(xr.copy(e.center).sub(ja))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},Ii=new L,el=new L,ao=new L,Zi=new L,tl=new L,lo=new L,nl=new L,Xo=class{constructor(e=new L,t=new L(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ii)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Ii.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ii.copy(this.origin).addScaledVector(this.direction,t),Ii.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){el.copy(e).add(t).multiplyScalar(.5),ao.copy(t).sub(e).normalize(),Zi.copy(this.origin).sub(el);let r=e.distanceTo(t)*.5,o=-this.direction.dot(ao),a=Zi.dot(this.direction),l=-Zi.dot(ao),c=Zi.lengthSq(),h=Math.abs(1-o*o),u,f,p,x;if(h>0)if(u=o*l-a,f=o*a-l,x=r*h,u>=0)if(f>=-x)if(f<=x){let y=1/h;u*=y,f*=y,p=u*(u+o*f+2*a)+f*(o*u+f+2*l)+c}else f=r,u=Math.max(0,-(o*f+a)),p=-u*u+f*(f+2*l)+c;else f=-r,u=Math.max(0,-(o*f+a)),p=-u*u+f*(f+2*l)+c;else f<=-x?(u=Math.max(0,-(-o*r+a)),f=u>0?-r:Math.min(Math.max(-r,-l),r),p=-u*u+f*(f+2*l)+c):f<=x?(u=0,f=Math.min(Math.max(-r,-l),r),p=f*(f+2*l)+c):(u=Math.max(0,-(o*r+a)),f=u>0?r:Math.min(Math.max(-r,-l),r),p=-u*u+f*(f+2*l)+c);else f=o>0?-r:r,u=Math.max(0,-(o*f+a)),p=-u*u+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(el).addScaledVector(ao,f),p}intersectSphere(e,t){Ii.subVectors(e.center,this.origin);let n=Ii.dot(this.direction),i=Ii.dot(Ii)-n*n,r=e.radius*e.radius;if(i>r)return null;let o=Math.sqrt(r-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,i=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,i=(e.min.x-f.x)*c),h>=0?(r=(e.min.y-f.y)*h,o=(e.max.y-f.y)*h):(r=(e.max.y-f.y)*h,o=(e.min.y-f.y)*h),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),u>=0?(a=(e.min.z-f.z)*u,l=(e.max.z-f.z)*u):(a=(e.max.z-f.z)*u,l=(e.min.z-f.z)*u),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Ii)!==null}intersectTriangle(e,t,n,i,r){tl.subVectors(t,e),lo.subVectors(n,e),nl.crossVectors(tl,lo);let o=this.direction.dot(nl),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Zi.subVectors(this.origin,e);let l=a*this.direction.dot(lo.crossVectors(Zi,lo));if(l<0)return null;let c=a*this.direction.dot(tl.cross(Zi));if(c<0||l+c>o)return null;let h=-a*Zi.dot(nl);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},vt=class s{constructor(e,t,n,i,r,o,a,l,c,h,u,f,p,x,y,m){s.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,l,c,h,u,f,p,x,y,m)}set(e,t,n,i,r,o,a,l,c,h,u,f,p,x,y,m){let d=this.elements;return d[0]=e,d[4]=t,d[8]=n,d[12]=i,d[1]=r,d[5]=o,d[9]=a,d[13]=l,d[2]=c,d[6]=h,d[10]=u,d[14]=f,d[3]=p,d[7]=x,d[11]=y,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new s().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,i=1/Ds.setFromMatrixColumn(e,0).length(),r=1/Ds.setFromMatrixColumn(e,1).length(),o=1/Ds.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,i=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let f=o*h,p=o*u,x=a*h,y=a*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=p+x*c,t[5]=f-y*c,t[9]=-a*l,t[2]=y-f*c,t[6]=x+p*c,t[10]=o*l}else if(e.order==="YXZ"){let f=l*h,p=l*u,x=c*h,y=c*u;t[0]=f+y*a,t[4]=x*a-p,t[8]=o*c,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=p*a-x,t[6]=y+f*a,t[10]=o*l}else if(e.order==="ZXY"){let f=l*h,p=l*u,x=c*h,y=c*u;t[0]=f-y*a,t[4]=-o*u,t[8]=x+p*a,t[1]=p+x*a,t[5]=o*h,t[9]=y-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let f=o*h,p=o*u,x=a*h,y=a*u;t[0]=l*h,t[4]=x*c-p,t[8]=f*c+y,t[1]=l*u,t[5]=y*c+f,t[9]=p*c-x,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let f=o*l,p=o*c,x=a*l,y=a*c;t[0]=l*h,t[4]=y-f*u,t[8]=x*u+p,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=p*u+x,t[10]=f-y*u}else if(e.order==="XZY"){let f=o*l,p=o*c,x=a*l,y=a*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=f*u+y,t[5]=o*h,t[9]=p*u-x,t[2]=x*u-p,t[6]=a*h,t[10]=y*u+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(ed,e,td)}lookAt(e,t,n){let i=this.elements;return Zn.subVectors(e,t),Zn.lengthSq()===0&&(Zn.z=1),Zn.normalize(),Ji.crossVectors(n,Zn),Ji.lengthSq()===0&&(Math.abs(n.z)===1?Zn.x+=1e-4:Zn.z+=1e-4,Zn.normalize(),Ji.crossVectors(n,Zn)),Ji.normalize(),co.crossVectors(Zn,Ji),i[0]=Ji.x,i[4]=co.x,i[8]=Zn.x,i[1]=Ji.y,i[5]=co.y,i[9]=Zn.y,i[2]=Ji.z,i[6]=co.z,i[10]=Zn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],f=n[9],p=n[13],x=n[2],y=n[6],m=n[10],d=n[14],C=n[3],_=n[7],T=n[11],B=n[15],U=i[0],A=i[4],$=i[8],E=i[12],I=i[1],J=i[5],le=i[9],Se=i[13],H=i[2],q=i[6],ne=i[10],P=i[14],re=i[3],ae=i[7],ge=i[11],xe=i[15];return r[0]=o*U+a*I+l*H+c*re,r[4]=o*A+a*J+l*q+c*ae,r[8]=o*$+a*le+l*ne+c*ge,r[12]=o*E+a*Se+l*P+c*xe,r[1]=h*U+u*I+f*H+p*re,r[5]=h*A+u*J+f*q+p*ae,r[9]=h*$+u*le+f*ne+p*ge,r[13]=h*E+u*Se+f*P+p*xe,r[2]=x*U+y*I+m*H+d*re,r[6]=x*A+y*J+m*q+d*ae,r[10]=x*$+y*le+m*ne+d*ge,r[14]=x*E+y*Se+m*P+d*xe,r[3]=C*U+_*I+T*H+B*re,r[7]=C*A+_*J+T*q+B*ae,r[11]=C*$+_*le+T*ne+B*ge,r[15]=C*E+_*Se+T*P+B*xe,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],u=e[6],f=e[10],p=e[14],x=e[3],y=e[7],m=e[11],d=e[15];return x*(+r*l*u-i*c*u-r*a*f+n*c*f+i*a*p-n*l*p)+y*(+t*l*p-t*c*f+r*o*f-i*o*p+i*c*h-r*l*h)+m*(+t*c*u-t*a*p-r*o*u+n*o*p+r*a*h-n*c*h)+d*(-i*a*h-t*l*u+t*a*f+i*o*u-n*o*f+n*l*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=e[9],f=e[10],p=e[11],x=e[12],y=e[13],m=e[14],d=e[15],C=u*m*c-y*f*c+y*l*p-a*m*p-u*l*d+a*f*d,_=x*f*c-h*m*c-x*l*p+o*m*p+h*l*d-o*f*d,T=h*y*c-x*u*c+x*a*p-o*y*p-h*a*d+o*u*d,B=x*u*l-h*y*l-x*a*f+o*y*f+h*a*m-o*u*m,U=t*C+n*_+i*T+r*B;if(U===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let A=1/U;return e[0]=C*A,e[1]=(y*f*r-u*m*r-y*i*p+n*m*p+u*i*d-n*f*d)*A,e[2]=(a*m*r-y*l*r+y*i*c-n*m*c-a*i*d+n*l*d)*A,e[3]=(u*l*r-a*f*r-u*i*c+n*f*c+a*i*p-n*l*p)*A,e[4]=_*A,e[5]=(h*m*r-x*f*r+x*i*p-t*m*p-h*i*d+t*f*d)*A,e[6]=(x*l*r-o*m*r-x*i*c+t*m*c+o*i*d-t*l*d)*A,e[7]=(o*f*r-h*l*r+h*i*c-t*f*c-o*i*p+t*l*p)*A,e[8]=T*A,e[9]=(x*u*r-h*y*r-x*n*p+t*y*p+h*n*d-t*u*d)*A,e[10]=(o*y*r-x*a*r+x*n*c-t*y*c-o*n*d+t*a*d)*A,e[11]=(h*a*r-o*u*r-h*n*c+t*u*c+o*n*p-t*a*p)*A,e[12]=B*A,e[13]=(h*y*i-x*u*i+x*n*f-t*y*f-h*n*m+t*u*m)*A,e[14]=(x*a*i-o*y*i-x*n*l+t*y*l+o*n*m-t*a*m)*A,e[15]=(o*u*i-h*a*i+h*n*l-t*u*l-o*n*f+t*a*f)*A,this}scale(e){let t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),i=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*o,0,c*l-i*a,h*l+i*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,o){return this.set(1,n,r,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){let i=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,h=o+o,u=a+a,f=r*c,p=r*h,x=r*u,y=o*h,m=o*u,d=a*u,C=l*c,_=l*h,T=l*u,B=n.x,U=n.y,A=n.z;return i[0]=(1-(y+d))*B,i[1]=(p+T)*B,i[2]=(x-_)*B,i[3]=0,i[4]=(p-T)*U,i[5]=(1-(f+d))*U,i[6]=(m+C)*U,i[7]=0,i[8]=(x+_)*A,i[9]=(m-C)*A,i[10]=(1-(f+y))*A,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){let i=this.elements,r=Ds.set(i[0],i[1],i[2]).length(),o=Ds.set(i[4],i[5],i[6]).length(),a=Ds.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],mi.copy(this);let c=1/r,h=1/o,u=1/a;return mi.elements[0]*=c,mi.elements[1]*=c,mi.elements[2]*=c,mi.elements[4]*=h,mi.elements[5]*=h,mi.elements[6]*=h,mi.elements[8]*=u,mi.elements[9]*=u,mi.elements[10]*=u,t.setFromRotationMatrix(mi),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,i,r,o,a=Fi){let l=this.elements,c=2*r/(t-e),h=2*r/(n-i),u=(t+e)/(t-e),f=(n+i)/(n-i),p,x;if(a===Fi)p=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(a===Ho)p=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,r,o,a=Fi){let l=this.elements,c=1/(t-e),h=1/(n-i),u=1/(o-r),f=(t+e)*c,p=(n+i)*h,x,y;if(a===Fi)x=(o+r)*u,y=-2*u;else if(a===Ho)x=r*u,y=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=y,l[14]=-x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Ds=new L,mi=new vt,ed=new L(0,0,0),td=new L(1,1,1),Ji=new L,co=new L,Zn=new L,Eh=new vt,bh=new un,ri=class s{constructor(e=0,t=0,n=0,i=s.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let i=e.elements,r=i[0],o=i[4],a=i[8],l=i[1],c=i[5],h=i[9],u=i[2],f=i[6],p=i[10];switch(t){case"XYZ":this._y=Math.asin(An(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-An(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(An(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-An(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(An(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-An(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Eh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Eh,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return bh.setFromEuler(this),this.setFromQuaternion(bh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ri.DEFAULT_ORDER="XYZ";var Lr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},nd=0,wh=new L,Ns=new un,Li=new vt,ho=new L,_r=new L,id=new L,sd=new un,Th=new L(1,0,0),Ah=new L(0,1,0),Rh=new L(0,0,1),rd={type:"added"},od={type:"removed"},zn=class s extends ts{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:nd++}),this.uuid=Bi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let e=new L,t=new ri,n=new un,i=new L(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new vt},normalMatrix:{value:new St}}),this.matrix=new vt,this.matrixWorld=new vt,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Lr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ns.setFromAxisAngle(e,t),this.quaternion.multiply(Ns),this}rotateOnWorldAxis(e,t){return Ns.setFromAxisAngle(e,t),this.quaternion.premultiply(Ns),this}rotateX(e){return this.rotateOnAxis(Th,e)}rotateY(e){return this.rotateOnAxis(Ah,e)}rotateZ(e){return this.rotateOnAxis(Rh,e)}translateOnAxis(e,t){return wh.copy(e).applyQuaternion(this.quaternion),this.position.add(wh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Th,e)}translateY(e){return this.translateOnAxis(Ah,e)}translateZ(e){return this.translateOnAxis(Rh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Li.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ho.copy(e):ho.set(e,t,n);let i=this.parent;this.updateWorldMatrix(!0,!1),_r.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Li.lookAt(_r,ho,this.up):Li.lookAt(ho,_r,this.up),this.quaternion.setFromRotationMatrix(Li),i&&(Li.extractRotation(i.matrixWorld),Ns.setFromRotationMatrix(Li),this.quaternion.premultiply(Ns.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(rd)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(od)),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Li.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Li.multiply(e.parent.matrixWorld)),e.applyMatrix4(Li),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_r,e,id),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_r,sd,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,i=t.length;n<i;n++){let r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){let i=this.children;for(let r=0,o=i.length;r<o;r++){let a=i[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxGeometryCount=this._maxGeometryCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));i.material=a}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];i.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),u=o(e.shapes),f=o(e.skeletons),p=o(e.animations),x=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),p.length>0&&(n.animations=p),x.length>0&&(n.nodes=x)}return n.object=i,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let i=e.children[n];this.add(i.clone())}return this}};zn.DEFAULT_UP=new L(0,1,0);zn.DEFAULT_MATRIX_AUTO_UPDATE=!0;zn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var gi=new L,Ui=new L,il=new L,Di=new L,zs=new L,Os=new L,Ch=new L,sl=new L,rl=new L,ol=new L,uo=!1,gs=class s{constructor(e=new L,t=new L,n=new L){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),gi.subVectors(e,t),i.cross(gi);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){gi.subVectors(i,t),Ui.subVectors(n,t),il.subVectors(e,t);let o=gi.dot(gi),a=gi.dot(Ui),l=gi.dot(il),c=Ui.dot(Ui),h=Ui.dot(il),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;let f=1/u,p=(c*l-a*h)*f,x=(o*h-a*l)*f;return r.set(1-p-x,x,p)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Di)===null?!1:Di.x>=0&&Di.y>=0&&Di.x+Di.y<=1}static getUV(e,t,n,i,r,o,a,l){return uo===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),uo=!0),this.getInterpolation(e,t,n,i,r,o,a,l)}static getInterpolation(e,t,n,i,r,o,a,l){return this.getBarycoord(e,t,n,i,Di)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Di.x),l.addScaledVector(o,Di.y),l.addScaledVector(a,Di.z),l)}static isFrontFacing(e,t,n,i){return gi.subVectors(n,t),Ui.subVectors(e,t),gi.cross(Ui).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return gi.subVectors(this.c,this.b),Ui.subVectors(this.a,this.b),gi.cross(Ui).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return s.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return s.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,r){return uo===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),uo=!0),s.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}getInterpolation(e,t,n,i,r){return s.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return s.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return s.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,i=this.b,r=this.c,o,a;zs.subVectors(i,n),Os.subVectors(r,n),sl.subVectors(e,n);let l=zs.dot(sl),c=Os.dot(sl);if(l<=0&&c<=0)return t.copy(n);rl.subVectors(e,i);let h=zs.dot(rl),u=Os.dot(rl);if(h>=0&&u<=h)return t.copy(i);let f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(n).addScaledVector(zs,o);ol.subVectors(e,r);let p=zs.dot(ol),x=Os.dot(ol);if(x>=0&&p<=x)return t.copy(r);let y=p*c-l*x;if(y<=0&&c>=0&&x<=0)return a=c/(c-x),t.copy(n).addScaledVector(Os,a);let m=h*x-p*u;if(m<=0&&u-h>=0&&p-x>=0)return Ch.subVectors(r,i),a=(u-h)/(u-h+(p-x)),t.copy(i).addScaledVector(Ch,a);let d=1/(m+y+f);return o=y*d,a=f*d,t.copy(n).addScaledVector(zs,o).addScaledVector(Os,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Cu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},$i={h:0,s:0,l:0},fo={h:0,s:0,l:0};function al(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}var Ze=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=It){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Lt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=Lt.workingColorSpace){return this.r=e,this.g=t,this.b=n,Lt.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=Lt.workingColorSpace){if(e=Zf(e,1),t=An(t,0,1),n=An(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=al(o,r,e+1/3),this.g=al(o,r,e),this.b=al(o,r,e-1/3)}return Lt.toWorkingColorSpace(this,i),this}setStyle(e,t=It){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=It){let n=Cu[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=er(e.r),this.g=er(e.g),this.b=er(e.b),this}copyLinearToSRGB(e){return this.r=Ja(e.r),this.g=Ja(e.g),this.b=Ja(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=It){return Lt.fromWorkingColorSpace(Ln.copy(this),e),Math.round(An(Ln.r*255,0,255))*65536+Math.round(An(Ln.g*255,0,255))*256+Math.round(An(Ln.b*255,0,255))}getHexString(e=It){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Lt.workingColorSpace){Lt.fromWorkingColorSpace(Ln.copy(this),t);let n=Ln.r,i=Ln.g,r=Ln.b,o=Math.max(n,i,r),a=Math.min(n,i,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(i-r)/u+(i<r?6:0);break;case i:l=(r-n)/u+2;break;case r:l=(n-i)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Lt.workingColorSpace){return Lt.fromWorkingColorSpace(Ln.copy(this),t),e.r=Ln.r,e.g=Ln.g,e.b=Ln.b,e}getStyle(e=It){Lt.fromWorkingColorSpace(Ln.copy(this),e);let t=Ln.r,n=Ln.g,i=Ln.b;return e!==It?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL($i),this.setHSL($i.h+e,$i.s+t,$i.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL($i),e.getHSL(fo);let n=Ya($i.h,fo.h,t),i=Ya($i.s,fo.s,t),r=Ya($i.l,fo.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ln=new Ze;Ze.NAMES=Cu;var ad=0,ns=class extends ts{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ad++}),this.uuid=Bi(),this.name="",this.type="Material",this.blending=js,this.side=es,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Sl,this.blendDst=El,this.blendEquation=ps,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ze(0,0,0),this.blendAlpha=0,this.depthFunc=Do,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=gh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Cs,this.stencilZFail=Cs,this.stencilZPass=Cs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==js&&(n.blending=this.blending),this.side!==es&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Sl&&(n.blendSrc=this.blendSrc),this.blendDst!==El&&(n.blendDst=this.blendDst),this.blendEquation!==ps&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Do&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==gh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Cs&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Cs&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Cs&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=i(e.textures),o=i(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},mt=class extends ns{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=gu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var hn=new L,po=new Me,yn=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Rl,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Qi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)po.fromBufferAttribute(this,t),po.applyMatrix3(e),this.setXY(t,po.x,po.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)hn.fromBufferAttribute(this,t),hn.applyMatrix3(e),this.setXYZ(t,hn.x,hn.y,hn.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)hn.fromBufferAttribute(this,t),hn.applyMatrix4(e),this.setXYZ(t,hn.x,hn.y,hn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)hn.fromBufferAttribute(this,t),hn.applyNormalMatrix(e),this.setXYZ(t,hn.x,hn.y,hn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)hn.fromBufferAttribute(this,t),hn.transformDirection(e),this.setXYZ(t,hn.x,hn.y,hn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Oi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=kt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Oi(t,this.array)),t}setX(e,t){return this.normalized&&(t=kt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Oi(t,this.array)),t}setY(e,t){return this.normalized&&(t=kt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Oi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=kt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Oi(t,this.array)),t}setW(e,t){return this.normalized&&(t=kt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=kt(t,this.array),n=kt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=kt(t,this.array),n=kt(n,this.array),i=kt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=kt(t,this.array),n=kt(n,this.array),i=kt(i,this.array),r=kt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Rl&&(e.usage=this.usage),e}};var qo=class extends yn{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Yo=class extends yn{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Ut=class extends yn{constructor(e,t,n){super(new Float32Array(e),t,n)}};var ld=0,ni=new vt,ll=new zn,Fs=new L,Jn=new ki,vr=new ki,vn=new L,Mn=class s extends ts{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ld++}),this.uuid=Bi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ru(e)?Yo:qo)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new St().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ni.makeRotationFromQuaternion(e),this.applyMatrix4(ni),this}rotateX(e){return ni.makeRotationX(e),this.applyMatrix4(ni),this}rotateY(e){return ni.makeRotationY(e),this.applyMatrix4(ni),this}rotateZ(e){return ni.makeRotationZ(e),this.applyMatrix4(ni),this}translate(e,t,n){return ni.makeTranslation(e,t,n),this.applyMatrix4(ni),this}scale(e,t,n){return ni.makeScale(e,t,n),this.applyMatrix4(ni),this}lookAt(e){return ll.lookAt(e),ll.updateMatrix(),this.applyMatrix4(ll.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Fs).negate(),this.translate(Fs.x,Fs.y,Fs.z),this}setFromPoints(e){let t=[];for(let n=0,i=e.length;n<i;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Ut(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ki);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){let r=t[n];Jn.setFromBufferAttribute(r),this.morphTargetsRelative?(vn.addVectors(this.boundingBox.min,Jn.min),this.boundingBox.expandByPoint(vn),vn.addVectors(this.boundingBox.max,Jn.max),this.boundingBox.expandByPoint(vn)):(this.boundingBox.expandByPoint(Jn.min),this.boundingBox.expandByPoint(Jn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ys);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new L,1/0);return}if(e){let n=this.boundingSphere.center;if(Jn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];vr.setFromBufferAttribute(a),this.morphTargetsRelative?(vn.addVectors(Jn.min,vr.min),Jn.expandByPoint(vn),vn.addVectors(Jn.max,vr.max),Jn.expandByPoint(vn)):(Jn.expandByPoint(vr.min),Jn.expandByPoint(vr.max))}Jn.getCenter(n);let i=0;for(let r=0,o=e.count;r<o;r++)vn.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(vn));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)vn.fromBufferAttribute(a,c),l&&(Fs.fromBufferAttribute(e,c),vn.add(Fs)),i=Math.max(i,n.distanceToSquared(vn))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.array,i=t.position.array,r=t.normal.array,o=t.uv.array,a=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new yn(new Float32Array(4*a),4));let l=this.getAttribute("tangent").array,c=[],h=[];for(let I=0;I<a;I++)c[I]=new L,h[I]=new L;let u=new L,f=new L,p=new L,x=new Me,y=new Me,m=new Me,d=new L,C=new L;function _(I,J,le){u.fromArray(i,I*3),f.fromArray(i,J*3),p.fromArray(i,le*3),x.fromArray(o,I*2),y.fromArray(o,J*2),m.fromArray(o,le*2),f.sub(u),p.sub(u),y.sub(x),m.sub(x);let Se=1/(y.x*m.y-m.x*y.y);isFinite(Se)&&(d.copy(f).multiplyScalar(m.y).addScaledVector(p,-y.y).multiplyScalar(Se),C.copy(p).multiplyScalar(y.x).addScaledVector(f,-m.x).multiplyScalar(Se),c[I].add(d),c[J].add(d),c[le].add(d),h[I].add(C),h[J].add(C),h[le].add(C))}let T=this.groups;T.length===0&&(T=[{start:0,count:n.length}]);for(let I=0,J=T.length;I<J;++I){let le=T[I],Se=le.start,H=le.count;for(let q=Se,ne=Se+H;q<ne;q+=3)_(n[q+0],n[q+1],n[q+2])}let B=new L,U=new L,A=new L,$=new L;function E(I){A.fromArray(r,I*3),$.copy(A);let J=c[I];B.copy(J),B.sub(A.multiplyScalar(A.dot(J))).normalize(),U.crossVectors($,J);let Se=U.dot(h[I])<0?-1:1;l[I*4]=B.x,l[I*4+1]=B.y,l[I*4+2]=B.z,l[I*4+3]=Se}for(let I=0,J=T.length;I<J;++I){let le=T[I],Se=le.start,H=le.count;for(let q=Se,ne=Se+H;q<ne;q+=3)E(n[q+0]),E(n[q+1]),E(n[q+2])}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new yn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,p=n.count;f<p;f++)n.setXYZ(f,0,0,0);let i=new L,r=new L,o=new L,a=new L,l=new L,c=new L,h=new L,u=new L;if(e)for(let f=0,p=e.count;f<p;f+=3){let x=e.getX(f+0),y=e.getX(f+1),m=e.getX(f+2);i.fromBufferAttribute(t,x),r.fromBufferAttribute(t,y),o.fromBufferAttribute(t,m),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),a.fromBufferAttribute(n,x),l.fromBufferAttribute(n,y),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(x,a.x,a.y,a.z),n.setXYZ(y,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,p=t.count;f<p;f+=3)i.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)vn.fromBufferAttribute(e,t),vn.normalize(),e.setXYZ(t,vn.x,vn.y,vn.z)}toNonIndexed(){function e(a,l){let c=a.array,h=a.itemSize,u=a.normalized,f=new c.constructor(l.length*h),p=0,x=0;for(let y=0,m=l.length;y<m;y++){a.isInterleavedBufferAttribute?p=l[y]*a.data.stride+a.offset:p=l[y]*h;for(let d=0;d<h;d++)f[x++]=c[p++]}return new yn(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new s,n=this.index.array,i=this.attributes;for(let a in i){let l=i[a],c=e(l,n);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){let f=c[h],p=e(f,n);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let i={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){let p=c[u];h.push(p.toJSON(e.data))}h.length>0&&(i[l]=h,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let i=e.attributes;for(let c in i){let h=i[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],u=r[c];for(let f=0,p=u.length;f<p;f++)h.push(u[f].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,h=o.length;c<h;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ph=new vt,us=new Xo,mo=new ys,Ih=new L,Bs=new L,Hs=new L,ks=new L,cl=new L,go=new L,xo=new Me,_o=new Me,vo=new Me,Lh=new L,Uh=new L,Dh=new L,yo=new L,Mo=new L,Be=class extends zn{constructor(e=new Mn,t=new mt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);let a=this.morphTargetInfluences;if(r&&a){go.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],u=r[l];h!==0&&(cl.fromBufferAttribute(u,e),o?go.addScaledVector(cl,h):go.addScaledVector(cl.sub(t),h))}t.add(go)}return t}raycast(e,t){let n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),mo.copy(n.boundingSphere),mo.applyMatrix4(r),us.copy(e.ray).recast(e.near),!(mo.containsPoint(us.origin)===!1&&(us.intersectSphere(mo,Ih)===null||us.origin.distanceToSquared(Ih)>(e.far-e.near)**2))&&(Ph.copy(r).invert(),us.copy(e.ray).applyMatrix4(Ph),!(n.boundingBox!==null&&us.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,us)))}_computeIntersections(e,t,n){let i,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let x=0,y=f.length;x<y;x++){let m=f[x],d=o[m.materialIndex],C=Math.max(m.start,p.start),_=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let T=C,B=_;T<B;T+=3){let U=a.getX(T),A=a.getX(T+1),$=a.getX(T+2);i=So(this,d,e,n,c,h,u,U,A,$),i&&(i.faceIndex=Math.floor(T/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{let x=Math.max(0,p.start),y=Math.min(a.count,p.start+p.count);for(let m=x,d=y;m<d;m+=3){let C=a.getX(m),_=a.getX(m+1),T=a.getX(m+2);i=So(this,o,e,n,c,h,u,C,_,T),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let x=0,y=f.length;x<y;x++){let m=f[x],d=o[m.materialIndex],C=Math.max(m.start,p.start),_=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let T=C,B=_;T<B;T+=3){let U=T,A=T+1,$=T+2;i=So(this,d,e,n,c,h,u,U,A,$),i&&(i.faceIndex=Math.floor(T/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{let x=Math.max(0,p.start),y=Math.min(l.count,p.start+p.count);for(let m=x,d=y;m<d;m+=3){let C=m,_=m+1,T=m+2;i=So(this,o,e,n,c,h,u,C,_,T),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}};function cd(s,e,t,n,i,r,o,a){let l;if(e.side===fn?l=n.intersectTriangle(o,r,i,!0,a):l=n.intersectTriangle(i,r,o,e.side===es,a),l===null)return null;Mo.copy(a),Mo.applyMatrix4(s.matrixWorld);let c=t.ray.origin.distanceTo(Mo);return c<t.near||c>t.far?null:{distance:c,point:Mo.clone(),object:s}}function So(s,e,t,n,i,r,o,a,l,c){s.getVertexPosition(a,Bs),s.getVertexPosition(l,Hs),s.getVertexPosition(c,ks);let h=cd(s,e,t,n,Bs,Hs,ks,yo);if(h){i&&(xo.fromBufferAttribute(i,a),_o.fromBufferAttribute(i,l),vo.fromBufferAttribute(i,c),h.uv=gs.getInterpolation(yo,Bs,Hs,ks,xo,_o,vo,new Me)),r&&(xo.fromBufferAttribute(r,a),_o.fromBufferAttribute(r,l),vo.fromBufferAttribute(r,c),h.uv1=gs.getInterpolation(yo,Bs,Hs,ks,xo,_o,vo,new Me),h.uv2=h.uv1),o&&(Lh.fromBufferAttribute(o,a),Uh.fromBufferAttribute(o,l),Dh.fromBufferAttribute(o,c),h.normal=gs.getInterpolation(yo,Bs,Hs,ks,Lh,Uh,Dh,new L),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a,b:l,c,normal:new L,materialIndex:0};gs.getNormal(Bs,Hs,ks,u.normal),h.face=u}return h}var On=class s extends Mn{constructor(e=1,t=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};let a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],u=[],f=0,p=0;x("z","y","x",-1,-1,n,t,e,o,r,0),x("z","y","x",1,-1,n,t,-e,o,r,1),x("x","z","y",1,1,e,n,t,i,o,2),x("x","z","y",1,-1,e,n,-t,i,o,3),x("x","y","z",1,-1,e,t,n,i,r,4),x("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new Ut(c,3)),this.setAttribute("normal",new Ut(h,3)),this.setAttribute("uv",new Ut(u,2));function x(y,m,d,C,_,T,B,U,A,$,E){let I=T/A,J=B/$,le=T/2,Se=B/2,H=U/2,q=A+1,ne=$+1,P=0,re=0,ae=new L;for(let ge=0;ge<ne;ge++){let xe=ge*J-Se;for(let be=0;be<q;be++){let se=be*I-le;ae[y]=se*C,ae[m]=xe*_,ae[d]=H,c.push(ae.x,ae.y,ae.z),ae[y]=0,ae[m]=0,ae[d]=U>0?1:-1,h.push(ae.x,ae.y,ae.z),u.push(be/A),u.push(1-ge/$),P+=1}}for(let ge=0;ge<$;ge++)for(let xe=0;xe<A;xe++){let be=f+xe+q*ge,se=f+xe+q*(ge+1),_e=f+(xe+1)+q*(ge+1),Ae=f+(xe+1)+q*ge;l.push(be,se,Ae),l.push(se,_e,Ae),re+=6}a.addGroup(p,re,E),p+=re,f+=P}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function rr(s){let e={};for(let t in s){e[t]={};for(let n in s[t]){let i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function kn(s){let e={};for(let t=0;t<s.length;t++){let n=rr(s[t]);for(let i in n)e[i]=n[i]}return e}function hd(s){let e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function Pu(s){return s.getRenderTarget()===null?s.outputColorSpace:Lt.workingColorSpace}var is={clone:rr,merge:kn},ud=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,fd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,nn=class extends ns{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ud,this.fragmentShader=fd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=rr(e.uniforms),this.uniformsGroups=hd(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let i in this.uniforms){let o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},Zo=class extends zn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new vt,this.projectionMatrix=new vt,this.projectionMatrixInverse=new vt,this.coordinateSystem=Fi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Un=class extends Zo{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Pl*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(qa*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Pl*2*Math.atan(Math.tan(qa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(qa*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*i/l,t-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Vs=-90,Gs=1,Dl=class extends zn{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new Un(Vs,Gs,e,t);i.layers=this.layers,this.add(i);let r=new Un(Vs,Gs,e,t);r.layers=this.layers,this.add(r);let o=new Un(Vs,Gs,e,t);o.layers=this.layers,this.add(o);let a=new Un(Vs,Gs,e,t);a.layers=this.layers,this.add(a);let l=new Un(Vs,Gs,e,t);l.layers=this.layers,this.add(l);let c=new Un(Vs,Gs,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,i,r,o,a,l]=t;for(let c of t)this.remove(c);if(e===Fi)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ho)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,u=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;let y=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,r),e.setRenderTarget(n,1,i),e.render(t,o),e.setRenderTarget(n,2,i),e.render(t,a),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=y,e.setRenderTarget(n,5,i),e.render(t,h),e.setRenderTarget(u,f,p),e.xr.enabled=x,n.texture.needsPMREMUpdate=!0}},Jo=class extends si{constructor(e,t,n,i,r,o,a,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:nr,super(e,t,n,i,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Nl=class extends Wn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];t.encoding!==void 0&&(Tr("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===vs?It:ii),this.texture=new Jo(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Xn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new On(5,5,5),r=new nn({name:"CubemapFromEquirect",uniforms:rr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:fn,blending:Ei});r.uniforms.tEquirect.value=t;let o=new Be(i,r),a=t.minFilter;return t.minFilter===Ir&&(t.minFilter=Xn),new Dl(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(r)}},hl=new L,dd=new L,pd=new St,zi=class{constructor(e=new L(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let i=hl.subVectors(n,t).cross(dd.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(hl),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||pd.getNormalMatrix(e),i=this.coplanarPoint(hl).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},fs=new ys,Eo=new L,Ur=class{constructor(e=new zi,t=new zi,n=new zi,i=new zi,r=new zi,o=new zi){this.planes=[e,t,n,i,r,o]}set(e,t,n,i,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Fi){let n=this.planes,i=e.elements,r=i[0],o=i[1],a=i[2],l=i[3],c=i[4],h=i[5],u=i[6],f=i[7],p=i[8],x=i[9],y=i[10],m=i[11],d=i[12],C=i[13],_=i[14],T=i[15];if(n[0].setComponents(l-r,f-c,m-p,T-d).normalize(),n[1].setComponents(l+r,f+c,m+p,T+d).normalize(),n[2].setComponents(l+o,f+h,m+x,T+C).normalize(),n[3].setComponents(l-o,f-h,m-x,T-C).normalize(),n[4].setComponents(l-a,f-u,m-y,T-_).normalize(),t===Fi)n[5].setComponents(l+a,f+u,m+y,T+_).normalize();else if(t===Ho)n[5].setComponents(a,u,y,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),fs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),fs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(fs)}intersectsSprite(e){return fs.center.set(0,0,0),fs.radius=.7071067811865476,fs.applyMatrix4(e.matrixWorld),this.intersectsSphere(fs)}intersectsSphere(e){let t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let i=t[n];if(Eo.x=i.normal.x>0?e.max.x:e.min.x,Eo.y=i.normal.y>0?e.max.y:e.min.y,Eo.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Eo)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Iu(){let s=null,e=!1,t=null,n=null;function i(r,o){t(r,o),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function md(s,e){let t=e.isWebGL2,n=new WeakMap;function i(c,h){let u=c.array,f=c.usage,p=u.byteLength,x=s.createBuffer();s.bindBuffer(h,x),s.bufferData(h,u,f),c.onUploadCallback();let y;if(u instanceof Float32Array)y=s.FLOAT;else if(u instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)y=s.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else y=s.UNSIGNED_SHORT;else if(u instanceof Int16Array)y=s.SHORT;else if(u instanceof Uint32Array)y=s.UNSIGNED_INT;else if(u instanceof Int32Array)y=s.INT;else if(u instanceof Int8Array)y=s.BYTE;else if(u instanceof Uint8Array)y=s.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)y=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:x,type:y,bytesPerElement:u.BYTES_PER_ELEMENT,version:c.version,size:p}}function r(c,h,u){let f=h.array,p=h._updateRange,x=h.updateRanges;if(s.bindBuffer(u,c),p.count===-1&&x.length===0&&s.bufferSubData(u,0,f),x.length!==0){for(let y=0,m=x.length;y<m;y++){let d=x[y];t?s.bufferSubData(u,d.start*f.BYTES_PER_ELEMENT,f,d.start,d.count):s.bufferSubData(u,d.start*f.BYTES_PER_ELEMENT,f.subarray(d.start,d.start+d.count))}h.clearUpdateRanges()}p.count!==-1&&(t?s.bufferSubData(u,p.offset*f.BYTES_PER_ELEMENT,f,p.offset,p.count):s.bufferSubData(u,p.offset*f.BYTES_PER_ELEMENT,f.subarray(p.offset,p.offset+p.count)),p.count=-1),h.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);let h=n.get(c);h&&(s.deleteBuffer(h.buffer),n.delete(c))}function l(c,h){if(c.isGLBufferAttribute){let f=n.get(c);(!f||f.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);let u=n.get(c);if(u===void 0)n.set(c,i(c,h));else if(u.version<c.version){if(u.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(u.buffer,c,h),u.version=c.version}}return{get:o,remove:a,update:l}}var an=class s extends Mn{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};let r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,u=e/a,f=t/l,p=[],x=[],y=[],m=[];for(let d=0;d<h;d++){let C=d*f-o;for(let _=0;_<c;_++){let T=_*u-r;x.push(T,-C,0),y.push(0,0,1),m.push(_/a),m.push(1-d/l)}}for(let d=0;d<l;d++)for(let C=0;C<a;C++){let _=C+c*d,T=C+c*(d+1),B=C+1+c*(d+1),U=C+1+c*d;p.push(_,T,U),p.push(T,B,U)}this.setIndex(p),this.setAttribute("position",new Ut(x,3)),this.setAttribute("normal",new Ut(y,3)),this.setAttribute("uv",new Ut(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.widthSegments,e.heightSegments)}},gd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,xd=`#ifdef USE_ALPHAHASH
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
#endif`,_d=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,vd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,yd=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Md=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Sd=`#ifdef USE_AOMAP
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
#endif`,Ed=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,bd=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
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
#endif`,wd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Td=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ad=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Rd=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Cd=`#ifdef USE_IRIDESCENCE
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
#endif`,Pd=`#ifdef USE_BUMPMAP
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
#endif`,Id=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
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
#endif`,Ld=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ud=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Dd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Nd=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,zd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Od=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Fd=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Bd=`#define PI 3.141592653589793
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
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
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
} // validated`,Hd=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,kd=`vec3 transformedNormal = objectNormal;
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
#endif`,Vd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Gd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Wd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Xd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,qd="gl_FragColor = linearToOutputTexel( gl_FragColor );",Yd=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,Zd=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Jd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,$d=`#ifdef USE_ENVMAP
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
#endif`,Kd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Qd=`#ifdef USE_ENVMAP
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
#endif`,jd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ep=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,tp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,np=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ip=`#ifdef USE_GRADIENTMAP
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
}`,sp=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,rp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,op=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ap=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lp=`uniform bool receiveShadow;
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
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
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
#endif`,cp=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
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
#endif`,hp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,up=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,fp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,dp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,pp=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
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
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
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
#endif`,mp=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
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
		float v = 0.5 / ( gv + gl );
		return saturate(v);
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
	vec3 f0 = material.specularColor;
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
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
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
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
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
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,gp=`
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
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,xp=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
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
#endif`,_p=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,vp=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,yp=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Mp=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Sp=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Ep=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,bp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,wp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Tp=`#if defined( USE_POINTS_UV )
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
#endif`,Ap=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Rp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Cp=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Pp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Ip=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Lp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Up=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Dp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Np=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,zp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Op=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Fp=`#ifdef USE_NORMALMAP
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
#endif`,Bp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Hp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,kp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Vp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Gp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Wp=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Xp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,qp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Yp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Zp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Jp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,$p=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Kp=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Qp=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
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
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,jp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
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
#endif`,em=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,tm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,nm=`#ifdef USE_SKINNING
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
#endif`,im=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,sm=`#ifdef USE_SKINNING
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
#endif`,rm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,om=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,am=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,lm=`#ifndef saturate
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
vec3 OptimizedCineonToneMapping( vec3 color ) {
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
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,cm=`#ifdef USE_TRANSMISSION
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
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,hm=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,um=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,fm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,dm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,pm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,mm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,gm=`uniform sampler2D t2D;
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
}`,xm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_m=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ym=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Mm=`#include <common>
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
}`,Sm=`#if DEPTH_PACKING == 3200
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Em=`#define DISTANCE
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
}`,bm=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,wm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Tm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Am=`uniform float scale;
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
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Rm=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Cm=`#include <common>
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
}`,Pm=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Im=`#define LAMBERT
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
}`,Lm=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Um=`#define MATCAP
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
}`,Dm=`#define MATCAP
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Nm=`#define NORMAL
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
}`,zm=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Om=`#define PHONG
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
}`,Fm=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Bm=`#define STANDARD
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
}`,Hm=`#define STANDARD
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
#include <packing>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
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
}`,km=`#define TOON
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
}`,Vm=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Gm=`uniform float size;
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
}`,Wm=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Xm=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
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
}`,qm=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
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
}`,Ym=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
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
}`,Zm=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,_t={alphahash_fragment:gd,alphahash_pars_fragment:xd,alphamap_fragment:_d,alphamap_pars_fragment:vd,alphatest_fragment:yd,alphatest_pars_fragment:Md,aomap_fragment:Sd,aomap_pars_fragment:Ed,batching_pars_vertex:bd,batching_vertex:wd,begin_vertex:Td,beginnormal_vertex:Ad,bsdfs:Rd,iridescence_fragment:Cd,bumpmap_pars_fragment:Pd,clipping_planes_fragment:Id,clipping_planes_pars_fragment:Ld,clipping_planes_pars_vertex:Ud,clipping_planes_vertex:Dd,color_fragment:Nd,color_pars_fragment:zd,color_pars_vertex:Od,color_vertex:Fd,common:Bd,cube_uv_reflection_fragment:Hd,defaultnormal_vertex:kd,displacementmap_pars_vertex:Vd,displacementmap_vertex:Gd,emissivemap_fragment:Wd,emissivemap_pars_fragment:Xd,colorspace_fragment:qd,colorspace_pars_fragment:Yd,envmap_fragment:Zd,envmap_common_pars_fragment:Jd,envmap_pars_fragment:$d,envmap_pars_vertex:Kd,envmap_physical_pars_fragment:cp,envmap_vertex:Qd,fog_vertex:jd,fog_pars_vertex:ep,fog_fragment:tp,fog_pars_fragment:np,gradientmap_pars_fragment:ip,lightmap_fragment:sp,lightmap_pars_fragment:rp,lights_lambert_fragment:op,lights_lambert_pars_fragment:ap,lights_pars_begin:lp,lights_toon_fragment:hp,lights_toon_pars_fragment:up,lights_phong_fragment:fp,lights_phong_pars_fragment:dp,lights_physical_fragment:pp,lights_physical_pars_fragment:mp,lights_fragment_begin:gp,lights_fragment_maps:xp,lights_fragment_end:_p,logdepthbuf_fragment:vp,logdepthbuf_pars_fragment:yp,logdepthbuf_pars_vertex:Mp,logdepthbuf_vertex:Sp,map_fragment:Ep,map_pars_fragment:bp,map_particle_fragment:wp,map_particle_pars_fragment:Tp,metalnessmap_fragment:Ap,metalnessmap_pars_fragment:Rp,morphcolor_vertex:Cp,morphnormal_vertex:Pp,morphtarget_pars_vertex:Ip,morphtarget_vertex:Lp,normal_fragment_begin:Up,normal_fragment_maps:Dp,normal_pars_fragment:Np,normal_pars_vertex:zp,normal_vertex:Op,normalmap_pars_fragment:Fp,clearcoat_normal_fragment_begin:Bp,clearcoat_normal_fragment_maps:Hp,clearcoat_pars_fragment:kp,iridescence_pars_fragment:Vp,opaque_fragment:Gp,packing:Wp,premultiplied_alpha_fragment:Xp,project_vertex:qp,dithering_fragment:Yp,dithering_pars_fragment:Zp,roughnessmap_fragment:Jp,roughnessmap_pars_fragment:$p,shadowmap_pars_fragment:Kp,shadowmap_pars_vertex:Qp,shadowmap_vertex:jp,shadowmask_pars_fragment:em,skinbase_vertex:tm,skinning_pars_vertex:nm,skinning_vertex:im,skinnormal_vertex:sm,specularmap_fragment:rm,specularmap_pars_fragment:om,tonemapping_fragment:am,tonemapping_pars_fragment:lm,transmission_fragment:cm,transmission_pars_fragment:hm,uv_pars_fragment:um,uv_pars_vertex:fm,uv_vertex:dm,worldpos_vertex:pm,background_vert:mm,background_frag:gm,backgroundCube_vert:xm,backgroundCube_frag:_m,cube_vert:vm,cube_frag:ym,depth_vert:Mm,depth_frag:Sm,distanceRGBA_vert:Em,distanceRGBA_frag:bm,equirect_vert:wm,equirect_frag:Tm,linedashed_vert:Am,linedashed_frag:Rm,meshbasic_vert:Cm,meshbasic_frag:Pm,meshlambert_vert:Im,meshlambert_frag:Lm,meshmatcap_vert:Um,meshmatcap_frag:Dm,meshnormal_vert:Nm,meshnormal_frag:zm,meshphong_vert:Om,meshphong_frag:Fm,meshphysical_vert:Bm,meshphysical_frag:Hm,meshtoon_vert:km,meshtoon_frag:Vm,points_vert:Gm,points_frag:Wm,shadow_vert:Xm,shadow_frag:qm,sprite_vert:Ym,sprite_frag:Zm},Ne={common:{diffuse:{value:new Ze(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new St},alphaMap:{value:null},alphaMapTransform:{value:new St},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new St}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new St}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new St}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new St},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new St},normalScale:{value:new Me(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new St},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new St}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new St}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new St}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ze(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ze(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new St},alphaTest:{value:0},uvTransform:{value:new St}},sprite:{diffuse:{value:new Ze(16777215)},opacity:{value:1},center:{value:new Me(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new St},alphaMap:{value:null},alphaMapTransform:{value:new St},alphaTest:{value:0}}},Si={basic:{uniforms:kn([Ne.common,Ne.specularmap,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.fog]),vertexShader:_t.meshbasic_vert,fragmentShader:_t.meshbasic_frag},lambert:{uniforms:kn([Ne.common,Ne.specularmap,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.fog,Ne.lights,{emissive:{value:new Ze(0)}}]),vertexShader:_t.meshlambert_vert,fragmentShader:_t.meshlambert_frag},phong:{uniforms:kn([Ne.common,Ne.specularmap,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.fog,Ne.lights,{emissive:{value:new Ze(0)},specular:{value:new Ze(1118481)},shininess:{value:30}}]),vertexShader:_t.meshphong_vert,fragmentShader:_t.meshphong_frag},standard:{uniforms:kn([Ne.common,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.roughnessmap,Ne.metalnessmap,Ne.fog,Ne.lights,{emissive:{value:new Ze(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:_t.meshphysical_vert,fragmentShader:_t.meshphysical_frag},toon:{uniforms:kn([Ne.common,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.gradientmap,Ne.fog,Ne.lights,{emissive:{value:new Ze(0)}}]),vertexShader:_t.meshtoon_vert,fragmentShader:_t.meshtoon_frag},matcap:{uniforms:kn([Ne.common,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.fog,{matcap:{value:null}}]),vertexShader:_t.meshmatcap_vert,fragmentShader:_t.meshmatcap_frag},points:{uniforms:kn([Ne.points,Ne.fog]),vertexShader:_t.points_vert,fragmentShader:_t.points_frag},dashed:{uniforms:kn([Ne.common,Ne.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:_t.linedashed_vert,fragmentShader:_t.linedashed_frag},depth:{uniforms:kn([Ne.common,Ne.displacementmap]),vertexShader:_t.depth_vert,fragmentShader:_t.depth_frag},normal:{uniforms:kn([Ne.common,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,{opacity:{value:1}}]),vertexShader:_t.meshnormal_vert,fragmentShader:_t.meshnormal_frag},sprite:{uniforms:kn([Ne.sprite,Ne.fog]),vertexShader:_t.sprite_vert,fragmentShader:_t.sprite_frag},background:{uniforms:{uvTransform:{value:new St},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:_t.background_vert,fragmentShader:_t.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:_t.backgroundCube_vert,fragmentShader:_t.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:_t.cube_vert,fragmentShader:_t.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:_t.equirect_vert,fragmentShader:_t.equirect_frag},distanceRGBA:{uniforms:kn([Ne.common,Ne.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:_t.distanceRGBA_vert,fragmentShader:_t.distanceRGBA_frag},shadow:{uniforms:kn([Ne.lights,Ne.fog,{color:{value:new Ze(0)},opacity:{value:1}}]),vertexShader:_t.shadow_vert,fragmentShader:_t.shadow_frag}};Si.physical={uniforms:kn([Si.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new St},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new St},clearcoatNormalScale:{value:new Me(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new St},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new St},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new St},sheen:{value:0},sheenColor:{value:new Ze(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new St},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new St},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new St},transmissionSamplerSize:{value:new Me},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new St},attenuationDistance:{value:0},attenuationColor:{value:new Ze(0)},specularColor:{value:new Ze(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new St},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new St},anisotropyVector:{value:new Me},anisotropyMap:{value:null},anisotropyMapTransform:{value:new St}}]),vertexShader:_t.meshphysical_vert,fragmentShader:_t.meshphysical_frag};var bo={r:0,b:0,g:0};function Jm(s,e,t,n,i,r,o){let a=new Ze(0),l=r===!0?0:1,c,h,u=null,f=0,p=null;function x(m,d){let C=!1,_=d.isScene===!0?d.background:null;_&&_.isTexture&&(_=(d.backgroundBlurriness>0?t:e).get(_)),_===null?y(a,l):_&&_.isColor&&(y(_,1),C=!0);let T=s.xr.getEnvironmentBlendMode();T==="additive"?n.buffers.color.setClear(0,0,0,1,o):T==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(s.autoClear||C)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),_&&(_.isCubeTexture||_.mapping===da)?(h===void 0&&(h=new Be(new On(1,1,1),new nn({name:"BackgroundCubeMaterial",uniforms:rr(Si.backgroundCube.uniforms),vertexShader:Si.backgroundCube.vertexShader,fragmentShader:Si.backgroundCube.fragmentShader,side:fn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(B,U,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),h.material.uniforms.envMap.value=_,h.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=d.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,h.material.toneMapped=Lt.getTransfer(_.colorSpace)!==Ht,(u!==_||f!==_.version||p!==s.toneMapping)&&(h.material.needsUpdate=!0,u=_,f=_.version,p=s.toneMapping),h.layers.enableAll(),m.unshift(h,h.geometry,h.material,0,0,null)):_&&_.isTexture&&(c===void 0&&(c=new Be(new an(2,2),new nn({name:"BackgroundMaterial",uniforms:rr(Si.background.uniforms),vertexShader:Si.background.vertexShader,fragmentShader:Si.background.fragmentShader,side:es,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=_,c.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,c.material.toneMapped=Lt.getTransfer(_.colorSpace)!==Ht,_.matrixAutoUpdate===!0&&_.updateMatrix(),c.material.uniforms.uvTransform.value.copy(_.matrix),(u!==_||f!==_.version||p!==s.toneMapping)&&(c.material.needsUpdate=!0,u=_,f=_.version,p=s.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function y(m,d){m.getRGB(bo,Pu(s)),n.buffers.color.setClear(bo.r,bo.g,bo.b,d,o)}return{getClearColor:function(){return a},setClearColor:function(m,d=1){a.set(m),l=d,y(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,y(a,l)},render:x}}function $m(s,e,t,n){let i=s.getParameter(s.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||r!==null,a={},l=m(null),c=l,h=!1;function u(H,q,ne,P,re){let ae=!1;if(o){let ge=y(P,ne,q);c!==ge&&(c=ge,p(c.object)),ae=d(H,P,ne,re),ae&&C(H,P,ne,re)}else{let ge=q.wireframe===!0;(c.geometry!==P.id||c.program!==ne.id||c.wireframe!==ge)&&(c.geometry=P.id,c.program=ne.id,c.wireframe=ge,ae=!0)}re!==null&&t.update(re,s.ELEMENT_ARRAY_BUFFER),(ae||h)&&(h=!1,$(H,q,ne,P),re!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(re).buffer))}function f(){return n.isWebGL2?s.createVertexArray():r.createVertexArrayOES()}function p(H){return n.isWebGL2?s.bindVertexArray(H):r.bindVertexArrayOES(H)}function x(H){return n.isWebGL2?s.deleteVertexArray(H):r.deleteVertexArrayOES(H)}function y(H,q,ne){let P=ne.wireframe===!0,re=a[H.id];re===void 0&&(re={},a[H.id]=re);let ae=re[q.id];ae===void 0&&(ae={},re[q.id]=ae);let ge=ae[P];return ge===void 0&&(ge=m(f()),ae[P]=ge),ge}function m(H){let q=[],ne=[],P=[];for(let re=0;re<i;re++)q[re]=0,ne[re]=0,P[re]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:q,enabledAttributes:ne,attributeDivisors:P,object:H,attributes:{},index:null}}function d(H,q,ne,P){let re=c.attributes,ae=q.attributes,ge=0,xe=ne.getAttributes();for(let be in xe)if(xe[be].location>=0){let _e=re[be],Ae=ae[be];if(Ae===void 0&&(be==="instanceMatrix"&&H.instanceMatrix&&(Ae=H.instanceMatrix),be==="instanceColor"&&H.instanceColor&&(Ae=H.instanceColor)),_e===void 0||_e.attribute!==Ae||Ae&&_e.data!==Ae.data)return!0;ge++}return c.attributesNum!==ge||c.index!==P}function C(H,q,ne,P){let re={},ae=q.attributes,ge=0,xe=ne.getAttributes();for(let be in xe)if(xe[be].location>=0){let _e=ae[be];_e===void 0&&(be==="instanceMatrix"&&H.instanceMatrix&&(_e=H.instanceMatrix),be==="instanceColor"&&H.instanceColor&&(_e=H.instanceColor));let Ae={};Ae.attribute=_e,_e&&_e.data&&(Ae.data=_e.data),re[be]=Ae,ge++}c.attributes=re,c.attributesNum=ge,c.index=P}function _(){let H=c.newAttributes;for(let q=0,ne=H.length;q<ne;q++)H[q]=0}function T(H){B(H,0)}function B(H,q){let ne=c.newAttributes,P=c.enabledAttributes,re=c.attributeDivisors;ne[H]=1,P[H]===0&&(s.enableVertexAttribArray(H),P[H]=1),re[H]!==q&&((n.isWebGL2?s:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](H,q),re[H]=q)}function U(){let H=c.newAttributes,q=c.enabledAttributes;for(let ne=0,P=q.length;ne<P;ne++)q[ne]!==H[ne]&&(s.disableVertexAttribArray(ne),q[ne]=0)}function A(H,q,ne,P,re,ae,ge){ge===!0?s.vertexAttribIPointer(H,q,ne,re,ae):s.vertexAttribPointer(H,q,ne,P,re,ae)}function $(H,q,ne,P){if(n.isWebGL2===!1&&(H.isInstancedMesh||P.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;_();let re=P.attributes,ae=ne.getAttributes(),ge=q.defaultAttributeValues;for(let xe in ae){let be=ae[xe];if(be.location>=0){let se=re[xe];if(se===void 0&&(xe==="instanceMatrix"&&H.instanceMatrix&&(se=H.instanceMatrix),xe==="instanceColor"&&H.instanceColor&&(se=H.instanceColor)),se!==void 0){let _e=se.normalized,Ae=se.itemSize,Oe=t.get(se);if(Oe===void 0)continue;let Ge=Oe.buffer,Ke=Oe.type,it=Oe.bytesPerElement,Xe=n.isWebGL2===!0&&(Ke===s.INT||Ke===s.UNSIGNED_INT||se.gpuType===_u);if(se.isInterleavedBufferAttribute){let st=se.data,z=st.stride,j=se.offset;if(st.isInstancedInterleavedBuffer){for(let Z=0;Z<be.locationSize;Z++)B(be.location+Z,st.meshPerAttribute);H.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=st.meshPerAttribute*st.count)}else for(let Z=0;Z<be.locationSize;Z++)T(be.location+Z);s.bindBuffer(s.ARRAY_BUFFER,Ge);for(let Z=0;Z<be.locationSize;Z++)A(be.location+Z,Ae/be.locationSize,Ke,_e,z*it,(j+Ae/be.locationSize*Z)*it,Xe)}else{if(se.isInstancedBufferAttribute){for(let st=0;st<be.locationSize;st++)B(be.location+st,se.meshPerAttribute);H.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let st=0;st<be.locationSize;st++)T(be.location+st);s.bindBuffer(s.ARRAY_BUFFER,Ge);for(let st=0;st<be.locationSize;st++)A(be.location+st,Ae/be.locationSize,Ke,_e,Ae*it,Ae/be.locationSize*st*it,Xe)}}else if(ge!==void 0){let _e=ge[xe];if(_e!==void 0)switch(_e.length){case 2:s.vertexAttrib2fv(be.location,_e);break;case 3:s.vertexAttrib3fv(be.location,_e);break;case 4:s.vertexAttrib4fv(be.location,_e);break;default:s.vertexAttrib1fv(be.location,_e)}}}}U()}function E(){le();for(let H in a){let q=a[H];for(let ne in q){let P=q[ne];for(let re in P)x(P[re].object),delete P[re];delete q[ne]}delete a[H]}}function I(H){if(a[H.id]===void 0)return;let q=a[H.id];for(let ne in q){let P=q[ne];for(let re in P)x(P[re].object),delete P[re];delete q[ne]}delete a[H.id]}function J(H){for(let q in a){let ne=a[q];if(ne[H.id]===void 0)continue;let P=ne[H.id];for(let re in P)x(P[re].object),delete P[re];delete ne[H.id]}}function le(){Se(),h=!0,c!==l&&(c=l,p(c.object))}function Se(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:u,reset:le,resetDefaultState:Se,dispose:E,releaseStatesOfGeometry:I,releaseStatesOfProgram:J,initAttributes:_,enableAttribute:T,disableUnusedAttributes:U}}function Km(s,e,t,n){let i=n.isWebGL2,r;function o(h){r=h}function a(h,u){s.drawArrays(r,h,u),t.update(u,r,1)}function l(h,u,f){if(f===0)return;let p,x;if(i)p=s,x="drawArraysInstanced";else if(p=e.get("ANGLE_instanced_arrays"),x="drawArraysInstancedANGLE",p===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[x](r,h,u,f),t.update(u,r,f)}function c(h,u,f){if(f===0)return;let p=e.get("WEBGL_multi_draw");if(p===null)for(let x=0;x<f;x++)this.render(h[x],u[x]);else{p.multiDrawArraysWEBGL(r,h,0,u,0,f);let x=0;for(let y=0;y<f;y++)x+=u[y];t.update(x,r,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=c}function Qm(s,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){let A=e.get("EXT_texture_filter_anisotropic");n=s.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(A){if(A==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let o=typeof WebGL2RenderingContext<"u"&&s.constructor.name==="WebGL2RenderingContext",a=t.precision!==void 0?t.precision:"highp",l=r(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);let c=o||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,u=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),f=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=s.getParameter(s.MAX_TEXTURE_SIZE),x=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),y=s.getParameter(s.MAX_VERTEX_ATTRIBS),m=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),d=s.getParameter(s.MAX_VARYING_VECTORS),C=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),_=f>0,T=o||e.has("OES_texture_float"),B=_&&T,U=o?s.getParameter(s.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:f,maxTextureSize:p,maxCubemapSize:x,maxAttributes:y,maxVertexUniforms:m,maxVaryings:d,maxFragmentUniforms:C,vertexTextures:_,floatFragmentTextures:T,floatVertexTextures:B,maxSamples:U}}function jm(s){let e=this,t=null,n=0,i=!1,r=!1,o=new zi,a=new St,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let p=u.length!==0||f||n!==0||i;return i=f,n=u.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){t=h(u,f,0)},this.setState=function(u,f,p){let x=u.clippingPlanes,y=u.clipIntersection,m=u.clipShadows,d=s.get(u);if(!i||x===null||x.length===0||r&&!m)r?h(null):c();else{let C=r?0:n,_=C*4,T=d.clippingState||null;l.value=T,T=h(x,f,_,p);for(let B=0;B!==_;++B)T[B]=t[B];d.clippingState=T,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=C}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,f,p,x){let y=u!==null?u.length:0,m=null;if(y!==0){if(m=l.value,x!==!0||m===null){let d=p+y*4,C=f.matrixWorldInverse;a.getNormalMatrix(C),(m===null||m.length<d)&&(m=new Float32Array(d));for(let _=0,T=p;_!==y;++_,T+=4)o.copy(u[_]).applyMatrix4(C,a),o.normal.toArray(m,T),m[T+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,m}}function eg(s){let e=new WeakMap;function t(o,a){return a===bl?o.mapping=nr:a===wl&&(o.mapping=ir),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===bl||a===wl)if(e.has(o)){let l=e.get(o).texture;return t(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new Nl(l.height/2);return c.fromEquirectangularTexture(s,o),e.set(o,c),o.addEventListener("dispose",i),t(c.texture,o.mapping)}else return null}}return o}function i(o){let a=o.target;a.removeEventListener("dispose",i);let l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var or=class extends Zo{constructor(e=-1,t=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-e,o=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},$s=4,Nh=[.125,.215,.35,.446,.526,.582],ms=20,ul=new or,zh=new Ze,fl=null,dl=0,pl=0,ds=(1+Math.sqrt(5))/2,Ws=1/ds,Oh=[new L(1,1,1),new L(-1,1,1),new L(1,1,-1),new L(-1,1,-1),new L(0,ds,Ws),new L(0,ds,-Ws),new L(Ws,0,ds),new L(-Ws,0,ds),new L(ds,Ws,0),new L(-ds,Ws,0)],ar=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){fl=this._renderer.getRenderTarget(),dl=this._renderer.getActiveCubeFace(),pl=this._renderer.getActiveMipmapLevel(),this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Hh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Bh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(fl,dl,pl),e.scissorTest=!1,wo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===nr||e.mapping===ir?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),fl=this._renderer.getRenderTarget(),dl=this._renderer.getActiveCubeFace(),pl=this._renderer.getActiveMipmapLevel();let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Xn,minFilter:Xn,generateMipmaps:!1,type:vi,format:_i,colorSpace:Hi,depthBuffer:!1},i=Fh(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Fh(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=tg(r)),this._blurMaterial=ng(r,e,t)}return i}_compileMaterial(e){let t=new Be(this._lodPlanes[0],e);this._renderer.compile(t,ul)}_sceneToCubeUV(e,t,n,i){let a=new Un(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(zh),h.toneMapping=bi,h.autoClear=!1;let p=new mt({name:"PMREM.Background",side:fn,depthWrite:!1,depthTest:!1}),x=new Be(new On,p),y=!1,m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,y=!0):(p.color.copy(zh),y=!0);for(let d=0;d<6;d++){let C=d%3;C===0?(a.up.set(0,l[d],0),a.lookAt(c[d],0,0)):C===1?(a.up.set(0,0,l[d]),a.lookAt(0,c[d],0)):(a.up.set(0,l[d],0),a.lookAt(0,0,c[d]));let _=this._cubeSize;wo(i,C*_,d>2?_:0,_,_),h.setRenderTarget(i),y&&h.render(x,a),h.render(e,a)}x.geometry.dispose(),x.material.dispose(),h.toneMapping=f,h.autoClear=u,e.background=m}_textureToCubeUV(e,t){let n=this._renderer,i=e.mapping===nr||e.mapping===ir;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Hh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Bh());let r=i?this._cubemapMaterial:this._equirectMaterial,o=new Be(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;let l=this._cubeSize;wo(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,ul)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){let r=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),o=Oh[(i-1)%Oh.length];this._blur(e,i-1,i,r,o)}t.autoClear=n}_blur(e,t,n,i,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",r),this._halfBlur(o,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new Be(this._lodPlanes[i],c),f=c.uniforms,p=this._sizeLods[n]-1,x=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*ms-1),y=r/x,m=isFinite(r)?1+Math.floor(h*y):ms;m>ms&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ms}`);let d=[],C=0;for(let A=0;A<ms;++A){let $=A/y,E=Math.exp(-$*$/2);d.push(E),A===0?C+=E:A<m&&(C+=2*E)}for(let A=0;A<d.length;A++)d[A]=d[A]/C;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=d,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:_}=this;f.dTheta.value=x,f.mipInt.value=_-n;let T=this._sizeLods[i],B=3*T*(i>_-$s?i-_+$s:0),U=4*(this._cubeSize-T);wo(t,B,U,3*T,2*T),l.setRenderTarget(t),l.render(u,ul)}};function tg(s){let e=[],t=[],n=[],i=s,r=s-$s+1+Nh.length;for(let o=0;o<r;o++){let a=Math.pow(2,i);t.push(a);let l=1/a;o>s-$s?l=Nh[o-s+$s-1]:o===0&&(l=0),n.push(l);let c=1/(a-2),h=-c,u=1+c,f=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,x=6,y=3,m=2,d=1,C=new Float32Array(y*x*p),_=new Float32Array(m*x*p),T=new Float32Array(d*x*p);for(let U=0;U<p;U++){let A=U%3*2/3-1,$=U>2?0:-1,E=[A,$,0,A+2/3,$,0,A+2/3,$+1,0,A,$,0,A+2/3,$+1,0,A,$+1,0];C.set(E,y*x*U),_.set(f,m*x*U);let I=[U,U,U,U,U,U];T.set(I,d*x*U)}let B=new Mn;B.setAttribute("position",new yn(C,y)),B.setAttribute("uv",new yn(_,m)),B.setAttribute("faceIndex",new yn(T,d)),e.push(B),i>$s&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Fh(s,e,t){let n=new Wn(s,e,t);return n.texture.mapping=da,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function wo(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function ng(s,e,t){let n=new Float32Array(ms),i=new L(0,1,0);return new nn({name:"SphericalGaussianBlur",defines:{n:ms,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:vc(),fragmentShader:`

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
		`,blending:Ei,depthTest:!1,depthWrite:!1})}function Bh(){return new nn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:vc(),fragmentShader:`

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
		`,blending:Ei,depthTest:!1,depthWrite:!1})}function Hh(){return new nn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:vc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ei,depthTest:!1,depthWrite:!1})}function vc(){return`

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
	`}function ig(s){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){let l=a.mapping,c=l===bl||l===wl,h=l===nr||l===ir;if(c||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let u=e.get(a);return t===null&&(t=new ar(s)),u=c?t.fromEquirectangular(a,u):t.fromCubemap(a,u),e.set(a,u),u.texture}else{if(e.has(a))return e.get(a).texture;{let u=a.image;if(c&&u&&u.height>0||h&&u&&i(u)){t===null&&(t=new ar(s));let f=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,f),a.addEventListener("dispose",r),f.texture}else return null}}}return a}function i(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function sg(s){let e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){let i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function rg(s,e,t,n){let i={},r=new WeakMap;function o(u){let f=u.target;f.index!==null&&e.remove(f.index);for(let x in f.attributes)e.remove(f.attributes[x]);for(let x in f.morphAttributes){let y=f.morphAttributes[x];for(let m=0,d=y.length;m<d;m++)e.remove(y[m])}f.removeEventListener("dispose",o),delete i[f.id];let p=r.get(f);p&&(e.remove(p),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(u,f){return i[f.id]===!0||(f.addEventListener("dispose",o),i[f.id]=!0,t.memory.geometries++),f}function l(u){let f=u.attributes;for(let x in f)e.update(f[x],s.ARRAY_BUFFER);let p=u.morphAttributes;for(let x in p){let y=p[x];for(let m=0,d=y.length;m<d;m++)e.update(y[m],s.ARRAY_BUFFER)}}function c(u){let f=[],p=u.index,x=u.attributes.position,y=0;if(p!==null){let C=p.array;y=p.version;for(let _=0,T=C.length;_<T;_+=3){let B=C[_+0],U=C[_+1],A=C[_+2];f.push(B,U,U,A,A,B)}}else if(x!==void 0){let C=x.array;y=x.version;for(let _=0,T=C.length/3-1;_<T;_+=3){let B=_+0,U=_+1,A=_+2;f.push(B,U,U,A,A,B)}}else return;let m=new(Ru(f)?Yo:qo)(f,1);m.version=y;let d=r.get(u);d&&e.remove(d),r.set(u,m)}function h(u){let f=r.get(u);if(f){let p=u.index;p!==null&&f.version<p.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function og(s,e,t,n){let i=n.isWebGL2,r;function o(p){r=p}let a,l;function c(p){a=p.type,l=p.bytesPerElement}function h(p,x){s.drawElements(r,x,a,p*l),t.update(x,r,1)}function u(p,x,y){if(y===0)return;let m,d;if(i)m=s,d="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),d="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[d](r,x,a,p*l,y),t.update(x,r,y)}function f(p,x,y){if(y===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<y;d++)this.render(p[d]/l,x[d]);else{m.multiDrawElementsWEBGL(r,x,0,a,p,0,y);let d=0;for(let C=0;C<y;C++)d+=x[C];t.update(d,r,1)}}this.setMode=o,this.setIndex=c,this.render=h,this.renderInstances=u,this.renderMultiDraw=f}function ag(s){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case s.TRIANGLES:t.triangles+=a*(r/3);break;case s.LINES:t.lines+=a*(r/2);break;case s.LINE_STRIP:t.lines+=a*(r-1);break;case s.LINE_LOOP:t.lines+=a*r;break;case s.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function lg(s,e){return s[0]-e[0]}function cg(s,e){return Math.abs(e[1])-Math.abs(s[1])}function hg(s,e,t){let n={},i=new Float32Array(8),r=new WeakMap,o=new Zt,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,h,u){let f=c.morphTargetInfluences;if(e.isWebGL2===!0){let p=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,x=p!==void 0?p.length:0,y=r.get(h);if(y===void 0||y.count!==x){let H=function(){le.dispose(),r.delete(h),h.removeEventListener("dispose",H)};y!==void 0&&y.texture.dispose();let C=h.morphAttributes.position!==void 0,_=h.morphAttributes.normal!==void 0,T=h.morphAttributes.color!==void 0,B=h.morphAttributes.position||[],U=h.morphAttributes.normal||[],A=h.morphAttributes.color||[],$=0;C===!0&&($=1),_===!0&&($=2),T===!0&&($=3);let E=h.attributes.position.count*$,I=1;E>e.maxTextureSize&&(I=Math.ceil(E/e.maxTextureSize),E=e.maxTextureSize);let J=new Float32Array(E*I*4*x),le=new Wo(J,E,I,x);le.type=Qi,le.needsUpdate=!0;let Se=$*4;for(let q=0;q<x;q++){let ne=B[q],P=U[q],re=A[q],ae=E*I*4*q;for(let ge=0;ge<ne.count;ge++){let xe=ge*Se;C===!0&&(o.fromBufferAttribute(ne,ge),J[ae+xe+0]=o.x,J[ae+xe+1]=o.y,J[ae+xe+2]=o.z,J[ae+xe+3]=0),_===!0&&(o.fromBufferAttribute(P,ge),J[ae+xe+4]=o.x,J[ae+xe+5]=o.y,J[ae+xe+6]=o.z,J[ae+xe+7]=0),T===!0&&(o.fromBufferAttribute(re,ge),J[ae+xe+8]=o.x,J[ae+xe+9]=o.y,J[ae+xe+10]=o.z,J[ae+xe+11]=re.itemSize===4?o.w:1)}}y={count:x,texture:le,size:new Me(E,I)},r.set(h,y),h.addEventListener("dispose",H)}let m=0;for(let C=0;C<f.length;C++)m+=f[C];let d=h.morphTargetsRelative?1:1-m;u.getUniforms().setValue(s,"morphTargetBaseInfluence",d),u.getUniforms().setValue(s,"morphTargetInfluences",f),u.getUniforms().setValue(s,"morphTargetsTexture",y.texture,t),u.getUniforms().setValue(s,"morphTargetsTextureSize",y.size)}else{let p=f===void 0?0:f.length,x=n[h.id];if(x===void 0||x.length!==p){x=[];for(let _=0;_<p;_++)x[_]=[_,0];n[h.id]=x}for(let _=0;_<p;_++){let T=x[_];T[0]=_,T[1]=f[_]}x.sort(cg);for(let _=0;_<8;_++)_<p&&x[_][1]?(a[_][0]=x[_][0],a[_][1]=x[_][1]):(a[_][0]=Number.MAX_SAFE_INTEGER,a[_][1]=0);a.sort(lg);let y=h.morphAttributes.position,m=h.morphAttributes.normal,d=0;for(let _=0;_<8;_++){let T=a[_],B=T[0],U=T[1];B!==Number.MAX_SAFE_INTEGER&&U?(y&&h.getAttribute("morphTarget"+_)!==y[B]&&h.setAttribute("morphTarget"+_,y[B]),m&&h.getAttribute("morphNormal"+_)!==m[B]&&h.setAttribute("morphNormal"+_,m[B]),i[_]=U,d+=U):(y&&h.hasAttribute("morphTarget"+_)===!0&&h.deleteAttribute("morphTarget"+_),m&&h.hasAttribute("morphNormal"+_)===!0&&h.deleteAttribute("morphNormal"+_),i[_]=0)}let C=h.morphTargetsRelative?1:1-d;u.getUniforms().setValue(s,"morphTargetBaseInfluence",C),u.getUniforms().setValue(s,"morphTargetInfluences",i)}}return{update:l}}function ug(s,e,t,n){let i=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,u=e.get(l,h);if(i.get(u)!==c&&(e.update(u),i.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(t.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){let f=l.skeleton;i.get(f)!==c&&(f.update(),i.set(f,c))}return u}function o(){i=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}var $o=class extends si{constructor(e,t,n,i,r,o,a,l,c,h){if(h=h!==void 0?h:_s,h!==_s&&h!==sr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===_s&&(n=Ki),n===void 0&&h===sr&&(n=xs),super(null,i,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Vn,this.minFilter=l!==void 0?l:Vn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Lu=new si,Uu=new $o(1,1);Uu.compareFunction=Au;var Du=new Wo,Nu=new Ul,zu=new Jo,kh=[],Vh=[],Gh=new Float32Array(16),Wh=new Float32Array(9),Xh=new Float32Array(4);function fr(s,e,t){let n=s[0];if(n<=0||n>0)return s;let i=e*t,r=kh[i];if(r===void 0&&(r=new Float32Array(i),kh[i]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,s[o].toArray(r,a)}return r}function dn(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function pn(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function ma(s,e){let t=Vh[e];t===void 0&&(t=new Int32Array(e),Vh[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function fg(s,e){let t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function dg(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dn(t,e))return;s.uniform2fv(this.addr,e),pn(t,e)}}function pg(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(dn(t,e))return;s.uniform3fv(this.addr,e),pn(t,e)}}function mg(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dn(t,e))return;s.uniform4fv(this.addr,e),pn(t,e)}}function gg(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(dn(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),pn(t,e)}else{if(dn(t,n))return;Xh.set(n),s.uniformMatrix2fv(this.addr,!1,Xh),pn(t,n)}}function xg(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(dn(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),pn(t,e)}else{if(dn(t,n))return;Wh.set(n),s.uniformMatrix3fv(this.addr,!1,Wh),pn(t,n)}}function _g(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(dn(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),pn(t,e)}else{if(dn(t,n))return;Gh.set(n),s.uniformMatrix4fv(this.addr,!1,Gh),pn(t,n)}}function vg(s,e){let t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function yg(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dn(t,e))return;s.uniform2iv(this.addr,e),pn(t,e)}}function Mg(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(dn(t,e))return;s.uniform3iv(this.addr,e),pn(t,e)}}function Sg(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dn(t,e))return;s.uniform4iv(this.addr,e),pn(t,e)}}function Eg(s,e){let t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function bg(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dn(t,e))return;s.uniform2uiv(this.addr,e),pn(t,e)}}function wg(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(dn(t,e))return;s.uniform3uiv(this.addr,e),pn(t,e)}}function Tg(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dn(t,e))return;s.uniform4uiv(this.addr,e),pn(t,e)}}function Ag(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r=this.type===s.SAMPLER_2D_SHADOW?Uu:Lu;t.setTexture2D(e||r,i)}function Rg(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Nu,i)}function Cg(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||zu,i)}function Pg(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Du,i)}function Ig(s){switch(s){case 5126:return fg;case 35664:return dg;case 35665:return pg;case 35666:return mg;case 35674:return gg;case 35675:return xg;case 35676:return _g;case 5124:case 35670:return vg;case 35667:case 35671:return yg;case 35668:case 35672:return Mg;case 35669:case 35673:return Sg;case 5125:return Eg;case 36294:return bg;case 36295:return wg;case 36296:return Tg;case 35678:case 36198:case 36298:case 36306:case 35682:return Ag;case 35679:case 36299:case 36307:return Rg;case 35680:case 36300:case 36308:case 36293:return Cg;case 36289:case 36303:case 36311:case 36292:return Pg}}function Lg(s,e){s.uniform1fv(this.addr,e)}function Ug(s,e){let t=fr(e,this.size,2);s.uniform2fv(this.addr,t)}function Dg(s,e){let t=fr(e,this.size,3);s.uniform3fv(this.addr,t)}function Ng(s,e){let t=fr(e,this.size,4);s.uniform4fv(this.addr,t)}function zg(s,e){let t=fr(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function Og(s,e){let t=fr(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function Fg(s,e){let t=fr(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function Bg(s,e){s.uniform1iv(this.addr,e)}function Hg(s,e){s.uniform2iv(this.addr,e)}function kg(s,e){s.uniform3iv(this.addr,e)}function Vg(s,e){s.uniform4iv(this.addr,e)}function Gg(s,e){s.uniform1uiv(this.addr,e)}function Wg(s,e){s.uniform2uiv(this.addr,e)}function Xg(s,e){s.uniform3uiv(this.addr,e)}function qg(s,e){s.uniform4uiv(this.addr,e)}function Yg(s,e,t){let n=this.cache,i=e.length,r=ma(t,i);dn(n,r)||(s.uniform1iv(this.addr,r),pn(n,r));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||Lu,r[o])}function Zg(s,e,t){let n=this.cache,i=e.length,r=ma(t,i);dn(n,r)||(s.uniform1iv(this.addr,r),pn(n,r));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||Nu,r[o])}function Jg(s,e,t){let n=this.cache,i=e.length,r=ma(t,i);dn(n,r)||(s.uniform1iv(this.addr,r),pn(n,r));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||zu,r[o])}function $g(s,e,t){let n=this.cache,i=e.length,r=ma(t,i);dn(n,r)||(s.uniform1iv(this.addr,r),pn(n,r));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||Du,r[o])}function Kg(s){switch(s){case 5126:return Lg;case 35664:return Ug;case 35665:return Dg;case 35666:return Ng;case 35674:return zg;case 35675:return Og;case 35676:return Fg;case 5124:case 35670:return Bg;case 35667:case 35671:return Hg;case 35668:case 35672:return kg;case 35669:case 35673:return Vg;case 5125:return Gg;case 36294:return Wg;case 36295:return Xg;case 36296:return qg;case 35678:case 36198:case 36298:case 36306:case 35682:return Yg;case 35679:case 36299:case 36307:return Zg;case 35680:case 36300:case 36308:case 36293:return Jg;case 36289:case 36303:case 36311:case 36292:return $g}}var zl=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Ig(t.type)}},Ol=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Kg(t.type)}},Fl=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let i=this.seq;for(let r=0,o=i.length;r!==o;++r){let a=i[r];a.setValue(e,t[a.id],n)}}},ml=/(\w+)(\])?(\[|\.)?/g;function qh(s,e){s.seq.push(e),s.map[e.id]=e}function Qg(s,e,t){let n=s.name,i=n.length;for(ml.lastIndex=0;;){let r=ml.exec(n),o=ml.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){qh(t,c===void 0?new zl(a,s,e):new Ol(a,s,e));break}else{let u=t.map[a];u===void 0&&(u=new Fl(a),qh(t,u)),t=u}}}var tr=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){let r=e.getActiveUniform(t,i),o=e.getUniformLocation(t,r.name);Qg(r,o,this)}}setValue(e,t,n,i){let r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){let i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,t){let n=[];for(let i=0,r=e.length;i!==r;++i){let o=e[i];o.id in t&&n.push(o)}return n}};function Yh(s,e,t){let n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}var jg=37297,e0=0;function t0(s,e){let t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=i;o<r;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function n0(s){let e=Lt.getPrimaries(Lt.workingColorSpace),t=Lt.getPrimaries(s),n;switch(e===t?n="":e===Bo&&t===Fo?n="LinearDisplayP3ToLinearSRGB":e===Fo&&t===Bo&&(n="LinearSRGBToLinearDisplayP3"),s){case Hi:case pa:return[n,"LinearTransferOETF"];case It:case _c:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),[n,"LinearTransferOETF"]}}function Zh(s,e,t){let n=s.getShaderParameter(e,s.COMPILE_STATUS),i=s.getShaderInfoLog(e).trim();if(n&&i==="")return"";let r=/ERROR: 0:(\d+)/.exec(i);if(r){let o=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+t0(s.getShaderSource(e),o)}else return i}function i0(s,e){let t=n0(e);return`vec4 ${s}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function s0(s,e){let t;switch(e){case fc:t="Linear";break;case dc:t="Reinhard";break;case pc:t="OptimizedCineon";break;case mc:t="ACESFilmic";break;case gc:t="AgX";break;case Rf:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function r0(s){return[s.extensionDerivatives||s.envMapCubeUVHeight||s.bumpMap||s.normalMapTangentSpace||s.clearcoatNormalMap||s.flatShading||s.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(s.extensionFragDepth||s.logarithmicDepthBuffer)&&s.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",s.extensionDrawBuffers&&s.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(s.extensionShaderTextureLOD||s.envMap||s.transmission)&&s.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ks).join(`
`)}function o0(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Ks).join(`
`)}function a0(s){let e=[];for(let t in s){let n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function l0(s,e){let t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let r=s.getActiveAttrib(e,i),o=r.name,a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:s.getAttribLocation(e,o),locationSize:a}}return t}function Ks(s){return s!==""}function Jh(s,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function $h(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var c0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Bl(s){return s.replace(c0,u0)}var h0=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function u0(s,e){let t=_t[e];if(t===void 0){let n=h0.get(e);if(n!==void 0)t=_t[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Bl(t)}var f0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Kh(s){return s.replace(f0,d0)}function d0(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Qh(s){let e="precision "+s.precision+` float;
precision `+s.precision+" int;";return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function p0(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===mu?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===tf?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Ni&&(e="SHADOWMAP_TYPE_VSM"),e}function m0(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case nr:case ir:e="ENVMAP_TYPE_CUBE";break;case da:e="ENVMAP_TYPE_CUBE_UV";break}return e}function g0(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case ir:e="ENVMAP_MODE_REFRACTION";break}return e}function x0(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case gu:e="ENVMAP_BLENDING_MULTIPLY";break;case Tf:e="ENVMAP_BLENDING_MIX";break;case Af:e="ENVMAP_BLENDING_ADD";break}return e}function _0(s){let e=s.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function v0(s,e,t,n){let i=s.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=p0(t),c=m0(t),h=g0(t),u=x0(t),f=_0(t),p=t.isWebGL2?"":r0(t),x=o0(t),y=a0(r),m=i.createProgram(),d,C,_=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y].filter(Ks).join(`
`),d.length>0&&(d+=`
`),C=[p,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y].filter(Ks).join(`
`),C.length>0&&(C+=`
`)):(d=[Qh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ks).join(`
`),C=[p,Qh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==bi?"#define TONE_MAPPING":"",t.toneMapping!==bi?_t.tonemapping_pars_fragment:"",t.toneMapping!==bi?s0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",_t.colorspace_pars_fragment,i0("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ks).join(`
`)),o=Bl(o),o=Jh(o,t),o=$h(o,t),a=Bl(a),a=Jh(a,t),a=$h(a,t),o=Kh(o),a=Kh(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,d=[x,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,C=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===xh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===xh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+C);let T=_+d+o,B=_+C+a,U=Yh(i,i.VERTEX_SHADER,T),A=Yh(i,i.FRAGMENT_SHADER,B);i.attachShader(m,U),i.attachShader(m,A),t.index0AttributeName!==void 0?i.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(m,0,"position"),i.linkProgram(m);function $(le){if(s.debug.checkShaderErrors){let Se=i.getProgramInfoLog(m).trim(),H=i.getShaderInfoLog(U).trim(),q=i.getShaderInfoLog(A).trim(),ne=!0,P=!0;if(i.getProgramParameter(m,i.LINK_STATUS)===!1)if(ne=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,m,U,A);else{let re=Zh(i,U,"vertex"),ae=Zh(i,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(m,i.VALIDATE_STATUS)+`

Program Info Log: `+Se+`
`+re+`
`+ae)}else Se!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Se):(H===""||q==="")&&(P=!1);P&&(le.diagnostics={runnable:ne,programLog:Se,vertexShader:{log:H,prefix:d},fragmentShader:{log:q,prefix:C}})}i.deleteShader(U),i.deleteShader(A),E=new tr(i,m),I=l0(i,m)}let E;this.getUniforms=function(){return E===void 0&&$(this),E};let I;this.getAttributes=function(){return I===void 0&&$(this),I};let J=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return J===!1&&(J=i.getProgramParameter(m,jg)),J},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=e0++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=U,this.fragmentShader=A,this}var y0=0,Hl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new kl(e),t.set(e,n)),n}},kl=class{constructor(e){this.id=y0++,this.code=e,this.usedTimes=0}};function M0(s,e,t,n,i,r,o){let a=new Lr,l=new Hl,c=[],h=i.isWebGL2,u=i.logarithmicDepthBuffer,f=i.vertexTextures,p=i.precision,x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(E){return E===0?"uv":`uv${E}`}function m(E,I,J,le,Se){let H=le.fog,q=Se.geometry,ne=E.isMeshStandardMaterial?le.environment:null,P=(E.isMeshStandardMaterial?t:e).get(E.envMap||ne),re=P&&P.mapping===da?P.image.height:null,ae=x[E.type];E.precision!==null&&(p=i.getMaxPrecision(E.precision),p!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",p,"instead."));let ge=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,xe=ge!==void 0?ge.length:0,be=0;q.morphAttributes.position!==void 0&&(be=1),q.morphAttributes.normal!==void 0&&(be=2),q.morphAttributes.color!==void 0&&(be=3);let se,_e,Ae,Oe;if(ae){let qt=Si[ae];se=qt.vertexShader,_e=qt.fragmentShader}else se=E.vertexShader,_e=E.fragmentShader,l.update(E),Ae=l.getVertexShaderID(E),Oe=l.getFragmentShaderID(E);let Ge=s.getRenderTarget(),Ke=Se.isInstancedMesh===!0,it=Se.isBatchedMesh===!0,Xe=!!E.map,st=!!E.matcap,z=!!P,j=!!E.aoMap,Z=!!E.lightMap,k=!!E.bumpMap,K=!!E.normalMap,ve=!!E.displacementMap,de=!!E.emissiveMap,S=!!E.metalnessMap,M=!!E.roughnessMap,G=E.anisotropy>0,ce=E.clearcoat>0,pe=E.iridescence>0,fe=E.sheen>0,Ue=E.transmission>0,ue=G&&!!E.anisotropyMap,ze=ce&&!!E.clearcoatMap,qe=ce&&!!E.clearcoatNormalMap,lt=ce&&!!E.clearcoatRoughnessMap,ye=pe&&!!E.iridescenceMap,Et=pe&&!!E.iridescenceThicknessMap,ct=fe&&!!E.sheenColorMap,je=fe&&!!E.sheenRoughnessMap,Je=!!E.specularMap,He=!!E.specularColorMap,et=!!E.specularIntensityMap,Tt=Ue&&!!E.transmissionMap,Dt=Ue&&!!E.thicknessMap,Te=!!E.gradientMap,Ee=!!E.alphaMap,F=E.alphaTest>0,Pe=!!E.alphaHash,Re=!!E.extensions,nt=!!q.attributes.uv1,Qe=!!q.attributes.uv2,yt=!!q.attributes.uv3,At=bi;return E.toneMapped&&(Ge===null||Ge.isXRRenderTarget===!0)&&(At=s.toneMapping),{isWebGL2:h,shaderID:ae,shaderType:E.type,shaderName:E.name,vertexShader:se,fragmentShader:_e,defines:E.defines,customVertexShaderID:Ae,customFragmentShaderID:Oe,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:p,batching:it,instancing:Ke,instancingColor:Ke&&Se.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:Ge===null?s.outputColorSpace:Ge.isXRRenderTarget===!0?Ge.texture.colorSpace:Hi,map:Xe,matcap:st,envMap:z,envMapMode:z&&P.mapping,envMapCubeUVHeight:re,aoMap:j,lightMap:Z,bumpMap:k,normalMap:K,displacementMap:f&&ve,emissiveMap:de,normalMapObjectSpace:K&&E.normalMapType===Hf,normalMapTangentSpace:K&&E.normalMapType===Tu,metalnessMap:S,roughnessMap:M,anisotropy:G,anisotropyMap:ue,clearcoat:ce,clearcoatMap:ze,clearcoatNormalMap:qe,clearcoatRoughnessMap:lt,iridescence:pe,iridescenceMap:ye,iridescenceThicknessMap:Et,sheen:fe,sheenColorMap:ct,sheenRoughnessMap:je,specularMap:Je,specularColorMap:He,specularIntensityMap:et,transmission:Ue,transmissionMap:Tt,thicknessMap:Dt,gradientMap:Te,opaque:E.transparent===!1&&E.blending===js,alphaMap:Ee,alphaTest:F,alphaHash:Pe,combine:E.combine,mapUv:Xe&&y(E.map.channel),aoMapUv:j&&y(E.aoMap.channel),lightMapUv:Z&&y(E.lightMap.channel),bumpMapUv:k&&y(E.bumpMap.channel),normalMapUv:K&&y(E.normalMap.channel),displacementMapUv:ve&&y(E.displacementMap.channel),emissiveMapUv:de&&y(E.emissiveMap.channel),metalnessMapUv:S&&y(E.metalnessMap.channel),roughnessMapUv:M&&y(E.roughnessMap.channel),anisotropyMapUv:ue&&y(E.anisotropyMap.channel),clearcoatMapUv:ze&&y(E.clearcoatMap.channel),clearcoatNormalMapUv:qe&&y(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:lt&&y(E.clearcoatRoughnessMap.channel),iridescenceMapUv:ye&&y(E.iridescenceMap.channel),iridescenceThicknessMapUv:Et&&y(E.iridescenceThicknessMap.channel),sheenColorMapUv:ct&&y(E.sheenColorMap.channel),sheenRoughnessMapUv:je&&y(E.sheenRoughnessMap.channel),specularMapUv:Je&&y(E.specularMap.channel),specularColorMapUv:He&&y(E.specularColorMap.channel),specularIntensityMapUv:et&&y(E.specularIntensityMap.channel),transmissionMapUv:Tt&&y(E.transmissionMap.channel),thicknessMapUv:Dt&&y(E.thicknessMap.channel),alphaMapUv:Ee&&y(E.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&(K||G),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,vertexUv1s:nt,vertexUv2s:Qe,vertexUv3s:yt,pointsUvs:Se.isPoints===!0&&!!q.attributes.uv&&(Xe||Ee),fog:!!H,useFog:E.fog===!0,fogExp2:H&&H.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:Se.isSkinnedMesh===!0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:xe,morphTextureStride:be,numDirLights:I.directional.length,numPointLights:I.point.length,numSpotLights:I.spot.length,numSpotLightMaps:I.spotLightMap.length,numRectAreaLights:I.rectArea.length,numHemiLights:I.hemi.length,numDirLightShadows:I.directionalShadowMap.length,numPointLightShadows:I.pointShadowMap.length,numSpotLightShadows:I.spotShadowMap.length,numSpotLightShadowsWithMaps:I.numSpotLightShadowsWithMaps,numLightProbes:I.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:E.dithering,shadowMapEnabled:s.shadowMap.enabled&&J.length>0,shadowMapType:s.shadowMap.type,toneMapping:At,useLegacyLights:s._useLegacyLights,decodeVideoTexture:Xe&&E.map.isVideoTexture===!0&&Lt.getTransfer(E.map.colorSpace)===Ht,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===Gn,flipSided:E.side===fn,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionDerivatives:Re&&E.extensions.derivatives===!0,extensionFragDepth:Re&&E.extensions.fragDepth===!0,extensionDrawBuffers:Re&&E.extensions.drawBuffers===!0,extensionShaderTextureLOD:Re&&E.extensions.shaderTextureLOD===!0,extensionClipCullDistance:Re&&E.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()}}function d(E){let I=[];if(E.shaderID?I.push(E.shaderID):(I.push(E.customVertexShaderID),I.push(E.customFragmentShaderID)),E.defines!==void 0)for(let J in E.defines)I.push(J),I.push(E.defines[J]);return E.isRawShaderMaterial===!1&&(C(I,E),_(I,E),I.push(s.outputColorSpace)),I.push(E.customProgramCacheKey),I.join()}function C(E,I){E.push(I.precision),E.push(I.outputColorSpace),E.push(I.envMapMode),E.push(I.envMapCubeUVHeight),E.push(I.mapUv),E.push(I.alphaMapUv),E.push(I.lightMapUv),E.push(I.aoMapUv),E.push(I.bumpMapUv),E.push(I.normalMapUv),E.push(I.displacementMapUv),E.push(I.emissiveMapUv),E.push(I.metalnessMapUv),E.push(I.roughnessMapUv),E.push(I.anisotropyMapUv),E.push(I.clearcoatMapUv),E.push(I.clearcoatNormalMapUv),E.push(I.clearcoatRoughnessMapUv),E.push(I.iridescenceMapUv),E.push(I.iridescenceThicknessMapUv),E.push(I.sheenColorMapUv),E.push(I.sheenRoughnessMapUv),E.push(I.specularMapUv),E.push(I.specularColorMapUv),E.push(I.specularIntensityMapUv),E.push(I.transmissionMapUv),E.push(I.thicknessMapUv),E.push(I.combine),E.push(I.fogExp2),E.push(I.sizeAttenuation),E.push(I.morphTargetsCount),E.push(I.morphAttributeCount),E.push(I.numDirLights),E.push(I.numPointLights),E.push(I.numSpotLights),E.push(I.numSpotLightMaps),E.push(I.numHemiLights),E.push(I.numRectAreaLights),E.push(I.numDirLightShadows),E.push(I.numPointLightShadows),E.push(I.numSpotLightShadows),E.push(I.numSpotLightShadowsWithMaps),E.push(I.numLightProbes),E.push(I.shadowMapType),E.push(I.toneMapping),E.push(I.numClippingPlanes),E.push(I.numClipIntersection),E.push(I.depthPacking)}function _(E,I){a.disableAll(),I.isWebGL2&&a.enable(0),I.supportsVertexTextures&&a.enable(1),I.instancing&&a.enable(2),I.instancingColor&&a.enable(3),I.matcap&&a.enable(4),I.envMap&&a.enable(5),I.normalMapObjectSpace&&a.enable(6),I.normalMapTangentSpace&&a.enable(7),I.clearcoat&&a.enable(8),I.iridescence&&a.enable(9),I.alphaTest&&a.enable(10),I.vertexColors&&a.enable(11),I.vertexAlphas&&a.enable(12),I.vertexUv1s&&a.enable(13),I.vertexUv2s&&a.enable(14),I.vertexUv3s&&a.enable(15),I.vertexTangents&&a.enable(16),I.anisotropy&&a.enable(17),I.alphaHash&&a.enable(18),I.batching&&a.enable(19),E.push(a.mask),a.disableAll(),I.fog&&a.enable(0),I.useFog&&a.enable(1),I.flatShading&&a.enable(2),I.logarithmicDepthBuffer&&a.enable(3),I.skinning&&a.enable(4),I.morphTargets&&a.enable(5),I.morphNormals&&a.enable(6),I.morphColors&&a.enable(7),I.premultipliedAlpha&&a.enable(8),I.shadowMapEnabled&&a.enable(9),I.useLegacyLights&&a.enable(10),I.doubleSided&&a.enable(11),I.flipSided&&a.enable(12),I.useDepthPacking&&a.enable(13),I.dithering&&a.enable(14),I.transmission&&a.enable(15),I.sheen&&a.enable(16),I.opaque&&a.enable(17),I.pointsUvs&&a.enable(18),I.decodeVideoTexture&&a.enable(19),E.push(a.mask)}function T(E){let I=x[E.type],J;if(I){let le=Si[I];J=is.clone(le.uniforms)}else J=E.uniforms;return J}function B(E,I){let J;for(let le=0,Se=c.length;le<Se;le++){let H=c[le];if(H.cacheKey===I){J=H,++J.usedTimes;break}}return J===void 0&&(J=new v0(s,I,E,r),c.push(J)),J}function U(E){if(--E.usedTimes===0){let I=c.indexOf(E);c[I]=c[c.length-1],c.pop(),E.destroy()}}function A(E){l.remove(E)}function $(){l.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:T,acquireProgram:B,releaseProgram:U,releaseShaderCache:A,programs:c,dispose:$}}function S0(){let s=new WeakMap;function e(r){let o=s.get(r);return o===void 0&&(o={},s.set(r,o)),o}function t(r){s.delete(r)}function n(r,o,a){s.get(r)[o]=a}function i(){s=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function E0(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function jh(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function eu(){let s=[],e=0,t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function o(u,f,p,x,y,m){let d=s[e];return d===void 0?(d={id:u.id,object:u,geometry:f,material:p,groupOrder:x,renderOrder:u.renderOrder,z:y,group:m},s[e]=d):(d.id=u.id,d.object=u,d.geometry=f,d.material=p,d.groupOrder=x,d.renderOrder=u.renderOrder,d.z=y,d.group=m),e++,d}function a(u,f,p,x,y,m){let d=o(u,f,p,x,y,m);p.transmission>0?n.push(d):p.transparent===!0?i.push(d):t.push(d)}function l(u,f,p,x,y,m){let d=o(u,f,p,x,y,m);p.transmission>0?n.unshift(d):p.transparent===!0?i.unshift(d):t.unshift(d)}function c(u,f){t.length>1&&t.sort(u||E0),n.length>1&&n.sort(f||jh),i.length>1&&i.sort(f||jh)}function h(){for(let u=e,f=s.length;u<f;u++){let p=s[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:a,unshift:l,finish:h,sort:c}}function b0(){let s=new WeakMap;function e(n,i){let r=s.get(n),o;return r===void 0?(o=new eu,s.set(n,[o])):i>=r.length?(o=new eu,r.push(o)):o=r[i],o}function t(){s=new WeakMap}return{get:e,dispose:t}}function w0(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new L,color:new Ze};break;case"SpotLight":t={position:new L,direction:new L,color:new Ze,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new L,color:new Ze,distance:0,decay:0};break;case"HemisphereLight":t={direction:new L,skyColor:new Ze,groundColor:new Ze};break;case"RectAreaLight":t={color:new Ze,position:new L,halfWidth:new L,halfHeight:new L};break}return s[e.id]=t,t}}}function T0(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Me};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Me};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Me,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}var A0=0;function R0(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function C0(s,e){let t=new w0,n=T0(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)i.probe.push(new L);let r=new L,o=new vt,a=new vt;function l(h,u){let f=0,p=0,x=0;for(let le=0;le<9;le++)i.probe[le].set(0,0,0);let y=0,m=0,d=0,C=0,_=0,T=0,B=0,U=0,A=0,$=0,E=0;h.sort(R0);let I=u===!0?Math.PI:1;for(let le=0,Se=h.length;le<Se;le++){let H=h[le],q=H.color,ne=H.intensity,P=H.distance,re=H.shadow&&H.shadow.map?H.shadow.map.texture:null;if(H.isAmbientLight)f+=q.r*ne*I,p+=q.g*ne*I,x+=q.b*ne*I;else if(H.isLightProbe){for(let ae=0;ae<9;ae++)i.probe[ae].addScaledVector(H.sh.coefficients[ae],ne);E++}else if(H.isDirectionalLight){let ae=t.get(H);if(ae.color.copy(H.color).multiplyScalar(H.intensity*I),H.castShadow){let ge=H.shadow,xe=n.get(H);xe.shadowBias=ge.bias,xe.shadowNormalBias=ge.normalBias,xe.shadowRadius=ge.radius,xe.shadowMapSize=ge.mapSize,i.directionalShadow[y]=xe,i.directionalShadowMap[y]=re,i.directionalShadowMatrix[y]=H.shadow.matrix,T++}i.directional[y]=ae,y++}else if(H.isSpotLight){let ae=t.get(H);ae.position.setFromMatrixPosition(H.matrixWorld),ae.color.copy(q).multiplyScalar(ne*I),ae.distance=P,ae.coneCos=Math.cos(H.angle),ae.penumbraCos=Math.cos(H.angle*(1-H.penumbra)),ae.decay=H.decay,i.spot[d]=ae;let ge=H.shadow;if(H.map&&(i.spotLightMap[A]=H.map,A++,ge.updateMatrices(H),H.castShadow&&$++),i.spotLightMatrix[d]=ge.matrix,H.castShadow){let xe=n.get(H);xe.shadowBias=ge.bias,xe.shadowNormalBias=ge.normalBias,xe.shadowRadius=ge.radius,xe.shadowMapSize=ge.mapSize,i.spotShadow[d]=xe,i.spotShadowMap[d]=re,U++}d++}else if(H.isRectAreaLight){let ae=t.get(H);ae.color.copy(q).multiplyScalar(ne),ae.halfWidth.set(H.width*.5,0,0),ae.halfHeight.set(0,H.height*.5,0),i.rectArea[C]=ae,C++}else if(H.isPointLight){let ae=t.get(H);if(ae.color.copy(H.color).multiplyScalar(H.intensity*I),ae.distance=H.distance,ae.decay=H.decay,H.castShadow){let ge=H.shadow,xe=n.get(H);xe.shadowBias=ge.bias,xe.shadowNormalBias=ge.normalBias,xe.shadowRadius=ge.radius,xe.shadowMapSize=ge.mapSize,xe.shadowCameraNear=ge.camera.near,xe.shadowCameraFar=ge.camera.far,i.pointShadow[m]=xe,i.pointShadowMap[m]=re,i.pointShadowMatrix[m]=H.shadow.matrix,B++}i.point[m]=ae,m++}else if(H.isHemisphereLight){let ae=t.get(H);ae.skyColor.copy(H.color).multiplyScalar(ne*I),ae.groundColor.copy(H.groundColor).multiplyScalar(ne*I),i.hemi[_]=ae,_++}}C>0&&(e.isWebGL2?s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Ne.LTC_FLOAT_1,i.rectAreaLTC2=Ne.LTC_FLOAT_2):(i.rectAreaLTC1=Ne.LTC_HALF_1,i.rectAreaLTC2=Ne.LTC_HALF_2):s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Ne.LTC_FLOAT_1,i.rectAreaLTC2=Ne.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=Ne.LTC_HALF_1,i.rectAreaLTC2=Ne.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=f,i.ambient[1]=p,i.ambient[2]=x;let J=i.hash;(J.directionalLength!==y||J.pointLength!==m||J.spotLength!==d||J.rectAreaLength!==C||J.hemiLength!==_||J.numDirectionalShadows!==T||J.numPointShadows!==B||J.numSpotShadows!==U||J.numSpotMaps!==A||J.numLightProbes!==E)&&(i.directional.length=y,i.spot.length=d,i.rectArea.length=C,i.point.length=m,i.hemi.length=_,i.directionalShadow.length=T,i.directionalShadowMap.length=T,i.pointShadow.length=B,i.pointShadowMap.length=B,i.spotShadow.length=U,i.spotShadowMap.length=U,i.directionalShadowMatrix.length=T,i.pointShadowMatrix.length=B,i.spotLightMatrix.length=U+A-$,i.spotLightMap.length=A,i.numSpotLightShadowsWithMaps=$,i.numLightProbes=E,J.directionalLength=y,J.pointLength=m,J.spotLength=d,J.rectAreaLength=C,J.hemiLength=_,J.numDirectionalShadows=T,J.numPointShadows=B,J.numSpotShadows=U,J.numSpotMaps=A,J.numLightProbes=E,i.version=A0++)}function c(h,u){let f=0,p=0,x=0,y=0,m=0,d=u.matrixWorldInverse;for(let C=0,_=h.length;C<_;C++){let T=h[C];if(T.isDirectionalLight){let B=i.directional[f];B.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),B.direction.sub(r),B.direction.transformDirection(d),f++}else if(T.isSpotLight){let B=i.spot[x];B.position.setFromMatrixPosition(T.matrixWorld),B.position.applyMatrix4(d),B.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),B.direction.sub(r),B.direction.transformDirection(d),x++}else if(T.isRectAreaLight){let B=i.rectArea[y];B.position.setFromMatrixPosition(T.matrixWorld),B.position.applyMatrix4(d),a.identity(),o.copy(T.matrixWorld),o.premultiply(d),a.extractRotation(o),B.halfWidth.set(T.width*.5,0,0),B.halfHeight.set(0,T.height*.5,0),B.halfWidth.applyMatrix4(a),B.halfHeight.applyMatrix4(a),y++}else if(T.isPointLight){let B=i.point[p];B.position.setFromMatrixPosition(T.matrixWorld),B.position.applyMatrix4(d),p++}else if(T.isHemisphereLight){let B=i.hemi[m];B.direction.setFromMatrixPosition(T.matrixWorld),B.direction.transformDirection(d),m++}}}return{setup:l,setupView:c,state:i}}function tu(s,e){let t=new C0(s,e),n=[],i=[];function r(){n.length=0,i.length=0}function o(u){n.push(u)}function a(u){i.push(u)}function l(u){t.setup(n,u)}function c(u){t.setupView(n,u)}return{init:r,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function P0(s,e){let t=new WeakMap;function n(r,o=0){let a=t.get(r),l;return a===void 0?(l=new tu(s,e),t.set(r,[l])):o>=a.length?(l=new tu(s,e),a.push(l)):l=a[o],l}function i(){t=new WeakMap}return{get:n,dispose:i}}var Vl=class extends ns{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ff,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Gl=class extends ns{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},I0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,L0=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function U0(s,e,t){let n=new Ur,i=new Me,r=new Me,o=new Zt,a=new Vl({depthPacking:Bf}),l=new Gl,c={},h=t.maxTextureSize,u={[es]:fn,[fn]:es,[Gn]:Gn},f=new nn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Me},radius:{value:4}},vertexShader:I0,fragmentShader:L0}),p=f.clone();p.defines.HORIZONTAL_PASS=1;let x=new Mn;x.setAttribute("position",new yn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new Be(x,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=mu;let d=this.type;this.render=function(U,A,$){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||U.length===0)return;let E=s.getRenderTarget(),I=s.getActiveCubeFace(),J=s.getActiveMipmapLevel(),le=s.state;le.setBlending(Ei),le.buffers.color.setClear(1,1,1,1),le.buffers.depth.setTest(!0),le.setScissorTest(!1);let Se=d!==Ni&&this.type===Ni,H=d===Ni&&this.type!==Ni;for(let q=0,ne=U.length;q<ne;q++){let P=U[q],re=P.shadow;if(re===void 0){console.warn("THREE.WebGLShadowMap:",P,"has no shadow.");continue}if(re.autoUpdate===!1&&re.needsUpdate===!1)continue;i.copy(re.mapSize);let ae=re.getFrameExtents();if(i.multiply(ae),r.copy(re.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/ae.x),i.x=r.x*ae.x,re.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/ae.y),i.y=r.y*ae.y,re.mapSize.y=r.y)),re.map===null||Se===!0||H===!0){let xe=this.type!==Ni?{minFilter:Vn,magFilter:Vn}:{};re.map!==null&&re.map.dispose(),re.map=new Wn(i.x,i.y,xe),re.map.texture.name=P.name+".shadowMap",re.camera.updateProjectionMatrix()}s.setRenderTarget(re.map),s.clear();let ge=re.getViewportCount();for(let xe=0;xe<ge;xe++){let be=re.getViewport(xe);o.set(r.x*be.x,r.y*be.y,r.x*be.z,r.y*be.w),le.viewport(o),re.updateMatrices(P,xe),n=re.getFrustum(),T(A,$,re.camera,P,this.type)}re.isPointLightShadow!==!0&&this.type===Ni&&C(re,$),re.needsUpdate=!1}d=this.type,m.needsUpdate=!1,s.setRenderTarget(E,I,J)};function C(U,A){let $=e.update(y);f.defines.VSM_SAMPLES!==U.blurSamples&&(f.defines.VSM_SAMPLES=U.blurSamples,p.defines.VSM_SAMPLES=U.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),U.mapPass===null&&(U.mapPass=new Wn(i.x,i.y)),f.uniforms.shadow_pass.value=U.map.texture,f.uniforms.resolution.value=U.mapSize,f.uniforms.radius.value=U.radius,s.setRenderTarget(U.mapPass),s.clear(),s.renderBufferDirect(A,null,$,f,y,null),p.uniforms.shadow_pass.value=U.mapPass.texture,p.uniforms.resolution.value=U.mapSize,p.uniforms.radius.value=U.radius,s.setRenderTarget(U.map),s.clear(),s.renderBufferDirect(A,null,$,p,y,null)}function _(U,A,$,E){let I=null,J=$.isPointLight===!0?U.customDistanceMaterial:U.customDepthMaterial;if(J!==void 0)I=J;else if(I=$.isPointLight===!0?l:a,s.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){let le=I.uuid,Se=A.uuid,H=c[le];H===void 0&&(H={},c[le]=H);let q=H[Se];q===void 0&&(q=I.clone(),H[Se]=q,A.addEventListener("dispose",B)),I=q}if(I.visible=A.visible,I.wireframe=A.wireframe,E===Ni?I.side=A.shadowSide!==null?A.shadowSide:A.side:I.side=A.shadowSide!==null?A.shadowSide:u[A.side],I.alphaMap=A.alphaMap,I.alphaTest=A.alphaTest,I.map=A.map,I.clipShadows=A.clipShadows,I.clippingPlanes=A.clippingPlanes,I.clipIntersection=A.clipIntersection,I.displacementMap=A.displacementMap,I.displacementScale=A.displacementScale,I.displacementBias=A.displacementBias,I.wireframeLinewidth=A.wireframeLinewidth,I.linewidth=A.linewidth,$.isPointLight===!0&&I.isMeshDistanceMaterial===!0){let le=s.properties.get(I);le.light=$}return I}function T(U,A,$,E,I){if(U.visible===!1)return;if(U.layers.test(A.layers)&&(U.isMesh||U.isLine||U.isPoints)&&(U.castShadow||U.receiveShadow&&I===Ni)&&(!U.frustumCulled||n.intersectsObject(U))){U.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,U.matrixWorld);let Se=e.update(U),H=U.material;if(Array.isArray(H)){let q=Se.groups;for(let ne=0,P=q.length;ne<P;ne++){let re=q[ne],ae=H[re.materialIndex];if(ae&&ae.visible){let ge=_(U,ae,E,I);U.onBeforeShadow(s,U,A,$,Se,ge,re),s.renderBufferDirect($,null,Se,ge,U,re),U.onAfterShadow(s,U,A,$,Se,ge,re)}}}else if(H.visible){let q=_(U,H,E,I);U.onBeforeShadow(s,U,A,$,Se,q,null),s.renderBufferDirect($,null,Se,q,U,null),U.onAfterShadow(s,U,A,$,Se,q,null)}}let le=U.children;for(let Se=0,H=le.length;Se<H;Se++)T(le[Se],A,$,E,I)}function B(U){U.target.removeEventListener("dispose",B);for(let $ in c){let E=c[$],I=U.target.uuid;I in E&&(E[I].dispose(),delete E[I])}}}function D0(s,e,t){let n=t.isWebGL2;function i(){let F=!1,Pe=new Zt,Re=null,nt=new Zt(0,0,0,0);return{setMask:function(Qe){Re!==Qe&&!F&&(s.colorMask(Qe,Qe,Qe,Qe),Re=Qe)},setLocked:function(Qe){F=Qe},setClear:function(Qe,yt,At,Xt,qt){qt===!0&&(Qe*=Xt,yt*=Xt,At*=Xt),Pe.set(Qe,yt,At,Xt),nt.equals(Pe)===!1&&(s.clearColor(Qe,yt,At,Xt),nt.copy(Pe))},reset:function(){F=!1,Re=null,nt.set(-1,0,0,0)}}}function r(){let F=!1,Pe=null,Re=null,nt=null;return{setTest:function(Qe){Qe?it(s.DEPTH_TEST):Xe(s.DEPTH_TEST)},setMask:function(Qe){Pe!==Qe&&!F&&(s.depthMask(Qe),Pe=Qe)},setFunc:function(Qe){if(Re!==Qe){switch(Qe){case vf:s.depthFunc(s.NEVER);break;case yf:s.depthFunc(s.ALWAYS);break;case Mf:s.depthFunc(s.LESS);break;case Do:s.depthFunc(s.LEQUAL);break;case Sf:s.depthFunc(s.EQUAL);break;case Ef:s.depthFunc(s.GEQUAL);break;case bf:s.depthFunc(s.GREATER);break;case wf:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Re=Qe}},setLocked:function(Qe){F=Qe},setClear:function(Qe){nt!==Qe&&(s.clearDepth(Qe),nt=Qe)},reset:function(){F=!1,Pe=null,Re=null,nt=null}}}function o(){let F=!1,Pe=null,Re=null,nt=null,Qe=null,yt=null,At=null,Xt=null,qt=null;return{setTest:function(bt){F||(bt?it(s.STENCIL_TEST):Xe(s.STENCIL_TEST))},setMask:function(bt){Pe!==bt&&!F&&(s.stencilMask(bt),Pe=bt)},setFunc:function(bt,sn,bn){(Re!==bt||nt!==sn||Qe!==bn)&&(s.stencilFunc(bt,sn,bn),Re=bt,nt=sn,Qe=bn)},setOp:function(bt,sn,bn){(yt!==bt||At!==sn||Xt!==bn)&&(s.stencilOp(bt,sn,bn),yt=bt,At=sn,Xt=bn)},setLocked:function(bt){F=bt},setClear:function(bt){qt!==bt&&(s.clearStencil(bt),qt=bt)},reset:function(){F=!1,Pe=null,Re=null,nt=null,Qe=null,yt=null,At=null,Xt=null,qt=null}}}let a=new i,l=new r,c=new o,h=new WeakMap,u=new WeakMap,f={},p={},x=new WeakMap,y=[],m=null,d=!1,C=null,_=null,T=null,B=null,U=null,A=null,$=null,E=new Ze(0,0,0),I=0,J=!1,le=null,Se=null,H=null,q=null,ne=null,P=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),re=!1,ae=0,ge=s.getParameter(s.VERSION);ge.indexOf("WebGL")!==-1?(ae=parseFloat(/^WebGL (\d)/.exec(ge)[1]),re=ae>=1):ge.indexOf("OpenGL ES")!==-1&&(ae=parseFloat(/^OpenGL ES (\d)/.exec(ge)[1]),re=ae>=2);let xe=null,be={},se=s.getParameter(s.SCISSOR_BOX),_e=s.getParameter(s.VIEWPORT),Ae=new Zt().fromArray(se),Oe=new Zt().fromArray(_e);function Ge(F,Pe,Re,nt){let Qe=new Uint8Array(4),yt=s.createTexture();s.bindTexture(F,yt),s.texParameteri(F,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(F,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let At=0;At<Re;At++)n&&(F===s.TEXTURE_3D||F===s.TEXTURE_2D_ARRAY)?s.texImage3D(Pe,0,s.RGBA,1,1,nt,0,s.RGBA,s.UNSIGNED_BYTE,Qe):s.texImage2D(Pe+At,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Qe);return yt}let Ke={};Ke[s.TEXTURE_2D]=Ge(s.TEXTURE_2D,s.TEXTURE_2D,1),Ke[s.TEXTURE_CUBE_MAP]=Ge(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(Ke[s.TEXTURE_2D_ARRAY]=Ge(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Ke[s.TEXTURE_3D]=Ge(s.TEXTURE_3D,s.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),it(s.DEPTH_TEST),l.setFunc(Do),de(!1),S(zc),it(s.CULL_FACE),K(Ei);function it(F){f[F]!==!0&&(s.enable(F),f[F]=!0)}function Xe(F){f[F]!==!1&&(s.disable(F),f[F]=!1)}function st(F,Pe){return p[F]!==Pe?(s.bindFramebuffer(F,Pe),p[F]=Pe,n&&(F===s.DRAW_FRAMEBUFFER&&(p[s.FRAMEBUFFER]=Pe),F===s.FRAMEBUFFER&&(p[s.DRAW_FRAMEBUFFER]=Pe)),!0):!1}function z(F,Pe){let Re=y,nt=!1;if(F)if(Re=x.get(Pe),Re===void 0&&(Re=[],x.set(Pe,Re)),F.isWebGLMultipleRenderTargets){let Qe=F.texture;if(Re.length!==Qe.length||Re[0]!==s.COLOR_ATTACHMENT0){for(let yt=0,At=Qe.length;yt<At;yt++)Re[yt]=s.COLOR_ATTACHMENT0+yt;Re.length=Qe.length,nt=!0}}else Re[0]!==s.COLOR_ATTACHMENT0&&(Re[0]=s.COLOR_ATTACHMENT0,nt=!0);else Re[0]!==s.BACK&&(Re[0]=s.BACK,nt=!0);nt&&(t.isWebGL2?s.drawBuffers(Re):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(Re))}function j(F){return m!==F?(s.useProgram(F),m=F,!0):!1}let Z={[ps]:s.FUNC_ADD,[sf]:s.FUNC_SUBTRACT,[rf]:s.FUNC_REVERSE_SUBTRACT};if(n)Z[Bc]=s.MIN,Z[Hc]=s.MAX;else{let F=e.get("EXT_blend_minmax");F!==null&&(Z[Bc]=F.MIN_EXT,Z[Hc]=F.MAX_EXT)}let k={[of]:s.ZERO,[af]:s.ONE,[lf]:s.SRC_COLOR,[Sl]:s.SRC_ALPHA,[pf]:s.SRC_ALPHA_SATURATE,[ff]:s.DST_COLOR,[hf]:s.DST_ALPHA,[cf]:s.ONE_MINUS_SRC_COLOR,[El]:s.ONE_MINUS_SRC_ALPHA,[df]:s.ONE_MINUS_DST_COLOR,[uf]:s.ONE_MINUS_DST_ALPHA,[mf]:s.CONSTANT_COLOR,[gf]:s.ONE_MINUS_CONSTANT_COLOR,[xf]:s.CONSTANT_ALPHA,[_f]:s.ONE_MINUS_CONSTANT_ALPHA};function K(F,Pe,Re,nt,Qe,yt,At,Xt,qt,bt){if(F===Ei){d===!0&&(Xe(s.BLEND),d=!1);return}if(d===!1&&(it(s.BLEND),d=!0),F!==nf){if(F!==C||bt!==J){if((_!==ps||U!==ps)&&(s.blendEquation(s.FUNC_ADD),_=ps,U=ps),bt)switch(F){case js:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Nn:s.blendFunc(s.ONE,s.ONE);break;case Oc:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Fc:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case js:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Nn:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Oc:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Fc:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}T=null,B=null,A=null,$=null,E.set(0,0,0),I=0,C=F,J=bt}return}Qe=Qe||Pe,yt=yt||Re,At=At||nt,(Pe!==_||Qe!==U)&&(s.blendEquationSeparate(Z[Pe],Z[Qe]),_=Pe,U=Qe),(Re!==T||nt!==B||yt!==A||At!==$)&&(s.blendFuncSeparate(k[Re],k[nt],k[yt],k[At]),T=Re,B=nt,A=yt,$=At),(Xt.equals(E)===!1||qt!==I)&&(s.blendColor(Xt.r,Xt.g,Xt.b,qt),E.copy(Xt),I=qt),C=F,J=!1}function ve(F,Pe){F.side===Gn?Xe(s.CULL_FACE):it(s.CULL_FACE);let Re=F.side===fn;Pe&&(Re=!Re),de(Re),F.blending===js&&F.transparent===!1?K(Ei):K(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),l.setFunc(F.depthFunc),l.setTest(F.depthTest),l.setMask(F.depthWrite),a.setMask(F.colorWrite);let nt=F.stencilWrite;c.setTest(nt),nt&&(c.setMask(F.stencilWriteMask),c.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),c.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),G(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?it(s.SAMPLE_ALPHA_TO_COVERAGE):Xe(s.SAMPLE_ALPHA_TO_COVERAGE)}function de(F){le!==F&&(F?s.frontFace(s.CW):s.frontFace(s.CCW),le=F)}function S(F){F!==ju?(it(s.CULL_FACE),F!==Se&&(F===zc?s.cullFace(s.BACK):F===ef?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Xe(s.CULL_FACE),Se=F}function M(F){F!==H&&(re&&s.lineWidth(F),H=F)}function G(F,Pe,Re){F?(it(s.POLYGON_OFFSET_FILL),(q!==Pe||ne!==Re)&&(s.polygonOffset(Pe,Re),q=Pe,ne=Re)):Xe(s.POLYGON_OFFSET_FILL)}function ce(F){F?it(s.SCISSOR_TEST):Xe(s.SCISSOR_TEST)}function pe(F){F===void 0&&(F=s.TEXTURE0+P-1),xe!==F&&(s.activeTexture(F),xe=F)}function fe(F,Pe,Re){Re===void 0&&(xe===null?Re=s.TEXTURE0+P-1:Re=xe);let nt=be[Re];nt===void 0&&(nt={type:void 0,texture:void 0},be[Re]=nt),(nt.type!==F||nt.texture!==Pe)&&(xe!==Re&&(s.activeTexture(Re),xe=Re),s.bindTexture(F,Pe||Ke[F]),nt.type=F,nt.texture=Pe)}function Ue(){let F=be[xe];F!==void 0&&F.type!==void 0&&(s.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function ue(){try{s.compressedTexImage2D.apply(s,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ze(){try{s.compressedTexImage3D.apply(s,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function qe(){try{s.texSubImage2D.apply(s,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function lt(){try{s.texSubImage3D.apply(s,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ye(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Et(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ct(){try{s.texStorage2D.apply(s,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function je(){try{s.texStorage3D.apply(s,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Je(){try{s.texImage2D.apply(s,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function He(){try{s.texImage3D.apply(s,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function et(F){Ae.equals(F)===!1&&(s.scissor(F.x,F.y,F.z,F.w),Ae.copy(F))}function Tt(F){Oe.equals(F)===!1&&(s.viewport(F.x,F.y,F.z,F.w),Oe.copy(F))}function Dt(F,Pe){let Re=u.get(Pe);Re===void 0&&(Re=new WeakMap,u.set(Pe,Re));let nt=Re.get(F);nt===void 0&&(nt=s.getUniformBlockIndex(Pe,F.name),Re.set(F,nt))}function Te(F,Pe){let nt=u.get(Pe).get(F);h.get(Pe)!==nt&&(s.uniformBlockBinding(Pe,nt,F.__bindingPointIndex),h.set(Pe,nt))}function Ee(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),n===!0&&(s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),f={},xe=null,be={},p={},x=new WeakMap,y=[],m=null,d=!1,C=null,_=null,T=null,B=null,U=null,A=null,$=null,E=new Ze(0,0,0),I=0,J=!1,le=null,Se=null,H=null,q=null,ne=null,Ae.set(0,0,s.canvas.width,s.canvas.height),Oe.set(0,0,s.canvas.width,s.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:it,disable:Xe,bindFramebuffer:st,drawBuffers:z,useProgram:j,setBlending:K,setMaterial:ve,setFlipSided:de,setCullFace:S,setLineWidth:M,setPolygonOffset:G,setScissorTest:ce,activeTexture:pe,bindTexture:fe,unbindTexture:Ue,compressedTexImage2D:ue,compressedTexImage3D:ze,texImage2D:Je,texImage3D:He,updateUBOMapping:Dt,uniformBlockBinding:Te,texStorage2D:ct,texStorage3D:je,texSubImage2D:qe,texSubImage3D:lt,compressedTexSubImage2D:ye,compressedTexSubImage3D:Et,scissor:et,viewport:Tt,reset:Ee}}function N0(s,e,t,n,i,r,o){let a=i.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap,u,f=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(S,M){return p?new OffscreenCanvas(S,M):ko("canvas")}function y(S,M,G,ce){let pe=1;if((S.width>ce||S.height>ce)&&(pe=ce/Math.max(S.width,S.height)),pe<1||M===!0)if(typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&S instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&S instanceof ImageBitmap){let fe=M?Il:Math.floor,Ue=fe(pe*S.width),ue=fe(pe*S.height);u===void 0&&(u=x(Ue,ue));let ze=G?x(Ue,ue):u;return ze.width=Ue,ze.height=ue,ze.getContext("2d").drawImage(S,0,0,Ue,ue),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+S.width+"x"+S.height+") to ("+Ue+"x"+ue+")."),ze}else return"data"in S&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+S.width+"x"+S.height+")."),S;return S}function m(S){return _h(S.width)&&_h(S.height)}function d(S){return a?!1:S.wrapS!==xi||S.wrapT!==xi||S.minFilter!==Vn&&S.minFilter!==Xn}function C(S,M){return S.generateMipmaps&&M&&S.minFilter!==Vn&&S.minFilter!==Xn}function _(S){s.generateMipmap(S)}function T(S,M,G,ce,pe=!1){if(a===!1)return M;if(S!==null){if(s[S]!==void 0)return s[S];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+S+"'")}let fe=M;if(M===s.RED&&(G===s.FLOAT&&(fe=s.R32F),G===s.HALF_FLOAT&&(fe=s.R16F),G===s.UNSIGNED_BYTE&&(fe=s.R8)),M===s.RED_INTEGER&&(G===s.UNSIGNED_BYTE&&(fe=s.R8UI),G===s.UNSIGNED_SHORT&&(fe=s.R16UI),G===s.UNSIGNED_INT&&(fe=s.R32UI),G===s.BYTE&&(fe=s.R8I),G===s.SHORT&&(fe=s.R16I),G===s.INT&&(fe=s.R32I)),M===s.RG&&(G===s.FLOAT&&(fe=s.RG32F),G===s.HALF_FLOAT&&(fe=s.RG16F),G===s.UNSIGNED_BYTE&&(fe=s.RG8)),M===s.RGBA){let Ue=pe?Oo:Lt.getTransfer(ce);G===s.FLOAT&&(fe=s.RGBA32F),G===s.HALF_FLOAT&&(fe=s.RGBA16F),G===s.UNSIGNED_BYTE&&(fe=Ue===Ht?s.SRGB8_ALPHA8:s.RGBA8),G===s.UNSIGNED_SHORT_4_4_4_4&&(fe=s.RGBA4),G===s.UNSIGNED_SHORT_5_5_5_1&&(fe=s.RGB5_A1)}return(fe===s.R16F||fe===s.R32F||fe===s.RG16F||fe===s.RG32F||fe===s.RGBA16F||fe===s.RGBA32F)&&e.get("EXT_color_buffer_float"),fe}function B(S,M,G){return C(S,G)===!0||S.isFramebufferTexture&&S.minFilter!==Vn&&S.minFilter!==Xn?Math.log2(Math.max(M.width,M.height))+1:S.mipmaps!==void 0&&S.mipmaps.length>0?S.mipmaps.length:S.isCompressedTexture&&Array.isArray(S.image)?M.mipmaps.length:1}function U(S){return S===Vn||S===kc||S===Ba?s.NEAREST:s.LINEAR}function A(S){let M=S.target;M.removeEventListener("dispose",A),E(M),M.isVideoTexture&&h.delete(M)}function $(S){let M=S.target;M.removeEventListener("dispose",$),J(M)}function E(S){let M=n.get(S);if(M.__webglInit===void 0)return;let G=S.source,ce=f.get(G);if(ce){let pe=ce[M.__cacheKey];pe.usedTimes--,pe.usedTimes===0&&I(S),Object.keys(ce).length===0&&f.delete(G)}n.remove(S)}function I(S){let M=n.get(S);s.deleteTexture(M.__webglTexture);let G=S.source,ce=f.get(G);delete ce[M.__cacheKey],o.memory.textures--}function J(S){let M=S.texture,G=n.get(S),ce=n.get(M);if(ce.__webglTexture!==void 0&&(s.deleteTexture(ce.__webglTexture),o.memory.textures--),S.depthTexture&&S.depthTexture.dispose(),S.isWebGLCubeRenderTarget)for(let pe=0;pe<6;pe++){if(Array.isArray(G.__webglFramebuffer[pe]))for(let fe=0;fe<G.__webglFramebuffer[pe].length;fe++)s.deleteFramebuffer(G.__webglFramebuffer[pe][fe]);else s.deleteFramebuffer(G.__webglFramebuffer[pe]);G.__webglDepthbuffer&&s.deleteRenderbuffer(G.__webglDepthbuffer[pe])}else{if(Array.isArray(G.__webglFramebuffer))for(let pe=0;pe<G.__webglFramebuffer.length;pe++)s.deleteFramebuffer(G.__webglFramebuffer[pe]);else s.deleteFramebuffer(G.__webglFramebuffer);if(G.__webglDepthbuffer&&s.deleteRenderbuffer(G.__webglDepthbuffer),G.__webglMultisampledFramebuffer&&s.deleteFramebuffer(G.__webglMultisampledFramebuffer),G.__webglColorRenderbuffer)for(let pe=0;pe<G.__webglColorRenderbuffer.length;pe++)G.__webglColorRenderbuffer[pe]&&s.deleteRenderbuffer(G.__webglColorRenderbuffer[pe]);G.__webglDepthRenderbuffer&&s.deleteRenderbuffer(G.__webglDepthRenderbuffer)}if(S.isWebGLMultipleRenderTargets)for(let pe=0,fe=M.length;pe<fe;pe++){let Ue=n.get(M[pe]);Ue.__webglTexture&&(s.deleteTexture(Ue.__webglTexture),o.memory.textures--),n.remove(M[pe])}n.remove(M),n.remove(S)}let le=0;function Se(){le=0}function H(){let S=le;return S>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+S+" texture units while this GPU supports only "+i.maxTextures),le+=1,S}function q(S){let M=[];return M.push(S.wrapS),M.push(S.wrapT),M.push(S.wrapR||0),M.push(S.magFilter),M.push(S.minFilter),M.push(S.anisotropy),M.push(S.internalFormat),M.push(S.format),M.push(S.type),M.push(S.generateMipmaps),M.push(S.premultiplyAlpha),M.push(S.flipY),M.push(S.unpackAlignment),M.push(S.colorSpace),M.join()}function ne(S,M){let G=n.get(S);if(S.isVideoTexture&&ve(S),S.isRenderTargetTexture===!1&&S.version>0&&G.__version!==S.version){let ce=S.image;if(ce===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ce.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ae(G,S,M);return}}t.bindTexture(s.TEXTURE_2D,G.__webglTexture,s.TEXTURE0+M)}function P(S,M){let G=n.get(S);if(S.version>0&&G.__version!==S.version){Ae(G,S,M);return}t.bindTexture(s.TEXTURE_2D_ARRAY,G.__webglTexture,s.TEXTURE0+M)}function re(S,M){let G=n.get(S);if(S.version>0&&G.__version!==S.version){Ae(G,S,M);return}t.bindTexture(s.TEXTURE_3D,G.__webglTexture,s.TEXTURE0+M)}function ae(S,M){let G=n.get(S);if(S.version>0&&G.__version!==S.version){Oe(G,S,M);return}t.bindTexture(s.TEXTURE_CUBE_MAP,G.__webglTexture,s.TEXTURE0+M)}let ge={[Tl]:s.REPEAT,[xi]:s.CLAMP_TO_EDGE,[Al]:s.MIRRORED_REPEAT},xe={[Vn]:s.NEAREST,[kc]:s.NEAREST_MIPMAP_NEAREST,[Ba]:s.NEAREST_MIPMAP_LINEAR,[Xn]:s.LINEAR,[Cf]:s.LINEAR_MIPMAP_NEAREST,[Ir]:s.LINEAR_MIPMAP_LINEAR},be={[kf]:s.NEVER,[Yf]:s.ALWAYS,[Vf]:s.LESS,[Au]:s.LEQUAL,[Gf]:s.EQUAL,[qf]:s.GEQUAL,[Wf]:s.GREATER,[Xf]:s.NOTEQUAL};function se(S,M,G){if(G?(s.texParameteri(S,s.TEXTURE_WRAP_S,ge[M.wrapS]),s.texParameteri(S,s.TEXTURE_WRAP_T,ge[M.wrapT]),(S===s.TEXTURE_3D||S===s.TEXTURE_2D_ARRAY)&&s.texParameteri(S,s.TEXTURE_WRAP_R,ge[M.wrapR]),s.texParameteri(S,s.TEXTURE_MAG_FILTER,xe[M.magFilter]),s.texParameteri(S,s.TEXTURE_MIN_FILTER,xe[M.minFilter])):(s.texParameteri(S,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(S,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE),(S===s.TEXTURE_3D||S===s.TEXTURE_2D_ARRAY)&&s.texParameteri(S,s.TEXTURE_WRAP_R,s.CLAMP_TO_EDGE),(M.wrapS!==xi||M.wrapT!==xi)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(S,s.TEXTURE_MAG_FILTER,U(M.magFilter)),s.texParameteri(S,s.TEXTURE_MIN_FILTER,U(M.minFilter)),M.minFilter!==Vn&&M.minFilter!==Xn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),M.compareFunction&&(s.texParameteri(S,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(S,s.TEXTURE_COMPARE_FUNC,be[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){let ce=e.get("EXT_texture_filter_anisotropic");if(M.magFilter===Vn||M.minFilter!==Ba&&M.minFilter!==Ir||M.type===Qi&&e.has("OES_texture_float_linear")===!1||a===!1&&M.type===vi&&e.has("OES_texture_half_float_linear")===!1)return;(M.anisotropy>1||n.get(M).__currentAnisotropy)&&(s.texParameterf(S,ce.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,i.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy)}}function _e(S,M){let G=!1;S.__webglInit===void 0&&(S.__webglInit=!0,M.addEventListener("dispose",A));let ce=M.source,pe=f.get(ce);pe===void 0&&(pe={},f.set(ce,pe));let fe=q(M);if(fe!==S.__cacheKey){pe[fe]===void 0&&(pe[fe]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,G=!0),pe[fe].usedTimes++;let Ue=pe[S.__cacheKey];Ue!==void 0&&(pe[S.__cacheKey].usedTimes--,Ue.usedTimes===0&&I(M)),S.__cacheKey=fe,S.__webglTexture=pe[fe].texture}return G}function Ae(S,M,G){let ce=s.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(ce=s.TEXTURE_2D_ARRAY),M.isData3DTexture&&(ce=s.TEXTURE_3D);let pe=_e(S,M),fe=M.source;t.bindTexture(ce,S.__webglTexture,s.TEXTURE0+G);let Ue=n.get(fe);if(fe.version!==Ue.__version||pe===!0){t.activeTexture(s.TEXTURE0+G);let ue=Lt.getPrimaries(Lt.workingColorSpace),ze=M.colorSpace===ii?null:Lt.getPrimaries(M.colorSpace),qe=M.colorSpace===ii||ue===ze?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,M.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,M.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,qe);let lt=d(M)&&m(M.image)===!1,ye=y(M.image,lt,!1,i.maxTextureSize);ye=de(M,ye);let Et=m(ye)||a,ct=r.convert(M.format,M.colorSpace),je=r.convert(M.type),Je=T(M.internalFormat,ct,je,M.colorSpace,M.isVideoTexture);se(ce,M,Et);let He,et=M.mipmaps,Tt=a&&M.isVideoTexture!==!0&&Je!==bu,Dt=Ue.__version===void 0||pe===!0,Te=B(M,ye,Et);if(M.isDepthTexture)Je=s.DEPTH_COMPONENT,a?M.type===Qi?Je=s.DEPTH_COMPONENT32F:M.type===Ki?Je=s.DEPTH_COMPONENT24:M.type===xs?Je=s.DEPTH24_STENCIL8:Je=s.DEPTH_COMPONENT16:M.type===Qi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),M.format===_s&&Je===s.DEPTH_COMPONENT&&M.type!==xc&&M.type!==Ki&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),M.type=Ki,je=r.convert(M.type)),M.format===sr&&Je===s.DEPTH_COMPONENT&&(Je=s.DEPTH_STENCIL,M.type!==xs&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),M.type=xs,je=r.convert(M.type))),Dt&&(Tt?t.texStorage2D(s.TEXTURE_2D,1,Je,ye.width,ye.height):t.texImage2D(s.TEXTURE_2D,0,Je,ye.width,ye.height,0,ct,je,null));else if(M.isDataTexture)if(et.length>0&&Et){Tt&&Dt&&t.texStorage2D(s.TEXTURE_2D,Te,Je,et[0].width,et[0].height);for(let Ee=0,F=et.length;Ee<F;Ee++)He=et[Ee],Tt?t.texSubImage2D(s.TEXTURE_2D,Ee,0,0,He.width,He.height,ct,je,He.data):t.texImage2D(s.TEXTURE_2D,Ee,Je,He.width,He.height,0,ct,je,He.data);M.generateMipmaps=!1}else Tt?(Dt&&t.texStorage2D(s.TEXTURE_2D,Te,Je,ye.width,ye.height),t.texSubImage2D(s.TEXTURE_2D,0,0,0,ye.width,ye.height,ct,je,ye.data)):t.texImage2D(s.TEXTURE_2D,0,Je,ye.width,ye.height,0,ct,je,ye.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Tt&&Dt&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Te,Je,et[0].width,et[0].height,ye.depth);for(let Ee=0,F=et.length;Ee<F;Ee++)He=et[Ee],M.format!==_i?ct!==null?Tt?t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Ee,0,0,0,He.width,He.height,ye.depth,ct,He.data,0,0):t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,Ee,Je,He.width,He.height,ye.depth,0,He.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Tt?t.texSubImage3D(s.TEXTURE_2D_ARRAY,Ee,0,0,0,He.width,He.height,ye.depth,ct,je,He.data):t.texImage3D(s.TEXTURE_2D_ARRAY,Ee,Je,He.width,He.height,ye.depth,0,ct,je,He.data)}else{Tt&&Dt&&t.texStorage2D(s.TEXTURE_2D,Te,Je,et[0].width,et[0].height);for(let Ee=0,F=et.length;Ee<F;Ee++)He=et[Ee],M.format!==_i?ct!==null?Tt?t.compressedTexSubImage2D(s.TEXTURE_2D,Ee,0,0,He.width,He.height,ct,He.data):t.compressedTexImage2D(s.TEXTURE_2D,Ee,Je,He.width,He.height,0,He.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Tt?t.texSubImage2D(s.TEXTURE_2D,Ee,0,0,He.width,He.height,ct,je,He.data):t.texImage2D(s.TEXTURE_2D,Ee,Je,He.width,He.height,0,ct,je,He.data)}else if(M.isDataArrayTexture)Tt?(Dt&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Te,Je,ye.width,ye.height,ye.depth),t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,ye.width,ye.height,ye.depth,ct,je,ye.data)):t.texImage3D(s.TEXTURE_2D_ARRAY,0,Je,ye.width,ye.height,ye.depth,0,ct,je,ye.data);else if(M.isData3DTexture)Tt?(Dt&&t.texStorage3D(s.TEXTURE_3D,Te,Je,ye.width,ye.height,ye.depth),t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,ye.width,ye.height,ye.depth,ct,je,ye.data)):t.texImage3D(s.TEXTURE_3D,0,Je,ye.width,ye.height,ye.depth,0,ct,je,ye.data);else if(M.isFramebufferTexture){if(Dt)if(Tt)t.texStorage2D(s.TEXTURE_2D,Te,Je,ye.width,ye.height);else{let Ee=ye.width,F=ye.height;for(let Pe=0;Pe<Te;Pe++)t.texImage2D(s.TEXTURE_2D,Pe,Je,Ee,F,0,ct,je,null),Ee>>=1,F>>=1}}else if(et.length>0&&Et){Tt&&Dt&&t.texStorage2D(s.TEXTURE_2D,Te,Je,et[0].width,et[0].height);for(let Ee=0,F=et.length;Ee<F;Ee++)He=et[Ee],Tt?t.texSubImage2D(s.TEXTURE_2D,Ee,0,0,ct,je,He):t.texImage2D(s.TEXTURE_2D,Ee,Je,ct,je,He);M.generateMipmaps=!1}else Tt?(Dt&&t.texStorage2D(s.TEXTURE_2D,Te,Je,ye.width,ye.height),t.texSubImage2D(s.TEXTURE_2D,0,0,0,ct,je,ye)):t.texImage2D(s.TEXTURE_2D,0,Je,ct,je,ye);C(M,Et)&&_(ce),Ue.__version=fe.version,M.onUpdate&&M.onUpdate(M)}S.__version=M.version}function Oe(S,M,G){if(M.image.length!==6)return;let ce=_e(S,M),pe=M.source;t.bindTexture(s.TEXTURE_CUBE_MAP,S.__webglTexture,s.TEXTURE0+G);let fe=n.get(pe);if(pe.version!==fe.__version||ce===!0){t.activeTexture(s.TEXTURE0+G);let Ue=Lt.getPrimaries(Lt.workingColorSpace),ue=M.colorSpace===ii?null:Lt.getPrimaries(M.colorSpace),ze=M.colorSpace===ii||Ue===ue?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,M.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,M.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ze);let qe=M.isCompressedTexture||M.image[0].isCompressedTexture,lt=M.image[0]&&M.image[0].isDataTexture,ye=[];for(let Ee=0;Ee<6;Ee++)!qe&&!lt?ye[Ee]=y(M.image[Ee],!1,!0,i.maxCubemapSize):ye[Ee]=lt?M.image[Ee].image:M.image[Ee],ye[Ee]=de(M,ye[Ee]);let Et=ye[0],ct=m(Et)||a,je=r.convert(M.format,M.colorSpace),Je=r.convert(M.type),He=T(M.internalFormat,je,Je,M.colorSpace),et=a&&M.isVideoTexture!==!0,Tt=fe.__version===void 0||ce===!0,Dt=B(M,Et,ct);se(s.TEXTURE_CUBE_MAP,M,ct);let Te;if(qe){et&&Tt&&t.texStorage2D(s.TEXTURE_CUBE_MAP,Dt,He,Et.width,Et.height);for(let Ee=0;Ee<6;Ee++){Te=ye[Ee].mipmaps;for(let F=0;F<Te.length;F++){let Pe=Te[F];M.format!==_i?je!==null?et?t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,F,0,0,Pe.width,Pe.height,je,Pe.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,F,He,Pe.width,Pe.height,0,Pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):et?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,F,0,0,Pe.width,Pe.height,je,Je,Pe.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,F,He,Pe.width,Pe.height,0,je,Je,Pe.data)}}}else{Te=M.mipmaps,et&&Tt&&(Te.length>0&&Dt++,t.texStorage2D(s.TEXTURE_CUBE_MAP,Dt,He,ye[0].width,ye[0].height));for(let Ee=0;Ee<6;Ee++)if(lt){et?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,0,0,ye[Ee].width,ye[Ee].height,je,Je,ye[Ee].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,He,ye[Ee].width,ye[Ee].height,0,je,Je,ye[Ee].data);for(let F=0;F<Te.length;F++){let Re=Te[F].image[Ee].image;et?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,F+1,0,0,Re.width,Re.height,je,Je,Re.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,F+1,He,Re.width,Re.height,0,je,Je,Re.data)}}else{et?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,0,0,je,Je,ye[Ee]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,He,je,Je,ye[Ee]);for(let F=0;F<Te.length;F++){let Pe=Te[F];et?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,F+1,0,0,je,Je,Pe.image[Ee]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,F+1,He,je,Je,Pe.image[Ee])}}}C(M,ct)&&_(s.TEXTURE_CUBE_MAP),fe.__version=pe.version,M.onUpdate&&M.onUpdate(M)}S.__version=M.version}function Ge(S,M,G,ce,pe,fe){let Ue=r.convert(G.format,G.colorSpace),ue=r.convert(G.type),ze=T(G.internalFormat,Ue,ue,G.colorSpace);if(!n.get(M).__hasExternalTextures){let lt=Math.max(1,M.width>>fe),ye=Math.max(1,M.height>>fe);pe===s.TEXTURE_3D||pe===s.TEXTURE_2D_ARRAY?t.texImage3D(pe,fe,ze,lt,ye,M.depth,0,Ue,ue,null):t.texImage2D(pe,fe,ze,lt,ye,0,Ue,ue,null)}t.bindFramebuffer(s.FRAMEBUFFER,S),K(M)?l.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ce,pe,n.get(G).__webglTexture,0,k(M)):(pe===s.TEXTURE_2D||pe>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&pe<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,ce,pe,n.get(G).__webglTexture,fe),t.bindFramebuffer(s.FRAMEBUFFER,null)}function Ke(S,M,G){if(s.bindRenderbuffer(s.RENDERBUFFER,S),M.depthBuffer&&!M.stencilBuffer){let ce=a===!0?s.DEPTH_COMPONENT24:s.DEPTH_COMPONENT16;if(G||K(M)){let pe=M.depthTexture;pe&&pe.isDepthTexture&&(pe.type===Qi?ce=s.DEPTH_COMPONENT32F:pe.type===Ki&&(ce=s.DEPTH_COMPONENT24));let fe=k(M);K(M)?l.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,fe,ce,M.width,M.height):s.renderbufferStorageMultisample(s.RENDERBUFFER,fe,ce,M.width,M.height)}else s.renderbufferStorage(s.RENDERBUFFER,ce,M.width,M.height);s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.RENDERBUFFER,S)}else if(M.depthBuffer&&M.stencilBuffer){let ce=k(M);G&&K(M)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,ce,s.DEPTH24_STENCIL8,M.width,M.height):K(M)?l.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ce,s.DEPTH24_STENCIL8,M.width,M.height):s.renderbufferStorage(s.RENDERBUFFER,s.DEPTH_STENCIL,M.width,M.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.RENDERBUFFER,S)}else{let ce=M.isWebGLMultipleRenderTargets===!0?M.texture:[M.texture];for(let pe=0;pe<ce.length;pe++){let fe=ce[pe],Ue=r.convert(fe.format,fe.colorSpace),ue=r.convert(fe.type),ze=T(fe.internalFormat,Ue,ue,fe.colorSpace),qe=k(M);G&&K(M)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,qe,ze,M.width,M.height):K(M)?l.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,qe,ze,M.width,M.height):s.renderbufferStorage(s.RENDERBUFFER,ze,M.width,M.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function it(S,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,S),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),ne(M.depthTexture,0);let ce=n.get(M.depthTexture).__webglTexture,pe=k(M);if(M.depthTexture.format===_s)K(M)?l.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ce,0,pe):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ce,0);else if(M.depthTexture.format===sr)K(M)?l.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ce,0,pe):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ce,0);else throw new Error("Unknown depthTexture format")}function Xe(S){let M=n.get(S),G=S.isWebGLCubeRenderTarget===!0;if(S.depthTexture&&!M.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");it(M.__webglFramebuffer,S)}else if(G){M.__webglDepthbuffer=[];for(let ce=0;ce<6;ce++)t.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer[ce]),M.__webglDepthbuffer[ce]=s.createRenderbuffer(),Ke(M.__webglDepthbuffer[ce],S,!1)}else t.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer=s.createRenderbuffer(),Ke(M.__webglDepthbuffer,S,!1);t.bindFramebuffer(s.FRAMEBUFFER,null)}function st(S,M,G){let ce=n.get(S);M!==void 0&&Ge(ce.__webglFramebuffer,S,S.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),G!==void 0&&Xe(S)}function z(S){let M=S.texture,G=n.get(S),ce=n.get(M);S.addEventListener("dispose",$),S.isWebGLMultipleRenderTargets!==!0&&(ce.__webglTexture===void 0&&(ce.__webglTexture=s.createTexture()),ce.__version=M.version,o.memory.textures++);let pe=S.isWebGLCubeRenderTarget===!0,fe=S.isWebGLMultipleRenderTargets===!0,Ue=m(S)||a;if(pe){G.__webglFramebuffer=[];for(let ue=0;ue<6;ue++)if(a&&M.mipmaps&&M.mipmaps.length>0){G.__webglFramebuffer[ue]=[];for(let ze=0;ze<M.mipmaps.length;ze++)G.__webglFramebuffer[ue][ze]=s.createFramebuffer()}else G.__webglFramebuffer[ue]=s.createFramebuffer()}else{if(a&&M.mipmaps&&M.mipmaps.length>0){G.__webglFramebuffer=[];for(let ue=0;ue<M.mipmaps.length;ue++)G.__webglFramebuffer[ue]=s.createFramebuffer()}else G.__webglFramebuffer=s.createFramebuffer();if(fe)if(i.drawBuffers){let ue=S.texture;for(let ze=0,qe=ue.length;ze<qe;ze++){let lt=n.get(ue[ze]);lt.__webglTexture===void 0&&(lt.__webglTexture=s.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&S.samples>0&&K(S)===!1){let ue=fe?M:[M];G.__webglMultisampledFramebuffer=s.createFramebuffer(),G.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let ze=0;ze<ue.length;ze++){let qe=ue[ze];G.__webglColorRenderbuffer[ze]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,G.__webglColorRenderbuffer[ze]);let lt=r.convert(qe.format,qe.colorSpace),ye=r.convert(qe.type),Et=T(qe.internalFormat,lt,ye,qe.colorSpace,S.isXRRenderTarget===!0),ct=k(S);s.renderbufferStorageMultisample(s.RENDERBUFFER,ct,Et,S.width,S.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ze,s.RENDERBUFFER,G.__webglColorRenderbuffer[ze])}s.bindRenderbuffer(s.RENDERBUFFER,null),S.depthBuffer&&(G.__webglDepthRenderbuffer=s.createRenderbuffer(),Ke(G.__webglDepthRenderbuffer,S,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(pe){t.bindTexture(s.TEXTURE_CUBE_MAP,ce.__webglTexture),se(s.TEXTURE_CUBE_MAP,M,Ue);for(let ue=0;ue<6;ue++)if(a&&M.mipmaps&&M.mipmaps.length>0)for(let ze=0;ze<M.mipmaps.length;ze++)Ge(G.__webglFramebuffer[ue][ze],S,M,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ue,ze);else Ge(G.__webglFramebuffer[ue],S,M,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0);C(M,Ue)&&_(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(fe){let ue=S.texture;for(let ze=0,qe=ue.length;ze<qe;ze++){let lt=ue[ze],ye=n.get(lt);t.bindTexture(s.TEXTURE_2D,ye.__webglTexture),se(s.TEXTURE_2D,lt,Ue),Ge(G.__webglFramebuffer,S,lt,s.COLOR_ATTACHMENT0+ze,s.TEXTURE_2D,0),C(lt,Ue)&&_(s.TEXTURE_2D)}t.unbindTexture()}else{let ue=s.TEXTURE_2D;if((S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(a?ue=S.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(ue,ce.__webglTexture),se(ue,M,Ue),a&&M.mipmaps&&M.mipmaps.length>0)for(let ze=0;ze<M.mipmaps.length;ze++)Ge(G.__webglFramebuffer[ze],S,M,s.COLOR_ATTACHMENT0,ue,ze);else Ge(G.__webglFramebuffer,S,M,s.COLOR_ATTACHMENT0,ue,0);C(M,Ue)&&_(ue),t.unbindTexture()}S.depthBuffer&&Xe(S)}function j(S){let M=m(S)||a,G=S.isWebGLMultipleRenderTargets===!0?S.texture:[S.texture];for(let ce=0,pe=G.length;ce<pe;ce++){let fe=G[ce];if(C(fe,M)){let Ue=S.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,ue=n.get(fe).__webglTexture;t.bindTexture(Ue,ue),_(Ue),t.unbindTexture()}}}function Z(S){if(a&&S.samples>0&&K(S)===!1){let M=S.isWebGLMultipleRenderTargets?S.texture:[S.texture],G=S.width,ce=S.height,pe=s.COLOR_BUFFER_BIT,fe=[],Ue=S.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ue=n.get(S),ze=S.isWebGLMultipleRenderTargets===!0;if(ze)for(let qe=0;qe<M.length;qe++)t.bindFramebuffer(s.FRAMEBUFFER,ue.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+qe,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,ue.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+qe,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,ue.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,ue.__webglFramebuffer);for(let qe=0;qe<M.length;qe++){fe.push(s.COLOR_ATTACHMENT0+qe),S.depthBuffer&&fe.push(Ue);let lt=ue.__ignoreDepthValues!==void 0?ue.__ignoreDepthValues:!1;if(lt===!1&&(S.depthBuffer&&(pe|=s.DEPTH_BUFFER_BIT),S.stencilBuffer&&(pe|=s.STENCIL_BUFFER_BIT)),ze&&s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,ue.__webglColorRenderbuffer[qe]),lt===!0&&(s.invalidateFramebuffer(s.READ_FRAMEBUFFER,[Ue]),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[Ue])),ze){let ye=n.get(M[qe]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,ye,0)}s.blitFramebuffer(0,0,G,ce,0,0,G,ce,pe,s.NEAREST),c&&s.invalidateFramebuffer(s.READ_FRAMEBUFFER,fe)}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),ze)for(let qe=0;qe<M.length;qe++){t.bindFramebuffer(s.FRAMEBUFFER,ue.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+qe,s.RENDERBUFFER,ue.__webglColorRenderbuffer[qe]);let lt=n.get(M[qe]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,ue.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+qe,s.TEXTURE_2D,lt,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,ue.__webglMultisampledFramebuffer)}}function k(S){return Math.min(i.maxSamples,S.samples)}function K(S){let M=n.get(S);return a&&S.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function ve(S){let M=o.render.frame;h.get(S)!==M&&(h.set(S,M),S.update())}function de(S,M){let G=S.colorSpace,ce=S.format,pe=S.type;return S.isCompressedTexture===!0||S.isVideoTexture===!0||S.format===Cl||G!==Hi&&G!==ii&&(Lt.getTransfer(G)===Ht?a===!1?e.has("EXT_sRGB")===!0&&ce===_i?(S.format=Cl,S.minFilter=Xn,S.generateMipmaps=!1):M=Vo.sRGBToLinear(M):(ce!==_i||pe!==ji)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),M}this.allocateTextureUnit=H,this.resetTextureUnits=Se,this.setTexture2D=ne,this.setTexture2DArray=P,this.setTexture3D=re,this.setTextureCube=ae,this.rebindTextures=st,this.setupRenderTarget=z,this.updateRenderTargetMipmap=j,this.updateMultisampleRenderTarget=Z,this.setupDepthRenderbuffer=Xe,this.setupFrameBufferTexture=Ge,this.useMultisampledRTT=K}function z0(s,e,t){let n=t.isWebGL2;function i(r,o=ii){let a,l=Lt.getTransfer(o);if(r===ji)return s.UNSIGNED_BYTE;if(r===vu)return s.UNSIGNED_SHORT_4_4_4_4;if(r===yu)return s.UNSIGNED_SHORT_5_5_5_1;if(r===Pf)return s.BYTE;if(r===If)return s.SHORT;if(r===xc)return s.UNSIGNED_SHORT;if(r===_u)return s.INT;if(r===Ki)return s.UNSIGNED_INT;if(r===Qi)return s.FLOAT;if(r===vi)return n?s.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===Lf)return s.ALPHA;if(r===_i)return s.RGBA;if(r===Uf)return s.LUMINANCE;if(r===Df)return s.LUMINANCE_ALPHA;if(r===_s)return s.DEPTH_COMPONENT;if(r===sr)return s.DEPTH_STENCIL;if(r===Cl)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===Nf)return s.RED;if(r===Mu)return s.RED_INTEGER;if(r===zf)return s.RG;if(r===Su)return s.RG_INTEGER;if(r===Eu)return s.RGBA_INTEGER;if(r===Ha||r===ka||r===Va||r===Ga)if(l===Ht)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===Ha)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===ka)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Va)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Ga)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===Ha)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===ka)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Va)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Ga)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Vc||r===Gc||r===Wc||r===Xc)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===Vc)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Gc)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Wc)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Xc)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===bu)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===qc||r===Yc)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(r===qc)return l===Ht?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===Yc)return l===Ht?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Zc||r===Jc||r===$c||r===Kc||r===Qc||r===jc||r===eh||r===th||r===nh||r===ih||r===sh||r===rh||r===oh||r===ah)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(r===Zc)return l===Ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Jc)return l===Ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===$c)return l===Ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Kc)return l===Ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Qc)return l===Ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===jc)return l===Ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===eh)return l===Ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===th)return l===Ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===nh)return l===Ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===ih)return l===Ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===sh)return l===Ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===rh)return l===Ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===oh)return l===Ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===ah)return l===Ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Wa||r===lh||r===ch)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(r===Wa)return l===Ht?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===lh)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===ch)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Of||r===hh||r===uh||r===fh)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(r===Wa)return a.COMPRESSED_RED_RGTC1_EXT;if(r===hh)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===uh)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===fh)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===xs?n?s.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):s[r]!==void 0?s[r]:null}return{convert:i}}var Wl=class extends Un{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},Dn=class extends zn{constructor(){super(),this.isGroup=!0,this.type="Group"}},O0={type:"move"},Ar=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Dn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Dn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Dn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let y of e.hand.values()){let m=t.getJointPose(y,n),d=this._getHandJoint(c,y);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),p=.02,x=.005;c.inputState.pinching&&f>p+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=p-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(O0)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Dn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Xl=class extends ts{constructor(e,t){super();let n=this,i=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,f=null,p=null,x=null,y=t.getContextAttributes(),m=null,d=null,C=[],_=[],T=new Me,B=null,U=new Un;U.layers.enable(1),U.viewport=new Zt;let A=new Un;A.layers.enable(2),A.viewport=new Zt;let $=[U,A],E=new Wl;E.layers.enable(1),E.layers.enable(2);let I=null,J=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(se){let _e=C[se];return _e===void 0&&(_e=new Ar,C[se]=_e),_e.getTargetRaySpace()},this.getControllerGrip=function(se){let _e=C[se];return _e===void 0&&(_e=new Ar,C[se]=_e),_e.getGripSpace()},this.getHand=function(se){let _e=C[se];return _e===void 0&&(_e=new Ar,C[se]=_e),_e.getHandSpace()};function le(se){let _e=_.indexOf(se.inputSource);if(_e===-1)return;let Ae=C[_e];Ae!==void 0&&(Ae.update(se.inputSource,se.frame,c||o),Ae.dispatchEvent({type:se.type,data:se.inputSource}))}function Se(){i.removeEventListener("select",le),i.removeEventListener("selectstart",le),i.removeEventListener("selectend",le),i.removeEventListener("squeeze",le),i.removeEventListener("squeezestart",le),i.removeEventListener("squeezeend",le),i.removeEventListener("end",Se),i.removeEventListener("inputsourceschange",H);for(let se=0;se<C.length;se++){let _e=_[se];_e!==null&&(_[se]=null,C[se].disconnect(_e))}I=null,J=null,e.setRenderTarget(m),p=null,f=null,u=null,i=null,d=null,be.stop(),n.isPresenting=!1,e.setPixelRatio(B),e.setSize(T.width,T.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(se){r=se,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(se){a=se,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(se){c=se},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return u},this.getFrame=function(){return x},this.getSession=function(){return i},this.setSession=async function(se){if(i=se,i!==null){if(m=e.getRenderTarget(),i.addEventListener("select",le),i.addEventListener("selectstart",le),i.addEventListener("selectend",le),i.addEventListener("squeeze",le),i.addEventListener("squeezestart",le),i.addEventListener("squeezeend",le),i.addEventListener("end",Se),i.addEventListener("inputsourceschange",H),y.xrCompatible!==!0&&await t.makeXRCompatible(),B=e.getPixelRatio(),e.getSize(T),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){let _e={antialias:i.renderState.layers===void 0?y.antialias:!0,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(i,t,_e),i.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),d=new Wn(p.framebufferWidth,p.framebufferHeight,{format:_i,type:ji,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil})}else{let _e=null,Ae=null,Oe=null;y.depth&&(Oe=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,_e=y.stencil?sr:_s,Ae=y.stencil?xs:Ki);let Ge={colorFormat:t.RGBA8,depthFormat:Oe,scaleFactor:r};u=new XRWebGLBinding(i,t),f=u.createProjectionLayer(Ge),i.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),d=new Wn(f.textureWidth,f.textureHeight,{format:_i,type:ji,depthTexture:new $o(f.textureWidth,f.textureHeight,Ae,void 0,void 0,void 0,void 0,void 0,void 0,_e),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0});let Ke=e.properties.get(d);Ke.__ignoreDepthValues=f.ignoreDepthValues}d.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),be.setContext(i),be.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function H(se){for(let _e=0;_e<se.removed.length;_e++){let Ae=se.removed[_e],Oe=_.indexOf(Ae);Oe>=0&&(_[Oe]=null,C[Oe].disconnect(Ae))}for(let _e=0;_e<se.added.length;_e++){let Ae=se.added[_e],Oe=_.indexOf(Ae);if(Oe===-1){for(let Ke=0;Ke<C.length;Ke++)if(Ke>=_.length){_.push(Ae),Oe=Ke;break}else if(_[Ke]===null){_[Ke]=Ae,Oe=Ke;break}if(Oe===-1)break}let Ge=C[Oe];Ge&&Ge.connect(Ae)}}let q=new L,ne=new L;function P(se,_e,Ae){q.setFromMatrixPosition(_e.matrixWorld),ne.setFromMatrixPosition(Ae.matrixWorld);let Oe=q.distanceTo(ne),Ge=_e.projectionMatrix.elements,Ke=Ae.projectionMatrix.elements,it=Ge[14]/(Ge[10]-1),Xe=Ge[14]/(Ge[10]+1),st=(Ge[9]+1)/Ge[5],z=(Ge[9]-1)/Ge[5],j=(Ge[8]-1)/Ge[0],Z=(Ke[8]+1)/Ke[0],k=it*j,K=it*Z,ve=Oe/(-j+Z),de=ve*-j;_e.matrixWorld.decompose(se.position,se.quaternion,se.scale),se.translateX(de),se.translateZ(ve),se.matrixWorld.compose(se.position,se.quaternion,se.scale),se.matrixWorldInverse.copy(se.matrixWorld).invert();let S=it+ve,M=Xe+ve,G=k-de,ce=K+(Oe-de),pe=st*Xe/M*S,fe=z*Xe/M*S;se.projectionMatrix.makePerspective(G,ce,pe,fe,S,M),se.projectionMatrixInverse.copy(se.projectionMatrix).invert()}function re(se,_e){_e===null?se.matrixWorld.copy(se.matrix):se.matrixWorld.multiplyMatrices(_e.matrixWorld,se.matrix),se.matrixWorldInverse.copy(se.matrixWorld).invert()}this.updateCamera=function(se){if(i===null)return;E.near=A.near=U.near=se.near,E.far=A.far=U.far=se.far,(I!==E.near||J!==E.far)&&(i.updateRenderState({depthNear:E.near,depthFar:E.far}),I=E.near,J=E.far);let _e=se.parent,Ae=E.cameras;re(E,_e);for(let Oe=0;Oe<Ae.length;Oe++)re(Ae[Oe],_e);Ae.length===2?P(E,U,A):E.projectionMatrix.copy(U.projectionMatrix),ae(se,E,_e)};function ae(se,_e,Ae){Ae===null?se.matrix.copy(_e.matrixWorld):(se.matrix.copy(Ae.matrixWorld),se.matrix.invert(),se.matrix.multiply(_e.matrixWorld)),se.matrix.decompose(se.position,se.quaternion,se.scale),se.updateMatrixWorld(!0),se.projectionMatrix.copy(_e.projectionMatrix),se.projectionMatrixInverse.copy(_e.projectionMatrixInverse),se.isPerspectiveCamera&&(se.fov=Pl*2*Math.atan(1/se.projectionMatrix.elements[5]),se.zoom=1)}this.getCamera=function(){return E},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(se){l=se,f!==null&&(f.fixedFoveation=se),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=se)};let ge=null;function xe(se,_e){if(h=_e.getViewerPose(c||o),x=_e,h!==null){let Ae=h.views;p!==null&&(e.setRenderTargetFramebuffer(d,p.framebuffer),e.setRenderTarget(d));let Oe=!1;Ae.length!==E.cameras.length&&(E.cameras.length=0,Oe=!0);for(let Ge=0;Ge<Ae.length;Ge++){let Ke=Ae[Ge],it=null;if(p!==null)it=p.getViewport(Ke);else{let st=u.getViewSubImage(f,Ke);it=st.viewport,Ge===0&&(e.setRenderTargetTextures(d,st.colorTexture,f.ignoreDepthValues?void 0:st.depthStencilTexture),e.setRenderTarget(d))}let Xe=$[Ge];Xe===void 0&&(Xe=new Un,Xe.layers.enable(Ge),Xe.viewport=new Zt,$[Ge]=Xe),Xe.matrix.fromArray(Ke.transform.matrix),Xe.matrix.decompose(Xe.position,Xe.quaternion,Xe.scale),Xe.projectionMatrix.fromArray(Ke.projectionMatrix),Xe.projectionMatrixInverse.copy(Xe.projectionMatrix).invert(),Xe.viewport.set(it.x,it.y,it.width,it.height),Ge===0&&(E.matrix.copy(Xe.matrix),E.matrix.decompose(E.position,E.quaternion,E.scale)),Oe===!0&&E.cameras.push(Xe)}}for(let Ae=0;Ae<C.length;Ae++){let Oe=_[Ae],Ge=C[Ae];Oe!==null&&Ge!==void 0&&Ge.update(Oe,_e,c||o)}ge&&ge(se,_e),_e.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:_e}),x=null}let be=new Iu;be.setAnimationLoop(xe),this.setAnimationLoop=function(se){ge=se},this.dispose=function(){}}};function F0(s,e){function t(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function n(m,d){d.color.getRGB(m.fogColor.value,Pu(s)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function i(m,d,C,_,T){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(m,d):d.isMeshToonMaterial?(r(m,d),u(m,d)):d.isMeshPhongMaterial?(r(m,d),h(m,d)):d.isMeshStandardMaterial?(r(m,d),f(m,d),d.isMeshPhysicalMaterial&&p(m,d,T)):d.isMeshMatcapMaterial?(r(m,d),x(m,d)):d.isMeshDepthMaterial?r(m,d):d.isMeshDistanceMaterial?(r(m,d),y(m,d)):d.isMeshNormalMaterial?r(m,d):d.isLineBasicMaterial?(o(m,d),d.isLineDashedMaterial&&a(m,d)):d.isPointsMaterial?l(m,d,C,_):d.isSpriteMaterial?c(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,t(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===fn&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,t(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===fn&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,t(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,t(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);let C=e.get(d).envMap;if(C&&(m.envMap.value=C,m.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap){m.lightMap.value=d.lightMap;let _=s._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=d.lightMapIntensity*_,t(d.lightMap,m.lightMapTransform)}d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,m.aoMapTransform))}function o(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform))}function a(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function l(m,d,C,_){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*C,m.scale.value=_*.5,d.map&&(m.map.value=d.map,t(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function c(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function h(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function u(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function f(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,m.roughnessMapTransform)),e.get(d).envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,C){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===fn&&m.clearcoatNormalScale.value.negate())),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=C.texture,m.transmissionSamplerSize.value.set(C.width,C.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,m.specularIntensityMapTransform))}function x(m,d){d.matcap&&(m.matcap.value=d.matcap)}function y(m,d){let C=e.get(d).light;m.referencePosition.value.setFromMatrixPosition(C.matrixWorld),m.nearDistance.value=C.shadow.camera.near,m.farDistance.value=C.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function B0(s,e,t,n){let i={},r={},o=[],a=t.isWebGL2?s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(C,_){let T=_.program;n.uniformBlockBinding(C,T)}function c(C,_){let T=i[C.id];T===void 0&&(x(C),T=h(C),i[C.id]=T,C.addEventListener("dispose",m));let B=_.program;n.updateUBOMapping(C,B);let U=e.render.frame;r[C.id]!==U&&(f(C),r[C.id]=U)}function h(C){let _=u();C.__bindingPointIndex=_;let T=s.createBuffer(),B=C.__size,U=C.usage;return s.bindBuffer(s.UNIFORM_BUFFER,T),s.bufferData(s.UNIFORM_BUFFER,B,U),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,_,T),T}function u(){for(let C=0;C<a;C++)if(o.indexOf(C)===-1)return o.push(C),C;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(C){let _=i[C.id],T=C.uniforms,B=C.__cache;s.bindBuffer(s.UNIFORM_BUFFER,_);for(let U=0,A=T.length;U<A;U++){let $=Array.isArray(T[U])?T[U]:[T[U]];for(let E=0,I=$.length;E<I;E++){let J=$[E];if(p(J,U,E,B)===!0){let le=J.__offset,Se=Array.isArray(J.value)?J.value:[J.value],H=0;for(let q=0;q<Se.length;q++){let ne=Se[q],P=y(ne);typeof ne=="number"||typeof ne=="boolean"?(J.__data[0]=ne,s.bufferSubData(s.UNIFORM_BUFFER,le+H,J.__data)):ne.isMatrix3?(J.__data[0]=ne.elements[0],J.__data[1]=ne.elements[1],J.__data[2]=ne.elements[2],J.__data[3]=0,J.__data[4]=ne.elements[3],J.__data[5]=ne.elements[4],J.__data[6]=ne.elements[5],J.__data[7]=0,J.__data[8]=ne.elements[6],J.__data[9]=ne.elements[7],J.__data[10]=ne.elements[8],J.__data[11]=0):(ne.toArray(J.__data,H),H+=P.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,le,J.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function p(C,_,T,B){let U=C.value,A=_+"_"+T;if(B[A]===void 0)return typeof U=="number"||typeof U=="boolean"?B[A]=U:B[A]=U.clone(),!0;{let $=B[A];if(typeof U=="number"||typeof U=="boolean"){if($!==U)return B[A]=U,!0}else if($.equals(U)===!1)return $.copy(U),!0}return!1}function x(C){let _=C.uniforms,T=0,B=16;for(let A=0,$=_.length;A<$;A++){let E=Array.isArray(_[A])?_[A]:[_[A]];for(let I=0,J=E.length;I<J;I++){let le=E[I],Se=Array.isArray(le.value)?le.value:[le.value];for(let H=0,q=Se.length;H<q;H++){let ne=Se[H],P=y(ne),re=T%B;re!==0&&B-re<P.boundary&&(T+=B-re),le.__data=new Float32Array(P.storage/Float32Array.BYTES_PER_ELEMENT),le.__offset=T,T+=P.storage}}}let U=T%B;return U>0&&(T+=B-U),C.__size=T,C.__cache={},this}function y(C){let _={boundary:0,storage:0};return typeof C=="number"||typeof C=="boolean"?(_.boundary=4,_.storage=4):C.isVector2?(_.boundary=8,_.storage=8):C.isVector3||C.isColor?(_.boundary=16,_.storage=12):C.isVector4?(_.boundary=16,_.storage=16):C.isMatrix3?(_.boundary=48,_.storage=48):C.isMatrix4?(_.boundary=64,_.storage=64):C.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",C),_}function m(C){let _=C.target;_.removeEventListener("dispose",m);let T=o.indexOf(_.__bindingPointIndex);o.splice(T,1),s.deleteBuffer(i[_.id]),delete i[_.id],delete r[_.id]}function d(){for(let C in i)s.deleteBuffer(i[C]);o=[],i={},r={}}return{bind:l,update:c,dispose:d}}var Dr=class{constructor(e={}){let{canvas:t=Jf(),context:n=null,depth:i=!0,stencil:r=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=e;this.isWebGLRenderer=!0;let f;n!==null?f=n.getContextAttributes().alpha:f=o;let p=new Uint32Array(4),x=new Int32Array(4),y=null,m=null,d=[],C=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=It,this._useLegacyLights=!1,this.toneMapping=bi,this.toneMappingExposure=1;let _=this,T=!1,B=0,U=0,A=null,$=-1,E=null,I=new Zt,J=new Zt,le=null,Se=new Ze(0),H=0,q=t.width,ne=t.height,P=1,re=null,ae=null,ge=new Zt(0,0,q,ne),xe=new Zt(0,0,q,ne),be=!1,se=new Ur,_e=!1,Ae=!1,Oe=null,Ge=new vt,Ke=new Me,it=new L,Xe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function st(){return A===null?P:1}let z=n;function j(R,X){for(let Q=0;Q<R.length;Q++){let ie=R[Q],te=t.getContext(ie,X);if(te!==null)return te}return null}try{let R={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r160"),t.addEventListener("webglcontextlost",Ee,!1),t.addEventListener("webglcontextrestored",F,!1),t.addEventListener("webglcontextcreationerror",Pe,!1),z===null){let X=["webgl2","webgl","experimental-webgl"];if(_.isWebGL1Renderer===!0&&X.shift(),z=j(X,R),z===null)throw j(X)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&z instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),z.getShaderPrecisionFormat===void 0&&(z.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let Z,k,K,ve,de,S,M,G,ce,pe,fe,Ue,ue,ze,qe,lt,ye,Et,ct,je,Je,He,et,Tt;function Dt(){Z=new sg(z),k=new Qm(z,Z,e),Z.init(k),He=new z0(z,Z,k),K=new D0(z,Z,k),ve=new ag(z),de=new S0,S=new N0(z,Z,K,de,k,He,ve),M=new eg(_),G=new ig(_),ce=new md(z,k),et=new $m(z,Z,ce,k),pe=new rg(z,ce,ve,et),fe=new ug(z,pe,ce,ve),ct=new hg(z,k,S),lt=new jm(de),Ue=new M0(_,M,G,Z,k,et,lt),ue=new F0(_,de),ze=new b0,qe=new P0(Z,k),Et=new Jm(_,M,G,K,fe,f,l),ye=new U0(_,fe,k),Tt=new B0(z,ve,k,K),je=new Km(z,Z,ve,k),Je=new og(z,Z,ve,k),ve.programs=Ue.programs,_.capabilities=k,_.extensions=Z,_.properties=de,_.renderLists=ze,_.shadowMap=ye,_.state=K,_.info=ve}Dt();let Te=new Xl(_,z);this.xr=Te,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){let R=Z.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){let R=Z.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return P},this.setPixelRatio=function(R){R!==void 0&&(P=R,this.setSize(q,ne,!1))},this.getSize=function(R){return R.set(q,ne)},this.setSize=function(R,X,Q=!0){if(Te.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}q=R,ne=X,t.width=Math.floor(R*P),t.height=Math.floor(X*P),Q===!0&&(t.style.width=R+"px",t.style.height=X+"px"),this.setViewport(0,0,R,X)},this.getDrawingBufferSize=function(R){return R.set(q*P,ne*P).floor()},this.setDrawingBufferSize=function(R,X,Q){q=R,ne=X,P=Q,t.width=Math.floor(R*Q),t.height=Math.floor(X*Q),this.setViewport(0,0,R,X)},this.getCurrentViewport=function(R){return R.copy(I)},this.getViewport=function(R){return R.copy(ge)},this.setViewport=function(R,X,Q,ie){R.isVector4?ge.set(R.x,R.y,R.z,R.w):ge.set(R,X,Q,ie),K.viewport(I.copy(ge).multiplyScalar(P).floor())},this.getScissor=function(R){return R.copy(xe)},this.setScissor=function(R,X,Q,ie){R.isVector4?xe.set(R.x,R.y,R.z,R.w):xe.set(R,X,Q,ie),K.scissor(J.copy(xe).multiplyScalar(P).floor())},this.getScissorTest=function(){return be},this.setScissorTest=function(R){K.setScissorTest(be=R)},this.setOpaqueSort=function(R){re=R},this.setTransparentSort=function(R){ae=R},this.getClearColor=function(R){return R.copy(Et.getClearColor())},this.setClearColor=function(){Et.setClearColor.apply(Et,arguments)},this.getClearAlpha=function(){return Et.getClearAlpha()},this.setClearAlpha=function(){Et.setClearAlpha.apply(Et,arguments)},this.clear=function(R=!0,X=!0,Q=!0){let ie=0;if(R){let te=!1;if(A!==null){let Fe=A.texture.format;te=Fe===Eu||Fe===Su||Fe===Mu}if(te){let Fe=A.texture.type,We=Fe===ji||Fe===Ki||Fe===xc||Fe===xs||Fe===vu||Fe===yu,Ye=Et.getClearColor(),rt=Et.getClearAlpha(),ht=Ye.r,at=Ye.g,ut=Ye.b;We?(p[0]=ht,p[1]=at,p[2]=ut,p[3]=rt,z.clearBufferuiv(z.COLOR,0,p)):(x[0]=ht,x[1]=at,x[2]=ut,x[3]=rt,z.clearBufferiv(z.COLOR,0,x))}else ie|=z.COLOR_BUFFER_BIT}X&&(ie|=z.DEPTH_BUFFER_BIT),Q&&(ie|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z.clear(ie)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Ee,!1),t.removeEventListener("webglcontextrestored",F,!1),t.removeEventListener("webglcontextcreationerror",Pe,!1),ze.dispose(),qe.dispose(),de.dispose(),M.dispose(),G.dispose(),fe.dispose(),et.dispose(),Tt.dispose(),Ue.dispose(),Te.dispose(),Te.removeEventListener("sessionstart",qt),Te.removeEventListener("sessionend",bt),Oe&&(Oe.dispose(),Oe=null),sn.stop()};function Ee(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function F(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;let R=ve.autoReset,X=ye.enabled,Q=ye.autoUpdate,ie=ye.needsUpdate,te=ye.type;Dt(),ve.autoReset=R,ye.enabled=X,ye.autoUpdate=Q,ye.needsUpdate=ie,ye.type=te}function Pe(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function Re(R){let X=R.target;X.removeEventListener("dispose",Re),nt(X)}function nt(R){Qe(R),de.remove(R)}function Qe(R){let X=de.get(R).programs;X!==void 0&&(X.forEach(function(Q){Ue.releaseProgram(Q)}),R.isShaderMaterial&&Ue.releaseShaderCache(R))}this.renderBufferDirect=function(R,X,Q,ie,te,Fe){X===null&&(X=Xe);let We=te.isMesh&&te.matrixWorld.determinant()<0,Ye=rs(R,X,Q,ie,te);K.setMaterial(ie,We);let rt=Q.index,ht=1;if(ie.wireframe===!0){if(rt=pe.getWireframeAttribute(Q),rt===void 0)return;ht=2}let at=Q.drawRange,ut=Q.attributes.position,Pt=at.start*ht,Ot=(at.start+at.count)*ht;Fe!==null&&(Pt=Math.max(Pt,Fe.start*ht),Ot=Math.min(Ot,(Fe.start+Fe.count)*ht)),rt!==null?(Pt=Math.max(Pt,0),Ot=Math.min(Ot,rt.count)):ut!=null&&(Pt=Math.max(Pt,0),Ot=Math.min(Ot,ut.count));let Ft=Ot-Pt;if(Ft<0||Ft===1/0)return;et.setup(te,ie,Ye,Q,rt);let _n,Rt=je;if(rt!==null&&(_n=ce.get(rt),Rt=Je,Rt.setIndex(_n)),te.isMesh)ie.wireframe===!0?(K.setLineWidth(ie.wireframeLinewidth*st()),Rt.setMode(z.LINES)):Rt.setMode(z.TRIANGLES);else if(te.isLine){let ft=ie.linewidth;ft===void 0&&(ft=1),K.setLineWidth(ft*st()),te.isLineSegments?Rt.setMode(z.LINES):te.isLineLoop?Rt.setMode(z.LINE_LOOP):Rt.setMode(z.LINE_STRIP)}else te.isPoints?Rt.setMode(z.POINTS):te.isSprite&&Rt.setMode(z.TRIANGLES);if(te.isBatchedMesh)Rt.renderMultiDraw(te._multiDrawStarts,te._multiDrawCounts,te._multiDrawCount);else if(te.isInstancedMesh)Rt.renderInstances(Pt,Ft,te.count);else if(Q.isInstancedBufferGeometry){let ft=Q._maxInstanceCount!==void 0?Q._maxInstanceCount:1/0,Nt=Math.min(Q.instanceCount,ft);Rt.renderInstances(Pt,Ft,Nt)}else Rt.render(Pt,Ft)};function yt(R,X,Q){R.transparent===!0&&R.side===Gn&&R.forceSinglePass===!1?(R.side=fn,R.needsUpdate=!0,en(R,X,Q),R.side=es,R.needsUpdate=!0,en(R,X,Q),R.side=Gn):en(R,X,Q)}this.compile=function(R,X,Q=null){Q===null&&(Q=R),m=qe.get(Q),m.init(),C.push(m),Q.traverseVisible(function(te){te.isLight&&te.layers.test(X.layers)&&(m.pushLight(te),te.castShadow&&m.pushShadow(te))}),R!==Q&&R.traverseVisible(function(te){te.isLight&&te.layers.test(X.layers)&&(m.pushLight(te),te.castShadow&&m.pushShadow(te))}),m.setupLights(_._useLegacyLights);let ie=new Set;return R.traverse(function(te){let Fe=te.material;if(Fe)if(Array.isArray(Fe))for(let We=0;We<Fe.length;We++){let Ye=Fe[We];yt(Ye,Q,te),ie.add(Ye)}else yt(Fe,Q,te),ie.add(Fe)}),C.pop(),m=null,ie},this.compileAsync=function(R,X,Q=null){let ie=this.compile(R,X,Q);return new Promise(te=>{function Fe(){if(ie.forEach(function(We){de.get(We).currentProgram.isReady()&&ie.delete(We)}),ie.size===0){te(R);return}setTimeout(Fe,10)}Z.get("KHR_parallel_shader_compile")!==null?Fe():setTimeout(Fe,10)})};let At=null;function Xt(R){At&&At(R)}function qt(){sn.stop()}function bt(){sn.start()}let sn=new Iu;sn.setAnimationLoop(Xt),typeof self<"u"&&sn.setContext(self),this.setAnimationLoop=function(R){At=R,Te.setAnimationLoop(R),R===null?sn.stop():sn.start()},Te.addEventListener("sessionstart",qt),Te.addEventListener("sessionend",bt),this.render=function(R,X){if(X!==void 0&&X.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),Te.enabled===!0&&Te.isPresenting===!0&&(Te.cameraAutoUpdate===!0&&Te.updateCamera(X),X=Te.getCamera()),R.isScene===!0&&R.onBeforeRender(_,R,X,A),m=qe.get(R,C.length),m.init(),C.push(m),Ge.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),se.setFromProjectionMatrix(Ge),Ae=this.localClippingEnabled,_e=lt.init(this.clippingPlanes,Ae),y=ze.get(R,d.length),y.init(),d.push(y),bn(R,X,0,_.sortObjects),y.finish(),_.sortObjects===!0&&y.sort(re,ae),this.info.render.frame++,_e===!0&&lt.beginShadows();let Q=m.state.shadowsArray;if(ye.render(Q,R,X),_e===!0&&lt.endShadows(),this.info.autoReset===!0&&this.info.reset(),Et.render(y,R),m.setupLights(_._useLegacyLights),X.isArrayCamera){let ie=X.cameras;for(let te=0,Fe=ie.length;te<Fe;te++){let We=ie[te];hi(y,R,We,We.viewport)}}else hi(y,R,X);A!==null&&(S.updateMultisampleRenderTarget(A),S.updateRenderTargetMipmap(A)),R.isScene===!0&&R.onAfterRender(_,R,X),et.resetDefaultState(),$=-1,E=null,C.pop(),C.length>0?m=C[C.length-1]:m=null,d.pop(),d.length>0?y=d[d.length-1]:y=null};function bn(R,X,Q,ie){if(R.visible===!1)return;if(R.layers.test(X.layers)){if(R.isGroup)Q=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(X);else if(R.isLight)m.pushLight(R),R.castShadow&&m.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||se.intersectsSprite(R)){ie&&it.setFromMatrixPosition(R.matrixWorld).applyMatrix4(Ge);let We=fe.update(R),Ye=R.material;Ye.visible&&y.push(R,We,Ye,Q,it.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||se.intersectsObject(R))){let We=fe.update(R),Ye=R.material;if(ie&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),it.copy(R.boundingSphere.center)):(We.boundingSphere===null&&We.computeBoundingSphere(),it.copy(We.boundingSphere.center)),it.applyMatrix4(R.matrixWorld).applyMatrix4(Ge)),Array.isArray(Ye)){let rt=We.groups;for(let ht=0,at=rt.length;ht<at;ht++){let ut=rt[ht],Pt=Ye[ut.materialIndex];Pt&&Pt.visible&&y.push(R,We,Pt,Q,it.z,ut)}}else Ye.visible&&y.push(R,We,Ye,Q,it.z,null)}}let Fe=R.children;for(let We=0,Ye=Fe.length;We<Ye;We++)bn(Fe[We],X,Q,ie)}function hi(R,X,Q,ie){let te=R.opaque,Fe=R.transmissive,We=R.transparent;m.setupLightsView(Q),_e===!0&&lt.setGlobalState(_.clippingPlanes,Q),Fe.length>0&&Rn(te,Fe,X,Q),ie&&K.viewport(I.copy(ie)),te.length>0&&Jt(te,X,Q),Fe.length>0&&Jt(Fe,X,Q),We.length>0&&Jt(We,X,Q),K.buffers.depth.setTest(!0),K.buffers.depth.setMask(!0),K.buffers.color.setMask(!0),K.setPolygonOffset(!1)}function Rn(R,X,Q,ie){if((Q.isScene===!0?Q.overrideMaterial:null)!==null)return;let Fe=k.isWebGL2;Oe===null&&(Oe=new Wn(1,1,{generateMipmaps:!0,type:Z.has("EXT_color_buffer_half_float")?vi:ji,minFilter:Ir,samples:Fe?4:0})),_.getDrawingBufferSize(Ke),Fe?Oe.setSize(Ke.x,Ke.y):Oe.setSize(Il(Ke.x),Il(Ke.y));let We=_.getRenderTarget();_.setRenderTarget(Oe),_.getClearColor(Se),H=_.getClearAlpha(),H<1&&_.setClearColor(16777215,.5),_.clear();let Ye=_.toneMapping;_.toneMapping=bi,Jt(R,Q,ie),S.updateMultisampleRenderTarget(Oe),S.updateRenderTargetMipmap(Oe);let rt=!1;for(let ht=0,at=X.length;ht<at;ht++){let ut=X[ht],Pt=ut.object,Ot=ut.geometry,Ft=ut.material,_n=ut.group;if(Ft.side===Gn&&Pt.layers.test(ie.layers)){let Rt=Ft.side;Ft.side=fn,Ft.needsUpdate=!0,qn(Pt,Q,ie,Ot,Ft,_n),Ft.side=Rt,Ft.needsUpdate=!0,rt=!0}}rt===!0&&(S.updateMultisampleRenderTarget(Oe),S.updateRenderTargetMipmap(Oe)),_.setRenderTarget(We),_.setClearColor(Se,H),_.toneMapping=Ye}function Jt(R,X,Q){let ie=X.isScene===!0?X.overrideMaterial:null;for(let te=0,Fe=R.length;te<Fe;te++){let We=R[te],Ye=We.object,rt=We.geometry,ht=ie===null?We.material:ie,at=We.group;Ye.layers.test(Q.layers)&&qn(Ye,X,Q,rt,ht,at)}}function qn(R,X,Q,ie,te,Fe){R.onBeforeRender(_,X,Q,ie,te,Fe),R.modelViewMatrix.multiplyMatrices(Q.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),te.onBeforeRender(_,X,Q,ie,R,Fe),te.transparent===!0&&te.side===Gn&&te.forceSinglePass===!1?(te.side=fn,te.needsUpdate=!0,_.renderBufferDirect(Q,X,ie,te,R,Fe),te.side=es,te.needsUpdate=!0,_.renderBufferDirect(Q,X,ie,te,R,Fe),te.side=Gn):_.renderBufferDirect(Q,X,ie,te,R,Fe),R.onAfterRender(_,X,Q,ie,te,Fe)}function en(R,X,Q){X.isScene!==!0&&(X=Xe);let ie=de.get(R),te=m.state.lights,Fe=m.state.shadowsArray,We=te.state.version,Ye=Ue.getParameters(R,te.state,Fe,X,Q),rt=Ue.getProgramCacheKey(Ye),ht=ie.programs;ie.environment=R.isMeshStandardMaterial?X.environment:null,ie.fog=X.fog,ie.envMap=(R.isMeshStandardMaterial?G:M).get(R.envMap||ie.environment),ht===void 0&&(R.addEventListener("dispose",Re),ht=new Map,ie.programs=ht);let at=ht.get(rt);if(at!==void 0){if(ie.currentProgram===at&&ie.lightsStateVersion===We)return ei(R,Ye),at}else Ye.uniforms=Ue.getUniforms(R),R.onBuild(Q,Ye,_),R.onBeforeCompile(Ye,_),at=Ue.acquireProgram(Ye,rt),ht.set(rt,at),ie.uniforms=Ye.uniforms;let ut=ie.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(ut.clippingPlanes=lt.uniform),ei(R,Ye),ie.needsLights=Wi(R),ie.lightsStateVersion=We,ie.needsLights&&(ut.ambientLightColor.value=te.state.ambient,ut.lightProbe.value=te.state.probe,ut.directionalLights.value=te.state.directional,ut.directionalLightShadows.value=te.state.directionalShadow,ut.spotLights.value=te.state.spot,ut.spotLightShadows.value=te.state.spotShadow,ut.rectAreaLights.value=te.state.rectArea,ut.ltc_1.value=te.state.rectAreaLTC1,ut.ltc_2.value=te.state.rectAreaLTC2,ut.pointLights.value=te.state.point,ut.pointLightShadows.value=te.state.pointShadow,ut.hemisphereLights.value=te.state.hemi,ut.directionalShadowMap.value=te.state.directionalShadowMap,ut.directionalShadowMatrix.value=te.state.directionalShadowMatrix,ut.spotShadowMap.value=te.state.spotShadowMap,ut.spotLightMatrix.value=te.state.spotLightMatrix,ut.spotLightMap.value=te.state.spotLightMap,ut.pointShadowMap.value=te.state.pointShadowMap,ut.pointShadowMatrix.value=te.state.pointShadowMatrix),ie.currentProgram=at,ie.uniformsList=null,at}function Cn(R){if(R.uniformsList===null){let X=R.currentProgram.getUniforms();R.uniformsList=tr.seqWithValue(X.seq,R.uniforms)}return R.uniformsList}function ei(R,X){let Q=de.get(R);Q.outputColorSpace=X.outputColorSpace,Q.batching=X.batching,Q.instancing=X.instancing,Q.instancingColor=X.instancingColor,Q.skinning=X.skinning,Q.morphTargets=X.morphTargets,Q.morphNormals=X.morphNormals,Q.morphColors=X.morphColors,Q.morphTargetsCount=X.morphTargetsCount,Q.numClippingPlanes=X.numClippingPlanes,Q.numIntersection=X.numClipIntersection,Q.vertexAlphas=X.vertexAlphas,Q.vertexTangents=X.vertexTangents,Q.toneMapping=X.toneMapping}function rs(R,X,Q,ie,te){X.isScene!==!0&&(X=Xe),S.resetTextureUnits();let Fe=X.fog,We=ie.isMeshStandardMaterial?X.environment:null,Ye=A===null?_.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:Hi,rt=(ie.isMeshStandardMaterial?G:M).get(ie.envMap||We),ht=ie.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,at=!!Q.attributes.tangent&&(!!ie.normalMap||ie.anisotropy>0),ut=!!Q.morphAttributes.position,Pt=!!Q.morphAttributes.normal,Ot=!!Q.morphAttributes.color,Ft=bi;ie.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(Ft=_.toneMapping);let _n=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,Rt=_n!==void 0?_n.length:0,ft=de.get(ie),Nt=m.state.lights;if(_e===!0&&(Ae===!0||R!==E)){let Pn=R===E&&ie.id===$;lt.setState(ie,R,Pn)}let gt=!1;ie.version===ft.__version?(ft.needsLights&&ft.lightsStateVersion!==Nt.state.version||ft.outputColorSpace!==Ye||te.isBatchedMesh&&ft.batching===!1||!te.isBatchedMesh&&ft.batching===!0||te.isInstancedMesh&&ft.instancing===!1||!te.isInstancedMesh&&ft.instancing===!0||te.isSkinnedMesh&&ft.skinning===!1||!te.isSkinnedMesh&&ft.skinning===!0||te.isInstancedMesh&&ft.instancingColor===!0&&te.instanceColor===null||te.isInstancedMesh&&ft.instancingColor===!1&&te.instanceColor!==null||ft.envMap!==rt||ie.fog===!0&&ft.fog!==Fe||ft.numClippingPlanes!==void 0&&(ft.numClippingPlanes!==lt.numPlanes||ft.numIntersection!==lt.numIntersection)||ft.vertexAlphas!==ht||ft.vertexTangents!==at||ft.morphTargets!==ut||ft.morphNormals!==Pt||ft.morphColors!==Ot||ft.toneMapping!==Ft||k.isWebGL2===!0&&ft.morphTargetsCount!==Rt)&&(gt=!0):(gt=!0,ft.__version=ie.version);let Bt=ft.currentProgram;gt===!0&&(Bt=en(ie,X,te));let cn=!1,ui=!1,Fn=!1,tt=Bt.getUniforms(),Bn=ft.uniforms;if(K.useProgram(Bt.program)&&(cn=!0,ui=!0,Fn=!0),ie.id!==$&&($=ie.id,ui=!0),cn||E!==R){tt.setValue(z,"projectionMatrix",R.projectionMatrix),tt.setValue(z,"viewMatrix",R.matrixWorldInverse);let Pn=tt.map.cameraPosition;Pn!==void 0&&Pn.setValue(z,it.setFromMatrixPosition(R.matrixWorld)),k.logarithmicDepthBuffer&&tt.setValue(z,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(ie.isMeshPhongMaterial||ie.isMeshToonMaterial||ie.isMeshLambertMaterial||ie.isMeshBasicMaterial||ie.isMeshStandardMaterial||ie.isShaderMaterial)&&tt.setValue(z,"isOrthographic",R.isOrthographicCamera===!0),E!==R&&(E=R,ui=!0,Fn=!0)}if(te.isSkinnedMesh){tt.setOptional(z,te,"bindMatrix"),tt.setOptional(z,te,"bindMatrixInverse");let Pn=te.skeleton;Pn&&(k.floatVertexTextures?(Pn.boneTexture===null&&Pn.computeBoneTexture(),tt.setValue(z,"boneTexture",Pn.boneTexture,S)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}te.isBatchedMesh&&(tt.setOptional(z,te,"batchingTexture"),tt.setValue(z,"batchingTexture",te._matricesTexture,S));let Mi=Q.morphAttributes;if((Mi.position!==void 0||Mi.normal!==void 0||Mi.color!==void 0&&k.isWebGL2===!0)&&ct.update(te,Q,Bt),(ui||ft.receiveShadow!==te.receiveShadow)&&(ft.receiveShadow=te.receiveShadow,tt.setValue(z,"receiveShadow",te.receiveShadow)),ie.isMeshGouraudMaterial&&ie.envMap!==null&&(Bn.envMap.value=rt,Bn.flipEnvMap.value=rt.isCubeTexture&&rt.isRenderTargetTexture===!1?-1:1),ui&&(tt.setValue(z,"toneMappingExposure",_.toneMappingExposure),ft.needsLights&&Ts(Bn,Fn),Fe&&ie.fog===!0&&ue.refreshFogUniforms(Bn,Fe),ue.refreshMaterialUniforms(Bn,ie,P,ne,Oe),tr.upload(z,Cn(ft),Bn,S)),ie.isShaderMaterial&&ie.uniformsNeedUpdate===!0&&(tr.upload(z,Cn(ft),Bn,S),ie.uniformsNeedUpdate=!1),ie.isSpriteMaterial&&tt.setValue(z,"center",te.center),tt.setValue(z,"modelViewMatrix",te.modelViewMatrix),tt.setValue(z,"normalMatrix",te.normalMatrix),tt.setValue(z,"modelMatrix",te.matrixWorld),ie.isShaderMaterial||ie.isRawShaderMaterial){let Pn=ie.uniformsGroups;for(let Yn=0,os=Pn.length;Yn<os;Yn++)if(k.isWebGL2){let w=Pn[Yn];Tt.update(w,Bt),Tt.bind(w,Bt)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Bt}function Ts(R,X){R.ambientLightColor.needsUpdate=X,R.lightProbe.needsUpdate=X,R.directionalLights.needsUpdate=X,R.directionalLightShadows.needsUpdate=X,R.pointLights.needsUpdate=X,R.pointLightShadows.needsUpdate=X,R.spotLights.needsUpdate=X,R.spotLightShadows.needsUpdate=X,R.rectAreaLights.needsUpdate=X,R.hemisphereLights.needsUpdate=X}function Wi(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return B},this.getActiveMipmapLevel=function(){return U},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(R,X,Q){de.get(R.texture).__webglTexture=X,de.get(R.depthTexture).__webglTexture=Q;let ie=de.get(R);ie.__hasExternalTextures=!0,ie.__hasExternalTextures&&(ie.__autoAllocateDepthBuffer=Q===void 0,ie.__autoAllocateDepthBuffer||Z.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ie.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(R,X){let Q=de.get(R);Q.__webglFramebuffer=X,Q.__useDefaultFramebuffer=X===void 0},this.setRenderTarget=function(R,X=0,Q=0){A=R,B=X,U=Q;let ie=!0,te=null,Fe=!1,We=!1;if(R){let rt=de.get(R);rt.__useDefaultFramebuffer!==void 0?(K.bindFramebuffer(z.FRAMEBUFFER,null),ie=!1):rt.__webglFramebuffer===void 0?S.setupRenderTarget(R):rt.__hasExternalTextures&&S.rebindTextures(R,de.get(R.texture).__webglTexture,de.get(R.depthTexture).__webglTexture);let ht=R.texture;(ht.isData3DTexture||ht.isDataArrayTexture||ht.isCompressedArrayTexture)&&(We=!0);let at=de.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(at[X])?te=at[X][Q]:te=at[X],Fe=!0):k.isWebGL2&&R.samples>0&&S.useMultisampledRTT(R)===!1?te=de.get(R).__webglMultisampledFramebuffer:Array.isArray(at)?te=at[Q]:te=at,I.copy(R.viewport),J.copy(R.scissor),le=R.scissorTest}else I.copy(ge).multiplyScalar(P).floor(),J.copy(xe).multiplyScalar(P).floor(),le=be;if(K.bindFramebuffer(z.FRAMEBUFFER,te)&&k.drawBuffers&&ie&&K.drawBuffers(R,te),K.viewport(I),K.scissor(J),K.setScissorTest(le),Fe){let rt=de.get(R.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+X,rt.__webglTexture,Q)}else if(We){let rt=de.get(R.texture),ht=X||0;z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,rt.__webglTexture,Q||0,ht)}$=-1},this.readRenderTargetPixels=function(R,X,Q,ie,te,Fe,We){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ye=de.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&We!==void 0&&(Ye=Ye[We]),Ye){K.bindFramebuffer(z.FRAMEBUFFER,Ye);try{let rt=R.texture,ht=rt.format,at=rt.type;if(ht!==_i&&He.convert(ht)!==z.getParameter(z.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let ut=at===vi&&(Z.has("EXT_color_buffer_half_float")||k.isWebGL2&&Z.has("EXT_color_buffer_float"));if(at!==ji&&He.convert(at)!==z.getParameter(z.IMPLEMENTATION_COLOR_READ_TYPE)&&!(at===Qi&&(k.isWebGL2||Z.has("OES_texture_float")||Z.has("WEBGL_color_buffer_float")))&&!ut){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=R.width-ie&&Q>=0&&Q<=R.height-te&&z.readPixels(X,Q,ie,te,He.convert(ht),He.convert(at),Fe)}finally{let rt=A!==null?de.get(A).__webglFramebuffer:null;K.bindFramebuffer(z.FRAMEBUFFER,rt)}}},this.copyFramebufferToTexture=function(R,X,Q=0){let ie=Math.pow(2,-Q),te=Math.floor(X.image.width*ie),Fe=Math.floor(X.image.height*ie);S.setTexture2D(X,0),z.copyTexSubImage2D(z.TEXTURE_2D,Q,0,0,R.x,R.y,te,Fe),K.unbindTexture()},this.copyTextureToTexture=function(R,X,Q,ie=0){let te=X.image.width,Fe=X.image.height,We=He.convert(Q.format),Ye=He.convert(Q.type);S.setTexture2D(Q,0),z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,Q.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Q.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,Q.unpackAlignment),X.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,ie,R.x,R.y,te,Fe,We,Ye,X.image.data):X.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,ie,R.x,R.y,X.mipmaps[0].width,X.mipmaps[0].height,We,X.mipmaps[0].data):z.texSubImage2D(z.TEXTURE_2D,ie,R.x,R.y,We,Ye,X.image),ie===0&&Q.generateMipmaps&&z.generateMipmap(z.TEXTURE_2D),K.unbindTexture()},this.copyTextureToTexture3D=function(R,X,Q,ie,te=0){if(_.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let Fe=R.max.x-R.min.x+1,We=R.max.y-R.min.y+1,Ye=R.max.z-R.min.z+1,rt=He.convert(ie.format),ht=He.convert(ie.type),at;if(ie.isData3DTexture)S.setTexture3D(ie,0),at=z.TEXTURE_3D;else if(ie.isDataArrayTexture||ie.isCompressedArrayTexture)S.setTexture2DArray(ie,0),at=z.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,ie.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ie.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,ie.unpackAlignment);let ut=z.getParameter(z.UNPACK_ROW_LENGTH),Pt=z.getParameter(z.UNPACK_IMAGE_HEIGHT),Ot=z.getParameter(z.UNPACK_SKIP_PIXELS),Ft=z.getParameter(z.UNPACK_SKIP_ROWS),_n=z.getParameter(z.UNPACK_SKIP_IMAGES),Rt=Q.isCompressedTexture?Q.mipmaps[te]:Q.image;z.pixelStorei(z.UNPACK_ROW_LENGTH,Rt.width),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,Rt.height),z.pixelStorei(z.UNPACK_SKIP_PIXELS,R.min.x),z.pixelStorei(z.UNPACK_SKIP_ROWS,R.min.y),z.pixelStorei(z.UNPACK_SKIP_IMAGES,R.min.z),Q.isDataTexture||Q.isData3DTexture?z.texSubImage3D(at,te,X.x,X.y,X.z,Fe,We,Ye,rt,ht,Rt.data):Q.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),z.compressedTexSubImage3D(at,te,X.x,X.y,X.z,Fe,We,Ye,rt,Rt.data)):z.texSubImage3D(at,te,X.x,X.y,X.z,Fe,We,Ye,rt,ht,Rt),z.pixelStorei(z.UNPACK_ROW_LENGTH,ut),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,Pt),z.pixelStorei(z.UNPACK_SKIP_PIXELS,Ot),z.pixelStorei(z.UNPACK_SKIP_ROWS,Ft),z.pixelStorei(z.UNPACK_SKIP_IMAGES,_n),te===0&&ie.generateMipmaps&&z.generateMipmap(at),K.unbindTexture()},this.initTexture=function(R){R.isCubeTexture?S.setTextureCube(R,0):R.isData3DTexture?S.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?S.setTexture2DArray(R,0):S.setTexture2D(R,0),K.unbindTexture()},this.resetState=function(){B=0,U=0,A=null,K.reset(),et.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Fi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===_c?"display-p3":"srgb",t.unpackColorSpace=Lt.workingColorSpace===pa?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===It?vs:wu}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===vs?It:Hi}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}},ql=class extends Dr{};ql.prototype.isWebGL1Renderer=!0;var Ko=class s{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Ze(e),this.near=t,this.far=n}clone(){return new s(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},lr=class extends zn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}},Qo=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Rl,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=Bi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Bi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Bi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Hn=new L,Nr=class s{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Hn.fromBufferAttribute(this,t),Hn.applyMatrix4(e),this.setXYZ(t,Hn.x,Hn.y,Hn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Hn.fromBufferAttribute(this,t),Hn.applyNormalMatrix(e),this.setXYZ(t,Hn.x,Hn.y,Hn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Hn.fromBufferAttribute(this,t),Hn.transformDirection(e),this.setXYZ(t,Hn.x,Hn.y,Hn.z);return this}setX(e,t){return this.normalized&&(t=kt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=kt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=kt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=kt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Oi(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Oi(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Oi(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Oi(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=kt(t,this.array),n=kt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=kt(t,this.array),n=kt(n,this.array),i=kt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=kt(t,this.array),n=kt(n,this.array),i=kt(i,this.array),r=kt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new yn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new s(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Ms=class extends ns{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ze(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Xs,yr=new L,qs=new L,Ys=new L,Zs=new Me,Mr=new Me,Ou=new vt,To=new L,Sr=new L,Ao=new L,nu=new Me,gl=new Me,iu=new Me,cr=class extends zn{constructor(e=new Ms){if(super(),this.isSprite=!0,this.type="Sprite",Xs===void 0){Xs=new Mn;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Qo(t,5);Xs.setIndex([0,1,2,0,2,3]),Xs.setAttribute("position",new Nr(n,3,0,!1)),Xs.setAttribute("uv",new Nr(n,2,3,!1))}this.geometry=Xs,this.material=e,this.center=new Me(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),qs.setFromMatrixScale(this.matrixWorld),Ou.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Ys.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&qs.multiplyScalar(-Ys.z);let n=this.material.rotation,i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));let o=this.center;Ro(To.set(-.5,-.5,0),Ys,o,qs,i,r),Ro(Sr.set(.5,-.5,0),Ys,o,qs,i,r),Ro(Ao.set(.5,.5,0),Ys,o,qs,i,r),nu.set(0,0),gl.set(1,0),iu.set(1,1);let a=e.ray.intersectTriangle(To,Sr,Ao,!1,yr);if(a===null&&(Ro(Sr.set(-.5,.5,0),Ys,o,qs,i,r),gl.set(0,1),a=e.ray.intersectTriangle(To,Ao,Sr,!1,yr),a===null))return;let l=e.ray.origin.distanceTo(yr);l<e.near||l>e.far||t.push({distance:l,point:yr.clone(),uv:gs.getInterpolation(yr,To,Sr,Ao,nu,gl,iu,new Me),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function Ro(s,e,t,n,i,r){Zs.subVectors(s,t).addScalar(.5).multiply(n),i!==void 0?(Mr.x=r*Zs.x-i*Zs.y,Mr.y=i*Zs.x+r*Zs.y):Mr.copy(Zs),s.copy(e),s.x+=Mr.x,s.y+=Mr.y,s.applyMatrix4(Ou)}var wi=class extends yn{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Js=new vt,su=new vt,Co=[],ru=new ki,H0=new vt,Er=new Be,br=new ys,Wt=class extends Be{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new wi(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,H0)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new ki),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Js),ru.copy(e.boundingBox).applyMatrix4(Js),this.boundingBox.union(ru)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new ys),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Js),br.copy(e.boundingSphere).applyMatrix4(Js),this.boundingSphere.union(br)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){let n=this.matrixWorld,i=this.count;if(Er.geometry=this.geometry,Er.material=this.material,Er.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),br.copy(this.boundingSphere),br.applyMatrix4(n),e.ray.intersectsSphere(br)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,Js),su.multiplyMatrices(n,Js),Er.matrixWorld=su,Er.raycast(e,Co);for(let o=0,a=Co.length;o<a;o++){let l=Co[o];l.instanceId=r,l.object=this,t.push(l)}Co.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new wi(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}};var mn=class extends si{constructor(e,t,n,i,r,o,a,l,c){super(e,t,n,i,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},oi=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,i=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(i),t.push(r),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let n=this.getLengths(),i=0,r=n.length,o;t?o=t:o=e*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),c=n[i]-o,c<0)a=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===o)return i/(r-1);let h=n[i],f=n[i+1]-h,p=(o-h)/f;return(i+p)/(r-1)}getTangent(e,t){let i=e-1e-4,r=e+1e-4;i<0&&(i=0),r>1&&(r=1);let o=this.getPoint(i),a=this.getPoint(r),l=t||(o.isVector2?new Me:new L);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){let n=new L,i=[],r=[],o=[],a=new L,l=new vt;for(let p=0;p<=e;p++){let x=p/e;i[p]=this.getTangentAt(x,new L)}r[0]=new L,o[0]=new L;let c=Number.MAX_VALUE,h=Math.abs(i[0].x),u=Math.abs(i[0].y),f=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),f<=c&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],a),o[0].crossVectors(i[0],r[0]);for(let p=1;p<=e;p++){if(r[p]=r[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(i[p-1],i[p]),a.length()>Number.EPSILON){a.normalize();let x=Math.acos(An(i[p-1].dot(i[p]),-1,1));r[p].applyMatrix4(l.makeRotationAxis(a,x))}o[p].crossVectors(i[p],r[p])}if(t===!0){let p=Math.acos(An(r[0].dot(r[e]),-1,1));p/=e,i[0].dot(a.crossVectors(r[0],r[e]))>0&&(p=-p);for(let x=1;x<=e;x++)r[x].applyMatrix4(l.makeRotationAxis(i[x],p*x)),o[x].crossVectors(i[x],r[x])}return{tangents:i,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},zr=class extends oi{constructor(e=0,t=0,n=1,i=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t){let n=t||new Me,i=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(o?r=0:r=i),this.aClockwise===!0&&!o&&(r===i?r=-i:r=r-i);let a=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=l-this.aX,p=c-this.aY;l=f*h-p*u+this.aX,c=f*u+p*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Yl=class extends zr{constructor(e,t,n,i,r,o){super(e,t,n,n,i,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function yc(){let s=0,e=0,t=0,n=0;function i(r,o,a,l){s=r,e=a,t=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){i(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,u){let f=(o-r)/c-(a-r)/(c+h)+(a-o)/h,p=(a-o)/h-(l-o)/(h+u)+(l-a)/u;f*=h,p*=h,i(o,a,f,p)},calc:function(r){let o=r*r,a=o*r;return s+e*r+t*o+n*a}}}var Po=new L,xl=new yc,_l=new yc,vl=new yc,Or=class extends oi{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new L){let n=t,i=this.points,r=i.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=i[(a-1)%r]:(Po.subVectors(i[0],i[1]).add(i[0]),c=Po);let u=i[a%r],f=i[(a+1)%r];if(this.closed||a+2<r?h=i[(a+2)%r]:(Po.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=Po),this.curveType==="centripetal"||this.curveType==="chordal"){let p=this.curveType==="chordal"?.5:.25,x=Math.pow(c.distanceToSquared(u),p),y=Math.pow(u.distanceToSquared(f),p),m=Math.pow(f.distanceToSquared(h),p);y<1e-4&&(y=1),x<1e-4&&(x=y),m<1e-4&&(m=y),xl.initNonuniformCatmullRom(c.x,u.x,f.x,h.x,x,y,m),_l.initNonuniformCatmullRom(c.y,u.y,f.y,h.y,x,y,m),vl.initNonuniformCatmullRom(c.z,u.z,f.z,h.z,x,y,m)}else this.curveType==="catmullrom"&&(xl.initCatmullRom(c.x,u.x,f.x,h.x,this.tension),_l.initCatmullRom(c.y,u.y,f.y,h.y,this.tension),vl.initCatmullRom(c.z,u.z,f.z,h.z,this.tension));return n.set(xl.calc(l),_l.calc(l),vl.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new L().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function ou(s,e,t,n,i){let r=(n-e)*.5,o=(i-t)*.5,a=s*s,l=s*a;return(2*t-2*n+r+o)*l+(-3*t+3*n-2*r-o)*a+r*s+t}function k0(s,e){let t=1-s;return t*t*e}function V0(s,e){return 2*(1-s)*s*e}function G0(s,e){return s*s*e}function Rr(s,e,t,n){return k0(s,e)+V0(s,t)+G0(s,n)}function W0(s,e){let t=1-s;return t*t*t*e}function X0(s,e){let t=1-s;return 3*t*t*s*e}function q0(s,e){return 3*(1-s)*s*s*e}function Y0(s,e){return s*s*s*e}function Cr(s,e,t,n,i){return W0(s,e)+X0(s,t)+q0(s,n)+Y0(s,i)}var jo=class extends oi{constructor(e=new Me,t=new Me,n=new Me,i=new Me){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new Me){let n=t,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Cr(e,i.x,r.x,o.x,a.x),Cr(e,i.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Zl=class extends oi{constructor(e=new L,t=new L,n=new L,i=new L){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new L){let n=t,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Cr(e,i.x,r.x,o.x,a.x),Cr(e,i.y,r.y,o.y,a.y),Cr(e,i.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},ea=class extends oi{constructor(e=new Me,t=new Me){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Me){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Me){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Jl=class extends oi{constructor(e=new L,t=new L){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new L){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new L){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ta=class extends oi{constructor(e=new Me,t=new Me,n=new Me){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new Me){let n=t,i=this.v0,r=this.v1,o=this.v2;return n.set(Rr(e,i.x,r.x,o.x),Rr(e,i.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},na=class extends oi{constructor(e=new L,t=new L,n=new L){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new L){let n=t,i=this.v0,r=this.v1,o=this.v2;return n.set(Rr(e,i.x,r.x,o.x),Rr(e,i.y,r.y,o.y),Rr(e,i.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ia=class extends oi{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Me){let n=t,i=this.points,r=(i.length-1)*e,o=Math.floor(r),a=r-o,l=i[o===0?o:o-1],c=i[o],h=i[o>i.length-2?i.length-1:o+1],u=i[o>i.length-3?i.length-1:o+2];return n.set(ou(a,l.x,c.x,h.x,u.x),ou(a,l.y,c.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new Me().fromArray(i))}return this}},sa=Object.freeze({__proto__:null,ArcCurve:Yl,CatmullRomCurve3:Or,CubicBezierCurve:jo,CubicBezierCurve3:Zl,EllipseCurve:zr,LineCurve:ea,LineCurve3:Jl,QuadraticBezierCurve:ta,QuadraticBezierCurve3:na,SplineCurve:ia}),$l=class extends oi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new sa[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),i=this.getCurveLengths(),r=0;for(;r<i.length;){if(i[r]>=n){let o=i[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let i=0,r=this.curves;i<r.length;i++){let o=r[i],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let i=e.curves[t];this.curves.push(new sa[i.type]().fromJSON(i))}return this}},hr=class extends $l{constructor(e){super(),this.type="Path",this.currentPoint=new Me,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new ea(this.currentPoint.clone(),new Me(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){let r=new ta(this.currentPoint.clone(),new Me(e,t),new Me(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,r,o){let a=new jo(this.currentPoint.clone(),new Me(e,t),new Me(n,i),new Me(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new ia(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,n,i,r,o),this}absarc(e,t,n,i,r,o){return this.absellipse(e,t,n,n,i,r,o),this}ellipse(e,t,n,i,r,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,i,r,o,a,l),this}absellipse(e,t,n,i,r,o,a,l){let c=new zr(e,t,n,i,r,o,a,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}};var ra=class s extends Mn{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);let r=[],o=[],a=[],l=[],c=new L,h=new Me;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,f=3;u<=t;u++,f+=3){let p=n+u/t*i;c.x=e*Math.cos(p),c.y=e*Math.sin(p),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[f]/e+1)/2,h.y=(o[f+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new Ut(o,3)),this.setAttribute("normal",new Ut(a,3)),this.setAttribute("uv",new Ut(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.segments,e.thetaStart,e.thetaLength)}},$n=class s extends Mn{constructor(e=1,t=1,n=1,i=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;i=Math.floor(i),r=Math.floor(r);let h=[],u=[],f=[],p=[],x=0,y=[],m=n/2,d=0;C(),o===!1&&(e>0&&_(!0),t>0&&_(!1)),this.setIndex(h),this.setAttribute("position",new Ut(u,3)),this.setAttribute("normal",new Ut(f,3)),this.setAttribute("uv",new Ut(p,2));function C(){let T=new L,B=new L,U=0,A=(t-e)/n;for(let $=0;$<=r;$++){let E=[],I=$/r,J=I*(t-e)+e;for(let le=0;le<=i;le++){let Se=le/i,H=Se*l+a,q=Math.sin(H),ne=Math.cos(H);B.x=J*q,B.y=-I*n+m,B.z=J*ne,u.push(B.x,B.y,B.z),T.set(q,A,ne).normalize(),f.push(T.x,T.y,T.z),p.push(Se,1-I),E.push(x++)}y.push(E)}for(let $=0;$<i;$++)for(let E=0;E<r;E++){let I=y[E][$],J=y[E+1][$],le=y[E+1][$+1],Se=y[E][$+1];h.push(I,J,Se),h.push(J,le,Se),U+=6}c.addGroup(d,U,0),d+=U}function _(T){let B=x,U=new Me,A=new L,$=0,E=T===!0?e:t,I=T===!0?1:-1;for(let le=1;le<=i;le++)u.push(0,m*I,0),f.push(0,I,0),p.push(.5,.5),x++;let J=x;for(let le=0;le<=i;le++){let H=le/i*l+a,q=Math.cos(H),ne=Math.sin(H);A.x=E*ne,A.y=m*I,A.z=E*q,u.push(A.x,A.y,A.z),f.push(0,I,0),U.x=q*.5+.5,U.y=ne*.5*I+.5,p.push(U.x,U.y),x++}for(let le=0;le<i;le++){let Se=B+le,H=J+le;T===!0?h.push(H,H+1,Se):h.push(H+1,H,Se),$+=3}c.addGroup(d,$,T===!0?1:2),d+=$}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Fr=class s extends $n{constructor(e=1,t=1,n=32,i=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,n,i,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new s(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var Br=class extends hr{constructor(e){super(e),this.uuid=Bi(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let i=e.holes[t];this.holes.push(new hr().fromJSON(i))}return this}},Z0={triangulate:function(s,e,t=2){let n=e&&e.length,i=n?e[0]*t:s.length,r=Fu(s,0,i,t,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c,h,u,f,p;if(n&&(r=j0(s,e,r,t)),s.length>80*t){a=c=s[0],l=h=s[1];for(let x=t;x<i;x+=t)u=s[x],f=s[x+1],u<a&&(a=u),f<l&&(l=f),u>c&&(c=u),f>h&&(h=f);p=Math.max(c-a,h-l),p=p!==0?32767/p:0}return Hr(r,o,t,a,l,p,0),o}};function Fu(s,e,t,n,i){let r,o;if(i===hx(s,e,t,n)>0)for(r=e;r<t;r+=n)o=au(r,s[r],s[r+1],o);else for(r=t-n;r>=e;r-=n)o=au(r,s[r],s[r+1],o);return o&&ga(o,o.next)&&(Vr(o),o=o.next),o}function Ss(s,e){if(!s)return s;e||(e=s);let t=s,n;do if(n=!1,!t.steiner&&(ga(t,t.next)||jt(t.prev,t,t.next)===0)){if(Vr(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Hr(s,e,t,n,i,r,o){if(!s)return;!o&&r&&sx(s,n,i,r);let a=s,l,c;for(;s.prev!==s.next;){if(l=s.prev,c=s.next,r?$0(s,n,i,r):J0(s)){e.push(l.i/t|0),e.push(s.i/t|0),e.push(c.i/t|0),Vr(s),s=c.next,a=c.next;continue}if(s=c,s===a){o?o===1?(s=K0(Ss(s),e,t),Hr(s,e,t,n,i,r,2)):o===2&&Q0(s,e,t,n,i,r):Hr(Ss(s),e,t,n,i,r,1);break}}}function J0(s){let e=s.prev,t=s,n=s.next;if(jt(e,t,n)>=0)return!1;let i=e.x,r=t.x,o=n.x,a=e.y,l=t.y,c=n.y,h=i<r?i<o?i:o:r<o?r:o,u=a<l?a<c?a:c:l<c?l:c,f=i>r?i>o?i:o:r>o?r:o,p=a>l?a>c?a:c:l>c?l:c,x=n.next;for(;x!==e;){if(x.x>=h&&x.x<=f&&x.y>=u&&x.y<=p&&Qs(i,a,r,l,o,c,x.x,x.y)&&jt(x.prev,x,x.next)>=0)return!1;x=x.next}return!0}function $0(s,e,t,n){let i=s.prev,r=s,o=s.next;if(jt(i,r,o)>=0)return!1;let a=i.x,l=r.x,c=o.x,h=i.y,u=r.y,f=o.y,p=a<l?a<c?a:c:l<c?l:c,x=h<u?h<f?h:f:u<f?u:f,y=a>l?a>c?a:c:l>c?l:c,m=h>u?h>f?h:f:u>f?u:f,d=Kl(p,x,e,t,n),C=Kl(y,m,e,t,n),_=s.prevZ,T=s.nextZ;for(;_&&_.z>=d&&T&&T.z<=C;){if(_.x>=p&&_.x<=y&&_.y>=x&&_.y<=m&&_!==i&&_!==o&&Qs(a,h,l,u,c,f,_.x,_.y)&&jt(_.prev,_,_.next)>=0||(_=_.prevZ,T.x>=p&&T.x<=y&&T.y>=x&&T.y<=m&&T!==i&&T!==o&&Qs(a,h,l,u,c,f,T.x,T.y)&&jt(T.prev,T,T.next)>=0))return!1;T=T.nextZ}for(;_&&_.z>=d;){if(_.x>=p&&_.x<=y&&_.y>=x&&_.y<=m&&_!==i&&_!==o&&Qs(a,h,l,u,c,f,_.x,_.y)&&jt(_.prev,_,_.next)>=0)return!1;_=_.prevZ}for(;T&&T.z<=C;){if(T.x>=p&&T.x<=y&&T.y>=x&&T.y<=m&&T!==i&&T!==o&&Qs(a,h,l,u,c,f,T.x,T.y)&&jt(T.prev,T,T.next)>=0)return!1;T=T.nextZ}return!0}function K0(s,e,t){let n=s;do{let i=n.prev,r=n.next.next;!ga(i,r)&&Bu(i,n,n.next,r)&&kr(i,r)&&kr(r,i)&&(e.push(i.i/t|0),e.push(n.i/t|0),e.push(r.i/t|0),Vr(n),Vr(n.next),n=s=r),n=n.next}while(n!==s);return Ss(n)}function Q0(s,e,t,n,i,r){let o=s;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&ax(o,a)){let l=Hu(o,a);o=Ss(o,o.next),l=Ss(l,l.next),Hr(o,e,t,n,i,r,0),Hr(l,e,t,n,i,r,0);return}a=a.next}o=o.next}while(o!==s)}function j0(s,e,t,n){let i=[],r,o,a,l,c;for(r=0,o=e.length;r<o;r++)a=e[r]*n,l=r<o-1?e[r+1]*n:s.length,c=Fu(s,a,l,n,!1),c===c.next&&(c.steiner=!0),i.push(ox(c));for(i.sort(ex),r=0;r<i.length;r++)t=tx(i[r],t);return t}function ex(s,e){return s.x-e.x}function tx(s,e){let t=nx(s,e);if(!t)return e;let n=Hu(t,s);return Ss(n,n.next),Ss(t,t.next)}function nx(s,e){let t=e,n=-1/0,i,r=s.x,o=s.y;do{if(o<=t.y&&o>=t.next.y&&t.next.y!==t.y){let f=t.x+(o-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(f<=r&&f>n&&(n=f,i=t.x<t.next.x?t:t.next,f===r))return i}t=t.next}while(t!==e);if(!i)return null;let a=i,l=i.x,c=i.y,h=1/0,u;t=i;do r>=t.x&&t.x>=l&&r!==t.x&&Qs(o<c?r:n,o,l,c,o<c?n:r,o,t.x,t.y)&&(u=Math.abs(o-t.y)/(r-t.x),kr(t,s)&&(u<h||u===h&&(t.x>i.x||t.x===i.x&&ix(i,t)))&&(i=t,h=u)),t=t.next;while(t!==a);return i}function ix(s,e){return jt(s.prev,s,e.prev)<0&&jt(e.next,s,s.next)<0}function sx(s,e,t,n){let i=s;do i.z===0&&(i.z=Kl(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,rx(i)}function rx(s){let e,t,n,i,r,o,a,l,c=1;do{for(t=s,s=null,r=null,o=0;t;){for(o++,n=t,a=0,e=0;e<c&&(a++,n=n.nextZ,!!n);e++);for(l=c;a>0||l>0&&n;)a!==0&&(l===0||!n||t.z<=n.z)?(i=t,t=t.nextZ,a--):(i=n,n=n.nextZ,l--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;t=n}r.nextZ=null,c*=2}while(o>1);return s}function Kl(s,e,t,n,i){return s=(s-t)*i|0,e=(e-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,s|e<<1}function ox(s){let e=s,t=s;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==s);return t}function Qs(s,e,t,n,i,r,o,a){return(i-o)*(e-a)>=(s-o)*(r-a)&&(s-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(i-o)*(n-a)}function ax(s,e){return s.next.i!==e.i&&s.prev.i!==e.i&&!lx(s,e)&&(kr(s,e)&&kr(e,s)&&cx(s,e)&&(jt(s.prev,s,e.prev)||jt(s,e.prev,e))||ga(s,e)&&jt(s.prev,s,s.next)>0&&jt(e.prev,e,e.next)>0)}function jt(s,e,t){return(e.y-s.y)*(t.x-e.x)-(e.x-s.x)*(t.y-e.y)}function ga(s,e){return s.x===e.x&&s.y===e.y}function Bu(s,e,t,n){let i=Lo(jt(s,e,t)),r=Lo(jt(s,e,n)),o=Lo(jt(t,n,s)),a=Lo(jt(t,n,e));return!!(i!==r&&o!==a||i===0&&Io(s,t,e)||r===0&&Io(s,n,e)||o===0&&Io(t,s,n)||a===0&&Io(t,e,n))}function Io(s,e,t){return e.x<=Math.max(s.x,t.x)&&e.x>=Math.min(s.x,t.x)&&e.y<=Math.max(s.y,t.y)&&e.y>=Math.min(s.y,t.y)}function Lo(s){return s>0?1:s<0?-1:0}function lx(s,e){let t=s;do{if(t.i!==s.i&&t.next.i!==s.i&&t.i!==e.i&&t.next.i!==e.i&&Bu(t,t.next,s,e))return!0;t=t.next}while(t!==s);return!1}function kr(s,e){return jt(s.prev,s,s.next)<0?jt(s,e,s.next)>=0&&jt(s,s.prev,e)>=0:jt(s,e,s.prev)<0||jt(s,s.next,e)<0}function cx(s,e){let t=s,n=!1,i=(s.x+e.x)/2,r=(s.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&i<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==s);return n}function Hu(s,e){let t=new Ql(s.i,s.x,s.y),n=new Ql(e.i,e.x,e.y),i=s.next,r=e.prev;return s.next=e,e.prev=s,t.next=i,i.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function au(s,e,t,n){let i=new Ql(s,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Vr(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function Ql(s,e,t){this.i=s,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function hx(s,e,t,n){let i=0;for(let r=e,o=t-n;r<t;r+=n)i+=(s[o]-s[r])*(s[r+1]+s[o+1]),o=r;return i}var Pr=class s{static area(e){let t=e.length,n=0;for(let i=t-1,r=0;r<t;i=r++)n+=e[i].x*e[r].y-e[r].x*e[i].y;return n*.5}static isClockWise(e){return s.area(e)<0}static triangulateShape(e,t){let n=[],i=[],r=[];lu(e),cu(n,e);let o=e.length;t.forEach(lu);for(let l=0;l<t.length;l++)i.push(o),o+=t[l].length,cu(n,t[l]);let a=Z0.triangulate(n,i);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function lu(s){let e=s.length;e>2&&s[e-1].equals(s[0])&&s.pop()}function cu(s,e){for(let t=0;t<e.length;t++)s.push(e[t].x),s.push(e[t].y)}var oa=class s extends Mn{constructor(e=new Br([new Me(.5,.5),new Me(-.5,.5),new Me(-.5,-.5),new Me(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,i=[],r=[];for(let a=0,l=e.length;a<l;a++){let c=e[a];o(c)}this.setAttribute("position",new Ut(i,3)),this.setAttribute("uv",new Ut(r,2)),this.computeVertexNormals();function o(a){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1,f=t.bevelEnabled!==void 0?t.bevelEnabled:!0,p=t.bevelThickness!==void 0?t.bevelThickness:.2,x=t.bevelSize!==void 0?t.bevelSize:p-.1,y=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3,d=t.extrudePath,C=t.UVGenerator!==void 0?t.UVGenerator:ux,_,T=!1,B,U,A,$;d&&(_=d.getSpacedPoints(h),T=!0,f=!1,B=d.computeFrenetFrames(h,!1),U=new L,A=new L,$=new L),f||(m=0,p=0,x=0,y=0);let E=a.extractPoints(c),I=E.shape,J=E.holes;if(!Pr.isClockWise(I)){I=I.reverse();for(let z=0,j=J.length;z<j;z++){let Z=J[z];Pr.isClockWise(Z)&&(J[z]=Z.reverse())}}let Se=Pr.triangulateShape(I,J),H=I;for(let z=0,j=J.length;z<j;z++){let Z=J[z];I=I.concat(Z)}function q(z,j,Z){return j||console.error("THREE.ExtrudeGeometry: vec does not exist"),z.clone().addScaledVector(j,Z)}let ne=I.length,P=Se.length;function re(z,j,Z){let k,K,ve,de=z.x-j.x,S=z.y-j.y,M=Z.x-z.x,G=Z.y-z.y,ce=de*de+S*S,pe=de*G-S*M;if(Math.abs(pe)>Number.EPSILON){let fe=Math.sqrt(ce),Ue=Math.sqrt(M*M+G*G),ue=j.x-S/fe,ze=j.y+de/fe,qe=Z.x-G/Ue,lt=Z.y+M/Ue,ye=((qe-ue)*G-(lt-ze)*M)/(de*G-S*M);k=ue+de*ye-z.x,K=ze+S*ye-z.y;let Et=k*k+K*K;if(Et<=2)return new Me(k,K);ve=Math.sqrt(Et/2)}else{let fe=!1;de>Number.EPSILON?M>Number.EPSILON&&(fe=!0):de<-Number.EPSILON?M<-Number.EPSILON&&(fe=!0):Math.sign(S)===Math.sign(G)&&(fe=!0),fe?(k=-S,K=de,ve=Math.sqrt(ce)):(k=de,K=S,ve=Math.sqrt(ce/2))}return new Me(k/ve,K/ve)}let ae=[];for(let z=0,j=H.length,Z=j-1,k=z+1;z<j;z++,Z++,k++)Z===j&&(Z=0),k===j&&(k=0),ae[z]=re(H[z],H[Z],H[k]);let ge=[],xe,be=ae.concat();for(let z=0,j=J.length;z<j;z++){let Z=J[z];xe=[];for(let k=0,K=Z.length,ve=K-1,de=k+1;k<K;k++,ve++,de++)ve===K&&(ve=0),de===K&&(de=0),xe[k]=re(Z[k],Z[ve],Z[de]);ge.push(xe),be=be.concat(xe)}for(let z=0;z<m;z++){let j=z/m,Z=p*Math.cos(j*Math.PI/2),k=x*Math.sin(j*Math.PI/2)+y;for(let K=0,ve=H.length;K<ve;K++){let de=q(H[K],ae[K],k);Ge(de.x,de.y,-Z)}for(let K=0,ve=J.length;K<ve;K++){let de=J[K];xe=ge[K];for(let S=0,M=de.length;S<M;S++){let G=q(de[S],xe[S],k);Ge(G.x,G.y,-Z)}}}let se=x+y;for(let z=0;z<ne;z++){let j=f?q(I[z],be[z],se):I[z];T?(A.copy(B.normals[0]).multiplyScalar(j.x),U.copy(B.binormals[0]).multiplyScalar(j.y),$.copy(_[0]).add(A).add(U),Ge($.x,$.y,$.z)):Ge(j.x,j.y,0)}for(let z=1;z<=h;z++)for(let j=0;j<ne;j++){let Z=f?q(I[j],be[j],se):I[j];T?(A.copy(B.normals[z]).multiplyScalar(Z.x),U.copy(B.binormals[z]).multiplyScalar(Z.y),$.copy(_[z]).add(A).add(U),Ge($.x,$.y,$.z)):Ge(Z.x,Z.y,u/h*z)}for(let z=m-1;z>=0;z--){let j=z/m,Z=p*Math.cos(j*Math.PI/2),k=x*Math.sin(j*Math.PI/2)+y;for(let K=0,ve=H.length;K<ve;K++){let de=q(H[K],ae[K],k);Ge(de.x,de.y,u+Z)}for(let K=0,ve=J.length;K<ve;K++){let de=J[K];xe=ge[K];for(let S=0,M=de.length;S<M;S++){let G=q(de[S],xe[S],k);T?Ge(G.x,G.y+_[h-1].y,_[h-1].x+Z):Ge(G.x,G.y,u+Z)}}}_e(),Ae();function _e(){let z=i.length/3;if(f){let j=0,Z=ne*j;for(let k=0;k<P;k++){let K=Se[k];Ke(K[2]+Z,K[1]+Z,K[0]+Z)}j=h+m*2,Z=ne*j;for(let k=0;k<P;k++){let K=Se[k];Ke(K[0]+Z,K[1]+Z,K[2]+Z)}}else{for(let j=0;j<P;j++){let Z=Se[j];Ke(Z[2],Z[1],Z[0])}for(let j=0;j<P;j++){let Z=Se[j];Ke(Z[0]+ne*h,Z[1]+ne*h,Z[2]+ne*h)}}n.addGroup(z,i.length/3-z,0)}function Ae(){let z=i.length/3,j=0;Oe(H,j),j+=H.length;for(let Z=0,k=J.length;Z<k;Z++){let K=J[Z];Oe(K,j),j+=K.length}n.addGroup(z,i.length/3-z,1)}function Oe(z,j){let Z=z.length;for(;--Z>=0;){let k=Z,K=Z-1;K<0&&(K=z.length-1);for(let ve=0,de=h+m*2;ve<de;ve++){let S=ne*ve,M=ne*(ve+1),G=j+k+S,ce=j+K+S,pe=j+K+M,fe=j+k+M;it(G,ce,pe,fe)}}}function Ge(z,j,Z){l.push(z),l.push(j),l.push(Z)}function Ke(z,j,Z){Xe(z),Xe(j),Xe(Z);let k=i.length/3,K=C.generateTopUV(n,i,k-3,k-2,k-1);st(K[0]),st(K[1]),st(K[2])}function it(z,j,Z,k){Xe(z),Xe(j),Xe(k),Xe(j),Xe(Z),Xe(k);let K=i.length/3,ve=C.generateSideWallUV(n,i,K-6,K-3,K-2,K-1);st(ve[0]),st(ve[1]),st(ve[3]),st(ve[1]),st(ve[2]),st(ve[3])}function Xe(z){i.push(l[z*3+0]),i.push(l[z*3+1]),i.push(l[z*3+2])}function st(z){r.push(z.x),r.push(z.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return fx(t,n,e)}static fromJSON(e,t){let n=[];for(let r=0,o=e.shapes.length;r<o;r++){let a=t[e.shapes[r]];n.push(a)}let i=e.options.extrudePath;return i!==void 0&&(e.options.extrudePath=new sa[i.type]().fromJSON(i)),new s(n,e.options)}},ux={generateTopUV:function(s,e,t,n,i){let r=e[t*3],o=e[t*3+1],a=e[n*3],l=e[n*3+1],c=e[i*3],h=e[i*3+1];return[new Me(r,o),new Me(a,l),new Me(c,h)]},generateSideWallUV:function(s,e,t,n,i,r){let o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[n*3],h=e[n*3+1],u=e[n*3+2],f=e[i*3],p=e[i*3+1],x=e[i*3+2],y=e[r*3],m=e[r*3+1],d=e[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new Me(o,1-l),new Me(c,1-u),new Me(f,1-x),new Me(y,1-d)]:[new Me(a,1-l),new Me(h,1-u),new Me(p,1-x),new Me(m,1-d)]}};function fx(s,e,t){if(t.shapes=[],Array.isArray(s))for(let n=0,i=s.length;n<i;n++){let r=s[n];t.shapes.push(r.uuid)}else t.shapes.push(s.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var ai=class s extends Mn{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,h=[],u=new L,f=new L,p=[],x=[],y=[],m=[];for(let d=0;d<=n;d++){let C=[],_=d/n,T=0;d===0&&o===0?T=.5/t:d===n&&l===Math.PI&&(T=-.5/t);for(let B=0;B<=t;B++){let U=B/t;u.x=-e*Math.cos(i+U*r)*Math.sin(o+_*a),u.y=e*Math.cos(o+_*a),u.z=e*Math.sin(i+U*r)*Math.sin(o+_*a),x.push(u.x,u.y,u.z),f.copy(u).normalize(),y.push(f.x,f.y,f.z),m.push(U+T,1-_),C.push(c++)}h.push(C)}for(let d=0;d<n;d++)for(let C=0;C<t;C++){let _=h[d][C+1],T=h[d][C],B=h[d+1][C],U=h[d+1][C+1];(d!==0||o>0)&&p.push(_,T,U),(d!==n-1||l<Math.PI)&&p.push(T,B,U)}this.setIndex(p),this.setAttribute("position",new Ut(x,3)),this.setAttribute("normal",new Ut(y,3)),this.setAttribute("uv",new Ut(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Es=class s extends Mn{constructor(e=1,t=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);let o=[],a=[],l=[],c=[],h=new L,u=new L,f=new L;for(let p=0;p<=n;p++)for(let x=0;x<=i;x++){let y=x/i*r,m=p/n*Math.PI*2;u.x=(e+t*Math.cos(m))*Math.cos(y),u.y=(e+t*Math.cos(m))*Math.sin(y),u.z=t*Math.sin(m),a.push(u.x,u.y,u.z),h.x=e*Math.cos(y),h.y=e*Math.sin(y),f.subVectors(u,h).normalize(),l.push(f.x,f.y,f.z),c.push(x/i),c.push(p/n)}for(let p=1;p<=n;p++)for(let x=1;x<=i;x++){let y=(i+1)*p+x-1,m=(i+1)*(p-1)+x-1,d=(i+1)*(p-1)+x,C=(i+1)*p+x;o.push(y,m,C),o.push(m,d,C)}this.setIndex(o),this.setAttribute("position",new Ut(a,3)),this.setAttribute("normal",new Ut(l,3)),this.setAttribute("uv",new Ut(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var aa=class s extends Mn{constructor(e=new na(new L(-1,-1,0),new L(-1,1,0),new L(1,1,0)),t=64,n=1,i=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:i,closed:r};let o=e.computeFrenetFrames(t,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new L,l=new L,c=new Me,h=new L,u=[],f=[],p=[],x=[];y(),this.setIndex(x),this.setAttribute("position",new Ut(u,3)),this.setAttribute("normal",new Ut(f,3)),this.setAttribute("uv",new Ut(p,2));function y(){for(let _=0;_<t;_++)m(_);m(r===!1?t:0),C(),d()}function m(_){h=e.getPointAt(_/t,h);let T=o.normals[_],B=o.binormals[_];for(let U=0;U<=i;U++){let A=U/i*Math.PI*2,$=Math.sin(A),E=-Math.cos(A);l.x=E*T.x+$*B.x,l.y=E*T.y+$*B.y,l.z=E*T.z+$*B.z,l.normalize(),f.push(l.x,l.y,l.z),a.x=h.x+n*l.x,a.y=h.y+n*l.y,a.z=h.z+n*l.z,u.push(a.x,a.y,a.z)}}function d(){for(let _=1;_<=t;_++)for(let T=1;T<=i;T++){let B=(i+1)*(_-1)+(T-1),U=(i+1)*_+(T-1),A=(i+1)*_+T,$=(i+1)*(_-1)+T;x.push(B,U,$),x.push(U,A,$)}}function C(){for(let _=0;_<=t;_++)for(let T=0;T<=i;T++)c.x=_/t,c.y=T/i,p.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new s(new sa[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};var la=class extends nn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Sn=class extends ns{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ze(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ze(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Tu,this.normalScale=new Me(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Gr=class extends Sn{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Me(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return An(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ze(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ze(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ze(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};function Uo(s,e,t){return!s||!t&&s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function dx(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}var ur=class{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,i=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=t[++n],e<i)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let o=0;o!==i;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},jl=class extends ur{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:dh,endingEnd:dh}}intervalChanged_(e,t,n){let i=this.parameterPositions,r=e-2,o=e+1,a=i[r],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case ph:r=e,a=2*t-n;break;case mh:r=i.length-2,a=t+i[r]-i[r+1];break;default:r=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case ph:o=e,l=2*n-t;break;case mh:o=1,l=n+i[1]-i[0];break;default:o=e-1,l=t}let c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,p=this._weightNext,x=(n-t)/(i-t),y=x*x,m=y*x,d=-f*m+2*f*y-f*x,C=(1+f)*m+(-1.5-2*f)*y+(-.5+f)*x+1,_=(-1-p)*m+(1.5+p)*y+.5*x,T=p*m-p*y;for(let B=0;B!==a;++B)r[B]=d*o[h+B]+C*o[c+B]+_*o[l+B]+T*o[u+B];return r}},ec=class extends ur{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(n-t)/(i-t),u=1-h;for(let f=0;f!==a;++f)r[f]=o[c+f]*u+o[l+f]*h;return r}},tc=class extends ur{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}},yi=class{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Uo(t,this.TimeBufferType),this.values=Uo(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Uo(e.times,Array),values:Uo(e.values,Array)};let i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new tc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new ec(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new jl(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case No:t=this.InterpolantFactoryMethodDiscrete;break;case zo:t=this.InterpolantFactoryMethodLinear;break;case Xa:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return No;case this.InterpolantFactoryMethodLinear:return zo;case this.InterpolantFactoryMethodSmooth:return Xa}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){let n=this.times,i=n.length,r=0,o=i-1;for(;r!==i&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(i!==void 0&&dx(i))for(let a=0,l=i.length;a!==l;++a){let c=i[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Xa,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(i)l=!0;else{let u=a*n,f=u-n,p=u+n;for(let x=0;x!==n;++x){let y=t[u+x];if(y!==t[f+x]||y!==t[p+x]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let u=a*n,f=o*n;for(let p=0;p!==n;++p)t[f+p]=t[u+p]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}};yi.prototype.TimeBufferType=Float32Array;yi.prototype.ValueBufferType=Float32Array;yi.prototype.DefaultInterpolation=zo;var bs=class extends yi{};bs.prototype.ValueTypeName="bool";bs.prototype.ValueBufferType=Array;bs.prototype.DefaultInterpolation=No;bs.prototype.InterpolantFactoryMethodLinear=void 0;bs.prototype.InterpolantFactoryMethodSmooth=void 0;var nc=class extends yi{};nc.prototype.ValueTypeName="color";var ic=class extends yi{};ic.prototype.ValueTypeName="number";var sc=class extends ur{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(i-t),c=e*a;for(let h=c+a;c!==h;c+=4)un.slerpFlat(r,0,o,c-a,o,c,l);return r}},Wr=class extends yi{InterpolantFactoryMethodLinear(e){return new sc(this.times,this.values,this.getValueSize(),e)}};Wr.prototype.ValueTypeName="quaternion";Wr.prototype.DefaultInterpolation=zo;Wr.prototype.InterpolantFactoryMethodSmooth=void 0;var ws=class extends yi{};ws.prototype.ValueTypeName="string";ws.prototype.ValueBufferType=Array;ws.prototype.DefaultInterpolation=No;ws.prototype.InterpolantFactoryMethodLinear=void 0;ws.prototype.InterpolantFactoryMethodSmooth=void 0;var rc=class extends yi{};rc.prototype.ValueTypeName="vector";var oc=class{constructor(e,t,n){let i=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){a++,r===!1&&i.onStart!==void 0&&i.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=c.length;u<f;u+=2){let p=c[u],x=c[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return x}return null}}},px=new oc,ac=class{constructor(e){this.manager=e!==void 0?e:px,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};ac.DEFAULT_MATERIAL_NAME="__DEFAULT";var Xr=class extends zn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ze(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}},ca=class extends Xr{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(zn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ze(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},yl=new vt,hu=new L,uu=new L,ha=class{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Me(512,512),this.map=null,this.mapPass=null,this.matrix=new vt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ur,this._frameExtents=new Me(1,1),this._viewportCount=1,this._viewports=[new Zt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;hu.setFromMatrixPosition(e.matrixWorld),t.position.copy(hu),uu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(uu),t.updateMatrixWorld(),yl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(yl),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(yl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var fu=new vt,wr=new L,Ml=new L,lc=class extends ha{constructor(){super(new Un(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Me(4,2),this._viewportCount=6,this._viewports=[new Zt(2,1,1,1),new Zt(0,1,1,1),new Zt(3,1,1,1),new Zt(1,1,1,1),new Zt(3,0,1,1),new Zt(1,0,1,1)],this._cubeDirections=[new L(1,0,0),new L(-1,0,0),new L(0,0,1),new L(0,0,-1),new L(0,1,0),new L(0,-1,0)],this._cubeUps=[new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,0,1),new L(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),wr.setFromMatrixPosition(e.matrixWorld),n.position.copy(wr),Ml.copy(n.position),Ml.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Ml),n.updateMatrixWorld(),i.makeTranslation(-wr.x,-wr.y,-wr.z),fu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(fu)}},Vi=class extends Xr{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new lc}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},cc=class extends ha{constructor(){super(new or(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},qr=class extends Xr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(zn.DEFAULT_UP),this.updateMatrix(),this.target=new zn,this.shadow=new cc}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var ua=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=du(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=du();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};function du(){return(typeof performance>"u"?Date:performance).now()}var Mc="\\[\\]\\.:\\/",mx=new RegExp("["+Mc+"]","g"),Sc="[^"+Mc+"]",gx="[^"+Mc.replace("\\.","")+"]",xx=/((?:WC+[\/:])*)/.source.replace("WC",Sc),_x=/(WCOD+)?/.source.replace("WCOD",gx),vx=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Sc),yx=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Sc),Mx=new RegExp("^"+xx+_x+vx+yx+"$"),Sx=["material","materials","bones","map"],hc=class{constructor(e,t,n){let i=n||Yt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Yt=class s{constructor(e,t,n){this.path=t,this.parsedPath=n||s.parseTrackName(t),this.node=s.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new s.Composite(e,t,n):new s(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(mx,"")}static parseTrackName(e){let t=Mx.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);Sx.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=n(a.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,i=t.propertyName,r=t.propertyIndex;if(e||(e=s.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[i];if(o===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Yt.Composite=hc;Yt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Yt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Yt.prototype.GetterByBindingType=[Yt.prototype._getValue_direct,Yt.prototype._getValue_array,Yt.prototype._getValue_arrayElement,Yt.prototype._getValue_toArray];Yt.prototype.SetterByBindingTypeAndVersioning=[[Yt.prototype._setValue_direct,Yt.prototype._setValue_direct_setNeedsUpdate,Yt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Yt.prototype._setValue_array,Yt.prototype._setValue_array_setNeedsUpdate,Yt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Yt.prototype._setValue_arrayElement,Yt.prototype._setValue_arrayElement_setNeedsUpdate,Yt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Yt.prototype._setValue_fromArray,Yt.prototype._setValue_fromArray_setNeedsUpdate,Yt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Ax=new Float32Array(1);var fa=class{constructor(e,t,n=0,i=1/0){this.ray=new Xo(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new Lr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return uc(e,this,n,t),n.sort(pu),n}intersectObjects(e,t=!0,n=[]){for(let i=0,r=e.length;i<r;i++)uc(e[i],this,n,t);return n.sort(pu),n}};function pu(s,e){return s.distance-e.distance}function uc(s,e,t,n){if(s.layers.test(e.layers)&&s.raycast(e,t),n===!0){let i=s.children;for(let r=0,o=i.length;r<o;r++)uc(i[r],e,t,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"160"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="160");var xa={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};var Kn=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},Ex=new or(-1,1,1,-1,0,1),bc=class extends Mn{constructor(){super(),this.setAttribute("position",new Ut([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Ut([0,2,0,0,2,0],2))}},bx=new bc,ss=class{constructor(e){this._mesh=new Be(bx,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Ex)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var _a=class extends Kn{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof nn?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=is.clone(e.uniforms),this.material=new nn({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new ss(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var Yr=class extends Kn{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let i=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),r.buffers.stencil.setFunc(i.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(i.EQUAL,1,4294967295),r.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),r.buffers.stencil.setLocked(!0)}},va=class extends Kn{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var ya=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new Me);this._width=n.width,this._height=n.height,t=new Wn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:vi}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new _a(xa),this.copyPass.material.blending=Ei,this.clock=new ua}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let i=0,r=this.passes.length;i<r;i++){let o=this.passes[i];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),o.needsSwap){if(n){let a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Yr!==void 0&&(o instanceof Yr?n=!0:o instanceof va&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new Me);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,i)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var Ma=class extends Kn{constructor(e,t,n=null,i=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Ze}render(e,t,n){let i=e.autoClear;e.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor)),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=i}};var ku={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Ze(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			vec3 luma = vec3( 0.299, 0.587, 0.114 );

			float v = dot( texel.xyz, luma );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};var dr=class s extends Kn{constructor(e,t,n,i){super(),this.strength=t!==void 0?t:1,this.radius=n,this.threshold=i,this.resolution=e!==void 0?new Me(e.x,e.y):new Me(256,256),this.clearColor=new Ze(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new Wn(r,o,{type:vi}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){let f=new Wn(r,o,{type:vi});f.texture.name="UnrealBloomPass.h"+u,f.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(f);let p=new Wn(r,o,{type:vi});p.texture.name="UnrealBloomPass.v"+u,p.texture.generateMipmaps=!1,this.renderTargetsVertical.push(p),r=Math.round(r/2),o=Math.round(o/2)}let a=ku;this.highPassUniforms=is.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new nn({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new Me(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new L(1,1,1),new L(1,1,1),new L(1,1,1),new L(1,1,1),new L(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;let h=xa;this.copyUniforms=is.clone(h.uniforms),this.blendMaterial=new nn({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:Nn,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Ze,this.oldClearAlpha=1,this.basic=new mt,this.fsQuad=new ss(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),i=Math.round(t/2);this.renderTargetBright.setSize(n,i);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,i),this.renderTargetsVertical[r].setSize(n,i),this.separableBlurMaterials[r].uniforms.invSize.value=new Me(1/n,1/i),n=Math.round(n/2),i=Math.round(i/2)}render(e,t,n,i,r){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();let o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=s.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=s.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this.fsQuad.render(e),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=o}getSeperableBlurMaterial(e){let t=[];for(let n=0;n<e;n++)t.push(.39894*Math.exp(-.5*n*n/(e*e))/e);return new nn({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new Me(.5,.5)},direction:{value:new Me(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(e){return new nn({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}};dr.BlurDirectionX=new Me(1,0);dr.BlurDirectionY=new Me(0,1);var Vu={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = OptimizedCineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};var Sa=class extends Kn{constructor(){super();let e=Vu;this.uniforms=is.clone(e.uniforms),this.material=new la({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new ss(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},Lt.getTransfer(this._outputColorSpace)===Ht&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===fc?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===dc?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===pc?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===mc?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===gc&&(this.material.defines.AGX_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var Ea=class extends lr{constructor(e=null){super();let t=new On;t.deleteAttribute("uv");let n=new Sn({side:fn}),i=new Sn,r=5;e!==null&&e._useLegacyLights===!1&&(r=900);let o=new Vi(16777215,r,28,2);o.position.set(.418,16.199,.3),this.add(o);let a=new Be(t,n);a.position.set(-.757,13.219,.717),a.scale.set(31.713,28.305,28.591),this.add(a);let l=new Be(t,i);l.position.set(-10.906,2.009,1.846),l.rotation.set(0,-.195,0),l.scale.set(2.328,7.905,4.651),this.add(l);let c=new Be(t,i);c.position.set(-5.607,-.754,-.758),c.rotation.set(0,.994,0),c.scale.set(1.97,1.534,3.955),this.add(c);let h=new Be(t,i);h.position.set(6.167,.857,7.803),h.rotation.set(0,.561,0),h.scale.set(3.927,6.285,3.687),this.add(h);let u=new Be(t,i);u.position.set(-2.017,.018,6.124),u.rotation.set(0,.333,0),u.scale.set(2.002,4.566,2.064),this.add(u);let f=new Be(t,i);f.position.set(2.291,-.756,-2.621),f.rotation.set(0,-.286,0),f.scale.set(1.546,1.552,1.496),this.add(f);let p=new Be(t,i);p.position.set(-2.193,-.369,-5.547),p.rotation.set(0,.516,0),p.scale.set(3.875,3.487,2.986),this.add(p);let x=new Be(t,pr(50));x.position.set(-16.116,14.37,8.208),x.scale.set(.1,2.428,2.739),this.add(x);let y=new Be(t,pr(50));y.position.set(-16.109,18.021,-8.207),y.scale.set(.1,2.425,2.751),this.add(y);let m=new Be(t,pr(17));m.position.set(14.904,12.198,-1.832),m.scale.set(.15,4.265,6.331),this.add(m);let d=new Be(t,pr(43));d.position.set(-.462,8.89,14.52),d.scale.set(4.38,5.441,.088),this.add(d);let C=new Be(t,pr(20));C.position.set(3.235,11.486,-12.541),C.scale.set(2.5,2,.1),this.add(C);let _=new Be(t,pr(100));_.position.set(0,20,0),_.scale.set(1,.1,1),this.add(_)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}};function pr(s){let e=new mt;return e.color.setScalar(s),e}var Zr=new L;function li(s,e,t,n,i,r){let o=2*Math.PI*i/4,a=Math.max(r-2*i,0),l=Math.PI/4;Zr.copy(e),Zr[n]=0,Zr.normalize();let c=.5*o/(o+a),h=1-Zr.angleTo(s)/l;return Math.sign(Zr[t])===1?h*c:a/(o+a)+c+c*(1-h)}var Jr=class extends On{constructor(e=1,t=1,n=1,i=2,r=.1){if(i=i*2+1,r=Math.min(e/2,t/2,n/2,r),super(1,1,1,i,i,i),i===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let a=new L,l=new L,c=new L(e,t,n).divideScalar(2).subScalar(r),h=this.attributes.position.array,u=this.attributes.normal.array,f=this.attributes.uv.array,p=h.length/6,x=new L,y=.5/i;for(let m=0,d=0;m<h.length;m+=3,d+=2)switch(a.fromArray(h,m),l.copy(a),l.x-=Math.sign(l.x)*y,l.y-=Math.sign(l.y)*y,l.z-=Math.sign(l.z)*y,l.normalize(),h[m+0]=c.x*Math.sign(a.x)+l.x*r,h[m+1]=c.y*Math.sign(a.y)+l.y*r,h[m+2]=c.z*Math.sign(a.z)+l.z*r,u[m+0]=l.x,u[m+1]=l.y,u[m+2]=l.z,Math.floor(m/p)){case 0:x.set(1,0,0),f[d+0]=li(x,l,"z","y",r,n),f[d+1]=1-li(x,l,"y","z",r,t);break;case 1:x.set(-1,0,0),f[d+0]=1-li(x,l,"z","y",r,n),f[d+1]=1-li(x,l,"y","z",r,t);break;case 2:x.set(0,1,0),f[d+0]=1-li(x,l,"x","z",r,e),f[d+1]=li(x,l,"z","x",r,n);break;case 3:x.set(0,-1,0),f[d+0]=1-li(x,l,"x","z",r,e),f[d+1]=1-li(x,l,"z","x",r,n);break;case 4:x.set(0,0,1),f[d+0]=1-li(x,l,"x","y",r,e),f[d+1]=1-li(x,l,"y","x",r,t);break;case 5:x.set(0,0,-1),f[d+0]=li(x,l,"x","y",r,e),f[d+1]=1-li(x,l,"y","x",r,t);break}}};function wc(s,e=!1){let t=s[0].index!==null,n=new Set(Object.keys(s[0].attributes)),i=new Set(Object.keys(s[0].morphAttributes)),r={},o={},a=s[0].morphTargetsRelative,l=new Mn,c=0;for(let h=0;h<s.length;++h){let u=s[h],f=0;if(t!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let p in u.attributes){if(!n.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;r[p]===void 0&&(r[p]=[]),r[p].push(u.attributes[p]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let p in u.morphAttributes){if(!i.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[p]===void 0&&(o[p]=[]),o[p].push(u.morphAttributes[p])}if(e){let p;if(t)p=u.index.count;else if(u.attributes.position!==void 0)p=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,p,h),c+=p}}if(t){let h=0,u=[];for(let f=0;f<s.length;++f){let p=s[f].index;for(let x=0;x<p.count;++x)u.push(p.getX(x)+h);h+=s[f].attributes.position.count}l.setIndex(u)}for(let h in r){let u=Gu(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(let h in o){let u=o[h][0].length;if(u===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let f=0;f<u;++f){let p=[];for(let y=0;y<o[h].length;++y)p.push(o[h][y][f]);let x=Gu(p);if(!x)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(x)}}return l}function Gu(s){let e,t,n,i=-1,r=0;for(let c=0;c<s.length;++c){let h=s[c];if(h.isInterleavedBufferAttribute)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. InterleavedBufferAttributes are not supported."),null;if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=h.gpuType),i!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.array.length}let o=new e(r),a=0;for(let c=0;c<s.length;++c)o.set(s[c].array,a),a+=s[c].array.length;let l=new yn(o,t,n);return i!==void 0&&(l.gpuType=i),l}var Tc={AVX:[-150,-100,-50,0,50,100,150],STZ:[-26,-76,-126,-176,-228],avW:s=>s===0?16:10,stW:s=>s===-26?9:10,X0:-178,X1:178,BEACH:-15,SEA:-236,PIER:{x:100,w:10,z0:-236,z1:-330,y:1.25}},Wu=[["SOL DINER","#ff4fa3"],["PUMP PAWN","#33e6ff"],["DEGEN ARCADE","#ffd23f"],["WAGMI BAR","#2ee6a6"],["MOON MOTORS","#b48cff"],["APE TATTOO","#ff8a3d"],["DIAMOND HANDS","#5fe0ff"],["CURVE CAFE","#ff8fd0"],["BAGS & CO","#ffd23f"],["JEET GYM","#ff4f6e"],["RUG REPAIR","#33e6ff"],["LIQUIDITY MOTEL","#ff4fa3"],["HODL HOTEL","#2ee6a6"],["GAS STATION","#ffb13d"],["CHART CLUB","#b48cff"],["BONDING CURVE","#5fe0ff"]];function Xu(s){let{scene:e,R:t,mobile:n,std:i,candy:r,BOX:o,RBOX:a,inst:l,col:c,lin:h,PASTEL:u,loadIcon:f,mono:p,sm:x,clamp:y,TAU:m}=s,{AVX:d,STZ:C,avW:_,stW:T,X0:B,X1:U,PIER:A}=Tc,$=[],E=[],I=[],J=[],le=[],Se=[],H=[],q=[],ne=[],P=2.8,re=[];{let w=B;for(let W of d)re.push([w,W-_(W)/2]),w=W+_(W)/2;re.push([w,U])}let ae=[];for(let w=0;w<C.length-1;w++)ae.push([C[w]-T(C[w])/2,C[w+1]+T(C[w+1])/2]);let ge=C[0]+T(C[0])/2,xe=C[C.length-1]-T(C[C.length-1])/2,be=new Sn({color:c("#4c4566"),roughness:.9}),se=[];for(let w of C)se.push({x:0,y:.03,z:w,w:U-B+60,h:.06,d:T(w)});for(let w of d)for(let[W,ee]of ae)se.push({x:w,y:.03,z:(W+ee)/2,w:_(w),h:.06,d:W-ee});l(o,be,se,!1);let _e=i(c("#ffd6e6"),{roughness:.85}),Ae=[{x:0,y:.12,z:ge+1.6,w:700,h:.24,d:3.2},{x:0,y:.12,z:xe-1.8,w:U-B+60,h:.24,d:3.6}],Oe=[];re.forEach(([w,W],ee)=>ae.forEach(([he,Ie],ke)=>{Oe.push({i:ee,j:ke,x0:w,x1:W,zs:he,zn:Ie}),Ae.push({x:(w+W)/2,y:.12,z:(he+Ie)/2,w:W-w,h:.24,d:he-Ie})})),l(o,_e,Ae,!1);{let w=B-30,W=U+30,ee=A.x-A.w/2,he=A.x+A.w/2,Ie=xe-3.85;l(o,i(c("#f4f1fb")),[{x:(w+ee)/2,y:.5,z:Ie,w:ee-w,h:1,d:.5},{x:(he+W)/2,y:.5,z:Ie,w:W-he,h:1,d:.5}],!1)}let Ge=new mt({color:c("#fff6dc"),polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}),Ke=[],it=[],Xe=w=>d.some(W=>Math.abs(w-W)<_(W)/2+3.5),st=w=>C.some(W=>Math.abs(w-W)<T(W)/2+3.5);for(let w of C)for(let W=B+2;W<U;W+=8)Xe(W)||Ke.push({x:W,y:.062,z:w,w:3,h:.01,d:.22});for(let w of d)if(w!==0)for(let[W,ee]of ae)for(let he=W-4;he>ee+2;he-=8)Ke.push({x:w,y:.062,z:he,w:.22,h:.01,d:3});for(let w of d)for(let W of C){let ee=_(w),he=T(W);for(let Ie of[-1,1]){let ke=W+Ie*(he/2+1.5);if(ke<xe||ke>ge)continue;for(let oe=-ee/2+.6;oe<ee/2-.3;oe+=1.2)it.push({x:w+oe+.3,y:.062,z:ke,w:.6,h:.01,d:2.4});let $e=w+Ie*(ee/2+1.5);if(!($e<B||$e>U))for(let oe=-he/2+.6;oe<he/2-.3;oe+=1.2)it.push({x:$e,y:.062,z:W+oe+.3,w:2.4,h:.01,d:.6})}}l(o,Ge,Ke.concat(it),!1);let z=i(c("#9fe7c8"),{roughness:.9}),j=[];for(let[w,W]of ae){j.push({x:0,y:.2,z:(w+W)/2,w:2.6,h:.4,d:w-W-7}),I.push({x0:-1.3,x1:1.3,z0:W+3.5,z1:w-3.5});for(let ee=w-6;ee>W+4;ee-=9)J.push({x:0,z:ee,s:1.05+t()*.3}),ne.push({x:0,z:ee,r:.7})}l(o,z,j,!1);let Z=[],k=[],K={park:"3,1",tower:"6,2"};for(let w of Oe){let W=w.i+","+w.j,ee=w.x0+P,he=w.x1-P,Ie=w.zs-P,ke=w.zn+P,$e=(ee+he)/2,oe=(Ie+ke)/2;if(W===K.park){q.push({x:$e,y:.3,z:oe,w:he-ee,h:.12,d:Ie-ke,c:c("#7fdcae")}),q.push({x:$e,y:.55,z:oe,w:7,h:.6,d:7,c:c("#f4f1fb")}),q.push({x:$e,y:.9,z:oe,w:6,h:.1,d:6,c:c("#5fd8ff")});for(let rn=0;rn<10;rn++){let xt=ee+2+t()*(he-ee-4),Kt=ke+2+t()*(Ie-ke-4);Math.abs(xt-$e)<5&&Math.abs(Kt-oe)<5||(J.push({x:xt,z:Kt,s:.9+t()*.5}),ne.push({x:xt,z:Kt,r:.7}))}I.push({x0:$e-3.5,x1:$e+3.5,z0:oe-3.5,z1:oe+3.5});continue}if(W===K.tower){$.push({x:$e,y:74/2,z:oe,w:24,h:74,d:24,c:c("#c8a8ff")}),E.push({x:$e,y:74,z:oe,w:24,d:24}),$.push({x:$e,y:79,z:oe,w:24*.62,h:10,d:24*.62,c:c("#f4f1fb")}),$.push({x:$e,y:88,z:oe,w:24*.3,h:8,d:24*.3,c:c("#ff9ec9")}),le.push({x:$e,y:74+.4,z:oe+24/2+.06,w:24,h:.5,d:.1,c:h("#33e6ff")},{x:$e,y:74+10.2,z:oe+24*.31+.06,w:24*.62,h:.4,d:.1,c:h("#ff3aa8")}),q.push({x:$e,y:100,z:oe,w:.5,h:16,d:.5,c:c("#f4f1fb")}),I.push({x0:$e-24/2,x1:$e+24/2,z0:oe-24/2,z1:oe+24/2,top:92}),k.unshift({x:$e,y:59,z:oe+24/2+.3,w:19,h:11,big:!0,face:1});continue}let De=he-ee>26?2:1,zt=2,Mt=(he-ee)/De,$t=(Ie-ke)/zt;for(let rn=0;rn<De;rn++)for(let xt=0;xt<zt;xt++){let Kt=ee+rn*Mt,Vt=ke+xt*$t,Gt=xt===1,dt=Mt-2-t()*2.2,Ct=$t-2-t()*2.2,wt=Kt+Mt/2+(t()-.5)*1,on=Vt+$t/2+(t()-.5)*1,ba=Math.abs($e),wa=ba>100?1.25:1,Ac=ba<50&&w.j>=2?.62:1,wn=[8+t()*8,12+t()*14,16+t()*20,20+t()*26][w.j]*wa*Ac*(n&&t()<.3?.8:1);w.j===0&&(wn=Math.min(wn,17));let mr=u[Math.floor(t()*u.length)];$.push({x:wt,y:wn/2,z:on,w:dt,h:wn,d:Ct,c:mr}),I.push({x0:wt-dt/2,x1:wt+dt/2,z0:on-Ct/2,z1:on+Ct/2,top:wn});let Ti=wn;if(wn>22&&t()<.55){let ti=4+t()*7;$.push({x:wt,y:wn+ti/2,z:on,w:dt*.66,h:ti,d:Ct*.66,c:mr}),Ti=wn+ti,E.push({x:wt,y:Ti,z:on,w:dt*.66,d:Ct*.66})}else E.push({x:wt,y:wn,z:on,w:dt,d:Ct});if(w.j===0){let ti=Gt?on+Ct/2:on-Ct/2,Qt=Gt?1:-1;q.push({x:wt,y:wn*.42,z:ti+Qt*.3,w:dt*.98,h:.2,d:.6,c:c("#ffffff")},{x:wt,y:wn*.72,z:ti+Qt*.3,w:dt*.98,h:.2,d:.6,c:c("#ffffff")}),le.push({x:wt+dt*.3,y:wn*.55,z:ti+Qt*.28,w:.45,h:wn*.7,d:.3,c:t()<.5?h("#ff3aa8"):h("#33e6ff")})}if(w.j>=1&&Ti>14&&t()<.4&&k.length<(n?6:9)&&Gt&&k.push({x:wt,y:Ti+4.2,z:on+Ct*.2,w:11,h:5.6,face:1,post:Ti}),Z.push({x:wt,z:on,w:dt,d:Ct,south:Gt,h:wn}),t()<.5){let ti=wt+(t()<.5?-1:1)*(dt/2+1.4),Qt=Gt?w.zs-.7:w.zn+.7;J.push({x:ti,z:Qt,s:.85+t()*.3}),ne.push({x:ti,z:Qt,r:.6})}}}for(let w=-34;w>-236;w-=14)for(let W=214;W<350;W+=12)for(let ee of[-1,1]){if(t()<.3)continue;let he=12+t()*22+(W-214)*.12,Ie=7+t()*4,ke=7+t()*4,$e=ee*(W+(t()-.5)*3);$.push({x:$e,y:he/2,z:w+(t()-.5)*3,w:Ie,h:he,d:ke,c:u[Math.floor(t()*u.length)]}),E.push({x:$e,y:he,z:w,w:Ie,d:ke})}let ve=document.createElement("canvas");ve.width=1024,ve.height=1024;let de=ve.getContext("2d"),S=new mn(ve);S.colorSpace=It,S.anisotropy=4;function M(){de.clearRect(0,0,1024,1024),Wu.forEach(([w,W],ee)=>{let he=ee%2*512,Ie=Math.floor(ee/2)*128;de.fillStyle="#170c2e",de.beginPath(),de.roundRect(he+6,Ie+8,500,112,22),de.fill(),de.lineWidth=6,de.strokeStyle=W,de.stroke();let ke=78;for(de.font=`400 ${ke}px Anton, Impact, Arial Black, sans-serif`;de.measureText(w).width>440&&ke>30;)ke-=4,de.font=`400 ${ke}px Anton, Impact, Arial Black, sans-serif`;de.textAlign="center",de.textBaseline="middle",de.shadowColor=W,de.shadowBlur=22,de.fillStyle=W,de.fillText(w,he+256,Ie+66),de.shadowBlur=0,de.fillStyle="rgba(255,255,255,.88)",de.fillText(w,he+256,Ie+66)}),S.needsUpdate=!0}M(),document.fonts&&document.fonts.ready.then(M);let G=new an(1,1),ce=[],pe=new mt({map:S,toneMapped:!1,transparent:!0});pe.onBeforeCompile=w=>{w.vertexShader=w.vertexShader.replace("#include <uv_pars_vertex>",`#include <uv_pars_vertex>
attribute vec2 aCell;`).replace("#include <uv_vertex>",`#include <uv_vertex>
vMapUv = (vMapUv + aCell) * vec2(.5, .125);`)};let fe=["#ff4fa3","#33d9ff","#ffd23f","#2ee6a6","#b48cff","#ff8a3d"].map(c);for(let w of Z){if(w.h<6)continue;let W=w.south?1:-1,ee=w.z+W*(w.d/2+.16),he=Math.min(w.w*.78,8.4),Ie=Math.floor(t()*Wu.length);Se.push({x:w.x,y:4.1,z:ee,w:he,h:he/4,d:1,ry:w.south?0:Math.PI}),ce.push(Ie%2,7-Math.floor(Ie/2)),H.push({x:w.x,y:2.75,z:w.z+W*(w.d/2+.9),w:he*1.05,h:.14,d:1.9,rx:W*.32,c:fe[Math.floor(t()*fe.length)]})}G.setAttribute("aCell",new wi(new Float32Array(ce),2));let Ue=l(G,pe,Se,!1);l(o,i(16777215,{roughness:.6}),H),l(o,i(16777215,{roughness:.55}),q);let ue=k.map(w=>{let W=document.createElement("canvas");W.width=512,W.height=256;let ee=W.getContext("2d"),he=new mn(W);he.colorSpace=It;let Ie=new Be(new an(w.w,w.h),new mt({map:he,toneMapped:!1}));if(Ie.position.set(w.x,w.y,w.z),e.add(Ie),w.post){let ke=new Wt(o,i(c("#3a3352")),3);[[-w.w*.35,0],[w.w*.35,0]].forEach(([$e],oe)=>{let De=new vt().compose(new L(w.x+$e,(w.post+w.y)/2,w.z-.3),new un,new L(.35,w.y-w.post,.35));ke.setMatrixAt(oe,De)}),ke.setMatrixAt(2,new vt().compose(new L(w.x,w.y,w.z-.2),new un,new L(w.w+.6,w.h+.6,.3))),e.add(ke)}return ze(ee),he.needsUpdate=!0,{...w,g:ee,t:he,m:Ie,mint:null,chg:void 0}});function ze(w){w.fillStyle="#1a0f33",w.fillRect(0,0,512,256),w.fillStyle="#ff7ac0",w.font="400 64px Anton, Impact, sans-serif",w.textAlign="center",w.textBaseline="middle",w.fillText("THE LINE IS LIVE",256,128)}function qe(w,W,ee){let he=w.g,Ie=W.chg==null?"#ffd23f":W.chg>=0?"#2ee6a6":"#ff4f9e",ke=$e=>{let oe=he.createLinearGradient(0,0,0,256);oe.addColorStop(0,"#2a0b4d"),oe.addColorStop(1,"#120826"),he.fillStyle=oe,he.fillRect(0,0,512,256),he.strokeStyle=Ie,he.lineWidth=10,he.strokeRect(5,5,502,246),he.save(),he.beginPath(),he.arc(118,128,82,0,m),he.clip(),$e?he.drawImage($e,36,46,164,164):p(he,118,128,82,W.symbol,W.mint),he.restore(),he.textAlign="left",he.textBaseline="alphabetic",he.fillStyle="#ffd23f",he.font="800 26px Inter, Arial",he.fillText(ee===0?"HOTTEST ON THE LINE":"#"+(ee+1)+" ON THE LINE",222,70);let De="$"+W.symbol;for(he.fillStyle="#fff",he.font="400 76px Anton, Impact, sans-serif";he.measureText(De).width>270&&De.length>3;)De=De.slice(0,-2)+"\u2026";he.fillText(De,222,152),he.fillStyle=Ie,he.font="400 58px Anton, Impact, sans-serif",he.fillText(W.chg==null?"NEW":(W.chg>=0?"+":"")+W.chg.toFixed(Math.abs(W.chg)>=100?0:1)+"%",222,216),he.fillStyle="rgba(255,255,255,.6)",he.font="700 20px Inter, Arial",he.textAlign="right",he.fillText("5M",492,216),w.t.needsUpdate=!0};ke(null),f(W.iconUrl,ke)}let lt=n?30:19,ye=[];for(let w of C)for(let W of[-1,1])for(let ee=B+6;ee<U;ee+=lt)Xe(ee)||ye.push({x:ee,z:w+W*(T(w)/2+.7),ax:0,az:-W});for(let w of d)for(let W of[-1,1])for(let[ee,he]of ae)for(let Ie=ee-7;Ie>he+4;Ie-=lt)ye.push({x:w+W*(_(w)/2+.7),z:Ie,ax:-W,az:0});let Et=i(c("#3d3656"),{roughness:.5}),ct=[],je=[],Je=[];for(let w of ye)ct.push({x:w.x,y:3.1,z:w.z,w:.2,h:6.2,d:.2}),ne.push({x:w.x,z:w.z,r:.3}),ct.push({x:w.x+w.ax*.8,y:6.1,z:w.z+w.az*.8,w:w.ax?1.8:.16,h:.16,d:w.az?1.8:.16}),je.push({x:w.x+w.ax*1.6,y:5.95,z:w.z+w.az*1.6,w:w.ax?.9:.5,h:.18,d:w.az?.9:.5}),Je.push({x:w.x+w.ax*2.4,y:.075,z:w.z+w.az*2.4,w:9,h:9,d:1,rx:-Math.PI/2});let He=[];for(let w of d)for(let W of C)He.push({x:w,z:W,off:t()*16});for(let w of He)for(let W of[-1,1]){let ee=w.x+W*(_(w.x)/2+.8),he=w.z+W*(T(w.z)/2+.8);ct.push({x:ee,y:2.3,z:he,w:.22,h:4.6,d:.22},{x:ee,y:4.4,z:he,w:.55,h:1.5,d:.55}),ne.push({x:ee,z:he,r:.35})}l(o,Et,ct,!1);let et=new mt({color:c("#fff1d0"),toneMapped:!1});l(o,et,je,!1);let Tt=(()=>{let w=document.createElement("canvas");w.width=w.height=128;let W=w.getContext("2d"),ee=W.createRadialGradient(64,64,0,64,64,64);return ee.addColorStop(0,"rgba(255,225,170,1)"),ee.addColorStop(.45,"rgba(255,190,150,.45)"),ee.addColorStop(1,"rgba(255,170,160,0)"),W.fillStyle=ee,W.fillRect(0,0,128,128),new mn(w)})(),Dt=new mt({map:Tt,transparent:!0,opacity:0,blending:Nn,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-4,polygonOffsetUnits:-4});l(new an(1,1),Dt,Je,!1);let Te=new Wt(new On(1,1,1),new mt({toneMapped:!1}),He.length*4);Te.frustumCulled=!1,e.add(Te);{let w=new vt,W=0;for(let ee of He)for(let he of[-1,1]){let Ie=ee.x+he*(_(ee.x)/2+.8),ke=ee.z+he*(T(ee.z)/2+.8);w.compose(new L(Ie,4.5,ke+he*.29),new un,new L(.3,.3,.05)),Te.setMatrixAt(W++,w),w.compose(new L(Ie+he*.29,4.5,ke),new un,new L(.05,.3,.3)),Te.setMatrixAt(W++,w)}}let Ee=(w,W)=>{let ee=(W+w.off)%16;return{av:ee<7?0:ee<8?1:2,st:ee>=8&&ee<15?0:ee>=15?1:2}},F=[new Ze(.2,3.2,1.2),new Ze(3.4,2.2,.2),new Ze(3.6,.3,.4)],Pe=i(c("#e9d2b8"),{roughness:.85}),Re=[],nt=A.z0-A.z1,Qe=(A.z0+A.z1)/2;Re.push({x:A.x,y:A.y-.25,z:(-241.5+A.z1)/2,w:A.w,h:.5,d:-241.5-A.z1}),Re.push({x:A.x,y:.36,z:-237.5,w:A.w,h:.6,d:8.1,rx:.148});for(let w=A.z0-6;w>A.z1;w-=9)for(let W of[-1,1])Re.push({x:A.x+W*(A.w/2-.4),y:-.4,z:w,w:.6,h:3,d:.6});for(let w=A.z0-6;w>A.z1+1;w-=3.5)for(let W of[-1,1])Re.push({x:A.x+W*(A.w/2-.15),y:A.y+.55,z:w,w:.16,h:1.1,d:.16});for(let w of[-1,1])Re.push({x:A.x+w*(A.w/2-.15),y:A.y+1.1,z:Qe-4,w:.2,h:.14,d:nt-12});l(o,Pe,Re,!1);let yt=new Dn,At=[];{let w=new Sn({color:c("#f6f2ff"),roughness:.4,emissive:c("#ff3aa8"),emissiveIntensity:0}),W=new Es(17,.32,8,72);for(let ke of[-1.3,1.3]){let $e=new Be(W,w);$e.position.z=ke,yt.add($e)}for(let ke=0;ke<8;ke++){let $e=new Be(o,w);$e.scale.set(.18,34,.18),$e.rotation.z=ke/8*Math.PI;for(let oe of[-1.3,1.3]){let De=$e.clone();De.position.z=oe,yt.add(De)}}let ee=new Be(new $n(1.3,1.3,3.2,16),w);ee.rotation.x=Math.PI/2,yt.add(ee);let he=["#ff7ac0","#33d9ff","#ffd23f","#9b7bff","#2ee6a6","#ff9a5a"].map(c);for(let ke=0;ke<14;ke++){let $e=ke/14*m,oe=new Be(a,r(he[ke%he.length]));oe.scale.set(2,1.9,2.2),oe.userData.a=$e,yt.add(oe),At.push(oe)}yt.position.set(A.x,A.y+19.5,A.z1+9),yt.userData.rim=w,e.add(yt);let Ie=[];for(let ke of[-1,1])for(let $e of[-2.2,2.2])Ie.push({x:A.x+ke*6.5,y:A.y+9.8,z:A.z1+9+$e,w:.5,h:21,d:.5,rz:-ke*.3});l(o,w,Ie,!1)}I.push({x0:A.x-7.5,x1:A.x+7.5,z0:A.z1+5,z1:A.z1+13});let Xt=[];for(let w=0;w<(n?3:5);w++){let W=new Dn,ee=new Be(a,r(c(["#ffffff","#ff9ec9","#a8d8ff"][w%3])));ee.scale.set(3.2,1.1,9),W.add(ee);let he=new Be(a,i(c("#2a2440")));he.scale.set(2.2,1.2,3),he.position.set(0,1.1,.6),W.add(he),W.position.set(-200+t()*400,.3,-270-t()*260),e.add(W),Xt.push({g:W,sp:(2+t()*3)*(t()<.5?1:-1),ph:t()*9})}let qt=[];for(let w of d){let W=w===0?4.6:2.5;qt.push({av:!0,c:w,off:W,a:ge-1-W,b:xe+1+W,n:w===0?n?3:6:n?2:4})}for(let w of C){let W=w===-26?2.2:2.5;qt.push({av:!1,c:w,off:W,a:B-24,b:U+24,n:n?4:7})}let bt=[],sn=["#ff7ac0","#33d9ff","#ffd23f","#f4f1fb","#9b7bff","#ff9a5a","#2ee6a6","#ffffff","#ff4f6e"].map(c);for(let w of qt){w.len=Math.abs(w.a-w.b),w.L=2*w.len+2*Math.PI*w.off,w.cars=[];for(let W=0;W<w.n;W++){let ee={L:w,s:(W+t()*.5)/w.n*w.L,v:0,base:(w.av?9:11)+t()*4,col:sn[Math.floor(t()*sn.length)],taxi:t()<.14,x:0,z:0,yaw:0,brake:0};w.cars.push(ee),bt.push(ee)}}function bn(w,W,ee){W=(W%w.L+w.L)%w.L;let he=Math.PI*w.off,Ie,ke,$e,oe;if(W<w.len)Ie=W,ke=w.off,$e=1,oe=0,ee.fwd=1;else if(W<w.len+he){let De=(W-w.len)/w.off;Ie=w.len+Math.sin(De)*w.off,ke=Math.cos(De)*w.off,$e=Math.cos(De),oe=-Math.sin(De),ee.fwd=1}else if(W<2*w.len+he)Ie=w.len-(W-w.len-he),ke=-w.off,$e=-1,oe=0,ee.fwd=-1;else{let De=(W-2*w.len-he)/w.off;Ie=-Math.sin(De)*w.off,ke=-Math.cos(De)*w.off,$e=-Math.cos(De),oe=Math.sin(De),ee.fwd=-1}return w.av?(ee.x=w.c+ke,ee.z=w.a-Ie,ee.dirX=oe,ee.dirZ=-$e):(ee.x=w.a+Ie,ee.z=w.c+ke,ee.dirX=$e,ee.dirZ=oe),ee.yaw=Math.atan2(ee.dirX,ee.dirZ),ee.straight=W<w.len||W>=w.len+he&&W<2*w.len+he,ee}let hi=bt.length,Rn=new Wt(a,r(16777215),hi),Jt=new Wt(a,i(c("#1c1638"),{roughness:.3}),hi),qn=new Wt(o,new mt({toneMapped:!1}),hi*4),en=new Wt(o,i(c("#ffd23f")),hi);for(let w of[Rn,Jt,qn,en])w.frustumCulled=!1,e.add(w);bt.forEach((w,W)=>Rn.setColorAt(W,w.taxi?c("#ffd23f"):w.col));let Cn=n?70:160,ei=[],rs=["#ff4fa3","#33d9ff","#ffd23f","#2ee6a6","#b48cff","#ff8a3d","#ffffff","#ff9ec9","#5fe0ff"].map(c),Ts=["#f1c7a5","#d9a07a","#a8714f","#7a4b33","#ffd9bd"].map(c),Wi=Oe.filter(w=>w.i>0&&w.i<re.length-1||w.j===0);for(let w=0;w<Cn;w++){let W=Wi[Math.floor(t()*Wi.length)],ee=W.x0+1.3,he=W.x1-1.3,Ie=W.zs-1.3,ke=W.zn+1.3,$e=2*(he-ee+(Ie-ke));ei.push({x0:ee,x1:he,z0:ke,z1:Ie,P:$e,s:t()*$e,sp:(.9+t()*.8)*(t()<.5?1:-1),ph:t()*9,shirt:rs[Math.floor(t()*rs.length)],skin:Ts[Math.floor(t()*Ts.length)],dodge:0,dx:0,dz:0,jy:0,x:0,z:0})}let R=new Wt(a,i(16777215),Cn),X=new Wt(new ai(.27,10,8),i(16777215),Cn),Q=new Wt(o,i(c("#2a2440")),Cn*2);for(let w of[R,X,Q])w.frustumCulled=!1,e.add(w);ei.forEach((w,W)=>{R.setColorAt(W,w.shirt),X.setColorAt(W,w.skin)});function ie(w){let W=w.x1-w.x0,ee=w.z1-w.z0,he=(w.s%w.P+w.P)%w.P;he<W?(w.x=w.x0+he,w.z=w.z1,w.yaw=Math.PI/2):(he-=W)<ee?(w.x=w.x1,w.z=w.z1-he,w.yaw=Math.PI):(he-=ee)<W?(w.x=w.x1-he,w.z=w.z0,w.yaw=-Math.PI/2):(he-=W,w.x=w.x0,w.z=w.z0+he,w.yaw=0),w.sp<0&&(w.yaw+=Math.PI)}let te=[[4.6,-50],[-4.6,-101],[50,-76],[-50,-126],[4.6,-150],[100,-176],[-100,-76],[150,-126],[-4.6,-202],[-150,-176],[50,-228],[-50,-26],[100,-26],[-100,-228],[25,-126],[-125,-176],[125,-126],[A.x,A.z1+22],[-150,-50],[150,-200]],Fe=n?14:20,We=document.createElement("canvas");We.width=We.height=640;let Ye=We.getContext("2d"),rt=new mn(We);rt.colorSpace=It;let ht=new ra(1.25,32),at=new Float32Array(Fe*2);ht.setAttribute("aCell",new wi(at,2));let ut=new mt({map:rt,toneMapped:!1,side:Gn});ut.onBeforeCompile=w=>{w.vertexShader=w.vertexShader.replace("#include <uv_pars_vertex>",`#include <uv_pars_vertex>
attribute vec2 aCell;`).replace("#include <uv_vertex>",`#include <uv_vertex>
vMapUv = (vMapUv + aCell) * .2;`)};let Pt=new Wt(ht,ut,Fe),Ot=new Wt(new Es(1.32,.16,8,32),new mt({toneMapped:!1}),Fe),Ft=new $n(.9,1.6,40,16,1,!0);Ft.translate(0,20,0);let _n=new Wt(Ft,new mt({transparent:!0,opacity:.16,blending:Nn,depthWrite:!1,side:Gn,toneMapped:!1}),Fe);for(let w of[Pt,Ot,_n])w.frustumCulled=!1,e.add(w);for(let w=0;w<Fe;w++){at[w*2]=w%5,at[w*2+1]=4-Math.floor(w/5);let W=new vt().makeScale(0,0,0);Pt.setMatrixAt(w,W),Ot.setMatrixAt(w,W),_n.setMatrixAt(w,W)}let Rt=te.slice(0,Fe).map(([w,W],ee)=>({i:ee,x:w,z:W,coin:null,gone:0,y:0}));function ft(w){let W=w.i%5*128,ee=Math.floor(w.i/5)*128,he=w.coin,Ie=ke=>{Ye.clearRect(W,ee,128,128),Ye.save(),Ye.beginPath(),Ye.arc(W+64,ee+64,62,0,m),Ye.clip(),Ye.fillStyle="#1a0f33",Ye.fillRect(W,ee,128,128),ke?Ye.drawImage(ke,W+2,ee+2,124,124):he&&p(Ye,W+64,ee+64,62,he.symbol,he.mint),Ye.restore(),rt.needsUpdate=!0};Ie(null),he&&f(he.iconUrl,Ie)}let Nt=new vt,gt=new L,Bt=new un,cn=new L,ui=new ri,Fn=new Ze,tt={},Bn=new L(0,1,0),Mi=-1;for(let w of Rt)w.y=os(w.x,w.z)+2.1;function Pn(w,W,ee,he,Ie,ke=0){let $e=he.y;et.color.setRGB(1+ee*2.2,.94+ee*1.8,.82+ee*1.1),Dt.opacity=ee*.62,pe.color.setScalar(.95+ee*.42),yt.userData.rim.emissiveIntensity=ee*1.4,yt.rotation.z=W*.07;for(let oe of At){let De=oe.userData.a+0;oe.position.set(Math.cos(De)*17,Math.sin(De)*17-1.4,0),oe.rotation.z=-yt.rotation.z}for(let oe of Xt)oe.g.position.x+=oe.sp*w,oe.g.position.x>320&&(oe.g.position.x=-320),oe.g.position.x<-320&&(oe.g.position.x=320),oe.g.rotation.y=oe.sp>0?Math.PI/2:-Math.PI/2,oe.g.position.y=.25+Math.sin(W*1.3+oe.ph)*.18,oe.g.rotation.z=Math.sin(W*1.1+oe.ph)*.04;if(!($e<-3&&!Ie)){if(Math.floor(W*2)!==Mi){Mi=Math.floor(W*2);let oe=0;for(let De of He){let zt=Ee(De,W);for(let Mt=0;Mt<2;Mt++)Te.setColorAt(oe++,F[zt.av]),Te.setColorAt(oe++,F[zt.st])}Te.instanceColor&&(Te.instanceColor.needsUpdate=!0)}for(let oe of qt){let De=oe.cars.length;for(let zt=0;zt<De;zt++){let Mt=oe.cars[zt],rn=((oe.cars[(zt+1)%De].s-Mt.s)%oe.L+oe.L)%oe.L-5;De===1&&(rn=1e9);let xt=Mt.base;if(bn(oe,Mt.s,tt),tt.straight){let Vt=tt.fwd>0,Gt=1e9;if(oe.av)for(let dt of He){if(dt.x!==oe.c||dt.z===C[0]||dt.z===C[C.length-1])continue;let Ct=Vt?dt.z+T(dt.z)/2+1.5:dt.z-T(dt.z)/2-1.5,wt=Vt?tt.z-Ct:Ct-tt.z;wt>-.5&&wt<Gt&&(Gt=wt,Mt._tl=dt)}else for(let dt of He){if(dt.z!==oe.c)continue;let Ct=Vt?dt.x-_(dt.x)/2-1.5:dt.x+_(dt.x)/2+1.5,wt=Vt?Ct-tt.x:tt.x-Ct;wt>-.5&&wt<Gt&&(Gt=wt,Mt._tl=dt)}if(Gt<26&&Mt._tl){let dt=Ee(Mt._tl,W),Ct=oe.av?dt.av:dt.st;(Ct===2||Ct===1&&Gt>3)&&(xt=Math.min(xt,Math.max(0,(Gt-1)*1.3)))}}if(xt=Math.min(xt,Math.max(0,rn*1.4)),Ie){let Vt=Ie.x-tt.x,Gt=Ie.z-tt.z,dt=Vt*tt.dirX+Gt*tt.dirZ,Ct=Math.abs(Vt*tt.dirZ-Gt*tt.dirX);dt>0&&dt<16&&Ct<2.6&&(xt=Math.min(xt,Math.max(0,(dt-5.5)*1.4)))}let Kt=xt-Mt.v;Mt.brake=Kt<-.5?1:0,Mt.v+=y(Kt,-22*w,7*w),Mt.s+=Mt.v*w,Mt.x=tt.x,Mt.z=tt.z,Mt.yaw=tt.yaw,Mt.dirX=tt.dirX,Mt.dirZ=tt.dirZ}}for(let oe=0;oe<hi;oe++){let De=bt[oe];bn(De.L,De.s,tt),De.x=tt.x,De.z=tt.z,Bt.setFromAxisAngle(Bn,tt.yaw),Nt.compose(gt.set(tt.x,.62,tt.z),Bt,cn.set(2,.66,4.3)),Rn.setMatrixAt(oe,Nt);let zt=tt.dirX,Mt=tt.dirZ;Nt.compose(gt.set(tt.x-zt*.35,1.2,tt.z-Mt*.35),Bt,cn.set(1.7,.56,2.1)),Jt.setMatrixAt(oe,Nt),Nt.compose(gt.set(tt.x-zt*.35,De.taxi?1.62:-5,tt.z-Mt*.35),Bt,cn.set(.9,.26,.4)),en.setMatrixAt(oe,Nt);for(let $t=0;$t<2;$t++){let rn=$t?.62:-.62,xt=Mt*rn,Kt=-zt*rn;Nt.compose(gt.set(tt.x+zt*2.12+xt,.68,tt.z+Mt*2.12+Kt),Bt,cn.set(.34,.18,.08)),qn.setMatrixAt(oe*4+$t,Nt),qn.setColorAt(oe*4+$t,Fn.setRGB(.9+ee*2.6,.86+ee*2.3,.7+ee*1.5)),Nt.compose(gt.set(tt.x-zt*2.12+xt,.7,tt.z-Mt*2.12+Kt),Bt,cn.set(.34,.16,.08)),qn.setMatrixAt(oe*4+2+$t,Nt);let Vt=(De.brake?3.4:.9)+ee*1.2;qn.setColorAt(oe*4+2+$t,Fn.setRGB(Vt,.08,.16))}}for(let oe of[Rn,Jt,qn,en])oe.instanceMatrix.needsUpdate=!0;qn.instanceColor&&(qn.instanceColor.needsUpdate=!0);for(let oe=0;oe<Cn;oe++){let De=ei[oe];if(Ie&&!De.dodge){let xt=De.x-Ie.x,Kt=De.z-Ie.z,Vt=xt*xt+Kt*Kt;if(Vt<30&&Ie.speed>5){let Gt=Math.sqrt(Vt)||1;De.dodge=1.1,De.dx=xt/Gt*3.4,De.dz=Kt/Gt*3.4}}if(De.dodge>0){De.dodge=Math.max(0,De.dodge-w);let xt=De.dodge/1.1;De.jy=Math.sin(xt*Math.PI)*1.1}else De.jy=0,De.dx*=Math.max(0,1-w*1.5),De.dz*=Math.max(0,1-w*1.5),De.s+=De.sp*w;ie(De);let zt=De.x+De.dx*(De.dodge>0?1-De.dodge/1.1:1),Mt=De.z+De.dz*(De.dodge>0?1-De.dodge/1.1:1),$t=Math.sin(W*7*Math.abs(De.sp)+De.ph),rn=Math.abs($t)*.06+De.jy;Bt.setFromAxisAngle(Bn,De.yaw),Nt.compose(gt.set(zt,1.32+rn+.25,Mt),Bt,cn.set(.62,.82,.38)),R.setMatrixAt(oe,Nt),Nt.compose(gt.set(zt,2.02+rn+.25,Mt),Bt,cn.setScalar(1)),X.setMatrixAt(oe,Nt);for(let xt=0;xt<2;xt++){let Kt=xt?.15:-.15,Vt=Math.cos(De.yaw)*Kt,Gt=-Math.sin(De.yaw)*Kt;ui.set($t*(xt?.5:-.5),De.yaw,0,"YXZ"),Bt.setFromEuler(ui),Nt.compose(gt.set(zt+Vt,.72+De.jy+.25,Mt+Gt),Bt,cn.set(.22,.82,.24)),Q.setMatrixAt(oe*2+xt,Nt)}}for(let oe of[R,X,Q])oe.instanceMatrix.needsUpdate=!0;if(ke>0||Rt._shown){Rt._shown=ke>0;for(let oe of Rt){oe.gone>0&&(oe.gone=Math.max(0,oe.gone-w));let De=oe.coin&&oe.gone<=0,zt=De?ke:0,Mt=oe.y+Math.sin(W*2+oe.i)*.3,$t=Math.hypot(he.x-oe.x,he.y-Mt,he.z-oe.z),rn=zt*y(($t-1.8)/2.5,0,1);Bt.setFromAxisAngle(Bn,W*1.6+oe.i),Nt.compose(gt.set(oe.x,Mt,oe.z),Bt,cn.setScalar(rn)),Pt.setMatrixAt(oe.i,Nt),Ot.setMatrixAt(oe.i,Nt);let xt=y((Math.hypot(he.x-oe.x,he.z-oe.z)-2.6)/4,0,1);Nt.compose(gt.set(oe.x,0,oe.z),Bt.identity(),cn.set(zt*xt,zt*xt,zt*xt)),_n.setMatrixAt(oe.i,Nt);let Kt=!oe.coin||oe.coin.chg==null?Fn.setRGB(1.25,.95,.2):oe.coin.chg>=0?Fn.setRGB(.2,1.25,.7):Fn.setRGB(1.3,.25,.55);Ot.setColorAt(oe.i,Kt),_n.setColorAt(oe.i,Fn.multiplyScalar(1.6))}for(let oe of[Pt,Ot,_n])oe.instanceMatrix.needsUpdate=!0,oe.instanceColor&&(oe.instanceColor.needsUpdate=!0)}}}function Yn(w){let W=(w||[]).filter(ee=>ee&&ee.mint).slice().sort((ee,he)=>(he.heat||0)-(ee.heat||0));ue.forEach((ee,he)=>{let Ie=W[he%Math.max(1,W.length)];if(!Ie)return;let ke=W.indexOf(Ie);ee.mint===Ie.mint&&ee.chg===Ie.chg||(ee.mint=Ie.mint,ee.chg=Ie.chg,qe(ee,Ie,ke))}),Rt.forEach((ee,he)=>{let Ie=W[he];if(!Ie){ee.coin=null;return}!ee.coin||ee.coin.mint!==Ie.mint?(ee.coin=Ie,ft(ee)):ee.coin=Ie})}function os(w,W){if(Math.abs(w-A.x)<A.w/2&&W<-233.5)return W>-241.5?.06+(-233.5-W)/8*(A.y-.06):A.y;for(let ee of Oe)if(w>ee.x0&&w<ee.x1&&W<ee.zs&&W>ee.zn)return .25;return W>ge&&W<ge+3.2||W<xe&&W>xe-3.6?.25:.06}return{blds:$,roofs:E,palms:J,neon:le,solids:I,circles:ne,update:Pn,setCoins:Yn,groundY:os,picks:Rt,cars:bt,peds:ei,lanes:qt,blocks:Oe,AVX:d,STZ:C,zSouth:ge,zNorth:xe,bills:ue}}function qu(s){let{scene:e,std:t,candy:n,BOX:i,RBOX:r,col:o,clamp:a,city:l,spark:c,burst:h,TAU:u}=s,{PIER:f,X0:p,X1:x,AVX:y,STZ:m,avW:d,stW:C}=Tc,_=new Dn,T=new Dn;_.add(T);let B=n(o("#ff4fa3")),U=n(o("#f6f2ff")),A=t(o("#1a1433"),{roughness:.15,metalness:.4}),$=t(o("#221c34"),{roughness:.6}),E=(j,Z,k,K,ve,de,S,M,G=0)=>{let ce=new Be(j,Z);return ce.scale.set(k,K,ve),ce.position.set(de,S,M),ce.rotation.x=G,T.add(ce),ce};E(r,B,2.12,.56,4.7,0,.64,0),E(r,B,2.02,.3,1.7,0,.86,-1.45,-.1),E(r,A,1.66,.46,1.75,0,1.12,.45),E(r,A,1.6,.1,1.05,0,1.08,-.72,-.62),E(r,B,2.2,.3,1.5,0,.92,1.7),E(i,new mt({color:new Ze(.5,2.2,2.6),toneMapped:!1}),2.18,.05,.05,0,.5,0),E(i,U,2.16,.1,4.36,0,.74,0),E(i,$,2.2,.1,.55,0,1.36,2.18);for(let j of[-1,1])E(i,$,.12,.4,.12,j*.8,1.12,2.18);let I=[],J=new $n(.44,.44,.36,18);J.rotateZ(Math.PI/2);for(let[j,Z]of[[-1.04,-1.5],[1.04,-1.5],[-1.04,1.5],[1.04,1.5]]){let k=new Be(J,$);k.rotation.order="YXZ",k.position.set(j,.44,Z),T.add(k),I.push(k)}let le=new mt({color:new Ze(2.4,2.2,1.8),toneMapped:!1}),Se=new mt({color:new Ze(1.6,.1,.25),toneMapped:!1});for(let j of[-1,1])E(i,le,.52,.14,.08,j*.66,.78,-2.36),E(i,Se,.62,.14,.08,j*.62,.82,2.36);let H=(()=>{let j=document.createElement("canvas");j.width=j.height=128;let Z=j.getContext("2d"),k=Z.createRadialGradient(64,64,0,64,64,64);return k.addColorStop(0,"rgba(255,255,255,1)"),k.addColorStop(.5,"rgba(255,255,255,.35)"),k.addColorStop(1,"rgba(255,255,255,0)"),Z.fillStyle=k,Z.fillRect(0,0,128,128),new mn(j)})(),q=new Be(new an(4.2,7),new mt({map:H,color:new Ze(2.2,.3,1.4),transparent:!0,blending:Nn,depthWrite:!1,toneMapped:!1,polygonOffset:!0,polygonOffsetFactor:-6,polygonOffsetUnits:-6}));q.rotation.x=-Math.PI/2,q.position.y=.1,_.add(q);let ne=new Be(new an(7,16),new mt({map:H,color:new Ze(1,.9,.7),transparent:!0,opacity:0,blending:Nn,depthWrite:!1,toneMapped:!1,polygonOffset:!0,polygonOffsetFactor:-6,polygonOffsetUnits:-6}));ne.rotation.x=-Math.PI/2,ne.position.set(0,.11,-10),_.add(ne),_.visible=!1,e.add(_);let P={on:!1,x:4.6,z:-36,y:.06,th:0,v:0,vx:0,vz:0,steer:0,boost:1,coins:0,shake:0,tod:.78,camInit:!1,speed:0},re={},ae={arrowup:"up",w:"up",arrowdown:"down",s:"down",arrowleft:"left",a:"left",arrowright:"right",d:"right",shift:"boost"," ":"drift"};addEventListener("keydown",j=>{if(!P.on)return;let Z=ae[j.key.toLowerCase()];Z?(re[Z]=!0,j.preventDefault()):j.key.toLowerCase()==="t"&&xe()}),addEventListener("keyup",j=>{let Z=ae[j.key.toLowerCase()];Z&&(re[Z]=!1)}),addEventListener("blur",()=>{for(let j in re)re[j]=!1});let ge=[.2,.5,.78,1];function xe(){let j=ge.findIndex(Z=>Math.abs(Z-P.tod)<.01);return P.tod=ge[(j+1)%ge.length],P.tod}let be=new L,se=new L,_e=new L,Ae=new L;function Oe(j,Z,k){let K=P.vx*j+P.vz*Z;if(K>=0)return;P.vx-=K*j*1.3,P.vz-=K*Z*1.3;let ve=-K;P.v*=k?.45:.7,ve>5&&(P.shake=Math.min(1.2,ve/30),be.set(P.x-j*1.6,P.y+.8,P.z-Z*1.6),h(be,[3.6,2.6,.6],Math.min(40,ve*1.4|0),7,.5,6))}function Ge(){for(let k of l.solids){if(P.x<k.x0-1.8||P.x>k.x1+1.8||P.z<k.z0-1.8||P.z>k.z1+1.8)continue;let K=a(P.x,k.x0,k.x1),ve=a(P.z,k.z0,k.z1),de=P.x-K,S=P.z-ve,M=Math.hypot(de,S);if(!(M>=1.8))if(M>1e-4){let G=de/M,ce=S/M;P.x=K+G*1.8,P.z=ve+ce*1.8,Oe(G,ce,!0)}else{let G=[[P.x-k.x0,-1,0],[k.x1-P.x,1,0],[P.z-k.z0,0,-1],[k.z1-P.z,0,1]].sort((ce,pe)=>ce[0]-pe[0])[0];G[1]?P.x=G[1]<0?k.x0-1.8:k.x1+1.8:P.z=G[2]<0?k.z0-1.8:k.z1+1.8,Oe(G[1],G[2],!0)}}for(let k of l.circles){let K=P.x-k.x,ve=P.z-k.z,de=1.45+k.r,S=K*K+ve*ve;if(S>=de*de)continue;let M=Math.sqrt(S)||1,G=K/M,ce=ve/M;P.x=k.x+G*de,P.z=k.z+ce*de,Oe(G,ce)}for(let k of l.cars){let K=P.x-k.x,ve=P.z-k.z,de=3,S=K*K+ve*ve;if(S>=de*de)continue;let M=Math.sqrt(S)||1,G=K/M,ce=ve/M;P.x=k.x+G*de,P.z=k.z+ce*de,Oe(G,ce)}let Z=Math.abs(P.x-f.x)<f.w/2-1.8+.2;if(P.z>-14&&(P.z=-14,Oe(0,-1)),P.z<-234.6&&!Z&&P.z>-242&&(P.z=-234.6,Oe(0,1)),P.z<=-242){let k=f.x-f.w/2+1.8,K=f.x+f.w/2-1.8;P.x<k&&(P.x=k,Oe(1,0)),P.x>K&&(P.x=K,Oe(-1,0))}P.x<p+2&&(P.x=p+2,Oe(1,0)),P.x>x-2&&(P.x=x-2,Oe(-1,0))}function Ke(j,Z,k,K,ve){let de=a((re.left?1:0)-(re.right?1:0)-(re.ax||0),-1,1),S=a((re.up?1:0)-(re.down?1:0)+(re.ay||0),-1,1),M=(re.boost||re.tboost)&&P.boost>.04&&S>0,G=!!(re.drift||re.tdrift);P.boost=a(P.boost+(M?-j*.3:j*.1),0,1);let ce=M?56:37;S>0?P.v+=(P.v<-.5?44:(M?34:22)*(1-a(P.v/ce,0,1)*.7))*S*j:S<0?P.v+=(P.v>.5?-48:-16)*-S*j:P.v-=Math.sign(P.v)*Math.min(Math.abs(P.v),6*j),G&&(P.v-=Math.sign(P.v)*Math.min(Math.abs(P.v),8*j)),P.v=Math.max(-15,P.v),P.v>ce&&(P.v+=(ce-P.v)*Math.min(1,j*1.4)),P.steer+=(de-P.steer)*Math.min(1,j*(de?5.5:8));let pe=Math.abs(P.v),fe=a(pe/8,0,1)*(1-a((pe-28)/50,0,.4));P.th+=P.steer*(G?2.5:1.85)*fe*(P.v<0?-1:1)*j;let Ue=-Math.sin(P.th),ue=-Math.cos(P.th),ze=1-Math.exp(-j*(G?1.5:7.5));P.vx+=(Ue*P.v-P.vx)*ze,P.vz+=(ue*P.v-P.vz)*ze,P.x+=P.vx*j,P.z+=P.vz*j,Ge(),P.speed=Math.hypot(P.vx,P.vz);let qe=l.groundY(P.x,P.z);P.y+=(qe-P.y)*Math.min(1,j*14);let lt=l.groundY(P.x+Ue*2,P.z+ue*2),ye=l.groundY(P.x-Ue*2,P.z-ue*2),Et=Math.atan2(lt-ye,4),ct=P.vx*-ue+P.vz*Ue,je=a(-ct*.012,-.12,.12);_.position.set(P.x,P.y,P.z),_.rotation.set(0,P.th,0),T.rotation.set(Et,0,je,"YXZ");for(let Te=0;Te<4;Te++){let Ee=I[Te];Ee.rotation.x-=P.v*j/.44,Te<2&&(Ee.rotation.y=P.steer*.42)}if(Math.abs(ct)>6&&pe>8)for(let Te of[-1,1])be.set(P.x-Ue*1.6+ue*Te*1,P.y+.3,P.z-ue*1.6-Ue*Te*1),c(be,Ae.set((Math.random()-.5)*2,1+Math.random(),(Math.random()-.5)*2),[3.4,1,2.6],.5,.16,2.5,-1);if(M)for(let Te of[-1,1])be.set(P.x-Ue*2.5+ue*Te*.5,P.y+.55,P.z-ue*2.5-Ue*Te*.5),c(be,Ae.set(-Ue*9+(Math.random()-.5)*2,Math.random(),-ue*9+(Math.random()-.5)*2),Math.random()<.5?[3.6,1.6,.3]:[.6,2.4,3.6],.28,.2,3);Se.color.setRGB(S<0&&P.v>.5?4:1.6,.1,.25);for(let Te of l.picks){if(!Te.coin||Te.gone>0)continue;let Ee=P.x-Te.x,F=P.z-Te.z;Ee*Ee+F*F<17&&Math.abs(P.y+1-Te.y)<4&&(Te.gone=40,P.coins++,be.set(Te.x,Te.y,Te.z),h(be,Te.coin.chg==null?[3.6,2.8,.5]:Te.coin.chg>=0?[.4,3.6,1.8]:[3.6,.5,1.6],70,14,.9,4),s.onCollect&&s.onCollect(Te.coin,P.coins))}let Je=8.4+pe*.05,He=3.2+pe*.022;be.set(P.x-Ue*Je,P.y+He,P.z-ue*Je);for(let Te of l.solids)if(!(!Te.top||be.y>Te.top)&&be.x>Te.x0-.6&&be.x<Te.x1+.6&&be.z>Te.z0-.6&&be.z<Te.z1+.6)for(let Ee=1;Ee<=8;Ee++){let F=1-Ee/9;if(Ae.set(P.x-Ue*Je*F,be.y,P.z-ue*Je*F),!(Ae.x>Te.x0-.6&&Ae.x<Te.x1+.6&&Ae.z>Te.z0-.6&&Ae.z<Te.z1+.6)){be.copy(Ae);break}}P.camInit||(P.camInit=!0,P.t=0),P.t+=j;let et=P.t<1.4?1-Math.exp(-j*2.4):1-Math.exp(-j*6.5);se.lerp(be,et),_e.lerp(Ae.set(P.x+Ue*6,P.y+1.4,P.z+ue*6),P.t<1.4?et:1-Math.exp(-j*12)),k.copy(se),K.copy(_e),P.shake>0&&(k.x+=(Math.random()-.5)*P.shake,k.y+=(Math.random()-.5)*P.shake*.6,P.shake=Math.max(0,P.shake-j*3));let Tt=ve.aspect<.9,Dt=(Tt?70:57)+(M?9:0)+Math.min(10,pe*.1);ve.fov+=(Dt-ve.fov)*Math.min(1,j*3),ve.updateProjectionMatrix(),ne.material.opacity=s.night()*.55}function it(j,Z){P.on=!0,_.visible=!0,P.camInit=!1,P.x=4.6,P.z=-34,P.th=0,P.v=8,P.vx=0,P.vz=-8,P.steer=0,P.y=l.groundY(P.x,P.z),se.copy(j.position),_e.copy(Z);for(let k in re)re[k]=!1}function Xe(){P.on=!1,_.visible=!1;for(let j in re)re[j]=!1}let st=0;function z(j,Z){if(st-=Z,st>0||!j)return;st=1/15;let k=j.getContext("2d"),K=j.width,ve=K/2,de=ve/75;k.clearRect(0,0,K,K),k.save(),k.beginPath(),k.arc(ve,ve,ve-3,0,u),k.clip(),k.fillStyle="#1b1036",k.fillRect(0,0,K,K),k.translate(ve,ve),k.rotate(P.th),k.scale(de,de),k.translate(-P.x,-P.z),k.fillStyle="#2b6e9e",k.fillRect(-600,-900,1200,664),k.fillStyle="#e7c49b",k.fillRect(-600,-21.5,1200,40),k.fillStyle="#ff9ec9",k.fillRect(-36,-6.5,50,3),k.fillStyle="#6d5a9c";for(let S of m)k.fillRect(p,S-C(S)/2,x-p,C(S));for(let S of y)k.fillRect(S-d(S)/2,-233,d(S),211.5);k.fillRect(f.x-f.w/2,f.z1,f.w,f.z0-f.z1+3),k.fillStyle="#3a2a5e";for(let S of l.solids)S.top&&k.fillRect(S.x0,S.z0,S.x1-S.x0,S.z1-S.z0);k.restore();for(let S of l.picks){if(!S.coin||S.gone>0)continue;let M=S.x-P.x,G=S.z-P.z,ce=Math.cos(P.th),pe=Math.sin(P.th),fe=(M*ce-G*pe)*de,Ue=(M*pe+G*ce)*de,ue=Math.hypot(fe,Ue),ze=ve-9,qe=!1;ue>ze&&(fe*=ze/ue,Ue*=ze/ue,qe=!0),k.fillStyle=S.coin.chg==null?"#ffd23f":S.coin.chg>=0?"#2ee6a6":"#ff4f9e",k.beginPath(),k.arc(ve+fe,ve+Ue,qe?4:5.5,0,u),k.fill(),k.lineWidth=1.5,k.strokeStyle="#120826",k.stroke()}k.fillStyle="#fff",k.beginPath(),k.moveTo(ve,ve-9),k.lineTo(ve+6.5,ve+7),k.lineTo(ve,ve+3.5),k.lineTo(ve-6.5,ve+7),k.closePath(),k.fill(),k.lineWidth=3,k.strokeStyle="rgba(255,255,255,.85)",k.beginPath(),k.arc(ve,ve,ve-3,0,u),k.stroke(),k.fillStyle="#ffd23f",k.font="800 12px Inter, Arial",k.textAlign="center",k.textBaseline="middle",k.fillText("N",ve+(ve-12)*Math.sin(P.th),ve-(ve-12)*Math.cos(P.th))}return{S:P,car:_,keys:re,update:Ke,enter:it,exit:Xe,radar:z,cycleTime:xe,input(j){Object.assign(re,j)},state(){return{mph:Math.round(P.speed*2.237),boost:P.boost,coins:P.coins,tod:P.tod}}}}var Qn=Math.PI*2,wx=s=>()=>(s=s*16807%2147483647)/2147483647,ci=(s,e,t)=>{let n=Math.max(0,Math.min(1,(t-s)/(e-s)));return n*n*(3-2*n)},gn=(s,e,t)=>s+(e-s)*t,Gi=(s,e,t)=>Math.max(e,Math.min(t,s)),me=s=>new Ze(s),jn=s=>new Ze(s),Ve={x0:-36,x1:14,y:-4.2,z:-5.2},xn={x0:-48,x1:-41.5,y0:-75},ln={barracks:{x0:-40,x1:30,y0:-19,y1:-10.5,d:10},war:{x0:-40,x1:30,y0:-35.5,y1:-25,d:11},fallen:{x0:-40,x1:30,y0:-53,y1:-43,d:9},hq:{x0:-40,x1:30,y0:-73.5,y1:-61,d:12}},En={x0:15,x1:54,bunker:60};function b_(s,e={}){let t=matchMedia("(pointer:coarse)").matches||innerWidth<760,n=matchMedia("(prefers-reduced-motion: reduce)").matches,i=wx(20261119),r=new Dr({canvas:s,antialias:!t,powerPreference:"high-performance"});r.setPixelRatio(Math.min(devicePixelRatio||1,t?1.5:1.75)),r.setSize(innerWidth,innerHeight,!1),r.outputColorSpace=It,r.toneMapping=bi;let o=new lr,a=new Un(42,innerWidth/innerHeight,.1,3e3),l=new ar(r),c=l.fromScene(new Ea,.04).texture,h=new ya(r);h.addPass(new Ma(o,a));let u=new dr(new Me(innerWidth,innerHeight),t?.55:.75,.5,1.02);h.addPass(u),h.addPass(new Sa);let f={uT:{value:0},uTime:{value:0},uNight:{value:0},uSunX:{value:0}},p=new Be(new ai(1600,48,24),new nn({side:fn,depthWrite:!1,fog:!1,uniforms:f,vertexShader:"varying vec3 vD; void main(){ vD = position; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.); }",fragmentShader:`uniform float uT, uTime; varying vec3 vD;
      float h(vec2 p){ return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453); }
      vec3 pal(vec3 a, vec3 b, vec3 c){ return uT < .5 ? mix(a, b, smoothstep(0., .5, uT)) : mix(b, c, smoothstep(.5, 1., uT)); }
      void main(){ vec3 d = normalize(vD); float y = d.y;
        vec3 top = pal(vec3(.10, .77, .90), vec3(.29, .19, .56), vec3(.018, .01, .06));
        vec3 mid = pal(vec3(.47, .84, .94), vec3(.87, .38, .62), vec3(.07, .03, .16));
        vec3 hor = pal(vec3(1., .63, .80), vec3(1., .57, .38), vec3(.30, .08, .30));
        vec3 c = y > .28 ? mix(mid, top, smoothstep(.28, .85, y)) : mix(hor, mid, smoothstep(-.03, .28, y));
        vec2 sp = vec2(atan(d.z, d.x) * 170., asin(clamp(y, -1., 1.)) * 170.), id = floor(sp);
        float st = step(.9968, h(id)) * smoothstep(.6, 1., uT) * smoothstep(.05, .4, y) * (.55 + .45 * sin(h(id + 3.) * 40. + uTime * 2.));
        c += vec3(st) * .9;
        gl_FragColor = vec4(pow(c, vec3(2.2)), 1.);
        #include <colorspace_fragment>
      }`}));o.add(p);let x=new Be(new an(1,1),new nn({transparent:!0,depthWrite:!1,fog:!1,uniforms:f,vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.); }",fragmentShader:`uniform float uT, uTime; varying vec2 vUv;
      void main(){ vec2 p = vUv * 2. - 1.; float r = length(p); if (r > 1.) discard;
        if (p.y < .06) { float t = (.06 - p.y) / 1.06, f = fract(t * 7. - uTime * .22); if (f < .08 + t * .5) discard; }
        vec3 top = vec3(1., .957, .486), md = vec3(1., .635, .247), bt = vec3(1., .239, .561);
        vec3 c = p.y > 0. ? mix(md, top, p.y) : mix(md, bt, -p.y);
        c = mix(c, c * vec3(1., .62, .78), smoothstep(.35, .9, uT));
        gl_FragColor = vec4(pow(c, vec3(2.2)) * .97, smoothstep(1., .985, r));
        #include <colorspace_fragment>
      }`}));x.scale.setScalar(250),o.add(x);let y=(()=>{let g=document.createElement("canvas");g.width=g.height=256;let v=g.getContext("2d"),N=v.createRadialGradient(128,128,0,128,128,128);return N.addColorStop(0,"rgba(255,255,255,1)"),N.addColorStop(.25,"rgba(255,255,255,.5)"),N.addColorStop(1,"rgba(255,255,255,0)"),v.fillStyle=N,v.fillRect(0,0,256,256),new mn(g)})(),m=new cr(new Ms({map:y,color:me("#ffd9a8"),transparent:!0,depthWrite:!1,blending:Nn,fog:!1}));m.scale.setScalar(760),o.add(m);let d=new ca(12578815,16759e3,.9);o.add(d);let C=new qr(16773596,1.5);C.position.set(-40,70,60),o.add(C),o.fog=new Ko(16763100,90,900);let _=new qr(16769228,0);_.position.set(14,6,40),_.target.position.set(0,0,0),o.add(_,_.target);let T=(g,v={})=>new Sn({color:g,roughness:.7,metalness:0,...v}),B=(g,v={})=>new Gr({color:g,roughness:.32,clearcoat:.8,clearcoatRoughness:.2,envMap:c,envMapIntensity:.45,...v}),U=g=>new mt({color:g,toneMapped:!1,fog:!1}),A=new On(1,1,1),$=new Jr(1,1,1,3,.12);function E(g,v,N,D){let V=new Wt(g,v,N.length),b=new vt,O=new un,Y=new ri,Ce=new L,Le=new L;return N.forEach((we,pt)=>{Ce.set(we.x,we.y,we.z),Le.set(we.w,we.h,we.d),O.setFromEuler(Y.set(we.rx||0,we.ry||0,we.rz||0)),b.compose(Ce,O,Le),V.setMatrixAt(pt,b),D!==!1&&V.setColorAt(pt,we.c||me("#ffffff"))}),V.frustumCulled=!1,o.add(V),V}let I=new Sn({roughness:.5,metalness:.04});I.onBeforeCompile=g=>{g.uniforms.uNight=f.uNight,g.vertexShader=g.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vWP; varying vec3 vWN;`).replace("#include <project_vertex>",`#include <project_vertex>
vWP = (modelMatrix * instanceMatrix * vec4(transformed, 1.)).xyz; vWN = normalize(mat3(modelMatrix) * mat3(instanceMatrix) * objectNormal);`),g.fragmentShader=g.fragmentShader.replace("#include <common>",`#include <common>
uniform float uNight; varying vec3 vWP; varying vec3 vWN; float hh(vec2 p){ return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453); }`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
        { float side = 1. - step(.6, abs(vWN.y)); vec2 uv = abs(vWN.x) > .5 ? vec2(vWP.z, vWP.y) : vec2(vWP.x, vWP.y);
          vec2 g = uv * vec2(.62, .46), cell = floor(g), f = fract(g);
          float win = step(.2, f.x) * step(f.x, .8) * step(.25, f.y) * step(f.y, .8) * side * step(2.2, vWP.y);
          float lit = step(.66, hh(cell + floor(vWP.xz * .05)));
          vec3 wc = mix(vec3(1., .78, .5), vec3(1., .42, .78), step(.82, hh(cell * 1.7 + 3.)));
          diffuseColor.rgb = mix(diffuseColor.rgb, diffuseColor.rgb * vec3(.55, .62, .85), win * .55);
          totalEmissiveRadiance += wc * win * lit * uNight * .82; }`)};let J=["#ff9ec9","#9ff0d0","#c8a8ff","#ffc9a0","#a8d8ff","#fff0a8","#f4f1fb","#ffb3d9"].map(me),le=Xu({scene:o,R:i,mobile:t,std:T,candy:B,BOX:A,RBOX:$,inst:E,col:me,lin:jn,PASTEL:J,loadIcon:bt,mono:At,sm:ci,clamp:Gi,TAU:Qn}),Se=le.blds,H=le.roofs;E($,I,Se);let q=[];for(let g of H)if(i()<.42){let v=i()<.55?jn("#ff3aa8"):jn("#33e6ff");q.push({x:g.x,y:g.y+.2,z:g.z+g.d/2+.05,w:g.w*.92,h:.32,d:.1,c:v})}q.push(...le.neon);let ne=new mt({toneMapped:!1,fog:!1});E(A,ne,q);let P=(()=>{let g=[],v=me("#8a5a3c"),N=me("#2bb38f"),D=(Y,Ce)=>{let Le=Y.attributes.position.count,we=new Float32Array(Le*3);for(let pt=0;pt<Le;pt++)we[pt*3]=Ce.r,we[pt*3+1]=Ce.g,we[pt*3+2]=Ce.b;return Y.setAttribute("color",new yn(we,3)),Y},V=0,b=0;for(let Y=0;Y<7;Y++){let Ce=new $n(.22-Y*.015,.26-Y*.015,1.5,7);Ce.translate(V,b+.75,0),g.push(D(Ce,v)),V+=.12+Y*.03,b+=1.42}for(let Y=0;Y<8;Y++){let Ce=Y/8*Qn,Le=new On(4.2,.08,.8);Le.translate(2.1,0,0),Le.rotateZ(-.55),Le.rotateY(Ce),Le.translate(V,b+.1,0),g.push(D(Le,N))}let O=new ai(.45,8,6);return O.translate(V,b,0),g.push(D(O,me("#6a4a2c"))),wc(g.map(Y=>Y.toNonIndexed()))})(),re=new Sn({vertexColors:!0,roughness:.7}),ae=[];for(let g=0;g<(t?16:26);g++)ae.push({x:-95+g*(190/(t?16:26))+(i()-.5)*4,z:-9-i()*8.5,s:.9+i()*.5});ae.forEach(g=>le.circles.push({x:g.x,z:g.z,r:.6})),ae.push(...le.palms);{let g=new Wt(P,re,ae.length),v=new vt,N=new un,D=new L;ae.forEach((V,b)=>{v.compose(new L(V.x,0,V.z),N.setFromAxisAngle(new L(0,1,0),i()*Qn),D.setScalar(V.s)),g.setMatrixAt(b,v)}),g.frustumCulled=!1,o.add(g)}let ge=[];for(let g=0;g<(t?2:4);g++){let v=new Be(new Fr(7,260,24,1,!0).rotateX(Math.PI).translate(0,130,0),new mt({color:me("#e8e2ff"),transparent:!0,opacity:0,blending:Nn,depthWrite:!1,side:Gn,fog:!1}));v.position.set(-90+g*60+i()*10,12,-70-i()*60),o.add(v),ge.push({cone:v,ph:g*1.7,sp:.22+g*.05})}{let g=new Be(new an(4e3,1600),new nn({fog:!1,uniforms:f,vertexShader:"varying vec3 vW; void main(){ vec4 p = modelMatrix * vec4(position, 1.); vW = p.xyz; gl_Position = projectionMatrix * viewMatrix * p; }",fragmentShader:`uniform float uT, uTime, uNight, uSunX; varying vec3 vW;
        float h(vec2 p){ return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453); }
        vec3 pal(vec3 a, vec3 b, vec3 c){ return uT < .5 ? mix(a, b, smoothstep(0., .5, uT)) : mix(b, c, smoothstep(.5, 1., uT)); }
        void main(){ vec3 V = vW - cameraPosition; float dist = length(V); V /= dist;
          vec3 deep = pal(vec3(.16, .62, .80), vec3(.34, .17, .50), vec3(.012, .01, .045));
          vec3 hor = pal(vec3(1., .66, .82), vec3(1., .57, .40), vec3(.30, .08, .30));
          vec3 c = mix(hor, deep, smoothstep(.0, .2, -V.y));
          float near = 1. - smoothstep(120., 700., dist);
          float rip = sin(vW.z * .42 + uTime * 1.3 + sin(vW.x * .045 + uTime * .35) * 2.4) * .5 + .5;
          c *= 1. + (rip - .5) * .16 * near;
          float w = 3. + dist * .075, path = exp(-pow((vW.x - uSunX) / w, 2.)) * smoothstep(40., 260., dist);
          vec2 cell = floor(vec2(vW.x * .55, vW.z * 1.5 + uTime * .9));
          float gl = step(.8, h(cell)) * (.5 + .5 * sin(uTime * 6. + h(cell + 7.) * 40.)) * near;
          float sunUp = 1. - smoothstep(.55, .95, uT);
          c += pal(vec3(1., .86, .58), vec3(1., .52, .34), vec3(0.)) * path * (.32 + gl * 1.3) * sunUp;
          c = mix(c, hor, smoothstep(500., 1500., dist));
          gl_FragColor = vec4(pow(c, vec3(2.2)), 1.);
          #include <colorspace_fragment>
        }`}));g.rotation.x=-Math.PI/2,g.position.set(0,.01,-1041.2),o.add(g)}let xe=T(me("#f2cfae"),{roughness:.9});{let g=new Be(new an(700,236),xe);g.rotation.x=-Math.PI/2,g.position.set(0,0,-123.2),o.add(g);for(let[v,N]of[[-260,Ve.x0],[Ve.x1,260]]){let D=new Be(new an(N-v,5.6),xe);D.rotation.x=-Math.PI/2,D.position.set((v+N)/2,0,-2.8),o.add(D)}}let be=(()=>{let g=new Br;g.moveTo(-260,-120),g.lineTo(260,-120),g.lineTo(260,0),g.lineTo(-260,0),g.closePath();let v=(D,V,b,O)=>{let Y=new hr;Y.moveTo(D,V),Y.lineTo(D,O),Y.lineTo(b,O),Y.lineTo(b,V),Y.closePath(),g.holes.push(Y)};v(Ve.x0,Ve.y,Ve.x1,-.02),v(xn.x0,xn.y0,xn.x1,-.02);for(let D of Object.values(ln))v(D.x0,D.y0,D.x1,D.y1);let N=new oa(g,{depth:1.2,bevelEnabled:!1,curveSegments:1});return N.translate(0,0,-1.2),N})(),se=new Sn({roughness:.92});se.onBeforeCompile=g=>{g.vertexShader=g.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vWP;`).replace("#include <project_vertex>",`#include <project_vertex>
vWP = (modelMatrix * vec4(transformed, 1.)).xyz;`),g.fragmentShader=g.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 vWP; float hh(vec2 p){ return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453); }
float nz(vec2 p){ vec2 i = floor(p), f = fract(p); f = f * f * (3. - 2. * f); return mix(mix(hh(i), hh(i + vec2(1, 0)), f.x), mix(hh(i + vec2(0, 1)), hh(i + vec2(1, 1)), f.x), f.y); }`).replace("#include <color_fragment>",`#include <color_fragment>
        { float y = vWP.y + sin(vWP.x * .13) * .9 + sin(vWP.x * .41 + 1.3) * .45 + (nz(vWP.xy * .35) - .5) * 1.4;
          vec3 c = vec3(.91, .76, .58);
          c = mix(c, vec3(.85, .64, .48), step(y, -1.4)); c = mix(c, vec3(.76, .48, .38), step(y, -8.)); c = mix(c, vec3(.61, .35, .40), step(y, -22.));
          c = mix(c, vec3(.43, .24, .42), step(y, -40.)); c = mix(c, vec3(.28, .16, .36), step(y, -58.)); c = mix(c, vec3(.17, .11, .27), step(y, -80.));
          float peb = step(.975, hh(floor(vWP.xy * vec2(2.4, 3.2)))) * step(vWP.y, -2.);
          c *= .93 + nz(vWP.xy * .9) * .1; c = mix(c, c * .8, peb);
          diffuseColor.rgb = pow(c, vec3(2.2)); }`)};{let g=new Be(be,se);o.add(g)}function _e(g,v,N,D){let V=g.x1-g.x0,b=g.y1-g.y0,O=(g.x0+g.x1)/2,Y=(g.y0+g.y1)/2,Ce=[T(v),T(v),T(me(N).multiplyScalar(.8)),T(N),T(v),T(v)].map(we=>(we.side=fn,we)),Le=new Be(new On(V,b,g.d),Ce);if(Le.position.set(O,Y,-1.2-g.d/2),o.add(Le),D){let we=new Vi(D,t?26:34,46,1.5);we.position.set(O-4,g.y1-1.2,-g.d*.45),o.add(we),g.light=we}return Le}_e({x0:Ve.x0,x1:Ve.x1,y0:Ve.y,y1:0,d:4},me("#9a6a48"),me("#6a4a34"),null),_e({x0:xn.x0,x1:xn.x1,y0:xn.y0,y1:0,d:7},me("#5a4256"),me("#3a2a3a"),null),_e(ln.barracks,me("#a8775a"),me("#6f4b38"),"#ffb46a"),_e(ln.war,me("#6e6888"),me("#4a4660"),"#ffd39a"),_e(ln.fallen,me("#5a4a6c"),me("#3c3048"),"#ff9ad0"),_e(ln.hq,me("#85819e"),me("#55516e"),"#c9d6ff");let Ae=[],Oe=[],Ge=[],Ke=[],it=[];for(let g=Ve.y+.25;g<0;g+=.5)Ae.push({x:(Ve.x0+Ve.x1)/2,y:g,z:Ve.z+.1,w:Ve.x1-Ve.x0,h:.44,d:.12,c:me(i()<.5?"#a5734d":"#93653f")});for(let g=Ve.x0+.8;g<Ve.x1;g+=3.2)Ke.push({x:g,y:Ve.y/2+.25,z:Ve.z+.25,w:.32,h:-Ve.y+.9,d:.3,c:me("#6e4a2e")});for(let g=Ve.x0+.3;g<Ve.x1;g+=.5)Oe.push({x:g,y:Ve.y+.06,z:-2.3,w:.32,h:.1,d:3.4,c:me(i()<.5?"#7c5638":"#6c4a30")});let Xe=["#d9b27c","#cfa56f","#e2bd88","#c79c66"].map(me);for(let g=0;g<3;g++)for(let v=Ve.x0-2+g%2*.55;v<Ve.x1+2;v+=1.1)Ge.push({x:v,y:.2+g*.38,z:Ve.z-.55-(g===2?.1:0),w:1.08,h:.4,d:.62,ry:(i()-.5)*.1,c:Xe[Math.floor(i()*4)]});for(let g=Ve.x0+5;g<Ve.x1;g+=9)it.push({x:g,y:-1.1,z:Ve.z+.45,w:.26,h:.26,d:.26,c:jn("#ffc46a").multiplyScalar(3)});E(A,T(me("#ffffff")),Ae),E(A,T(me("#ffffff")),Ke),E(A,T(me("#ffffff")),Oe),E($,T(me("#ffffff"),{roughness:.85}),Ge),E(A,new mt({toneMapped:!1}),it);for(let g=0;g<(t?1:2);g++){let v=new Vi("#ffb35a",16,26,1.6);v.position.set(Ve.x0+12+g*24,-1.4,-2),o.add(v)}function st(g,v,N,D,V=.42,b=.5,O="#3a3048"){let Y=[];for(let Le=0;Le<=1;Le+=.0015){let we=g+(v-g)*Le,pt=Le*(v-g)/b*Qn;Y.push(new L(we+Math.sin(pt)*.14,N+Math.cos(pt)*V,D+Math.sin(pt)*V))}let Ce=new Be(new aa(new Or(Y),Math.floor((v-g)*26),.025,5),new Sn({color:O,metalness:.7,roughness:.4}));return o.add(Ce),Ce}st(Ve.x0-2,Ve.x1+2,1.75,Ve.z-.7);let z=(g,v,N,D)=>{let V=[];for(let b of[-.35,.35])V.push({x:g+b,y:(v+N)/2,z:D,w:.1,h:N-v,d:.1,c:me("#7a5434")});for(let b=v+.3;b<N;b+=.45)V.push({x:g,y:b,z:D,w:.7,h:.07,d:.08,c:me("#8a6440")});E(A,T(me("#ffffff")),V)};z(Ve.x1-1.2,Ve.y,1.4,Ve.z+.35),z(Ve.x0+14,Ve.y,.8,Ve.z+.35),E($,T(me("#ffffff")),[{x:Ve.x0+2.2,y:Ve.y+.5,z:-3.8,w:1.4,h:1,d:1,c:me("#6e7a3a")},{x:Ve.x0+2.4,y:Ve.y+1.35,z:-3.9,w:1,h:.7,d:.8,c:me("#5e6a30")},{x:6,y:Ve.y+.45,z:-4,w:1.6,h:.9,d:.9,c:me("#7a5a3a")}]);{let g=[],v=[],N=[];for(let b=0;b<16;b++){let O=En.x0+3+i()*(En.x1-En.x0-4),Y=-2-i()*22,Ce=.9+i()*1.6;g.push({x:O,y:.04,z:Y,w:Ce*2,h:.08,d:Ce*2,c:me("#3a2a2e")});for(let Le=0;Le<7;Le++){let we=Le/7*Qn;g.push({x:O+Math.cos(we)*Ce,y:.1,z:Y+Math.sin(we)*Ce,w:.7,h:.22+i()*.15,d:.6,ry:we,c:me("#8a6448")})}}for(let b=0;b<7;b++){let O=En.x0+6+i()*30,Y=-3-i()*18,Ce=i()*Qn;for(let[Le,we,pt]of[[.62,0,0],[0,.62,1.05],[-.62,0,2.1]])v.push({x:O,y:.7,z:Y,w:.2,h:1.9,d:.2,rx:Le,rz:we,ry:Ce+pt,c:me("#5a5670")})}E(new $n(.5,.5,1,18),T(me("#ffffff")),g.filter(b=>b.h<.1)),E(A,T(me("#ffffff")),g.filter(b=>b.h>=.1)),E(A,T(me("#ffffff"),{metalness:.4,roughness:.5}),v);for(let b=0;b<3;b++)st(En.x0+6+b*11,En.x0+12+b*11,.5,-1.2-b*5,.45,.45);for(let b=0;b<9;b++)N.push({x:En.x0+4+b*4.5,y:.65,z:-11,w:.14,h:1.3,d:.14,c:me("#4a4058")});E(A,T(me("#ffffff")),N);let D=[{x:31,y:.45,z:-6,w:2,h:.8,d:4,ry:.5,rz:.08,c:me("#2c2430")},{x:31.2,y:1.2,z:-6.1,w:1.6,h:.6,d:2,ry:.5,c:me("#3a2c34")}];E(A,T(me("#ffffff")),D);let V=[{x:En.bunker,y:1.8,z:-6,w:9,h:3.6,d:9,c:me("#8a86a0")},{x:En.bunker,y:3.9,z:-6,w:10.4,h:.7,d:10.4,c:me("#7a7690")},{x:En.bunker-4.55,y:1.6,z:-6,w:.3,h:.7,d:5,c:me("#1a1626")}];for(let b=0;b<10;b++)V.push({x:En.bunker-5.6,y:.2+b%2*.4,z:-9.5+Math.floor(b/2)*1.75,w:.62,h:.4,d:1.1,c:Xe[b%4]});E($,T(me("#ffffff")),V),E(A,U(jn("#3dff8f").multiplyScalar(2.2)),[{x:En.bunker-4.7,y:2.45,z:-6,w:.12,h:.14,d:7.6},{x:En.bunker,y:4.3,z:-1.2,w:9.6,h:.14,d:.12}])}function j(g,v,N,D,V="rgba(14,8,30,.9)",b=900){let O=document.createElement("canvas");O.width=512,O.height=Math.round(512*N/v);let Y=O.getContext("2d");Y.fillStyle=V,Y.beginPath(),Y.roundRect(6,6,O.width-12,O.height-12,22),Y.fill(),Y.strokeStyle=D,Y.lineWidth=6,Y.stroke(),Y.fillStyle=D,Y.font=`${b} ${Math.round(O.height*.46)}px Inter, Arial, sans-serif`,Y.textAlign="center",Y.textBaseline="middle",Y.fillText(g,O.width/2,O.height*.54);let Ce=new mn(O);Ce.colorSpace=It;let Le=new Be(new an(v,N),new mt({map:Ce,transparent:!0,toneMapped:!1}));return o.add(Le),Le}{let g=j("PUMPSWAP",7,1.6,"#3dff8f","rgba(4,22,12,.92)");g.position.set(En.bunker,5.6,-1.2),g.material.color.setScalar(1.6)}{let g=(xn.x0+xn.x1)/2,v=[];for(let D of[-.8,.8])v.push({x:g+D-1.6,y:xn.y0/2,z:-6.6,w:.12,h:-xn.y0,d:.12,c:me("#6a5060")});for(let D=xn.y0+.4;D<0;D+=.5)v.push({x:g-1.6,y:D,z:-6.6,w:1.7,h:.07,d:.08,c:me("#7a6070")});for(let D=0;D<3;D++)v.push({x:g+1.2+D*.35,y:xn.y0/2,z:-7.4,w:.14,h:-xn.y0,d:.14,c:me(["#3a2a3a","#ff4fa3","#22e4ff"][D])});E(A,T(me("#ffffff"),{roughness:.6}),v);let N=[];for(let D=-6;D>xn.y0;D-=9)N.push({x:xn.x1-.6,y:D,z:-1.8,w:.3,h:.3,d:.3,c:jn("#ffd08a").multiplyScalar(3)});E(A,new mt({toneMapped:!1}),N)}let Z=new Dn;{let g=new Be(A,T(me("#5a5670"),{metalness:.5,roughness:.45}));g.scale.set(5.6,.3,5.2),Z.add(g);for(let[D,V]of[[-2.6,-2.4],[2.6,-2.4]]){let b=new Be(A,T(me("#ffcf4a"),{metalness:.3}));b.scale.set(.14,3.4,.14),b.position.set(D,1.7,V),Z.add(b)}let v=new Be(A,T(me("#ffcf4a")));v.scale.set(5.4,.14,.14),v.position.set(0,3.4,-2.4),Z.add(v);let N=new Be(new $n(.05,.05,1,6),T(me("#2a2030")));N.position.set(0,3.4,-2.4),Z.add(N),Z.userData.cable=N,Z.position.set((xn.x0+xn.x1)/2,Ve.y,-3.4),o.add(Z)}{let g=ln.barracks,v=[];for(let D=0;D<7;D++){let V=g.x0+6+D*8.6;for(let b of[g.y0+1.1,g.y0+3.2])v.push({x:V,y:b,z:-1.2-g.d+1.6,w:5.2,h:.5,d:2.2,c:me("#5e6a3a")}),v.push({x:V,y:b+.4,z:-1.2-g.d+1.6,w:5,h:.3,d:2,c:me("#e8e2d0")});for(let b of[-2.6,2.6])v.push({x:V+b,y:g.y0+2.2,z:-1.2-g.d+1.6,w:.18,h:4.4,d:.18,c:me("#4a4038")})}for(let D=0;D<4;D++)v.push({x:g.x1-6-D*1.3,y:g.y0+1.6,z:-1.2-g.d+.7,w:1.1,h:3.2,d:.9,c:me(["#6e7a8a","#5e6a7a"][D%2])});E($,T(me("#ffffff")),v),j("RECRUITS",6.4,1.3,"#ffcf4a","rgba(30,18,8,.92)").position.set(g.x0+20,g.y1-1.3,-1.2-g.d+.05)}let k=[],K=null,ve=null;{let g=ln.war,v=-1.2-g.d+.06,N=[{x:-5,y:g.y0+1.1,z:-6,w:16,h:.3,d:5.4,c:me("#3a3450")},{x:-11.5,y:g.y0+.5,z:-6,w:.4,h:1,d:.4,c:me("#2a2438")},{x:1.5,y:g.y0+.5,z:-6,w:.4,h:1,d:.4,c:me("#2a2438")}];E(A,T(me("#ffffff")),N);let D=document.createElement("canvas");D.width=1024,D.height=352;let V=D.getContext("2d");V.fillStyle="#0d1a3a",V.fillRect(0,0,1024,352),V.strokeStyle="rgba(80,220,255,.35)",V.lineWidth=2;for(let Y=0;Y<1024;Y+=48)V.beginPath(),V.moveTo(Y,0),V.lineTo(Y,352),V.stroke();for(let Y=0;Y<352;Y+=48)V.beginPath(),V.moveTo(0,Y),V.lineTo(1024,Y),V.stroke();V.strokeStyle="#ff4fa3",V.lineWidth=6,V.beginPath(),V.moveTo(80,230),V.bezierCurveTo(300,170,520,270,760,190),V.lineTo(960,210),V.stroke();let b=new mn(D);b.colorSpace=It,K=V,ve=b;let O=new Be(new an(15.4,5.2),new mt({map:b,toneMapped:!1}));O.rotation.x=-Math.PI/2,O.position.set(-5,g.y0+1.27,-6),o.add(O);for(let Y=0;Y<3;Y++){let Ce=document.createElement("canvas");Ce.width=640,Ce.height=400;let Le=new mn(Ce);Le.colorSpace=It;let we=new Be(new an(9.6,6),new mt({map:Le,toneMapped:!1}));we.position.set(-24+Y*19,g.y0+5.6,v),o.add(we);let pt=new Be(A,T(me("#1a1626")));pt.scale.set(10.2,6.6,.2),pt.position.set(we.position.x,we.position.y,v-.12),o.add(pt),k.push({c:Ce,g:Ce.getContext("2d"),t:Le,m:we})}}let de=120,S=new Wt(new Jr(.95,.55,.06,2,.025),new Gr({color:14212330,metalness:.9,roughness:.28,clearcoat:.6,envMap:c,envMapIntensity:.8}),de),M=[],G=[];{let g=ln.fallen,v=new vt,N=new un,D=new ri;for(let b=0;b<de;b++){let O=b%24,Y=Math.floor(b/24),Ce=g.x0+4+O*2.7+Y%2*1.1,Le=g.y1-1.7-Y*1.3,we=-1.2-g.d+.16;M.push({x:Ce,y:Le,z:we,a:(i()-.5)*.3}),v.compose(new L(Ce,Le,we),N.setFromEuler(D.set(0,0,M[b].a)),new L(1,1,1)),S.setMatrixAt(b,v),S.setColorAt(b,me("#ffffff"))}S.frustumCulled=!1,o.add(S),E(A,T(me("#ffffff")),[{x:(g.x0+g.x1)/2,y:g.y0+1.6,z:-1.2-g.d+.5,w:g.x1-g.x0-4,h:.25,d:.8,c:me("#3a2e44")}]);for(let b=0;b<22;b++){let O=new Be(new $n(.09,.09,.45,8),T(me("#f4ead8"))),Y=g.x0+3+b*3.1;O.position.set(Y,g.y0+1.95,-1.2-g.d+.5),o.add(O);let Ce=new Be(new ai(.08,8,6),U(jn("#ffb84a").multiplyScalar(3)));Ce.position.set(Y,g.y0+2.27,-1.2-g.d+.5),o.add(Ce),G.push({f:Ce,ph:i()*9})}j("THE FALLEN",7,1.3,"#ff9ad0","rgba(26,10,30,.92)").position.set((g.x0+g.x1)/2-20,g.y0+3.6,-1.2-g.d+.06)}{let g=ln.hq,v=document.createElement("canvas");v.width=v.height=512;let N=v.getContext("2d"),D=256,V=250,b=190,O=N.createLinearGradient(0,V-b,0,V+b);O.addColorStop(0,"#fff47c"),O.addColorStop(.5,"#ffa23f"),O.addColorStop(1,"#ff3d8f"),N.fillStyle=O,N.beginPath(),N.arc(D,V,b,0,Qn),N.fill(),N.globalCompositeOperation="destination-out";for(let pt=0;pt<7;pt++)N.fillRect(D-b,V+b*(.04+pt*.14),b*2,b*(.022+pt*.02));N.globalCompositeOperation="source-over",N.save(),N.translate(D-4,V-22),N.scale(.36,.36),N.transform(1,0,-.2,1,0,0);let Y=()=>{N.beginPath(),N.moveTo(-560,-330),N.lineTo(-250,-330),N.lineTo(0,120),N.lineTo(250,-330),N.lineTo(560,-330),N.lineTo(90,430),N.lineTo(-90,430),N.closePath()};N.save(),N.translate(38,38),Y(),N.fillStyle="#2a0b4d",N.fill(),N.restore(),Y(),N.lineWidth=40,N.strokeStyle="#2a0b4d",N.stroke(),O=N.createLinearGradient(0,-330,0,430),[[0,"#ffffff"],[.42,"#cdf3ff"],[.5,"#3a2b92"],[.58,"#ff96de"],[1,"#ffffff"]].forEach(([pt,di])=>O.addColorStop(pt,di)),Y(),N.fillStyle=O,N.fill(),N.restore();let Ce=new mn(v);Ce.colorSpace=It;let Le=new Be(new an(9,9),new mt({map:Ce,transparent:!0,toneMapped:!1}));Le.material.color.setScalar(1.35),Le.position.set(-5,g.y0+7.4,-1.2-g.d+.06),o.add(Le);let we=[{x:-5,y:g.y0+1,z:-4.5,w:30,h:.26,d:2.4,c:me("#3a3654")}];for(let pt=0;pt<6;pt++)we.push({x:-17+pt*4.8,y:g.y0+1.9,z:-5.2,w:2.6,h:1.6,d:.14,c:me("#16142a")});E(A,T(me("#ffffff")),we),E(A,U(jn("#33e6ff").multiplyScalar(1.6)),Array.from({length:6},(pt,di)=>({x:-17+di*4.8,y:g.y0+1.9,z:-5.1,w:2.35,h:1.35,d:.02}))),E(A,U(jn("#ff3aa8").multiplyScalar(2)),[{x:(g.x0+g.x1)/2,y:g.y1-.4,z:-1.2-g.d+.1,w:g.x1-g.x0-1,h:.12,d:.1}])}{let g=[],v=[],N=[];for(let we of Object.values(ln))for(let pt=we.x0+6;pt<we.x1-2;pt+=11)g.push({x:pt,y:we.y1-1.1,z:-1.2-we.d*.45,w:.34,h:.34,d:.34,c:jn("#ffd9a0").multiplyScalar(3.2)}),v.push({x:pt,y:we.y1-.55,z:-1.2-we.d*.45,w:.05,h:1.1,d:.05,c:me("#2a2030")});E(new ai(.5,10,8),new mt({toneMapped:!1}),g),E(A,T(me("#ffffff")),v);let D=ln.barracks,V=ln.war,b=ln.hq,O=ln.fallen,Y=["#ff7ac0","#33d9ff","#ffd23f","#9b7bff"].map(me);for(let we=0;we<7;we++)for(let pt of[D.y0+1.5,D.y0+3.6])N.push({x:D.x0+6+we*8.6+.9,y:pt+.08,z:-1.2-D.d+1.6,w:3,h:.22,d:2.05,c:Y[(we+(pt>D.y0+2?1:0))%4]});for(let we=0;we<5;we++)N.push({x:D.x0+4+we*1.4,y:D.y0+.5+we%2*1,z:-3.2,w:1.2,h:1,d:1.1,c:me(we%2?"#6e7a3a":"#7a5a3a")});N.push({x:D.x1-12,y:D.y0+1.3,z:-4,w:3.4,h:.2,d:1.8,c:me("#7a5434")},{x:D.x1-12,y:D.y0+1.75,z:-4,w:1,h:.7,d:.6,c:me("#3a4a2a")});for(let we=0;we<6;we++)N.push({x:V.x1-3-we*1.5,y:V.y0+1.4,z:-1.2-V.d+.8,w:1.3,h:2.8,d:1.1,c:me(we%2?"#5e6a7a":"#6e7a8a")});for(let we=0;we<6;we++)N.push({x:-11+we*2.6,y:V.y0+.6,z:we%2?-2.9:-9.1,w:.9,h:1.2,d:.9,c:me("#2a2438")});for(let we=0;we<5;we++)N.push({x:(O.x0+O.x1)/2,y:O.y1-1.38-we*1.3,z:-1.2-O.d+.1,w:O.x1-O.x0-4,h:.04,d:.04,c:me("#8a8aa8")});for(let we of[-1,1])N.push({x:-5+we*7.5,y:b.y0+4.6,z:-1.2-b.d+.4,w:.12,h:9,d:.12,c:me("#c8c0e8")}),N.push({x:-5+we*7.5+we*1.1,y:b.y0+8.1,z:-1.2-b.d+.4,w:2.1,h:1.4,d:.05,c:me(we<0?"#ff4fa3":"#22e4ff")});E($,T(me("#ffffff")),N);let Ce=new Be(new Es(1.4,.32,12,40),T(me("#2bb38f")));Ce.position.set(O.x0+6,O.y0+4,-1.2-O.d+.5),o.add(Ce);let Le=new Be($,T(me("#ff4fa3")));Le.scale.set(1,.5,.3),Le.position.set(O.x0+6,O.y0+2.7,-1.2-O.d+.7),o.add(Le)}let ce=[],pe=new Sn({color:16777215,roughness:1,emissive:new Ze("#ffd6e8"),emissiveIntensity:.3,transparent:!0,opacity:.97,fog:!0});{let g=wc([[0,0,0,9],[8,-1,2,7],[-8,-1.5,1,6.5],[3,3,-2,7],[-4,2.5,-1,6]].map(([v,N,D,V])=>{let b=new ai(V,14,10);return b.translate(v,N,D),b.toNonIndexed()}));for(let v=0;v<(t?7:13);v++){let N=new Be(g,pe),D=1.3+i()*1.7;N.scale.set(D*(1.3+i()*.7),D*.55,D),N.position.set(-560+i()*1120,92+i()*56,-280-i()*440),o.add(N),ce.push({m:N,sp:1.2+i()*2.4})}}let fe=new Dn;{let g=new Be(new ai(1,40,20),T(me("#f3eefc"),{roughness:.55}));g.scale.set(14,4.6,4.6),fe.add(g);for(let[D,V,b]of[[3.4,0,0],[-3.4,0,0],[0,3.4,Math.PI/2],[0,-3.4,Math.PI/2]]){let O=new Be($,B(me("#ff4fa3")));O.scale.set(3.6,.3,2.8),O.position.set(-12.2,D*.8,V*.8),O.rotation.x=b,fe.add(O)}let v=new Be($,T(me("#2a2440")));v.scale.set(3.8,1.1,1.5),v.position.set(1,-5.1,0),fe.add(v);let N=new Be(A,U(jn("#33e6ff").multiplyScalar(2)));N.scale.set(26,.12,.12),N.position.set(0,-2.2,4.1),fe.add(N),fe.position.set(-20,44,-105),o.add(fe)}let Ue=document.createElement("canvas");Ue.width=1024,Ue.height=256;let ue=Ue.getContext("2d"),ze=new mn(Ue);ze.colorSpace=It;let qe=new Be(new an(19,4.75),new mt({map:ze,transparent:!0,toneMapped:!1}));qe.position.set(.5,.6,4.75),fe.add(qe);let lt=null;function ye(g){let v=N=>{ue.clearRect(0,0,1024,256),ue.fillStyle="rgba(16,8,34,.92)",ue.beginPath(),ue.roundRect(8,8,1008,240,60),ue.fill();let D=g.chg==null?"#ffd23f":g.chg>=0?"#2ee6a6":"#ff4f9e";ue.strokeStyle=D,ue.lineWidth=10,ue.stroke(),ue.save(),ue.beginPath(),ue.arc(130,128,86,0,Qn),ue.clip(),N?ue.drawImage(N,44,42,172,172):At(ue,130,128,86,g.symbol,g.mint),ue.restore(),ue.fillStyle="#ffd23f",ue.font="900 40px Inter, Arial",ue.textAlign="left",ue.textBaseline="alphabetic",ue.fillText("HOTTEST ON THE LINE",250,92),ue.fillStyle="#fff",ue.font="900 88px Inter, Arial";let V="$"+g.symbol;for(;ue.measureText(V).width>470&&V.length>3;)V=V.slice(0,-2)+"\u2026";ue.fillText(V,250,192),ue.fillStyle=D,ue.textAlign="right",ue.font="900 76px Inter, Arial",ue.fillText(g.chg==null?"NEW":(g.chg>=0?"+":"")+g.chg.toFixed(Math.abs(g.chg)>=100?0:1)+"%",985,192),ze.needsUpdate=!0};v(null),bt(g.iconUrl,v)}let Et=new ri,ct=t?5:10,je=new Wt(A,T(me("#ffffff")),ct*2);je.frustumCulled=!1,o.add(je);let Je=Array.from({length:ct},()=>({r:18+i()*34,h:20+i()*16,sp:(.12+i()*.12)*(i()<.5?1:-1),ph:i()*9,cx:-30+i()*60,cz:-26-i()*46})),He=t?110:240,et=new Wt(new an(1,1),new mt({color:me("#ffdcb0"),transparent:!0,opacity:.5,blending:Nn,depthWrite:!1,fog:!1}),He);et.frustumCulled=!1,o.add(et);let Tt=Object.values(ln),Dt=Array.from({length:He},()=>{let g=Tt[Math.floor(i()*Tt.length)];return{x:g.x0+i()*(g.x1-g.x0),y:g.y0+.5+i()*(g.y1-g.y0-1),z:-1.6-i()*(g.d-.6),ph:i()*9,s:.05+i()*.07}}),Te=t?40:60,Ee=new vt().makeScale(0,0,0),F=document.createElement("canvas");F.width=F.height=1024;let Pe=F.getContext("2d"),Re=new mn(F);Re.colorSpace=It,Re.generateMipmaps=!1,Re.minFilter=Xn;let nt=!1,Qe=Array.from({length:64},(g,v)=>v),yt=g=>{let v=0;g=String(g||"");for(let N=0;N<g.length;N++)v=v*31+g.charCodeAt(N)>>>0;return v%360};function At(g,v,N,D,V,b){g.fillStyle=`hsl(${yt(b||V)},70%,58%)`,g.beginPath(),g.arc(v,N,D,0,Qn),g.fill(),g.fillStyle="#fff",g.font=`900 ${Math.round(D*.8)}px Inter, Arial`,g.textAlign="center",g.textBaseline="middle",g.fillText(String(V||"?").slice(0,2).toUpperCase(),v,N+D*.04)}function Xt(g,v,N){let D=g%8*128,V=Math.floor(g/8)*128;Pe.clearRect(D,V,128,128),v?(Pe.fillStyle="#120a30",Pe.fillRect(D,V,128,128),Pe.drawImage(v,D+5,V+5,118,118)):(Pe.fillStyle="#120a30",Pe.fillRect(D,V,128,128),At(Pe,D+64,V+64,58,N.symbol,N.mint)),nt=!0}let qt=new Map;function bt(g,v){if(!g)return;let N=qt.get(g);if(!N){N={im:null,cbs:[],tries:0},qt.set(g,N);let D=()=>{let V=new Image;V.crossOrigin="anonymous",V.referrerPolicy="no-referrer",V.onload=()=>{N.im=V,N.cbs.splice(0).forEach(b=>b(V))},V.onerror=()=>{++N.tries<2&&setTimeout(D,4e3)},V.src=g};D()}N.im?v(N.im):N.cbs.push(v)}let sn=new On(1,1,1),bn=new wi(new Float32Array(Te*2),2);sn.setAttribute("aCell",bn);let hi=new Sn({map:Re,roughness:.5});hi.onBeforeCompile=g=>{g.vertexShader=g.vertexShader.replace("#include <uv_pars_vertex>",`#include <uv_pars_vertex>
attribute vec2 aCell;`).replace("#include <uv_vertex>",`#include <uv_vertex>
vMapUv = (vMapUv + aCell) / 8.0;`)};let Rn=(g,v,N)=>{let D=new Wt(g,v,Te);D.frustumCulled=!1;for(let V=0;V<Te;V++)D.setMatrixAt(V,Ee),N&&D.setColorAt(V,me("#ffffff"));return o.add(D),D},Jt={head:Rn(sn,hi),body:Rn($,B(16777215),1),armL:Rn(A,B(16777215),1),armR:Rn(A,B(16777215),1),legL:Rn(A,T(me("#1a1638"))),legR:Rn(A,T(me("#1a1638"))),helm:Rn($,B(me("#5d6b32"),{roughness:.5})),brim:Rn(A,T(me("#4a5526"))),gun:Rn(A,T(me("#15121f"),{metalness:.4}))},qn={new:me("#ffd23f"),migrated:me("#5fc8ff"),up:me("#2ee6a6"),dn:me("#ff4f9e")},en=Array.from({length:Te},(g,v)=>({k:v,coin:null,mode:"off",x:0,y:0,z:0,yaw:0,sp:1,ph:i()*9,s:.92,cell:-1,duck:0,t0:0})),Cn=new Map;function ei(g,v){g.cell<0&&(g.cell=Qe.length?Qe.shift():g.k%64),Xt(g.cell,null,v),bn.setXY(g.k,g.cell%8,7-Math.floor(g.cell/8)),bn.needsUpdate=!0;let N=g.cell,D=v.mint;bt(v.iconUrl,V=>{g.coin&&g.coin.mint===D&&g.cell===N&&Xt(N,V,v)})}function rs(g){g.cell>=0&&(Qe.push(g.cell),g.cell=-1),g.coin&&Cn.delete(g.coin.mint),g.coin=null,g.mode="off",g.label&&(o.remove(g.label),g.label.material.map.dispose(),g.label.material.dispose(),g.label=null)}let Ts=g=>g.cat==="new"||g.isNew?"new":g.cat==="migrated"?"migrated":g.up?"up":"dn";function Wi(g){let v=g.coin,N=document.createElement("canvas");N.width=360,N.height=104;let D=N.getContext("2d"),V=new mn(N);V.colorSpace=It;let b=Y=>{D.clearRect(0,0,360,104),D.fillStyle="rgba(14,8,32,.9)",D.beginPath(),D.roundRect(4,4,352,84,26),D.fill();let Ce=v.chg==null?"#c8c0e8":v.chg>=0?"#2ee6a6":"#ff4f9e";D.strokeStyle=Ce,D.lineWidth=4,D.stroke(),D.save(),D.beginPath(),D.arc(46,46,30,0,Qn),D.clip(),Y?D.drawImage(Y,16,16,60,60):At(D,46,46,30,v.symbol,v.mint),D.restore(),D.fillStyle="#fff",D.font="900 30px Inter, Arial",D.textBaseline="middle",D.textAlign="left";let Le="$"+v.symbol;for(;D.measureText(Le).width>150&&Le.length>3;)Le=Le.slice(0,-2)+"\u2026";D.fillText(Le,88,47),D.fillStyle=Ce,D.font="900 28px Inter, Arial",D.textAlign="right",D.fillText(v.chg==null?"NEW":(v.chg>=0?"+":"")+v.chg.toFixed(v.chg>=100||v.chg<=-100?0:1)+"%",342,47),V.needsUpdate=!0};b(null),bt(v.iconUrl,b);let O=new cr(new Ms({map:V,transparent:!0,depthTest:!1,fog:!1}));return O.renderOrder=9,O.scale.set(3.6,1.04,1),O.userData={coin:v},o.add(O),O}let R=[];function X(g){let v=g.slice(0,Te-12),N=new Set(v.map(V=>V.mint));for(let V of en)V.mode==="trench"&&V.coin&&!N.has(V.coin.mint)&&rs(V);for(let V of v){let b=Cn.get(V.mint);if(!b){if(b=en.find(Y=>Y.mode==="off"),!b)break;b.coin=V,b.mode="trench",Cn.set(V.mint,b),ei(b,V),b.x=Ve.x0+1.5+i()*(Ve.x1-Ve.x0-3),b.z=i()<.5?-1.6:-3.3,b.y=Ve.y+.1,b.dir=i()<.5?1:-1,b.t0=ot,b.drop=ot>2?1:0}let O=b.coin;b.coin=V,O&&O.iconUrl!==V.iconUrl&&ei(b,V),b.sp=.9+Math.min(1.6,(V.heat||0)*2),b.s=.86+(V.heat||0)*.3,b.label&&(b.label.userData.coin.chg!==V.chg||b.label.userData.coin.symbol!==V.symbol)&&(o.remove(b.label),b.label.material.map.dispose(),b.label.material.dispose(),b.label=null)}R=v,le.setCoins(g);{let V=v.slice().sort((b,O)=>(O.heat||0)-(b.heat||0))[0];V&&(V.mint!==lt||qe.userData.chg!==V.chg)&&(lt=V.mint,qe.userData.chg=V.chg,ye(V))}let D=new Set(v.slice().sort((V,b)=>(b.heat||0)-(V.heat||0)).slice(0,t?6:10).map(V=>V.mint));for(let V of en){if(V.mode!=="trench")continue;let b=D.has(V.coin.mint);b&&!V.label&&(V.label=Wi(V)),!b&&V.label&&(o.remove(V.label),V.label.material.map.dispose(),V.label.material.dispose(),V.label=null)}}let Q=[],ie=null;function te(g){!g||!g.mint||Cn.has(g.mint)||(Q.push(g),Q.length>6&&Q.shift())}function Fe(g){let v=en.find(N=>N.mode==="off");return v?(v.coin={...g,cat:"new",isNew:!0},v.mode="recruit",v.stage=0,Cn.set(g.mint,v),ei(v,v.coin),v.x=ln.barracks.x1-3,v.y=ln.barracks.y0+.05,v.z=-4.2,v.dir=-1,v.t0=ot,v.sp=3.4,v.s=.9,v.label=Wi(v),cn(new L(v.x,v.y+2,v.z),[3.4,3,1.2],26,4,.8),!0):!1}let We=[],Ye=-99;function rt(g,v){!g||!g.mint||en.some(N=>N.mode==="charge"&&N.coin.mint===g.mint)||We.some(N=>N.mint===g.mint)||(v?We.unshift(g):We.push(g),We.length>6&&(We.length=6))}let ht=[],at=new Set;function ut(g){let v=Cn.get(g.mint);if(v&&v.mode!=="trench")return!1;if(!v){if(v=en.find(N=>N.mode==="off"),!v)return!1;v.coin=g,Cn.set(g.mint,v),ei(v,g),v.x=Ve.x1-3,v.z=-2.4,v.y=Ve.y+.1}return v.coin={...g,cat:"migrated"},v.mode="charge",v.stage=0,v.t0=ot,v.sp=3,v.label&&(o.remove(v.label),v.label.material.map.dispose(),v.label.material.dispose()),v.label=Wi(v),!0}let Pt=t?700:1600,Ot=new Wt(A,new mt({toneMapped:!1,transparent:!0,blending:Nn,depthWrite:!1,fog:!1}),Pt);Ot.frustumCulled=!1,o.add(Ot);let Ft=new Wt(A,new Sn({color:6965812,roughness:.9}),260);Ft.frustumCulled=!1,o.add(Ft);let _n=Array.from({length:Pt},()=>({t:9,life:1,p:new L,v:new L,c:[1,1,1],s:.2,drag:1,g:0})),Rt=0,ft=Array.from({length:260},()=>({t:9,life:1,p:new L,v:new L,s:.2,r:new ri})),Nt=0;function gt(g,v,N,D,V,b=1.2,O=0){let Y=_n[Rt];Rt=(Rt+1)%Pt,Y.t=0,Y.life=D,Y.p.copy(g),Y.v.copy(v),Y.c=N,Y.s=V,Y.drag=b,Y.g=O}let Bt=new L;function cn(g,v,N,D,V,b=0){for(let O=0;O<N;O++)Bt.set(i()-.5,i()-.5,i()-.5).normalize().multiplyScalar(D*(.4+i()*.6)),gt(g,Bt,v,V*(.6+i()*.5),.14+i()*.12,1.6,b)}let ui=[[.3,3.4,2.1],[3.6,2.6,.5],[3.2,3.2,3.4],[3.6,.9,2.4],[1,1.8,3.8]],Fn=[];function tt(g){Fn.push({p:new L(g.x,-1,g.z),v:new L((i()-.5)*3,26+i()*10,-2-i()*4),t:0,fuse:1.2+i()*.5,c:ui[i()<.55?0:Math.floor(i()*ui.length)]})}let Bn=new Vi("#ffb070",0,30,1.6);o.add(Bn);let Mi=9;function Pn(g){let v=new L(g.x+(i()-.5)*1.6,Ve.y+.4,g.z+(i()-.5)*.8);Bn.position.copy(v).add(Bt.set(0,1.6,1.5)),Mi=0,g.duck=1;for(let N=0;N<40;N++)gt(v,Bt.set((i()-.5)*9,4+i()*9,(i()-.5)*5+2),N%3?[3.6,1.4+i(),.3]:[3.4,3.2,3],.5+i()*.5,.16,1.4,9);for(let N=0;N<18;N++){let D=ft[Nt];Nt=(Nt+1)%ft.length,D.t=0,D.life=1.2+i()*.6,D.p.copy(v),D.v.set((i()-.5)*6,5+i()*7,(i()-.5)*3+2),D.s=.12+i()*.2,D.r.set(i()*3,i()*3,0)}Yn=Math.min(1,Yn+.5)}let Yn=0,os=t?3:5,w=[],W=new Wt(new ai(.35,10,8),new mt({toneMapped:!1,fog:!1}),os);W.frustumCulled=!1,o.add(W);let ee=Array.from({length:t?1:2},()=>{let g=new Vi("#ff8ad0",0,70,1.4);return o.add(g),g}),he=[[3.6,3.4,3.2],[3.6,.7,2.2],[.6,2.8,3.6]];for(let g=0;g<os;g++)w.push({t:99,life:1,p:new L,v:new L,c:he[g%3],wait:1+g*2.2,up:!1});let Ie=t?30:70,ke=new Wt(A,new mt({toneMapped:!1,fog:!1}),Ie);ke.frustumCulled=!1,o.add(ke);let $e=Array.from({length:Ie},()=>({t:9,life:1,a:new L,d:new L,c:[3,.6,1.8]})),oe=0,De=1,zt=[];for(let g=0;g<2;g++){let v=new Dn,N=T(me("#1c1840"),{metalness:.3,roughness:.5}),D=new Be($,N);D.scale.set(2.4,1.7,4.2),v.add(D);let V=new Be(A,N);V.scale.set(.5,.5,4),V.position.set(0,.3,-3.6),v.add(V);let b=new Be(A,T(me("#0c0a1e")));b.scale.set(9.5,.1,.45),b.position.y=1.15,v.add(b);let O=new Be(new Fr(4.5,40,20,1,!0).translate(0,-20,0),new mt({color:me("#e8f0ff"),transparent:!0,opacity:.08,blending:Nn,depthWrite:!1,side:Gn,fog:!1}));O.position.y=-.8,O.rotation.x=.25,v.add(O);let Y=new Be(A,U(jn("#ff3a4a").multiplyScalar(3)));Y.scale.setScalar(.3),Y.position.set(0,-.9,-1.6),v.add(Y),o.add(v),zt.push({g:v,rot:b,red:Y,r:28+g*12,h:16+g*5,sp:.12+g*.04,ph:g*2.6,sp2:null})}function Mt(g){zt.forEach((v,N)=>{let D=g[N];if(v.sp2&&(v.g.remove(v.sp2),v.sp2.material.map.dispose(),v.sp2.material.dispose(),v.sp2=null),!D)return;let V=document.createElement("canvas");V.width=420,V.height=150;let b=V.getContext("2d");b.fillStyle="rgba(12,6,34,.92)",b.beginPath(),b.roundRect(6,6,408,128,30),b.fill(),b.strokeStyle="#ffd23f",b.lineWidth=5,b.stroke(),b.fillStyle="#ffd23f",b.font="900 22px Inter, Arial",b.textAlign="left",b.fillText("PUMP.FUN WHALE",30,44),D.sol!=null&&(b.textAlign="right",b.fillStyle="rgba(225,220,255,.9)",b.fillText(Math.round(D.sol).toLocaleString("en-US")+" SOL",390,44)),b.textAlign="left",b.fillStyle="#fff",b.font="900 40px Inter, Arial",b.fillText(String(D.n||"").slice(0,14),30,88);let O=D.last;if(O){b.fillStyle=O.side==="buy"?"#2ee6a6":"#ff4f9e",b.font="800 22px Inter, Arial";let Ce=(O.side==="buy"?"Bought $":"Sold $")+(O.sym||"\u2026")+" \xB7 "+(+O.sol||0).toFixed(1)+" SOL";for(;b.measureText(Ce).width>360&&Ce.length>4;)Ce=Ce.slice(0,-2)+"\u2026";b.fillText(Ce,30,120)}let Y=new mn(V);Y.colorSpace=It,v.sp2=new cr(new Ms({map:Y,transparent:!0,depthTest:!1,fog:!1})),v.sp2.renderOrder=8,v.sp2.position.set(0,4.2,0),v.sp2.scale.set(9.4,3.36,1),v.g.add(v.sp2)})}let $t=null;function rn(){if(!$t)return;[["ON THE LINE",$t.hot||[],"#2ee6a6"],["NEW RECRUITS",$t.fresh||[],"#ffd23f"],["OVER THE TOP",$t.grads||[],"#5fc8ff"]].forEach(([v,N,D],V)=>{let b=k[V];if(!b)return;let O=b.g;O.fillStyle="#0a0820",O.fillRect(0,0,640,400),O.fillStyle="rgba(255,255,255,.04)";for(let Y=0;Y<400;Y+=4)O.fillRect(0,Y,640,2);O.fillStyle=D,O.font="900 34px Inter, Arial",O.textAlign="left",O.fillText(v,30,54),O.fillRect(30,70,580,3),N.slice(0,6).forEach((Y,Ce)=>{let Le=118+Ce*46;O.fillStyle="#fff",O.font="800 28px Inter, Arial";let we="$"+(Y.symbol||"?");for(;O.measureText(we).width>300&&we.length>3;)we=we.slice(0,-2)+"\u2026";O.fillText(we,30,Le),O.textAlign="right";let pt=V===2?Y.mcap?"$"+(Y.mcap>=1e6?(Y.mcap/1e6).toFixed(2)+"M":Math.round(Y.mcap/1e3)+"K"):"\u2014":Y.chg==null?"NEW":(Y.chg>=0?"+":"")+Y.chg.toFixed(1)+"%";O.fillStyle=V===2?"#c9e8ff":Y.chg==null?D:Y.chg>=0?"#2ee6a6":"#ff4f9e",O.fillText(pt,610,Le),O.textAlign="left"}),N.length||(O.fillStyle="rgba(255,255,255,.5)",O.font="700 26px Inter, Arial",O.fillText("waiting for the feed\u2026",30,140)),b.t.needsUpdate=!0})}let xt=0;function Kt(g){xt=Math.max(0,Math.min(de,g|0));for(let v=0;v<de;v++)S.setColorAt(v,v<xt?jn("#ffd8f0").multiplyScalar(1.5):me("#ffffff"));S.instanceColor.needsUpdate=!0}let Vt=[{p:[0,17,52],t:[0,14.5,-120],m:{p:[0,30,88],t:[0,25,-120]}},{p:[-14,11,46],t:[-4,8,-60],m:{p:[-8,13,66],t:[-4,2,-60]}},{p:[-4,2.4,17],t:[-16,-2,-3],m:{p:[-10,-9.5,30],t:[-10,-13.5,-3]}},{p:[25,8,33],t:[36,.4,-6],m:{p:[47,-2.5,46],t:[47,-8.5,-6]}},{p:[6,-13,27],t:[-4,-15,-5],m:{p:[-4,-24.5,40],t:[-4,-26.5,-5]}},{p:[-2,-28.6,27],t:[-12,-30.5,-6],m:{p:[-4,-40,40],t:[-4,-42,-6]}},{p:[6,-46,26],t:[-4,-48,-6],m:{p:[-4,-57.7,40],t:[-4,-59.7,-6]}},{p:[-12,-65,29],t:[-20,-67.5,-6],m:{p:[-4,-77,42],t:[-4,-79,-6]}}],Gt=0,dt=0,Ct={x:0,y:0,tx:0,ty:0};addEventListener("pointermove",g=>{Ct.tx=g.clientX/innerWidth*2-1,Ct.ty=g.clientY/innerHeight*2-1},{passive:!0});let wt=new L,on=new L,ba=new L,wa=new L,Ac=new L,wn=new L;function mr(g,v,N){let D=a.aspect<.9,V=Gi(Math.floor(g),0,Vt.length-1),b=Math.min(Vt.length-1,V+1),O=g-V,Y=O*O*O*(O*(O*6-15)+10),Ce=D?Vt[V].m:Vt[V],Le=D?Vt[b].m:Vt[b];v.set(...Ce.p).lerp(wa.set(...Le.p),Y),N.set(...Ce.t).lerp(wn.set(...Le.t),Y);let we=Math.sin(Math.PI*Y)*(Math.abs(Ce.p[1]-Le.p[1])>8?9:0);v.z+=we}let Ti=0;function ti(){let g=K;g.fillStyle="#0b1636",g.fillRect(0,0,1024,352),g.strokeStyle="rgba(80,220,255,.22)",g.lineWidth=2;for(let N=0;N<1024;N+=48)g.beginPath(),g.moveTo(N,0),g.lineTo(N,352),g.stroke();for(let N=0;N<352;N+=48)g.beginPath(),g.moveTo(0,N),g.lineTo(1024,N),g.stroke();g.fillStyle="rgba(255,79,163,.18)",g.fillRect(40,132,700,88),g.strokeStyle="#ff4fa3",g.lineWidth=4,g.strokeRect(40,132,700,88),g.fillStyle="rgba(61,255,143,.25)",g.fillRect(900,110,90,132),g.strokeStyle="#3dff8f",g.strokeRect(900,110,90,132),g.fillStyle="rgba(255,255,255,.75)",g.font="800 22px Inter, Arial",g.fillText("THE LINE",48,120),g.fillText("PUMPSWAP",896,98);let v=ot*220%1100;g.fillStyle="rgba(80,220,255,.08)",g.fillRect(v-60,0,60,352);for(let N of en){if(N.mode==="off"||!N.coin)continue;let D,V;if(N.mode==="charge")D=740+Gi((N.x-Ve.x1)/(En.bunker-Ve.x1),0,1)*200,V=176+Math.sin(N.k)*30;else if(N.mode==="trench")D=40+(N.x-Ve.x0)/(Ve.x1-Ve.x0)*700,V=N.z>-2.5?196:156;else continue;let b=N.coin.chg==null?"#ffd23f":N.coin.chg>=0?"#2ee6a6":"#ff4f9e",O=(Math.sin(ot*6+N.k)+1)/2;g.fillStyle=b,g.beginPath(),g.arc(D,V,N.mode==="charge"?10:6,0,Qn),g.fill(),(N.label||N.mode==="charge")&&(g.strokeStyle=b,g.globalAlpha=1-O,g.lineWidth=3,g.beginPath(),g.arc(D,V,10+O*16,0,Qn),g.stroke(),g.globalAlpha=1)}ve.needsUpdate=!0}let Qt=qu({scene:o,std:T,candy:B,BOX:A,RBOX:$,col:me,clamp:Gi,city:le,spark:gt,burst:cn,TAU:Qn,night:()=>f.uNight.value,onCollect:(g,v)=>e.onCollect&&e.onCollect(g,v)}),fi=0,Ta=.78,Rc=null,Aa=new L,Ra=new L,as=1,$r=!1,Ca=new L(0,54,-520),Pa=new L(0,105,-130),Yu=new L(0,50,-1e3),tn=new vt,Ia=new vt,Kr=new vt,Qr=new vt,Cc=new vt,Zu=new L,jr=new L,Ju=new un,$u=new ri;function Xi(g,v,N,D,V,b,O,Y,Ce,Le){Kr.makeTranslation(N,D,V),Qr.makeRotationX(b),Cc.makeTranslation(0,O,0),jr.set(Y,Ce,Le),tn.copy(Ia).multiply(Kr).multiply(Qr).multiply(Cc).scale(jr),g.setMatrixAt(v,tn)}let ot=0,La=performance.now(),As=0,eo=.5,Ua=2,Da=3,Na=0,Pc=!1,Ic=0,Ai=new L,ls=new un,Rs=new L,za=new Ze,Ku=new L(0,0,1),to=new L;function Qu(g){for(let v of en){let N=v.k;if(v.mode==="off"||!v.coin){for(let Tn of Object.values(Jt))Tn.setMatrixAt(N,Ee);continue}let D=!0,V=0,b=1,O=0;if(v.mode==="trench"){if(v.x+=v.dir*v.sp*g,v.x<Ve.x0+1&&(v.x=Ve.x0+1,v.dir=1),v.x>Ve.x1-2.2&&(v.x=Ve.x1-2.2,v.dir=-1),i()<g*.05&&(v.dir*=-1),V=v.dir>0?Math.PI/2:-Math.PI/2,v.y=Ve.y+.1,v.drop){let Tn=(ot-v.t0)/.9;Tn<1?v.y+=12*(1-Tn)*(1-Tn):(v.drop=0,cn(Ai.set(v.x,v.y+1,v.z),[3.4,2.6,.5],18,3,.6))}}else if(v.mode==="recruit"){let Tn=ln.barracks,Ci=(xn.x0+xn.x1)/2;if(v.stage===0)v.x-=v.sp*g,V=-Math.PI/2,v.x<Tn.x0+1.5&&(ie?(v.x=Tn.x0+1.5,D=!1,V=Math.PI/2*0):(ie=v,v.stage=1));else if(v.stage===1)v.x-=v.sp*g,V=-Math.PI/2,v.x<=Ci&&(v.x=Ci,v.stage=2,v.lt=0);else if(v.stage===2){v.lt+=g,D=!1;let no=ci(0,1,v.lt/3.2);v.y=gn(Tn.y0+.05,Ve.y+.1,no),Z.position.y=v.y-.2,v.lt>3.4&&(v.stage=3)}else v.stage===3&&(v.x+=v.sp*.7*g,V=Math.PI/2,v.x>Ve.x0+2&&(v.mode="trench",v.dir=1,v.sp=1.2,v.z=-2.4,ie=null,v.label&&(o.remove(v.label),v.label.material.map.dispose(),v.label.material.dispose(),v.label=null)));v.stage<2&&(v.y=Tn.y0+.05)}else if(v.mode==="charge"){let Tn=ot-v.t0;if(v.stage===0)v.x+=(Ve.x1-1.6-v.x)*Math.min(1,g*3),v.z+=(Ve.z+1.1-v.z)*Math.min(1,g*3),V=Math.PI,Tn>.6&&(v.stage=1,v.t1=ot);else if(v.stage===1){let Ci=Math.min(1,(ot-v.t1)/1.1);if(v.y=gn(Ve.y+.1,.1,Ci),v.z=gn(Ve.z+1.1,Ve.z+.2,Ci),V=Math.PI,O=1,D=!0,Ci>=1){v.stage=2,v.z=-3;for(let no=0;no<26;no++)gt(Ai.set(v.x,1.4,v.z),to.set((i()-.5)*5,4+i()*5,(i()-.5)*4),[3.6,.7,2.2],.9,.2,1.4,4)}}else if(v.stage===2)v.x+=6.2*g,v.y=.1,V=Math.PI/2,b=2,i()<g*3&&Lc(Ai.set(En.bunker-4.5,2,-6),to.set(v.x+(i()-.5)*4,1+i()*2,v.z+(i()-.5)*4),[.4,3.2,1.4]),v.x>En.bunker-6&&(v.stage=3,v.t2=ot,cn(Ai.set(v.x,2,v.z),[.5,3.4,1.6],70,9,1.3,2),cn(Ai.set(v.x,2,v.z),[3.4,3.4,3.6],30,6,1));else{let Ci=(ot-v.t2)/.5;if(Ci>1){rs(v);continue}v.s=.9*(1-Ci)}}let Y=v.s*(v.mode==="charge"&&v.stage===3,1),Ce=5.6*v.sp*.55*b+3,Le=D?Math.sin(ot*Ce+v.ph)*.62:0,we=D?Math.abs(Math.cos(ot*Ce+v.ph))*.1:Math.sin(ot*2.2+v.ph)*.02;v.duck=Math.max(0,v.duck-g*1.6);let pt=1-v.duck*.35;Ia.compose(Zu.set(v.x,v.y+we,v.z),Ju.setFromEuler($u.set(0,V,0)),jr.set(Y,Y*pt,Y)),Xi(Jt.legL,N,-.32,1.1,0,O?Math.sin(ot*9)*.8:Le,-.55,.42,1.1,.46),Xi(Jt.legR,N,.32,1.1,0,O?-Math.sin(ot*9)*.8:-Le,-.55,.42,1.1,.46),Xi(Jt.body,N,0,1.66,0,0,0,1.2,1.12,.72),Xi(Jt.armL,N,-.79,2.12,0,O?-2.6+Math.sin(ot*9)*.4:-1.2+Le*.12,-.5,.34,1,.38),Xi(Jt.armR,N,.79,2.12,0,O?-2.6-Math.sin(ot*9)*.4:b>1?-2.4:-1.02+Le*.1,-.5,.34,1,.38);let di=Math.sin(ot*1.7+v.ph)*.06;Xi(Jt.head,N,0,2.84,0,di,0,1.28,1.28,1.28),Xi(Jt.helm,N,0,2.84,0,di,.8,1.46,.44,1.46),Xi(Jt.brim,N,0,2.84,0,di,.6,1.68,.1,1.68),Kr.makeTranslation(.08,1.86,.7),Qr.makeRotationX(b>1?-.5:D?-.08+Le*.04:-.32),tn.copy(Ia).multiply(Kr).multiply(Qr).scale(jr.set(.17,.22,1.75)),Jt.gun.setMatrixAt(N,tn);let Ri=qn[Ts(v.coin)];Jt.body.setColorAt(N,Ri),Jt.armL.setColorAt(N,Ri),Jt.armR.setColorAt(N,Ri),v.label&&v.label.position.set(v.x,v.y+4.9*Y+(v.mode==="trench"?0:.3),v.z)}for(let v of Object.values(Jt))v.instanceMatrix.needsUpdate=!0,v.instanceColor&&(v.instanceColor.needsUpdate=!0);nt&&Ic%12===0&&(nt=!1,Re.needsUpdate=!0)}function Lc(g,v,N){let D=$e[oe];oe=(oe+1)%Ie,D.a.copy(g),D.d.copy(v).sub(g);let V=D.d.length();D.d.normalize(),D.t=0,D.life=V/90,D.c=N}function Oa(g,v=!0){if(ot+=g,Ic++,f.uTime.value=ot,dt+=(Gt-dt)*(1-Math.exp(-g*(n?9:3.4))),mr(dt,wt,on),Ct.x+=(Ct.tx-Ct.x)*Math.min(1,g*2.5),Ct.y+=(Ct.ty-Ct.y)*Math.min(1,g*2.5),wt.x+=Ct.x*1.2,wt.y-=Ct.y*.6,Yn=Math.max(0,Yn-g*2.2),as<1){$r&&(as=Math.min(1,as+g/4.6));let b=Gi((as-.1)/.9,0,1),O=b<.5?4*b**3:1-Math.pow(-2*b+2,3)/2,Y=(1-O)**2,Ce=2*(1-O)*O,Le=O*O;wt.set(Y*Ca.x+Ce*Pa.x+Le*wt.x,Y*Ca.y+Ce*Pa.y+Le*wt.y,Y*Ca.z+Ce*Pa.z+Le*wt.z),on.lerpVectors(Yu,on,O)}{let b=1-ci(0,.8,dt);wt.x+=Math.sin(ot*.13)*4*b,wt.y+=Math.sin(ot*.09)*1.2*b,on.x+=Math.sin(ot*.13)*1.5*b}if(Yn>0&&(wt.x+=(i()-.5)*Yn*.35,wt.y+=(i()-.5)*Yn*.35),fi+=((Qt.S.on?1:0)-fi)*(1-Math.exp(-g*2.2)),fi<.002&&(fi=0),Qt.S.on?(Qt.update(g,ot,Aa,Ra,a),wt.copy(Aa),on.copy(Ra),Qt.radar(Rc,g)):fi>0&&(wt.lerp(Aa,fi),on.lerp(Ra,fi)),!Qt.S.on){let b=a.aspect<.9?52:42;Math.abs(a.fov-b)>.01&&(a.fov+=(b-a.fov)*Math.min(1,g*3),a.updateProjectionMatrix())}a.position.copy(wt),a.lookAt(on),Ta+=(Qt.S.tod-Ta)*(1-Math.exp(-g*1.6));let N=gn(ci(.05,1.25,dt),Ta,fi),D=ci(.45,.95,N);f.uT.value=N,f.uNight.value=D,le.update(g,ot,D,a.position,Qt.S.on?Qt.S:null,fi),x.position.set(a.position.x*.2,gn(46,-80,ci(.06,.9,N)),-1e3),f.uSunX.value=x.position.x,x.lookAt(a.position),m.position.copy(x.position),m.material.opacity=(1-D)*.42,d.intensity=gn(.9,.42,D),d.color.setRGB(gn(.75,.32,D),gn(.94,.26,D),gn(1,.62,D)),d.groundColor.setRGB(gn(1,.2,D),gn(.72,.08,D),gn(.85,.24,D)),C.intensity=gn(1.5,.3,ci(.2,.9,N)),C.color.setRGB(1,gn(.94,.58,ci(0,.6,N))*(1-D*.3)+D*.4,gn(.86,.45,ci(0,.6,N))+D*.5),o.fog.color.setRGB(gn(1,.07,D),gn(.78,.03,D)*(1-ci(.3,.6,N)*.2),gn(.86,.16,D)),o.fog.near=90,o.fog.far=gn(900,520,D),ne.color.setScalar(.15+D*2.2);{let b=ci(-3,-16,a.position.y);_.intensity=b*1.1,_.position.set(a.position.x+14,a.position.y+8,40),_.target.position.set(a.position.x,a.position.y-2,0),d.intensity+=b*.3}for(let b of ge)b.cone.material.opacity=D*.07,b.cone.rotation.z=Math.sin(ot*b.sp+b.ph)*.5,b.cone.rotation.x=-.15+Math.cos(ot*b.sp*.8+b.ph)*.25;for(let b of ce)b.m.position.x+=b.sp*g,b.m.position.x>600&&(b.m.position.x=-600);if(pe.emissiveIntensity=.3*(1-D),pe.opacity=.97-D*.45,fe.position.set(-18+Math.sin(ot*.035)*58,47+Math.sin(ot*.3)*.8,-105),fe.rotation.y=Math.cos(ot*.035)>0?0:Math.PI,fe.rotation.z=Math.sin(ot*.4)*.02,qe.rotation.y=fe.rotation.y?Math.PI:0,qe.position.z=fe.rotation.y?-4.75:4.75,Je.forEach((b,O)=>{let Y=ot*b.sp+b.ph,Ce=b.cx+Math.cos(Y)*b.r,Le=b.cz+Math.sin(Y)*b.r*.5,we=b.h+Math.sin(ot*.5+b.ph)*2,pt=Math.sin(ot*8+b.ph)*.55,di=Math.atan2(-Math.sin(Y)*b.sp,Math.cos(Y)*b.sp*.5),Ri=D<.5?1:0;for(let Tn of[-1,1])ls.setFromEuler(Et.set(0,di,Tn*(.25+pt))),tn.compose(Ai.set(Ce+Math.cos(di)*Tn*.55*Ri,we,Le-Math.sin(di)*Tn*.55*Ri),ls,Rs.set(1.2*Ri,.06*Ri,.38*Ri)),je.setMatrixAt(O*2+(Tn>0?1:0),tn)}),je.instanceMatrix.needsUpdate=!0,a.position.y<-2){let b=a.quaternion;Dt.forEach((O,Y)=>{tn.compose(Ai.set(O.x+Math.sin(ot*.3+O.ph)*.6,O.y+Math.sin(ot*.21+O.ph*2)*.4,O.z),b,Rs.setScalar(O.s*(.7+.3*Math.sin(ot*2+O.ph)))),et.setMatrixAt(Y,tn)}),et.instanceMatrix.needsUpdate=!0,et.visible=!0}else et.visible=!1;if(Ti-=g,Ti<=0&&K&&Math.abs(dt-5)<1.2&&(Ti=.35,ti()),Qu(g),Q.length&&!en.some(b=>b.mode==="recruit"&&b.stage<2&&b.x>ln.barracks.x1-8)){let b=Q.shift();Fe(b)}if(ie||(Z.position.y+=(Ve.y-.1-Z.position.y)*Math.min(1,g*.8)),Z.userData.cable.scale.y=Math.max(.1,-Z.position.y),Z.userData.cable.position.y=3.4+-Z.position.y/2,(ot-Ye>7||Math.abs(dt-3)<.5&&ot-Ye>2.2)&&!en.some(b=>b.mode==="charge")){let b=We.shift();if(!b&&ht.length){let O=ht.filter(Y=>!at.has(Y.mint));O.length?b=O[Math.floor(i()*Math.min(6,O.length))]:at.clear()}b&&ut(b)&&(at.add(b.mint),Ye=ot)}if(Ua-=g,Ua<=0){let b=en.filter(Y=>Y.mode==="trench"&&Y.coin.chg!=null&&Y.coin.chg>2).sort((Y,Ce)=>Ce.coin.chg-Y.coin.chg),O=b[Math.floor(i()*i()*Math.min(b.length,8))];O&&tt(O),Ua=(1.2+i()*2.2)*(1.5-eo)}if(Da-=g,Da<=0){let b=en.filter(Y=>Y.mode==="trench"&&Y.coin.chg!=null&&Y.coin.chg<-8).sort((Y,Ce)=>Y.coin.chg-Ce.coin.chg),O=b[Math.floor(i()*Math.min(b.length,6))];O&&Pn(O),Da=(2+i()*3)*(.5+eo)}Mi+=g,Bn.intensity=Math.max(0,1-Mi/.3)*110;for(let b=Fn.length-1;b>=0;b--){let O=Fn[b];O.t+=g,O.v.y-=9*g,O.p.addScaledVector(O.v,g),gt(O.p,to.set(i()-.5,-2,i()-.5),[3.4,2.2,.8],.35,.12,2),O.t>O.fuse&&(cn(O.p,O.c,t?50:90,13,1.4,3),Fn.splice(b,1))}for(let b=0;b<Pt;b++){let O=_n[b];if(O.t>=O.life){O.t<9&&(Ot.setMatrixAt(b,Ee),O.t=9);continue}O.t+=g,O.v.multiplyScalar(Math.exp(-O.drag*g)),O.v.y-=O.g*g,O.p.addScaledVector(O.v,g);let Y=1-O.t/O.life;tn.compose(O.p,ls.identity(),Rs.setScalar(O.s*(.4+Y*.6))),Ot.setMatrixAt(b,tn),Ot.setColorAt(b,za.setRGB(O.c[0]*Y,O.c[1]*Y,O.c[2]*Y))}Ot.instanceMatrix.needsUpdate=!0,Ot.instanceColor&&(Ot.instanceColor.needsUpdate=!0);for(let b=0;b<ft.length;b++){let O=ft[b];if(O.t>=O.life){O.t<9&&(Ft.setMatrixAt(b,Ee),O.t=9);continue}O.t+=g,O.v.y-=14*g,O.p.addScaledVector(O.v,g),O.p.y<Ve.y+.05&&(O.p.y=Ve.y+.05,O.v.set(0,0,0)),tn.compose(O.p,ls.setFromEuler(O.r),Rs.setScalar(O.s)),Ft.setMatrixAt(b,tn)}Ft.instanceMatrix.needsUpdate=!0;let V=0;for(w.forEach((b,O)=>{if(b.t>=b.life)if(b.wait-=g,D>.5&&b.wait<=0)b.p.set(Ve.x0+i()*(En.x1-Ve.x0+10),1,-3-i()*20),b.v.set((i()-.5)*3,24+i()*8,(i()-.5)*3),b.t=0,b.up=!0,b.life=11+i()*4,b.c=he[Math.floor(i()*3)],b.wait=1+i()*3;else{tn.makeScale(0,0,0),W.setMatrixAt(O,tn);return}b.t+=g,b.up?(b.v.y-=9*g,b.p.addScaledVector(b.v,g),gt(b.p,to.set((i()-.5)*.6,-1.2,(i()-.5)*.6),b.c,.45,.14,2.2),b.v.y<3&&(b.up=!1)):(b.p.y-=1.4*g,b.p.x+=Math.sin(ot*.7+O)*.4*g);let Y=Math.max(0,1-b.t/b.life),Ce=(.78+.22*Math.sin(ot*23+O*3))*Math.min(1,Y*3);if(tn.compose(b.p,ls.identity(),Rs.setScalar(1)),W.setMatrixAt(O,tn),W.setColorAt(O,za.setRGB(b.c[0]*Ce,b.c[1]*Ce,b.c[2]*Ce)),!b.up&&V<ee.length){let Le=ee[V++];Le.position.copy(b.p),Le.color.setRGB(b.c[0]/3.6,b.c[1]/3.6,b.c[2]/3.6),Le.intensity=160*Ce*D}});V<ee.length;V++)ee[V].intensity=0;if(W.instanceMatrix.needsUpdate=!0,W.instanceColor&&(W.instanceColor.needsUpdate=!0),De-=g,D>.4&&De<=0){let b=3+Math.floor(i()*4),O=new L(-60+i()*120,4+i()*10,-30-i()*60),Y=new L(-60+i()*120,8+i()*20,-20-i()*80),Ce=[[3.4,.6,2],[3.6,2.2,.5],[.6,2.6,3.6]][Math.floor(i()*3)];for(let Le=0;Le<b;Le++)Lc(O,Y,Ce),$e[(oe+Ie-1)%Ie].t=-Le*.07;De=(.3+i()*.8)*(.6+eo)}$e.forEach((b,O)=>{if(b.t>b.life+.1){tn.makeScale(0,0,0),ke.setMatrixAt(O,tn);return}if(b.t+=g,b.t<0||b.t>b.life){tn.makeScale(0,0,0),ke.setMatrixAt(O,tn);return}Ai.copy(b.a).addScaledVector(b.d,b.t*90),ls.setFromUnitVectors(Ku,b.d),tn.compose(Ai,ls,Rs.set(.08,.08,2.4)),ke.setMatrixAt(O,tn),ke.setColorAt(O,za.setRGB(...b.c))}),ke.instanceMatrix.needsUpdate=!0,ke.instanceColor&&(ke.instanceColor.needsUpdate=!0),zt.forEach((b,O)=>{let Y=ot*b.sp+b.ph;if(b.g.position.set(-6+Math.cos(Y)*b.r*1.4,b.h+Math.sin(ot*.7+O)*1.2,-34+Math.sin(Y)*b.r*.55),b.g.rotation.y=-Y+(O?Math.PI:0),b.rot.rotation.y=ot*22,b.red.visible=Math.sin(ot*6+O)>.3,b.sp2){let Ce=a.position.distanceTo(b.g.position),Le=Gi(Ce/40,.6,1.5);b.sp2.scale.set(9.4*Le,3.36*Le,1),b.sp2.material.opacity=Math.max(ci(.55,.95,dt),fi),b.sp2.visible=dt>.55||fi>.05}});for(let b of G)b.f.scale.setScalar(.8+.3*Math.sin(ot*13+b.ph)*Math.sin(ot*7.3+b.ph*2));Na-=g,Na<=0&&(rn(),Na=3),ln.fallen.light&&(ln.fallen.light.intensity=(t?26:34)*(1+Math.min(1,xt/30)*.8)*(.92+.08*Math.sin(ot*9))),v&&h.render()}function Fa(g){As=requestAnimationFrame(Fa);let v=Math.min(.05,(g-La)/1e3);La=g,Pc||Oa(n?v*.6:v)}function Uc(){a.aspect=innerWidth/innerHeight,a.fov=a.aspect<.9?52:42,a.updateProjectionMatrix(),r.setSize(innerWidth,innerHeight,!1),h.setSize(innerWidth,innerHeight),u.setSize(innerWidth,innerHeight)}addEventListener("resize",Uc),Uc(),document.addEventListener("visibilitychange",()=>{document.hidden?(cancelAnimationFrame(As),As=0):As||(La=performance.now(),As=requestAnimationFrame(Fa))});let Dc=new fa,Nc=new Me;return s.addEventListener("click",g=>{if(!e.onPick)return;Nc.set(g.clientX/innerWidth*2-1,-g.clientY/innerHeight*2+1),Dc.setFromCamera(Nc,a);let v=en.filter(D=>D.label).map(D=>D.label),N=Dc.intersectObjects(v,!1);N.length&&e.onPick(N[0].object.userData.coin)}),mr(0,wt,on),a.position.copy(wt),a.lookAt(on),As=requestAnimationFrame(Fa),{setF(g){Gt=Gi(g,0,Vt.length-1),as<1&&g>.05&&($r=!0)},jump(g){Gt=dt=Gi(g,0,Vt.length-1)},hold(){Gt<.2&&!n&&(as=0,$r=!1)},intro(){$r=!0},play(g,v){g&&!Qt.S.on?(as=1,Rc=v||null,Qt.enter(a,on)):!g&&Qt.S.on&&Qt.exit()},playing(){return Qt.S.on},playInput(g){Qt.input(g)},playState(){return Qt.state()},playTime(){return Qt.cycleTime()},setCoins:X,recruit:te,graduate:rt,setGrads(g){ht=(g||[]).filter(v=>v&&v.mint&&v.symbol).slice(0,20)},setWhales:Mt,setScreens(g){$t=g,rn()},setFallen:Kt,setMood(g){eo=Gi(g,0,1)},pause(g){Pc=!!g},stations:Vt.length,adv(g,v=1/30){let N=Math.max(1,Math.round(g/v));for(let D=0;D<N;D++)Oa(v,!1)},shot(g=1/30){Oa(g,!0)}}}export{En as NML,ln as ROOMS,xn as SH,Ve as TR,b_ as createWorld};
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2023 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
