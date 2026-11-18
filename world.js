var af=0,kc=1,lf=2;var yu=1,cf=2,Bi=3,rs=0,mn=1,zn=2;var Pi=0,sr=1,On=2,Vc=3,Gc=4,hf=5,vs=100,uf=101,ff=102,Wc=103,Xc=104,df=200,pf=201,mf=202,gf=203,Al=204,Rl=205,xf=206,_f=207,vf=208,yf=209,Mf=210,Sf=211,Ef=212,bf=213,wf=214,Tf=0,Af=1,Rf=2,Oo=3,Cf=4,Pf=5,If=6,Lf=7,Mu=0,Uf=1,Df=2,Ii=0,xc=1,_c=2,vc=3,yc=4,Nf=5,Mc=6;var Su=300,ar=301,lr=302,Cl=303,Pl=304,ga=306,Il=1e3,Si=1001,Ll=1002,Vn=1003,qc=1004;var Wa=1005;var Jn=1006,zf=1007;var Nr=1008;var ss=1009,Of=1010,Ff=1011,Sc=1012,Eu=1013,ns=1014,is=1015,bi=1016,bu=1017,wu=1018,Ss=1020,Bf=1021,Ei=1023,Hf=1024,kf=1025,Es=1026,cr=1027,Vf=1028,Tu=1029,Gf=1030,Au=1031,Ru=1033,Xa=33776,qa=33777,Ya=33778,Za=33779,Yc=35840,Zc=35841,Jc=35842,$c=35843,Cu=36196,Kc=37492,Qc=37496,jc=37808,eh=37809,th=37810,nh=37811,ih=37812,sh=37813,rh=37814,oh=37815,ah=37816,lh=37817,ch=37818,hh=37819,uh=37820,fh=37821,Ja=36492,dh=36494,ph=36495,Wf=36283,mh=36284,gh=36285,xh=36286;var Fo=2300,Bo=2301,$a=2302,_h=2400,vh=2401,yh=2402;var Pu=3e3,bs=3001,Xf=3200,qf=3201,Iu=0,Yf=1,ai="",Ct="srgb",Wi="srgb-linear",Ec="display-p3",xa="display-p3-linear",Ho="linear",Bt="srgb",ko="rec709",Vo="p3";var Ds=7680;var Mh=519,Zf=512,Jf=513,$f=514,Lu=515,Kf=516,Qf=517,jf=518,ed=519,Ul=35044;var Sh="300 es",Dl=1035,Vi=2e3,Go=2001,os=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let i=this._listeners[e];if(i!==void 0){let r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let n=this._listeners[e.type];if(n!==void 0){e.target=this;let i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,e);e.target=null}}},Un=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Ka=Math.PI/180,Nl=180/Math.PI;function Gi(){let s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Un[s&255]+Un[s>>8&255]+Un[s>>16&255]+Un[s>>24&255]+"-"+Un[e&255]+Un[e>>8&255]+"-"+Un[e>>16&15|64]+Un[e>>24&255]+"-"+Un[t&63|128]+Un[t>>8&255]+"-"+Un[t>>16&255]+Un[t>>24&255]+Un[n&255]+Un[n>>8&255]+Un[n>>16&255]+Un[n>>24&255]).toLowerCase()}function Rn(s,e,t){return Math.max(e,Math.min(t,s))}function td(s,e){return(s%e+e)%e}function Qa(s,e,t){return(1-t)*s+t*e}function Eh(s){return(s&s-1)===0&&s!==0}function zl(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function ki(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Ht(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}var Ee=class s{constructor(e=0,t=0){s.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Rn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*i+e.x,this.y=r*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Et=class s{constructor(e,t,n,i,r,o,a,l,c){s.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,l,c)}set(e,t,n,i,r,o,a,l,c){let h=this.elements;return h[0]=e,h[1]=i,h[2]=a,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],f=n[2],p=n[5],x=n[8],y=i[0],m=i[3],d=i[6],C=i[1],_=i[4],T=i[7],B=i[2],N=i[5],R=i[8];return r[0]=o*y+a*C+l*B,r[3]=o*m+a*_+l*N,r[6]=o*d+a*T+l*R,r[1]=c*y+h*C+u*B,r[4]=c*m+h*_+u*N,r[7]=c*d+h*T+u*R,r[2]=f*y+p*C+x*B,r[5]=f*m+p*_+x*N,r[8]=f*d+p*T+x*R,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-n*r*h+n*a*l+i*r*c-i*o*l}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=h*o-a*c,f=a*l-h*r,p=c*r-o*l,x=t*u+n*f+i*p;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/x;return e[0]=u*y,e[1]=(i*c-h*n)*y,e[2]=(a*n-i*o)*y,e[3]=f*y,e[4]=(h*t-i*l)*y,e[5]=(i*r-a*t)*y,e[6]=p*y,e[7]=(n*l-c*t)*y,e[8]=(o*t-n*r)*y,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-i*c,i*l,-i*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(ja.makeScale(e,t)),this}rotate(e){return this.premultiply(ja.makeRotation(-e)),this}translate(e,t){return this.premultiply(ja.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},ja=new Et;function Uu(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Wo(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function nd(){let s=Wo("canvas");return s.style.display="block",s}var bh={};function Pr(s){s in bh||(bh[s]=!0,console.warn(s))}var wh=new Et().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Th=new Et().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),oo={[Wi]:{transfer:Ho,primaries:ko,toReference:s=>s,fromReference:s=>s},[Ct]:{transfer:Bt,primaries:ko,toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[xa]:{transfer:Ho,primaries:Vo,toReference:s=>s.applyMatrix3(Th),fromReference:s=>s.applyMatrix3(wh)},[Ec]:{transfer:Bt,primaries:Vo,toReference:s=>s.convertSRGBToLinear().applyMatrix3(Th),fromReference:s=>s.applyMatrix3(wh).convertLinearToSRGB()}},id=new Set([Wi,xa]),Pt={enabled:!0,_workingColorSpace:Wi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!id.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,e,t){if(this.enabled===!1||e===t||!e||!t)return s;let n=oo[e].toReference,i=oo[t].fromReference;return i(n(s))},fromWorkingColorSpace:function(s,e){return this.convert(s,this._workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this._workingColorSpace)},getPrimaries:function(s){return oo[s].primaries},getTransfer:function(s){return s===ai?Ho:oo[s].transfer}};function rr(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function el(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var Ns,Xo=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ns===void 0&&(Ns=Wo("canvas")),Ns.width=e.width,Ns.height=e.height;let n=Ns.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Ns}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Wo("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=rr(r[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(rr(t[n]/255)*255):t[n]=rr(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},sd=0,qo=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:sd++}),this.uuid=Gi(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(tl(i[o].image)):r.push(tl(i[o]))}else r=tl(i);n.url=r}return t||(e.images[this.uuid]=n),n}};function tl(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Xo.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var rd=0,li=class s extends os{constructor(e=s.DEFAULT_IMAGE,t=s.DEFAULT_MAPPING,n=Si,i=Si,r=Jn,o=Nr,a=Ei,l=ss,c=s.DEFAULT_ANISOTROPY,h=ai){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:rd++}),this.uuid=Gi(),this.name="",this.source=new qo(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ee(0,0),this.repeat=new Ee(1,1),this.center=new Ee(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Et,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(Pr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===bs?Ct:ai),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Su)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Il:e.x=e.x-Math.floor(e.x);break;case Si:e.x=e.x<0?0:1;break;case Ll:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Il:e.y=e.y-Math.floor(e.y);break;case Si:e.y=e.y<0?0:1;break;case Ll:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Pr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Ct?bs:Pu}set encoding(e){Pr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===bs?Ct:ai}};li.DEFAULT_IMAGE=null;li.DEFAULT_MAPPING=Su;li.DEFAULT_ANISOTROPY=1;var Jt=class s{constructor(e=0,t=0,n=0,i=1){s.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r,l=e.elements,c=l[0],h=l[4],u=l[8],f=l[1],p=l[5],x=l[9],y=l[2],m=l[6],d=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-y)<.01&&Math.abs(x-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+y)<.1&&Math.abs(x+m)<.1&&Math.abs(c+p+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let _=(c+1)/2,T=(p+1)/2,B=(d+1)/2,N=(h+f)/4,R=(u+y)/4,$=(x+m)/4;return _>T&&_>B?_<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(_),i=N/n,r=R/n):T>B?T<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(T),n=N/i,r=$/i):B<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(B),n=R/r,i=$/r),this.set(n,i,r,t),this}let C=Math.sqrt((m-x)*(m-x)+(u-y)*(u-y)+(f-h)*(f-h));return Math.abs(C)<.001&&(C=1),this.x=(m-x)/C,this.y=(u-y)/C,this.z=(f-h)/C,this.w=Math.acos((c+p+d-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Ol=class extends os{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Jt(0,0,e,t),this.scissorTest=!1,this.viewport=new Jt(0,0,e,t);let i={width:e,height:t,depth:1};n.encoding!==void 0&&(Pr("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===bs?Ct:ai),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Jn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new li(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new qo(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Gn=class extends Ol{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Yo=class extends li{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Vn,this.minFilter=Vn,this.wrapR=Si,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Fl=class extends li{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Vn,this.minFilter=Vn,this.wrapR=Si,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var fn=class{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,o,a){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3],f=r[o+0],p=r[o+1],x=r[o+2],y=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=f,e[t+1]=p,e[t+2]=x,e[t+3]=y;return}if(u!==y||l!==f||c!==p||h!==x){let m=1-a,d=l*f+c*p+h*x+u*y,C=d>=0?1:-1,_=1-d*d;if(_>Number.EPSILON){let B=Math.sqrt(_),N=Math.atan2(B,d*C);m=Math.sin(m*N)/B,a=Math.sin(a*N)/B}let T=a*C;if(l=l*m+f*T,c=c*m+p*T,h=h*m+x*T,u=u*m+y*T,m===1-a){let B=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=B,c*=B,h*=B,u*=B}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,r,o){let a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=r[o],f=r[o+1],p=r[o+2],x=r[o+3];return e[t]=a*x+h*u+l*p-c*f,e[t+1]=l*x+h*f+c*u-a*p,e[t+2]=c*x+h*p+a*f-l*u,e[t+3]=h*x-a*u-l*f-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,i=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),u=a(r/2),f=l(n/2),p=l(i/2),x=l(r/2);switch(o){case"XYZ":this._x=f*h*u+c*p*x,this._y=c*p*u-f*h*x,this._z=c*h*x+f*p*u,this._w=c*h*u-f*p*x;break;case"YXZ":this._x=f*h*u+c*p*x,this._y=c*p*u-f*h*x,this._z=c*h*x-f*p*u,this._w=c*h*u+f*p*x;break;case"ZXY":this._x=f*h*u-c*p*x,this._y=c*p*u+f*h*x,this._z=c*h*x+f*p*u,this._w=c*h*u-f*p*x;break;case"ZYX":this._x=f*h*u-c*p*x,this._y=c*p*u+f*h*x,this._z=c*h*x-f*p*u,this._w=c*h*u+f*p*x;break;case"YZX":this._x=f*h*u+c*p*x,this._y=c*p*u+f*h*x,this._z=c*h*x-f*p*u,this._w=c*h*u-f*p*x;break;case"XZY":this._x=f*h*u-c*p*x,this._y=c*p*u-f*h*x,this._z=c*h*x+f*p*u,this._w=c*h*u+f*p*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],i=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],u=t[10],f=n+a+u;if(f>0){let p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(h-l)*p,this._y=(r-c)*p,this._z=(o-i)*p}else if(n>a&&n>u){let p=2*Math.sqrt(1+n-a-u);this._w=(h-l)/p,this._x=.25*p,this._y=(i+o)/p,this._z=(r+c)/p}else if(a>u){let p=2*Math.sqrt(1+a-n-u);this._w=(r-c)/p,this._x=(i+o)/p,this._y=.25*p,this._z=(l+h)/p}else{let p=2*Math.sqrt(1+u-n-a);this._w=(o-i)/p,this._x=(r+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Rn(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,i=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+o*a+i*c-r*l,this._y=i*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-i*a,this._w=o*h-n*a-i*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,i=this._y,r=this._z,o=this._w,a=o*e._w+n*e._x+i*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let p=1-t;return this._w=p*o+t*this._w,this._x=p*n+t*this._x,this._y=p*i+t*this._y,this._z=p*r+t*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-t)*h)/c,f=Math.sin(t*h)/c;return this._w=o*u+this._w*f,this._x=n*u+this._x*f,this._y=i*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(r),n*Math.cos(r),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},L=class s{constructor(e=0,t=0,n=0){s.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ah.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ah.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,i=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*i-a*n),h=2*(a*t-r*i),u=2*(r*n-o*t);return this.x=t+l*c+o*u-a*h,this.y=n+l*h+a*c-r*u,this.z=i+l*u+r*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,i=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=i*l-r*a,this.y=r*o-n*l,this.z=n*a-i*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return nl.copy(this).projectOnVector(e),this.sub(nl)}reflect(e){return this.sub(nl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Rn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},nl=new L,Ah=new fn,Xi=class{constructor(e=new L(1/0,1/0,1/0),t=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(vi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(vi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=vi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,vi):vi.fromBufferAttribute(r,o),vi.applyMatrix4(e.matrixWorld),this.expandByPoint(vi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ao.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ao.copy(n.boundingBox)),ao.applyMatrix4(e.matrixWorld),this.union(ao)}let i=e.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,vi),vi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(yr),lo.subVectors(this.max,yr),zs.subVectors(e.a,yr),Os.subVectors(e.b,yr),Fs.subVectors(e.c,yr),Ki.subVectors(Os,zs),Qi.subVectors(Fs,Os),ps.subVectors(zs,Fs);let t=[0,-Ki.z,Ki.y,0,-Qi.z,Qi.y,0,-ps.z,ps.y,Ki.z,0,-Ki.x,Qi.z,0,-Qi.x,ps.z,0,-ps.x,-Ki.y,Ki.x,0,-Qi.y,Qi.x,0,-ps.y,ps.x,0];return!il(t,zs,Os,Fs,lo)||(t=[1,0,0,0,1,0,0,0,1],!il(t,zs,Os,Fs,lo))?!1:(co.crossVectors(Ki,Qi),t=[co.x,co.y,co.z],il(t,zs,Os,Fs,lo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,vi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(vi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Di[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Di[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Di[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Di[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Di[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Di[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Di[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Di[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Di),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},Di=[new L,new L,new L,new L,new L,new L,new L,new L],vi=new L,ao=new Xi,zs=new L,Os=new L,Fs=new L,Ki=new L,Qi=new L,ps=new L,yr=new L,lo=new L,co=new L,ms=new L;function il(s,e,t,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){ms.fromArray(s,r);let a=i.x*Math.abs(ms.x)+i.y*Math.abs(ms.y)+i.z*Math.abs(ms.z),l=e.dot(ms),c=t.dot(ms),h=n.dot(ms);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var od=new Xi,Mr=new L,sl=new L,ws=class{constructor(e=new L,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):od.setFromPoints(e).getCenter(n);let i=0;for(let r=0,o=e.length;r<o;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Mr.subVectors(e,this.center);let t=Mr.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Mr,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(sl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Mr.copy(e.center).add(sl)),this.expandByPoint(Mr.copy(e.center).sub(sl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},Ni=new L,rl=new L,ho=new L,ji=new L,ol=new L,uo=new L,al=new L,Zo=class{constructor(e=new L,t=new L(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ni)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Ni.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ni.copy(this.origin).addScaledVector(this.direction,t),Ni.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){rl.copy(e).add(t).multiplyScalar(.5),ho.copy(t).sub(e).normalize(),ji.copy(this.origin).sub(rl);let r=e.distanceTo(t)*.5,o=-this.direction.dot(ho),a=ji.dot(this.direction),l=-ji.dot(ho),c=ji.lengthSq(),h=Math.abs(1-o*o),u,f,p,x;if(h>0)if(u=o*l-a,f=o*a-l,x=r*h,u>=0)if(f>=-x)if(f<=x){let y=1/h;u*=y,f*=y,p=u*(u+o*f+2*a)+f*(o*u+f+2*l)+c}else f=r,u=Math.max(0,-(o*f+a)),p=-u*u+f*(f+2*l)+c;else f=-r,u=Math.max(0,-(o*f+a)),p=-u*u+f*(f+2*l)+c;else f<=-x?(u=Math.max(0,-(-o*r+a)),f=u>0?-r:Math.min(Math.max(-r,-l),r),p=-u*u+f*(f+2*l)+c):f<=x?(u=0,f=Math.min(Math.max(-r,-l),r),p=f*(f+2*l)+c):(u=Math.max(0,-(o*r+a)),f=u>0?r:Math.min(Math.max(-r,-l),r),p=-u*u+f*(f+2*l)+c);else f=o>0?-r:r,u=Math.max(0,-(o*f+a)),p=-u*u+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(rl).addScaledVector(ho,f),p}intersectSphere(e,t){Ni.subVectors(e.center,this.origin);let n=Ni.dot(this.direction),i=Ni.dot(Ni)-n*n,r=e.radius*e.radius;if(i>r)return null;let o=Math.sqrt(r-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,i=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,i=(e.min.x-f.x)*c),h>=0?(r=(e.min.y-f.y)*h,o=(e.max.y-f.y)*h):(r=(e.max.y-f.y)*h,o=(e.min.y-f.y)*h),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),u>=0?(a=(e.min.z-f.z)*u,l=(e.max.z-f.z)*u):(a=(e.max.z-f.z)*u,l=(e.min.z-f.z)*u),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Ni)!==null}intersectTriangle(e,t,n,i,r){ol.subVectors(t,e),uo.subVectors(n,e),al.crossVectors(ol,uo);let o=this.direction.dot(al),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ji.subVectors(this.origin,e);let l=a*this.direction.dot(uo.crossVectors(ji,uo));if(l<0)return null;let c=a*this.direction.dot(ol.cross(ji));if(c<0||l+c>o)return null;let h=-a*ji.dot(al);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},vt=class s{constructor(e,t,n,i,r,o,a,l,c,h,u,f,p,x,y,m){s.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,l,c,h,u,f,p,x,y,m)}set(e,t,n,i,r,o,a,l,c,h,u,f,p,x,y,m){let d=this.elements;return d[0]=e,d[4]=t,d[8]=n,d[12]=i,d[1]=r,d[5]=o,d[9]=a,d[13]=l,d[2]=c,d[6]=h,d[10]=u,d[14]=f,d[3]=p,d[7]=x,d[11]=y,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new s().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,i=1/Bs.setFromMatrixColumn(e,0).length(),r=1/Bs.setFromMatrixColumn(e,1).length(),o=1/Bs.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,i=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let f=o*h,p=o*u,x=a*h,y=a*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=p+x*c,t[5]=f-y*c,t[9]=-a*l,t[2]=y-f*c,t[6]=x+p*c,t[10]=o*l}else if(e.order==="YXZ"){let f=l*h,p=l*u,x=c*h,y=c*u;t[0]=f+y*a,t[4]=x*a-p,t[8]=o*c,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=p*a-x,t[6]=y+f*a,t[10]=o*l}else if(e.order==="ZXY"){let f=l*h,p=l*u,x=c*h,y=c*u;t[0]=f-y*a,t[4]=-o*u,t[8]=x+p*a,t[1]=p+x*a,t[5]=o*h,t[9]=y-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let f=o*h,p=o*u,x=a*h,y=a*u;t[0]=l*h,t[4]=x*c-p,t[8]=f*c+y,t[1]=l*u,t[5]=y*c+f,t[9]=p*c-x,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let f=o*l,p=o*c,x=a*l,y=a*c;t[0]=l*h,t[4]=y-f*u,t[8]=x*u+p,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=p*u+x,t[10]=f-y*u}else if(e.order==="XZY"){let f=o*l,p=o*c,x=a*l,y=a*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=f*u+y,t[5]=o*h,t[9]=p*u-x,t[2]=x*u-p,t[6]=a*h,t[10]=y*u+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(ad,e,ld)}lookAt(e,t,n){let i=this.elements;return ti.subVectors(e,t),ti.lengthSq()===0&&(ti.z=1),ti.normalize(),es.crossVectors(n,ti),es.lengthSq()===0&&(Math.abs(n.z)===1?ti.x+=1e-4:ti.z+=1e-4,ti.normalize(),es.crossVectors(n,ti)),es.normalize(),fo.crossVectors(ti,es),i[0]=es.x,i[4]=fo.x,i[8]=ti.x,i[1]=es.y,i[5]=fo.y,i[9]=ti.y,i[2]=es.z,i[6]=fo.z,i[10]=ti.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],f=n[9],p=n[13],x=n[2],y=n[6],m=n[10],d=n[14],C=n[3],_=n[7],T=n[11],B=n[15],N=i[0],R=i[4],$=i[8],E=i[12],I=i[1],J=i[5],ce=i[9],be=i[13],k=i[2],Y=i[6],ie=i[10],P=i[14],oe=i[3],le=i[7],fe=i[11],me=i[15];return r[0]=o*N+a*I+l*k+c*oe,r[4]=o*R+a*J+l*Y+c*le,r[8]=o*$+a*ce+l*ie+c*fe,r[12]=o*E+a*be+l*P+c*me,r[1]=h*N+u*I+f*k+p*oe,r[5]=h*R+u*J+f*Y+p*le,r[9]=h*$+u*ce+f*ie+p*fe,r[13]=h*E+u*be+f*P+p*me,r[2]=x*N+y*I+m*k+d*oe,r[6]=x*R+y*J+m*Y+d*le,r[10]=x*$+y*ce+m*ie+d*fe,r[14]=x*E+y*be+m*P+d*me,r[3]=C*N+_*I+T*k+B*oe,r[7]=C*R+_*J+T*Y+B*le,r[11]=C*$+_*ce+T*ie+B*fe,r[15]=C*E+_*be+T*P+B*me,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],u=e[6],f=e[10],p=e[14],x=e[3],y=e[7],m=e[11],d=e[15];return x*(+r*l*u-i*c*u-r*a*f+n*c*f+i*a*p-n*l*p)+y*(+t*l*p-t*c*f+r*o*f-i*o*p+i*c*h-r*l*h)+m*(+t*c*u-t*a*p-r*o*u+n*o*p+r*a*h-n*c*h)+d*(-i*a*h-t*l*u+t*a*f+i*o*u-n*o*f+n*l*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=e[9],f=e[10],p=e[11],x=e[12],y=e[13],m=e[14],d=e[15],C=u*m*c-y*f*c+y*l*p-a*m*p-u*l*d+a*f*d,_=x*f*c-h*m*c-x*l*p+o*m*p+h*l*d-o*f*d,T=h*y*c-x*u*c+x*a*p-o*y*p-h*a*d+o*u*d,B=x*u*l-h*y*l-x*a*f+o*y*f+h*a*m-o*u*m,N=t*C+n*_+i*T+r*B;if(N===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let R=1/N;return e[0]=C*R,e[1]=(y*f*r-u*m*r-y*i*p+n*m*p+u*i*d-n*f*d)*R,e[2]=(a*m*r-y*l*r+y*i*c-n*m*c-a*i*d+n*l*d)*R,e[3]=(u*l*r-a*f*r-u*i*c+n*f*c+a*i*p-n*l*p)*R,e[4]=_*R,e[5]=(h*m*r-x*f*r+x*i*p-t*m*p-h*i*d+t*f*d)*R,e[6]=(x*l*r-o*m*r-x*i*c+t*m*c+o*i*d-t*l*d)*R,e[7]=(o*f*r-h*l*r+h*i*c-t*f*c-o*i*p+t*l*p)*R,e[8]=T*R,e[9]=(x*u*r-h*y*r-x*n*p+t*y*p+h*n*d-t*u*d)*R,e[10]=(o*y*r-x*a*r+x*n*c-t*y*c-o*n*d+t*a*d)*R,e[11]=(h*a*r-o*u*r-h*n*c+t*u*c+o*n*p-t*a*p)*R,e[12]=B*R,e[13]=(h*y*i-x*u*i+x*n*f-t*y*f-h*n*m+t*u*m)*R,e[14]=(x*a*i-o*y*i-x*n*l+t*y*l+o*n*m-t*a*m)*R,e[15]=(o*u*i-h*a*i+h*n*l-t*u*l-o*n*f+t*a*f)*R,this}scale(e){let t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),i=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*o,0,c*l-i*a,h*l+i*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,o){return this.set(1,n,r,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){let i=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,h=o+o,u=a+a,f=r*c,p=r*h,x=r*u,y=o*h,m=o*u,d=a*u,C=l*c,_=l*h,T=l*u,B=n.x,N=n.y,R=n.z;return i[0]=(1-(y+d))*B,i[1]=(p+T)*B,i[2]=(x-_)*B,i[3]=0,i[4]=(p-T)*N,i[5]=(1-(f+d))*N,i[6]=(m+C)*N,i[7]=0,i[8]=(x+_)*R,i[9]=(m-C)*R,i[10]=(1-(f+y))*R,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){let i=this.elements,r=Bs.set(i[0],i[1],i[2]).length(),o=Bs.set(i[4],i[5],i[6]).length(),a=Bs.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],yi.copy(this);let c=1/r,h=1/o,u=1/a;return yi.elements[0]*=c,yi.elements[1]*=c,yi.elements[2]*=c,yi.elements[4]*=h,yi.elements[5]*=h,yi.elements[6]*=h,yi.elements[8]*=u,yi.elements[9]*=u,yi.elements[10]*=u,t.setFromRotationMatrix(yi),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,i,r,o,a=Vi){let l=this.elements,c=2*r/(t-e),h=2*r/(n-i),u=(t+e)/(t-e),f=(n+i)/(n-i),p,x;if(a===Vi)p=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(a===Go)p=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,r,o,a=Vi){let l=this.elements,c=1/(t-e),h=1/(n-i),u=1/(o-r),f=(t+e)*c,p=(n+i)*h,x,y;if(a===Vi)x=(o+r)*u,y=-2*u;else if(a===Go)x=r*u,y=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=y,l[14]=-x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Bs=new L,yi=new vt,ad=new L(0,0,0),ld=new L(1,1,1),es=new L,fo=new L,ti=new L,Rh=new vt,Ch=new fn,ci=class s{constructor(e=0,t=0,n=0,i=s.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let i=e.elements,r=i[0],o=i[4],a=i[8],l=i[1],c=i[5],h=i[9],u=i[2],f=i[6],p=i[10];switch(t){case"XYZ":this._y=Math.asin(Rn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Rn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Rn(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Rn(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Rn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Rn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Rh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Rh,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ch.setFromEuler(this),this.setFromQuaternion(Ch,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ci.DEFAULT_ORDER="XYZ";var zr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},cd=0,Ph=new L,Hs=new fn,zi=new vt,po=new L,Sr=new L,hd=new L,ud=new fn,Ih=new L(1,0,0),Lh=new L(0,1,0),Uh=new L(0,0,1),fd={type:"added"},dd={type:"removed"},Fn=class s extends os{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:cd++}),this.uuid=Gi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let e=new L,t=new ci,n=new fn,i=new L(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new vt},normalMatrix:{value:new Et}}),this.matrix=new vt,this.matrixWorld=new vt,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new zr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Hs.setFromAxisAngle(e,t),this.quaternion.multiply(Hs),this}rotateOnWorldAxis(e,t){return Hs.setFromAxisAngle(e,t),this.quaternion.premultiply(Hs),this}rotateX(e){return this.rotateOnAxis(Ih,e)}rotateY(e){return this.rotateOnAxis(Lh,e)}rotateZ(e){return this.rotateOnAxis(Uh,e)}translateOnAxis(e,t){return Ph.copy(e).applyQuaternion(this.quaternion),this.position.add(Ph.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ih,e)}translateY(e){return this.translateOnAxis(Lh,e)}translateZ(e){return this.translateOnAxis(Uh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(zi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?po.copy(e):po.set(e,t,n);let i=this.parent;this.updateWorldMatrix(!0,!1),Sr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?zi.lookAt(Sr,po,this.up):zi.lookAt(po,Sr,this.up),this.quaternion.setFromRotationMatrix(zi),i&&(zi.extractRotation(i.matrixWorld),Hs.setFromRotationMatrix(zi),this.quaternion.premultiply(Hs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(fd)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(dd)),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),zi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),zi.multiply(e.parent.matrixWorld)),e.applyMatrix4(zi),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Sr,e,hd),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Sr,ud,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,i=t.length;n<i;n++){let r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){let i=this.children;for(let r=0,o=i.length;r<o;r++){let a=i[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxGeometryCount=this._maxGeometryCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));i.material=a}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];i.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),u=o(e.shapes),f=o(e.skeletons),p=o(e.animations),x=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),p.length>0&&(n.animations=p),x.length>0&&(n.nodes=x)}return n.object=i,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let i=e.children[n];this.add(i.clone())}return this}};Fn.DEFAULT_UP=new L(0,1,0);Fn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Fn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Mi=new L,Oi=new L,ll=new L,Fi=new L,ks=new L,Vs=new L,Dh=new L,cl=new L,hl=new L,ul=new L,mo=!1,Ms=class s{constructor(e=new L,t=new L,n=new L){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Mi.subVectors(e,t),i.cross(Mi);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){Mi.subVectors(i,t),Oi.subVectors(n,t),ll.subVectors(e,t);let o=Mi.dot(Mi),a=Mi.dot(Oi),l=Mi.dot(ll),c=Oi.dot(Oi),h=Oi.dot(ll),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;let f=1/u,p=(c*l-a*h)*f,x=(o*h-a*l)*f;return r.set(1-p-x,x,p)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Fi)===null?!1:Fi.x>=0&&Fi.y>=0&&Fi.x+Fi.y<=1}static getUV(e,t,n,i,r,o,a,l){return mo===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),mo=!0),this.getInterpolation(e,t,n,i,r,o,a,l)}static getInterpolation(e,t,n,i,r,o,a,l){return this.getBarycoord(e,t,n,i,Fi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Fi.x),l.addScaledVector(o,Fi.y),l.addScaledVector(a,Fi.z),l)}static isFrontFacing(e,t,n,i){return Mi.subVectors(n,t),Oi.subVectors(e,t),Mi.cross(Oi).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Mi.subVectors(this.c,this.b),Oi.subVectors(this.a,this.b),Mi.cross(Oi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return s.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return s.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,r){return mo===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),mo=!0),s.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}getInterpolation(e,t,n,i,r){return s.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return s.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return s.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,i=this.b,r=this.c,o,a;ks.subVectors(i,n),Vs.subVectors(r,n),cl.subVectors(e,n);let l=ks.dot(cl),c=Vs.dot(cl);if(l<=0&&c<=0)return t.copy(n);hl.subVectors(e,i);let h=ks.dot(hl),u=Vs.dot(hl);if(h>=0&&u<=h)return t.copy(i);let f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(n).addScaledVector(ks,o);ul.subVectors(e,r);let p=ks.dot(ul),x=Vs.dot(ul);if(x>=0&&p<=x)return t.copy(r);let y=p*c-l*x;if(y<=0&&c>=0&&x<=0)return a=c/(c-x),t.copy(n).addScaledVector(Vs,a);let m=h*x-p*u;if(m<=0&&u-h>=0&&p-x>=0)return Dh.subVectors(r,i),a=(u-h)/(u-h+(p-x)),t.copy(i).addScaledVector(Dh,a);let d=1/(m+y+f);return o=y*d,a=f*d,t.copy(n).addScaledVector(ks,o).addScaledVector(Vs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Du={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ts={h:0,s:0,l:0},go={h:0,s:0,l:0};function fl(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}var Je=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ct){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Pt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=Pt.workingColorSpace){return this.r=e,this.g=t,this.b=n,Pt.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=Pt.workingColorSpace){if(e=td(e,1),t=Rn(t,0,1),n=Rn(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=fl(o,r,e+1/3),this.g=fl(o,r,e),this.b=fl(o,r,e-1/3)}return Pt.toWorkingColorSpace(this,i),this}setStyle(e,t=Ct){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ct){let n=Du[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=rr(e.r),this.g=rr(e.g),this.b=rr(e.b),this}copyLinearToSRGB(e){return this.r=el(e.r),this.g=el(e.g),this.b=el(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ct){return Pt.fromWorkingColorSpace(Dn.copy(this),e),Math.round(Rn(Dn.r*255,0,255))*65536+Math.round(Rn(Dn.g*255,0,255))*256+Math.round(Rn(Dn.b*255,0,255))}getHexString(e=Ct){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Pt.workingColorSpace){Pt.fromWorkingColorSpace(Dn.copy(this),t);let n=Dn.r,i=Dn.g,r=Dn.b,o=Math.max(n,i,r),a=Math.min(n,i,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(i-r)/u+(i<r?6:0);break;case i:l=(r-n)/u+2;break;case r:l=(n-i)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Pt.workingColorSpace){return Pt.fromWorkingColorSpace(Dn.copy(this),t),e.r=Dn.r,e.g=Dn.g,e.b=Dn.b,e}getStyle(e=Ct){Pt.fromWorkingColorSpace(Dn.copy(this),e);let t=Dn.r,n=Dn.g,i=Dn.b;return e!==Ct?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(ts),this.setHSL(ts.h+e,ts.s+t,ts.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ts),e.getHSL(go);let n=Qa(ts.h,go.h,t),i=Qa(ts.s,go.s,t),r=Qa(ts.l,go.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Dn=new Je;Je.NAMES=Du;var pd=0,as=class extends os{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:pd++}),this.uuid=Gi(),this.name="",this.type="Material",this.blending=sr,this.side=rs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Al,this.blendDst=Rl,this.blendEquation=vs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Je(0,0,0),this.blendAlpha=0,this.depthFunc=Oo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Mh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ds,this.stencilZFail=Ds,this.stencilZPass=Ds,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==sr&&(n.blending=this.blending),this.side!==rs&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Al&&(n.blendSrc=this.blendSrc),this.blendDst!==Rl&&(n.blendDst=this.blendDst),this.blendEquation!==vs&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Oo&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Mh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ds&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ds&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ds&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=i(e.textures),o=i(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},mt=class extends as{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Je(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Mu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var un=new L,xo=new Ee,En=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Ul,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=is,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)xo.fromBufferAttribute(this,t),xo.applyMatrix3(e),this.setXY(t,xo.x,xo.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)un.fromBufferAttribute(this,t),un.applyMatrix3(e),this.setXYZ(t,un.x,un.y,un.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)un.fromBufferAttribute(this,t),un.applyMatrix4(e),this.setXYZ(t,un.x,un.y,un.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)un.fromBufferAttribute(this,t),un.applyNormalMatrix(e),this.setXYZ(t,un.x,un.y,un.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)un.fromBufferAttribute(this,t),un.transformDirection(e),this.setXYZ(t,un.x,un.y,un.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=ki(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Ht(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ki(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ht(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ki(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ht(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ki(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ht(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ki(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ht(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Ht(t,this.array),n=Ht(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Ht(t,this.array),n=Ht(n,this.array),i=Ht(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=Ht(t,this.array),n=Ht(n,this.array),i=Ht(i,this.array),r=Ht(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ul&&(e.usage=this.usage),e}};var Jo=class extends En{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var $o=class extends En{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var It=class extends En{constructor(e,t,n){super(new Float32Array(e),t,n)}};var md=0,oi=new vt,dl=new Fn,Gs=new L,ni=new Xi,Er=new Xi,Sn=new L,bn=class s extends os{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:md++}),this.uuid=Gi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Uu(e)?$o:Jo)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Et().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return oi.makeRotationFromQuaternion(e),this.applyMatrix4(oi),this}rotateX(e){return oi.makeRotationX(e),this.applyMatrix4(oi),this}rotateY(e){return oi.makeRotationY(e),this.applyMatrix4(oi),this}rotateZ(e){return oi.makeRotationZ(e),this.applyMatrix4(oi),this}translate(e,t,n){return oi.makeTranslation(e,t,n),this.applyMatrix4(oi),this}scale(e,t,n){return oi.makeScale(e,t,n),this.applyMatrix4(oi),this}lookAt(e){return dl.lookAt(e),dl.updateMatrix(),this.applyMatrix4(dl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Gs).negate(),this.translate(Gs.x,Gs.y,Gs.z),this}setFromPoints(e){let t=[];for(let n=0,i=e.length;n<i;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new It(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Xi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){let r=t[n];ni.setFromBufferAttribute(r),this.morphTargetsRelative?(Sn.addVectors(this.boundingBox.min,ni.min),this.boundingBox.expandByPoint(Sn),Sn.addVectors(this.boundingBox.max,ni.max),this.boundingBox.expandByPoint(Sn)):(this.boundingBox.expandByPoint(ni.min),this.boundingBox.expandByPoint(ni.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ws);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new L,1/0);return}if(e){let n=this.boundingSphere.center;if(ni.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];Er.setFromBufferAttribute(a),this.morphTargetsRelative?(Sn.addVectors(ni.min,Er.min),ni.expandByPoint(Sn),Sn.addVectors(ni.max,Er.max),ni.expandByPoint(Sn)):(ni.expandByPoint(Er.min),ni.expandByPoint(Er.max))}ni.getCenter(n);let i=0;for(let r=0,o=e.count;r<o;r++)Sn.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(Sn));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Sn.fromBufferAttribute(a,c),l&&(Gs.fromBufferAttribute(e,c),Sn.add(Gs)),i=Math.max(i,n.distanceToSquared(Sn))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.array,i=t.position.array,r=t.normal.array,o=t.uv.array,a=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new En(new Float32Array(4*a),4));let l=this.getAttribute("tangent").array,c=[],h=[];for(let I=0;I<a;I++)c[I]=new L,h[I]=new L;let u=new L,f=new L,p=new L,x=new Ee,y=new Ee,m=new Ee,d=new L,C=new L;function _(I,J,ce){u.fromArray(i,I*3),f.fromArray(i,J*3),p.fromArray(i,ce*3),x.fromArray(o,I*2),y.fromArray(o,J*2),m.fromArray(o,ce*2),f.sub(u),p.sub(u),y.sub(x),m.sub(x);let be=1/(y.x*m.y-m.x*y.y);isFinite(be)&&(d.copy(f).multiplyScalar(m.y).addScaledVector(p,-y.y).multiplyScalar(be),C.copy(p).multiplyScalar(y.x).addScaledVector(f,-m.x).multiplyScalar(be),c[I].add(d),c[J].add(d),c[ce].add(d),h[I].add(C),h[J].add(C),h[ce].add(C))}let T=this.groups;T.length===0&&(T=[{start:0,count:n.length}]);for(let I=0,J=T.length;I<J;++I){let ce=T[I],be=ce.start,k=ce.count;for(let Y=be,ie=be+k;Y<ie;Y+=3)_(n[Y+0],n[Y+1],n[Y+2])}let B=new L,N=new L,R=new L,$=new L;function E(I){R.fromArray(r,I*3),$.copy(R);let J=c[I];B.copy(J),B.sub(R.multiplyScalar(R.dot(J))).normalize(),N.crossVectors($,J);let be=N.dot(h[I])<0?-1:1;l[I*4]=B.x,l[I*4+1]=B.y,l[I*4+2]=B.z,l[I*4+3]=be}for(let I=0,J=T.length;I<J;++I){let ce=T[I],be=ce.start,k=ce.count;for(let Y=be,ie=be+k;Y<ie;Y+=3)E(n[Y+0]),E(n[Y+1]),E(n[Y+2])}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new En(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,p=n.count;f<p;f++)n.setXYZ(f,0,0,0);let i=new L,r=new L,o=new L,a=new L,l=new L,c=new L,h=new L,u=new L;if(e)for(let f=0,p=e.count;f<p;f+=3){let x=e.getX(f+0),y=e.getX(f+1),m=e.getX(f+2);i.fromBufferAttribute(t,x),r.fromBufferAttribute(t,y),o.fromBufferAttribute(t,m),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),a.fromBufferAttribute(n,x),l.fromBufferAttribute(n,y),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(x,a.x,a.y,a.z),n.setXYZ(y,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,p=t.count;f<p;f+=3)i.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Sn.fromBufferAttribute(e,t),Sn.normalize(),e.setXYZ(t,Sn.x,Sn.y,Sn.z)}toNonIndexed(){function e(a,l){let c=a.array,h=a.itemSize,u=a.normalized,f=new c.constructor(l.length*h),p=0,x=0;for(let y=0,m=l.length;y<m;y++){a.isInterleavedBufferAttribute?p=l[y]*a.data.stride+a.offset:p=l[y]*h;for(let d=0;d<h;d++)f[x++]=c[p++]}return new En(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new s,n=this.index.array,i=this.attributes;for(let a in i){let l=i[a],c=e(l,n);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){let f=c[h],p=e(f,n);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let i={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){let p=c[u];h.push(p.toJSON(e.data))}h.length>0&&(i[l]=h,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let i=e.attributes;for(let c in i){let h=i[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],u=r[c];for(let f=0,p=u.length;f<p;f++)h.push(u[f].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,h=o.length;c<h;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Nh=new vt,gs=new Zo,_o=new ws,zh=new L,Ws=new L,Xs=new L,qs=new L,pl=new L,vo=new L,yo=new Ee,Mo=new Ee,So=new Ee,Oh=new L,Fh=new L,Bh=new L,Eo=new L,bo=new L,Ue=class extends Fn{constructor(e=new bn,t=new mt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);let a=this.morphTargetInfluences;if(r&&a){vo.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],u=r[l];h!==0&&(pl.fromBufferAttribute(u,e),o?vo.addScaledVector(pl,h):vo.addScaledVector(pl.sub(t),h))}t.add(vo)}return t}raycast(e,t){let n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),_o.copy(n.boundingSphere),_o.applyMatrix4(r),gs.copy(e.ray).recast(e.near),!(_o.containsPoint(gs.origin)===!1&&(gs.intersectSphere(_o,zh)===null||gs.origin.distanceToSquared(zh)>(e.far-e.near)**2))&&(Nh.copy(r).invert(),gs.copy(e.ray).applyMatrix4(Nh),!(n.boundingBox!==null&&gs.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,gs)))}_computeIntersections(e,t,n){let i,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let x=0,y=f.length;x<y;x++){let m=f[x],d=o[m.materialIndex],C=Math.max(m.start,p.start),_=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let T=C,B=_;T<B;T+=3){let N=a.getX(T),R=a.getX(T+1),$=a.getX(T+2);i=wo(this,d,e,n,c,h,u,N,R,$),i&&(i.faceIndex=Math.floor(T/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{let x=Math.max(0,p.start),y=Math.min(a.count,p.start+p.count);for(let m=x,d=y;m<d;m+=3){let C=a.getX(m),_=a.getX(m+1),T=a.getX(m+2);i=wo(this,o,e,n,c,h,u,C,_,T),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let x=0,y=f.length;x<y;x++){let m=f[x],d=o[m.materialIndex],C=Math.max(m.start,p.start),_=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let T=C,B=_;T<B;T+=3){let N=T,R=T+1,$=T+2;i=wo(this,d,e,n,c,h,u,N,R,$),i&&(i.faceIndex=Math.floor(T/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{let x=Math.max(0,p.start),y=Math.min(l.count,p.start+p.count);for(let m=x,d=y;m<d;m+=3){let C=m,_=m+1,T=m+2;i=wo(this,o,e,n,c,h,u,C,_,T),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}};function gd(s,e,t,n,i,r,o,a){let l;if(e.side===mn?l=n.intersectTriangle(o,r,i,!0,a):l=n.intersectTriangle(i,r,o,e.side===rs,a),l===null)return null;bo.copy(a),bo.applyMatrix4(s.matrixWorld);let c=t.ray.origin.distanceTo(bo);return c<t.near||c>t.far?null:{distance:c,point:bo.clone(),object:s}}function wo(s,e,t,n,i,r,o,a,l,c){s.getVertexPosition(a,Ws),s.getVertexPosition(l,Xs),s.getVertexPosition(c,qs);let h=gd(s,e,t,n,Ws,Xs,qs,Eo);if(h){i&&(yo.fromBufferAttribute(i,a),Mo.fromBufferAttribute(i,l),So.fromBufferAttribute(i,c),h.uv=Ms.getInterpolation(Eo,Ws,Xs,qs,yo,Mo,So,new Ee)),r&&(yo.fromBufferAttribute(r,a),Mo.fromBufferAttribute(r,l),So.fromBufferAttribute(r,c),h.uv1=Ms.getInterpolation(Eo,Ws,Xs,qs,yo,Mo,So,new Ee),h.uv2=h.uv1),o&&(Oh.fromBufferAttribute(o,a),Fh.fromBufferAttribute(o,l),Bh.fromBufferAttribute(o,c),h.normal=Ms.getInterpolation(Eo,Ws,Xs,qs,Oh,Fh,Bh,new L),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a,b:l,c,normal:new L,materialIndex:0};Ms.getNormal(Ws,Xs,qs,u.normal),h.face=u}return h}var Bn=class s extends bn{constructor(e=1,t=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};let a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],u=[],f=0,p=0;x("z","y","x",-1,-1,n,t,e,o,r,0),x("z","y","x",1,-1,n,t,-e,o,r,1),x("x","z","y",1,1,e,n,t,i,o,2),x("x","z","y",1,-1,e,n,-t,i,o,3),x("x","y","z",1,-1,e,t,n,i,r,4),x("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new It(c,3)),this.setAttribute("normal",new It(h,3)),this.setAttribute("uv",new It(u,2));function x(y,m,d,C,_,T,B,N,R,$,E){let I=T/R,J=B/$,ce=T/2,be=B/2,k=N/2,Y=R+1,ie=$+1,P=0,oe=0,le=new L;for(let fe=0;fe<ie;fe++){let me=fe*J-be;for(let Ae=0;Ae<Y;Ae++){let se=Ae*I-ce;le[y]=se*C,le[m]=me*_,le[d]=k,c.push(le.x,le.y,le.z),le[y]=0,le[m]=0,le[d]=N>0?1:-1,h.push(le.x,le.y,le.z),u.push(Ae/R),u.push(1-fe/$),P+=1}}for(let fe=0;fe<$;fe++)for(let me=0;me<R;me++){let Ae=f+me+Y*fe,se=f+me+Y*(fe+1),xe=f+(me+1)+Y*(fe+1),Ce=f+(me+1)+Y*fe;l.push(Ae,se,Ce),l.push(se,xe,Ce),oe+=6}a.addGroup(p,oe,E),p+=oe,f+=P}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function hr(s){let e={};for(let t in s){e[t]={};for(let n in s[t]){let i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function kn(s){let e={};for(let t=0;t<s.length;t++){let n=hr(s[t]);for(let i in n)e[i]=n[i]}return e}function xd(s){let e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function Nu(s){return s.getRenderTarget()===null?s.outputColorSpace:Pt.workingColorSpace}var cs={clone:hr,merge:kn},_d=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,vd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,nn=class extends as{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=_d,this.fragmentShader=vd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=hr(e.uniforms),this.uniformsGroups=xd(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let i in this.uniforms){let o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},Ko=class extends Fn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new vt,this.projectionMatrix=new vt,this.projectionMatrixInverse=new vt,this.coordinateSystem=Vi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Nn=class extends Ko{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Nl*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Ka*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Nl*2*Math.atan(Math.tan(Ka*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Ka*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*i/l,t-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Ys=-90,Zs=1,Bl=class extends Fn{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new Nn(Ys,Zs,e,t);i.layers=this.layers,this.add(i);let r=new Nn(Ys,Zs,e,t);r.layers=this.layers,this.add(r);let o=new Nn(Ys,Zs,e,t);o.layers=this.layers,this.add(o);let a=new Nn(Ys,Zs,e,t);a.layers=this.layers,this.add(a);let l=new Nn(Ys,Zs,e,t);l.layers=this.layers,this.add(l);let c=new Nn(Ys,Zs,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,i,r,o,a,l]=t;for(let c of t)this.remove(c);if(e===Vi)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Go)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,u=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;let y=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,r),e.setRenderTarget(n,1,i),e.render(t,o),e.setRenderTarget(n,2,i),e.render(t,a),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=y,e.setRenderTarget(n,5,i),e.render(t,h),e.setRenderTarget(u,f,p),e.xr.enabled=x,n.texture.needsPMREMUpdate=!0}},Qo=class extends li{constructor(e,t,n,i,r,o,a,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:ar,super(e,t,n,i,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Hl=class extends Gn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];t.encoding!==void 0&&(Pr("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===bs?Ct:ai),this.texture=new Qo(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Jn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Bn(5,5,5),r=new nn({name:"CubemapFromEquirect",uniforms:hr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:mn,blending:Pi});r.uniforms.tEquirect.value=t;let o=new Ue(i,r),a=t.minFilter;return t.minFilter===Nr&&(t.minFilter=Jn),new Bl(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(r)}},ml=new L,yd=new L,Md=new Et,Hi=class{constructor(e=new L(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let i=ml.subVectors(n,t).cross(yd.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(ml),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Md.getNormalMatrix(e),i=this.coplanarPoint(ml).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},xs=new ws,To=new L,Or=class{constructor(e=new Hi,t=new Hi,n=new Hi,i=new Hi,r=new Hi,o=new Hi){this.planes=[e,t,n,i,r,o]}set(e,t,n,i,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Vi){let n=this.planes,i=e.elements,r=i[0],o=i[1],a=i[2],l=i[3],c=i[4],h=i[5],u=i[6],f=i[7],p=i[8],x=i[9],y=i[10],m=i[11],d=i[12],C=i[13],_=i[14],T=i[15];if(n[0].setComponents(l-r,f-c,m-p,T-d).normalize(),n[1].setComponents(l+r,f+c,m+p,T+d).normalize(),n[2].setComponents(l+o,f+h,m+x,T+C).normalize(),n[3].setComponents(l-o,f-h,m-x,T-C).normalize(),n[4].setComponents(l-a,f-u,m-y,T-_).normalize(),t===Vi)n[5].setComponents(l+a,f+u,m+y,T+_).normalize();else if(t===Go)n[5].setComponents(a,u,y,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),xs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),xs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(xs)}intersectsSprite(e){return xs.center.set(0,0,0),xs.radius=.7071067811865476,xs.applyMatrix4(e.matrixWorld),this.intersectsSphere(xs)}intersectsSphere(e){let t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let i=t[n];if(To.x=i.normal.x>0?e.max.x:e.min.x,To.y=i.normal.y>0?e.max.y:e.min.y,To.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(To)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function zu(){let s=null,e=!1,t=null,n=null;function i(r,o){t(r,o),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function Sd(s,e){let t=e.isWebGL2,n=new WeakMap;function i(c,h){let u=c.array,f=c.usage,p=u.byteLength,x=s.createBuffer();s.bindBuffer(h,x),s.bufferData(h,u,f),c.onUploadCallback();let y;if(u instanceof Float32Array)y=s.FLOAT;else if(u instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)y=s.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else y=s.UNSIGNED_SHORT;else if(u instanceof Int16Array)y=s.SHORT;else if(u instanceof Uint32Array)y=s.UNSIGNED_INT;else if(u instanceof Int32Array)y=s.INT;else if(u instanceof Int8Array)y=s.BYTE;else if(u instanceof Uint8Array)y=s.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)y=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:x,type:y,bytesPerElement:u.BYTES_PER_ELEMENT,version:c.version,size:p}}function r(c,h,u){let f=h.array,p=h._updateRange,x=h.updateRanges;if(s.bindBuffer(u,c),p.count===-1&&x.length===0&&s.bufferSubData(u,0,f),x.length!==0){for(let y=0,m=x.length;y<m;y++){let d=x[y];t?s.bufferSubData(u,d.start*f.BYTES_PER_ELEMENT,f,d.start,d.count):s.bufferSubData(u,d.start*f.BYTES_PER_ELEMENT,f.subarray(d.start,d.start+d.count))}h.clearUpdateRanges()}p.count!==-1&&(t?s.bufferSubData(u,p.offset*f.BYTES_PER_ELEMENT,f,p.offset,p.count):s.bufferSubData(u,p.offset*f.BYTES_PER_ELEMENT,f.subarray(p.offset,p.offset+p.count)),p.count=-1),h.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);let h=n.get(c);h&&(s.deleteBuffer(h.buffer),n.delete(c))}function l(c,h){if(c.isGLBufferAttribute){let f=n.get(c);(!f||f.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);let u=n.get(c);if(u===void 0)n.set(c,i(c,h));else if(u.version<c.version){if(u.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(u.buffer,c,h),u.version=c.version}}return{get:o,remove:a,update:l}}var sn=class s extends bn{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};let r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,u=e/a,f=t/l,p=[],x=[],y=[],m=[];for(let d=0;d<h;d++){let C=d*f-o;for(let _=0;_<c;_++){let T=_*u-r;x.push(T,-C,0),y.push(0,0,1),m.push(_/a),m.push(1-d/l)}}for(let d=0;d<l;d++)for(let C=0;C<a;C++){let _=C+c*d,T=C+c*(d+1),B=C+1+c*(d+1),N=C+1+c*d;p.push(_,T,N),p.push(T,B,N)}this.setIndex(p),this.setAttribute("position",new It(x,3)),this.setAttribute("normal",new It(y,3)),this.setAttribute("uv",new It(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.widthSegments,e.heightSegments)}},Ed=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,bd=`#ifdef USE_ALPHAHASH
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
#endif`,wd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Td=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ad=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Rd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Cd=`#ifdef USE_AOMAP
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
#endif`,Pd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Id=`#ifdef USE_BATCHING
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
#endif`,Ld=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Ud=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Dd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Nd=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,zd=`#ifdef USE_IRIDESCENCE
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
#endif`,Od=`#ifdef USE_BUMPMAP
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
#endif`,Fd=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Bd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Hd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,kd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Vd=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Gd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Wd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Xd=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,qd=`#define PI 3.141592653589793
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
} // validated`,Yd=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Zd=`vec3 transformedNormal = objectNormal;
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
#endif`,Jd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,$d=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Kd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Qd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,jd="gl_FragColor = linearToOutputTexel( gl_FragColor );",ep=`
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
}`,tp=`#ifdef USE_ENVMAP
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
#endif`,np=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,ip=`#ifdef USE_ENVMAP
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
#endif`,sp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,rp=`#ifdef USE_ENVMAP
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
#endif`,op=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ap=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,lp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,cp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,hp=`#ifdef USE_GRADIENTMAP
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
}`,up=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,fp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,dp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,pp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,mp=`uniform bool receiveShadow;
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
#endif`,gp=`#ifdef USE_ENVMAP
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
#endif`,xp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,_p=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,vp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,yp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Mp=`PhysicalMaterial material;
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
#endif`,Sp=`struct PhysicalMaterial {
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
}`,Ep=`
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
#endif`,bp=`#if defined( RE_IndirectDiffuse )
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
#endif`,wp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Tp=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ap=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Rp=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Cp=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Pp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ip=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Lp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Up=`#if defined( USE_POINTS_UV )
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
#endif`,Dp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Np=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,zp=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Op=`#ifdef USE_MORPHNORMALS
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
#endif`,Fp=`#ifdef USE_MORPHTARGETS
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
#endif`,Bp=`#ifdef USE_MORPHTARGETS
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
#endif`,Hp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,kp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Vp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Gp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Wp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Xp=`#ifdef USE_NORMALMAP
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
#endif`,qp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Yp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Zp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Jp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,$p=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Kp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Qp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,jp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,em=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,tm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,nm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,im=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,sm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,rm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,om=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,am=`float getShadowMask() {
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
}`,lm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,cm=`#ifdef USE_SKINNING
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
#endif`,hm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,um=`#ifdef USE_SKINNING
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
#endif`,fm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,dm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,pm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,mm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,gm=`#ifdef USE_TRANSMISSION
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
#endif`,xm=`#ifdef USE_TRANSMISSION
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
#endif`,_m=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,vm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ym=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Mm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Sm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Em=`uniform sampler2D t2D;
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
}`,bm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,wm=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Tm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Am=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Rm=`#include <common>
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
}`,Cm=`#if DEPTH_PACKING == 3200
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
}`,Pm=`#define DISTANCE
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
}`,Im=`#define DISTANCE
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
}`,Lm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Um=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Dm=`uniform float scale;
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
}`,Nm=`uniform vec3 diffuse;
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
}`,zm=`#include <common>
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
}`,Om=`uniform vec3 diffuse;
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
}`,Fm=`#define LAMBERT
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
}`,Bm=`#define LAMBERT
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
}`,Hm=`#define MATCAP
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
}`,km=`#define MATCAP
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
}`,Vm=`#define NORMAL
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
}`,Gm=`#define NORMAL
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
}`,Wm=`#define PHONG
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
}`,Xm=`#define PHONG
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
}`,qm=`#define STANDARD
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
}`,Ym=`#define STANDARD
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
}`,Zm=`#define TOON
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
}`,Jm=`#define TOON
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
}`,$m=`uniform float size;
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
}`,Km=`uniform vec3 diffuse;
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
}`,Qm=`#include <common>
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
}`,jm=`uniform vec3 color;
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
}`,eg=`uniform float rotation;
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
}`,tg=`uniform vec3 diffuse;
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
}`,_t={alphahash_fragment:Ed,alphahash_pars_fragment:bd,alphamap_fragment:wd,alphamap_pars_fragment:Td,alphatest_fragment:Ad,alphatest_pars_fragment:Rd,aomap_fragment:Cd,aomap_pars_fragment:Pd,batching_pars_vertex:Id,batching_vertex:Ld,begin_vertex:Ud,beginnormal_vertex:Dd,bsdfs:Nd,iridescence_fragment:zd,bumpmap_pars_fragment:Od,clipping_planes_fragment:Fd,clipping_planes_pars_fragment:Bd,clipping_planes_pars_vertex:Hd,clipping_planes_vertex:kd,color_fragment:Vd,color_pars_fragment:Gd,color_pars_vertex:Wd,color_vertex:Xd,common:qd,cube_uv_reflection_fragment:Yd,defaultnormal_vertex:Zd,displacementmap_pars_vertex:Jd,displacementmap_vertex:$d,emissivemap_fragment:Kd,emissivemap_pars_fragment:Qd,colorspace_fragment:jd,colorspace_pars_fragment:ep,envmap_fragment:tp,envmap_common_pars_fragment:np,envmap_pars_fragment:ip,envmap_pars_vertex:sp,envmap_physical_pars_fragment:gp,envmap_vertex:rp,fog_vertex:op,fog_pars_vertex:ap,fog_fragment:lp,fog_pars_fragment:cp,gradientmap_pars_fragment:hp,lightmap_fragment:up,lightmap_pars_fragment:fp,lights_lambert_fragment:dp,lights_lambert_pars_fragment:pp,lights_pars_begin:mp,lights_toon_fragment:xp,lights_toon_pars_fragment:_p,lights_phong_fragment:vp,lights_phong_pars_fragment:yp,lights_physical_fragment:Mp,lights_physical_pars_fragment:Sp,lights_fragment_begin:Ep,lights_fragment_maps:bp,lights_fragment_end:wp,logdepthbuf_fragment:Tp,logdepthbuf_pars_fragment:Ap,logdepthbuf_pars_vertex:Rp,logdepthbuf_vertex:Cp,map_fragment:Pp,map_pars_fragment:Ip,map_particle_fragment:Lp,map_particle_pars_fragment:Up,metalnessmap_fragment:Dp,metalnessmap_pars_fragment:Np,morphcolor_vertex:zp,morphnormal_vertex:Op,morphtarget_pars_vertex:Fp,morphtarget_vertex:Bp,normal_fragment_begin:Hp,normal_fragment_maps:kp,normal_pars_fragment:Vp,normal_pars_vertex:Gp,normal_vertex:Wp,normalmap_pars_fragment:Xp,clearcoat_normal_fragment_begin:qp,clearcoat_normal_fragment_maps:Yp,clearcoat_pars_fragment:Zp,iridescence_pars_fragment:Jp,opaque_fragment:$p,packing:Kp,premultiplied_alpha_fragment:Qp,project_vertex:jp,dithering_fragment:em,dithering_pars_fragment:tm,roughnessmap_fragment:nm,roughnessmap_pars_fragment:im,shadowmap_pars_fragment:sm,shadowmap_pars_vertex:rm,shadowmap_vertex:om,shadowmask_pars_fragment:am,skinbase_vertex:lm,skinning_pars_vertex:cm,skinning_vertex:hm,skinnormal_vertex:um,specularmap_fragment:fm,specularmap_pars_fragment:dm,tonemapping_fragment:pm,tonemapping_pars_fragment:mm,transmission_fragment:gm,transmission_pars_fragment:xm,uv_pars_fragment:_m,uv_pars_vertex:vm,uv_vertex:ym,worldpos_vertex:Mm,background_vert:Sm,background_frag:Em,backgroundCube_vert:bm,backgroundCube_frag:wm,cube_vert:Tm,cube_frag:Am,depth_vert:Rm,depth_frag:Cm,distanceRGBA_vert:Pm,distanceRGBA_frag:Im,equirect_vert:Lm,equirect_frag:Um,linedashed_vert:Dm,linedashed_frag:Nm,meshbasic_vert:zm,meshbasic_frag:Om,meshlambert_vert:Fm,meshlambert_frag:Bm,meshmatcap_vert:Hm,meshmatcap_frag:km,meshnormal_vert:Vm,meshnormal_frag:Gm,meshphong_vert:Wm,meshphong_frag:Xm,meshphysical_vert:qm,meshphysical_frag:Ym,meshtoon_vert:Zm,meshtoon_frag:Jm,points_vert:$m,points_frag:Km,shadow_vert:Qm,shadow_frag:jm,sprite_vert:eg,sprite_frag:tg},Oe={common:{diffuse:{value:new Je(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Et},alphaMap:{value:null},alphaMapTransform:{value:new Et},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Et}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Et}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Et}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Et},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Et},normalScale:{value:new Ee(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Et},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Et}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Et}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Et}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Je(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Je(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Et},alphaTest:{value:0},uvTransform:{value:new Et}},sprite:{diffuse:{value:new Je(16777215)},opacity:{value:1},center:{value:new Ee(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Et},alphaMap:{value:null},alphaMapTransform:{value:new Et},alphaTest:{value:0}}},Ci={basic:{uniforms:kn([Oe.common,Oe.specularmap,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.fog]),vertexShader:_t.meshbasic_vert,fragmentShader:_t.meshbasic_frag},lambert:{uniforms:kn([Oe.common,Oe.specularmap,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.fog,Oe.lights,{emissive:{value:new Je(0)}}]),vertexShader:_t.meshlambert_vert,fragmentShader:_t.meshlambert_frag},phong:{uniforms:kn([Oe.common,Oe.specularmap,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.fog,Oe.lights,{emissive:{value:new Je(0)},specular:{value:new Je(1118481)},shininess:{value:30}}]),vertexShader:_t.meshphong_vert,fragmentShader:_t.meshphong_frag},standard:{uniforms:kn([Oe.common,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.roughnessmap,Oe.metalnessmap,Oe.fog,Oe.lights,{emissive:{value:new Je(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:_t.meshphysical_vert,fragmentShader:_t.meshphysical_frag},toon:{uniforms:kn([Oe.common,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.gradientmap,Oe.fog,Oe.lights,{emissive:{value:new Je(0)}}]),vertexShader:_t.meshtoon_vert,fragmentShader:_t.meshtoon_frag},matcap:{uniforms:kn([Oe.common,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.fog,{matcap:{value:null}}]),vertexShader:_t.meshmatcap_vert,fragmentShader:_t.meshmatcap_frag},points:{uniforms:kn([Oe.points,Oe.fog]),vertexShader:_t.points_vert,fragmentShader:_t.points_frag},dashed:{uniforms:kn([Oe.common,Oe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:_t.linedashed_vert,fragmentShader:_t.linedashed_frag},depth:{uniforms:kn([Oe.common,Oe.displacementmap]),vertexShader:_t.depth_vert,fragmentShader:_t.depth_frag},normal:{uniforms:kn([Oe.common,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,{opacity:{value:1}}]),vertexShader:_t.meshnormal_vert,fragmentShader:_t.meshnormal_frag},sprite:{uniforms:kn([Oe.sprite,Oe.fog]),vertexShader:_t.sprite_vert,fragmentShader:_t.sprite_frag},background:{uniforms:{uvTransform:{value:new Et},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:_t.background_vert,fragmentShader:_t.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:_t.backgroundCube_vert,fragmentShader:_t.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:_t.cube_vert,fragmentShader:_t.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:_t.equirect_vert,fragmentShader:_t.equirect_frag},distanceRGBA:{uniforms:kn([Oe.common,Oe.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:_t.distanceRGBA_vert,fragmentShader:_t.distanceRGBA_frag},shadow:{uniforms:kn([Oe.lights,Oe.fog,{color:{value:new Je(0)},opacity:{value:1}}]),vertexShader:_t.shadow_vert,fragmentShader:_t.shadow_frag}};Ci.physical={uniforms:kn([Ci.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Et},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Et},clearcoatNormalScale:{value:new Ee(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Et},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Et},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Et},sheen:{value:0},sheenColor:{value:new Je(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Et},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Et},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Et},transmissionSamplerSize:{value:new Ee},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Et},attenuationDistance:{value:0},attenuationColor:{value:new Je(0)},specularColor:{value:new Je(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Et},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Et},anisotropyVector:{value:new Ee},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Et}}]),vertexShader:_t.meshphysical_vert,fragmentShader:_t.meshphysical_frag};var Ao={r:0,b:0,g:0};function ng(s,e,t,n,i,r,o){let a=new Je(0),l=r===!0?0:1,c,h,u=null,f=0,p=null;function x(m,d){let C=!1,_=d.isScene===!0?d.background:null;_&&_.isTexture&&(_=(d.backgroundBlurriness>0?t:e).get(_)),_===null?y(a,l):_&&_.isColor&&(y(_,1),C=!0);let T=s.xr.getEnvironmentBlendMode();T==="additive"?n.buffers.color.setClear(0,0,0,1,o):T==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(s.autoClear||C)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),_&&(_.isCubeTexture||_.mapping===ga)?(h===void 0&&(h=new Ue(new Bn(1,1,1),new nn({name:"BackgroundCubeMaterial",uniforms:hr(Ci.backgroundCube.uniforms),vertexShader:Ci.backgroundCube.vertexShader,fragmentShader:Ci.backgroundCube.fragmentShader,side:mn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(B,N,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),h.material.uniforms.envMap.value=_,h.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=d.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,h.material.toneMapped=Pt.getTransfer(_.colorSpace)!==Bt,(u!==_||f!==_.version||p!==s.toneMapping)&&(h.material.needsUpdate=!0,u=_,f=_.version,p=s.toneMapping),h.layers.enableAll(),m.unshift(h,h.geometry,h.material,0,0,null)):_&&_.isTexture&&(c===void 0&&(c=new Ue(new sn(2,2),new nn({name:"BackgroundMaterial",uniforms:hr(Ci.background.uniforms),vertexShader:Ci.background.vertexShader,fragmentShader:Ci.background.fragmentShader,side:rs,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=_,c.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,c.material.toneMapped=Pt.getTransfer(_.colorSpace)!==Bt,_.matrixAutoUpdate===!0&&_.updateMatrix(),c.material.uniforms.uvTransform.value.copy(_.matrix),(u!==_||f!==_.version||p!==s.toneMapping)&&(c.material.needsUpdate=!0,u=_,f=_.version,p=s.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function y(m,d){m.getRGB(Ao,Nu(s)),n.buffers.color.setClear(Ao.r,Ao.g,Ao.b,d,o)}return{getClearColor:function(){return a},setClearColor:function(m,d=1){a.set(m),l=d,y(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,y(a,l)},render:x}}function ig(s,e,t,n){let i=s.getParameter(s.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||r!==null,a={},l=m(null),c=l,h=!1;function u(k,Y,ie,P,oe){let le=!1;if(o){let fe=y(P,ie,Y);c!==fe&&(c=fe,p(c.object)),le=d(k,P,ie,oe),le&&C(k,P,ie,oe)}else{let fe=Y.wireframe===!0;(c.geometry!==P.id||c.program!==ie.id||c.wireframe!==fe)&&(c.geometry=P.id,c.program=ie.id,c.wireframe=fe,le=!0)}oe!==null&&t.update(oe,s.ELEMENT_ARRAY_BUFFER),(le||h)&&(h=!1,$(k,Y,ie,P),oe!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(oe).buffer))}function f(){return n.isWebGL2?s.createVertexArray():r.createVertexArrayOES()}function p(k){return n.isWebGL2?s.bindVertexArray(k):r.bindVertexArrayOES(k)}function x(k){return n.isWebGL2?s.deleteVertexArray(k):r.deleteVertexArrayOES(k)}function y(k,Y,ie){let P=ie.wireframe===!0,oe=a[k.id];oe===void 0&&(oe={},a[k.id]=oe);let le=oe[Y.id];le===void 0&&(le={},oe[Y.id]=le);let fe=le[P];return fe===void 0&&(fe=m(f()),le[P]=fe),fe}function m(k){let Y=[],ie=[],P=[];for(let oe=0;oe<i;oe++)Y[oe]=0,ie[oe]=0,P[oe]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:Y,enabledAttributes:ie,attributeDivisors:P,object:k,attributes:{},index:null}}function d(k,Y,ie,P){let oe=c.attributes,le=Y.attributes,fe=0,me=ie.getAttributes();for(let Ae in me)if(me[Ae].location>=0){let xe=oe[Ae],Ce=le[Ae];if(Ce===void 0&&(Ae==="instanceMatrix"&&k.instanceMatrix&&(Ce=k.instanceMatrix),Ae==="instanceColor"&&k.instanceColor&&(Ce=k.instanceColor)),xe===void 0||xe.attribute!==Ce||Ce&&xe.data!==Ce.data)return!0;fe++}return c.attributesNum!==fe||c.index!==P}function C(k,Y,ie,P){let oe={},le=Y.attributes,fe=0,me=ie.getAttributes();for(let Ae in me)if(me[Ae].location>=0){let xe=le[Ae];xe===void 0&&(Ae==="instanceMatrix"&&k.instanceMatrix&&(xe=k.instanceMatrix),Ae==="instanceColor"&&k.instanceColor&&(xe=k.instanceColor));let Ce={};Ce.attribute=xe,xe&&xe.data&&(Ce.data=xe.data),oe[Ae]=Ce,fe++}c.attributes=oe,c.attributesNum=fe,c.index=P}function _(){let k=c.newAttributes;for(let Y=0,ie=k.length;Y<ie;Y++)k[Y]=0}function T(k){B(k,0)}function B(k,Y){let ie=c.newAttributes,P=c.enabledAttributes,oe=c.attributeDivisors;ie[k]=1,P[k]===0&&(s.enableVertexAttribArray(k),P[k]=1),oe[k]!==Y&&((n.isWebGL2?s:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](k,Y),oe[k]=Y)}function N(){let k=c.newAttributes,Y=c.enabledAttributes;for(let ie=0,P=Y.length;ie<P;ie++)Y[ie]!==k[ie]&&(s.disableVertexAttribArray(ie),Y[ie]=0)}function R(k,Y,ie,P,oe,le,fe){fe===!0?s.vertexAttribIPointer(k,Y,ie,oe,le):s.vertexAttribPointer(k,Y,ie,P,oe,le)}function $(k,Y,ie,P){if(n.isWebGL2===!1&&(k.isInstancedMesh||P.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;_();let oe=P.attributes,le=ie.getAttributes(),fe=Y.defaultAttributeValues;for(let me in le){let Ae=le[me];if(Ae.location>=0){let se=oe[me];if(se===void 0&&(me==="instanceMatrix"&&k.instanceMatrix&&(se=k.instanceMatrix),me==="instanceColor"&&k.instanceColor&&(se=k.instanceColor)),se!==void 0){let xe=se.normalized,Ce=se.itemSize,Fe=t.get(se);if(Fe===void 0)continue;let Ge=Fe.buffer,et=Fe.type,at=Fe.bytesPerElement,qe=n.isWebGL2===!0&&(et===s.INT||et===s.UNSIGNED_INT||se.gpuType===Eu);if(se.isInterleavedBufferAttribute){let lt=se.data,O=lt.stride,ee=se.offset;if(lt.isInstancedInterleavedBuffer){for(let te=0;te<Ae.locationSize;te++)B(Ae.location+te,lt.meshPerAttribute);k.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=lt.meshPerAttribute*lt.count)}else for(let te=0;te<Ae.locationSize;te++)T(Ae.location+te);s.bindBuffer(s.ARRAY_BUFFER,Ge);for(let te=0;te<Ae.locationSize;te++)R(Ae.location+te,Ce/Ae.locationSize,et,xe,O*at,(ee+Ce/Ae.locationSize*te)*at,qe)}else{if(se.isInstancedBufferAttribute){for(let lt=0;lt<Ae.locationSize;lt++)B(Ae.location+lt,se.meshPerAttribute);k.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let lt=0;lt<Ae.locationSize;lt++)T(Ae.location+lt);s.bindBuffer(s.ARRAY_BUFFER,Ge);for(let lt=0;lt<Ae.locationSize;lt++)R(Ae.location+lt,Ce/Ae.locationSize,et,xe,Ce*at,Ce/Ae.locationSize*lt*at,qe)}}else if(fe!==void 0){let xe=fe[me];if(xe!==void 0)switch(xe.length){case 2:s.vertexAttrib2fv(Ae.location,xe);break;case 3:s.vertexAttrib3fv(Ae.location,xe);break;case 4:s.vertexAttrib4fv(Ae.location,xe);break;default:s.vertexAttrib1fv(Ae.location,xe)}}}}N()}function E(){ce();for(let k in a){let Y=a[k];for(let ie in Y){let P=Y[ie];for(let oe in P)x(P[oe].object),delete P[oe];delete Y[ie]}delete a[k]}}function I(k){if(a[k.id]===void 0)return;let Y=a[k.id];for(let ie in Y){let P=Y[ie];for(let oe in P)x(P[oe].object),delete P[oe];delete Y[ie]}delete a[k.id]}function J(k){for(let Y in a){let ie=a[Y];if(ie[k.id]===void 0)continue;let P=ie[k.id];for(let oe in P)x(P[oe].object),delete P[oe];delete ie[k.id]}}function ce(){be(),h=!0,c!==l&&(c=l,p(c.object))}function be(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:u,reset:ce,resetDefaultState:be,dispose:E,releaseStatesOfGeometry:I,releaseStatesOfProgram:J,initAttributes:_,enableAttribute:T,disableUnusedAttributes:N}}function sg(s,e,t,n){let i=n.isWebGL2,r;function o(h){r=h}function a(h,u){s.drawArrays(r,h,u),t.update(u,r,1)}function l(h,u,f){if(f===0)return;let p,x;if(i)p=s,x="drawArraysInstanced";else if(p=e.get("ANGLE_instanced_arrays"),x="drawArraysInstancedANGLE",p===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[x](r,h,u,f),t.update(u,r,f)}function c(h,u,f){if(f===0)return;let p=e.get("WEBGL_multi_draw");if(p===null)for(let x=0;x<f;x++)this.render(h[x],u[x]);else{p.multiDrawArraysWEBGL(r,h,0,u,0,f);let x=0;for(let y=0;y<f;y++)x+=u[y];t.update(x,r,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=c}function rg(s,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){let R=e.get("EXT_texture_filter_anisotropic");n=s.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(R){if(R==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let o=typeof WebGL2RenderingContext<"u"&&s.constructor.name==="WebGL2RenderingContext",a=t.precision!==void 0?t.precision:"highp",l=r(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);let c=o||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,u=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),f=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=s.getParameter(s.MAX_TEXTURE_SIZE),x=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),y=s.getParameter(s.MAX_VERTEX_ATTRIBS),m=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),d=s.getParameter(s.MAX_VARYING_VECTORS),C=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),_=f>0,T=o||e.has("OES_texture_float"),B=_&&T,N=o?s.getParameter(s.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:f,maxTextureSize:p,maxCubemapSize:x,maxAttributes:y,maxVertexUniforms:m,maxVaryings:d,maxFragmentUniforms:C,vertexTextures:_,floatFragmentTextures:T,floatVertexTextures:B,maxSamples:N}}function og(s){let e=this,t=null,n=0,i=!1,r=!1,o=new Hi,a=new Et,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let p=u.length!==0||f||n!==0||i;return i=f,n=u.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){t=h(u,f,0)},this.setState=function(u,f,p){let x=u.clippingPlanes,y=u.clipIntersection,m=u.clipShadows,d=s.get(u);if(!i||x===null||x.length===0||r&&!m)r?h(null):c();else{let C=r?0:n,_=C*4,T=d.clippingState||null;l.value=T,T=h(x,f,_,p);for(let B=0;B!==_;++B)T[B]=t[B];d.clippingState=T,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=C}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,f,p,x){let y=u!==null?u.length:0,m=null;if(y!==0){if(m=l.value,x!==!0||m===null){let d=p+y*4,C=f.matrixWorldInverse;a.getNormalMatrix(C),(m===null||m.length<d)&&(m=new Float32Array(d));for(let _=0,T=p;_!==y;++_,T+=4)o.copy(u[_]).applyMatrix4(C,a),o.normal.toArray(m,T),m[T+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,m}}function ag(s){let e=new WeakMap;function t(o,a){return a===Cl?o.mapping=ar:a===Pl&&(o.mapping=lr),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===Cl||a===Pl)if(e.has(o)){let l=e.get(o).texture;return t(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new Hl(l.height/2);return c.fromEquirectangularTexture(s,o),e.set(o,c),o.addEventListener("dispose",i),t(c.texture,o.mapping)}else return null}}return o}function i(o){let a=o.target;a.removeEventListener("dispose",i);let l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var ur=class extends Ko{constructor(e=-1,t=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-e,o=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},tr=4,Hh=[.125,.215,.35,.446,.526,.582],ys=20,gl=new ur,kh=new Je,xl=null,_l=0,vl=0,_s=(1+Math.sqrt(5))/2,Js=1/_s,Vh=[new L(1,1,1),new L(-1,1,1),new L(1,1,-1),new L(-1,1,-1),new L(0,_s,Js),new L(0,_s,-Js),new L(Js,0,_s),new L(-Js,0,_s),new L(_s,Js,0),new L(-_s,Js,0)],fr=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){xl=this._renderer.getRenderTarget(),_l=this._renderer.getActiveCubeFace(),vl=this._renderer.getActiveMipmapLevel(),this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Xh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Wh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(xl,_l,vl),e.scissorTest=!1,Ro(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ar||e.mapping===lr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),xl=this._renderer.getRenderTarget(),_l=this._renderer.getActiveCubeFace(),vl=this._renderer.getActiveMipmapLevel();let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Jn,minFilter:Jn,generateMipmaps:!1,type:bi,format:Ei,colorSpace:Wi,depthBuffer:!1},i=Gh(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Gh(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=lg(r)),this._blurMaterial=cg(r,e,t)}return i}_compileMaterial(e){let t=new Ue(this._lodPlanes[0],e);this._renderer.compile(t,gl)}_sceneToCubeUV(e,t,n,i){let a=new Nn(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(kh),h.toneMapping=Ii,h.autoClear=!1;let p=new mt({name:"PMREM.Background",side:mn,depthWrite:!1,depthTest:!1}),x=new Ue(new Bn,p),y=!1,m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,y=!0):(p.color.copy(kh),y=!0);for(let d=0;d<6;d++){let C=d%3;C===0?(a.up.set(0,l[d],0),a.lookAt(c[d],0,0)):C===1?(a.up.set(0,0,l[d]),a.lookAt(0,c[d],0)):(a.up.set(0,l[d],0),a.lookAt(0,0,c[d]));let _=this._cubeSize;Ro(i,C*_,d>2?_:0,_,_),h.setRenderTarget(i),y&&h.render(x,a),h.render(e,a)}x.geometry.dispose(),x.material.dispose(),h.toneMapping=f,h.autoClear=u,e.background=m}_textureToCubeUV(e,t){let n=this._renderer,i=e.mapping===ar||e.mapping===lr;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Xh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Wh());let r=i?this._cubemapMaterial:this._equirectMaterial,o=new Ue(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;let l=this._cubeSize;Ro(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,gl)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){let r=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),o=Vh[(i-1)%Vh.length];this._blur(e,i-1,i,r,o)}t.autoClear=n}_blur(e,t,n,i,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",r),this._halfBlur(o,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new Ue(this._lodPlanes[i],c),f=c.uniforms,p=this._sizeLods[n]-1,x=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*ys-1),y=r/x,m=isFinite(r)?1+Math.floor(h*y):ys;m>ys&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ys}`);let d=[],C=0;for(let R=0;R<ys;++R){let $=R/y,E=Math.exp(-$*$/2);d.push(E),R===0?C+=E:R<m&&(C+=2*E)}for(let R=0;R<d.length;R++)d[R]=d[R]/C;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=d,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:_}=this;f.dTheta.value=x,f.mipInt.value=_-n;let T=this._sizeLods[i],B=3*T*(i>_-tr?i-_+tr:0),N=4*(this._cubeSize-T);Ro(t,B,N,3*T,2*T),l.setRenderTarget(t),l.render(u,gl)}};function lg(s){let e=[],t=[],n=[],i=s,r=s-tr+1+Hh.length;for(let o=0;o<r;o++){let a=Math.pow(2,i);t.push(a);let l=1/a;o>s-tr?l=Hh[o-s+tr-1]:o===0&&(l=0),n.push(l);let c=1/(a-2),h=-c,u=1+c,f=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,x=6,y=3,m=2,d=1,C=new Float32Array(y*x*p),_=new Float32Array(m*x*p),T=new Float32Array(d*x*p);for(let N=0;N<p;N++){let R=N%3*2/3-1,$=N>2?0:-1,E=[R,$,0,R+2/3,$,0,R+2/3,$+1,0,R,$,0,R+2/3,$+1,0,R,$+1,0];C.set(E,y*x*N),_.set(f,m*x*N);let I=[N,N,N,N,N,N];T.set(I,d*x*N)}let B=new bn;B.setAttribute("position",new En(C,y)),B.setAttribute("uv",new En(_,m)),B.setAttribute("faceIndex",new En(T,d)),e.push(B),i>tr&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Gh(s,e,t){let n=new Gn(s,e,t);return n.texture.mapping=ga,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ro(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function cg(s,e,t){let n=new Float32Array(ys),i=new L(0,1,0);return new nn({name:"SphericalGaussianBlur",defines:{n:ys,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:bc(),fragmentShader:`

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
		`,blending:Pi,depthTest:!1,depthWrite:!1})}function Wh(){return new nn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:bc(),fragmentShader:`

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
		`,blending:Pi,depthTest:!1,depthWrite:!1})}function Xh(){return new nn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:bc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Pi,depthTest:!1,depthWrite:!1})}function bc(){return`

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
	`}function hg(s){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){let l=a.mapping,c=l===Cl||l===Pl,h=l===ar||l===lr;if(c||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let u=e.get(a);return t===null&&(t=new fr(s)),u=c?t.fromEquirectangular(a,u):t.fromCubemap(a,u),e.set(a,u),u.texture}else{if(e.has(a))return e.get(a).texture;{let u=a.image;if(c&&u&&u.height>0||h&&u&&i(u)){t===null&&(t=new fr(s));let f=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,f),a.addEventListener("dispose",r),f.texture}else return null}}}return a}function i(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function ug(s){let e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){let i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function fg(s,e,t,n){let i={},r=new WeakMap;function o(u){let f=u.target;f.index!==null&&e.remove(f.index);for(let x in f.attributes)e.remove(f.attributes[x]);for(let x in f.morphAttributes){let y=f.morphAttributes[x];for(let m=0,d=y.length;m<d;m++)e.remove(y[m])}f.removeEventListener("dispose",o),delete i[f.id];let p=r.get(f);p&&(e.remove(p),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(u,f){return i[f.id]===!0||(f.addEventListener("dispose",o),i[f.id]=!0,t.memory.geometries++),f}function l(u){let f=u.attributes;for(let x in f)e.update(f[x],s.ARRAY_BUFFER);let p=u.morphAttributes;for(let x in p){let y=p[x];for(let m=0,d=y.length;m<d;m++)e.update(y[m],s.ARRAY_BUFFER)}}function c(u){let f=[],p=u.index,x=u.attributes.position,y=0;if(p!==null){let C=p.array;y=p.version;for(let _=0,T=C.length;_<T;_+=3){let B=C[_+0],N=C[_+1],R=C[_+2];f.push(B,N,N,R,R,B)}}else if(x!==void 0){let C=x.array;y=x.version;for(let _=0,T=C.length/3-1;_<T;_+=3){let B=_+0,N=_+1,R=_+2;f.push(B,N,N,R,R,B)}}else return;let m=new(Uu(f)?$o:Jo)(f,1);m.version=y;let d=r.get(u);d&&e.remove(d),r.set(u,m)}function h(u){let f=r.get(u);if(f){let p=u.index;p!==null&&f.version<p.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function dg(s,e,t,n){let i=n.isWebGL2,r;function o(p){r=p}let a,l;function c(p){a=p.type,l=p.bytesPerElement}function h(p,x){s.drawElements(r,x,a,p*l),t.update(x,r,1)}function u(p,x,y){if(y===0)return;let m,d;if(i)m=s,d="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),d="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[d](r,x,a,p*l,y),t.update(x,r,y)}function f(p,x,y){if(y===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<y;d++)this.render(p[d]/l,x[d]);else{m.multiDrawElementsWEBGL(r,x,0,a,p,0,y);let d=0;for(let C=0;C<y;C++)d+=x[C];t.update(d,r,1)}}this.setMode=o,this.setIndex=c,this.render=h,this.renderInstances=u,this.renderMultiDraw=f}function pg(s){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case s.TRIANGLES:t.triangles+=a*(r/3);break;case s.LINES:t.lines+=a*(r/2);break;case s.LINE_STRIP:t.lines+=a*(r-1);break;case s.LINE_LOOP:t.lines+=a*r;break;case s.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function mg(s,e){return s[0]-e[0]}function gg(s,e){return Math.abs(e[1])-Math.abs(s[1])}function xg(s,e,t){let n={},i=new Float32Array(8),r=new WeakMap,o=new Jt,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,h,u){let f=c.morphTargetInfluences;if(e.isWebGL2===!0){let p=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,x=p!==void 0?p.length:0,y=r.get(h);if(y===void 0||y.count!==x){let k=function(){ce.dispose(),r.delete(h),h.removeEventListener("dispose",k)};y!==void 0&&y.texture.dispose();let C=h.morphAttributes.position!==void 0,_=h.morphAttributes.normal!==void 0,T=h.morphAttributes.color!==void 0,B=h.morphAttributes.position||[],N=h.morphAttributes.normal||[],R=h.morphAttributes.color||[],$=0;C===!0&&($=1),_===!0&&($=2),T===!0&&($=3);let E=h.attributes.position.count*$,I=1;E>e.maxTextureSize&&(I=Math.ceil(E/e.maxTextureSize),E=e.maxTextureSize);let J=new Float32Array(E*I*4*x),ce=new Yo(J,E,I,x);ce.type=is,ce.needsUpdate=!0;let be=$*4;for(let Y=0;Y<x;Y++){let ie=B[Y],P=N[Y],oe=R[Y],le=E*I*4*Y;for(let fe=0;fe<ie.count;fe++){let me=fe*be;C===!0&&(o.fromBufferAttribute(ie,fe),J[le+me+0]=o.x,J[le+me+1]=o.y,J[le+me+2]=o.z,J[le+me+3]=0),_===!0&&(o.fromBufferAttribute(P,fe),J[le+me+4]=o.x,J[le+me+5]=o.y,J[le+me+6]=o.z,J[le+me+7]=0),T===!0&&(o.fromBufferAttribute(oe,fe),J[le+me+8]=o.x,J[le+me+9]=o.y,J[le+me+10]=o.z,J[le+me+11]=oe.itemSize===4?o.w:1)}}y={count:x,texture:ce,size:new Ee(E,I)},r.set(h,y),h.addEventListener("dispose",k)}let m=0;for(let C=0;C<f.length;C++)m+=f[C];let d=h.morphTargetsRelative?1:1-m;u.getUniforms().setValue(s,"morphTargetBaseInfluence",d),u.getUniforms().setValue(s,"morphTargetInfluences",f),u.getUniforms().setValue(s,"morphTargetsTexture",y.texture,t),u.getUniforms().setValue(s,"morphTargetsTextureSize",y.size)}else{let p=f===void 0?0:f.length,x=n[h.id];if(x===void 0||x.length!==p){x=[];for(let _=0;_<p;_++)x[_]=[_,0];n[h.id]=x}for(let _=0;_<p;_++){let T=x[_];T[0]=_,T[1]=f[_]}x.sort(gg);for(let _=0;_<8;_++)_<p&&x[_][1]?(a[_][0]=x[_][0],a[_][1]=x[_][1]):(a[_][0]=Number.MAX_SAFE_INTEGER,a[_][1]=0);a.sort(mg);let y=h.morphAttributes.position,m=h.morphAttributes.normal,d=0;for(let _=0;_<8;_++){let T=a[_],B=T[0],N=T[1];B!==Number.MAX_SAFE_INTEGER&&N?(y&&h.getAttribute("morphTarget"+_)!==y[B]&&h.setAttribute("morphTarget"+_,y[B]),m&&h.getAttribute("morphNormal"+_)!==m[B]&&h.setAttribute("morphNormal"+_,m[B]),i[_]=N,d+=N):(y&&h.hasAttribute("morphTarget"+_)===!0&&h.deleteAttribute("morphTarget"+_),m&&h.hasAttribute("morphNormal"+_)===!0&&h.deleteAttribute("morphNormal"+_),i[_]=0)}let C=h.morphTargetsRelative?1:1-d;u.getUniforms().setValue(s,"morphTargetBaseInfluence",C),u.getUniforms().setValue(s,"morphTargetInfluences",i)}}return{update:l}}function _g(s,e,t,n){let i=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,u=e.get(l,h);if(i.get(u)!==c&&(e.update(u),i.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(t.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){let f=l.skeleton;i.get(f)!==c&&(f.update(),i.set(f,c))}return u}function o(){i=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}var jo=class extends li{constructor(e,t,n,i,r,o,a,l,c,h){if(h=h!==void 0?h:Es,h!==Es&&h!==cr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Es&&(n=ns),n===void 0&&h===cr&&(n=Ss),super(null,i,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Vn,this.minFilter=l!==void 0?l:Vn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Ou=new li,Fu=new jo(1,1);Fu.compareFunction=Lu;var Bu=new Yo,Hu=new Fl,ku=new Qo,qh=[],Yh=[],Zh=new Float32Array(16),Jh=new Float32Array(9),$h=new Float32Array(4);function xr(s,e,t){let n=s[0];if(n<=0||n>0)return s;let i=e*t,r=qh[i];if(r===void 0&&(r=new Float32Array(i),qh[i]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,s[o].toArray(r,a)}return r}function gn(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function xn(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function _a(s,e){let t=Yh[e];t===void 0&&(t=new Int32Array(e),Yh[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function vg(s,e){let t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function yg(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(gn(t,e))return;s.uniform2fv(this.addr,e),xn(t,e)}}function Mg(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(gn(t,e))return;s.uniform3fv(this.addr,e),xn(t,e)}}function Sg(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(gn(t,e))return;s.uniform4fv(this.addr,e),xn(t,e)}}function Eg(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(gn(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),xn(t,e)}else{if(gn(t,n))return;$h.set(n),s.uniformMatrix2fv(this.addr,!1,$h),xn(t,n)}}function bg(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(gn(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),xn(t,e)}else{if(gn(t,n))return;Jh.set(n),s.uniformMatrix3fv(this.addr,!1,Jh),xn(t,n)}}function wg(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(gn(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),xn(t,e)}else{if(gn(t,n))return;Zh.set(n),s.uniformMatrix4fv(this.addr,!1,Zh),xn(t,n)}}function Tg(s,e){let t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function Ag(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(gn(t,e))return;s.uniform2iv(this.addr,e),xn(t,e)}}function Rg(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(gn(t,e))return;s.uniform3iv(this.addr,e),xn(t,e)}}function Cg(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(gn(t,e))return;s.uniform4iv(this.addr,e),xn(t,e)}}function Pg(s,e){let t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function Ig(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(gn(t,e))return;s.uniform2uiv(this.addr,e),xn(t,e)}}function Lg(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(gn(t,e))return;s.uniform3uiv(this.addr,e),xn(t,e)}}function Ug(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(gn(t,e))return;s.uniform4uiv(this.addr,e),xn(t,e)}}function Dg(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r=this.type===s.SAMPLER_2D_SHADOW?Fu:Ou;t.setTexture2D(e||r,i)}function Ng(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Hu,i)}function zg(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||ku,i)}function Og(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Bu,i)}function Fg(s){switch(s){case 5126:return vg;case 35664:return yg;case 35665:return Mg;case 35666:return Sg;case 35674:return Eg;case 35675:return bg;case 35676:return wg;case 5124:case 35670:return Tg;case 35667:case 35671:return Ag;case 35668:case 35672:return Rg;case 35669:case 35673:return Cg;case 5125:return Pg;case 36294:return Ig;case 36295:return Lg;case 36296:return Ug;case 35678:case 36198:case 36298:case 36306:case 35682:return Dg;case 35679:case 36299:case 36307:return Ng;case 35680:case 36300:case 36308:case 36293:return zg;case 36289:case 36303:case 36311:case 36292:return Og}}function Bg(s,e){s.uniform1fv(this.addr,e)}function Hg(s,e){let t=xr(e,this.size,2);s.uniform2fv(this.addr,t)}function kg(s,e){let t=xr(e,this.size,3);s.uniform3fv(this.addr,t)}function Vg(s,e){let t=xr(e,this.size,4);s.uniform4fv(this.addr,t)}function Gg(s,e){let t=xr(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function Wg(s,e){let t=xr(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function Xg(s,e){let t=xr(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function qg(s,e){s.uniform1iv(this.addr,e)}function Yg(s,e){s.uniform2iv(this.addr,e)}function Zg(s,e){s.uniform3iv(this.addr,e)}function Jg(s,e){s.uniform4iv(this.addr,e)}function $g(s,e){s.uniform1uiv(this.addr,e)}function Kg(s,e){s.uniform2uiv(this.addr,e)}function Qg(s,e){s.uniform3uiv(this.addr,e)}function jg(s,e){s.uniform4uiv(this.addr,e)}function e0(s,e,t){let n=this.cache,i=e.length,r=_a(t,i);gn(n,r)||(s.uniform1iv(this.addr,r),xn(n,r));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||Ou,r[o])}function t0(s,e,t){let n=this.cache,i=e.length,r=_a(t,i);gn(n,r)||(s.uniform1iv(this.addr,r),xn(n,r));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||Hu,r[o])}function n0(s,e,t){let n=this.cache,i=e.length,r=_a(t,i);gn(n,r)||(s.uniform1iv(this.addr,r),xn(n,r));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||ku,r[o])}function i0(s,e,t){let n=this.cache,i=e.length,r=_a(t,i);gn(n,r)||(s.uniform1iv(this.addr,r),xn(n,r));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||Bu,r[o])}function s0(s){switch(s){case 5126:return Bg;case 35664:return Hg;case 35665:return kg;case 35666:return Vg;case 35674:return Gg;case 35675:return Wg;case 35676:return Xg;case 5124:case 35670:return qg;case 35667:case 35671:return Yg;case 35668:case 35672:return Zg;case 35669:case 35673:return Jg;case 5125:return $g;case 36294:return Kg;case 36295:return Qg;case 36296:return jg;case 35678:case 36198:case 36298:case 36306:case 35682:return e0;case 35679:case 36299:case 36307:return t0;case 35680:case 36300:case 36308:case 36293:return n0;case 36289:case 36303:case 36311:case 36292:return i0}}var kl=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Fg(t.type)}},Vl=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=s0(t.type)}},Gl=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let i=this.seq;for(let r=0,o=i.length;r!==o;++r){let a=i[r];a.setValue(e,t[a.id],n)}}},yl=/(\w+)(\])?(\[|\.)?/g;function Kh(s,e){s.seq.push(e),s.map[e.id]=e}function r0(s,e,t){let n=s.name,i=n.length;for(yl.lastIndex=0;;){let r=yl.exec(n),o=yl.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){Kh(t,c===void 0?new kl(a,s,e):new Vl(a,s,e));break}else{let u=t.map[a];u===void 0&&(u=new Gl(a),Kh(t,u)),t=u}}}var or=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){let r=e.getActiveUniform(t,i),o=e.getUniformLocation(t,r.name);r0(r,o,this)}}setValue(e,t,n,i){let r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){let i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,t){let n=[];for(let i=0,r=e.length;i!==r;++i){let o=e[i];o.id in t&&n.push(o)}return n}};function Qh(s,e,t){let n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}var o0=37297,a0=0;function l0(s,e){let t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=i;o<r;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function c0(s){let e=Pt.getPrimaries(Pt.workingColorSpace),t=Pt.getPrimaries(s),n;switch(e===t?n="":e===Vo&&t===ko?n="LinearDisplayP3ToLinearSRGB":e===ko&&t===Vo&&(n="LinearSRGBToLinearDisplayP3"),s){case Wi:case xa:return[n,"LinearTransferOETF"];case Ct:case Ec:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),[n,"LinearTransferOETF"]}}function jh(s,e,t){let n=s.getShaderParameter(e,s.COMPILE_STATUS),i=s.getShaderInfoLog(e).trim();if(n&&i==="")return"";let r=/ERROR: 0:(\d+)/.exec(i);if(r){let o=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+l0(s.getShaderSource(e),o)}else return i}function h0(s,e){let t=c0(e);return`vec4 ${s}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function u0(s,e){let t;switch(e){case xc:t="Linear";break;case _c:t="Reinhard";break;case vc:t="OptimizedCineon";break;case yc:t="ACESFilmic";break;case Mc:t="AgX";break;case Nf:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function f0(s){return[s.extensionDerivatives||s.envMapCubeUVHeight||s.bumpMap||s.normalMapTangentSpace||s.clearcoatNormalMap||s.flatShading||s.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(s.extensionFragDepth||s.logarithmicDepthBuffer)&&s.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",s.extensionDrawBuffers&&s.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(s.extensionShaderTextureLOD||s.envMap||s.transmission)&&s.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(nr).join(`
`)}function d0(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(nr).join(`
`)}function p0(s){let e=[];for(let t in s){let n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function m0(s,e){let t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let r=s.getActiveAttrib(e,i),o=r.name,a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:s.getAttribLocation(e,o),locationSize:a}}return t}function nr(s){return s!==""}function eu(s,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function tu(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var g0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Wl(s){return s.replace(g0,_0)}var x0=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function _0(s,e){let t=_t[e];if(t===void 0){let n=x0.get(e);if(n!==void 0)t=_t[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Wl(t)}var v0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function nu(s){return s.replace(v0,y0)}function y0(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function iu(s){let e="precision "+s.precision+` float;
precision `+s.precision+" int;";return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function M0(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===yu?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===cf?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Bi&&(e="SHADOWMAP_TYPE_VSM"),e}function S0(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case ar:case lr:e="ENVMAP_TYPE_CUBE";break;case ga:e="ENVMAP_TYPE_CUBE_UV";break}return e}function E0(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case lr:e="ENVMAP_MODE_REFRACTION";break}return e}function b0(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Mu:e="ENVMAP_BLENDING_MULTIPLY";break;case Uf:e="ENVMAP_BLENDING_MIX";break;case Df:e="ENVMAP_BLENDING_ADD";break}return e}function w0(s){let e=s.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function T0(s,e,t,n){let i=s.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=M0(t),c=S0(t),h=E0(t),u=b0(t),f=w0(t),p=t.isWebGL2?"":f0(t),x=d0(t),y=p0(r),m=i.createProgram(),d,C,_=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y].filter(nr).join(`
`),d.length>0&&(d+=`
`),C=[p,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y].filter(nr).join(`
`),C.length>0&&(C+=`
`)):(d=[iu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(nr).join(`
`),C=[p,iu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ii?"#define TONE_MAPPING":"",t.toneMapping!==Ii?_t.tonemapping_pars_fragment:"",t.toneMapping!==Ii?u0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",_t.colorspace_pars_fragment,h0("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(nr).join(`
`)),o=Wl(o),o=eu(o,t),o=tu(o,t),a=Wl(a),a=eu(a,t),a=tu(a,t),o=nu(o),a=nu(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,d=[x,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,C=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===Sh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Sh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+C);let T=_+d+o,B=_+C+a,N=Qh(i,i.VERTEX_SHADER,T),R=Qh(i,i.FRAGMENT_SHADER,B);i.attachShader(m,N),i.attachShader(m,R),t.index0AttributeName!==void 0?i.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(m,0,"position"),i.linkProgram(m);function $(ce){if(s.debug.checkShaderErrors){let be=i.getProgramInfoLog(m).trim(),k=i.getShaderInfoLog(N).trim(),Y=i.getShaderInfoLog(R).trim(),ie=!0,P=!0;if(i.getProgramParameter(m,i.LINK_STATUS)===!1)if(ie=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,m,N,R);else{let oe=jh(i,N,"vertex"),le=jh(i,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(m,i.VALIDATE_STATUS)+`

Program Info Log: `+be+`
`+oe+`
`+le)}else be!==""?console.warn("THREE.WebGLProgram: Program Info Log:",be):(k===""||Y==="")&&(P=!1);P&&(ce.diagnostics={runnable:ie,programLog:be,vertexShader:{log:k,prefix:d},fragmentShader:{log:Y,prefix:C}})}i.deleteShader(N),i.deleteShader(R),E=new or(i,m),I=m0(i,m)}let E;this.getUniforms=function(){return E===void 0&&$(this),E};let I;this.getAttributes=function(){return I===void 0&&$(this),I};let J=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return J===!1&&(J=i.getProgramParameter(m,o0)),J},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=a0++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=N,this.fragmentShader=R,this}var A0=0,Xl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new ql(e),t.set(e,n)),n}},ql=class{constructor(e){this.id=A0++,this.code=e,this.usedTimes=0}};function R0(s,e,t,n,i,r,o){let a=new zr,l=new Xl,c=[],h=i.isWebGL2,u=i.logarithmicDepthBuffer,f=i.vertexTextures,p=i.precision,x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(E){return E===0?"uv":`uv${E}`}function m(E,I,J,ce,be){let k=ce.fog,Y=be.geometry,ie=E.isMeshStandardMaterial?ce.environment:null,P=(E.isMeshStandardMaterial?t:e).get(E.envMap||ie),oe=P&&P.mapping===ga?P.image.height:null,le=x[E.type];E.precision!==null&&(p=i.getMaxPrecision(E.precision),p!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",p,"instead."));let fe=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,me=fe!==void 0?fe.length:0,Ae=0;Y.morphAttributes.position!==void 0&&(Ae=1),Y.morphAttributes.normal!==void 0&&(Ae=2),Y.morphAttributes.color!==void 0&&(Ae=3);let se,xe,Ce,Fe;if(le){let Vt=Ci[le];se=Vt.vertexShader,xe=Vt.fragmentShader}else se=E.vertexShader,xe=E.fragmentShader,l.update(E),Ce=l.getVertexShaderID(E),Fe=l.getFragmentShaderID(E);let Ge=s.getRenderTarget(),et=be.isInstancedMesh===!0,at=be.isBatchedMesh===!0,qe=!!E.map,lt=!!E.matcap,O=!!P,ee=!!E.aoMap,te=!!E.lightMap,V=!!E.bumpMap,K=!!E.normalMap,_e=!!E.displacementMap,de=!!E.emissiveMap,b=!!E.metalnessMap,M=!!E.roughnessMap,G=E.anisotropy>0,re=E.clearcoat>0,pe=E.iridescence>0,ge=E.sheen>0,ze=E.transmission>0,Se=G&&!!E.anisotropyMap,De=re&&!!E.clearcoatMap,$e=re&&!!E.clearcoatNormalMap,ht=re&&!!E.clearcoatRoughnessMap,ve=pe&&!!E.iridescenceMap,yt=pe&&!!E.iridescenceThicknessMap,Ke=ge&&!!E.sheenColorMap,st=ge&&!!E.sheenRoughnessMap,Pe=!!E.specularMap,ke=!!E.specularColorMap,rt=!!E.specularIntensityMap,bt=ze&&!!E.transmissionMap,Lt=ze&&!!E.thicknessMap,Ie=!!E.gradientMap,we=!!E.alphaMap,F=E.alphaTest>0,Be=!!E.alphaHash,Le=!!E.extensions,tt=!!Y.attributes.uv1,it=!!Y.attributes.uv2,Mt=!!Y.attributes.uv3,Tt=Ii;return E.toneMapped&&(Ge===null||Ge.isXRRenderTarget===!0)&&(Tt=s.toneMapping),{isWebGL2:h,shaderID:le,shaderType:E.type,shaderName:E.name,vertexShader:se,fragmentShader:xe,defines:E.defines,customVertexShaderID:Ce,customFragmentShaderID:Fe,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:p,batching:at,instancing:et,instancingColor:et&&be.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:Ge===null?s.outputColorSpace:Ge.isXRRenderTarget===!0?Ge.texture.colorSpace:Wi,map:qe,matcap:lt,envMap:O,envMapMode:O&&P.mapping,envMapCubeUVHeight:oe,aoMap:ee,lightMap:te,bumpMap:V,normalMap:K,displacementMap:f&&_e,emissiveMap:de,normalMapObjectSpace:K&&E.normalMapType===Yf,normalMapTangentSpace:K&&E.normalMapType===Iu,metalnessMap:b,roughnessMap:M,anisotropy:G,anisotropyMap:Se,clearcoat:re,clearcoatMap:De,clearcoatNormalMap:$e,clearcoatRoughnessMap:ht,iridescence:pe,iridescenceMap:ve,iridescenceThicknessMap:yt,sheen:ge,sheenColorMap:Ke,sheenRoughnessMap:st,specularMap:Pe,specularColorMap:ke,specularIntensityMap:rt,transmission:ze,transmissionMap:bt,thicknessMap:Lt,gradientMap:Ie,opaque:E.transparent===!1&&E.blending===sr,alphaMap:we,alphaTest:F,alphaHash:Be,combine:E.combine,mapUv:qe&&y(E.map.channel),aoMapUv:ee&&y(E.aoMap.channel),lightMapUv:te&&y(E.lightMap.channel),bumpMapUv:V&&y(E.bumpMap.channel),normalMapUv:K&&y(E.normalMap.channel),displacementMapUv:_e&&y(E.displacementMap.channel),emissiveMapUv:de&&y(E.emissiveMap.channel),metalnessMapUv:b&&y(E.metalnessMap.channel),roughnessMapUv:M&&y(E.roughnessMap.channel),anisotropyMapUv:Se&&y(E.anisotropyMap.channel),clearcoatMapUv:De&&y(E.clearcoatMap.channel),clearcoatNormalMapUv:$e&&y(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ht&&y(E.clearcoatRoughnessMap.channel),iridescenceMapUv:ve&&y(E.iridescenceMap.channel),iridescenceThicknessMapUv:yt&&y(E.iridescenceThicknessMap.channel),sheenColorMapUv:Ke&&y(E.sheenColorMap.channel),sheenRoughnessMapUv:st&&y(E.sheenRoughnessMap.channel),specularMapUv:Pe&&y(E.specularMap.channel),specularColorMapUv:ke&&y(E.specularColorMap.channel),specularIntensityMapUv:rt&&y(E.specularIntensityMap.channel),transmissionMapUv:bt&&y(E.transmissionMap.channel),thicknessMapUv:Lt&&y(E.thicknessMap.channel),alphaMapUv:we&&y(E.alphaMap.channel),vertexTangents:!!Y.attributes.tangent&&(K||G),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,vertexUv1s:tt,vertexUv2s:it,vertexUv3s:Mt,pointsUvs:be.isPoints===!0&&!!Y.attributes.uv&&(qe||we),fog:!!k,useFog:E.fog===!0,fogExp2:k&&k.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:be.isSkinnedMesh===!0,morphTargets:Y.morphAttributes.position!==void 0,morphNormals:Y.morphAttributes.normal!==void 0,morphColors:Y.morphAttributes.color!==void 0,morphTargetsCount:me,morphTextureStride:Ae,numDirLights:I.directional.length,numPointLights:I.point.length,numSpotLights:I.spot.length,numSpotLightMaps:I.spotLightMap.length,numRectAreaLights:I.rectArea.length,numHemiLights:I.hemi.length,numDirLightShadows:I.directionalShadowMap.length,numPointLightShadows:I.pointShadowMap.length,numSpotLightShadows:I.spotShadowMap.length,numSpotLightShadowsWithMaps:I.numSpotLightShadowsWithMaps,numLightProbes:I.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:E.dithering,shadowMapEnabled:s.shadowMap.enabled&&J.length>0,shadowMapType:s.shadowMap.type,toneMapping:Tt,useLegacyLights:s._useLegacyLights,decodeVideoTexture:qe&&E.map.isVideoTexture===!0&&Pt.getTransfer(E.map.colorSpace)===Bt,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===zn,flipSided:E.side===mn,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionDerivatives:Le&&E.extensions.derivatives===!0,extensionFragDepth:Le&&E.extensions.fragDepth===!0,extensionDrawBuffers:Le&&E.extensions.drawBuffers===!0,extensionShaderTextureLOD:Le&&E.extensions.shaderTextureLOD===!0,extensionClipCullDistance:Le&&E.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()}}function d(E){let I=[];if(E.shaderID?I.push(E.shaderID):(I.push(E.customVertexShaderID),I.push(E.customFragmentShaderID)),E.defines!==void 0)for(let J in E.defines)I.push(J),I.push(E.defines[J]);return E.isRawShaderMaterial===!1&&(C(I,E),_(I,E),I.push(s.outputColorSpace)),I.push(E.customProgramCacheKey),I.join()}function C(E,I){E.push(I.precision),E.push(I.outputColorSpace),E.push(I.envMapMode),E.push(I.envMapCubeUVHeight),E.push(I.mapUv),E.push(I.alphaMapUv),E.push(I.lightMapUv),E.push(I.aoMapUv),E.push(I.bumpMapUv),E.push(I.normalMapUv),E.push(I.displacementMapUv),E.push(I.emissiveMapUv),E.push(I.metalnessMapUv),E.push(I.roughnessMapUv),E.push(I.anisotropyMapUv),E.push(I.clearcoatMapUv),E.push(I.clearcoatNormalMapUv),E.push(I.clearcoatRoughnessMapUv),E.push(I.iridescenceMapUv),E.push(I.iridescenceThicknessMapUv),E.push(I.sheenColorMapUv),E.push(I.sheenRoughnessMapUv),E.push(I.specularMapUv),E.push(I.specularColorMapUv),E.push(I.specularIntensityMapUv),E.push(I.transmissionMapUv),E.push(I.thicknessMapUv),E.push(I.combine),E.push(I.fogExp2),E.push(I.sizeAttenuation),E.push(I.morphTargetsCount),E.push(I.morphAttributeCount),E.push(I.numDirLights),E.push(I.numPointLights),E.push(I.numSpotLights),E.push(I.numSpotLightMaps),E.push(I.numHemiLights),E.push(I.numRectAreaLights),E.push(I.numDirLightShadows),E.push(I.numPointLightShadows),E.push(I.numSpotLightShadows),E.push(I.numSpotLightShadowsWithMaps),E.push(I.numLightProbes),E.push(I.shadowMapType),E.push(I.toneMapping),E.push(I.numClippingPlanes),E.push(I.numClipIntersection),E.push(I.depthPacking)}function _(E,I){a.disableAll(),I.isWebGL2&&a.enable(0),I.supportsVertexTextures&&a.enable(1),I.instancing&&a.enable(2),I.instancingColor&&a.enable(3),I.matcap&&a.enable(4),I.envMap&&a.enable(5),I.normalMapObjectSpace&&a.enable(6),I.normalMapTangentSpace&&a.enable(7),I.clearcoat&&a.enable(8),I.iridescence&&a.enable(9),I.alphaTest&&a.enable(10),I.vertexColors&&a.enable(11),I.vertexAlphas&&a.enable(12),I.vertexUv1s&&a.enable(13),I.vertexUv2s&&a.enable(14),I.vertexUv3s&&a.enable(15),I.vertexTangents&&a.enable(16),I.anisotropy&&a.enable(17),I.alphaHash&&a.enable(18),I.batching&&a.enable(19),E.push(a.mask),a.disableAll(),I.fog&&a.enable(0),I.useFog&&a.enable(1),I.flatShading&&a.enable(2),I.logarithmicDepthBuffer&&a.enable(3),I.skinning&&a.enable(4),I.morphTargets&&a.enable(5),I.morphNormals&&a.enable(6),I.morphColors&&a.enable(7),I.premultipliedAlpha&&a.enable(8),I.shadowMapEnabled&&a.enable(9),I.useLegacyLights&&a.enable(10),I.doubleSided&&a.enable(11),I.flipSided&&a.enable(12),I.useDepthPacking&&a.enable(13),I.dithering&&a.enable(14),I.transmission&&a.enable(15),I.sheen&&a.enable(16),I.opaque&&a.enable(17),I.pointsUvs&&a.enable(18),I.decodeVideoTexture&&a.enable(19),E.push(a.mask)}function T(E){let I=x[E.type],J;if(I){let ce=Ci[I];J=cs.clone(ce.uniforms)}else J=E.uniforms;return J}function B(E,I){let J;for(let ce=0,be=c.length;ce<be;ce++){let k=c[ce];if(k.cacheKey===I){J=k,++J.usedTimes;break}}return J===void 0&&(J=new T0(s,I,E,r),c.push(J)),J}function N(E){if(--E.usedTimes===0){let I=c.indexOf(E);c[I]=c[c.length-1],c.pop(),E.destroy()}}function R(E){l.remove(E)}function $(){l.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:T,acquireProgram:B,releaseProgram:N,releaseShaderCache:R,programs:c,dispose:$}}function C0(){let s=new WeakMap;function e(r){let o=s.get(r);return o===void 0&&(o={},s.set(r,o)),o}function t(r){s.delete(r)}function n(r,o,a){s.get(r)[o]=a}function i(){s=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function P0(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function su(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function ru(){let s=[],e=0,t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function o(u,f,p,x,y,m){let d=s[e];return d===void 0?(d={id:u.id,object:u,geometry:f,material:p,groupOrder:x,renderOrder:u.renderOrder,z:y,group:m},s[e]=d):(d.id=u.id,d.object=u,d.geometry=f,d.material=p,d.groupOrder=x,d.renderOrder=u.renderOrder,d.z=y,d.group=m),e++,d}function a(u,f,p,x,y,m){let d=o(u,f,p,x,y,m);p.transmission>0?n.push(d):p.transparent===!0?i.push(d):t.push(d)}function l(u,f,p,x,y,m){let d=o(u,f,p,x,y,m);p.transmission>0?n.unshift(d):p.transparent===!0?i.unshift(d):t.unshift(d)}function c(u,f){t.length>1&&t.sort(u||P0),n.length>1&&n.sort(f||su),i.length>1&&i.sort(f||su)}function h(){for(let u=e,f=s.length;u<f;u++){let p=s[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:a,unshift:l,finish:h,sort:c}}function I0(){let s=new WeakMap;function e(n,i){let r=s.get(n),o;return r===void 0?(o=new ru,s.set(n,[o])):i>=r.length?(o=new ru,r.push(o)):o=r[i],o}function t(){s=new WeakMap}return{get:e,dispose:t}}function L0(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new L,color:new Je};break;case"SpotLight":t={position:new L,direction:new L,color:new Je,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new L,color:new Je,distance:0,decay:0};break;case"HemisphereLight":t={direction:new L,skyColor:new Je,groundColor:new Je};break;case"RectAreaLight":t={color:new Je,position:new L,halfWidth:new L,halfHeight:new L};break}return s[e.id]=t,t}}}function U0(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ee};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ee};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ee,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}var D0=0;function N0(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function z0(s,e){let t=new L0,n=U0(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)i.probe.push(new L);let r=new L,o=new vt,a=new vt;function l(h,u){let f=0,p=0,x=0;for(let ce=0;ce<9;ce++)i.probe[ce].set(0,0,0);let y=0,m=0,d=0,C=0,_=0,T=0,B=0,N=0,R=0,$=0,E=0;h.sort(N0);let I=u===!0?Math.PI:1;for(let ce=0,be=h.length;ce<be;ce++){let k=h[ce],Y=k.color,ie=k.intensity,P=k.distance,oe=k.shadow&&k.shadow.map?k.shadow.map.texture:null;if(k.isAmbientLight)f+=Y.r*ie*I,p+=Y.g*ie*I,x+=Y.b*ie*I;else if(k.isLightProbe){for(let le=0;le<9;le++)i.probe[le].addScaledVector(k.sh.coefficients[le],ie);E++}else if(k.isDirectionalLight){let le=t.get(k);if(le.color.copy(k.color).multiplyScalar(k.intensity*I),k.castShadow){let fe=k.shadow,me=n.get(k);me.shadowBias=fe.bias,me.shadowNormalBias=fe.normalBias,me.shadowRadius=fe.radius,me.shadowMapSize=fe.mapSize,i.directionalShadow[y]=me,i.directionalShadowMap[y]=oe,i.directionalShadowMatrix[y]=k.shadow.matrix,T++}i.directional[y]=le,y++}else if(k.isSpotLight){let le=t.get(k);le.position.setFromMatrixPosition(k.matrixWorld),le.color.copy(Y).multiplyScalar(ie*I),le.distance=P,le.coneCos=Math.cos(k.angle),le.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),le.decay=k.decay,i.spot[d]=le;let fe=k.shadow;if(k.map&&(i.spotLightMap[R]=k.map,R++,fe.updateMatrices(k),k.castShadow&&$++),i.spotLightMatrix[d]=fe.matrix,k.castShadow){let me=n.get(k);me.shadowBias=fe.bias,me.shadowNormalBias=fe.normalBias,me.shadowRadius=fe.radius,me.shadowMapSize=fe.mapSize,i.spotShadow[d]=me,i.spotShadowMap[d]=oe,N++}d++}else if(k.isRectAreaLight){let le=t.get(k);le.color.copy(Y).multiplyScalar(ie),le.halfWidth.set(k.width*.5,0,0),le.halfHeight.set(0,k.height*.5,0),i.rectArea[C]=le,C++}else if(k.isPointLight){let le=t.get(k);if(le.color.copy(k.color).multiplyScalar(k.intensity*I),le.distance=k.distance,le.decay=k.decay,k.castShadow){let fe=k.shadow,me=n.get(k);me.shadowBias=fe.bias,me.shadowNormalBias=fe.normalBias,me.shadowRadius=fe.radius,me.shadowMapSize=fe.mapSize,me.shadowCameraNear=fe.camera.near,me.shadowCameraFar=fe.camera.far,i.pointShadow[m]=me,i.pointShadowMap[m]=oe,i.pointShadowMatrix[m]=k.shadow.matrix,B++}i.point[m]=le,m++}else if(k.isHemisphereLight){let le=t.get(k);le.skyColor.copy(k.color).multiplyScalar(ie*I),le.groundColor.copy(k.groundColor).multiplyScalar(ie*I),i.hemi[_]=le,_++}}C>0&&(e.isWebGL2?s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Oe.LTC_FLOAT_1,i.rectAreaLTC2=Oe.LTC_FLOAT_2):(i.rectAreaLTC1=Oe.LTC_HALF_1,i.rectAreaLTC2=Oe.LTC_HALF_2):s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Oe.LTC_FLOAT_1,i.rectAreaLTC2=Oe.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=Oe.LTC_HALF_1,i.rectAreaLTC2=Oe.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=f,i.ambient[1]=p,i.ambient[2]=x;let J=i.hash;(J.directionalLength!==y||J.pointLength!==m||J.spotLength!==d||J.rectAreaLength!==C||J.hemiLength!==_||J.numDirectionalShadows!==T||J.numPointShadows!==B||J.numSpotShadows!==N||J.numSpotMaps!==R||J.numLightProbes!==E)&&(i.directional.length=y,i.spot.length=d,i.rectArea.length=C,i.point.length=m,i.hemi.length=_,i.directionalShadow.length=T,i.directionalShadowMap.length=T,i.pointShadow.length=B,i.pointShadowMap.length=B,i.spotShadow.length=N,i.spotShadowMap.length=N,i.directionalShadowMatrix.length=T,i.pointShadowMatrix.length=B,i.spotLightMatrix.length=N+R-$,i.spotLightMap.length=R,i.numSpotLightShadowsWithMaps=$,i.numLightProbes=E,J.directionalLength=y,J.pointLength=m,J.spotLength=d,J.rectAreaLength=C,J.hemiLength=_,J.numDirectionalShadows=T,J.numPointShadows=B,J.numSpotShadows=N,J.numSpotMaps=R,J.numLightProbes=E,i.version=D0++)}function c(h,u){let f=0,p=0,x=0,y=0,m=0,d=u.matrixWorldInverse;for(let C=0,_=h.length;C<_;C++){let T=h[C];if(T.isDirectionalLight){let B=i.directional[f];B.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),B.direction.sub(r),B.direction.transformDirection(d),f++}else if(T.isSpotLight){let B=i.spot[x];B.position.setFromMatrixPosition(T.matrixWorld),B.position.applyMatrix4(d),B.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),B.direction.sub(r),B.direction.transformDirection(d),x++}else if(T.isRectAreaLight){let B=i.rectArea[y];B.position.setFromMatrixPosition(T.matrixWorld),B.position.applyMatrix4(d),a.identity(),o.copy(T.matrixWorld),o.premultiply(d),a.extractRotation(o),B.halfWidth.set(T.width*.5,0,0),B.halfHeight.set(0,T.height*.5,0),B.halfWidth.applyMatrix4(a),B.halfHeight.applyMatrix4(a),y++}else if(T.isPointLight){let B=i.point[p];B.position.setFromMatrixPosition(T.matrixWorld),B.position.applyMatrix4(d),p++}else if(T.isHemisphereLight){let B=i.hemi[m];B.direction.setFromMatrixPosition(T.matrixWorld),B.direction.transformDirection(d),m++}}}return{setup:l,setupView:c,state:i}}function ou(s,e){let t=new z0(s,e),n=[],i=[];function r(){n.length=0,i.length=0}function o(u){n.push(u)}function a(u){i.push(u)}function l(u){t.setup(n,u)}function c(u){t.setupView(n,u)}return{init:r,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function O0(s,e){let t=new WeakMap;function n(r,o=0){let a=t.get(r),l;return a===void 0?(l=new ou(s,e),t.set(r,[l])):o>=a.length?(l=new ou(s,e),a.push(l)):l=a[o],l}function i(){t=new WeakMap}return{get:n,dispose:i}}var Yl=class extends as{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Xf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Zl=class extends as{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},F0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,B0=`uniform sampler2D shadow_pass;
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
}`;function H0(s,e,t){let n=new Or,i=new Ee,r=new Ee,o=new Jt,a=new Yl({depthPacking:qf}),l=new Zl,c={},h=t.maxTextureSize,u={[rs]:mn,[mn]:rs,[zn]:zn},f=new nn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ee},radius:{value:4}},vertexShader:F0,fragmentShader:B0}),p=f.clone();p.defines.HORIZONTAL_PASS=1;let x=new bn;x.setAttribute("position",new En(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new Ue(x,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=yu;let d=this.type;this.render=function(N,R,$){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||N.length===0)return;let E=s.getRenderTarget(),I=s.getActiveCubeFace(),J=s.getActiveMipmapLevel(),ce=s.state;ce.setBlending(Pi),ce.buffers.color.setClear(1,1,1,1),ce.buffers.depth.setTest(!0),ce.setScissorTest(!1);let be=d!==Bi&&this.type===Bi,k=d===Bi&&this.type!==Bi;for(let Y=0,ie=N.length;Y<ie;Y++){let P=N[Y],oe=P.shadow;if(oe===void 0){console.warn("THREE.WebGLShadowMap:",P,"has no shadow.");continue}if(oe.autoUpdate===!1&&oe.needsUpdate===!1)continue;i.copy(oe.mapSize);let le=oe.getFrameExtents();if(i.multiply(le),r.copy(oe.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/le.x),i.x=r.x*le.x,oe.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/le.y),i.y=r.y*le.y,oe.mapSize.y=r.y)),oe.map===null||be===!0||k===!0){let me=this.type!==Bi?{minFilter:Vn,magFilter:Vn}:{};oe.map!==null&&oe.map.dispose(),oe.map=new Gn(i.x,i.y,me),oe.map.texture.name=P.name+".shadowMap",oe.camera.updateProjectionMatrix()}s.setRenderTarget(oe.map),s.clear();let fe=oe.getViewportCount();for(let me=0;me<fe;me++){let Ae=oe.getViewport(me);o.set(r.x*Ae.x,r.y*Ae.y,r.x*Ae.z,r.y*Ae.w),ce.viewport(o),oe.updateMatrices(P,me),n=oe.getFrustum(),T(R,$,oe.camera,P,this.type)}oe.isPointLightShadow!==!0&&this.type===Bi&&C(oe,$),oe.needsUpdate=!1}d=this.type,m.needsUpdate=!1,s.setRenderTarget(E,I,J)};function C(N,R){let $=e.update(y);f.defines.VSM_SAMPLES!==N.blurSamples&&(f.defines.VSM_SAMPLES=N.blurSamples,p.defines.VSM_SAMPLES=N.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),N.mapPass===null&&(N.mapPass=new Gn(i.x,i.y)),f.uniforms.shadow_pass.value=N.map.texture,f.uniforms.resolution.value=N.mapSize,f.uniforms.radius.value=N.radius,s.setRenderTarget(N.mapPass),s.clear(),s.renderBufferDirect(R,null,$,f,y,null),p.uniforms.shadow_pass.value=N.mapPass.texture,p.uniforms.resolution.value=N.mapSize,p.uniforms.radius.value=N.radius,s.setRenderTarget(N.map),s.clear(),s.renderBufferDirect(R,null,$,p,y,null)}function _(N,R,$,E){let I=null,J=$.isPointLight===!0?N.customDistanceMaterial:N.customDepthMaterial;if(J!==void 0)I=J;else if(I=$.isPointLight===!0?l:a,s.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){let ce=I.uuid,be=R.uuid,k=c[ce];k===void 0&&(k={},c[ce]=k);let Y=k[be];Y===void 0&&(Y=I.clone(),k[be]=Y,R.addEventListener("dispose",B)),I=Y}if(I.visible=R.visible,I.wireframe=R.wireframe,E===Bi?I.side=R.shadowSide!==null?R.shadowSide:R.side:I.side=R.shadowSide!==null?R.shadowSide:u[R.side],I.alphaMap=R.alphaMap,I.alphaTest=R.alphaTest,I.map=R.map,I.clipShadows=R.clipShadows,I.clippingPlanes=R.clippingPlanes,I.clipIntersection=R.clipIntersection,I.displacementMap=R.displacementMap,I.displacementScale=R.displacementScale,I.displacementBias=R.displacementBias,I.wireframeLinewidth=R.wireframeLinewidth,I.linewidth=R.linewidth,$.isPointLight===!0&&I.isMeshDistanceMaterial===!0){let ce=s.properties.get(I);ce.light=$}return I}function T(N,R,$,E,I){if(N.visible===!1)return;if(N.layers.test(R.layers)&&(N.isMesh||N.isLine||N.isPoints)&&(N.castShadow||N.receiveShadow&&I===Bi)&&(!N.frustumCulled||n.intersectsObject(N))){N.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,N.matrixWorld);let be=e.update(N),k=N.material;if(Array.isArray(k)){let Y=be.groups;for(let ie=0,P=Y.length;ie<P;ie++){let oe=Y[ie],le=k[oe.materialIndex];if(le&&le.visible){let fe=_(N,le,E,I);N.onBeforeShadow(s,N,R,$,be,fe,oe),s.renderBufferDirect($,null,be,fe,N,oe),N.onAfterShadow(s,N,R,$,be,fe,oe)}}}else if(k.visible){let Y=_(N,k,E,I);N.onBeforeShadow(s,N,R,$,be,Y,null),s.renderBufferDirect($,null,be,Y,N,null),N.onAfterShadow(s,N,R,$,be,Y,null)}}let ce=N.children;for(let be=0,k=ce.length;be<k;be++)T(ce[be],R,$,E,I)}function B(N){N.target.removeEventListener("dispose",B);for(let $ in c){let E=c[$],I=N.target.uuid;I in E&&(E[I].dispose(),delete E[I])}}}function k0(s,e,t){let n=t.isWebGL2;function i(){let F=!1,Be=new Jt,Le=null,tt=new Jt(0,0,0,0);return{setMask:function(it){Le!==it&&!F&&(s.colorMask(it,it,it,it),Le=it)},setLocked:function(it){F=it},setClear:function(it,Mt,Tt,kt,Vt){Vt===!0&&(it*=kt,Mt*=kt,Tt*=kt),Be.set(it,Mt,Tt,kt),tt.equals(Be)===!1&&(s.clearColor(it,Mt,Tt,kt),tt.copy(Be))},reset:function(){F=!1,Le=null,tt.set(-1,0,0,0)}}}function r(){let F=!1,Be=null,Le=null,tt=null;return{setTest:function(it){it?at(s.DEPTH_TEST):qe(s.DEPTH_TEST)},setMask:function(it){Be!==it&&!F&&(s.depthMask(it),Be=it)},setFunc:function(it){if(Le!==it){switch(it){case Tf:s.depthFunc(s.NEVER);break;case Af:s.depthFunc(s.ALWAYS);break;case Rf:s.depthFunc(s.LESS);break;case Oo:s.depthFunc(s.LEQUAL);break;case Cf:s.depthFunc(s.EQUAL);break;case Pf:s.depthFunc(s.GEQUAL);break;case If:s.depthFunc(s.GREATER);break;case Lf:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Le=it}},setLocked:function(it){F=it},setClear:function(it){tt!==it&&(s.clearDepth(it),tt=it)},reset:function(){F=!1,Be=null,Le=null,tt=null}}}function o(){let F=!1,Be=null,Le=null,tt=null,it=null,Mt=null,Tt=null,kt=null,Vt=null;return{setTest:function(xt){F||(xt?at(s.STENCIL_TEST):qe(s.STENCIL_TEST))},setMask:function(xt){Be!==xt&&!F&&(s.stencilMask(xt),Be=xt)},setFunc:function(xt,qt,Tn){(Le!==xt||tt!==qt||it!==Tn)&&(s.stencilFunc(xt,qt,Tn),Le=xt,tt=qt,it=Tn)},setOp:function(xt,qt,Tn){(Mt!==xt||Tt!==qt||kt!==Tn)&&(s.stencilOp(xt,qt,Tn),Mt=xt,Tt=qt,kt=Tn)},setLocked:function(xt){F=xt},setClear:function(xt){Vt!==xt&&(s.clearStencil(xt),Vt=xt)},reset:function(){F=!1,Be=null,Le=null,tt=null,it=null,Mt=null,Tt=null,kt=null,Vt=null}}}let a=new i,l=new r,c=new o,h=new WeakMap,u=new WeakMap,f={},p={},x=new WeakMap,y=[],m=null,d=!1,C=null,_=null,T=null,B=null,N=null,R=null,$=null,E=new Je(0,0,0),I=0,J=!1,ce=null,be=null,k=null,Y=null,ie=null,P=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),oe=!1,le=0,fe=s.getParameter(s.VERSION);fe.indexOf("WebGL")!==-1?(le=parseFloat(/^WebGL (\d)/.exec(fe)[1]),oe=le>=1):fe.indexOf("OpenGL ES")!==-1&&(le=parseFloat(/^OpenGL ES (\d)/.exec(fe)[1]),oe=le>=2);let me=null,Ae={},se=s.getParameter(s.SCISSOR_BOX),xe=s.getParameter(s.VIEWPORT),Ce=new Jt().fromArray(se),Fe=new Jt().fromArray(xe);function Ge(F,Be,Le,tt){let it=new Uint8Array(4),Mt=s.createTexture();s.bindTexture(F,Mt),s.texParameteri(F,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(F,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Tt=0;Tt<Le;Tt++)n&&(F===s.TEXTURE_3D||F===s.TEXTURE_2D_ARRAY)?s.texImage3D(Be,0,s.RGBA,1,1,tt,0,s.RGBA,s.UNSIGNED_BYTE,it):s.texImage2D(Be+Tt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,it);return Mt}let et={};et[s.TEXTURE_2D]=Ge(s.TEXTURE_2D,s.TEXTURE_2D,1),et[s.TEXTURE_CUBE_MAP]=Ge(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(et[s.TEXTURE_2D_ARRAY]=Ge(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),et[s.TEXTURE_3D]=Ge(s.TEXTURE_3D,s.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),at(s.DEPTH_TEST),l.setFunc(Oo),de(!1),b(kc),at(s.CULL_FACE),K(Pi);function at(F){f[F]!==!0&&(s.enable(F),f[F]=!0)}function qe(F){f[F]!==!1&&(s.disable(F),f[F]=!1)}function lt(F,Be){return p[F]!==Be?(s.bindFramebuffer(F,Be),p[F]=Be,n&&(F===s.DRAW_FRAMEBUFFER&&(p[s.FRAMEBUFFER]=Be),F===s.FRAMEBUFFER&&(p[s.DRAW_FRAMEBUFFER]=Be)),!0):!1}function O(F,Be){let Le=y,tt=!1;if(F)if(Le=x.get(Be),Le===void 0&&(Le=[],x.set(Be,Le)),F.isWebGLMultipleRenderTargets){let it=F.texture;if(Le.length!==it.length||Le[0]!==s.COLOR_ATTACHMENT0){for(let Mt=0,Tt=it.length;Mt<Tt;Mt++)Le[Mt]=s.COLOR_ATTACHMENT0+Mt;Le.length=it.length,tt=!0}}else Le[0]!==s.COLOR_ATTACHMENT0&&(Le[0]=s.COLOR_ATTACHMENT0,tt=!0);else Le[0]!==s.BACK&&(Le[0]=s.BACK,tt=!0);tt&&(t.isWebGL2?s.drawBuffers(Le):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(Le))}function ee(F){return m!==F?(s.useProgram(F),m=F,!0):!1}let te={[vs]:s.FUNC_ADD,[uf]:s.FUNC_SUBTRACT,[ff]:s.FUNC_REVERSE_SUBTRACT};if(n)te[Wc]=s.MIN,te[Xc]=s.MAX;else{let F=e.get("EXT_blend_minmax");F!==null&&(te[Wc]=F.MIN_EXT,te[Xc]=F.MAX_EXT)}let V={[df]:s.ZERO,[pf]:s.ONE,[mf]:s.SRC_COLOR,[Al]:s.SRC_ALPHA,[Mf]:s.SRC_ALPHA_SATURATE,[vf]:s.DST_COLOR,[xf]:s.DST_ALPHA,[gf]:s.ONE_MINUS_SRC_COLOR,[Rl]:s.ONE_MINUS_SRC_ALPHA,[yf]:s.ONE_MINUS_DST_COLOR,[_f]:s.ONE_MINUS_DST_ALPHA,[Sf]:s.CONSTANT_COLOR,[Ef]:s.ONE_MINUS_CONSTANT_COLOR,[bf]:s.CONSTANT_ALPHA,[wf]:s.ONE_MINUS_CONSTANT_ALPHA};function K(F,Be,Le,tt,it,Mt,Tt,kt,Vt,xt){if(F===Pi){d===!0&&(qe(s.BLEND),d=!1);return}if(d===!1&&(at(s.BLEND),d=!0),F!==hf){if(F!==C||xt!==J){if((_!==vs||N!==vs)&&(s.blendEquation(s.FUNC_ADD),_=vs,N=vs),xt)switch(F){case sr:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case On:s.blendFunc(s.ONE,s.ONE);break;case Vc:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Gc:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case sr:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case On:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Vc:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Gc:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}T=null,B=null,R=null,$=null,E.set(0,0,0),I=0,C=F,J=xt}return}it=it||Be,Mt=Mt||Le,Tt=Tt||tt,(Be!==_||it!==N)&&(s.blendEquationSeparate(te[Be],te[it]),_=Be,N=it),(Le!==T||tt!==B||Mt!==R||Tt!==$)&&(s.blendFuncSeparate(V[Le],V[tt],V[Mt],V[Tt]),T=Le,B=tt,R=Mt,$=Tt),(kt.equals(E)===!1||Vt!==I)&&(s.blendColor(kt.r,kt.g,kt.b,Vt),E.copy(kt),I=Vt),C=F,J=!1}function _e(F,Be){F.side===zn?qe(s.CULL_FACE):at(s.CULL_FACE);let Le=F.side===mn;Be&&(Le=!Le),de(Le),F.blending===sr&&F.transparent===!1?K(Pi):K(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),l.setFunc(F.depthFunc),l.setTest(F.depthTest),l.setMask(F.depthWrite),a.setMask(F.colorWrite);let tt=F.stencilWrite;c.setTest(tt),tt&&(c.setMask(F.stencilWriteMask),c.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),c.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),G(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?at(s.SAMPLE_ALPHA_TO_COVERAGE):qe(s.SAMPLE_ALPHA_TO_COVERAGE)}function de(F){ce!==F&&(F?s.frontFace(s.CW):s.frontFace(s.CCW),ce=F)}function b(F){F!==af?(at(s.CULL_FACE),F!==be&&(F===kc?s.cullFace(s.BACK):F===lf?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):qe(s.CULL_FACE),be=F}function M(F){F!==k&&(oe&&s.lineWidth(F),k=F)}function G(F,Be,Le){F?(at(s.POLYGON_OFFSET_FILL),(Y!==Be||ie!==Le)&&(s.polygonOffset(Be,Le),Y=Be,ie=Le)):qe(s.POLYGON_OFFSET_FILL)}function re(F){F?at(s.SCISSOR_TEST):qe(s.SCISSOR_TEST)}function pe(F){F===void 0&&(F=s.TEXTURE0+P-1),me!==F&&(s.activeTexture(F),me=F)}function ge(F,Be,Le){Le===void 0&&(me===null?Le=s.TEXTURE0+P-1:Le=me);let tt=Ae[Le];tt===void 0&&(tt={type:void 0,texture:void 0},Ae[Le]=tt),(tt.type!==F||tt.texture!==Be)&&(me!==Le&&(s.activeTexture(Le),me=Le),s.bindTexture(F,Be||et[F]),tt.type=F,tt.texture=Be)}function ze(){let F=Ae[me];F!==void 0&&F.type!==void 0&&(s.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function Se(){try{s.compressedTexImage2D.apply(s,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function De(){try{s.compressedTexImage3D.apply(s,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function $e(){try{s.texSubImage2D.apply(s,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ht(){try{s.texSubImage3D.apply(s,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ve(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function yt(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ke(){try{s.texStorage2D.apply(s,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function st(){try{s.texStorage3D.apply(s,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Pe(){try{s.texImage2D.apply(s,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ke(){try{s.texImage3D.apply(s,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function rt(F){Ce.equals(F)===!1&&(s.scissor(F.x,F.y,F.z,F.w),Ce.copy(F))}function bt(F){Fe.equals(F)===!1&&(s.viewport(F.x,F.y,F.z,F.w),Fe.copy(F))}function Lt(F,Be){let Le=u.get(Be);Le===void 0&&(Le=new WeakMap,u.set(Be,Le));let tt=Le.get(F);tt===void 0&&(tt=s.getUniformBlockIndex(Be,F.name),Le.set(F,tt))}function Ie(F,Be){let tt=u.get(Be).get(F);h.get(Be)!==tt&&(s.uniformBlockBinding(Be,tt,F.__bindingPointIndex),h.set(Be,tt))}function we(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),n===!0&&(s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),f={},me=null,Ae={},p={},x=new WeakMap,y=[],m=null,d=!1,C=null,_=null,T=null,B=null,N=null,R=null,$=null,E=new Je(0,0,0),I=0,J=!1,ce=null,be=null,k=null,Y=null,ie=null,Ce.set(0,0,s.canvas.width,s.canvas.height),Fe.set(0,0,s.canvas.width,s.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:at,disable:qe,bindFramebuffer:lt,drawBuffers:O,useProgram:ee,setBlending:K,setMaterial:_e,setFlipSided:de,setCullFace:b,setLineWidth:M,setPolygonOffset:G,setScissorTest:re,activeTexture:pe,bindTexture:ge,unbindTexture:ze,compressedTexImage2D:Se,compressedTexImage3D:De,texImage2D:Pe,texImage3D:ke,updateUBOMapping:Lt,uniformBlockBinding:Ie,texStorage2D:Ke,texStorage3D:st,texSubImage2D:$e,texSubImage3D:ht,compressedTexSubImage2D:ve,compressedTexSubImage3D:yt,scissor:rt,viewport:bt,reset:we}}function V0(s,e,t,n,i,r,o){let a=i.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap,u,f=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(b,M){return p?new OffscreenCanvas(b,M):Wo("canvas")}function y(b,M,G,re){let pe=1;if((b.width>re||b.height>re)&&(pe=re/Math.max(b.width,b.height)),pe<1||M===!0)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap){let ge=M?zl:Math.floor,ze=ge(pe*b.width),Se=ge(pe*b.height);u===void 0&&(u=x(ze,Se));let De=G?x(ze,Se):u;return De.width=ze,De.height=Se,De.getContext("2d").drawImage(b,0,0,ze,Se),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+b.width+"x"+b.height+") to ("+ze+"x"+Se+")."),De}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+b.width+"x"+b.height+")."),b;return b}function m(b){return Eh(b.width)&&Eh(b.height)}function d(b){return a?!1:b.wrapS!==Si||b.wrapT!==Si||b.minFilter!==Vn&&b.minFilter!==Jn}function C(b,M){return b.generateMipmaps&&M&&b.minFilter!==Vn&&b.minFilter!==Jn}function _(b){s.generateMipmap(b)}function T(b,M,G,re,pe=!1){if(a===!1)return M;if(b!==null){if(s[b]!==void 0)return s[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let ge=M;if(M===s.RED&&(G===s.FLOAT&&(ge=s.R32F),G===s.HALF_FLOAT&&(ge=s.R16F),G===s.UNSIGNED_BYTE&&(ge=s.R8)),M===s.RED_INTEGER&&(G===s.UNSIGNED_BYTE&&(ge=s.R8UI),G===s.UNSIGNED_SHORT&&(ge=s.R16UI),G===s.UNSIGNED_INT&&(ge=s.R32UI),G===s.BYTE&&(ge=s.R8I),G===s.SHORT&&(ge=s.R16I),G===s.INT&&(ge=s.R32I)),M===s.RG&&(G===s.FLOAT&&(ge=s.RG32F),G===s.HALF_FLOAT&&(ge=s.RG16F),G===s.UNSIGNED_BYTE&&(ge=s.RG8)),M===s.RGBA){let ze=pe?Ho:Pt.getTransfer(re);G===s.FLOAT&&(ge=s.RGBA32F),G===s.HALF_FLOAT&&(ge=s.RGBA16F),G===s.UNSIGNED_BYTE&&(ge=ze===Bt?s.SRGB8_ALPHA8:s.RGBA8),G===s.UNSIGNED_SHORT_4_4_4_4&&(ge=s.RGBA4),G===s.UNSIGNED_SHORT_5_5_5_1&&(ge=s.RGB5_A1)}return(ge===s.R16F||ge===s.R32F||ge===s.RG16F||ge===s.RG32F||ge===s.RGBA16F||ge===s.RGBA32F)&&e.get("EXT_color_buffer_float"),ge}function B(b,M,G){return C(b,G)===!0||b.isFramebufferTexture&&b.minFilter!==Vn&&b.minFilter!==Jn?Math.log2(Math.max(M.width,M.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?M.mipmaps.length:1}function N(b){return b===Vn||b===qc||b===Wa?s.NEAREST:s.LINEAR}function R(b){let M=b.target;M.removeEventListener("dispose",R),E(M),M.isVideoTexture&&h.delete(M)}function $(b){let M=b.target;M.removeEventListener("dispose",$),J(M)}function E(b){let M=n.get(b);if(M.__webglInit===void 0)return;let G=b.source,re=f.get(G);if(re){let pe=re[M.__cacheKey];pe.usedTimes--,pe.usedTimes===0&&I(b),Object.keys(re).length===0&&f.delete(G)}n.remove(b)}function I(b){let M=n.get(b);s.deleteTexture(M.__webglTexture);let G=b.source,re=f.get(G);delete re[M.__cacheKey],o.memory.textures--}function J(b){let M=b.texture,G=n.get(b),re=n.get(M);if(re.__webglTexture!==void 0&&(s.deleteTexture(re.__webglTexture),o.memory.textures--),b.depthTexture&&b.depthTexture.dispose(),b.isWebGLCubeRenderTarget)for(let pe=0;pe<6;pe++){if(Array.isArray(G.__webglFramebuffer[pe]))for(let ge=0;ge<G.__webglFramebuffer[pe].length;ge++)s.deleteFramebuffer(G.__webglFramebuffer[pe][ge]);else s.deleteFramebuffer(G.__webglFramebuffer[pe]);G.__webglDepthbuffer&&s.deleteRenderbuffer(G.__webglDepthbuffer[pe])}else{if(Array.isArray(G.__webglFramebuffer))for(let pe=0;pe<G.__webglFramebuffer.length;pe++)s.deleteFramebuffer(G.__webglFramebuffer[pe]);else s.deleteFramebuffer(G.__webglFramebuffer);if(G.__webglDepthbuffer&&s.deleteRenderbuffer(G.__webglDepthbuffer),G.__webglMultisampledFramebuffer&&s.deleteFramebuffer(G.__webglMultisampledFramebuffer),G.__webglColorRenderbuffer)for(let pe=0;pe<G.__webglColorRenderbuffer.length;pe++)G.__webglColorRenderbuffer[pe]&&s.deleteRenderbuffer(G.__webglColorRenderbuffer[pe]);G.__webglDepthRenderbuffer&&s.deleteRenderbuffer(G.__webglDepthRenderbuffer)}if(b.isWebGLMultipleRenderTargets)for(let pe=0,ge=M.length;pe<ge;pe++){let ze=n.get(M[pe]);ze.__webglTexture&&(s.deleteTexture(ze.__webglTexture),o.memory.textures--),n.remove(M[pe])}n.remove(M),n.remove(b)}let ce=0;function be(){ce=0}function k(){let b=ce;return b>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+i.maxTextures),ce+=1,b}function Y(b){let M=[];return M.push(b.wrapS),M.push(b.wrapT),M.push(b.wrapR||0),M.push(b.magFilter),M.push(b.minFilter),M.push(b.anisotropy),M.push(b.internalFormat),M.push(b.format),M.push(b.type),M.push(b.generateMipmaps),M.push(b.premultiplyAlpha),M.push(b.flipY),M.push(b.unpackAlignment),M.push(b.colorSpace),M.join()}function ie(b,M){let G=n.get(b);if(b.isVideoTexture&&_e(b),b.isRenderTargetTexture===!1&&b.version>0&&G.__version!==b.version){let re=b.image;if(re===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(re.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ce(G,b,M);return}}t.bindTexture(s.TEXTURE_2D,G.__webglTexture,s.TEXTURE0+M)}function P(b,M){let G=n.get(b);if(b.version>0&&G.__version!==b.version){Ce(G,b,M);return}t.bindTexture(s.TEXTURE_2D_ARRAY,G.__webglTexture,s.TEXTURE0+M)}function oe(b,M){let G=n.get(b);if(b.version>0&&G.__version!==b.version){Ce(G,b,M);return}t.bindTexture(s.TEXTURE_3D,G.__webglTexture,s.TEXTURE0+M)}function le(b,M){let G=n.get(b);if(b.version>0&&G.__version!==b.version){Fe(G,b,M);return}t.bindTexture(s.TEXTURE_CUBE_MAP,G.__webglTexture,s.TEXTURE0+M)}let fe={[Il]:s.REPEAT,[Si]:s.CLAMP_TO_EDGE,[Ll]:s.MIRRORED_REPEAT},me={[Vn]:s.NEAREST,[qc]:s.NEAREST_MIPMAP_NEAREST,[Wa]:s.NEAREST_MIPMAP_LINEAR,[Jn]:s.LINEAR,[zf]:s.LINEAR_MIPMAP_NEAREST,[Nr]:s.LINEAR_MIPMAP_LINEAR},Ae={[Zf]:s.NEVER,[ed]:s.ALWAYS,[Jf]:s.LESS,[Lu]:s.LEQUAL,[$f]:s.EQUAL,[jf]:s.GEQUAL,[Kf]:s.GREATER,[Qf]:s.NOTEQUAL};function se(b,M,G){if(G?(s.texParameteri(b,s.TEXTURE_WRAP_S,fe[M.wrapS]),s.texParameteri(b,s.TEXTURE_WRAP_T,fe[M.wrapT]),(b===s.TEXTURE_3D||b===s.TEXTURE_2D_ARRAY)&&s.texParameteri(b,s.TEXTURE_WRAP_R,fe[M.wrapR]),s.texParameteri(b,s.TEXTURE_MAG_FILTER,me[M.magFilter]),s.texParameteri(b,s.TEXTURE_MIN_FILTER,me[M.minFilter])):(s.texParameteri(b,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(b,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE),(b===s.TEXTURE_3D||b===s.TEXTURE_2D_ARRAY)&&s.texParameteri(b,s.TEXTURE_WRAP_R,s.CLAMP_TO_EDGE),(M.wrapS!==Si||M.wrapT!==Si)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(b,s.TEXTURE_MAG_FILTER,N(M.magFilter)),s.texParameteri(b,s.TEXTURE_MIN_FILTER,N(M.minFilter)),M.minFilter!==Vn&&M.minFilter!==Jn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),M.compareFunction&&(s.texParameteri(b,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(b,s.TEXTURE_COMPARE_FUNC,Ae[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){let re=e.get("EXT_texture_filter_anisotropic");if(M.magFilter===Vn||M.minFilter!==Wa&&M.minFilter!==Nr||M.type===is&&e.has("OES_texture_float_linear")===!1||a===!1&&M.type===bi&&e.has("OES_texture_half_float_linear")===!1)return;(M.anisotropy>1||n.get(M).__currentAnisotropy)&&(s.texParameterf(b,re.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,i.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy)}}function xe(b,M){let G=!1;b.__webglInit===void 0&&(b.__webglInit=!0,M.addEventListener("dispose",R));let re=M.source,pe=f.get(re);pe===void 0&&(pe={},f.set(re,pe));let ge=Y(M);if(ge!==b.__cacheKey){pe[ge]===void 0&&(pe[ge]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,G=!0),pe[ge].usedTimes++;let ze=pe[b.__cacheKey];ze!==void 0&&(pe[b.__cacheKey].usedTimes--,ze.usedTimes===0&&I(M)),b.__cacheKey=ge,b.__webglTexture=pe[ge].texture}return G}function Ce(b,M,G){let re=s.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(re=s.TEXTURE_2D_ARRAY),M.isData3DTexture&&(re=s.TEXTURE_3D);let pe=xe(b,M),ge=M.source;t.bindTexture(re,b.__webglTexture,s.TEXTURE0+G);let ze=n.get(ge);if(ge.version!==ze.__version||pe===!0){t.activeTexture(s.TEXTURE0+G);let Se=Pt.getPrimaries(Pt.workingColorSpace),De=M.colorSpace===ai?null:Pt.getPrimaries(M.colorSpace),$e=M.colorSpace===ai||Se===De?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,M.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,M.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,$e);let ht=d(M)&&m(M.image)===!1,ve=y(M.image,ht,!1,i.maxTextureSize);ve=de(M,ve);let yt=m(ve)||a,Ke=r.convert(M.format,M.colorSpace),st=r.convert(M.type),Pe=T(M.internalFormat,Ke,st,M.colorSpace,M.isVideoTexture);se(re,M,yt);let ke,rt=M.mipmaps,bt=a&&M.isVideoTexture!==!0&&Pe!==Cu,Lt=ze.__version===void 0||pe===!0,Ie=B(M,ve,yt);if(M.isDepthTexture)Pe=s.DEPTH_COMPONENT,a?M.type===is?Pe=s.DEPTH_COMPONENT32F:M.type===ns?Pe=s.DEPTH_COMPONENT24:M.type===Ss?Pe=s.DEPTH24_STENCIL8:Pe=s.DEPTH_COMPONENT16:M.type===is&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),M.format===Es&&Pe===s.DEPTH_COMPONENT&&M.type!==Sc&&M.type!==ns&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),M.type=ns,st=r.convert(M.type)),M.format===cr&&Pe===s.DEPTH_COMPONENT&&(Pe=s.DEPTH_STENCIL,M.type!==Ss&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),M.type=Ss,st=r.convert(M.type))),Lt&&(bt?t.texStorage2D(s.TEXTURE_2D,1,Pe,ve.width,ve.height):t.texImage2D(s.TEXTURE_2D,0,Pe,ve.width,ve.height,0,Ke,st,null));else if(M.isDataTexture)if(rt.length>0&&yt){bt&&Lt&&t.texStorage2D(s.TEXTURE_2D,Ie,Pe,rt[0].width,rt[0].height);for(let we=0,F=rt.length;we<F;we++)ke=rt[we],bt?t.texSubImage2D(s.TEXTURE_2D,we,0,0,ke.width,ke.height,Ke,st,ke.data):t.texImage2D(s.TEXTURE_2D,we,Pe,ke.width,ke.height,0,Ke,st,ke.data);M.generateMipmaps=!1}else bt?(Lt&&t.texStorage2D(s.TEXTURE_2D,Ie,Pe,ve.width,ve.height),t.texSubImage2D(s.TEXTURE_2D,0,0,0,ve.width,ve.height,Ke,st,ve.data)):t.texImage2D(s.TEXTURE_2D,0,Pe,ve.width,ve.height,0,Ke,st,ve.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){bt&&Lt&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Ie,Pe,rt[0].width,rt[0].height,ve.depth);for(let we=0,F=rt.length;we<F;we++)ke=rt[we],M.format!==Ei?Ke!==null?bt?t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,we,0,0,0,ke.width,ke.height,ve.depth,Ke,ke.data,0,0):t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,we,Pe,ke.width,ke.height,ve.depth,0,ke.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):bt?t.texSubImage3D(s.TEXTURE_2D_ARRAY,we,0,0,0,ke.width,ke.height,ve.depth,Ke,st,ke.data):t.texImage3D(s.TEXTURE_2D_ARRAY,we,Pe,ke.width,ke.height,ve.depth,0,Ke,st,ke.data)}else{bt&&Lt&&t.texStorage2D(s.TEXTURE_2D,Ie,Pe,rt[0].width,rt[0].height);for(let we=0,F=rt.length;we<F;we++)ke=rt[we],M.format!==Ei?Ke!==null?bt?t.compressedTexSubImage2D(s.TEXTURE_2D,we,0,0,ke.width,ke.height,Ke,ke.data):t.compressedTexImage2D(s.TEXTURE_2D,we,Pe,ke.width,ke.height,0,ke.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):bt?t.texSubImage2D(s.TEXTURE_2D,we,0,0,ke.width,ke.height,Ke,st,ke.data):t.texImage2D(s.TEXTURE_2D,we,Pe,ke.width,ke.height,0,Ke,st,ke.data)}else if(M.isDataArrayTexture)bt?(Lt&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Ie,Pe,ve.width,ve.height,ve.depth),t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,ve.width,ve.height,ve.depth,Ke,st,ve.data)):t.texImage3D(s.TEXTURE_2D_ARRAY,0,Pe,ve.width,ve.height,ve.depth,0,Ke,st,ve.data);else if(M.isData3DTexture)bt?(Lt&&t.texStorage3D(s.TEXTURE_3D,Ie,Pe,ve.width,ve.height,ve.depth),t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,ve.width,ve.height,ve.depth,Ke,st,ve.data)):t.texImage3D(s.TEXTURE_3D,0,Pe,ve.width,ve.height,ve.depth,0,Ke,st,ve.data);else if(M.isFramebufferTexture){if(Lt)if(bt)t.texStorage2D(s.TEXTURE_2D,Ie,Pe,ve.width,ve.height);else{let we=ve.width,F=ve.height;for(let Be=0;Be<Ie;Be++)t.texImage2D(s.TEXTURE_2D,Be,Pe,we,F,0,Ke,st,null),we>>=1,F>>=1}}else if(rt.length>0&&yt){bt&&Lt&&t.texStorage2D(s.TEXTURE_2D,Ie,Pe,rt[0].width,rt[0].height);for(let we=0,F=rt.length;we<F;we++)ke=rt[we],bt?t.texSubImage2D(s.TEXTURE_2D,we,0,0,Ke,st,ke):t.texImage2D(s.TEXTURE_2D,we,Pe,Ke,st,ke);M.generateMipmaps=!1}else bt?(Lt&&t.texStorage2D(s.TEXTURE_2D,Ie,Pe,ve.width,ve.height),t.texSubImage2D(s.TEXTURE_2D,0,0,0,Ke,st,ve)):t.texImage2D(s.TEXTURE_2D,0,Pe,Ke,st,ve);C(M,yt)&&_(re),ze.__version=ge.version,M.onUpdate&&M.onUpdate(M)}b.__version=M.version}function Fe(b,M,G){if(M.image.length!==6)return;let re=xe(b,M),pe=M.source;t.bindTexture(s.TEXTURE_CUBE_MAP,b.__webglTexture,s.TEXTURE0+G);let ge=n.get(pe);if(pe.version!==ge.__version||re===!0){t.activeTexture(s.TEXTURE0+G);let ze=Pt.getPrimaries(Pt.workingColorSpace),Se=M.colorSpace===ai?null:Pt.getPrimaries(M.colorSpace),De=M.colorSpace===ai||ze===Se?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,M.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,M.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,De);let $e=M.isCompressedTexture||M.image[0].isCompressedTexture,ht=M.image[0]&&M.image[0].isDataTexture,ve=[];for(let we=0;we<6;we++)!$e&&!ht?ve[we]=y(M.image[we],!1,!0,i.maxCubemapSize):ve[we]=ht?M.image[we].image:M.image[we],ve[we]=de(M,ve[we]);let yt=ve[0],Ke=m(yt)||a,st=r.convert(M.format,M.colorSpace),Pe=r.convert(M.type),ke=T(M.internalFormat,st,Pe,M.colorSpace),rt=a&&M.isVideoTexture!==!0,bt=ge.__version===void 0||re===!0,Lt=B(M,yt,Ke);se(s.TEXTURE_CUBE_MAP,M,Ke);let Ie;if($e){rt&&bt&&t.texStorage2D(s.TEXTURE_CUBE_MAP,Lt,ke,yt.width,yt.height);for(let we=0;we<6;we++){Ie=ve[we].mipmaps;for(let F=0;F<Ie.length;F++){let Be=Ie[F];M.format!==Ei?st!==null?rt?t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+we,F,0,0,Be.width,Be.height,st,Be.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+we,F,ke,Be.width,Be.height,0,Be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):rt?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+we,F,0,0,Be.width,Be.height,st,Pe,Be.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+we,F,ke,Be.width,Be.height,0,st,Pe,Be.data)}}}else{Ie=M.mipmaps,rt&&bt&&(Ie.length>0&&Lt++,t.texStorage2D(s.TEXTURE_CUBE_MAP,Lt,ke,ve[0].width,ve[0].height));for(let we=0;we<6;we++)if(ht){rt?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+we,0,0,0,ve[we].width,ve[we].height,st,Pe,ve[we].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+we,0,ke,ve[we].width,ve[we].height,0,st,Pe,ve[we].data);for(let F=0;F<Ie.length;F++){let Le=Ie[F].image[we].image;rt?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+we,F+1,0,0,Le.width,Le.height,st,Pe,Le.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+we,F+1,ke,Le.width,Le.height,0,st,Pe,Le.data)}}else{rt?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+we,0,0,0,st,Pe,ve[we]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+we,0,ke,st,Pe,ve[we]);for(let F=0;F<Ie.length;F++){let Be=Ie[F];rt?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+we,F+1,0,0,st,Pe,Be.image[we]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+we,F+1,ke,st,Pe,Be.image[we])}}}C(M,Ke)&&_(s.TEXTURE_CUBE_MAP),ge.__version=pe.version,M.onUpdate&&M.onUpdate(M)}b.__version=M.version}function Ge(b,M,G,re,pe,ge){let ze=r.convert(G.format,G.colorSpace),Se=r.convert(G.type),De=T(G.internalFormat,ze,Se,G.colorSpace);if(!n.get(M).__hasExternalTextures){let ht=Math.max(1,M.width>>ge),ve=Math.max(1,M.height>>ge);pe===s.TEXTURE_3D||pe===s.TEXTURE_2D_ARRAY?t.texImage3D(pe,ge,De,ht,ve,M.depth,0,ze,Se,null):t.texImage2D(pe,ge,De,ht,ve,0,ze,Se,null)}t.bindFramebuffer(s.FRAMEBUFFER,b),K(M)?l.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,re,pe,n.get(G).__webglTexture,0,V(M)):(pe===s.TEXTURE_2D||pe>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&pe<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,re,pe,n.get(G).__webglTexture,ge),t.bindFramebuffer(s.FRAMEBUFFER,null)}function et(b,M,G){if(s.bindRenderbuffer(s.RENDERBUFFER,b),M.depthBuffer&&!M.stencilBuffer){let re=a===!0?s.DEPTH_COMPONENT24:s.DEPTH_COMPONENT16;if(G||K(M)){let pe=M.depthTexture;pe&&pe.isDepthTexture&&(pe.type===is?re=s.DEPTH_COMPONENT32F:pe.type===ns&&(re=s.DEPTH_COMPONENT24));let ge=V(M);K(M)?l.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ge,re,M.width,M.height):s.renderbufferStorageMultisample(s.RENDERBUFFER,ge,re,M.width,M.height)}else s.renderbufferStorage(s.RENDERBUFFER,re,M.width,M.height);s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.RENDERBUFFER,b)}else if(M.depthBuffer&&M.stencilBuffer){let re=V(M);G&&K(M)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,re,s.DEPTH24_STENCIL8,M.width,M.height):K(M)?l.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,re,s.DEPTH24_STENCIL8,M.width,M.height):s.renderbufferStorage(s.RENDERBUFFER,s.DEPTH_STENCIL,M.width,M.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.RENDERBUFFER,b)}else{let re=M.isWebGLMultipleRenderTargets===!0?M.texture:[M.texture];for(let pe=0;pe<re.length;pe++){let ge=re[pe],ze=r.convert(ge.format,ge.colorSpace),Se=r.convert(ge.type),De=T(ge.internalFormat,ze,Se,ge.colorSpace),$e=V(M);G&&K(M)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,$e,De,M.width,M.height):K(M)?l.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,$e,De,M.width,M.height):s.renderbufferStorage(s.RENDERBUFFER,De,M.width,M.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function at(b,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,b),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),ie(M.depthTexture,0);let re=n.get(M.depthTexture).__webglTexture,pe=V(M);if(M.depthTexture.format===Es)K(M)?l.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,re,0,pe):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,re,0);else if(M.depthTexture.format===cr)K(M)?l.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,re,0,pe):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,re,0);else throw new Error("Unknown depthTexture format")}function qe(b){let M=n.get(b),G=b.isWebGLCubeRenderTarget===!0;if(b.depthTexture&&!M.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");at(M.__webglFramebuffer,b)}else if(G){M.__webglDepthbuffer=[];for(let re=0;re<6;re++)t.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer[re]),M.__webglDepthbuffer[re]=s.createRenderbuffer(),et(M.__webglDepthbuffer[re],b,!1)}else t.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer=s.createRenderbuffer(),et(M.__webglDepthbuffer,b,!1);t.bindFramebuffer(s.FRAMEBUFFER,null)}function lt(b,M,G){let re=n.get(b);M!==void 0&&Ge(re.__webglFramebuffer,b,b.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),G!==void 0&&qe(b)}function O(b){let M=b.texture,G=n.get(b),re=n.get(M);b.addEventListener("dispose",$),b.isWebGLMultipleRenderTargets!==!0&&(re.__webglTexture===void 0&&(re.__webglTexture=s.createTexture()),re.__version=M.version,o.memory.textures++);let pe=b.isWebGLCubeRenderTarget===!0,ge=b.isWebGLMultipleRenderTargets===!0,ze=m(b)||a;if(pe){G.__webglFramebuffer=[];for(let Se=0;Se<6;Se++)if(a&&M.mipmaps&&M.mipmaps.length>0){G.__webglFramebuffer[Se]=[];for(let De=0;De<M.mipmaps.length;De++)G.__webglFramebuffer[Se][De]=s.createFramebuffer()}else G.__webglFramebuffer[Se]=s.createFramebuffer()}else{if(a&&M.mipmaps&&M.mipmaps.length>0){G.__webglFramebuffer=[];for(let Se=0;Se<M.mipmaps.length;Se++)G.__webglFramebuffer[Se]=s.createFramebuffer()}else G.__webglFramebuffer=s.createFramebuffer();if(ge)if(i.drawBuffers){let Se=b.texture;for(let De=0,$e=Se.length;De<$e;De++){let ht=n.get(Se[De]);ht.__webglTexture===void 0&&(ht.__webglTexture=s.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&b.samples>0&&K(b)===!1){let Se=ge?M:[M];G.__webglMultisampledFramebuffer=s.createFramebuffer(),G.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let De=0;De<Se.length;De++){let $e=Se[De];G.__webglColorRenderbuffer[De]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,G.__webglColorRenderbuffer[De]);let ht=r.convert($e.format,$e.colorSpace),ve=r.convert($e.type),yt=T($e.internalFormat,ht,ve,$e.colorSpace,b.isXRRenderTarget===!0),Ke=V(b);s.renderbufferStorageMultisample(s.RENDERBUFFER,Ke,yt,b.width,b.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+De,s.RENDERBUFFER,G.__webglColorRenderbuffer[De])}s.bindRenderbuffer(s.RENDERBUFFER,null),b.depthBuffer&&(G.__webglDepthRenderbuffer=s.createRenderbuffer(),et(G.__webglDepthRenderbuffer,b,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(pe){t.bindTexture(s.TEXTURE_CUBE_MAP,re.__webglTexture),se(s.TEXTURE_CUBE_MAP,M,ze);for(let Se=0;Se<6;Se++)if(a&&M.mipmaps&&M.mipmaps.length>0)for(let De=0;De<M.mipmaps.length;De++)Ge(G.__webglFramebuffer[Se][De],b,M,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Se,De);else Ge(G.__webglFramebuffer[Se],b,M,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0);C(M,ze)&&_(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ge){let Se=b.texture;for(let De=0,$e=Se.length;De<$e;De++){let ht=Se[De],ve=n.get(ht);t.bindTexture(s.TEXTURE_2D,ve.__webglTexture),se(s.TEXTURE_2D,ht,ze),Ge(G.__webglFramebuffer,b,ht,s.COLOR_ATTACHMENT0+De,s.TEXTURE_2D,0),C(ht,ze)&&_(s.TEXTURE_2D)}t.unbindTexture()}else{let Se=s.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(a?Se=b.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(Se,re.__webglTexture),se(Se,M,ze),a&&M.mipmaps&&M.mipmaps.length>0)for(let De=0;De<M.mipmaps.length;De++)Ge(G.__webglFramebuffer[De],b,M,s.COLOR_ATTACHMENT0,Se,De);else Ge(G.__webglFramebuffer,b,M,s.COLOR_ATTACHMENT0,Se,0);C(M,ze)&&_(Se),t.unbindTexture()}b.depthBuffer&&qe(b)}function ee(b){let M=m(b)||a,G=b.isWebGLMultipleRenderTargets===!0?b.texture:[b.texture];for(let re=0,pe=G.length;re<pe;re++){let ge=G[re];if(C(ge,M)){let ze=b.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,Se=n.get(ge).__webglTexture;t.bindTexture(ze,Se),_(ze),t.unbindTexture()}}}function te(b){if(a&&b.samples>0&&K(b)===!1){let M=b.isWebGLMultipleRenderTargets?b.texture:[b.texture],G=b.width,re=b.height,pe=s.COLOR_BUFFER_BIT,ge=[],ze=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Se=n.get(b),De=b.isWebGLMultipleRenderTargets===!0;if(De)for(let $e=0;$e<M.length;$e++)t.bindFramebuffer(s.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+$e,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,Se.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+$e,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,Se.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Se.__webglFramebuffer);for(let $e=0;$e<M.length;$e++){ge.push(s.COLOR_ATTACHMENT0+$e),b.depthBuffer&&ge.push(ze);let ht=Se.__ignoreDepthValues!==void 0?Se.__ignoreDepthValues:!1;if(ht===!1&&(b.depthBuffer&&(pe|=s.DEPTH_BUFFER_BIT),b.stencilBuffer&&(pe|=s.STENCIL_BUFFER_BIT)),De&&s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Se.__webglColorRenderbuffer[$e]),ht===!0&&(s.invalidateFramebuffer(s.READ_FRAMEBUFFER,[ze]),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[ze])),De){let ve=n.get(M[$e]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,ve,0)}s.blitFramebuffer(0,0,G,re,0,0,G,re,pe,s.NEAREST),c&&s.invalidateFramebuffer(s.READ_FRAMEBUFFER,ge)}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),De)for(let $e=0;$e<M.length;$e++){t.bindFramebuffer(s.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+$e,s.RENDERBUFFER,Se.__webglColorRenderbuffer[$e]);let ht=n.get(M[$e]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,Se.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+$e,s.TEXTURE_2D,ht,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Se.__webglMultisampledFramebuffer)}}function V(b){return Math.min(i.maxSamples,b.samples)}function K(b){let M=n.get(b);return a&&b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function _e(b){let M=o.render.frame;h.get(b)!==M&&(h.set(b,M),b.update())}function de(b,M){let G=b.colorSpace,re=b.format,pe=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||b.format===Dl||G!==Wi&&G!==ai&&(Pt.getTransfer(G)===Bt?a===!1?e.has("EXT_sRGB")===!0&&re===Ei?(b.format=Dl,b.minFilter=Jn,b.generateMipmaps=!1):M=Xo.sRGBToLinear(M):(re!==Ei||pe!==ss)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),M}this.allocateTextureUnit=k,this.resetTextureUnits=be,this.setTexture2D=ie,this.setTexture2DArray=P,this.setTexture3D=oe,this.setTextureCube=le,this.rebindTextures=lt,this.setupRenderTarget=O,this.updateRenderTargetMipmap=ee,this.updateMultisampleRenderTarget=te,this.setupDepthRenderbuffer=qe,this.setupFrameBufferTexture=Ge,this.useMultisampledRTT=K}function G0(s,e,t){let n=t.isWebGL2;function i(r,o=ai){let a,l=Pt.getTransfer(o);if(r===ss)return s.UNSIGNED_BYTE;if(r===bu)return s.UNSIGNED_SHORT_4_4_4_4;if(r===wu)return s.UNSIGNED_SHORT_5_5_5_1;if(r===Of)return s.BYTE;if(r===Ff)return s.SHORT;if(r===Sc)return s.UNSIGNED_SHORT;if(r===Eu)return s.INT;if(r===ns)return s.UNSIGNED_INT;if(r===is)return s.FLOAT;if(r===bi)return n?s.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===Bf)return s.ALPHA;if(r===Ei)return s.RGBA;if(r===Hf)return s.LUMINANCE;if(r===kf)return s.LUMINANCE_ALPHA;if(r===Es)return s.DEPTH_COMPONENT;if(r===cr)return s.DEPTH_STENCIL;if(r===Dl)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===Vf)return s.RED;if(r===Tu)return s.RED_INTEGER;if(r===Gf)return s.RG;if(r===Au)return s.RG_INTEGER;if(r===Ru)return s.RGBA_INTEGER;if(r===Xa||r===qa||r===Ya||r===Za)if(l===Bt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===Xa)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===qa)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Ya)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Za)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===Xa)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===qa)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Ya)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Za)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Yc||r===Zc||r===Jc||r===$c)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===Yc)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Zc)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Jc)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===$c)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Cu)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Kc||r===Qc)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(r===Kc)return l===Bt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===Qc)return l===Bt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===jc||r===eh||r===th||r===nh||r===ih||r===sh||r===rh||r===oh||r===ah||r===lh||r===ch||r===hh||r===uh||r===fh)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(r===jc)return l===Bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===eh)return l===Bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===th)return l===Bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===nh)return l===Bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===ih)return l===Bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===sh)return l===Bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===rh)return l===Bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===oh)return l===Bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===ah)return l===Bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===lh)return l===Bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===ch)return l===Bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===hh)return l===Bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===uh)return l===Bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===fh)return l===Bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Ja||r===dh||r===ph)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(r===Ja)return l===Bt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===dh)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===ph)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Wf||r===mh||r===gh||r===xh)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(r===Ja)return a.COMPRESSED_RED_RGTC1_EXT;if(r===mh)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===gh)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===xh)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Ss?n?s.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):s[r]!==void 0?s[r]:null}return{convert:i}}var Jl=class extends Nn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},Cn=class extends Fn{constructor(){super(),this.isGroup=!0,this.type="Group"}},W0={type:"move"},Ir=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Cn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Cn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Cn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let y of e.hand.values()){let m=t.getJointPose(y,n),d=this._getHandJoint(c,y);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),p=.02,x=.005;c.inputState.pinching&&f>p+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=p-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(W0)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Cn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},$l=class extends os{constructor(e,t){super();let n=this,i=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,f=null,p=null,x=null,y=t.getContextAttributes(),m=null,d=null,C=[],_=[],T=new Ee,B=null,N=new Nn;N.layers.enable(1),N.viewport=new Jt;let R=new Nn;R.layers.enable(2),R.viewport=new Jt;let $=[N,R],E=new Jl;E.layers.enable(1),E.layers.enable(2);let I=null,J=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(se){let xe=C[se];return xe===void 0&&(xe=new Ir,C[se]=xe),xe.getTargetRaySpace()},this.getControllerGrip=function(se){let xe=C[se];return xe===void 0&&(xe=new Ir,C[se]=xe),xe.getGripSpace()},this.getHand=function(se){let xe=C[se];return xe===void 0&&(xe=new Ir,C[se]=xe),xe.getHandSpace()};function ce(se){let xe=_.indexOf(se.inputSource);if(xe===-1)return;let Ce=C[xe];Ce!==void 0&&(Ce.update(se.inputSource,se.frame,c||o),Ce.dispatchEvent({type:se.type,data:se.inputSource}))}function be(){i.removeEventListener("select",ce),i.removeEventListener("selectstart",ce),i.removeEventListener("selectend",ce),i.removeEventListener("squeeze",ce),i.removeEventListener("squeezestart",ce),i.removeEventListener("squeezeend",ce),i.removeEventListener("end",be),i.removeEventListener("inputsourceschange",k);for(let se=0;se<C.length;se++){let xe=_[se];xe!==null&&(_[se]=null,C[se].disconnect(xe))}I=null,J=null,e.setRenderTarget(m),p=null,f=null,u=null,i=null,d=null,Ae.stop(),n.isPresenting=!1,e.setPixelRatio(B),e.setSize(T.width,T.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(se){r=se,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(se){a=se,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(se){c=se},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return u},this.getFrame=function(){return x},this.getSession=function(){return i},this.setSession=async function(se){if(i=se,i!==null){if(m=e.getRenderTarget(),i.addEventListener("select",ce),i.addEventListener("selectstart",ce),i.addEventListener("selectend",ce),i.addEventListener("squeeze",ce),i.addEventListener("squeezestart",ce),i.addEventListener("squeezeend",ce),i.addEventListener("end",be),i.addEventListener("inputsourceschange",k),y.xrCompatible!==!0&&await t.makeXRCompatible(),B=e.getPixelRatio(),e.getSize(T),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){let xe={antialias:i.renderState.layers===void 0?y.antialias:!0,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(i,t,xe),i.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),d=new Gn(p.framebufferWidth,p.framebufferHeight,{format:Ei,type:ss,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil})}else{let xe=null,Ce=null,Fe=null;y.depth&&(Fe=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,xe=y.stencil?cr:Es,Ce=y.stencil?Ss:ns);let Ge={colorFormat:t.RGBA8,depthFormat:Fe,scaleFactor:r};u=new XRWebGLBinding(i,t),f=u.createProjectionLayer(Ge),i.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),d=new Gn(f.textureWidth,f.textureHeight,{format:Ei,type:ss,depthTexture:new jo(f.textureWidth,f.textureHeight,Ce,void 0,void 0,void 0,void 0,void 0,void 0,xe),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0});let et=e.properties.get(d);et.__ignoreDepthValues=f.ignoreDepthValues}d.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),Ae.setContext(i),Ae.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function k(se){for(let xe=0;xe<se.removed.length;xe++){let Ce=se.removed[xe],Fe=_.indexOf(Ce);Fe>=0&&(_[Fe]=null,C[Fe].disconnect(Ce))}for(let xe=0;xe<se.added.length;xe++){let Ce=se.added[xe],Fe=_.indexOf(Ce);if(Fe===-1){for(let et=0;et<C.length;et++)if(et>=_.length){_.push(Ce),Fe=et;break}else if(_[et]===null){_[et]=Ce,Fe=et;break}if(Fe===-1)break}let Ge=C[Fe];Ge&&Ge.connect(Ce)}}let Y=new L,ie=new L;function P(se,xe,Ce){Y.setFromMatrixPosition(xe.matrixWorld),ie.setFromMatrixPosition(Ce.matrixWorld);let Fe=Y.distanceTo(ie),Ge=xe.projectionMatrix.elements,et=Ce.projectionMatrix.elements,at=Ge[14]/(Ge[10]-1),qe=Ge[14]/(Ge[10]+1),lt=(Ge[9]+1)/Ge[5],O=(Ge[9]-1)/Ge[5],ee=(Ge[8]-1)/Ge[0],te=(et[8]+1)/et[0],V=at*ee,K=at*te,_e=Fe/(-ee+te),de=_e*-ee;xe.matrixWorld.decompose(se.position,se.quaternion,se.scale),se.translateX(de),se.translateZ(_e),se.matrixWorld.compose(se.position,se.quaternion,se.scale),se.matrixWorldInverse.copy(se.matrixWorld).invert();let b=at+_e,M=qe+_e,G=V-de,re=K+(Fe-de),pe=lt*qe/M*b,ge=O*qe/M*b;se.projectionMatrix.makePerspective(G,re,pe,ge,b,M),se.projectionMatrixInverse.copy(se.projectionMatrix).invert()}function oe(se,xe){xe===null?se.matrixWorld.copy(se.matrix):se.matrixWorld.multiplyMatrices(xe.matrixWorld,se.matrix),se.matrixWorldInverse.copy(se.matrixWorld).invert()}this.updateCamera=function(se){if(i===null)return;E.near=R.near=N.near=se.near,E.far=R.far=N.far=se.far,(I!==E.near||J!==E.far)&&(i.updateRenderState({depthNear:E.near,depthFar:E.far}),I=E.near,J=E.far);let xe=se.parent,Ce=E.cameras;oe(E,xe);for(let Fe=0;Fe<Ce.length;Fe++)oe(Ce[Fe],xe);Ce.length===2?P(E,N,R):E.projectionMatrix.copy(N.projectionMatrix),le(se,E,xe)};function le(se,xe,Ce){Ce===null?se.matrix.copy(xe.matrixWorld):(se.matrix.copy(Ce.matrixWorld),se.matrix.invert(),se.matrix.multiply(xe.matrixWorld)),se.matrix.decompose(se.position,se.quaternion,se.scale),se.updateMatrixWorld(!0),se.projectionMatrix.copy(xe.projectionMatrix),se.projectionMatrixInverse.copy(xe.projectionMatrixInverse),se.isPerspectiveCamera&&(se.fov=Nl*2*Math.atan(1/se.projectionMatrix.elements[5]),se.zoom=1)}this.getCamera=function(){return E},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(se){l=se,f!==null&&(f.fixedFoveation=se),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=se)};let fe=null;function me(se,xe){if(h=xe.getViewerPose(c||o),x=xe,h!==null){let Ce=h.views;p!==null&&(e.setRenderTargetFramebuffer(d,p.framebuffer),e.setRenderTarget(d));let Fe=!1;Ce.length!==E.cameras.length&&(E.cameras.length=0,Fe=!0);for(let Ge=0;Ge<Ce.length;Ge++){let et=Ce[Ge],at=null;if(p!==null)at=p.getViewport(et);else{let lt=u.getViewSubImage(f,et);at=lt.viewport,Ge===0&&(e.setRenderTargetTextures(d,lt.colorTexture,f.ignoreDepthValues?void 0:lt.depthStencilTexture),e.setRenderTarget(d))}let qe=$[Ge];qe===void 0&&(qe=new Nn,qe.layers.enable(Ge),qe.viewport=new Jt,$[Ge]=qe),qe.matrix.fromArray(et.transform.matrix),qe.matrix.decompose(qe.position,qe.quaternion,qe.scale),qe.projectionMatrix.fromArray(et.projectionMatrix),qe.projectionMatrixInverse.copy(qe.projectionMatrix).invert(),qe.viewport.set(at.x,at.y,at.width,at.height),Ge===0&&(E.matrix.copy(qe.matrix),E.matrix.decompose(E.position,E.quaternion,E.scale)),Fe===!0&&E.cameras.push(qe)}}for(let Ce=0;Ce<C.length;Ce++){let Fe=_[Ce],Ge=C[Ce];Fe!==null&&Ge!==void 0&&Ge.update(Fe,xe,c||o)}fe&&fe(se,xe),xe.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:xe}),x=null}let Ae=new zu;Ae.setAnimationLoop(me),this.setAnimationLoop=function(se){fe=se},this.dispose=function(){}}};function X0(s,e){function t(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function n(m,d){d.color.getRGB(m.fogColor.value,Nu(s)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function i(m,d,C,_,T){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(m,d):d.isMeshToonMaterial?(r(m,d),u(m,d)):d.isMeshPhongMaterial?(r(m,d),h(m,d)):d.isMeshStandardMaterial?(r(m,d),f(m,d),d.isMeshPhysicalMaterial&&p(m,d,T)):d.isMeshMatcapMaterial?(r(m,d),x(m,d)):d.isMeshDepthMaterial?r(m,d):d.isMeshDistanceMaterial?(r(m,d),y(m,d)):d.isMeshNormalMaterial?r(m,d):d.isLineBasicMaterial?(o(m,d),d.isLineDashedMaterial&&a(m,d)):d.isPointsMaterial?l(m,d,C,_):d.isSpriteMaterial?c(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,t(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===mn&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,t(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===mn&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,t(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,t(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);let C=e.get(d).envMap;if(C&&(m.envMap.value=C,m.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap){m.lightMap.value=d.lightMap;let _=s._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=d.lightMapIntensity*_,t(d.lightMap,m.lightMapTransform)}d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,m.aoMapTransform))}function o(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform))}function a(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function l(m,d,C,_){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*C,m.scale.value=_*.5,d.map&&(m.map.value=d.map,t(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function c(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function h(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function u(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function f(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,m.roughnessMapTransform)),e.get(d).envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,C){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===mn&&m.clearcoatNormalScale.value.negate())),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=C.texture,m.transmissionSamplerSize.value.set(C.width,C.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,m.specularIntensityMapTransform))}function x(m,d){d.matcap&&(m.matcap.value=d.matcap)}function y(m,d){let C=e.get(d).light;m.referencePosition.value.setFromMatrixPosition(C.matrixWorld),m.nearDistance.value=C.shadow.camera.near,m.farDistance.value=C.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function q0(s,e,t,n){let i={},r={},o=[],a=t.isWebGL2?s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(C,_){let T=_.program;n.uniformBlockBinding(C,T)}function c(C,_){let T=i[C.id];T===void 0&&(x(C),T=h(C),i[C.id]=T,C.addEventListener("dispose",m));let B=_.program;n.updateUBOMapping(C,B);let N=e.render.frame;r[C.id]!==N&&(f(C),r[C.id]=N)}function h(C){let _=u();C.__bindingPointIndex=_;let T=s.createBuffer(),B=C.__size,N=C.usage;return s.bindBuffer(s.UNIFORM_BUFFER,T),s.bufferData(s.UNIFORM_BUFFER,B,N),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,_,T),T}function u(){for(let C=0;C<a;C++)if(o.indexOf(C)===-1)return o.push(C),C;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(C){let _=i[C.id],T=C.uniforms,B=C.__cache;s.bindBuffer(s.UNIFORM_BUFFER,_);for(let N=0,R=T.length;N<R;N++){let $=Array.isArray(T[N])?T[N]:[T[N]];for(let E=0,I=$.length;E<I;E++){let J=$[E];if(p(J,N,E,B)===!0){let ce=J.__offset,be=Array.isArray(J.value)?J.value:[J.value],k=0;for(let Y=0;Y<be.length;Y++){let ie=be[Y],P=y(ie);typeof ie=="number"||typeof ie=="boolean"?(J.__data[0]=ie,s.bufferSubData(s.UNIFORM_BUFFER,ce+k,J.__data)):ie.isMatrix3?(J.__data[0]=ie.elements[0],J.__data[1]=ie.elements[1],J.__data[2]=ie.elements[2],J.__data[3]=0,J.__data[4]=ie.elements[3],J.__data[5]=ie.elements[4],J.__data[6]=ie.elements[5],J.__data[7]=0,J.__data[8]=ie.elements[6],J.__data[9]=ie.elements[7],J.__data[10]=ie.elements[8],J.__data[11]=0):(ie.toArray(J.__data,k),k+=P.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,ce,J.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function p(C,_,T,B){let N=C.value,R=_+"_"+T;if(B[R]===void 0)return typeof N=="number"||typeof N=="boolean"?B[R]=N:B[R]=N.clone(),!0;{let $=B[R];if(typeof N=="number"||typeof N=="boolean"){if($!==N)return B[R]=N,!0}else if($.equals(N)===!1)return $.copy(N),!0}return!1}function x(C){let _=C.uniforms,T=0,B=16;for(let R=0,$=_.length;R<$;R++){let E=Array.isArray(_[R])?_[R]:[_[R]];for(let I=0,J=E.length;I<J;I++){let ce=E[I],be=Array.isArray(ce.value)?ce.value:[ce.value];for(let k=0,Y=be.length;k<Y;k++){let ie=be[k],P=y(ie),oe=T%B;oe!==0&&B-oe<P.boundary&&(T+=B-oe),ce.__data=new Float32Array(P.storage/Float32Array.BYTES_PER_ELEMENT),ce.__offset=T,T+=P.storage}}}let N=T%B;return N>0&&(T+=B-N),C.__size=T,C.__cache={},this}function y(C){let _={boundary:0,storage:0};return typeof C=="number"||typeof C=="boolean"?(_.boundary=4,_.storage=4):C.isVector2?(_.boundary=8,_.storage=8):C.isVector3||C.isColor?(_.boundary=16,_.storage=12):C.isVector4?(_.boundary=16,_.storage=16):C.isMatrix3?(_.boundary=48,_.storage=48):C.isMatrix4?(_.boundary=64,_.storage=64):C.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",C),_}function m(C){let _=C.target;_.removeEventListener("dispose",m);let T=o.indexOf(_.__bindingPointIndex);o.splice(T,1),s.deleteBuffer(i[_.id]),delete i[_.id],delete r[_.id]}function d(){for(let C in i)s.deleteBuffer(i[C]);o=[],i={},r={}}return{bind:l,update:c,dispose:d}}var Fr=class{constructor(e={}){let{canvas:t=nd(),context:n=null,depth:i=!0,stencil:r=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=e;this.isWebGLRenderer=!0;let f;n!==null?f=n.getContextAttributes().alpha:f=o;let p=new Uint32Array(4),x=new Int32Array(4),y=null,m=null,d=[],C=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ct,this._useLegacyLights=!1,this.toneMapping=Ii,this.toneMappingExposure=1;let _=this,T=!1,B=0,N=0,R=null,$=-1,E=null,I=new Jt,J=new Jt,ce=null,be=new Je(0),k=0,Y=t.width,ie=t.height,P=1,oe=null,le=null,fe=new Jt(0,0,Y,ie),me=new Jt(0,0,Y,ie),Ae=!1,se=new Or,xe=!1,Ce=!1,Fe=null,Ge=new vt,et=new Ee,at=new L,qe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function lt(){return R===null?P:1}let O=n;function ee(A,q){for(let Z=0;Z<A.length;Z++){let ne=A[Z],Q=t.getContext(ne,q);if(Q!==null)return Q}return null}try{let A={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r160"),t.addEventListener("webglcontextlost",we,!1),t.addEventListener("webglcontextrestored",F,!1),t.addEventListener("webglcontextcreationerror",Be,!1),O===null){let q=["webgl2","webgl","experimental-webgl"];if(_.isWebGL1Renderer===!0&&q.shift(),O=ee(q,A),O===null)throw ee(q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&O instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),O.getShaderPrecisionFormat===void 0&&(O.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let te,V,K,_e,de,b,M,G,re,pe,ge,ze,Se,De,$e,ht,ve,yt,Ke,st,Pe,ke,rt,bt;function Lt(){te=new ug(O),V=new rg(O,te,e),te.init(V),ke=new G0(O,te,V),K=new k0(O,te,V),_e=new pg(O),de=new C0,b=new V0(O,te,K,de,V,ke,_e),M=new ag(_),G=new hg(_),re=new Sd(O,V),rt=new ig(O,te,re,V),pe=new fg(O,re,_e,rt),ge=new _g(O,pe,re,_e),Ke=new xg(O,V,b),ht=new og(de),ze=new R0(_,M,G,te,V,rt,ht),Se=new X0(_,de),De=new I0,$e=new O0(te,V),yt=new ng(_,M,G,K,ge,f,l),ve=new H0(_,ge,V),bt=new q0(O,_e,V,K),st=new sg(O,te,_e,V),Pe=new dg(O,te,_e,V),_e.programs=ze.programs,_.capabilities=V,_.extensions=te,_.properties=de,_.renderLists=De,_.shadowMap=ve,_.state=K,_.info=_e}Lt();let Ie=new $l(_,O);this.xr=Ie,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){let A=te.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){let A=te.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return P},this.setPixelRatio=function(A){A!==void 0&&(P=A,this.setSize(Y,ie,!1))},this.getSize=function(A){return A.set(Y,ie)},this.setSize=function(A,q,Z=!0){if(Ie.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Y=A,ie=q,t.width=Math.floor(A*P),t.height=Math.floor(q*P),Z===!0&&(t.style.width=A+"px",t.style.height=q+"px"),this.setViewport(0,0,A,q)},this.getDrawingBufferSize=function(A){return A.set(Y*P,ie*P).floor()},this.setDrawingBufferSize=function(A,q,Z){Y=A,ie=q,P=Z,t.width=Math.floor(A*Z),t.height=Math.floor(q*Z),this.setViewport(0,0,A,q)},this.getCurrentViewport=function(A){return A.copy(I)},this.getViewport=function(A){return A.copy(fe)},this.setViewport=function(A,q,Z,ne){A.isVector4?fe.set(A.x,A.y,A.z,A.w):fe.set(A,q,Z,ne),K.viewport(I.copy(fe).multiplyScalar(P).floor())},this.getScissor=function(A){return A.copy(me)},this.setScissor=function(A,q,Z,ne){A.isVector4?me.set(A.x,A.y,A.z,A.w):me.set(A,q,Z,ne),K.scissor(J.copy(me).multiplyScalar(P).floor())},this.getScissorTest=function(){return Ae},this.setScissorTest=function(A){K.setScissorTest(Ae=A)},this.setOpaqueSort=function(A){oe=A},this.setTransparentSort=function(A){le=A},this.getClearColor=function(A){return A.copy(yt.getClearColor())},this.setClearColor=function(){yt.setClearColor.apply(yt,arguments)},this.getClearAlpha=function(){return yt.getClearAlpha()},this.setClearAlpha=function(){yt.setClearAlpha.apply(yt,arguments)},this.clear=function(A=!0,q=!0,Z=!0){let ne=0;if(A){let Q=!1;if(R!==null){let He=R.texture.format;Q=He===Ru||He===Au||He===Tu}if(Q){let He=R.texture.type,Ze=He===ss||He===ns||He===Sc||He===Ss||He===bu||He===wu,Ye=yt.getClearColor(),ct=yt.getClearAlpha(),dt=Ye.r,ot=Ye.g,ut=Ye.b;Ze?(p[0]=dt,p[1]=ot,p[2]=ut,p[3]=ct,O.clearBufferuiv(O.COLOR,0,p)):(x[0]=dt,x[1]=ot,x[2]=ut,x[3]=ct,O.clearBufferiv(O.COLOR,0,x))}else ne|=O.COLOR_BUFFER_BIT}q&&(ne|=O.DEPTH_BUFFER_BIT),Z&&(ne|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O.clear(ne)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",we,!1),t.removeEventListener("webglcontextrestored",F,!1),t.removeEventListener("webglcontextcreationerror",Be,!1),De.dispose(),$e.dispose(),de.dispose(),M.dispose(),G.dispose(),ge.dispose(),rt.dispose(),bt.dispose(),ze.dispose(),Ie.dispose(),Ie.removeEventListener("sessionstart",Vt),Ie.removeEventListener("sessionend",xt),Fe&&(Fe.dispose(),Fe=null),qt.stop()};function we(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function F(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;let A=_e.autoReset,q=ve.enabled,Z=ve.autoUpdate,ne=ve.needsUpdate,Q=ve.type;Lt(),_e.autoReset=A,ve.enabled=q,ve.autoUpdate=Z,ve.needsUpdate=ne,ve.type=Q}function Be(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Le(A){let q=A.target;q.removeEventListener("dispose",Le),tt(q)}function tt(A){it(A),de.remove(A)}function it(A){let q=de.get(A).programs;q!==void 0&&(q.forEach(function(Z){ze.releaseProgram(Z)}),A.isShaderMaterial&&ze.releaseShaderCache(A))}this.renderBufferDirect=function(A,q,Z,ne,Q,He){q===null&&(q=qe);let Ze=Q.isMesh&&Q.matrixWorld.determinant()<0,Ye=Ji(A,q,Z,ne,Q);K.setMaterial(ne,Ze);let ct=Z.index,dt=1;if(ne.wireframe===!0){if(ct=pe.getWireframeAttribute(Z),ct===void 0)return;dt=2}let ot=Z.drawRange,ut=Z.attributes.position,Dt=ot.start*dt,rn=(ot.start+ot.count)*dt;He!==null&&(Dt=Math.max(Dt,He.start*dt),rn=Math.min(rn,(He.start+He.count)*dt)),ct!==null?(Dt=Math.max(Dt,0),rn=Math.min(rn,ct.count)):ut!=null&&(Dt=Math.max(Dt,0),rn=Math.min(rn,ut.count));let Nt=rn-Dt;if(Nt<0||Nt===1/0)return;rt.setup(Q,ne,Ye,Z,ct);let pn,Rt=st;if(ct!==null&&(pn=re.get(ct),Rt=Pe,Rt.setIndex(pn)),Q.isMesh)ne.wireframe===!0?(K.setLineWidth(ne.wireframeLinewidth*lt()),Rt.setMode(O.LINES)):Rt.setMode(O.TRIANGLES);else if(Q.isLine){let pt=ne.linewidth;pt===void 0&&(pt=1),K.setLineWidth(pt*lt()),Q.isLineSegments?Rt.setMode(O.LINES):Q.isLineLoop?Rt.setMode(O.LINE_LOOP):Rt.setMode(O.LINE_STRIP)}else Q.isPoints?Rt.setMode(O.POINTS):Q.isSprite&&Rt.setMode(O.TRIANGLES);if(Q.isBatchedMesh)Rt.renderMultiDraw(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount);else if(Q.isInstancedMesh)Rt.renderInstances(Dt,Nt,Q.count);else if(Z.isInstancedBufferGeometry){let pt=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,Ut=Math.min(Z.instanceCount,pt);Rt.renderInstances(Dt,Nt,Ut)}else Rt.render(Dt,Nt)};function Mt(A,q,Z){A.transparent===!0&&A.side===zn&&A.forceSinglePass===!1?(A.side=mn,A.needsUpdate=!0,pi(A,q,Z),A.side=rs,A.needsUpdate=!0,pi(A,q,Z),A.side=zn):pi(A,q,Z)}this.compile=function(A,q,Z=null){Z===null&&(Z=A),m=$e.get(Z),m.init(),C.push(m),Z.traverseVisible(function(Q){Q.isLight&&Q.layers.test(q.layers)&&(m.pushLight(Q),Q.castShadow&&m.pushShadow(Q))}),A!==Z&&A.traverseVisible(function(Q){Q.isLight&&Q.layers.test(q.layers)&&(m.pushLight(Q),Q.castShadow&&m.pushShadow(Q))}),m.setupLights(_._useLegacyLights);let ne=new Set;return A.traverse(function(Q){let He=Q.material;if(He)if(Array.isArray(He))for(let Ze=0;Ze<He.length;Ze++){let Ye=He[Ze];Mt(Ye,Z,Q),ne.add(Ye)}else Mt(He,Z,Q),ne.add(He)}),C.pop(),m=null,ne},this.compileAsync=function(A,q,Z=null){let ne=this.compile(A,q,Z);return new Promise(Q=>{function He(){if(ne.forEach(function(Ze){de.get(Ze).currentProgram.isReady()&&ne.delete(Ze)}),ne.size===0){Q(A);return}setTimeout(He,10)}te.get("KHR_parallel_shader_compile")!==null?He():setTimeout(He,10)})};let Tt=null;function kt(A){Tt&&Tt(A)}function Vt(){qt.stop()}function xt(){qt.start()}let qt=new zu;qt.setAnimationLoop(kt),typeof self<"u"&&qt.setContext(self),this.setAnimationLoop=function(A){Tt=A,Ie.setAnimationLoop(A),A===null?qt.stop():qt.start()},Ie.addEventListener("sessionstart",Vt),Ie.addEventListener("sessionend",xt),this.render=function(A,q){if(q!==void 0&&q.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),Ie.enabled===!0&&Ie.isPresenting===!0&&(Ie.cameraAutoUpdate===!0&&Ie.updateCamera(q),q=Ie.getCamera()),A.isScene===!0&&A.onBeforeRender(_,A,q,R),m=$e.get(A,C.length),m.init(),C.push(m),Ge.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),se.setFromProjectionMatrix(Ge),Ce=this.localClippingEnabled,xe=ht.init(this.clippingPlanes,Ce),y=De.get(A,d.length),y.init(),d.push(y),Tn(A,q,0,_.sortObjects),y.finish(),_.sortObjects===!0&&y.sort(oe,le),this.info.render.frame++,xe===!0&&ht.beginShadows();let Z=m.state.shadowsArray;if(ve.render(Z,A,q),xe===!0&&ht.endShadows(),this.info.autoReset===!0&&this.info.reset(),yt.render(y,A),m.setupLights(_._useLegacyLights),q.isArrayCamera){let ne=q.cameras;for(let Q=0,He=ne.length;Q<He;Q++){let Ze=ne[Q];ri(y,A,Ze,Ze.viewport)}}else ri(y,A,q);R!==null&&(b.updateMultisampleRenderTarget(R),b.updateRenderTargetMipmap(R)),A.isScene===!0&&A.onAfterRender(_,A,q),rt.resetDefaultState(),$=-1,E=null,C.pop(),C.length>0?m=C[C.length-1]:m=null,d.pop(),d.length>0?y=d[d.length-1]:y=null};function Tn(A,q,Z,ne){if(A.visible===!1)return;if(A.layers.test(q.layers)){if(A.isGroup)Z=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(q);else if(A.isLight)m.pushLight(A),A.castShadow&&m.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||se.intersectsSprite(A)){ne&&at.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Ge);let Ze=ge.update(A),Ye=A.material;Ye.visible&&y.push(A,Ze,Ye,Z,at.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||se.intersectsObject(A))){let Ze=ge.update(A),Ye=A.material;if(ne&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),at.copy(A.boundingSphere.center)):(Ze.boundingSphere===null&&Ze.computeBoundingSphere(),at.copy(Ze.boundingSphere.center)),at.applyMatrix4(A.matrixWorld).applyMatrix4(Ge)),Array.isArray(Ye)){let ct=Ze.groups;for(let dt=0,ot=ct.length;dt<ot;dt++){let ut=ct[dt],Dt=Ye[ut.materialIndex];Dt&&Dt.visible&&y.push(A,Ze,Dt,Z,at.z,ut)}}else Ye.visible&&y.push(A,Ze,Ye,Z,at.z,null)}}let He=A.children;for(let Ze=0,Ye=He.length;Ze<Ye;Ze++)Tn(He[Ze],q,Z,ne)}function ri(A,q,Z,ne){let Q=A.opaque,He=A.transmissive,Ze=A.transparent;m.setupLightsView(Z),xe===!0&&ht.setGlobalState(_.clippingPlanes,Z),He.length>0&&Zi(Q,He,q,Z),ne&&K.viewport(I.copy(ne)),Q.length>0&&Wn(Q,q,Z),He.length>0&&Wn(He,q,Z),Ze.length>0&&Wn(Ze,q,Z),K.buffers.depth.setTest(!0),K.buffers.depth.setMask(!0),K.buffers.color.setMask(!0),K.setPolygonOffset(!1)}function Zi(A,q,Z,ne){if((Z.isScene===!0?Z.overrideMaterial:null)!==null)return;let He=V.isWebGL2;Fe===null&&(Fe=new Gn(1,1,{generateMipmaps:!0,type:te.has("EXT_color_buffer_half_float")?bi:ss,minFilter:Nr,samples:He?4:0})),_.getDrawingBufferSize(et),He?Fe.setSize(et.x,et.y):Fe.setSize(zl(et.x),zl(et.y));let Ze=_.getRenderTarget();_.setRenderTarget(Fe),_.getClearColor(be),k=_.getClearAlpha(),k<1&&_.setClearColor(16777215,.5),_.clear();let Ye=_.toneMapping;_.toneMapping=Ii,Wn(A,Z,ne),b.updateMultisampleRenderTarget(Fe),b.updateRenderTargetMipmap(Fe);let ct=!1;for(let dt=0,ot=q.length;dt<ot;dt++){let ut=q[dt],Dt=ut.object,rn=ut.geometry,Nt=ut.material,pn=ut.group;if(Nt.side===zn&&Dt.layers.test(ne.layers)){let Rt=Nt.side;Nt.side=mn,Nt.needsUpdate=!0,Xn(Dt,Z,ne,rn,Nt,pn),Nt.side=Rt,Nt.needsUpdate=!0,ct=!0}}ct===!0&&(b.updateMultisampleRenderTarget(Fe),b.updateRenderTargetMipmap(Fe)),_.setRenderTarget(Ze),_.setClearColor(be,k),_.toneMapping=Ye}function Wn(A,q,Z){let ne=q.isScene===!0?q.overrideMaterial:null;for(let Q=0,He=A.length;Q<He;Q++){let Ze=A[Q],Ye=Ze.object,ct=Ze.geometry,dt=ne===null?Ze.material:ne,ot=Ze.group;Ye.layers.test(Z.layers)&&Xn(Ye,q,Z,ct,dt,ot)}}function Xn(A,q,Z,ne,Q,He){A.onBeforeRender(_,q,Z,ne,Q,He),A.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),Q.onBeforeRender(_,q,Z,ne,A,He),Q.transparent===!0&&Q.side===zn&&Q.forceSinglePass===!1?(Q.side=mn,Q.needsUpdate=!0,_.renderBufferDirect(Z,q,ne,Q,A,He),Q.side=rs,Q.needsUpdate=!0,_.renderBufferDirect(Z,q,ne,Q,A,He),Q.side=zn):_.renderBufferDirect(Z,q,ne,Q,A,He),A.onAfterRender(_,q,Z,ne,Q,He)}function pi(A,q,Z){q.isScene!==!0&&(q=qe);let ne=de.get(A),Q=m.state.lights,He=m.state.shadowsArray,Ze=Q.state.version,Ye=ze.getParameters(A,Q.state,He,q,Z),ct=ze.getProgramCacheKey(Ye),dt=ne.programs;ne.environment=A.isMeshStandardMaterial?q.environment:null,ne.fog=q.fog,ne.envMap=(A.isMeshStandardMaterial?G:M).get(A.envMap||ne.environment),dt===void 0&&(A.addEventListener("dispose",Le),dt=new Map,ne.programs=dt);let ot=dt.get(ct);if(ot!==void 0){if(ne.currentProgram===ot&&ne.lightsStateVersion===Ze)return Ti(A,Ye),ot}else Ye.uniforms=ze.getUniforms(A),A.onBuild(Z,Ye,_),A.onBeforeCompile(Ye,_),ot=ze.acquireProgram(Ye,ct),dt.set(ct,ot),ne.uniforms=Ye.uniforms;let ut=ne.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(ut.clippingPlanes=ht.uniform),Ti(A,Ye),ne.needsLights=Yn(A),ne.lightsStateVersion=Ze,ne.needsLights&&(ut.ambientLightColor.value=Q.state.ambient,ut.lightProbe.value=Q.state.probe,ut.directionalLights.value=Q.state.directional,ut.directionalLightShadows.value=Q.state.directionalShadow,ut.spotLights.value=Q.state.spot,ut.spotLightShadows.value=Q.state.spotShadow,ut.rectAreaLights.value=Q.state.rectArea,ut.ltc_1.value=Q.state.rectAreaLTC1,ut.ltc_2.value=Q.state.rectAreaLTC2,ut.pointLights.value=Q.state.point,ut.pointLightShadows.value=Q.state.pointShadow,ut.hemisphereLights.value=Q.state.hemi,ut.directionalShadowMap.value=Q.state.directionalShadowMap,ut.directionalShadowMatrix.value=Q.state.directionalShadowMatrix,ut.spotShadowMap.value=Q.state.spotShadowMap,ut.spotLightMatrix.value=Q.state.spotLightMatrix,ut.spotLightMap.value=Q.state.spotLightMap,ut.pointShadowMap.value=Q.state.pointShadowMap,ut.pointShadowMatrix.value=Q.state.pointShadowMatrix),ne.currentProgram=ot,ne.uniformsList=null,ot}function qn(A){if(A.uniformsList===null){let q=A.currentProgram.getUniforms();A.uniformsList=or.seqWithValue(q.seq,A.uniforms)}return A.uniformsList}function Ti(A,q){let Z=de.get(A);Z.outputColorSpace=q.outputColorSpace,Z.batching=q.batching,Z.instancing=q.instancing,Z.instancingColor=q.instancingColor,Z.skinning=q.skinning,Z.morphTargets=q.morphTargets,Z.morphNormals=q.morphNormals,Z.morphColors=q.morphColors,Z.morphTargetsCount=q.morphTargetsCount,Z.numClippingPlanes=q.numClippingPlanes,Z.numIntersection=q.numClipIntersection,Z.vertexAlphas=q.vertexAlphas,Z.vertexTangents=q.vertexTangents,Z.toneMapping=q.toneMapping}function Ji(A,q,Z,ne,Q){q.isScene!==!0&&(q=qe),b.resetTextureUnits();let He=q.fog,Ze=ne.isMeshStandardMaterial?q.environment:null,Ye=R===null?_.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:Wi,ct=(ne.isMeshStandardMaterial?G:M).get(ne.envMap||Ze),dt=ne.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,ot=!!Z.attributes.tangent&&(!!ne.normalMap||ne.anisotropy>0),ut=!!Z.morphAttributes.position,Dt=!!Z.morphAttributes.normal,rn=!!Z.morphAttributes.color,Nt=Ii;ne.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(Nt=_.toneMapping);let pn=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,Rt=pn!==void 0?pn.length:0,pt=de.get(ne),Ut=m.state.lights;if(xe===!0&&(Ce===!0||A!==E)){let on=A===E&&ne.id===$;ht.setState(ne,A,on)}let At=!1;ne.version===pt.__version?(pt.needsLights&&pt.lightsStateVersion!==Ut.state.version||pt.outputColorSpace!==Ye||Q.isBatchedMesh&&pt.batching===!1||!Q.isBatchedMesh&&pt.batching===!0||Q.isInstancedMesh&&pt.instancing===!1||!Q.isInstancedMesh&&pt.instancing===!0||Q.isSkinnedMesh&&pt.skinning===!1||!Q.isSkinnedMesh&&pt.skinning===!0||Q.isInstancedMesh&&pt.instancingColor===!0&&Q.instanceColor===null||Q.isInstancedMesh&&pt.instancingColor===!1&&Q.instanceColor!==null||pt.envMap!==ct||ne.fog===!0&&pt.fog!==He||pt.numClippingPlanes!==void 0&&(pt.numClippingPlanes!==ht.numPlanes||pt.numIntersection!==ht.numIntersection)||pt.vertexAlphas!==dt||pt.vertexTangents!==ot||pt.morphTargets!==ut||pt.morphNormals!==Dt||pt.morphColors!==rn||pt.toneMapping!==Nt||V.isWebGL2===!0&&pt.morphTargetsCount!==Rt)&&(At=!0):(At=!0,pt.__version=ne.version);let Ot=pt.currentProgram;At===!0&&(Ot=pi(ne,q,Q));let Qt=!1,Zn=!1,Qn=!1,nt=Ot.getUniforms(),Pn=pt.uniforms;if(K.useProgram(Ot.program)&&(Qt=!0,Zn=!0,Qn=!0),ne.id!==$&&($=ne.id,Zn=!0),Qt||E!==A){nt.setValue(O,"projectionMatrix",A.projectionMatrix),nt.setValue(O,"viewMatrix",A.matrixWorldInverse);let on=nt.map.cameraPosition;on!==void 0&&on.setValue(O,at.setFromMatrixPosition(A.matrixWorld)),V.logarithmicDepthBuffer&&nt.setValue(O,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(ne.isMeshPhongMaterial||ne.isMeshToonMaterial||ne.isMeshLambertMaterial||ne.isMeshBasicMaterial||ne.isMeshStandardMaterial||ne.isShaderMaterial)&&nt.setValue(O,"isOrthographic",A.isOrthographicCamera===!0),E!==A&&(E=A,Zn=!0,Qn=!0)}if(Q.isSkinnedMesh){nt.setOptional(O,Q,"bindMatrix"),nt.setOptional(O,Q,"bindMatrixInverse");let on=Q.skeleton;on&&(V.floatVertexTextures?(on.boneTexture===null&&on.computeBoneTexture(),nt.setValue(O,"boneTexture",on.boneTexture,b)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}Q.isBatchedMesh&&(nt.setOptional(O,Q,"batchingTexture"),nt.setValue(O,"batchingTexture",Q._matricesTexture,b));let Ai=Z.morphAttributes;if((Ai.position!==void 0||Ai.normal!==void 0||Ai.color!==void 0&&V.isWebGL2===!0)&&Ke.update(Q,Z,Ot),(Zn||pt.receiveShadow!==Q.receiveShadow)&&(pt.receiveShadow=Q.receiveShadow,nt.setValue(O,"receiveShadow",Q.receiveShadow)),ne.isMeshGouraudMaterial&&ne.envMap!==null&&(Pn.envMap.value=ct,Pn.flipEnvMap.value=ct.isCubeTexture&&ct.isRenderTargetTexture===!1?-1:1),Zn&&(nt.setValue(O,"toneMappingExposure",_.toneMappingExposure),pt.needsLights&&us(Pn,Qn),He&&ne.fog===!0&&Se.refreshFogUniforms(Pn,He),Se.refreshMaterialUniforms(Pn,ne,P,ie,Fe),or.upload(O,qn(pt),Pn,b)),ne.isShaderMaterial&&ne.uniformsNeedUpdate===!0&&(or.upload(O,qn(pt),Pn,b),ne.uniformsNeedUpdate=!1),ne.isSpriteMaterial&&nt.setValue(O,"center",Q.center),nt.setValue(O,"modelViewMatrix",Q.modelViewMatrix),nt.setValue(O,"normalMatrix",Q.normalMatrix),nt.setValue(O,"modelMatrix",Q.matrixWorld),ne.isShaderMaterial||ne.isRawShaderMaterial){let on=ne.uniformsGroups;for(let Ri=0,mi=on.length;Ri<mi;Ri++)if(V.isWebGL2){let w=on[Ri];bt.update(w,Ot),bt.bind(w,Ot)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Ot}function us(A,q){A.ambientLightColor.needsUpdate=q,A.lightProbe.needsUpdate=q,A.directionalLights.needsUpdate=q,A.directionalLightShadows.needsUpdate=q,A.pointLights.needsUpdate=q,A.pointLightShadows.needsUpdate=q,A.spotLights.needsUpdate=q,A.spotLightShadows.needsUpdate=q,A.rectAreaLights.needsUpdate=q,A.hemisphereLights.needsUpdate=q}function Yn(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return B},this.getActiveMipmapLevel=function(){return N},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(A,q,Z){de.get(A.texture).__webglTexture=q,de.get(A.depthTexture).__webglTexture=Z;let ne=de.get(A);ne.__hasExternalTextures=!0,ne.__hasExternalTextures&&(ne.__autoAllocateDepthBuffer=Z===void 0,ne.__autoAllocateDepthBuffer||te.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ne.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(A,q){let Z=de.get(A);Z.__webglFramebuffer=q,Z.__useDefaultFramebuffer=q===void 0},this.setRenderTarget=function(A,q=0,Z=0){R=A,B=q,N=Z;let ne=!0,Q=null,He=!1,Ze=!1;if(A){let ct=de.get(A);ct.__useDefaultFramebuffer!==void 0?(K.bindFramebuffer(O.FRAMEBUFFER,null),ne=!1):ct.__webglFramebuffer===void 0?b.setupRenderTarget(A):ct.__hasExternalTextures&&b.rebindTextures(A,de.get(A.texture).__webglTexture,de.get(A.depthTexture).__webglTexture);let dt=A.texture;(dt.isData3DTexture||dt.isDataArrayTexture||dt.isCompressedArrayTexture)&&(Ze=!0);let ot=de.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(ot[q])?Q=ot[q][Z]:Q=ot[q],He=!0):V.isWebGL2&&A.samples>0&&b.useMultisampledRTT(A)===!1?Q=de.get(A).__webglMultisampledFramebuffer:Array.isArray(ot)?Q=ot[Z]:Q=ot,I.copy(A.viewport),J.copy(A.scissor),ce=A.scissorTest}else I.copy(fe).multiplyScalar(P).floor(),J.copy(me).multiplyScalar(P).floor(),ce=Ae;if(K.bindFramebuffer(O.FRAMEBUFFER,Q)&&V.drawBuffers&&ne&&K.drawBuffers(A,Q),K.viewport(I),K.scissor(J),K.setScissorTest(ce),He){let ct=de.get(A.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+q,ct.__webglTexture,Z)}else if(Ze){let ct=de.get(A.texture),dt=q||0;O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,ct.__webglTexture,Z||0,dt)}$=-1},this.readRenderTargetPixels=function(A,q,Z,ne,Q,He,Ze){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ye=de.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ze!==void 0&&(Ye=Ye[Ze]),Ye){K.bindFramebuffer(O.FRAMEBUFFER,Ye);try{let ct=A.texture,dt=ct.format,ot=ct.type;if(dt!==Ei&&ke.convert(dt)!==O.getParameter(O.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let ut=ot===bi&&(te.has("EXT_color_buffer_half_float")||V.isWebGL2&&te.has("EXT_color_buffer_float"));if(ot!==ss&&ke.convert(ot)!==O.getParameter(O.IMPLEMENTATION_COLOR_READ_TYPE)&&!(ot===is&&(V.isWebGL2||te.has("OES_texture_float")||te.has("WEBGL_color_buffer_float")))&&!ut){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=A.width-ne&&Z>=0&&Z<=A.height-Q&&O.readPixels(q,Z,ne,Q,ke.convert(dt),ke.convert(ot),He)}finally{let ct=R!==null?de.get(R).__webglFramebuffer:null;K.bindFramebuffer(O.FRAMEBUFFER,ct)}}},this.copyFramebufferToTexture=function(A,q,Z=0){let ne=Math.pow(2,-Z),Q=Math.floor(q.image.width*ne),He=Math.floor(q.image.height*ne);b.setTexture2D(q,0),O.copyTexSubImage2D(O.TEXTURE_2D,Z,0,0,A.x,A.y,Q,He),K.unbindTexture()},this.copyTextureToTexture=function(A,q,Z,ne=0){let Q=q.image.width,He=q.image.height,Ze=ke.convert(Z.format),Ye=ke.convert(Z.type);b.setTexture2D(Z,0),O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,Z.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Z.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,Z.unpackAlignment),q.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,ne,A.x,A.y,Q,He,Ze,Ye,q.image.data):q.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,ne,A.x,A.y,q.mipmaps[0].width,q.mipmaps[0].height,Ze,q.mipmaps[0].data):O.texSubImage2D(O.TEXTURE_2D,ne,A.x,A.y,Ze,Ye,q.image),ne===0&&Z.generateMipmaps&&O.generateMipmap(O.TEXTURE_2D),K.unbindTexture()},this.copyTextureToTexture3D=function(A,q,Z,ne,Q=0){if(_.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let He=A.max.x-A.min.x+1,Ze=A.max.y-A.min.y+1,Ye=A.max.z-A.min.z+1,ct=ke.convert(ne.format),dt=ke.convert(ne.type),ot;if(ne.isData3DTexture)b.setTexture3D(ne,0),ot=O.TEXTURE_3D;else if(ne.isDataArrayTexture||ne.isCompressedArrayTexture)b.setTexture2DArray(ne,0),ot=O.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,ne.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ne.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,ne.unpackAlignment);let ut=O.getParameter(O.UNPACK_ROW_LENGTH),Dt=O.getParameter(O.UNPACK_IMAGE_HEIGHT),rn=O.getParameter(O.UNPACK_SKIP_PIXELS),Nt=O.getParameter(O.UNPACK_SKIP_ROWS),pn=O.getParameter(O.UNPACK_SKIP_IMAGES),Rt=Z.isCompressedTexture?Z.mipmaps[Q]:Z.image;O.pixelStorei(O.UNPACK_ROW_LENGTH,Rt.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Rt.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,A.min.x),O.pixelStorei(O.UNPACK_SKIP_ROWS,A.min.y),O.pixelStorei(O.UNPACK_SKIP_IMAGES,A.min.z),Z.isDataTexture||Z.isData3DTexture?O.texSubImage3D(ot,Q,q.x,q.y,q.z,He,Ze,Ye,ct,dt,Rt.data):Z.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),O.compressedTexSubImage3D(ot,Q,q.x,q.y,q.z,He,Ze,Ye,ct,Rt.data)):O.texSubImage3D(ot,Q,q.x,q.y,q.z,He,Ze,Ye,ct,dt,Rt),O.pixelStorei(O.UNPACK_ROW_LENGTH,ut),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Dt),O.pixelStorei(O.UNPACK_SKIP_PIXELS,rn),O.pixelStorei(O.UNPACK_SKIP_ROWS,Nt),O.pixelStorei(O.UNPACK_SKIP_IMAGES,pn),Q===0&&ne.generateMipmaps&&O.generateMipmap(ot),K.unbindTexture()},this.initTexture=function(A){A.isCubeTexture?b.setTextureCube(A,0):A.isData3DTexture?b.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?b.setTexture2DArray(A,0):b.setTexture2D(A,0),K.unbindTexture()},this.resetState=function(){B=0,N=0,R=null,K.reset(),rt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Vi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===Ec?"display-p3":"srgb",t.unpackColorSpace=Pt.workingColorSpace===xa?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Ct?bs:Pu}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===bs?Ct:Wi}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}},Kl=class extends Fr{};Kl.prototype.isWebGL1Renderer=!0;var ea=class s{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Je(e),this.near=t,this.far=n}clone(){return new s(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},dr=class extends Fn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}},ta=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Ul,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=Gi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Gi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Gi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Hn=new L,Br=class s{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Hn.fromBufferAttribute(this,t),Hn.applyMatrix4(e),this.setXYZ(t,Hn.x,Hn.y,Hn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Hn.fromBufferAttribute(this,t),Hn.applyNormalMatrix(e),this.setXYZ(t,Hn.x,Hn.y,Hn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Hn.fromBufferAttribute(this,t),Hn.transformDirection(e),this.setXYZ(t,Hn.x,Hn.y,Hn.z);return this}setX(e,t){return this.normalized&&(t=Ht(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Ht(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Ht(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Ht(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=ki(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=ki(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=ki(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=ki(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ht(t,this.array),n=Ht(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ht(t,this.array),n=Ht(n,this.array),i=Ht(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ht(t,this.array),n=Ht(n,this.array),i=Ht(i,this.array),r=Ht(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new En(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new s(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Ts=class extends as{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Je(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},$s,br=new L,Ks=new L,Qs=new L,js=new Ee,wr=new Ee,Vu=new vt,Co=new L,Tr=new L,Po=new L,au=new Ee,Ml=new Ee,lu=new Ee,pr=class extends Fn{constructor(e=new Ts){if(super(),this.isSprite=!0,this.type="Sprite",$s===void 0){$s=new bn;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new ta(t,5);$s.setIndex([0,1,2,0,2,3]),$s.setAttribute("position",new Br(n,3,0,!1)),$s.setAttribute("uv",new Br(n,2,3,!1))}this.geometry=$s,this.material=e,this.center=new Ee(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ks.setFromMatrixScale(this.matrixWorld),Vu.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Qs.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ks.multiplyScalar(-Qs.z);let n=this.material.rotation,i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));let o=this.center;Io(Co.set(-.5,-.5,0),Qs,o,Ks,i,r),Io(Tr.set(.5,-.5,0),Qs,o,Ks,i,r),Io(Po.set(.5,.5,0),Qs,o,Ks,i,r),au.set(0,0),Ml.set(1,0),lu.set(1,1);let a=e.ray.intersectTriangle(Co,Tr,Po,!1,br);if(a===null&&(Io(Tr.set(-.5,.5,0),Qs,o,Ks,i,r),Ml.set(0,1),a=e.ray.intersectTriangle(Co,Po,Tr,!1,br),a===null))return;let l=e.ray.origin.distanceTo(br);l<e.near||l>e.far||t.push({distance:l,point:br.clone(),uv:Ms.getInterpolation(br,Co,Tr,Po,au,Ml,lu,new Ee),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function Io(s,e,t,n,i,r){js.subVectors(s,t).addScalar(.5).multiply(n),i!==void 0?(wr.x=r*js.x-i*js.y,wr.y=i*js.x+r*js.y):wr.copy(js),s.copy(e),s.x+=wr.x,s.y+=wr.y,s.applyMatrix4(Vu)}var Li=class extends En{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},er=new vt,cu=new vt,Lo=[],hu=new Xi,Y0=new vt,Ar=new Ue,Rr=new ws,Gt=class extends Ue{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Li(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Y0)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Xi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,er),hu.copy(e.boundingBox).applyMatrix4(er),this.boundingBox.union(hu)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new ws),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,er),Rr.copy(e.boundingSphere).applyMatrix4(er),this.boundingSphere.union(Rr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){let n=this.matrixWorld,i=this.count;if(Ar.geometry=this.geometry,Ar.material=this.material,Ar.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Rr.copy(this.boundingSphere),Rr.applyMatrix4(n),e.ray.intersectsSphere(Rr)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,er),cu.multiplyMatrices(n,er),Ar.matrixWorld=cu,Ar.raycast(e,Lo);for(let o=0,a=Lo.length;o<a;o++){let l=Lo[o];l.instanceId=r,l.object=this,t.push(l)}Lo.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Li(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}};var dn=class extends li{constructor(e,t,n,i,r,o,a,l,c){super(e,t,n,i,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},hi=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,i=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(i),t.push(r),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let n=this.getLengths(),i=0,r=n.length,o;t?o=t:o=e*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),c=n[i]-o,c<0)a=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===o)return i/(r-1);let h=n[i],f=n[i+1]-h,p=(o-h)/f;return(i+p)/(r-1)}getTangent(e,t){let i=e-1e-4,r=e+1e-4;i<0&&(i=0),r>1&&(r=1);let o=this.getPoint(i),a=this.getPoint(r),l=t||(o.isVector2?new Ee:new L);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){let n=new L,i=[],r=[],o=[],a=new L,l=new vt;for(let p=0;p<=e;p++){let x=p/e;i[p]=this.getTangentAt(x,new L)}r[0]=new L,o[0]=new L;let c=Number.MAX_VALUE,h=Math.abs(i[0].x),u=Math.abs(i[0].y),f=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),f<=c&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],a),o[0].crossVectors(i[0],r[0]);for(let p=1;p<=e;p++){if(r[p]=r[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(i[p-1],i[p]),a.length()>Number.EPSILON){a.normalize();let x=Math.acos(Rn(i[p-1].dot(i[p]),-1,1));r[p].applyMatrix4(l.makeRotationAxis(a,x))}o[p].crossVectors(i[p],r[p])}if(t===!0){let p=Math.acos(Rn(r[0].dot(r[e]),-1,1));p/=e,i[0].dot(a.crossVectors(r[0],r[e]))>0&&(p=-p);for(let x=1;x<=e;x++)r[x].applyMatrix4(l.makeRotationAxis(i[x],p*x)),o[x].crossVectors(i[x],r[x])}return{tangents:i,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Hr=class extends hi{constructor(e=0,t=0,n=1,i=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t){let n=t||new Ee,i=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(o?r=0:r=i),this.aClockwise===!0&&!o&&(r===i?r=-i:r=r-i);let a=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=l-this.aX,p=c-this.aY;l=f*h-p*u+this.aX,c=f*u+p*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Ql=class extends Hr{constructor(e,t,n,i,r,o){super(e,t,n,n,i,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function wc(){let s=0,e=0,t=0,n=0;function i(r,o,a,l){s=r,e=a,t=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){i(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,u){let f=(o-r)/c-(a-r)/(c+h)+(a-o)/h,p=(a-o)/h-(l-o)/(h+u)+(l-a)/u;f*=h,p*=h,i(o,a,f,p)},calc:function(r){let o=r*r,a=o*r;return s+e*r+t*o+n*a}}}var Uo=new L,Sl=new wc,El=new wc,bl=new wc,kr=class extends hi{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new L){let n=t,i=this.points,r=i.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=i[(a-1)%r]:(Uo.subVectors(i[0],i[1]).add(i[0]),c=Uo);let u=i[a%r],f=i[(a+1)%r];if(this.closed||a+2<r?h=i[(a+2)%r]:(Uo.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=Uo),this.curveType==="centripetal"||this.curveType==="chordal"){let p=this.curveType==="chordal"?.5:.25,x=Math.pow(c.distanceToSquared(u),p),y=Math.pow(u.distanceToSquared(f),p),m=Math.pow(f.distanceToSquared(h),p);y<1e-4&&(y=1),x<1e-4&&(x=y),m<1e-4&&(m=y),Sl.initNonuniformCatmullRom(c.x,u.x,f.x,h.x,x,y,m),El.initNonuniformCatmullRom(c.y,u.y,f.y,h.y,x,y,m),bl.initNonuniformCatmullRom(c.z,u.z,f.z,h.z,x,y,m)}else this.curveType==="catmullrom"&&(Sl.initCatmullRom(c.x,u.x,f.x,h.x,this.tension),El.initCatmullRom(c.y,u.y,f.y,h.y,this.tension),bl.initCatmullRom(c.z,u.z,f.z,h.z,this.tension));return n.set(Sl.calc(l),El.calc(l),bl.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new L().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function uu(s,e,t,n,i){let r=(n-e)*.5,o=(i-t)*.5,a=s*s,l=s*a;return(2*t-2*n+r+o)*l+(-3*t+3*n-2*r-o)*a+r*s+t}function Z0(s,e){let t=1-s;return t*t*e}function J0(s,e){return 2*(1-s)*s*e}function $0(s,e){return s*s*e}function Lr(s,e,t,n){return Z0(s,e)+J0(s,t)+$0(s,n)}function K0(s,e){let t=1-s;return t*t*t*e}function Q0(s,e){let t=1-s;return 3*t*t*s*e}function j0(s,e){return 3*(1-s)*s*s*e}function ex(s,e){return s*s*s*e}function Ur(s,e,t,n,i){return K0(s,e)+Q0(s,t)+j0(s,n)+ex(s,i)}var na=class extends hi{constructor(e=new Ee,t=new Ee,n=new Ee,i=new Ee){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new Ee){let n=t,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Ur(e,i.x,r.x,o.x,a.x),Ur(e,i.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},jl=class extends hi{constructor(e=new L,t=new L,n=new L,i=new L){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new L){let n=t,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Ur(e,i.x,r.x,o.x,a.x),Ur(e,i.y,r.y,o.y,a.y),Ur(e,i.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},ia=class extends hi{constructor(e=new Ee,t=new Ee){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Ee){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Ee){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ec=class extends hi{constructor(e=new L,t=new L){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new L){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new L){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},sa=class extends hi{constructor(e=new Ee,t=new Ee,n=new Ee){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new Ee){let n=t,i=this.v0,r=this.v1,o=this.v2;return n.set(Lr(e,i.x,r.x,o.x),Lr(e,i.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ra=class extends hi{constructor(e=new L,t=new L,n=new L){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new L){let n=t,i=this.v0,r=this.v1,o=this.v2;return n.set(Lr(e,i.x,r.x,o.x),Lr(e,i.y,r.y,o.y),Lr(e,i.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},oa=class extends hi{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Ee){let n=t,i=this.points,r=(i.length-1)*e,o=Math.floor(r),a=r-o,l=i[o===0?o:o-1],c=i[o],h=i[o>i.length-2?i.length-1:o+1],u=i[o>i.length-3?i.length-1:o+2];return n.set(uu(a,l.x,c.x,h.x,u.x),uu(a,l.y,c.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new Ee().fromArray(i))}return this}},aa=Object.freeze({__proto__:null,ArcCurve:Ql,CatmullRomCurve3:kr,CubicBezierCurve:na,CubicBezierCurve3:jl,EllipseCurve:Hr,LineCurve:ia,LineCurve3:ec,QuadraticBezierCurve:sa,QuadraticBezierCurve3:ra,SplineCurve:oa}),tc=class extends hi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new aa[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),i=this.getCurveLengths(),r=0;for(;r<i.length;){if(i[r]>=n){let o=i[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let i=0,r=this.curves;i<r.length;i++){let o=r[i],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let i=e.curves[t];this.curves.push(new aa[i.type]().fromJSON(i))}return this}},mr=class extends tc{constructor(e){super(),this.type="Path",this.currentPoint=new Ee,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new ia(this.currentPoint.clone(),new Ee(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){let r=new sa(this.currentPoint.clone(),new Ee(e,t),new Ee(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,r,o){let a=new na(this.currentPoint.clone(),new Ee(e,t),new Ee(n,i),new Ee(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new oa(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,n,i,r,o),this}absarc(e,t,n,i,r,o){return this.absellipse(e,t,n,n,i,r,o),this}ellipse(e,t,n,i,r,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,i,r,o,a,l),this}absellipse(e,t,n,i,r,o,a,l){let c=new Hr(e,t,n,i,r,o,a,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}};var la=class s extends bn{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);let r=[],o=[],a=[],l=[],c=new L,h=new Ee;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,f=3;u<=t;u++,f+=3){let p=n+u/t*i;c.x=e*Math.cos(p),c.y=e*Math.sin(p),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[f]/e+1)/2,h.y=(o[f+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new It(o,3)),this.setAttribute("normal",new It(a,3)),this.setAttribute("uv",new It(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.segments,e.thetaStart,e.thetaLength)}},$n=class s extends bn{constructor(e=1,t=1,n=1,i=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;i=Math.floor(i),r=Math.floor(r);let h=[],u=[],f=[],p=[],x=0,y=[],m=n/2,d=0;C(),o===!1&&(e>0&&_(!0),t>0&&_(!1)),this.setIndex(h),this.setAttribute("position",new It(u,3)),this.setAttribute("normal",new It(f,3)),this.setAttribute("uv",new It(p,2));function C(){let T=new L,B=new L,N=0,R=(t-e)/n;for(let $=0;$<=r;$++){let E=[],I=$/r,J=I*(t-e)+e;for(let ce=0;ce<=i;ce++){let be=ce/i,k=be*l+a,Y=Math.sin(k),ie=Math.cos(k);B.x=J*Y,B.y=-I*n+m,B.z=J*ie,u.push(B.x,B.y,B.z),T.set(Y,R,ie).normalize(),f.push(T.x,T.y,T.z),p.push(be,1-I),E.push(x++)}y.push(E)}for(let $=0;$<i;$++)for(let E=0;E<r;E++){let I=y[E][$],J=y[E+1][$],ce=y[E+1][$+1],be=y[E][$+1];h.push(I,J,be),h.push(J,ce,be),N+=6}c.addGroup(d,N,0),d+=N}function _(T){let B=x,N=new Ee,R=new L,$=0,E=T===!0?e:t,I=T===!0?1:-1;for(let ce=1;ce<=i;ce++)u.push(0,m*I,0),f.push(0,I,0),p.push(.5,.5),x++;let J=x;for(let ce=0;ce<=i;ce++){let k=ce/i*l+a,Y=Math.cos(k),ie=Math.sin(k);R.x=E*ie,R.y=m*I,R.z=E*Y,u.push(R.x,R.y,R.z),f.push(0,I,0),N.x=Y*.5+.5,N.y=ie*.5*I+.5,p.push(N.x,N.y),x++}for(let ce=0;ce<i;ce++){let be=B+ce,k=J+ce;T===!0?h.push(k,k+1,be):h.push(k+1,k,be),$+=3}c.addGroup(d,$,T===!0?1:2),d+=$}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},ls=class s extends $n{constructor(e=1,t=1,n=32,i=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,n,i,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new s(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var Vr=class extends mr{constructor(e){super(e),this.uuid=Gi(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let i=e.holes[t];this.holes.push(new mr().fromJSON(i))}return this}},tx={triangulate:function(s,e,t=2){let n=e&&e.length,i=n?e[0]*t:s.length,r=Gu(s,0,i,t,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c,h,u,f,p;if(n&&(r=ox(s,e,r,t)),s.length>80*t){a=c=s[0],l=h=s[1];for(let x=t;x<i;x+=t)u=s[x],f=s[x+1],u<a&&(a=u),f<l&&(l=f),u>c&&(c=u),f>h&&(h=f);p=Math.max(c-a,h-l),p=p!==0?32767/p:0}return Gr(r,o,t,a,l,p,0),o}};function Gu(s,e,t,n,i){let r,o;if(i===xx(s,e,t,n)>0)for(r=e;r<t;r+=n)o=fu(r,s[r],s[r+1],o);else for(r=t-n;r>=e;r-=n)o=fu(r,s[r],s[r+1],o);return o&&va(o,o.next)&&(Xr(o),o=o.next),o}function As(s,e){if(!s)return s;e||(e=s);let t=s,n;do if(n=!1,!t.steiner&&(va(t,t.next)||Kt(t.prev,t,t.next)===0)){if(Xr(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Gr(s,e,t,n,i,r,o){if(!s)return;!o&&r&&ux(s,n,i,r);let a=s,l,c;for(;s.prev!==s.next;){if(l=s.prev,c=s.next,r?ix(s,n,i,r):nx(s)){e.push(l.i/t|0),e.push(s.i/t|0),e.push(c.i/t|0),Xr(s),s=c.next,a=c.next;continue}if(s=c,s===a){o?o===1?(s=sx(As(s),e,t),Gr(s,e,t,n,i,r,2)):o===2&&rx(s,e,t,n,i,r):Gr(As(s),e,t,n,i,r,1);break}}}function nx(s){let e=s.prev,t=s,n=s.next;if(Kt(e,t,n)>=0)return!1;let i=e.x,r=t.x,o=n.x,a=e.y,l=t.y,c=n.y,h=i<r?i<o?i:o:r<o?r:o,u=a<l?a<c?a:c:l<c?l:c,f=i>r?i>o?i:o:r>o?r:o,p=a>l?a>c?a:c:l>c?l:c,x=n.next;for(;x!==e;){if(x.x>=h&&x.x<=f&&x.y>=u&&x.y<=p&&ir(i,a,r,l,o,c,x.x,x.y)&&Kt(x.prev,x,x.next)>=0)return!1;x=x.next}return!0}function ix(s,e,t,n){let i=s.prev,r=s,o=s.next;if(Kt(i,r,o)>=0)return!1;let a=i.x,l=r.x,c=o.x,h=i.y,u=r.y,f=o.y,p=a<l?a<c?a:c:l<c?l:c,x=h<u?h<f?h:f:u<f?u:f,y=a>l?a>c?a:c:l>c?l:c,m=h>u?h>f?h:f:u>f?u:f,d=nc(p,x,e,t,n),C=nc(y,m,e,t,n),_=s.prevZ,T=s.nextZ;for(;_&&_.z>=d&&T&&T.z<=C;){if(_.x>=p&&_.x<=y&&_.y>=x&&_.y<=m&&_!==i&&_!==o&&ir(a,h,l,u,c,f,_.x,_.y)&&Kt(_.prev,_,_.next)>=0||(_=_.prevZ,T.x>=p&&T.x<=y&&T.y>=x&&T.y<=m&&T!==i&&T!==o&&ir(a,h,l,u,c,f,T.x,T.y)&&Kt(T.prev,T,T.next)>=0))return!1;T=T.nextZ}for(;_&&_.z>=d;){if(_.x>=p&&_.x<=y&&_.y>=x&&_.y<=m&&_!==i&&_!==o&&ir(a,h,l,u,c,f,_.x,_.y)&&Kt(_.prev,_,_.next)>=0)return!1;_=_.prevZ}for(;T&&T.z<=C;){if(T.x>=p&&T.x<=y&&T.y>=x&&T.y<=m&&T!==i&&T!==o&&ir(a,h,l,u,c,f,T.x,T.y)&&Kt(T.prev,T,T.next)>=0)return!1;T=T.nextZ}return!0}function sx(s,e,t){let n=s;do{let i=n.prev,r=n.next.next;!va(i,r)&&Wu(i,n,n.next,r)&&Wr(i,r)&&Wr(r,i)&&(e.push(i.i/t|0),e.push(n.i/t|0),e.push(r.i/t|0),Xr(n),Xr(n.next),n=s=r),n=n.next}while(n!==s);return As(n)}function rx(s,e,t,n,i,r){let o=s;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&px(o,a)){let l=Xu(o,a);o=As(o,o.next),l=As(l,l.next),Gr(o,e,t,n,i,r,0),Gr(l,e,t,n,i,r,0);return}a=a.next}o=o.next}while(o!==s)}function ox(s,e,t,n){let i=[],r,o,a,l,c;for(r=0,o=e.length;r<o;r++)a=e[r]*n,l=r<o-1?e[r+1]*n:s.length,c=Gu(s,a,l,n,!1),c===c.next&&(c.steiner=!0),i.push(dx(c));for(i.sort(ax),r=0;r<i.length;r++)t=lx(i[r],t);return t}function ax(s,e){return s.x-e.x}function lx(s,e){let t=cx(s,e);if(!t)return e;let n=Xu(t,s);return As(n,n.next),As(t,t.next)}function cx(s,e){let t=e,n=-1/0,i,r=s.x,o=s.y;do{if(o<=t.y&&o>=t.next.y&&t.next.y!==t.y){let f=t.x+(o-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(f<=r&&f>n&&(n=f,i=t.x<t.next.x?t:t.next,f===r))return i}t=t.next}while(t!==e);if(!i)return null;let a=i,l=i.x,c=i.y,h=1/0,u;t=i;do r>=t.x&&t.x>=l&&r!==t.x&&ir(o<c?r:n,o,l,c,o<c?n:r,o,t.x,t.y)&&(u=Math.abs(o-t.y)/(r-t.x),Wr(t,s)&&(u<h||u===h&&(t.x>i.x||t.x===i.x&&hx(i,t)))&&(i=t,h=u)),t=t.next;while(t!==a);return i}function hx(s,e){return Kt(s.prev,s,e.prev)<0&&Kt(e.next,s,s.next)<0}function ux(s,e,t,n){let i=s;do i.z===0&&(i.z=nc(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,fx(i)}function fx(s){let e,t,n,i,r,o,a,l,c=1;do{for(t=s,s=null,r=null,o=0;t;){for(o++,n=t,a=0,e=0;e<c&&(a++,n=n.nextZ,!!n);e++);for(l=c;a>0||l>0&&n;)a!==0&&(l===0||!n||t.z<=n.z)?(i=t,t=t.nextZ,a--):(i=n,n=n.nextZ,l--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;t=n}r.nextZ=null,c*=2}while(o>1);return s}function nc(s,e,t,n,i){return s=(s-t)*i|0,e=(e-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,s|e<<1}function dx(s){let e=s,t=s;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==s);return t}function ir(s,e,t,n,i,r,o,a){return(i-o)*(e-a)>=(s-o)*(r-a)&&(s-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(i-o)*(n-a)}function px(s,e){return s.next.i!==e.i&&s.prev.i!==e.i&&!mx(s,e)&&(Wr(s,e)&&Wr(e,s)&&gx(s,e)&&(Kt(s.prev,s,e.prev)||Kt(s,e.prev,e))||va(s,e)&&Kt(s.prev,s,s.next)>0&&Kt(e.prev,e,e.next)>0)}function Kt(s,e,t){return(e.y-s.y)*(t.x-e.x)-(e.x-s.x)*(t.y-e.y)}function va(s,e){return s.x===e.x&&s.y===e.y}function Wu(s,e,t,n){let i=No(Kt(s,e,t)),r=No(Kt(s,e,n)),o=No(Kt(t,n,s)),a=No(Kt(t,n,e));return!!(i!==r&&o!==a||i===0&&Do(s,t,e)||r===0&&Do(s,n,e)||o===0&&Do(t,s,n)||a===0&&Do(t,e,n))}function Do(s,e,t){return e.x<=Math.max(s.x,t.x)&&e.x>=Math.min(s.x,t.x)&&e.y<=Math.max(s.y,t.y)&&e.y>=Math.min(s.y,t.y)}function No(s){return s>0?1:s<0?-1:0}function mx(s,e){let t=s;do{if(t.i!==s.i&&t.next.i!==s.i&&t.i!==e.i&&t.next.i!==e.i&&Wu(t,t.next,s,e))return!0;t=t.next}while(t!==s);return!1}function Wr(s,e){return Kt(s.prev,s,s.next)<0?Kt(s,e,s.next)>=0&&Kt(s,s.prev,e)>=0:Kt(s,e,s.prev)<0||Kt(s,s.next,e)<0}function gx(s,e){let t=s,n=!1,i=(s.x+e.x)/2,r=(s.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&i<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==s);return n}function Xu(s,e){let t=new ic(s.i,s.x,s.y),n=new ic(e.i,e.x,e.y),i=s.next,r=e.prev;return s.next=e,e.prev=s,t.next=i,i.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function fu(s,e,t,n){let i=new ic(s,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Xr(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function ic(s,e,t){this.i=s,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function xx(s,e,t,n){let i=0;for(let r=e,o=t-n;r<t;r+=n)i+=(s[o]-s[r])*(s[r+1]+s[o+1]),o=r;return i}var Dr=class s{static area(e){let t=e.length,n=0;for(let i=t-1,r=0;r<t;i=r++)n+=e[i].x*e[r].y-e[r].x*e[i].y;return n*.5}static isClockWise(e){return s.area(e)<0}static triangulateShape(e,t){let n=[],i=[],r=[];du(e),pu(n,e);let o=e.length;t.forEach(du);for(let l=0;l<t.length;l++)i.push(o),o+=t[l].length,pu(n,t[l]);let a=tx.triangulate(n,i);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function du(s){let e=s.length;e>2&&s[e-1].equals(s[0])&&s.pop()}function pu(s,e){for(let t=0;t<e.length;t++)s.push(e[t].x),s.push(e[t].y)}var ca=class s extends bn{constructor(e=new Vr([new Ee(.5,.5),new Ee(-.5,.5),new Ee(-.5,-.5),new Ee(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,i=[],r=[];for(let a=0,l=e.length;a<l;a++){let c=e[a];o(c)}this.setAttribute("position",new It(i,3)),this.setAttribute("uv",new It(r,2)),this.computeVertexNormals();function o(a){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1,f=t.bevelEnabled!==void 0?t.bevelEnabled:!0,p=t.bevelThickness!==void 0?t.bevelThickness:.2,x=t.bevelSize!==void 0?t.bevelSize:p-.1,y=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3,d=t.extrudePath,C=t.UVGenerator!==void 0?t.UVGenerator:_x,_,T=!1,B,N,R,$;d&&(_=d.getSpacedPoints(h),T=!0,f=!1,B=d.computeFrenetFrames(h,!1),N=new L,R=new L,$=new L),f||(m=0,p=0,x=0,y=0);let E=a.extractPoints(c),I=E.shape,J=E.holes;if(!Dr.isClockWise(I)){I=I.reverse();for(let O=0,ee=J.length;O<ee;O++){let te=J[O];Dr.isClockWise(te)&&(J[O]=te.reverse())}}let be=Dr.triangulateShape(I,J),k=I;for(let O=0,ee=J.length;O<ee;O++){let te=J[O];I=I.concat(te)}function Y(O,ee,te){return ee||console.error("THREE.ExtrudeGeometry: vec does not exist"),O.clone().addScaledVector(ee,te)}let ie=I.length,P=be.length;function oe(O,ee,te){let V,K,_e,de=O.x-ee.x,b=O.y-ee.y,M=te.x-O.x,G=te.y-O.y,re=de*de+b*b,pe=de*G-b*M;if(Math.abs(pe)>Number.EPSILON){let ge=Math.sqrt(re),ze=Math.sqrt(M*M+G*G),Se=ee.x-b/ge,De=ee.y+de/ge,$e=te.x-G/ze,ht=te.y+M/ze,ve=(($e-Se)*G-(ht-De)*M)/(de*G-b*M);V=Se+de*ve-O.x,K=De+b*ve-O.y;let yt=V*V+K*K;if(yt<=2)return new Ee(V,K);_e=Math.sqrt(yt/2)}else{let ge=!1;de>Number.EPSILON?M>Number.EPSILON&&(ge=!0):de<-Number.EPSILON?M<-Number.EPSILON&&(ge=!0):Math.sign(b)===Math.sign(G)&&(ge=!0),ge?(V=-b,K=de,_e=Math.sqrt(re)):(V=de,K=b,_e=Math.sqrt(re/2))}return new Ee(V/_e,K/_e)}let le=[];for(let O=0,ee=k.length,te=ee-1,V=O+1;O<ee;O++,te++,V++)te===ee&&(te=0),V===ee&&(V=0),le[O]=oe(k[O],k[te],k[V]);let fe=[],me,Ae=le.concat();for(let O=0,ee=J.length;O<ee;O++){let te=J[O];me=[];for(let V=0,K=te.length,_e=K-1,de=V+1;V<K;V++,_e++,de++)_e===K&&(_e=0),de===K&&(de=0),me[V]=oe(te[V],te[_e],te[de]);fe.push(me),Ae=Ae.concat(me)}for(let O=0;O<m;O++){let ee=O/m,te=p*Math.cos(ee*Math.PI/2),V=x*Math.sin(ee*Math.PI/2)+y;for(let K=0,_e=k.length;K<_e;K++){let de=Y(k[K],le[K],V);Ge(de.x,de.y,-te)}for(let K=0,_e=J.length;K<_e;K++){let de=J[K];me=fe[K];for(let b=0,M=de.length;b<M;b++){let G=Y(de[b],me[b],V);Ge(G.x,G.y,-te)}}}let se=x+y;for(let O=0;O<ie;O++){let ee=f?Y(I[O],Ae[O],se):I[O];T?(R.copy(B.normals[0]).multiplyScalar(ee.x),N.copy(B.binormals[0]).multiplyScalar(ee.y),$.copy(_[0]).add(R).add(N),Ge($.x,$.y,$.z)):Ge(ee.x,ee.y,0)}for(let O=1;O<=h;O++)for(let ee=0;ee<ie;ee++){let te=f?Y(I[ee],Ae[ee],se):I[ee];T?(R.copy(B.normals[O]).multiplyScalar(te.x),N.copy(B.binormals[O]).multiplyScalar(te.y),$.copy(_[O]).add(R).add(N),Ge($.x,$.y,$.z)):Ge(te.x,te.y,u/h*O)}for(let O=m-1;O>=0;O--){let ee=O/m,te=p*Math.cos(ee*Math.PI/2),V=x*Math.sin(ee*Math.PI/2)+y;for(let K=0,_e=k.length;K<_e;K++){let de=Y(k[K],le[K],V);Ge(de.x,de.y,u+te)}for(let K=0,_e=J.length;K<_e;K++){let de=J[K];me=fe[K];for(let b=0,M=de.length;b<M;b++){let G=Y(de[b],me[b],V);T?Ge(G.x,G.y+_[h-1].y,_[h-1].x+te):Ge(G.x,G.y,u+te)}}}xe(),Ce();function xe(){let O=i.length/3;if(f){let ee=0,te=ie*ee;for(let V=0;V<P;V++){let K=be[V];et(K[2]+te,K[1]+te,K[0]+te)}ee=h+m*2,te=ie*ee;for(let V=0;V<P;V++){let K=be[V];et(K[0]+te,K[1]+te,K[2]+te)}}else{for(let ee=0;ee<P;ee++){let te=be[ee];et(te[2],te[1],te[0])}for(let ee=0;ee<P;ee++){let te=be[ee];et(te[0]+ie*h,te[1]+ie*h,te[2]+ie*h)}}n.addGroup(O,i.length/3-O,0)}function Ce(){let O=i.length/3,ee=0;Fe(k,ee),ee+=k.length;for(let te=0,V=J.length;te<V;te++){let K=J[te];Fe(K,ee),ee+=K.length}n.addGroup(O,i.length/3-O,1)}function Fe(O,ee){let te=O.length;for(;--te>=0;){let V=te,K=te-1;K<0&&(K=O.length-1);for(let _e=0,de=h+m*2;_e<de;_e++){let b=ie*_e,M=ie*(_e+1),G=ee+V+b,re=ee+K+b,pe=ee+K+M,ge=ee+V+M;at(G,re,pe,ge)}}}function Ge(O,ee,te){l.push(O),l.push(ee),l.push(te)}function et(O,ee,te){qe(O),qe(ee),qe(te);let V=i.length/3,K=C.generateTopUV(n,i,V-3,V-2,V-1);lt(K[0]),lt(K[1]),lt(K[2])}function at(O,ee,te,V){qe(O),qe(ee),qe(V),qe(ee),qe(te),qe(V);let K=i.length/3,_e=C.generateSideWallUV(n,i,K-6,K-3,K-2,K-1);lt(_e[0]),lt(_e[1]),lt(_e[3]),lt(_e[1]),lt(_e[2]),lt(_e[3])}function qe(O){i.push(l[O*3+0]),i.push(l[O*3+1]),i.push(l[O*3+2])}function lt(O){r.push(O.x),r.push(O.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return vx(t,n,e)}static fromJSON(e,t){let n=[];for(let r=0,o=e.shapes.length;r<o;r++){let a=t[e.shapes[r]];n.push(a)}let i=e.options.extrudePath;return i!==void 0&&(e.options.extrudePath=new aa[i.type]().fromJSON(i)),new s(n,e.options)}},_x={generateTopUV:function(s,e,t,n,i){let r=e[t*3],o=e[t*3+1],a=e[n*3],l=e[n*3+1],c=e[i*3],h=e[i*3+1];return[new Ee(r,o),new Ee(a,l),new Ee(c,h)]},generateSideWallUV:function(s,e,t,n,i,r){let o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[n*3],h=e[n*3+1],u=e[n*3+2],f=e[i*3],p=e[i*3+1],x=e[i*3+2],y=e[r*3],m=e[r*3+1],d=e[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new Ee(o,1-l),new Ee(c,1-u),new Ee(f,1-x),new Ee(y,1-d)]:[new Ee(a,1-l),new Ee(h,1-u),new Ee(p,1-x),new Ee(m,1-d)]}};function vx(s,e,t){if(t.shapes=[],Array.isArray(s))for(let n=0,i=s.length;n<i;n++){let r=s[n];t.shapes.push(r.uuid)}else t.shapes.push(s.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var ui=class s extends bn{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,h=[],u=new L,f=new L,p=[],x=[],y=[],m=[];for(let d=0;d<=n;d++){let C=[],_=d/n,T=0;d===0&&o===0?T=.5/t:d===n&&l===Math.PI&&(T=-.5/t);for(let B=0;B<=t;B++){let N=B/t;u.x=-e*Math.cos(i+N*r)*Math.sin(o+_*a),u.y=e*Math.cos(o+_*a),u.z=e*Math.sin(i+N*r)*Math.sin(o+_*a),x.push(u.x,u.y,u.z),f.copy(u).normalize(),y.push(f.x,f.y,f.z),m.push(N+T,1-_),C.push(c++)}h.push(C)}for(let d=0;d<n;d++)for(let C=0;C<t;C++){let _=h[d][C+1],T=h[d][C],B=h[d+1][C],N=h[d+1][C+1];(d!==0||o>0)&&p.push(_,T,N),(d!==n-1||l<Math.PI)&&p.push(T,B,N)}this.setIndex(p),this.setAttribute("position",new It(x,3)),this.setAttribute("normal",new It(y,3)),this.setAttribute("uv",new It(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Rs=class s extends bn{constructor(e=1,t=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);let o=[],a=[],l=[],c=[],h=new L,u=new L,f=new L;for(let p=0;p<=n;p++)for(let x=0;x<=i;x++){let y=x/i*r,m=p/n*Math.PI*2;u.x=(e+t*Math.cos(m))*Math.cos(y),u.y=(e+t*Math.cos(m))*Math.sin(y),u.z=t*Math.sin(m),a.push(u.x,u.y,u.z),h.x=e*Math.cos(y),h.y=e*Math.sin(y),f.subVectors(u,h).normalize(),l.push(f.x,f.y,f.z),c.push(x/i),c.push(p/n)}for(let p=1;p<=n;p++)for(let x=1;x<=i;x++){let y=(i+1)*p+x-1,m=(i+1)*(p-1)+x-1,d=(i+1)*(p-1)+x,C=(i+1)*p+x;o.push(y,m,C),o.push(m,d,C)}this.setIndex(o),this.setAttribute("position",new It(a,3)),this.setAttribute("normal",new It(l,3)),this.setAttribute("uv",new It(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var ha=class s extends bn{constructor(e=new ra(new L(-1,-1,0),new L(-1,1,0),new L(1,1,0)),t=64,n=1,i=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:i,closed:r};let o=e.computeFrenetFrames(t,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new L,l=new L,c=new Ee,h=new L,u=[],f=[],p=[],x=[];y(),this.setIndex(x),this.setAttribute("position",new It(u,3)),this.setAttribute("normal",new It(f,3)),this.setAttribute("uv",new It(p,2));function y(){for(let _=0;_<t;_++)m(_);m(r===!1?t:0),C(),d()}function m(_){h=e.getPointAt(_/t,h);let T=o.normals[_],B=o.binormals[_];for(let N=0;N<=i;N++){let R=N/i*Math.PI*2,$=Math.sin(R),E=-Math.cos(R);l.x=E*T.x+$*B.x,l.y=E*T.y+$*B.y,l.z=E*T.z+$*B.z,l.normalize(),f.push(l.x,l.y,l.z),a.x=h.x+n*l.x,a.y=h.y+n*l.y,a.z=h.z+n*l.z,u.push(a.x,a.y,a.z)}}function d(){for(let _=1;_<=t;_++)for(let T=1;T<=i;T++){let B=(i+1)*(_-1)+(T-1),N=(i+1)*_+(T-1),R=(i+1)*_+T,$=(i+1)*(_-1)+T;x.push(B,N,$),x.push(N,R,$)}}function C(){for(let _=0;_<=t;_++)for(let T=0;T<=i;T++)c.x=_/t,c.y=T/i,p.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new s(new aa[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};var ua=class extends nn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},wn=class extends as{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Je(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Je(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Iu,this.normalScale=new Ee(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},qr=class extends wn{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ee(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Rn(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Je(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Je(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Je(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};function zo(s,e,t){return!s||!t&&s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function yx(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}var gr=class{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,i=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=t[++n],e<i)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let o=0;o!==i;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},sc=class extends gr{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:_h,endingEnd:_h}}intervalChanged_(e,t,n){let i=this.parameterPositions,r=e-2,o=e+1,a=i[r],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case vh:r=e,a=2*t-n;break;case yh:r=i.length-2,a=t+i[r]-i[r+1];break;default:r=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case vh:o=e,l=2*n-t;break;case yh:o=1,l=n+i[1]-i[0];break;default:o=e-1,l=t}let c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,p=this._weightNext,x=(n-t)/(i-t),y=x*x,m=y*x,d=-f*m+2*f*y-f*x,C=(1+f)*m+(-1.5-2*f)*y+(-.5+f)*x+1,_=(-1-p)*m+(1.5+p)*y+.5*x,T=p*m-p*y;for(let B=0;B!==a;++B)r[B]=d*o[h+B]+C*o[c+B]+_*o[l+B]+T*o[u+B];return r}},rc=class extends gr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(n-t)/(i-t),u=1-h;for(let f=0;f!==a;++f)r[f]=o[c+f]*u+o[l+f]*h;return r}},oc=class extends gr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}},wi=class{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=zo(t,this.TimeBufferType),this.values=zo(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:zo(e.times,Array),values:zo(e.values,Array)};let i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new oc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new rc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new sc(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Fo:t=this.InterpolantFactoryMethodDiscrete;break;case Bo:t=this.InterpolantFactoryMethodLinear;break;case $a:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Fo;case this.InterpolantFactoryMethodLinear:return Bo;case this.InterpolantFactoryMethodSmooth:return $a}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){let n=this.times,i=n.length,r=0,o=i-1;for(;r!==i&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(i!==void 0&&yx(i))for(let a=0,l=i.length;a!==l;++a){let c=i[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===$a,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(i)l=!0;else{let u=a*n,f=u-n,p=u+n;for(let x=0;x!==n;++x){let y=t[u+x];if(y!==t[f+x]||y!==t[p+x]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let u=a*n,f=o*n;for(let p=0;p!==n;++p)t[f+p]=t[u+p]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}};wi.prototype.TimeBufferType=Float32Array;wi.prototype.ValueBufferType=Float32Array;wi.prototype.DefaultInterpolation=Bo;var Cs=class extends wi{};Cs.prototype.ValueTypeName="bool";Cs.prototype.ValueBufferType=Array;Cs.prototype.DefaultInterpolation=Fo;Cs.prototype.InterpolantFactoryMethodLinear=void 0;Cs.prototype.InterpolantFactoryMethodSmooth=void 0;var ac=class extends wi{};ac.prototype.ValueTypeName="color";var lc=class extends wi{};lc.prototype.ValueTypeName="number";var cc=class extends gr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(i-t),c=e*a;for(let h=c+a;c!==h;c+=4)fn.slerpFlat(r,0,o,c-a,o,c,l);return r}},Yr=class extends wi{InterpolantFactoryMethodLinear(e){return new cc(this.times,this.values,this.getValueSize(),e)}};Yr.prototype.ValueTypeName="quaternion";Yr.prototype.DefaultInterpolation=Bo;Yr.prototype.InterpolantFactoryMethodSmooth=void 0;var Ps=class extends wi{};Ps.prototype.ValueTypeName="string";Ps.prototype.ValueBufferType=Array;Ps.prototype.DefaultInterpolation=Fo;Ps.prototype.InterpolantFactoryMethodLinear=void 0;Ps.prototype.InterpolantFactoryMethodSmooth=void 0;var hc=class extends wi{};hc.prototype.ValueTypeName="vector";var uc=class{constructor(e,t,n){let i=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){a++,r===!1&&i.onStart!==void 0&&i.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=c.length;u<f;u+=2){let p=c[u],x=c[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return x}return null}}},Mx=new uc,fc=class{constructor(e){this.manager=e!==void 0?e:Mx,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};fc.DEFAULT_MATERIAL_NAME="__DEFAULT";var Zr=class extends Fn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Je(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}},fa=class extends Zr{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Fn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Je(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},wl=new vt,mu=new L,gu=new L,da=class{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ee(512,512),this.map=null,this.mapPass=null,this.matrix=new vt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Or,this._frameExtents=new Ee(1,1),this._viewportCount=1,this._viewports=[new Jt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;mu.setFromMatrixPosition(e.matrixWorld),t.position.copy(mu),gu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(gu),t.updateMatrixWorld(),wl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(wl),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(wl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var xu=new vt,Cr=new L,Tl=new L,dc=class extends da{constructor(){super(new Nn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ee(4,2),this._viewportCount=6,this._viewports=[new Jt(2,1,1,1),new Jt(0,1,1,1),new Jt(3,1,1,1),new Jt(1,1,1,1),new Jt(3,0,1,1),new Jt(1,0,1,1)],this._cubeDirections=[new L(1,0,0),new L(-1,0,0),new L(0,0,1),new L(0,0,-1),new L(0,1,0),new L(0,-1,0)],this._cubeUps=[new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,0,1),new L(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Cr.setFromMatrixPosition(e.matrixWorld),n.position.copy(Cr),Tl.copy(n.position),Tl.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Tl),n.updateMatrixWorld(),i.makeTranslation(-Cr.x,-Cr.y,-Cr.z),xu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(xu)}},qi=class extends Zr{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new dc}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},pc=class extends da{constructor(){super(new ur(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Jr=class extends Zr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Fn.DEFAULT_UP),this.updateMatrix(),this.target=new Fn,this.shadow=new pc}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var pa=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=_u(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=_u();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};function _u(){return(typeof performance>"u"?Date:performance).now()}var Tc="\\[\\]\\.:\\/",Sx=new RegExp("["+Tc+"]","g"),Ac="[^"+Tc+"]",Ex="[^"+Tc.replace("\\.","")+"]",bx=/((?:WC+[\/:])*)/.source.replace("WC",Ac),wx=/(WCOD+)?/.source.replace("WCOD",Ex),Tx=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Ac),Ax=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Ac),Rx=new RegExp("^"+bx+wx+Tx+Ax+"$"),Cx=["material","materials","bones","map"],mc=class{constructor(e,t,n){let i=n||Zt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Zt=class s{constructor(e,t,n){this.path=t,this.parsedPath=n||s.parseTrackName(t),this.node=s.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new s.Composite(e,t,n):new s(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Sx,"")}static parseTrackName(e){let t=Rx.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);Cx.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=n(a.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,i=t.propertyName,r=t.propertyIndex;if(e||(e=s.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[i];if(o===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Zt.Composite=mc;Zt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Zt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Zt.prototype.GetterByBindingType=[Zt.prototype._getValue_direct,Zt.prototype._getValue_array,Zt.prototype._getValue_arrayElement,Zt.prototype._getValue_toArray];Zt.prototype.SetterByBindingTypeAndVersioning=[[Zt.prototype._setValue_direct,Zt.prototype._setValue_direct_setNeedsUpdate,Zt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Zt.prototype._setValue_array,Zt.prototype._setValue_array_setNeedsUpdate,Zt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Zt.prototype._setValue_arrayElement,Zt.prototype._setValue_arrayElement_setNeedsUpdate,Zt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Zt.prototype._setValue_fromArray,Zt.prototype._setValue_fromArray_setNeedsUpdate,Zt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Nx=new Float32Array(1);var ma=class{constructor(e,t,n=0,i=1/0){this.ray=new Zo(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new zr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return gc(e,this,n,t),n.sort(vu),n}intersectObjects(e,t=!0,n=[]){for(let i=0,r=e.length;i<r;i++)gc(e[i],this,n,t);return n.sort(vu),n}};function vu(s,e){return s.distance-e.distance}function gc(s,e,t,n){if(s.layers.test(e.layers)&&s.raycast(e,t),n===!0){let i=s.children;for(let r=0,o=i.length;r<o;r++)gc(i[r],e,t,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"160"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="160");var ya={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var ii=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},Px=new ur(-1,1,1,-1,0,1),Cc=class extends bn{constructor(){super(),this.setAttribute("position",new It([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new It([0,2,0,0,2,0],2))}},Ix=new Cc,hs=class{constructor(e){this._mesh=new Ue(Ix,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Px)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var Ma=class extends ii{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof nn?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=cs.clone(e.uniforms),this.material=new nn({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new hs(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var $r=class extends ii{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let i=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),r.buffers.stencil.setFunc(i.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(i.EQUAL,1,4294967295),r.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),r.buffers.stencil.setLocked(!0)}},Sa=class extends ii{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var Ea=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new Ee);this._width=n.width,this._height=n.height,t=new Gn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:bi}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Ma(ya),this.copyPass.material.blending=Pi,this.clock=new pa}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let i=0,r=this.passes.length;i<r;i++){let o=this.passes[i];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),o.needsSwap){if(n){let a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}$r!==void 0&&(o instanceof $r?n=!0:o instanceof Sa&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new Ee);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,i)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var ba=class extends ii{constructor(e,t,n=null,i=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Je}render(e,t,n){let i=e.autoClear;e.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor)),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=i}};var qu={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Je(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var _r=class s extends ii{constructor(e,t,n,i){super(),this.strength=t!==void 0?t:1,this.radius=n,this.threshold=i,this.resolution=e!==void 0?new Ee(e.x,e.y):new Ee(256,256),this.clearColor=new Je(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new Gn(r,o,{type:bi}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){let f=new Gn(r,o,{type:bi});f.texture.name="UnrealBloomPass.h"+u,f.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(f);let p=new Gn(r,o,{type:bi});p.texture.name="UnrealBloomPass.v"+u,p.texture.generateMipmaps=!1,this.renderTargetsVertical.push(p),r=Math.round(r/2),o=Math.round(o/2)}let a=qu;this.highPassUniforms=cs.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new nn({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new Ee(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new L(1,1,1),new L(1,1,1),new L(1,1,1),new L(1,1,1),new L(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;let h=ya;this.copyUniforms=cs.clone(h.uniforms),this.blendMaterial=new nn({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:On,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Je,this.oldClearAlpha=1,this.basic=new mt,this.fsQuad=new hs(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),i=Math.round(t/2);this.renderTargetBright.setSize(n,i);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,i),this.renderTargetsVertical[r].setSize(n,i),this.separableBlurMaterials[r].uniforms.invSize.value=new Ee(1/n,1/i),n=Math.round(n/2),i=Math.round(i/2)}render(e,t,n,i,r){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();let o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=s.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=s.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this.fsQuad.render(e),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=o}getSeperableBlurMaterial(e){let t=[];for(let n=0;n<e;n++)t.push(.39894*Math.exp(-.5*n*n/(e*e))/e);return new nn({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new Ee(.5,.5)},direction:{value:new Ee(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
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
				}`})}};_r.BlurDirectionX=new Ee(1,0);_r.BlurDirectionY=new Ee(0,1);var Yu={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};var wa=class extends ii{constructor(){super();let e=Yu;this.uniforms=cs.clone(e.uniforms),this.material=new ua({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new hs(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},Pt.getTransfer(this._outputColorSpace)===Bt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===xc?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===_c?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===vc?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===yc?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Mc&&(this.material.defines.AGX_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var Ta=class extends dr{constructor(e=null){super();let t=new Bn;t.deleteAttribute("uv");let n=new wn({side:mn}),i=new wn,r=5;e!==null&&e._useLegacyLights===!1&&(r=900);let o=new qi(16777215,r,28,2);o.position.set(.418,16.199,.3),this.add(o);let a=new Ue(t,n);a.position.set(-.757,13.219,.717),a.scale.set(31.713,28.305,28.591),this.add(a);let l=new Ue(t,i);l.position.set(-10.906,2.009,1.846),l.rotation.set(0,-.195,0),l.scale.set(2.328,7.905,4.651),this.add(l);let c=new Ue(t,i);c.position.set(-5.607,-.754,-.758),c.rotation.set(0,.994,0),c.scale.set(1.97,1.534,3.955),this.add(c);let h=new Ue(t,i);h.position.set(6.167,.857,7.803),h.rotation.set(0,.561,0),h.scale.set(3.927,6.285,3.687),this.add(h);let u=new Ue(t,i);u.position.set(-2.017,.018,6.124),u.rotation.set(0,.333,0),u.scale.set(2.002,4.566,2.064),this.add(u);let f=new Ue(t,i);f.position.set(2.291,-.756,-2.621),f.rotation.set(0,-.286,0),f.scale.set(1.546,1.552,1.496),this.add(f);let p=new Ue(t,i);p.position.set(-2.193,-.369,-5.547),p.rotation.set(0,.516,0),p.scale.set(3.875,3.487,2.986),this.add(p);let x=new Ue(t,vr(50));x.position.set(-16.116,14.37,8.208),x.scale.set(.1,2.428,2.739),this.add(x);let y=new Ue(t,vr(50));y.position.set(-16.109,18.021,-8.207),y.scale.set(.1,2.425,2.751),this.add(y);let m=new Ue(t,vr(17));m.position.set(14.904,12.198,-1.832),m.scale.set(.15,4.265,6.331),this.add(m);let d=new Ue(t,vr(43));d.position.set(-.462,8.89,14.52),d.scale.set(4.38,5.441,.088),this.add(d);let C=new Ue(t,vr(20));C.position.set(3.235,11.486,-12.541),C.scale.set(2.5,2,.1),this.add(C);let _=new Ue(t,vr(100));_.position.set(0,20,0),_.scale.set(1,.1,1),this.add(_)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}};function vr(s){let e=new mt;return e.color.setScalar(s),e}var Kr=new L;function fi(s,e,t,n,i,r){let o=2*Math.PI*i/4,a=Math.max(r-2*i,0),l=Math.PI/4;Kr.copy(e),Kr[n]=0,Kr.normalize();let c=.5*o/(o+a),h=1-Kr.angleTo(s)/l;return Math.sign(Kr[t])===1?h*c:a/(o+a)+c+c*(1-h)}var Qr=class extends Bn{constructor(e=1,t=1,n=1,i=2,r=.1){if(i=i*2+1,r=Math.min(e/2,t/2,n/2,r),super(1,1,1,i,i,i),i===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let a=new L,l=new L,c=new L(e,t,n).divideScalar(2).subScalar(r),h=this.attributes.position.array,u=this.attributes.normal.array,f=this.attributes.uv.array,p=h.length/6,x=new L,y=.5/i;for(let m=0,d=0;m<h.length;m+=3,d+=2)switch(a.fromArray(h,m),l.copy(a),l.x-=Math.sign(l.x)*y,l.y-=Math.sign(l.y)*y,l.z-=Math.sign(l.z)*y,l.normalize(),h[m+0]=c.x*Math.sign(a.x)+l.x*r,h[m+1]=c.y*Math.sign(a.y)+l.y*r,h[m+2]=c.z*Math.sign(a.z)+l.z*r,u[m+0]=l.x,u[m+1]=l.y,u[m+2]=l.z,Math.floor(m/p)){case 0:x.set(1,0,0),f[d+0]=fi(x,l,"z","y",r,n),f[d+1]=1-fi(x,l,"y","z",r,t);break;case 1:x.set(-1,0,0),f[d+0]=1-fi(x,l,"z","y",r,n),f[d+1]=1-fi(x,l,"y","z",r,t);break;case 2:x.set(0,1,0),f[d+0]=1-fi(x,l,"x","z",r,e),f[d+1]=fi(x,l,"z","x",r,n);break;case 3:x.set(0,-1,0),f[d+0]=1-fi(x,l,"x","z",r,e),f[d+1]=1-fi(x,l,"z","x",r,n);break;case 4:x.set(0,0,1),f[d+0]=1-fi(x,l,"x","y",r,e),f[d+1]=1-fi(x,l,"y","x",r,t);break;case 5:x.set(0,0,-1),f[d+0]=fi(x,l,"x","y",r,e),f[d+1]=1-fi(x,l,"y","x",r,t);break}}};function Pc(s,e=!1){let t=s[0].index!==null,n=new Set(Object.keys(s[0].attributes)),i=new Set(Object.keys(s[0].morphAttributes)),r={},o={},a=s[0].morphTargetsRelative,l=new bn,c=0;for(let h=0;h<s.length;++h){let u=s[h],f=0;if(t!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let p in u.attributes){if(!n.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;r[p]===void 0&&(r[p]=[]),r[p].push(u.attributes[p]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let p in u.morphAttributes){if(!i.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[p]===void 0&&(o[p]=[]),o[p].push(u.morphAttributes[p])}if(e){let p;if(t)p=u.index.count;else if(u.attributes.position!==void 0)p=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,p,h),c+=p}}if(t){let h=0,u=[];for(let f=0;f<s.length;++f){let p=s[f].index;for(let x=0;x<p.count;++x)u.push(p.getX(x)+h);h+=s[f].attributes.position.count}l.setIndex(u)}for(let h in r){let u=Zu(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(let h in o){let u=o[h][0].length;if(u===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let f=0;f<u;++f){let p=[];for(let y=0;y<o[h].length;++y)p.push(o[h][y][f]);let x=Zu(p);if(!x)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(x)}}return l}function Zu(s){let e,t,n,i=-1,r=0;for(let c=0;c<s.length;++c){let h=s[c];if(h.isInterleavedBufferAttribute)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. InterleavedBufferAttributes are not supported."),null;if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=h.gpuType),i!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.array.length}let o=new e(r),a=0;for(let c=0;c<s.length;++c)o.set(s[c].array,a),a+=s[c].array.length;let l=new En(o,t,n);return i!==void 0&&(l.gpuType=i),l}var Ic={AVX:[-150,-100,-50,0,50,100,150],STZ:[-26,-76,-126,-176,-228],avW:s=>s===0?16:10,stW:s=>s===-26?9:10,X0:-178,X1:178,BEACH:-15,SEA:-236,PIER:{x:100,w:10,z0:-236,z1:-330,y:1.25}},Ju=[["SOL DINER","#ff4fa3"],["PUMP PAWN","#33e6ff"],["DEGEN ARCADE","#ffd23f"],["WAGMI BAR","#2ee6a6"],["MOON MOTORS","#b48cff"],["APE TATTOO","#ff8a3d"],["DIAMOND HANDS","#5fe0ff"],["CURVE CAFE","#ff8fd0"],["BAGS & CO","#ffd23f"],["JEET GYM","#ff4f6e"],["RUG REPAIR","#33e6ff"],["LIQUIDITY MOTEL","#ff4fa3"],["HODL HOTEL","#2ee6a6"],["GAS STATION","#ffb13d"],["CHART CLUB","#b48cff"],["BONDING CURVE","#5fe0ff"]];function $u(s){let{scene:e,R:t,mobile:n,std:i,candy:r,BOX:o,RBOX:a,inst:l,col:c,lin:h,PASTEL:u,loadIcon:f,mono:p,sm:x,clamp:y,TAU:m}=s,{AVX:d,STZ:C,avW:_,stW:T,X0:B,X1:N,PIER:R}=Ic,$=[],E=[],I=[],J=[],ce=[],be=[],k=[],Y=[],ie=[],P=2.8,oe=[];{let w=B;for(let W of d)oe.push([w,W-_(W)/2]),w=W+_(W)/2;oe.push([w,N])}let le=[];for(let w=0;w<C.length-1;w++)le.push([C[w]-T(C[w])/2,C[w+1]+T(C[w+1])/2]);let fe=C[0]+T(C[0])/2,me=C[C.length-1]-T(C[C.length-1])/2,Ae=new wn({color:c("#4c4566"),roughness:.9}),se=[];for(let w of C)se.push({x:0,y:.03,z:w,w:N-B+60,h:.06,d:T(w)});for(let w of d)for(let[W,j]of le)se.push({x:w,y:.03,z:(W+j)/2,w:_(w),h:.06,d:W-j});l(o,Ae,se,!1);let xe=i(c("#ffd6e6"),{roughness:.85}),Ce=[{x:0,y:.12,z:fe+1.6,w:700,h:.24,d:3.2},{x:0,y:.12,z:me-1.8,w:N-B+60,h:.24,d:3.6}],Fe=[];oe.forEach(([w,W],j)=>le.forEach(([he,Me],We)=>{Fe.push({i:j,j:We,x0:w,x1:W,zs:he,zn:Me}),Ce.push({x:(w+W)/2,y:.12,z:(he+Me)/2,w:W-w,h:.24,d:he-Me})})),l(o,xe,Ce,!1);{let w=B-30,W=N+30,j=R.x-R.w/2,he=R.x+R.w/2,Me=me-3.85;l(o,i(c("#f4f1fb")),[{x:(w+j)/2,y:.5,z:Me,w:j-w,h:1,d:.5},{x:(he+W)/2,y:.5,z:Me,w:W-he,h:1,d:.5}],!1)}let Ge=new mt({color:c("#fff6dc"),polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}),et=[],at=[],qe=w=>d.some(W=>Math.abs(w-W)<_(W)/2+3.5),lt=w=>C.some(W=>Math.abs(w-W)<T(W)/2+3.5);for(let w of C)for(let W=B+2;W<N;W+=8)qe(W)||et.push({x:W,y:.062,z:w,w:3,h:.01,d:.22});for(let w of d)if(w!==0)for(let[W,j]of le)for(let he=W-4;he>j+2;he-=8)et.push({x:w,y:.062,z:he,w:.22,h:.01,d:3});for(let w of d)for(let W of C){let j=_(w),he=T(W);for(let Me of[-1,1]){let We=W+Me*(he/2+1.5);if(We<me||We>fe)continue;for(let ae=-j/2+.6;ae<j/2-.3;ae+=1.2)at.push({x:w+ae+.3,y:.062,z:We,w:.6,h:.01,d:2.4});let Xe=w+Me*(j/2+1.5);if(!(Xe<B||Xe>N))for(let ae=-he/2+.6;ae<he/2-.3;ae+=1.2)at.push({x:Xe,y:.062,z:W+ae+.3,w:2.4,h:.01,d:.6})}}l(o,Ge,et.concat(at),!1);let O=i(c("#9fe7c8"),{roughness:.9}),ee=[];for(let[w,W]of le){ee.push({x:0,y:.2,z:(w+W)/2,w:2.6,h:.4,d:w-W-7}),I.push({x0:-1.3,x1:1.3,z0:W+3.5,z1:w-3.5});for(let j=w-6;j>W+4;j-=9)J.push({x:0,z:j,s:1.05+t()*.3}),ie.push({x:0,z:j,r:.7})}l(o,O,ee,!1);let te=[],V=[],K={park:"3,1",tower:"6,2"};for(let w of Fe){let W=w.i+","+w.j,j=w.x0+P,he=w.x1-P,Me=w.zs-P,We=w.zn+P,Xe=(j+he)/2,ae=(Me+We)/2;if(W===K.park){Y.push({x:Xe,y:.3,z:ae,w:he-j,h:.12,d:Me-We,c:c("#7fdcae")}),Y.push({x:Xe,y:.55,z:ae,w:7,h:.6,d:7,c:c("#f4f1fb")}),Y.push({x:Xe,y:.9,z:ae,w:6,h:.1,d:6,c:c("#5fd8ff")});for(let Yt=0;Yt<10;Yt++){let ft=j+2+t()*(he-j-4),Wt=We+2+t()*(Me-We-4);Math.abs(ft-Xe)<5&&Math.abs(Wt-ae)<5||(J.push({x:ft,z:Wt,s:.9+t()*.5}),ie.push({x:ft,z:Wt,r:.7}))}I.push({x0:Xe-3.5,x1:Xe+3.5,z0:ae-3.5,z1:ae+3.5});continue}if(W===K.tower){$.push({x:Xe,y:74/2,z:ae,w:24,h:74,d:24,c:c("#c8a8ff")}),E.push({x:Xe,y:74,z:ae,w:24,d:24}),$.push({x:Xe,y:79,z:ae,w:24*.62,h:10,d:24*.62,c:c("#f4f1fb")}),$.push({x:Xe,y:88,z:ae,w:24*.3,h:8,d:24*.3,c:c("#ff9ec9")}),ce.push({x:Xe,y:74+.4,z:ae+24/2+.06,w:24,h:.5,d:.1,c:h("#33e6ff")},{x:Xe,y:74+10.2,z:ae+24*.31+.06,w:24*.62,h:.4,d:.1,c:h("#ff3aa8")}),Y.push({x:Xe,y:100,z:ae,w:.5,h:16,d:.5,c:c("#f4f1fb")}),I.push({x0:Xe-24/2,x1:Xe+24/2,z0:ae-24/2,z1:ae+24/2,top:92}),V.unshift({x:Xe,y:59,z:ae+24/2+.3,w:19,h:11,big:!0,face:1});continue}let Ne=he-j>26?2:1,wt=2,gt=(he-j)/Ne,hn=(Me-We)/wt;for(let Yt=0;Yt<Ne;Yt++)for(let ft=0;ft<wt;ft++){let Wt=j+Yt*gt,an=We+ft*hn,Xt=ft===1,St=gt-2-t()*2.2,$t=hn-2-t()*2.2,Ft=Wt+gt/2+(t()-.5)*1,jn=an+hn/2+(t()-.5)*1,Is=Math.abs(Xe),Aa=Is>100?1.25:1,gi=Is<50&&w.j>=2?.62:1,jt=[8+t()*8,12+t()*14,16+t()*20,20+t()*26][w.j]*Aa*gi*(n&&t()<.3?.8:1);w.j===0&&(jt=Math.min(jt,17));let ei=u[Math.floor(t()*u.length)];$.push({x:Ft,y:jt/2,z:jn,w:St,h:jt,d:$t,c:ei}),I.push({x0:Ft-St/2,x1:Ft+St/2,z0:jn-$t/2,z1:jn+$t/2,top:jt});let In=jt;if(jt>22&&t()<.55){let zt=4+t()*7;$.push({x:Ft,y:jt+zt/2,z:jn,w:St*.66,h:zt,d:$t*.66,c:ei}),In=jt+zt,E.push({x:Ft,y:In,z:jn,w:St*.66,d:$t*.66})}else E.push({x:Ft,y:jt,z:jn,w:St,d:$t});if(w.j===0){let zt=Xt?jn+$t/2:jn-$t/2,Mn=Xt?1:-1;Y.push({x:Ft,y:jt*.42,z:zt+Mn*.3,w:St*.98,h:.2,d:.6,c:c("#ffffff")},{x:Ft,y:jt*.72,z:zt+Mn*.3,w:St*.98,h:.2,d:.6,c:c("#ffffff")});let Ra=t()<.5?h("#ff3aa8"):h("#33e6ff");ce.push({x:Ft+St*.3,y:jt*.55,z:zt+Mn*.28,w:.45,h:jt*.7,d:.3,c:Ra});for(let Ca of[-1,1])ce.push({x:Ft+Ca*(St/2-.08),y:jt/2+.2,z:zt+Mn*.1,w:.12,h:jt*.94,d:.12,c:Ra})}if(w.j>=1&&In>14&&t()<.4&&V.length<(n?6:9)&&Xt&&V.push({x:Ft,y:In+4.2,z:jn+$t*.2,w:11,h:5.6,face:1,post:In}),te.push({x:Ft,z:jn,w:St,d:$t,south:Xt,h:jt}),t()<.5){let zt=Ft+(t()<.5?-1:1)*(St/2+1.4),Mn=Xt?w.zs-.7:w.zn+.7;J.push({x:zt,z:Mn,s:.85+t()*.3}),ie.push({x:zt,z:Mn,r:.6})}}}for(let w=-34;w>-236;w-=14)for(let W=214;W<350;W+=12)for(let j of[-1,1]){if(t()<.3)continue;let he=12+t()*22+(W-214)*.12,Me=7+t()*4,We=7+t()*4,Xe=j*(W+(t()-.5)*3);$.push({x:Xe,y:he/2,z:w+(t()-.5)*3,w:Me,h:he,d:We,c:u[Math.floor(t()*u.length)]}),E.push({x:Xe,y:he,z:w,w:Me,d:We})}{let w=[],W=[],j=[],he=[];for(let Me of E){if(Me.w<5||Me.d<5)continue;let We=t()<.7?1+Math.floor(t()*2):0;for(let Xe=0;Xe<We;Xe++)w.push({x:Me.x+(t()-.5)*(Me.w-2.6),y:Me.y+.45,z:Me.z+(t()-.5)*(Me.d-2.6),w:1.4,h:.9,d:1.1,c:c("#dcd6ea")});if(t()<.16&&Me.w>7){let Xe=Me.x+(t()-.5)*(Me.w-4.5),ae=Me.z+(t()-.5)*(Me.d-4.5);W.push({x:Xe,y:Me.y+3.1,z:ae,w:1.4,h:2.2,d:1.4}),he.push({x:Xe,y:Me.y+4.6,z:ae,w:1.6,h:.8,d:1.6});for(let[Ne,wt]of[[-.8,-.8],[.8,-.8],[-.8,.8],[.8,.8]])j.push({x:Xe+Ne,y:Me.y+1,z:ae+wt,w:.14,h:2,d:.14})}else t()<.1&&j.push({x:Me.x+(t()-.5)*Me.w*.5,y:Me.y+3,z:Me.z+(t()-.5)*Me.d*.5,w:.14,h:6,d:.14})}l(o,i(16777215,{roughness:.6}),w),l(new $n(1,1,1,14),i(c("#b48c6c"),{roughness:.8}),W,!1),l(new ls(1,1,14),i(c("#7a5a46")),he,!1),l(o,i(c("#5a4a5e")),j,!1)}let _e=document.createElement("canvas");_e.width=1024,_e.height=1024;let de=_e.getContext("2d"),b=new dn(_e);b.colorSpace=Ct,b.anisotropy=4;function M(){de.clearRect(0,0,1024,1024),Ju.forEach(([w,W],j)=>{let he=j%2*512,Me=Math.floor(j/2)*128;de.fillStyle="#170c2e",de.beginPath(),de.roundRect(he+6,Me+8,500,112,22),de.fill(),de.lineWidth=6,de.strokeStyle=W,de.stroke();let We=78;for(de.font=`400 ${We}px Anton, Impact, Arial Black, sans-serif`;de.measureText(w).width>440&&We>30;)We-=4,de.font=`400 ${We}px Anton, Impact, Arial Black, sans-serif`;de.textAlign="center",de.textBaseline="middle",de.shadowColor=W,de.shadowBlur=22,de.fillStyle=W,de.fillText(w,he+256,Me+66),de.shadowBlur=0,de.fillStyle="rgba(255,255,255,.88)",de.fillText(w,he+256,Me+66)}),b.needsUpdate=!0}M(),document.fonts&&document.fonts.ready.then(M);let G=new sn(1,1),re=[],pe=new mt({map:b,toneMapped:!1,transparent:!0});pe.onBeforeCompile=w=>{w.vertexShader=w.vertexShader.replace("#include <uv_pars_vertex>",`#include <uv_pars_vertex>
attribute vec2 aCell;`).replace("#include <uv_vertex>",`#include <uv_vertex>
vMapUv = (vMapUv + aCell) * vec2(.5, .125);`)};let ge=["#ff4fa3","#33d9ff","#ffd23f","#2ee6a6","#b48cff","#ff8a3d"].map(c);for(let w of te){if(w.h<6)continue;let W=w.south?1:-1,j=w.z+W*(w.d/2+.16),he=Math.min(w.w*.78,8.4),Me=Math.floor(t()*Ju.length);be.push({x:w.x,y:4.1,z:j,w:he,h:he/4,d:1,ry:w.south?0:Math.PI}),re.push(Me%2,7-Math.floor(Me/2)),k.push({x:w.x,y:2.75,z:w.z+W*(w.d/2+.9),w:he*1.05,h:.14,d:1.9,rx:W*.32,c:ge[Math.floor(t()*ge.length)]})}G.setAttribute("aCell",new Li(new Float32Array(re),2));let ze=l(G,pe,be,!1);l(o,i(16777215,{roughness:.6}),k),l(o,i(16777215,{roughness:.55}),Y);let Se=V.map(w=>{let W=document.createElement("canvas");W.width=512,W.height=256;let j=W.getContext("2d"),he=new dn(W);he.colorSpace=Ct;let Me=new Ue(new sn(w.w,w.h),new mt({map:he,toneMapped:!1}));if(Me.position.set(w.x,w.y,w.z),e.add(Me),w.post){let We=new Gt(o,i(c("#3a3352")),3);[[-w.w*.35,0],[w.w*.35,0]].forEach(([Xe],ae)=>{let Ne=new vt().compose(new L(w.x+Xe,(w.post+w.y)/2,w.z-.3),new fn,new L(.35,w.y-w.post,.35));We.setMatrixAt(ae,Ne)}),We.setMatrixAt(2,new vt().compose(new L(w.x,w.y,w.z-.2),new fn,new L(w.w+.6,w.h+.6,.3))),e.add(We)}return De(j),he.needsUpdate=!0,{...w,g:j,t:he,m:Me,mint:null,chg:void 0}});function De(w){w.fillStyle="#1a0f33",w.fillRect(0,0,512,256),w.fillStyle="#ff7ac0",w.font="400 64px Anton, Impact, sans-serif",w.textAlign="center",w.textBaseline="middle",w.fillText("THE LINE IS LIVE",256,128)}function $e(w,W,j){let he=w.g,Me=W.chg==null?"#ffd23f":W.chg>=0?"#2ee6a6":"#ff4f9e",We=Xe=>{let ae=he.createLinearGradient(0,0,0,256);ae.addColorStop(0,"#2a0b4d"),ae.addColorStop(1,"#120826"),he.fillStyle=ae,he.fillRect(0,0,512,256),he.strokeStyle=Me,he.lineWidth=10,he.strokeRect(5,5,502,246),he.save(),he.beginPath(),he.arc(118,128,82,0,m),he.clip(),Xe?he.drawImage(Xe,36,46,164,164):p(he,118,128,82,W.symbol,W.mint),he.restore(),he.textAlign="left",he.textBaseline="alphabetic",he.fillStyle="#ffd23f",he.font="800 26px Inter, Arial",he.fillText(j===0?"HOTTEST ON THE LINE":"#"+(j+1)+" ON THE LINE",222,70);let Ne="$"+W.symbol;for(he.fillStyle="#fff",he.font="400 76px Anton, Impact, sans-serif";he.measureText(Ne).width>270&&Ne.length>3;)Ne=Ne.slice(0,-2)+"\u2026";he.fillText(Ne,222,152),he.fillStyle=Me,he.font="400 58px Anton, Impact, sans-serif",he.fillText(W.chg==null?"NEW":(W.chg>=0?"+":"")+W.chg.toFixed(Math.abs(W.chg)>=100?0:1)+"%",222,216),he.fillStyle="rgba(255,255,255,.6)",he.font="700 20px Inter, Arial",he.textAlign="right",he.fillText("5M",492,216),w.t.needsUpdate=!0};We(null),f(W.iconUrl,We)}let ht=n?30:19,ve=[];for(let w of C)for(let W of[-1,1])for(let j=B+6;j<N;j+=ht)qe(j)||ve.push({x:j,z:w+W*(T(w)/2+.7),ax:0,az:-W});for(let w of d)for(let W of[-1,1])for(let[j,he]of le)for(let Me=j-7;Me>he+4;Me-=ht)ve.push({x:w+W*(_(w)/2+.7),z:Me,ax:-W,az:0});let yt=i(c("#3d3656"),{roughness:.5}),Ke=[],st=[],Pe=[];for(let w of ve)Ke.push({x:w.x,y:3.1,z:w.z,w:.2,h:6.2,d:.2}),ie.push({x:w.x,z:w.z,r:.3}),Ke.push({x:w.x+w.ax*.8,y:6.1,z:w.z+w.az*.8,w:w.ax?1.8:.16,h:.16,d:w.az?1.8:.16}),st.push({x:w.x+w.ax*1.6,y:5.95,z:w.z+w.az*1.6,w:w.ax?.9:.5,h:.18,d:w.az?.9:.5}),Pe.push({x:w.x+w.ax*2.4,y:.075,z:w.z+w.az*2.4,w:9,h:9,d:1,rx:-Math.PI/2});let ke=[];for(let w of d)for(let W of C)ke.push({x:w,z:W,off:t()*16});for(let w of ke)for(let W of[-1,1]){let j=w.x+W*(_(w.x)/2+.8),he=w.z+W*(T(w.z)/2+.8);Ke.push({x:j,y:2.3,z:he,w:.22,h:4.6,d:.22},{x:j,y:4.4,z:he,w:.55,h:1.5,d:.55}),ie.push({x:j,z:he,r:.35})}l(o,yt,Ke,!1);let rt=new mt({color:c("#fff1d0"),toneMapped:!1});l(o,rt,st,!1);let bt=(()=>{let w=document.createElement("canvas");w.width=w.height=128;let W=w.getContext("2d"),j=W.createRadialGradient(64,64,0,64,64,64);return j.addColorStop(0,"rgba(255,225,170,1)"),j.addColorStop(.45,"rgba(255,190,150,.45)"),j.addColorStop(1,"rgba(255,170,160,0)"),W.fillStyle=j,W.fillRect(0,0,128,128),new dn(w)})(),Lt=new mt({map:bt,transparent:!0,opacity:0,blending:On,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-4,polygonOffsetUnits:-4});l(new sn(1,1),Lt,Pe,!1);let Ie=new Gt(new Bn(1,1,1),new mt({toneMapped:!1}),ke.length*4);Ie.frustumCulled=!1,e.add(Ie);{let w=new vt,W=0;for(let j of ke)for(let he of[-1,1]){let Me=j.x+he*(_(j.x)/2+.8),We=j.z+he*(T(j.z)/2+.8);w.compose(new L(Me,4.5,We+he*.29),new fn,new L(.3,.3,.05)),Ie.setMatrixAt(W++,w),w.compose(new L(Me+he*.29,4.5,We),new fn,new L(.05,.3,.3)),Ie.setMatrixAt(W++,w)}}let we=(w,W)=>{let j=(W+w.off)%16;return{av:j<7?0:j<8?1:2,st:j>=8&&j<15?0:j>=15?1:2}},F=[new Je(.2,3.2,1.2),new Je(3.4,2.2,.2),new Je(3.6,.3,.4)],Be=i(c("#e9d2b8"),{roughness:.85}),Le=[],tt=R.z0-R.z1,it=(R.z0+R.z1)/2;Le.push({x:R.x,y:R.y-.25,z:(-241.5+R.z1)/2,w:R.w,h:.5,d:-241.5-R.z1}),Le.push({x:R.x,y:.36,z:-237.5,w:R.w,h:.6,d:8.1,rx:.148});for(let w=R.z0-6;w>R.z1;w-=9)for(let W of[-1,1])Le.push({x:R.x+W*(R.w/2-.4),y:-.4,z:w,w:.6,h:3,d:.6});for(let w=R.z0-6;w>R.z1+1;w-=3.5)for(let W of[-1,1])Le.push({x:R.x+W*(R.w/2-.15),y:R.y+.55,z:w,w:.16,h:1.1,d:.16});for(let w of[-1,1])Le.push({x:R.x+w*(R.w/2-.15),y:R.y+1.1,z:it-4,w:.2,h:.14,d:tt-12});l(o,Be,Le,!1);let Mt=new Cn,Tt=[];{let w=new wn({color:c("#f6f2ff"),roughness:.4,emissive:c("#ff3aa8"),emissiveIntensity:0}),W=new Rs(17,.32,8,72);for(let We of[-1.3,1.3]){let Xe=new Ue(W,w);Xe.position.z=We,Mt.add(Xe)}for(let We=0;We<8;We++){let Xe=new Ue(o,w);Xe.scale.set(.18,34,.18),Xe.rotation.z=We/8*Math.PI;for(let ae of[-1.3,1.3]){let Ne=Xe.clone();Ne.position.z=ae,Mt.add(Ne)}}let j=new Ue(new $n(1.3,1.3,3.2,16),w);j.rotation.x=Math.PI/2,Mt.add(j);let he=["#ff7ac0","#33d9ff","#ffd23f","#9b7bff","#2ee6a6","#ff9a5a"].map(c);for(let We=0;We<14;We++){let Xe=We/14*m,ae=new Ue(a,r(he[We%he.length]));ae.scale.set(2,1.9,2.2),ae.userData.a=Xe,Mt.add(ae),Tt.push(ae)}Mt.position.set(R.x,R.y+19.5,R.z1+9),Mt.userData.rim=w,e.add(Mt);let Me=[];for(let We of[-1,1])for(let Xe of[-2.2,2.2])Me.push({x:R.x+We*6.5,y:R.y+9.8,z:R.z1+9+Xe,w:.5,h:21,d:.5,rz:-We*.3});l(o,w,Me,!1)}I.push({x0:R.x-7.5,x1:R.x+7.5,z0:R.z1+5,z1:R.z1+13});let kt=[];for(let w=0;w<(n?3:5);w++){let W=new Cn,j=new Ue(a,r(c(["#ffffff","#ff9ec9","#a8d8ff"][w%3])));j.scale.set(3.2,1.1,9),W.add(j);let he=new Ue(a,i(c("#2a2440")));he.scale.set(2.2,1.2,3),he.position.set(0,1.1,.6),W.add(he),W.position.set(-200+t()*400,.3,-270-t()*260),e.add(W),kt.push({g:W,sp:(2+t()*3)*(t()<.5?1:-1),ph:t()*9})}let Vt=[];for(let w of d){let W=w===0?4.6:2.5;Vt.push({av:!0,c:w,off:W,a:fe-1-W,b:me+1+W,n:w===0?n?3:6:n?2:4})}for(let w of C){let W=w===-26?2.2:2.5;Vt.push({av:!1,c:w,off:W,a:B-24,b:N+24,n:n?4:7})}let xt=[],qt=["#ff7ac0","#33d9ff","#ffd23f","#f4f1fb","#9b7bff","#ff9a5a","#2ee6a6","#ffffff","#ff4f6e"].map(c);for(let w of Vt){w.len=Math.abs(w.a-w.b),w.L=2*w.len+2*Math.PI*w.off,w.cars=[];for(let W=0;W<w.n;W++){let j={L:w,s:(W+t()*.5)/w.n*w.L,v:0,base:(w.av?9:11)+t()*4,col:qt[Math.floor(t()*qt.length)],taxi:t()<.14,x:0,z:0,yaw:0,brake:0};w.cars.push(j),xt.push(j)}}function Tn(w,W,j){W=(W%w.L+w.L)%w.L;let he=Math.PI*w.off,Me,We,Xe,ae;if(W<w.len)Me=W,We=w.off,Xe=1,ae=0,j.fwd=1;else if(W<w.len+he){let Ne=(W-w.len)/w.off;Me=w.len+Math.sin(Ne)*w.off,We=Math.cos(Ne)*w.off,Xe=Math.cos(Ne),ae=-Math.sin(Ne),j.fwd=1}else if(W<2*w.len+he)Me=w.len-(W-w.len-he),We=-w.off,Xe=-1,ae=0,j.fwd=-1;else{let Ne=(W-2*w.len-he)/w.off;Me=-Math.sin(Ne)*w.off,We=-Math.cos(Ne)*w.off,Xe=-Math.cos(Ne),ae=Math.sin(Ne),j.fwd=-1}return w.av?(j.x=w.c+We,j.z=w.a-Me,j.dirX=ae,j.dirZ=-Xe):(j.x=w.a+Me,j.z=w.c+We,j.dirX=Xe,j.dirZ=ae),j.yaw=Math.atan2(j.dirX,j.dirZ),j.straight=W<w.len||W>=w.len+he&&W<2*w.len+he,j}let ri=xt.length,Zi=new Gt(a,r(16777215),ri),Wn=new Gt(a,i(c("#1c1638"),{roughness:.3}),ri),Xn=new Gt(o,new mt({toneMapped:!1}),ri*4),pi=new Gt(o,i(c("#ffd23f")),ri);for(let w of[Zi,Wn,Xn,pi])w.frustumCulled=!1,e.add(w);xt.forEach((w,W)=>Zi.setColorAt(W,w.taxi?c("#ffd23f"):w.col));let qn=n?70:160,Ti=[],Ji=["#ff4fa3","#33d9ff","#ffd23f","#2ee6a6","#b48cff","#ff8a3d","#ffffff","#ff9ec9","#5fe0ff"].map(c),us=["#f1c7a5","#d9a07a","#a8714f","#7a4b33","#ffd9bd"].map(c),Yn=Fe.filter(w=>w.i>0&&w.i<oe.length-1||w.j===0);for(let w=0;w<qn;w++){let W=Yn[Math.floor(t()*Yn.length)],j=W.x0+1.3,he=W.x1-1.3,Me=W.zs-1.3,We=W.zn+1.3,Xe=2*(he-j+(Me-We));Ti.push({x0:j,x1:he,z0:We,z1:Me,P:Xe,s:t()*Xe,sp:(.9+t()*.8)*(t()<.5?1:-1),ph:t()*9,shirt:Ji[Math.floor(t()*Ji.length)],skin:us[Math.floor(t()*us.length)],dodge:0,dx:0,dz:0,jy:0,x:0,z:0})}let A=new Gt(a,i(16777215),qn),q=new Gt(new ui(.27,10,8),i(16777215),qn),Z=new Gt(o,i(c("#2a2440")),qn*2);for(let w of[A,q,Z])w.frustumCulled=!1,e.add(w);Ti.forEach((w,W)=>{A.setColorAt(W,w.shirt),q.setColorAt(W,w.skin)});function ne(w){let W=w.x1-w.x0,j=w.z1-w.z0,he=(w.s%w.P+w.P)%w.P;he<W?(w.x=w.x0+he,w.z=w.z1,w.yaw=Math.PI/2):(he-=W)<j?(w.x=w.x1,w.z=w.z1-he,w.yaw=Math.PI):(he-=j)<W?(w.x=w.x1-he,w.z=w.z0,w.yaw=-Math.PI/2):(he-=W,w.x=w.x0,w.z=w.z0+he,w.yaw=0),w.sp<0&&(w.yaw+=Math.PI)}let Q=[[4.6,-50],[-4.6,-101],[50,-76],[-50,-126],[4.6,-150],[100,-176],[-100,-76],[150,-126],[-4.6,-202],[-150,-176],[50,-228],[-50,-26],[100,-26],[-100,-228],[25,-126],[-125,-176],[125,-126],[R.x,R.z1+22],[-150,-50],[150,-200]],He=n?14:20,Ze=document.createElement("canvas");Ze.width=Ze.height=640;let Ye=Ze.getContext("2d"),ct=new dn(Ze);ct.colorSpace=Ct;let dt=new la(1.25,32),ot=new Float32Array(He*2);dt.setAttribute("aCell",new Li(ot,2));let ut=new mt({map:ct,toneMapped:!1,side:zn});ut.onBeforeCompile=w=>{w.vertexShader=w.vertexShader.replace("#include <uv_pars_vertex>",`#include <uv_pars_vertex>
attribute vec2 aCell;`).replace("#include <uv_vertex>",`#include <uv_vertex>
vMapUv = (vMapUv + aCell) * .2;`)};let Dt=new Gt(dt,ut,He),rn=new Gt(new Rs(1.32,.16,8,32),new mt({toneMapped:!1}),He),Nt=new $n(.9,1.6,40,16,1,!0);Nt.translate(0,20,0);let pn=new Gt(Nt,new mt({transparent:!0,opacity:.16,blending:On,depthWrite:!1,side:zn,toneMapped:!1}),He);for(let w of[Dt,rn,pn])w.frustumCulled=!1,e.add(w);for(let w=0;w<He;w++){ot[w*2]=w%5,ot[w*2+1]=4-Math.floor(w/5);let W=new vt().makeScale(0,0,0);Dt.setMatrixAt(w,W),rn.setMatrixAt(w,W),pn.setMatrixAt(w,W)}let Rt=Q.slice(0,He).map(([w,W],j)=>({i:j,x:w,z:W,coin:null,gone:0,y:0}));function pt(w){let W=w.i%5*128,j=Math.floor(w.i/5)*128,he=w.coin,Me=We=>{Ye.clearRect(W,j,128,128),Ye.save(),Ye.beginPath(),Ye.arc(W+64,j+64,62,0,m),Ye.clip(),Ye.fillStyle="#1a0f33",Ye.fillRect(W,j,128,128),We?Ye.drawImage(We,W+2,j+2,124,124):he&&p(Ye,W+64,j+64,62,he.symbol,he.mint),Ye.restore(),ct.needsUpdate=!0};Me(null),he&&f(he.iconUrl,Me)}let Ut=new vt,At=new L,Ot=new fn,Qt=new L,Zn=new ci,Qn=new Je,nt={},Pn=new L(0,1,0),Ai=-1;for(let w of Rt)w.y=mi(w.x,w.z)+2.1;function on(w,W,j,he,Me,We=0){let Xe=he.y;rt.color.setRGB(1+j*2.2,.94+j*1.8,.82+j*1.1),Lt.opacity=j*.62,pe.color.setScalar(.95+j*.42),Mt.userData.rim.emissiveIntensity=j*1.4,Mt.rotation.z=W*.07;for(let ae of Tt){let Ne=ae.userData.a+0;ae.position.set(Math.cos(Ne)*17,Math.sin(Ne)*17-1.4,0),ae.rotation.z=-Mt.rotation.z}for(let ae of kt)ae.g.position.x+=ae.sp*w,ae.g.position.x>320&&(ae.g.position.x=-320),ae.g.position.x<-320&&(ae.g.position.x=320),ae.g.rotation.y=ae.sp>0?Math.PI/2:-Math.PI/2,ae.g.position.y=.25+Math.sin(W*1.3+ae.ph)*.18,ae.g.rotation.z=Math.sin(W*1.1+ae.ph)*.04;if(!(Xe<-3&&!Me)){if(Math.floor(W*2)!==Ai){Ai=Math.floor(W*2);let ae=0;for(let Ne of ke){let wt=we(Ne,W);for(let gt=0;gt<2;gt++)Ie.setColorAt(ae++,F[wt.av]),Ie.setColorAt(ae++,F[wt.st])}Ie.instanceColor&&(Ie.instanceColor.needsUpdate=!0)}for(let ae of Vt){let Ne=ae.cars.length;for(let wt=0;wt<Ne;wt++){let gt=ae.cars[wt],Yt=((ae.cars[(wt+1)%Ne].s-gt.s)%ae.L+ae.L)%ae.L-5;Ne===1&&(Yt=1e9);let ft=gt.base;if(Tn(ae,gt.s,nt),nt.straight){let an=nt.fwd>0,Xt=1e9;if(ae.av)for(let St of ke){if(St.x!==ae.c||St.z===C[0]||St.z===C[C.length-1])continue;let $t=an?St.z+T(St.z)/2+1.5:St.z-T(St.z)/2-1.5,Ft=an?nt.z-$t:$t-nt.z;Ft>-.5&&Ft<Xt&&(Xt=Ft,gt._tl=St)}else for(let St of ke){if(St.z!==ae.c)continue;let $t=an?St.x-_(St.x)/2-1.5:St.x+_(St.x)/2+1.5,Ft=an?$t-nt.x:nt.x-$t;Ft>-.5&&Ft<Xt&&(Xt=Ft,gt._tl=St)}if(Xt<26&&gt._tl){let St=we(gt._tl,W),$t=ae.av?St.av:St.st;($t===2||$t===1&&Xt>3)&&(ft=Math.min(ft,Math.max(0,(Xt-1)*1.3)))}}if(ft=Math.min(ft,Math.max(0,Yt*1.4)),Me){let an=Me.x-nt.x,Xt=Me.z-nt.z,St=an*nt.dirX+Xt*nt.dirZ,$t=Math.abs(an*nt.dirZ-Xt*nt.dirX);St>0&&St<16&&$t<2.6&&(ft=Math.min(ft,Math.max(0,(St-5.5)*1.4)))}let Wt=ft-gt.v;gt.brake=Wt<-.5?1:0,gt.v+=y(Wt,-22*w,7*w),gt.s+=gt.v*w,gt.x=nt.x,gt.z=nt.z,gt.yaw=nt.yaw,gt.dirX=nt.dirX,gt.dirZ=nt.dirZ}}for(let ae=0;ae<ri;ae++){let Ne=xt[ae];Tn(Ne.L,Ne.s,nt),Ne.x=nt.x,Ne.z=nt.z,Ot.setFromAxisAngle(Pn,nt.yaw),Ut.compose(At.set(nt.x,.62,nt.z),Ot,Qt.set(2,.66,4.3)),Zi.setMatrixAt(ae,Ut);let wt=nt.dirX,gt=nt.dirZ;Ut.compose(At.set(nt.x-wt*.35,1.2,nt.z-gt*.35),Ot,Qt.set(1.7,.56,2.1)),Wn.setMatrixAt(ae,Ut),Ut.compose(At.set(nt.x-wt*.35,Ne.taxi?1.62:-5,nt.z-gt*.35),Ot,Qt.set(.9,.26,.4)),pi.setMatrixAt(ae,Ut);for(let hn=0;hn<2;hn++){let Yt=hn?.62:-.62,ft=gt*Yt,Wt=-wt*Yt;Ut.compose(At.set(nt.x+wt*2.12+ft,.68,nt.z+gt*2.12+Wt),Ot,Qt.set(.34,.18,.08)),Xn.setMatrixAt(ae*4+hn,Ut),Xn.setColorAt(ae*4+hn,Qn.setRGB(.9+j*2.6,.86+j*2.3,.7+j*1.5)),Ut.compose(At.set(nt.x-wt*2.12+ft,.7,nt.z-gt*2.12+Wt),Ot,Qt.set(.34,.16,.08)),Xn.setMatrixAt(ae*4+2+hn,Ut);let an=(Ne.brake?3.4:.9)+j*1.2;Xn.setColorAt(ae*4+2+hn,Qn.setRGB(an,.08,.16))}}for(let ae of[Zi,Wn,Xn,pi])ae.instanceMatrix.needsUpdate=!0;Xn.instanceColor&&(Xn.instanceColor.needsUpdate=!0);for(let ae=0;ae<qn;ae++){let Ne=Ti[ae];if(Me&&!Ne.dodge){let ft=Ne.x-Me.x,Wt=Ne.z-Me.z,an=ft*ft+Wt*Wt;if(an<30&&Me.speed>5){let Xt=Math.sqrt(an)||1;Ne.dodge=1.1,Ne.dx=ft/Xt*3.4,Ne.dz=Wt/Xt*3.4}}if(Ne.dodge>0){Ne.dodge=Math.max(0,Ne.dodge-w);let ft=Ne.dodge/1.1;Ne.jy=Math.sin(ft*Math.PI)*1.1}else Ne.jy=0,Ne.dx*=Math.max(0,1-w*1.5),Ne.dz*=Math.max(0,1-w*1.5),Ne.s+=Ne.sp*w;ne(Ne);let wt=Ne.x+Ne.dx*(Ne.dodge>0?1-Ne.dodge/1.1:1),gt=Ne.z+Ne.dz*(Ne.dodge>0?1-Ne.dodge/1.1:1),hn=Math.sin(W*7*Math.abs(Ne.sp)+Ne.ph),Yt=Math.abs(hn)*.06+Ne.jy;Ot.setFromAxisAngle(Pn,Ne.yaw),Ut.compose(At.set(wt,1.32+Yt+.25,gt),Ot,Qt.set(.62,.82,.38)),A.setMatrixAt(ae,Ut),Ut.compose(At.set(wt,2.02+Yt+.25,gt),Ot,Qt.setScalar(1)),q.setMatrixAt(ae,Ut);for(let ft=0;ft<2;ft++){let Wt=ft?.15:-.15,an=Math.cos(Ne.yaw)*Wt,Xt=-Math.sin(Ne.yaw)*Wt;Zn.set(hn*(ft?.5:-.5),Ne.yaw,0,"YXZ"),Ot.setFromEuler(Zn),Ut.compose(At.set(wt+an,.72+Ne.jy+.25,gt+Xt),Ot,Qt.set(.22,.82,.24)),Z.setMatrixAt(ae*2+ft,Ut)}}for(let ae of[A,q,Z])ae.instanceMatrix.needsUpdate=!0;if(We>0||Rt._shown){Rt._shown=We>0;for(let ae of Rt){ae.gone>0&&(ae.gone=Math.max(0,ae.gone-w));let Ne=ae.coin&&ae.gone<=0,wt=Ne?We:0,gt=ae.y+Math.sin(W*2+ae.i)*.3,hn=Math.hypot(he.x-ae.x,he.y-gt,he.z-ae.z),Yt=wt*y((hn-1.8)/2.5,0,1);Ot.setFromAxisAngle(Pn,W*1.6+ae.i),Ut.compose(At.set(ae.x,gt,ae.z),Ot,Qt.setScalar(Yt)),Dt.setMatrixAt(ae.i,Ut),rn.setMatrixAt(ae.i,Ut);let ft=y((Math.hypot(he.x-ae.x,he.z-ae.z)-2.6)/4,0,1);Ut.compose(At.set(ae.x,0,ae.z),Ot.identity(),Qt.set(wt*ft,wt*ft,wt*ft)),pn.setMatrixAt(ae.i,Ut);let Wt=!ae.coin||ae.coin.chg==null?Qn.setRGB(1.25,.95,.2):ae.coin.chg>=0?Qn.setRGB(.2,1.25,.7):Qn.setRGB(1.3,.25,.55);rn.setColorAt(ae.i,Wt),pn.setColorAt(ae.i,Qn.multiplyScalar(1.6))}for(let ae of[Dt,rn,pn])ae.instanceMatrix.needsUpdate=!0,ae.instanceColor&&(ae.instanceColor.needsUpdate=!0)}}}function Ri(w){let W=(w||[]).filter(j=>j&&j.mint).slice().sort((j,he)=>(he.heat||0)-(j.heat||0));Se.forEach((j,he)=>{let Me=W[he%Math.max(1,W.length)];if(!Me)return;let We=W.indexOf(Me);j.mint===Me.mint&&j.chg===Me.chg||(j.mint=Me.mint,j.chg=Me.chg,$e(j,Me,We))}),Rt.forEach((j,he)=>{let Me=W[he];if(!Me){j.coin=null;return}!j.coin||j.coin.mint!==Me.mint?(j.coin=Me,pt(j)):j.coin=Me})}function mi(w,W){if(Math.abs(w-R.x)<R.w/2&&W<-233.5)return W>-241.5?.06+(-233.5-W)/8*(R.y-.06):R.y;for(let j of Fe)if(w>j.x0&&w<j.x1&&W<j.zs&&W>j.zn)return .25;return W>fe&&W<fe+3.2||W<me&&W>me-3.6?.25:.06}return{blds:$,roofs:E,palms:J,neon:ce,solids:I,circles:ie,update:on,setCoins:Ri,groundY:mi,picks:Rt,cars:xt,peds:Ti,lanes:Vt,blocks:Fe,AVX:d,STZ:C,zSouth:fe,zNorth:me,bills:Se}}function Ku(s){let{scene:e,std:t,candy:n,BOX:i,RBOX:r,col:o,clamp:a,city:l,spark:c,burst:h,TAU:u}=s,{PIER:f,X0:p,X1:x,AVX:y,STZ:m,avW:d,stW:C}=Ic,_=new Cn,T=new Cn;_.add(T);let B=n(o("#ff4fa3")),N=n(o("#f6f2ff")),R=t(o("#1a1433"),{roughness:.15,metalness:.4}),$=t(o("#221c34"),{roughness:.6}),E=(ee,te,V,K,_e,de,b,M,G=0)=>{let re=new Ue(ee,te);return re.scale.set(V,K,_e),re.position.set(de,b,M),re.rotation.x=G,T.add(re),re};E(r,B,2.12,.56,4.7,0,.64,0),E(r,B,2.02,.3,1.7,0,.86,-1.45,-.1),E(r,R,1.66,.46,1.75,0,1.12,.45),E(r,R,1.6,.1,1.05,0,1.08,-.72,-.62),E(r,B,2.2,.3,1.5,0,.92,1.7),E(i,new mt({color:new Je(.5,2.2,2.6),toneMapped:!1}),2.18,.05,.05,0,.5,0),E(i,N,2.16,.1,4.36,0,.74,0),E(i,$,2.2,.1,.55,0,1.36,2.18);for(let ee of[-1,1])E(i,$,.12,.4,.12,ee*.8,1.12,2.18);let I=[],J=new $n(.44,.44,.36,18);J.rotateZ(Math.PI/2);for(let[ee,te]of[[-1.04,-1.5],[1.04,-1.5],[-1.04,1.5],[1.04,1.5]]){let V=new Ue(J,$);V.rotation.order="YXZ",V.position.set(ee,.44,te),T.add(V),I.push(V)}let ce=new mt({color:new Je(2.4,2.2,1.8),toneMapped:!1}),be=new mt({color:new Je(1.6,.1,.25),toneMapped:!1});for(let ee of[-1,1])E(i,ce,.52,.14,.08,ee*.66,.78,-2.36),E(i,be,.62,.14,.08,ee*.62,.82,2.36);let k=(()=>{let ee=document.createElement("canvas");ee.width=ee.height=128;let te=ee.getContext("2d"),V=te.createRadialGradient(64,64,0,64,64,64);return V.addColorStop(0,"rgba(255,255,255,1)"),V.addColorStop(.5,"rgba(255,255,255,.35)"),V.addColorStop(1,"rgba(255,255,255,0)"),te.fillStyle=V,te.fillRect(0,0,128,128),new dn(ee)})(),Y=new Ue(new sn(4.2,7),new mt({map:k,color:new Je(2.2,.3,1.4),transparent:!0,blending:On,depthWrite:!1,toneMapped:!1,polygonOffset:!0,polygonOffsetFactor:-6,polygonOffsetUnits:-6}));Y.rotation.x=-Math.PI/2,Y.position.y=.1,_.add(Y);let ie=new Ue(new sn(7,16),new mt({map:k,color:new Je(1,.9,.7),transparent:!0,opacity:0,blending:On,depthWrite:!1,toneMapped:!1,polygonOffset:!0,polygonOffsetFactor:-6,polygonOffsetUnits:-6}));ie.rotation.x=-Math.PI/2,ie.position.set(0,.11,-10),_.add(ie),_.visible=!1,e.add(_);let P={on:!1,x:4.6,z:-36,y:.06,th:0,v:0,vx:0,vz:0,steer:0,boost:1,coins:0,shake:0,tod:.78,camInit:!1,speed:0},oe={},le={arrowup:"up",w:"up",arrowdown:"down",s:"down",arrowleft:"left",a:"left",arrowright:"right",d:"right",shift:"boost"," ":"drift"};addEventListener("keydown",ee=>{if(!P.on)return;let te=le[ee.key.toLowerCase()];te?(oe[te]=!0,ee.preventDefault()):ee.key.toLowerCase()==="t"&&me()}),addEventListener("keyup",ee=>{let te=le[ee.key.toLowerCase()];te&&(oe[te]=!1)}),addEventListener("blur",()=>{for(let ee in oe)oe[ee]=!1});let fe=[.2,.5,.78,1];function me(){let ee=fe.findIndex(te=>Math.abs(te-P.tod)<.01);return P.tod=fe[(ee+1)%fe.length],P.tod}let Ae=new L,se=new L,xe=new L,Ce=new L;function Fe(ee,te,V){let K=P.vx*ee+P.vz*te;if(K>=0)return;P.vx-=K*ee*1.3,P.vz-=K*te*1.3;let _e=-K;P.v*=V?.45:.7,_e>5&&(P.shake=Math.min(1.2,_e/30),Ae.set(P.x-ee*1.6,P.y+.8,P.z-te*1.6),h(Ae,[3.6,2.6,.6],Math.min(40,_e*1.4|0),7,.5,6))}function Ge(){for(let V of l.solids){if(P.x<V.x0-1.8||P.x>V.x1+1.8||P.z<V.z0-1.8||P.z>V.z1+1.8)continue;let K=a(P.x,V.x0,V.x1),_e=a(P.z,V.z0,V.z1),de=P.x-K,b=P.z-_e,M=Math.hypot(de,b);if(!(M>=1.8))if(M>1e-4){let G=de/M,re=b/M;P.x=K+G*1.8,P.z=_e+re*1.8,Fe(G,re,!0)}else{let G=[[P.x-V.x0,-1,0],[V.x1-P.x,1,0],[P.z-V.z0,0,-1],[V.z1-P.z,0,1]].sort((re,pe)=>re[0]-pe[0])[0];G[1]?P.x=G[1]<0?V.x0-1.8:V.x1+1.8:P.z=G[2]<0?V.z0-1.8:V.z1+1.8,Fe(G[1],G[2],!0)}}for(let V of l.circles){let K=P.x-V.x,_e=P.z-V.z,de=1.45+V.r,b=K*K+_e*_e;if(b>=de*de)continue;let M=Math.sqrt(b)||1,G=K/M,re=_e/M;P.x=V.x+G*de,P.z=V.z+re*de,Fe(G,re)}for(let V of l.cars){let K=P.x-V.x,_e=P.z-V.z,de=3,b=K*K+_e*_e;if(b>=de*de)continue;let M=Math.sqrt(b)||1,G=K/M,re=_e/M;P.x=V.x+G*de,P.z=V.z+re*de,Fe(G,re)}let te=Math.abs(P.x-f.x)<f.w/2-1.8+.2;if(P.z>-14&&(P.z=-14,Fe(0,-1)),P.z<-234.6&&!te&&P.z>-242&&(P.z=-234.6,Fe(0,1)),P.z<=-242){let V=f.x-f.w/2+1.8,K=f.x+f.w/2-1.8;P.x<V&&(P.x=V,Fe(1,0)),P.x>K&&(P.x=K,Fe(-1,0))}P.x<p+2&&(P.x=p+2,Fe(1,0)),P.x>x-2&&(P.x=x-2,Fe(-1,0))}function et(ee,te,V,K,_e){let de=a((oe.left?1:0)-(oe.right?1:0)-(oe.ax||0),-1,1),b=a((oe.up?1:0)-(oe.down?1:0)+(oe.ay||0),-1,1),M=(oe.boost||oe.tboost)&&P.boost>.04&&b>0,G=!!(oe.drift||oe.tdrift);P.boost=a(P.boost+(M?-ee*.3:ee*.1),0,1);let re=M?56:37;b>0?P.v+=(P.v<-.5?44:(M?34:22)*(1-a(P.v/re,0,1)*.7))*b*ee:b<0?P.v+=(P.v>.5?-48:-16)*-b*ee:P.v-=Math.sign(P.v)*Math.min(Math.abs(P.v),6*ee),G&&(P.v-=Math.sign(P.v)*Math.min(Math.abs(P.v),8*ee)),P.v=Math.max(-15,P.v),P.v>re&&(P.v+=(re-P.v)*Math.min(1,ee*1.4)),P.steer+=(de-P.steer)*Math.min(1,ee*(de?5.5:8));let pe=Math.abs(P.v),ge=a(pe/8,0,1)*(1-a((pe-28)/50,0,.4));P.th+=P.steer*(G?2.5:1.85)*ge*(P.v<0?-1:1)*ee;let ze=-Math.sin(P.th),Se=-Math.cos(P.th),De=1-Math.exp(-ee*(G?1.5:7.5));P.vx+=(ze*P.v-P.vx)*De,P.vz+=(Se*P.v-P.vz)*De,P.x+=P.vx*ee,P.z+=P.vz*ee,Ge(),P.speed=Math.hypot(P.vx,P.vz);let $e=l.groundY(P.x,P.z);P.y+=($e-P.y)*Math.min(1,ee*14);let ht=l.groundY(P.x+ze*2,P.z+Se*2),ve=l.groundY(P.x-ze*2,P.z-Se*2),yt=Math.atan2(ht-ve,4),Ke=P.vx*-Se+P.vz*ze,st=a(-Ke*.012,-.12,.12);_.position.set(P.x,P.y,P.z),_.rotation.set(0,P.th,0),T.rotation.set(yt,0,st,"YXZ");for(let Ie=0;Ie<4;Ie++){let we=I[Ie];we.rotation.x-=P.v*ee/.44,Ie<2&&(we.rotation.y=P.steer*.42)}if(Math.abs(Ke)>6&&pe>8)for(let Ie of[-1,1])Ae.set(P.x-ze*1.6+Se*Ie*1,P.y+.3,P.z-Se*1.6-ze*Ie*1),c(Ae,Ce.set((Math.random()-.5)*2,1+Math.random(),(Math.random()-.5)*2),[3.4,1,2.6],.5,.16,2.5,-1);if(M)for(let Ie of[-1,1])Ae.set(P.x-ze*2.5+Se*Ie*.5,P.y+.55,P.z-Se*2.5-ze*Ie*.5),c(Ae,Ce.set(-ze*9+(Math.random()-.5)*2,Math.random(),-Se*9+(Math.random()-.5)*2),Math.random()<.5?[3.6,1.6,.3]:[.6,2.4,3.6],.28,.2,3);be.color.setRGB(b<0&&P.v>.5?4:1.6,.1,.25);for(let Ie of l.picks){if(!Ie.coin||Ie.gone>0)continue;let we=P.x-Ie.x,F=P.z-Ie.z;we*we+F*F<17&&Math.abs(P.y+1-Ie.y)<4&&(Ie.gone=40,P.coins++,Ae.set(Ie.x,Ie.y,Ie.z),h(Ae,Ie.coin.chg==null?[3.6,2.8,.5]:Ie.coin.chg>=0?[.4,3.6,1.8]:[3.6,.5,1.6],70,14,.9,4),s.onCollect&&s.onCollect(Ie.coin,P.coins))}let Pe=8.4+pe*.05,ke=3.2+pe*.022;Ae.set(P.x-ze*Pe,P.y+ke,P.z-Se*Pe);for(let Ie of l.solids)if(!(!Ie.top||Ae.y>Ie.top)&&Ae.x>Ie.x0-.6&&Ae.x<Ie.x1+.6&&Ae.z>Ie.z0-.6&&Ae.z<Ie.z1+.6)for(let we=1;we<=8;we++){let F=1-we/9;if(Ce.set(P.x-ze*Pe*F,Ae.y,P.z-Se*Pe*F),!(Ce.x>Ie.x0-.6&&Ce.x<Ie.x1+.6&&Ce.z>Ie.z0-.6&&Ce.z<Ie.z1+.6)){Ae.copy(Ce);break}}P.camInit||(P.camInit=!0,P.t=0),P.t+=ee;let rt=P.t<1.4?1-Math.exp(-ee*2.4):1-Math.exp(-ee*6.5);se.lerp(Ae,rt),xe.lerp(Ce.set(P.x+ze*6,P.y+1.4,P.z+Se*6),P.t<1.4?rt:1-Math.exp(-ee*12)),V.copy(se),K.copy(xe),P.shake>0&&(V.x+=(Math.random()-.5)*P.shake,V.y+=(Math.random()-.5)*P.shake*.6,P.shake=Math.max(0,P.shake-ee*3));let bt=_e.aspect<.9,Lt=(bt?70:57)+(M?9:0)+Math.min(10,pe*.1);_e.fov+=(Lt-_e.fov)*Math.min(1,ee*3),_e.updateProjectionMatrix(),ie.material.opacity=s.night()*.55}function at(ee,te){P.on=!0,_.visible=!0,P.camInit=!1,P.x=4.6,P.z=-34,P.th=0,P.v=8,P.vx=0,P.vz=-8,P.steer=0,P.y=l.groundY(P.x,P.z),se.copy(ee.position),xe.copy(te);for(let V in oe)oe[V]=!1}function qe(){P.on=!1,_.visible=!1;for(let ee in oe)oe[ee]=!1}let lt=0;function O(ee,te){if(lt-=te,lt>0||!ee)return;lt=1/15;let V=ee.getContext("2d"),K=ee.width,_e=K/2,de=_e/75;V.clearRect(0,0,K,K),V.save(),V.beginPath(),V.arc(_e,_e,_e-3,0,u),V.clip(),V.fillStyle="#1b1036",V.fillRect(0,0,K,K),V.translate(_e,_e),V.rotate(P.th),V.scale(de,de),V.translate(-P.x,-P.z),V.fillStyle="#2b6e9e",V.fillRect(-600,-900,1200,664),V.fillStyle="#e7c49b",V.fillRect(-600,-21.5,1200,40),V.fillStyle="#ff9ec9",V.fillRect(-36,-6.5,50,3),V.fillStyle="#6d5a9c";for(let b of m)V.fillRect(p,b-C(b)/2,x-p,C(b));for(let b of y)V.fillRect(b-d(b)/2,-233,d(b),211.5);V.fillRect(f.x-f.w/2,f.z1,f.w,f.z0-f.z1+3),V.fillStyle="#3a2a5e";for(let b of l.solids)b.top&&V.fillRect(b.x0,b.z0,b.x1-b.x0,b.z1-b.z0);V.restore();for(let b of l.picks){if(!b.coin||b.gone>0)continue;let M=b.x-P.x,G=b.z-P.z,re=Math.cos(P.th),pe=Math.sin(P.th),ge=(M*re-G*pe)*de,ze=(M*pe+G*re)*de,Se=Math.hypot(ge,ze),De=_e-9,$e=!1;Se>De&&(ge*=De/Se,ze*=De/Se,$e=!0),V.fillStyle=b.coin.chg==null?"#ffd23f":b.coin.chg>=0?"#2ee6a6":"#ff4f9e",V.beginPath(),V.arc(_e+ge,_e+ze,$e?4:5.5,0,u),V.fill(),V.lineWidth=1.5,V.strokeStyle="#120826",V.stroke()}V.fillStyle="#fff",V.beginPath(),V.moveTo(_e,_e-9),V.lineTo(_e+6.5,_e+7),V.lineTo(_e,_e+3.5),V.lineTo(_e-6.5,_e+7),V.closePath(),V.fill(),V.lineWidth=3,V.strokeStyle="rgba(255,255,255,.85)",V.beginPath(),V.arc(_e,_e,_e-3,0,u),V.stroke(),V.fillStyle="#ffd23f",V.font="800 12px Inter, Arial",V.textAlign="center",V.textBaseline="middle",V.fillText("N",_e+(_e-12)*Math.sin(P.th),_e-(_e-12)*Math.cos(P.th))}return{S:P,car:_,keys:oe,update:et,enter:at,exit:qe,radar:O,cycleTime:me,input(ee){Object.assign(oe,ee)},state(){return{mph:Math.round(P.speed*2.237),boost:P.boost,coins:P.coins,tod:P.tod}}}}var Kn=Math.PI*2,Lx=s=>()=>(s=s*16807%2147483647)/2147483647,di=(s,e,t)=>{let n=Math.max(0,Math.min(1,(t-s)/(e-s)));return n*n*(3-2*n)},_n=(s,e,t)=>s+(e-s)*t,Yi=(s,e,t)=>Math.max(e,Math.min(t,s)),ue=s=>new Je(s),si=s=>new Je(s),Ve={x0:-36,x1:14,y:-4.2,z:-5.2},vn={x0:-48,x1:-41.5,y0:-75},cn={barracks:{x0:-40,x1:30,y0:-19,y1:-10.5,d:10},war:{x0:-40,x1:30,y0:-35.5,y1:-25,d:11},fallen:{x0:-40,x1:30,y0:-53,y1:-43,d:9},hq:{x0:-40,x1:30,y0:-73.5,y1:-61,d:12}},yn={x0:15,x1:54,bunker:60};function L_(s,e={}){let t=matchMedia("(pointer:coarse)").matches||innerWidth<760,n=matchMedia("(prefers-reduced-motion: reduce)").matches,i=Lx(20261119),r=new Fr({canvas:s,antialias:!t,powerPreference:"high-performance"});r.setPixelRatio(Math.min(devicePixelRatio||1,t?1.5:1.75)),r.setSize(innerWidth,innerHeight,!1),r.outputColorSpace=Ct,r.toneMapping=Ii;let o=new dr,a=new Nn(42,innerWidth/innerHeight,.1,3e3),l=new fr(r),c=l.fromScene(new Ta,.04).texture,h=new Ea(r);h.addPass(new ba(o,a));let u=new _r(new Ee(innerWidth,innerHeight),t?.55:.75,.5,1.02);h.addPass(u),h.addPass(new wa);let f={uT:{value:0},uTime:{value:0},uNight:{value:0},uSunX:{value:0}},p=new Ue(new ui(1600,48,24),new nn({side:mn,depthWrite:!1,fog:!1,uniforms:f,vertexShader:"varying vec3 vD; void main(){ vD = position; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.); }",fragmentShader:`uniform float uT, uTime; varying vec3 vD;
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
      }`}));o.add(p);let x=new Ue(new sn(1,1),new nn({transparent:!0,depthWrite:!1,fog:!1,uniforms:f,vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.); }",fragmentShader:`uniform float uT, uTime; varying vec2 vUv;
      void main(){ vec2 p = vUv * 2. - 1.; float r = length(p); if (r > 1.) discard;
        if (p.y < .06) { float t = (.06 - p.y) / 1.06, f = fract(t * 7. - uTime * .22); if (f < .08 + t * .5) discard; }
        vec3 top = vec3(1., .957, .486), md = vec3(1., .635, .247), bt = vec3(1., .239, .561);
        vec3 c = p.y > 0. ? mix(md, top, p.y) : mix(md, bt, -p.y);
        c = mix(c, c * vec3(1., .62, .78), smoothstep(.35, .9, uT));
        gl_FragColor = vec4(pow(c, vec3(2.2)) * .97, smoothstep(1., .985, r));
        #include <colorspace_fragment>
      }`}));x.scale.setScalar(250),o.add(x);let y=(()=>{let g=document.createElement("canvas");g.width=g.height=256;let v=g.getContext("2d"),z=v.createRadialGradient(128,128,0,128,128,128);return z.addColorStop(0,"rgba(255,255,255,1)"),z.addColorStop(.25,"rgba(255,255,255,.5)"),z.addColorStop(1,"rgba(255,255,255,0)"),v.fillStyle=z,v.fillRect(0,0,256,256),new dn(g)})(),m=new pr(new Ts({map:y,color:ue("#ffd9a8"),transparent:!0,depthWrite:!1,blending:On,fog:!1}));m.scale.setScalar(760),o.add(m);let d=new fa(12578815,16759e3,.9);o.add(d);let C=new Jr(16773596,1.5);C.position.set(-40,70,60),o.add(C),o.fog=new ea(16763100,90,900);let _=new Jr(16769228,0);_.position.set(14,6,40),_.target.position.set(0,0,0),o.add(_,_.target);let T=(g,v={})=>new wn({color:g,roughness:.7,metalness:0,...v}),B=(g,v={})=>new qr({color:g,roughness:.32,clearcoat:.8,clearcoatRoughness:.2,envMap:c,envMapIntensity:.45,...v}),N=g=>new mt({color:g,toneMapped:!1,fog:!1}),R=new Bn(1,1,1),$=new Qr(1,1,1,3,.12);function E(g,v,z,U){let H=new Gt(g,v,z.length),S=new vt,D=new fn,X=new ci,Te=new L,Re=new L;return z.forEach((ye,Qe)=>{Te.set(ye.x,ye.y,ye.z),Re.set(ye.w,ye.h,ye.d),D.setFromEuler(X.set(ye.rx||0,ye.ry||0,ye.rz||0)),S.compose(Te,D,Re),H.setMatrixAt(Qe,S),U!==!1&&H.setColorAt(Qe,ye.c||ue("#ffffff"))}),H.frustumCulled=!1,o.add(H),H}let I=new wn({roughness:.5,metalness:.04});I.onBeforeCompile=g=>{g.uniforms.uNight=f.uNight,g.vertexShader=g.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vWP; varying vec3 vWN;`).replace("#include <project_vertex>",`#include <project_vertex>
vWP = (modelMatrix * instanceMatrix * vec4(transformed, 1.)).xyz; vWN = normalize(mat3(modelMatrix) * mat3(instanceMatrix) * objectNormal);`),g.fragmentShader=g.fragmentShader.replace("#include <common>",`#include <common>
uniform float uNight; varying vec3 vWP; varying vec3 vWN; float hh(vec2 p){ return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453); }`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
        { float side = 1. - step(.6, abs(vWN.y)); vec2 uv = abs(vWN.x) > .5 ? vec2(vWP.z, vWP.y) : vec2(vWP.x, vWP.y);
          vec2 g = uv * vec2(.62, .46), cell = floor(g), f = fract(g);
          float win = step(.2, f.x) * step(f.x, .8) * step(.25, f.y) * step(f.y, .8) * side * step(2.2, vWP.y);
          float lit = step(.66, hh(cell + floor(vWP.xz * .05)));
          vec3 wc = mix(vec3(1., .78, .5), vec3(1., .42, .78), step(.82, hh(cell * 1.7 + 3.)));
          diffuseColor.rgb = mix(diffuseColor.rgb, diffuseColor.rgb * vec3(.55, .62, .85), win * .55);
          totalEmissiveRadiance += wc * win * lit * uNight * .82; }`)};let J=["#ff9ec9","#9ff0d0","#c8a8ff","#ffc9a0","#a8d8ff","#fff0a8","#f4f1fb","#ffb3d9"].map(ue),ce=$u({scene:o,R:i,mobile:t,std:T,candy:B,BOX:R,RBOX:$,inst:E,col:ue,lin:si,PASTEL:J,loadIcon:qn,mono:Wn,sm:di,clamp:Yi,TAU:Kn}),be=ce.blds,k=ce.roofs;E($,I,be);let Y=[];for(let g of k)if(i()<.42){let v=i()<.55?si("#ff3aa8"):si("#33e6ff");Y.push({x:g.x,y:g.y+.2,z:g.z+g.d/2+.05,w:g.w*.92,h:.32,d:.1,c:v})}Y.push(...ce.neon);let ie=new mt({toneMapped:!1,fog:!1});E(R,ie,Y);let P=(()=>{let g=[],v=ue("#8a5a3c"),z=ue("#2bb38f"),U=(X,Te)=>{let Re=X.attributes.position.count,ye=new Float32Array(Re*3);for(let Qe=0;Qe<Re;Qe++)ye[Qe*3]=Te.r,ye[Qe*3+1]=Te.g,ye[Qe*3+2]=Te.b;return X.setAttribute("color",new En(ye,3)),X},H=0,S=0;for(let X=0;X<7;X++){let Te=new $n(.22-X*.015,.26-X*.015,1.5,7);Te.translate(H,S+.75,0),g.push(U(Te,v)),H+=.12+X*.03,S+=1.42}for(let X=0;X<8;X++){let Te=X/8*Kn,Re=new Bn(4.2,.08,.8);Re.translate(2.1,0,0),Re.rotateZ(-.55),Re.rotateY(Te),Re.translate(H,S+.1,0),g.push(U(Re,z))}let D=new ui(.45,8,6);return D.translate(H,S,0),g.push(U(D,ue("#6a4a2c"))),Pc(g.map(X=>X.toNonIndexed()))})(),oe=new wn({vertexColors:!0,roughness:.7});oe.onBeforeCompile=g=>{g.uniforms.uTime=f.uTime,g.vertexShader=g.vertexShader.replace("#include <common>",`#include <common>
uniform float uTime;`).replace("#include <begin_vertex>",`#include <begin_vertex>
      { float hg = max(0., transformed.y - 1.2), ph = instanceMatrix[3].x * .37 + instanceMatrix[3].z * .23;
        transformed.x += (sin(uTime * 1.25 + ph) * .55 + sin(uTime * 2.3 + ph * 1.7) * .22) * hg * hg * .0042;
        transformed.z += cos(uTime * 1.05 + ph) * hg * hg * .0024; }`)};let le=[];for(let g=0;g<(t?16:26);g++)le.push({x:-95+g*(190/(t?16:26))+(i()-.5)*4,z:-9-i()*8.5,s:.9+i()*.5});le.forEach(g=>ce.circles.push({x:g.x,z:g.z,r:.6})),le.push(...ce.palms);{let g=new Gt(P,oe,le.length),v=new vt,z=new fn,U=new L;le.forEach((H,S)=>{v.compose(new L(H.x,0,H.z),z.setFromAxisAngle(new L(0,1,0),i()*Kn),U.setScalar(H.s)),g.setMatrixAt(S,v)}),g.frustumCulled=!1,o.add(g)}{let g=["#ff4fa3","#33d9ff","#ffd23f","#2ee6a6","#ffffff","#b48cff","#ff8a3d"].map(ue),v=[],z=[],U=[],H=(ye,Qe)=>!(ye>Ve.x0-6&&ye<yn.bunker+8&&Qe>-12.5)&&!le.some(tn=>Math.hypot(tn.x-ye,tn.z-Qe)<2.2);for(let ye=0,Qe=0;ye<90&&Qe<(t?16:30);ye++){let tn=-165+i()*330,An=-11.5-i()*5.8;if(!H(tn,An))continue;Qe++;let ln=g[Math.floor(i()*g.length)];v.push({x:tn,y:1.4,z:An,w:.1,h:2.8,d:.1,c:ue("#f4f1fb")}),z.push({x:tn,y:2.85,z:An,w:3.4,h:.75,d:3.4,c:ln,rz:(i()-.5)*.25}),U.push({x:tn+1.3,y:.03,z:An+.4,w:1.1,h:.04,d:2.1,ry:(i()-.5)*.6,c:g[Math.floor(i()*g.length)]}),ce.circles.push({x:tn,z:An,r:.3})}E(R,T(16777215),v),E(new ls(.5,1,10),T(16777215,{roughness:.6}),z),E(R,T(16777215,{roughness:.9}),U);let S=["#ff9ec9","#9ff0d0","#ffd23f","#a8d8ff"].map(ue),D=[],X=[];[[-118,-14.5],[-62,-15],[84,-14.5],[138,-15]].forEach(([ye,Qe],tn)=>{let An=S[tn%S.length];for(let[ln,_i]of[[-.9,-.9],[.9,-.9],[-.9,.9],[.9,.9]])D.push({x:ye+ln,y:1.4,z:Qe+_i,w:.16,h:2.8,d:.16,c:ue("#f4f1fb")});X.push({x:ye,y:3.6,z:Qe,w:2.6,h:1.7,d:2.4,c:An},{x:ye,y:4.65,z:Qe,w:3.1,h:.22,d:2.9,c:ue("#ffffff")},{x:ye,y:4.95,z:Qe,w:1.1,h:.4,d:1.1,c:ue("#ff4f6e")},{x:ye,y:.9,z:Qe+2.2,w:.9,h:.12,d:2.6,rx:.62,c:ue("#f4f1fb")}),ce.solids.push({x0:ye-1.2,x1:ye+1.2,z0:Qe-1.2,z1:Qe+1.2,top:5})}),E(R,T(16777215),D),E($,B(16777215),X);let Te=-92,Re=-14;E(R,T(ue("#f4f1fb")),[{x:Te-4.5,y:1.3,z:Re,w:.14,h:2.6,d:.14},{x:Te+4.5,y:1.3,z:Re,w:.14,h:2.6,d:.14},{x:Te,y:2.25,z:Re,w:9,h:.9,d:.03}],!1),ce.circles.push({x:Te-4.5,z:Re,r:.3},{x:Te+4.5,z:Re,r:.3})}let fe=new Cn;{let g=B(ue("#f6f2ff")),v=B(ue("#ff4fa3")),z=new Ue($,g);z.scale.set(1.1,1.05,5.2),fe.add(z);let U=new Ue(R,v);U.scale.set(8.6,.12,1.3),U.position.set(0,.35,-.4),fe.add(U);let H=new Ue(R,v);H.scale.set(2.8,.1,.8),H.position.set(0,.3,2.5),fe.add(H);let S=new Ue(R,v);S.scale.set(.1,1.3,.9),S.position.set(0,.85,2.45),fe.add(S);let D=new Ue(R,T(ue("#2a2440")));D.scale.set(.12,1.8,.1),D.position.set(0,0,-2.72),fe.add(D),fe.userData.prop=D,fe.rotation.y=-Math.PI/2,o.add(fe)}let me=document.createElement("canvas");me.width=1024,me.height=176;let Ae=me.getContext("2d"),se=new dn(me);se.colorSpace=Ct;let xe=new Ue(new sn(19,3.3,24,1),new mt({map:se,side:zn,toneMapped:!1}));o.add(xe);let Ce=new Ue(R,T(ue("#2a2440")));o.add(Ce);let Fe=null;function Ge(g){let v=z=>{let U=Ae;U.fillStyle="#fff7fb",U.fillRect(0,0,1024,176),U.fillStyle="#ff4fa3",U.fillRect(0,0,1024,12),U.fillRect(0,164,1024,12),U.save(),U.beginPath(),U.arc(92,88,62,0,Kn),U.clip(),z?U.drawImage(z,30,26,124,124):Wn(U,92,88,62,g.symbol,g.mint),U.restore();let H=g.chg==null?"#c99a00":g.chg>=0?"#10a877":"#e0306f";U.fillStyle="#2a0b4d",U.font="400 92px Anton, Impact, sans-serif",U.textAlign="left",U.textBaseline="middle";let S="$"+g.symbol;for(;U.measureText(S).width>460&&S.length>3;)S=S.slice(0,-2)+"\u2026";U.fillText(S,180,94);let D=U.measureText(S).width;U.fillStyle=H,U.fillText(g.chg==null?"NEW":(g.chg>=0?"+":"")+g.chg.toFixed(Math.abs(g.chg)>=100?0:1)+"%",180+D+30,94),U.fillStyle="#ff4fa3",U.font="800 26px Inter, Arial",U.textAlign="right",U.fillText("LIVE ON THE LINE",996,92),se.needsUpdate=!0};v(null),qn(g.iconUrl,v)}let et=[];for(let g=0;g<(t?2:4);g++){let v=new Ue(new ls(7,260,24,1,!0).rotateX(Math.PI).translate(0,130,0),new mt({color:ue("#e8e2ff"),transparent:!0,opacity:0,blending:On,depthWrite:!1,side:zn,fog:!1}));v.position.set(-90+g*60+i()*10,12,-70-i()*60),o.add(v),et.push({cone:v,ph:g*1.7,sp:.22+g*.05})}{let g=new Ue(new sn(4e3,1600),new nn({fog:!1,uniforms:f,vertexShader:"varying vec3 vW; void main(){ vec4 p = modelMatrix * vec4(position, 1.); vW = p.xyz; gl_Position = projectionMatrix * viewMatrix * p; }",fragmentShader:`uniform float uT, uTime, uNight, uSunX; varying vec3 vW;
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
        }`}));g.rotation.x=-Math.PI/2,g.position.set(0,.01,-1041.2),o.add(g)}let at=T(ue("#f2cfae"),{roughness:.9});{let g=new Ue(new sn(700,236),at);g.rotation.x=-Math.PI/2,g.position.set(0,0,-123.2),o.add(g);for(let[v,z]of[[-260,Ve.x0],[Ve.x1,260]]){let U=new Ue(new sn(z-v,5.6),at);U.rotation.x=-Math.PI/2,U.position.set((v+z)/2,0,-2.8),o.add(U)}}let qe=(()=>{let g=new Vr;g.moveTo(-260,-120),g.lineTo(260,-120),g.lineTo(260,0),g.lineTo(-260,0),g.closePath();let v=(U,H,S,D)=>{let X=new mr;X.moveTo(U,H),X.lineTo(U,D),X.lineTo(S,D),X.lineTo(S,H),X.closePath(),g.holes.push(X)};v(Ve.x0,Ve.y,Ve.x1,-.02),v(vn.x0,vn.y0,vn.x1,-.02);for(let U of Object.values(cn))v(U.x0,U.y0,U.x1,U.y1);let z=new ca(g,{depth:1.2,bevelEnabled:!1,curveSegments:1});return z.translate(0,0,-1.2),z})(),lt=new wn({roughness:.92});lt.onBeforeCompile=g=>{g.vertexShader=g.vertexShader.replace("#include <common>",`#include <common>
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
          diffuseColor.rgb = pow(c, vec3(2.2)); }`)};{let g=new Ue(qe,lt);o.add(g)}function O(g,v,z,U){let H=g.x1-g.x0,S=g.y1-g.y0,D=(g.x0+g.x1)/2,X=(g.y0+g.y1)/2,Te=[T(v),T(v),T(ue(z).multiplyScalar(.8)),T(z),T(v),T(v)].map(ye=>(ye.side=mn,ye)),Re=new Ue(new Bn(H,S,g.d),Te);if(Re.position.set(D,X,-1.2-g.d/2),o.add(Re),U){let ye=new qi(U,t?26:34,46,1.5);ye.position.set(D-4,g.y1-1.2,-g.d*.45),o.add(ye),g.light=ye}return Re}O({x0:Ve.x0,x1:Ve.x1,y0:Ve.y,y1:0,d:4},ue("#9a6a48"),ue("#6a4a34"),null),O({x0:vn.x0,x1:vn.x1,y0:vn.y0,y1:0,d:7},ue("#5a4256"),ue("#3a2a3a"),null),O(cn.barracks,ue("#a8775a"),ue("#6f4b38"),"#ffb46a"),O(cn.war,ue("#6e6888"),ue("#4a4660"),"#ffd39a"),O(cn.fallen,ue("#5a4a6c"),ue("#3c3048"),"#ff9ad0"),O(cn.hq,ue("#85819e"),ue("#55516e"),"#c9d6ff");let ee=[],te=[],V=[],K=[],_e=[];for(let g=Ve.y+.25;g<0;g+=.5)ee.push({x:(Ve.x0+Ve.x1)/2,y:g,z:Ve.z+.1,w:Ve.x1-Ve.x0,h:.44,d:.12,c:ue(i()<.5?"#a5734d":"#93653f")});for(let g=Ve.x0+.8;g<Ve.x1;g+=3.2)K.push({x:g,y:Ve.y/2+.25,z:Ve.z+.25,w:.32,h:-Ve.y+.9,d:.3,c:ue("#6e4a2e")});for(let g=Ve.x0+.3;g<Ve.x1;g+=.5)te.push({x:g,y:Ve.y+.06,z:-2.3,w:.32,h:.1,d:3.4,c:ue(i()<.5?"#7c5638":"#6c4a30")});let de=["#d9b27c","#cfa56f","#e2bd88","#c79c66"].map(ue);for(let g=0;g<3;g++)for(let v=Ve.x0-2+g%2*.55;v<Ve.x1+2;v+=1.1)V.push({x:v,y:.2+g*.38,z:Ve.z-.55-(g===2?.1:0),w:1.08,h:.4,d:.62,ry:(i()-.5)*.1,c:de[Math.floor(i()*4)]});for(let g=Ve.x0+5;g<Ve.x1;g+=9)_e.push({x:g,y:-1.1,z:Ve.z+.45,w:.26,h:.26,d:.26,c:si("#ffc46a").multiplyScalar(3)});E(R,T(ue("#ffffff")),ee),E(R,T(ue("#ffffff")),K),E(R,T(ue("#ffffff")),te),E($,T(ue("#ffffff"),{roughness:.85}),V),E(R,new mt({toneMapped:!1}),_e);for(let g=0;g<(t?1:2);g++){let v=new qi("#ffb35a",16,26,1.6);v.position.set(Ve.x0+12+g*24,-1.4,-2),o.add(v)}function b(g,v,z,U,H=.42,S=.5,D="#3a3048"){let X=[];for(let Re=0;Re<=1;Re+=.0015){let ye=g+(v-g)*Re,Qe=Re*(v-g)/S*Kn;X.push(new L(ye+Math.sin(Qe)*.14,z+Math.cos(Qe)*H,U+Math.sin(Qe)*H))}let Te=new Ue(new ha(new kr(X),Math.floor((v-g)*26),.025,5),new wn({color:D,metalness:.7,roughness:.4}));return o.add(Te),Te}b(Ve.x0-2,Ve.x1+2,1.75,Ve.z-.7);let M=(g,v,z,U)=>{let H=[];for(let S of[-.35,.35])H.push({x:g+S,y:(v+z)/2,z:U,w:.1,h:z-v,d:.1,c:ue("#7a5434")});for(let S=v+.3;S<z;S+=.45)H.push({x:g,y:S,z:U,w:.7,h:.07,d:.08,c:ue("#8a6440")});E(R,T(ue("#ffffff")),H)};M(Ve.x1-1.2,Ve.y,1.4,Ve.z+.35),M(Ve.x0+14,Ve.y,.8,Ve.z+.35),E($,T(ue("#ffffff")),[{x:Ve.x0+2.2,y:Ve.y+.5,z:-3.8,w:1.4,h:1,d:1,c:ue("#6e7a3a")},{x:Ve.x0+2.4,y:Ve.y+1.35,z:-3.9,w:1,h:.7,d:.8,c:ue("#5e6a30")},{x:6,y:Ve.y+.45,z:-4,w:1.6,h:.9,d:.9,c:ue("#7a5a3a")}]);{let g=[],v=[],z=[];for(let S=0;S<16;S++){let D=yn.x0+3+i()*(yn.x1-yn.x0-4),X=-2-i()*22,Te=.9+i()*1.6;g.push({x:D,y:.04,z:X,w:Te*2,h:.08,d:Te*2,c:ue("#3a2a2e")});for(let Re=0;Re<7;Re++){let ye=Re/7*Kn;g.push({x:D+Math.cos(ye)*Te,y:.1,z:X+Math.sin(ye)*Te,w:.7,h:.22+i()*.15,d:.6,ry:ye,c:ue("#8a6448")})}}for(let S=0;S<7;S++){let D=yn.x0+6+i()*30,X=-3-i()*18,Te=i()*Kn;for(let[Re,ye,Qe]of[[.62,0,0],[0,.62,1.05],[-.62,0,2.1]])v.push({x:D,y:.7,z:X,w:.2,h:1.9,d:.2,rx:Re,rz:ye,ry:Te+Qe,c:ue("#5a5670")})}E(new $n(.5,.5,1,18),T(ue("#ffffff")),g.filter(S=>S.h<.1)),E(R,T(ue("#ffffff")),g.filter(S=>S.h>=.1)),E(R,T(ue("#ffffff"),{metalness:.4,roughness:.5}),v);for(let S=0;S<3;S++)b(yn.x0+6+S*11,yn.x0+12+S*11,.5,-1.2-S*5,.45,.45);for(let S=0;S<9;S++)z.push({x:yn.x0+4+S*4.5,y:.65,z:-11,w:.14,h:1.3,d:.14,c:ue("#4a4058")});E(R,T(ue("#ffffff")),z);let U=[{x:31,y:.45,z:-6,w:2,h:.8,d:4,ry:.5,rz:.08,c:ue("#2c2430")},{x:31.2,y:1.2,z:-6.1,w:1.6,h:.6,d:2,ry:.5,c:ue("#3a2c34")}];E(R,T(ue("#ffffff")),U);let H=[{x:yn.bunker,y:1.8,z:-6,w:9,h:3.6,d:9,c:ue("#8a86a0")},{x:yn.bunker,y:3.9,z:-6,w:10.4,h:.7,d:10.4,c:ue("#7a7690")},{x:yn.bunker-4.55,y:1.6,z:-6,w:.3,h:.7,d:5,c:ue("#1a1626")}];for(let S=0;S<10;S++)H.push({x:yn.bunker-5.6,y:.2+S%2*.4,z:-9.5+Math.floor(S/2)*1.75,w:.62,h:.4,d:1.1,c:de[S%4]});E($,T(ue("#ffffff")),H),E(R,N(si("#3dff8f").multiplyScalar(2.2)),[{x:yn.bunker-4.7,y:2.45,z:-6,w:.12,h:.14,d:7.6},{x:yn.bunker,y:4.3,z:-1.2,w:9.6,h:.14,d:.12}])}function G(g,v,z,U,H="rgba(14,8,30,.9)",S=900){let D=document.createElement("canvas");D.width=512,D.height=Math.round(512*z/v);let X=D.getContext("2d");X.fillStyle=H,X.beginPath(),X.roundRect(6,6,D.width-12,D.height-12,22),X.fill(),X.strokeStyle=U,X.lineWidth=6,X.stroke(),X.fillStyle=U,X.font=`${S} ${Math.round(D.height*.46)}px Inter, Arial, sans-serif`,X.textAlign="center",X.textBaseline="middle",X.fillText(g,D.width/2,D.height*.54);let Te=new dn(D);Te.colorSpace=Ct;let Re=new Ue(new sn(v,z),new mt({map:Te,transparent:!0,toneMapped:!1}));return o.add(Re),Re}{let g=G("PUMPSWAP",7,1.6,"#3dff8f","rgba(4,22,12,.92)");g.position.set(yn.bunker,5.6,-1.2),g.material.color.setScalar(1.6)}{let g=(vn.x0+vn.x1)/2,v=[];for(let U of[-.8,.8])v.push({x:g+U-1.6,y:vn.y0/2,z:-6.6,w:.12,h:-vn.y0,d:.12,c:ue("#6a5060")});for(let U=vn.y0+.4;U<0;U+=.5)v.push({x:g-1.6,y:U,z:-6.6,w:1.7,h:.07,d:.08,c:ue("#7a6070")});for(let U=0;U<3;U++)v.push({x:g+1.2+U*.35,y:vn.y0/2,z:-7.4,w:.14,h:-vn.y0,d:.14,c:ue(["#3a2a3a","#ff4fa3","#22e4ff"][U])});E(R,T(ue("#ffffff"),{roughness:.6}),v);let z=[];for(let U=-6;U>vn.y0;U-=9)z.push({x:vn.x1-.6,y:U,z:-1.8,w:.3,h:.3,d:.3,c:si("#ffd08a").multiplyScalar(3)});E(R,new mt({toneMapped:!1}),z)}let re=new Cn;{let g=new Ue(R,T(ue("#5a5670"),{metalness:.5,roughness:.45}));g.scale.set(5.6,.3,5.2),re.add(g);for(let[U,H]of[[-2.6,-2.4],[2.6,-2.4]]){let S=new Ue(R,T(ue("#ffcf4a"),{metalness:.3}));S.scale.set(.14,3.4,.14),S.position.set(U,1.7,H),re.add(S)}let v=new Ue(R,T(ue("#ffcf4a")));v.scale.set(5.4,.14,.14),v.position.set(0,3.4,-2.4),re.add(v);let z=new Ue(new $n(.05,.05,1,6),T(ue("#2a2030")));z.position.set(0,3.4,-2.4),re.add(z),re.userData.cable=z,re.position.set((vn.x0+vn.x1)/2,Ve.y,-3.4),o.add(re)}{let g=cn.barracks,v=[];for(let U=0;U<7;U++){let H=g.x0+6+U*8.6;for(let S of[g.y0+1.1,g.y0+3.2])v.push({x:H,y:S,z:-1.2-g.d+1.6,w:5.2,h:.5,d:2.2,c:ue("#5e6a3a")}),v.push({x:H,y:S+.4,z:-1.2-g.d+1.6,w:5,h:.3,d:2,c:ue("#e8e2d0")});for(let S of[-2.6,2.6])v.push({x:H+S,y:g.y0+2.2,z:-1.2-g.d+1.6,w:.18,h:4.4,d:.18,c:ue("#4a4038")})}for(let U=0;U<4;U++)v.push({x:g.x1-6-U*1.3,y:g.y0+1.6,z:-1.2-g.d+.7,w:1.1,h:3.2,d:.9,c:ue(["#6e7a8a","#5e6a7a"][U%2])});E($,T(ue("#ffffff")),v),G("RECRUITS",6.4,1.3,"#ffcf4a","rgba(30,18,8,.92)").position.set(g.x0+20,g.y1-1.3,-1.2-g.d+.05)}let pe=[],ge=null,ze=null;{let g=cn.war,v=-1.2-g.d+.06,z=[{x:-5,y:g.y0+1.1,z:-6,w:16,h:.3,d:5.4,c:ue("#3a3450")},{x:-11.5,y:g.y0+.5,z:-6,w:.4,h:1,d:.4,c:ue("#2a2438")},{x:1.5,y:g.y0+.5,z:-6,w:.4,h:1,d:.4,c:ue("#2a2438")}];E(R,T(ue("#ffffff")),z);let U=document.createElement("canvas");U.width=1024,U.height=352;let H=U.getContext("2d");H.fillStyle="#0d1a3a",H.fillRect(0,0,1024,352),H.strokeStyle="rgba(80,220,255,.35)",H.lineWidth=2;for(let X=0;X<1024;X+=48)H.beginPath(),H.moveTo(X,0),H.lineTo(X,352),H.stroke();for(let X=0;X<352;X+=48)H.beginPath(),H.moveTo(0,X),H.lineTo(1024,X),H.stroke();H.strokeStyle="#ff4fa3",H.lineWidth=6,H.beginPath(),H.moveTo(80,230),H.bezierCurveTo(300,170,520,270,760,190),H.lineTo(960,210),H.stroke();let S=new dn(U);S.colorSpace=Ct,ge=H,ze=S;let D=new Ue(new sn(15.4,5.2),new mt({map:S,toneMapped:!1}));D.rotation.x=-Math.PI/2,D.position.set(-5,g.y0+1.27,-6),o.add(D);for(let X=0;X<3;X++){let Te=document.createElement("canvas");Te.width=640,Te.height=400;let Re=new dn(Te);Re.colorSpace=Ct;let ye=new Ue(new sn(9.6,6),new mt({map:Re,toneMapped:!1}));ye.position.set(-24+X*19,g.y0+5.6,v),o.add(ye);let Qe=new Ue(R,T(ue("#1a1626")));Qe.scale.set(10.2,6.6,.2),Qe.position.set(ye.position.x,ye.position.y,v-.12),o.add(Qe),pe.push({c:Te,g:Te.getContext("2d"),t:Re,m:ye})}}let Se=120,De=new Gt(new Qr(.95,.55,.06,2,.025),new qr({color:14212330,metalness:.9,roughness:.28,clearcoat:.6,envMap:c,envMapIntensity:.8}),Se),$e=[],ht=[];{let g=cn.fallen,v=new vt,z=new fn,U=new ci;for(let S=0;S<Se;S++){let D=S%24,X=Math.floor(S/24),Te=g.x0+4+D*2.7+X%2*1.1,Re=g.y1-1.7-X*1.3,ye=-1.2-g.d+.16;$e.push({x:Te,y:Re,z:ye,a:(i()-.5)*.3}),v.compose(new L(Te,Re,ye),z.setFromEuler(U.set(0,0,$e[S].a)),new L(1,1,1)),De.setMatrixAt(S,v),De.setColorAt(S,ue("#ffffff"))}De.frustumCulled=!1,o.add(De),E(R,T(ue("#ffffff")),[{x:(g.x0+g.x1)/2,y:g.y0+1.6,z:-1.2-g.d+.5,w:g.x1-g.x0-4,h:.25,d:.8,c:ue("#3a2e44")}]);for(let S=0;S<22;S++){let D=new Ue(new $n(.09,.09,.45,8),T(ue("#f4ead8"))),X=g.x0+3+S*3.1;D.position.set(X,g.y0+1.95,-1.2-g.d+.5),o.add(D);let Te=new Ue(new ui(.08,8,6),N(si("#ffb84a").multiplyScalar(3)));Te.position.set(X,g.y0+2.27,-1.2-g.d+.5),o.add(Te),ht.push({f:Te,ph:i()*9})}G("THE FALLEN",7,1.3,"#ff9ad0","rgba(26,10,30,.92)").position.set((g.x0+g.x1)/2-20,g.y0+3.6,-1.2-g.d+.06)}{let g=cn.hq,v=document.createElement("canvas");v.width=v.height=512;let z=v.getContext("2d"),U=256,H=250,S=190,D=z.createLinearGradient(0,H-S,0,H+S);D.addColorStop(0,"#fff47c"),D.addColorStop(.5,"#ffa23f"),D.addColorStop(1,"#ff3d8f"),z.fillStyle=D,z.beginPath(),z.arc(U,H,S,0,Kn),z.fill(),z.globalCompositeOperation="destination-out";for(let Qe=0;Qe<7;Qe++)z.fillRect(U-S,H+S*(.04+Qe*.14),S*2,S*(.022+Qe*.02));z.globalCompositeOperation="source-over",z.save(),z.translate(U-4,H-22),z.scale(.36,.36),z.transform(1,0,-.2,1,0,0);let X=()=>{z.beginPath(),z.moveTo(-560,-330),z.lineTo(-250,-330),z.lineTo(0,120),z.lineTo(250,-330),z.lineTo(560,-330),z.lineTo(90,430),z.lineTo(-90,430),z.closePath()};z.save(),z.translate(38,38),X(),z.fillStyle="#2a0b4d",z.fill(),z.restore(),X(),z.lineWidth=40,z.strokeStyle="#2a0b4d",z.stroke(),D=z.createLinearGradient(0,-330,0,430),[[0,"#ffffff"],[.42,"#cdf3ff"],[.5,"#3a2b92"],[.58,"#ff96de"],[1,"#ffffff"]].forEach(([Qe,tn])=>D.addColorStop(Qe,tn)),X(),z.fillStyle=D,z.fill(),z.restore();let Te=new dn(v);Te.colorSpace=Ct;let Re=new Ue(new sn(9,9),new mt({map:Te,transparent:!0,toneMapped:!1}));Re.material.color.setScalar(1.35),Re.position.set(-5,g.y0+7.4,-1.2-g.d+.06),o.add(Re);let ye=[{x:-5,y:g.y0+1,z:-4.5,w:30,h:.26,d:2.4,c:ue("#3a3654")}];for(let Qe=0;Qe<6;Qe++)ye.push({x:-17+Qe*4.8,y:g.y0+1.9,z:-5.2,w:2.6,h:1.6,d:.14,c:ue("#16142a")});E(R,T(ue("#ffffff")),ye),E(R,N(si("#33e6ff").multiplyScalar(1.6)),Array.from({length:6},(Qe,tn)=>({x:-17+tn*4.8,y:g.y0+1.9,z:-5.1,w:2.35,h:1.35,d:.02}))),E(R,N(si("#ff3aa8").multiplyScalar(2)),[{x:(g.x0+g.x1)/2,y:g.y1-.4,z:-1.2-g.d+.1,w:g.x1-g.x0-1,h:.12,d:.1}])}{let g=[],v=[],z=[];for(let ye of Object.values(cn))for(let Qe=ye.x0+6;Qe<ye.x1-2;Qe+=11)g.push({x:Qe,y:ye.y1-1.1,z:-1.2-ye.d*.45,w:.34,h:.34,d:.34,c:si("#ffd9a0").multiplyScalar(3.2)}),v.push({x:Qe,y:ye.y1-.55,z:-1.2-ye.d*.45,w:.05,h:1.1,d:.05,c:ue("#2a2030")});E(new ui(.5,10,8),new mt({toneMapped:!1}),g),E(R,T(ue("#ffffff")),v);let U=cn.barracks,H=cn.war,S=cn.hq,D=cn.fallen,X=["#ff7ac0","#33d9ff","#ffd23f","#9b7bff"].map(ue);for(let ye=0;ye<7;ye++)for(let Qe of[U.y0+1.5,U.y0+3.6])z.push({x:U.x0+6+ye*8.6+.9,y:Qe+.08,z:-1.2-U.d+1.6,w:3,h:.22,d:2.05,c:X[(ye+(Qe>U.y0+2?1:0))%4]});for(let ye=0;ye<5;ye++)z.push({x:U.x0+4+ye*1.4,y:U.y0+.5+ye%2*1,z:-3.2,w:1.2,h:1,d:1.1,c:ue(ye%2?"#6e7a3a":"#7a5a3a")});z.push({x:U.x1-12,y:U.y0+1.3,z:-4,w:3.4,h:.2,d:1.8,c:ue("#7a5434")},{x:U.x1-12,y:U.y0+1.75,z:-4,w:1,h:.7,d:.6,c:ue("#3a4a2a")});for(let ye=0;ye<6;ye++)z.push({x:H.x1-3-ye*1.5,y:H.y0+1.4,z:-1.2-H.d+.8,w:1.3,h:2.8,d:1.1,c:ue(ye%2?"#5e6a7a":"#6e7a8a")});for(let ye=0;ye<6;ye++)z.push({x:-11+ye*2.6,y:H.y0+.6,z:ye%2?-2.9:-9.1,w:.9,h:1.2,d:.9,c:ue("#2a2438")});for(let ye=0;ye<5;ye++)z.push({x:(D.x0+D.x1)/2,y:D.y1-1.38-ye*1.3,z:-1.2-D.d+.1,w:D.x1-D.x0-4,h:.04,d:.04,c:ue("#8a8aa8")});for(let ye of[-1,1])z.push({x:-5+ye*7.5,y:S.y0+4.6,z:-1.2-S.d+.4,w:.12,h:9,d:.12,c:ue("#c8c0e8")}),z.push({x:-5+ye*7.5+ye*1.1,y:S.y0+8.1,z:-1.2-S.d+.4,w:2.1,h:1.4,d:.05,c:ue(ye<0?"#ff4fa3":"#22e4ff")});E($,T(ue("#ffffff")),z);let Te=new Ue(new Rs(1.4,.32,12,40),T(ue("#2bb38f")));Te.position.set(D.x0+6,D.y0+4,-1.2-D.d+.5),o.add(Te);let Re=new Ue($,T(ue("#ff4fa3")));Re.scale.set(1,.5,.3),Re.position.set(D.x0+6,D.y0+2.7,-1.2-D.d+.7),o.add(Re)}let ve=[],yt=new wn({color:16777215,roughness:1,emissive:new Je("#ffd6e8"),emissiveIntensity:.3,transparent:!0,opacity:.97,fog:!0});{let g=Pc([[0,0,0,9],[8,-1,2,7],[-8,-1.5,1,6.5],[3,3,-2,7],[-4,2.5,-1,6]].map(([v,z,U,H])=>{let S=new ui(H,14,10);return S.translate(v,z,U),S.toNonIndexed()}));for(let v=0;v<(t?7:13);v++){let z=new Ue(g,yt),U=1.3+i()*1.7;z.scale.set(U*(1.3+i()*.7),U*.55,U),z.position.set(-560+i()*1120,92+i()*56,-280-i()*440),o.add(z),ve.push({m:z,sp:1.2+i()*2.4})}}let Ke=new Cn;{let g=new Ue(new ui(1,40,20),T(ue("#f3eefc"),{roughness:.55}));g.scale.set(14,4.6,4.6),Ke.add(g);for(let[U,H,S]of[[3.4,0,0],[-3.4,0,0],[0,3.4,Math.PI/2],[0,-3.4,Math.PI/2]]){let D=new Ue($,B(ue("#ff4fa3")));D.scale.set(3.6,.3,2.8),D.position.set(-12.2,U*.8,H*.8),D.rotation.x=S,Ke.add(D)}let v=new Ue($,T(ue("#2a2440")));v.scale.set(3.8,1.1,1.5),v.position.set(1,-5.1,0),Ke.add(v);let z=new Ue(R,N(si("#33e6ff").multiplyScalar(2)));z.scale.set(26,.12,.12),z.position.set(0,-2.2,4.1),Ke.add(z),Ke.position.set(-20,44,-105),o.add(Ke)}let st=document.createElement("canvas");st.width=1024,st.height=256;let Pe=st.getContext("2d"),ke=new dn(st);ke.colorSpace=Ct;let rt=new Ue(new sn(19,4.75),new mt({map:ke,transparent:!0,toneMapped:!1}));rt.position.set(.5,.6,4.75),Ke.add(rt);let bt=null;function Lt(g){let v=z=>{Pe.clearRect(0,0,1024,256),Pe.fillStyle="rgba(16,8,34,.92)",Pe.beginPath(),Pe.roundRect(8,8,1008,240,60),Pe.fill();let U=g.chg==null?"#ffd23f":g.chg>=0?"#2ee6a6":"#ff4f9e";Pe.strokeStyle=U,Pe.lineWidth=10,Pe.stroke(),Pe.save(),Pe.beginPath(),Pe.arc(130,128,86,0,Kn),Pe.clip(),z?Pe.drawImage(z,44,42,172,172):Wn(Pe,130,128,86,g.symbol,g.mint),Pe.restore(),Pe.fillStyle="#ffd23f",Pe.font="900 40px Inter, Arial",Pe.textAlign="left",Pe.textBaseline="alphabetic",Pe.fillText("HOTTEST ON THE LINE",250,92),Pe.fillStyle="#fff",Pe.font="900 88px Inter, Arial";let H="$"+g.symbol;for(;Pe.measureText(H).width>470&&H.length>3;)H=H.slice(0,-2)+"\u2026";Pe.fillText(H,250,192),Pe.fillStyle=U,Pe.textAlign="right",Pe.font="900 76px Inter, Arial",Pe.fillText(g.chg==null?"NEW":(g.chg>=0?"+":"")+g.chg.toFixed(Math.abs(g.chg)>=100?0:1)+"%",985,192),ke.needsUpdate=!0};v(null),qn(g.iconUrl,v)}let Ie=new ci,we=t?5:10,F=new Gt(R,T(ue("#ffffff")),we*2);F.frustumCulled=!1,o.add(F);let Be=Array.from({length:we},()=>({r:18+i()*34,h:20+i()*16,sp:(.12+i()*.12)*(i()<.5?1:-1),ph:i()*9,cx:-30+i()*60,cz:-26-i()*46})),Le=t?110:240,tt=new Gt(new sn(1,1),new mt({color:ue("#ffdcb0"),transparent:!0,opacity:.5,blending:On,depthWrite:!1,fog:!1}),Le);tt.frustumCulled=!1,o.add(tt);let it=Object.values(cn),Mt=Array.from({length:Le},()=>{let g=it[Math.floor(i()*it.length)];return{x:g.x0+i()*(g.x1-g.x0),y:g.y0+.5+i()*(g.y1-g.y0-1),z:-1.6-i()*(g.d-.6),ph:i()*9,s:.05+i()*.07}}),Tt=t?40:60,kt=new vt().makeScale(0,0,0),Vt=document.createElement("canvas");Vt.width=Vt.height=1024;let xt=Vt.getContext("2d"),qt=new dn(Vt);qt.colorSpace=Ct,qt.generateMipmaps=!1,qt.minFilter=Jn;let Tn=!1,ri=Array.from({length:64},(g,v)=>v),Zi=g=>{let v=0;g=String(g||"");for(let z=0;z<g.length;z++)v=v*31+g.charCodeAt(z)>>>0;return v%360};function Wn(g,v,z,U,H,S){g.fillStyle=`hsl(${Zi(S||H)},70%,58%)`,g.beginPath(),g.arc(v,z,U,0,Kn),g.fill(),g.fillStyle="#fff",g.font=`900 ${Math.round(U*.8)}px Inter, Arial`,g.textAlign="center",g.textBaseline="middle",g.fillText(String(H||"?").slice(0,2).toUpperCase(),v,z+U*.04)}function Xn(g,v,z){let U=g%8*128,H=Math.floor(g/8)*128;xt.clearRect(U,H,128,128),v?(xt.fillStyle="#120a30",xt.fillRect(U,H,128,128),xt.drawImage(v,U+5,H+5,118,118)):(xt.fillStyle="#120a30",xt.fillRect(U,H,128,128),Wn(xt,U+64,H+64,58,z.symbol,z.mint)),Tn=!0}let pi=new Map;function qn(g,v){if(!g)return;let z=pi.get(g);if(!z){z={im:null,cbs:[],tries:0},pi.set(g,z);let U=()=>{let H=new Image;H.crossOrigin="anonymous",H.referrerPolicy="no-referrer",H.onload=()=>{z.im=H,z.cbs.splice(0).forEach(S=>S(H))},H.onerror=()=>{++z.tries<2&&setTimeout(U,4e3)},H.src=g};U()}z.im?v(z.im):z.cbs.push(v)}let Ti=new Bn(1,1,1),Ji=new Li(new Float32Array(Tt*2),2);Ti.setAttribute("aCell",Ji);let us=new wn({map:qt,roughness:.5});us.onBeforeCompile=g=>{g.vertexShader=g.vertexShader.replace("#include <uv_pars_vertex>",`#include <uv_pars_vertex>
attribute vec2 aCell;`).replace("#include <uv_vertex>",`#include <uv_vertex>
vMapUv = (vMapUv + aCell) / 8.0;`)};let Yn=(g,v,z)=>{let U=new Gt(g,v,Tt);U.frustumCulled=!1;for(let H=0;H<Tt;H++)U.setMatrixAt(H,kt),z&&U.setColorAt(H,ue("#ffffff"));return o.add(U),U},A={head:Yn(Ti,us),body:Yn($,B(16777215),1),armL:Yn(R,B(16777215),1),armR:Yn(R,B(16777215),1),legL:Yn(R,T(ue("#1a1638"))),legR:Yn(R,T(ue("#1a1638"))),helm:Yn($,B(ue("#5d6b32"),{roughness:.5})),brim:Yn(R,T(ue("#4a5526"))),gun:Yn(R,T(ue("#15121f"),{metalness:.4}))},q={new:ue("#ffd23f"),migrated:ue("#5fc8ff"),up:ue("#2ee6a6"),dn:ue("#ff4f9e")},Z=Array.from({length:Tt},(g,v)=>({k:v,coin:null,mode:"off",x:0,y:0,z:0,yaw:0,sp:1,ph:i()*9,s:.92,cell:-1,duck:0,t0:0})),ne=new Map;function Q(g,v){g.cell<0&&(g.cell=ri.length?ri.shift():g.k%64),Xn(g.cell,null,v),Ji.setXY(g.k,g.cell%8,7-Math.floor(g.cell/8)),Ji.needsUpdate=!0;let z=g.cell,U=v.mint;qn(v.iconUrl,H=>{g.coin&&g.coin.mint===U&&g.cell===z&&Xn(z,H,v)})}function He(g){g.cell>=0&&(ri.push(g.cell),g.cell=-1),g.coin&&ne.delete(g.coin.mint),g.coin=null,g.mode="off",g.label&&(o.remove(g.label),g.label.material.map.dispose(),g.label.material.dispose(),g.label=null)}let Ze=g=>g.cat==="new"||g.isNew?"new":g.cat==="migrated"?"migrated":g.up?"up":"dn";function Ye(g){let v=g.coin,z=document.createElement("canvas");z.width=360,z.height=104;let U=z.getContext("2d"),H=new dn(z);H.colorSpace=Ct;let S=X=>{U.clearRect(0,0,360,104),U.fillStyle="rgba(14,8,32,.9)",U.beginPath(),U.roundRect(4,4,352,84,26),U.fill();let Te=v.chg==null?"#c8c0e8":v.chg>=0?"#2ee6a6":"#ff4f9e";U.strokeStyle=Te,U.lineWidth=4,U.stroke(),U.save(),U.beginPath(),U.arc(46,46,30,0,Kn),U.clip(),X?U.drawImage(X,16,16,60,60):Wn(U,46,46,30,v.symbol,v.mint),U.restore(),U.fillStyle="#fff",U.font="900 30px Inter, Arial",U.textBaseline="middle",U.textAlign="left";let Re="$"+v.symbol;for(;U.measureText(Re).width>150&&Re.length>3;)Re=Re.slice(0,-2)+"\u2026";U.fillText(Re,88,47),U.fillStyle=Te,U.font="900 28px Inter, Arial",U.textAlign="right",U.fillText(v.chg==null?"NEW":(v.chg>=0?"+":"")+v.chg.toFixed(v.chg>=100||v.chg<=-100?0:1)+"%",342,47),H.needsUpdate=!0};S(null),qn(v.iconUrl,S);let D=new pr(new Ts({map:H,transparent:!0,depthTest:!1,fog:!1}));return D.renderOrder=9,D.scale.set(3.6,1.04,1),D.userData={coin:v},o.add(D),D}let ct=[];function dt(g){let v=g.slice(0,Tt-12),z=new Set(v.map(H=>H.mint));for(let H of Z)H.mode==="trench"&&H.coin&&!z.has(H.coin.mint)&&He(H);for(let H of v){let S=ne.get(H.mint);if(!S){if(S=Z.find(X=>X.mode==="off"),!S)break;S.coin=H,S.mode="trench",ne.set(H.mint,S),Q(S,H),S.x=Ve.x0+1.5+i()*(Ve.x1-Ve.x0-3),S.z=i()<.5?-1.6:-3.3,S.y=Ve.y+.1,S.dir=i()<.5?1:-1,S.t0=je,S.drop=je>2?1:0}let D=S.coin;S.coin=H,D&&D.iconUrl!==H.iconUrl&&Q(S,H),S.sp=.9+Math.min(1.6,(H.heat||0)*2),S.s=.86+(H.heat||0)*.3,S.label&&(S.label.userData.coin.chg!==H.chg||S.label.userData.coin.symbol!==H.symbol)&&(o.remove(S.label),S.label.material.map.dispose(),S.label.material.dispose(),S.label=null)}ct=v,ce.setCoins(g);{let H=v.slice().sort((D,X)=>(X.heat||0)-(D.heat||0)),S=H[1]||H[0];S&&(S.mint!==Fe||xe.userData.chg!==S.chg)&&(Fe=S.mint,xe.userData.chg=S.chg,Ge(S))}{let H=v.slice().sort((S,D)=>(D.heat||0)-(S.heat||0))[0];H&&(H.mint!==bt||rt.userData.chg!==H.chg)&&(bt=H.mint,rt.userData.chg=H.chg,Lt(H))}let U=new Set(v.slice().sort((H,S)=>(S.heat||0)-(H.heat||0)).slice(0,t?6:10).map(H=>H.mint));for(let H of Z){if(H.mode!=="trench")continue;let S=U.has(H.coin.mint);S&&!H.label&&(H.label=Ye(H)),!S&&H.label&&(o.remove(H.label),H.label.material.map.dispose(),H.label.material.dispose(),H.label=null)}}let ot=[],ut=null;function Dt(g){!g||!g.mint||ne.has(g.mint)||(ot.push(g),ot.length>6&&ot.shift())}function rn(g){let v=Z.find(z=>z.mode==="off");return v?(v.coin={...g,cat:"new",isNew:!0},v.mode="recruit",v.stage=0,ne.set(g.mint,v),Q(v,v.coin),v.x=cn.barracks.x1-3,v.y=cn.barracks.y0+.05,v.z=-4.2,v.dir=-1,v.t0=je,v.sp=3.4,v.s=.9,v.label=Ye(v),mi(new L(v.x,v.y+2,v.z),[3.4,3,1.2],26,4,.8),!0):!1}let Nt=[],pn=-99;function Rt(g,v){!g||!g.mint||Z.some(z=>z.mode==="charge"&&z.coin.mint===g.mint)||Nt.some(z=>z.mint===g.mint)||(v?Nt.unshift(g):Nt.push(g),Nt.length>6&&(Nt.length=6))}let pt=[],Ut=new Set;function At(g){let v=ne.get(g.mint);if(v&&v.mode!=="trench")return!1;if(!v){if(v=Z.find(z=>z.mode==="off"),!v)return!1;v.coin=g,ne.set(g.mint,v),Q(v,g),v.x=Ve.x1-3,v.z=-2.4,v.y=Ve.y+.1}return v.coin={...g,cat:"migrated"},v.mode="charge",v.stage=0,v.t0=je,v.sp=3,v.label&&(o.remove(v.label),v.label.material.map.dispose(),v.label.material.dispose()),v.label=Ye(v),!0}let Ot=t?700:1600,Qt=new Gt(R,new mt({toneMapped:!1,transparent:!0,blending:On,depthWrite:!1,fog:!1}),Ot);Qt.frustumCulled=!1,o.add(Qt);let Zn=new Gt(R,new wn({color:6965812,roughness:.9}),260);Zn.frustumCulled=!1,o.add(Zn);let Qn=Array.from({length:Ot},()=>({t:9,life:1,p:new L,v:new L,c:[1,1,1],s:.2,drag:1,g:0})),nt=0,Pn=Array.from({length:260},()=>({t:9,life:1,p:new L,v:new L,s:.2,r:new ci})),Ai=0;function on(g,v,z,U,H,S=1.2,D=0){let X=Qn[nt];nt=(nt+1)%Ot,X.t=0,X.life=U,X.p.copy(g),X.v.copy(v),X.c=z,X.s=H,X.drag=S,X.g=D}let Ri=new L;function mi(g,v,z,U,H,S=0){for(let D=0;D<z;D++)Ri.set(i()-.5,i()-.5,i()-.5).normalize().multiplyScalar(U*(.4+i()*.6)),on(g,Ri,v,H*(.6+i()*.5),.14+i()*.12,1.6,S)}let w=[[.3,3.4,2.1],[3.6,2.6,.5],[3.2,3.2,3.4],[3.6,.9,2.4],[1,1.8,3.8]],W=[];function j(g){W.push({p:new L(g.x,-1,g.z),v:new L((i()-.5)*3,26+i()*10,-2-i()*4),t:0,fuse:1.2+i()*.5,c:w[i()<.55?0:Math.floor(i()*w.length)]})}let he=new qi("#ffb070",0,30,1.6);o.add(he);let Me=9;function We(g){let v=new L(g.x+(i()-.5)*1.6,Ve.y+.4,g.z+(i()-.5)*.8);he.position.copy(v).add(Ri.set(0,1.6,1.5)),Me=0,g.duck=1;for(let z=0;z<40;z++)on(v,Ri.set((i()-.5)*9,4+i()*9,(i()-.5)*5+2),z%3?[3.6,1.4+i(),.3]:[3.4,3.2,3],.5+i()*.5,.16,1.4,9);for(let z=0;z<18;z++){let U=Pn[Ai];Ai=(Ai+1)%Pn.length,U.t=0,U.life=1.2+i()*.6,U.p.copy(v),U.v.set((i()-.5)*6,5+i()*7,(i()-.5)*3+2),U.s=.12+i()*.2,U.r.set(i()*3,i()*3,0)}Xe=Math.min(1,Xe+.5)}let Xe=0,ae=t?3:5,Ne=[],wt=new Gt(new ui(.35,10,8),new mt({toneMapped:!1,fog:!1}),ae);wt.frustumCulled=!1,o.add(wt);let gt=Array.from({length:t?1:2},()=>{let g=new qi("#ff8ad0",0,70,1.4);return o.add(g),g}),hn=[[3.6,3.4,3.2],[3.6,.7,2.2],[.6,2.8,3.6]];for(let g=0;g<ae;g++)Ne.push({t:99,life:1,p:new L,v:new L,c:hn[g%3],wait:1+g*2.2,up:!1});let Yt=t?30:70,ft=new Gt(R,new mt({toneMapped:!1,fog:!1}),Yt);ft.frustumCulled=!1,o.add(ft);let Wt=Array.from({length:Yt},()=>({t:9,life:1,a:new L,d:new L,c:[3,.6,1.8]})),an=0,Xt=1,St=[];for(let g=0;g<2;g++){let v=new Cn,z=T(ue("#1c1840"),{metalness:.3,roughness:.5}),U=new Ue($,z);U.scale.set(2.4,1.7,4.2),v.add(U);let H=new Ue(R,z);H.scale.set(.5,.5,4),H.position.set(0,.3,-3.6),v.add(H);let S=new Ue(R,T(ue("#0c0a1e")));S.scale.set(9.5,.1,.45),S.position.y=1.15,v.add(S);let D=new Ue(new ls(4.5,40,20,1,!0).translate(0,-20,0),new mt({color:ue("#e8f0ff"),transparent:!0,opacity:.08,blending:On,depthWrite:!1,side:zn,fog:!1}));D.position.y=-.8,D.rotation.x=.25,v.add(D);let X=new Ue(R,N(si("#ff3a4a").multiplyScalar(3)));X.scale.setScalar(.3),X.position.set(0,-.9,-1.6),v.add(X),o.add(v),St.push({g:v,rot:S,red:X,r:28+g*12,h:16+g*5,sp:.12+g*.04,ph:g*2.6,sp2:null})}function $t(g){St.forEach((v,z)=>{let U=g[z];if(v.sp2&&(v.g.remove(v.sp2),v.sp2.material.map.dispose(),v.sp2.material.dispose(),v.sp2=null),!U)return;let H=document.createElement("canvas");H.width=420,H.height=150;let S=H.getContext("2d");S.fillStyle="rgba(12,6,34,.92)",S.beginPath(),S.roundRect(6,6,408,128,30),S.fill(),S.strokeStyle="#ffd23f",S.lineWidth=5,S.stroke(),S.fillStyle="#ffd23f",S.font="900 22px Inter, Arial",S.textAlign="left",S.fillText("PUMP.FUN WHALE",30,44),U.sol!=null&&(S.textAlign="right",S.fillStyle="rgba(225,220,255,.9)",S.fillText(Math.round(U.sol).toLocaleString("en-US")+" SOL",390,44)),S.textAlign="left",S.fillStyle="#fff",S.font="900 40px Inter, Arial",S.fillText(String(U.n||"").slice(0,14),30,88);let D=U.last;if(D){S.fillStyle=D.side==="buy"?"#2ee6a6":"#ff4f9e",S.font="800 22px Inter, Arial";let Te=(D.side==="buy"?"Bought $":"Sold $")+(D.sym||"\u2026")+" \xB7 "+(+D.sol||0).toFixed(1)+" SOL";for(;S.measureText(Te).width>360&&Te.length>4;)Te=Te.slice(0,-2)+"\u2026";S.fillText(Te,30,120)}let X=new dn(H);X.colorSpace=Ct,v.sp2=new pr(new Ts({map:X,transparent:!0,depthTest:!1,fog:!1})),v.sp2.renderOrder=8,v.sp2.position.set(0,4.2,0),v.sp2.scale.set(9.4,3.36,1),v.g.add(v.sp2)})}let Ft=null;function jn(){if(!Ft)return;[["ON THE LINE",Ft.hot||[],"#2ee6a6"],["NEW RECRUITS",Ft.fresh||[],"#ffd23f"],["OVER THE TOP",Ft.grads||[],"#5fc8ff"]].forEach(([v,z,U],H)=>{let S=pe[H];if(!S)return;let D=S.g;D.fillStyle="#0a0820",D.fillRect(0,0,640,400),D.fillStyle="rgba(255,255,255,.04)";for(let X=0;X<400;X+=4)D.fillRect(0,X,640,2);D.fillStyle=U,D.font="900 34px Inter, Arial",D.textAlign="left",D.fillText(v,30,54),D.fillRect(30,70,580,3),z.slice(0,6).forEach((X,Te)=>{let Re=118+Te*46;D.fillStyle="#fff",D.font="800 28px Inter, Arial";let ye="$"+(X.symbol||"?");for(;D.measureText(ye).width>300&&ye.length>3;)ye=ye.slice(0,-2)+"\u2026";D.fillText(ye,30,Re),D.textAlign="right";let Qe=H===2?X.mcap?"$"+(X.mcap>=1e6?(X.mcap/1e6).toFixed(2)+"M":Math.round(X.mcap/1e3)+"K"):"\u2014":X.chg==null?"NEW":(X.chg>=0?"+":"")+X.chg.toFixed(1)+"%";D.fillStyle=H===2?"#c9e8ff":X.chg==null?U:X.chg>=0?"#2ee6a6":"#ff4f9e",D.fillText(Qe,610,Re),D.textAlign="left"}),z.length||(D.fillStyle="rgba(255,255,255,.5)",D.font="700 26px Inter, Arial",D.fillText("waiting for the feed\u2026",30,140)),S.t.needsUpdate=!0})}let Is=0;function Aa(g){Is=Math.max(0,Math.min(Se,g|0));for(let v=0;v<Se;v++)De.setColorAt(v,v<Is?si("#ffd8f0").multiplyScalar(1.5):ue("#ffffff"));De.instanceColor.needsUpdate=!0}let gi=[{p:[0,17,52],t:[0,14.5,-120],m:{p:[0,30,88],t:[0,25,-120]}},{p:[-14,11,46],t:[-4,8,-60],m:{p:[-8,13,66],t:[-4,2,-60]}},{p:[-4,2.4,17],t:[-16,-2,-3],m:{p:[-10,-9.5,30],t:[-10,-13.5,-3]}},{p:[25,8,33],t:[36,.4,-6],m:{p:[47,-2.5,46],t:[47,-8.5,-6]}},{p:[6,-13,27],t:[-4,-15,-5],m:{p:[-4,-24.5,40],t:[-4,-26.5,-5]}},{p:[-2,-28.6,27],t:[-12,-30.5,-6],m:{p:[-4,-40,40],t:[-4,-42,-6]}},{p:[6,-46,26],t:[-4,-48,-6],m:{p:[-4,-57.7,40],t:[-4,-59.7,-6]}},{p:[-12,-65,29],t:[-20,-67.5,-6],m:{p:[-4,-77,42],t:[-4,-79,-6]}}],jt=0,ei=0,In={x:0,y:0,tx:0,ty:0};addEventListener("pointermove",g=>{In.tx=g.clientX/innerWidth*2-1,In.ty=g.clientY/innerHeight*2-1},{passive:!0});let zt=new L,Mn=new L,Ra=new L,Ca=new L,Ux=new L,Qu=new L;function Lc(g,v,z){let U=a.aspect<.9,H=Yi(Math.floor(g),0,gi.length-1),S=Math.min(gi.length-1,H+1),D=g-H,X=D*D*D*(D*(D*6-15)+10),Te=U?gi[H].m:gi[H],Re=U?gi[S].m:gi[S];v.set(...Te.p).lerp(Ca.set(...Re.p),X),z.set(...Te.t).lerp(Qu.set(...Re.t),X);let ye=Math.sin(Math.PI*X)*(Math.abs(Te.p[1]-Re.p[1])>8?9:0);v.z+=ye}let Pa=0;function ju(){let g=ge;g.fillStyle="#0b1636",g.fillRect(0,0,1024,352),g.strokeStyle="rgba(80,220,255,.22)",g.lineWidth=2;for(let z=0;z<1024;z+=48)g.beginPath(),g.moveTo(z,0),g.lineTo(z,352),g.stroke();for(let z=0;z<352;z+=48)g.beginPath(),g.moveTo(0,z),g.lineTo(1024,z),g.stroke();g.fillStyle="rgba(255,79,163,.18)",g.fillRect(40,132,700,88),g.strokeStyle="#ff4fa3",g.lineWidth=4,g.strokeRect(40,132,700,88),g.fillStyle="rgba(61,255,143,.25)",g.fillRect(900,110,90,132),g.strokeStyle="#3dff8f",g.strokeRect(900,110,90,132),g.fillStyle="rgba(255,255,255,.75)",g.font="800 22px Inter, Arial",g.fillText("THE LINE",48,120),g.fillText("PUMPSWAP",896,98);let v=je*220%1100;g.fillStyle="rgba(80,220,255,.08)",g.fillRect(v-60,0,60,352);for(let z of Z){if(z.mode==="off"||!z.coin)continue;let U,H;if(z.mode==="charge")U=740+Yi((z.x-Ve.x1)/(yn.bunker-Ve.x1),0,1)*200,H=176+Math.sin(z.k)*30;else if(z.mode==="trench")U=40+(z.x-Ve.x0)/(Ve.x1-Ve.x0)*700,H=z.z>-2.5?196:156;else continue;let S=z.coin.chg==null?"#ffd23f":z.coin.chg>=0?"#2ee6a6":"#ff4f9e",D=(Math.sin(je*6+z.k)+1)/2;g.fillStyle=S,g.beginPath(),g.arc(U,H,z.mode==="charge"?10:6,0,Kn),g.fill(),(z.label||z.mode==="charge")&&(g.strokeStyle=S,g.globalAlpha=1-D,g.lineWidth=3,g.beginPath(),g.arc(U,H,10+D*16,0,Kn),g.stroke(),g.globalAlpha=1)}ze.needsUpdate=!0}let Ln=Ku({scene:o,std:T,candy:B,BOX:R,RBOX:$,col:ue,clamp:Yi,city:ce,spark:on,burst:mi,TAU:Kn,night:()=>f.uNight.value,onCollect:(g,v)=>e.onCollect&&e.onCollect(g,v)}),xi=0,Ia=.78,Uc=null,La=new L,Ua=new L,fs=1,jr=!1,Da=new L(0,54,-520),Na=new L(0,105,-130),ef=new L(0,50,-1e3),en=new vt,za=new vt,eo=new vt,to=new vt,Dc=new vt,tf=new L,no=new L,nf=new fn,sf=new ci;function $i(g,v,z,U,H,S,D,X,Te,Re){eo.makeTranslation(z,U,H),to.makeRotationX(S),Dc.makeTranslation(0,D,0),no.set(X,Te,Re),en.copy(za).multiply(eo).multiply(to).multiply(Dc).scale(no),g.setMatrixAt(v,en)}let je=0,Oa=performance.now(),Ls=0,io=.5,Fa=2,Ba=3,Ha=0,Nc=!1,zc=0,Ui=new L,ds=new fn,Us=new L,ka=new Je,rf=new L(0,0,1),so=new L;function of(g){for(let v of Z){let z=v.k;if(v.mode==="off"||!v.coin){for(let ln of Object.values(A))ln.setMatrixAt(z,kt);continue}let U=!0,H=0,S=1,D=0;if(v.mode==="trench"){if(v.x+=v.dir*v.sp*g,v.x<Ve.x0+1&&(v.x=Ve.x0+1,v.dir=1),v.x>Ve.x1-2.2&&(v.x=Ve.x1-2.2,v.dir=-1),i()<g*.05&&(v.dir*=-1),H=v.dir>0?Math.PI/2:-Math.PI/2,v.y=Ve.y+.1,v.drop){let ln=(je-v.t0)/.9;ln<1?v.y+=12*(1-ln)*(1-ln):(v.drop=0,mi(Ui.set(v.x,v.y+1,v.z),[3.4,2.6,.5],18,3,.6))}}else if(v.mode==="recruit"){let ln=cn.barracks,_i=(vn.x0+vn.x1)/2;if(v.stage===0)v.x-=v.sp*g,H=-Math.PI/2,v.x<ln.x0+1.5&&(ut?(v.x=ln.x0+1.5,U=!1,H=Math.PI/2*0):(ut=v,v.stage=1));else if(v.stage===1)v.x-=v.sp*g,H=-Math.PI/2,v.x<=_i&&(v.x=_i,v.stage=2,v.lt=0);else if(v.stage===2){v.lt+=g,U=!1;let ro=di(0,1,v.lt/3.2);v.y=_n(ln.y0+.05,Ve.y+.1,ro),re.position.y=v.y-.2,v.lt>3.4&&(v.stage=3)}else v.stage===3&&(v.x+=v.sp*.7*g,H=Math.PI/2,v.x>Ve.x0+2&&(v.mode="trench",v.dir=1,v.sp=1.2,v.z=-2.4,ut=null,v.label&&(o.remove(v.label),v.label.material.map.dispose(),v.label.material.dispose(),v.label=null)));v.stage<2&&(v.y=ln.y0+.05)}else if(v.mode==="charge"){let ln=je-v.t0;if(v.stage===0)v.x+=(Ve.x1-1.6-v.x)*Math.min(1,g*3),v.z+=(Ve.z+1.1-v.z)*Math.min(1,g*3),H=Math.PI,ln>.6&&(v.stage=1,v.t1=je);else if(v.stage===1){let _i=Math.min(1,(je-v.t1)/1.1);if(v.y=_n(Ve.y+.1,.1,_i),v.z=_n(Ve.z+1.1,Ve.z+.2,_i),H=Math.PI,D=1,U=!0,_i>=1){v.stage=2,v.z=-3;for(let ro=0;ro<26;ro++)on(Ui.set(v.x,1.4,v.z),so.set((i()-.5)*5,4+i()*5,(i()-.5)*4),[3.6,.7,2.2],.9,.2,1.4,4)}}else if(v.stage===2)v.x+=6.2*g,v.y=.1,H=Math.PI/2,S=2,i()<g*3&&Oc(Ui.set(yn.bunker-4.5,2,-6),so.set(v.x+(i()-.5)*4,1+i()*2,v.z+(i()-.5)*4),[.4,3.2,1.4]),v.x>yn.bunker-6&&(v.stage=3,v.t2=je,mi(Ui.set(v.x,2,v.z),[.5,3.4,1.6],70,9,1.3,2),mi(Ui.set(v.x,2,v.z),[3.4,3.4,3.6],30,6,1));else{let _i=(je-v.t2)/.5;if(_i>1){He(v);continue}v.s=.9*(1-_i)}}let X=v.s*(v.mode==="charge"&&v.stage===3,1),Te=5.6*v.sp*.55*S+3,Re=U?Math.sin(je*Te+v.ph)*.62:0,ye=U?Math.abs(Math.cos(je*Te+v.ph))*.1:Math.sin(je*2.2+v.ph)*.02;v.duck=Math.max(0,v.duck-g*1.6);let Qe=1-v.duck*.35;za.compose(tf.set(v.x,v.y+ye,v.z),nf.setFromEuler(sf.set(0,H,0)),no.set(X,X*Qe,X)),$i(A.legL,z,-.32,1.1,0,D?Math.sin(je*9)*.8:Re,-.55,.42,1.1,.46),$i(A.legR,z,.32,1.1,0,D?-Math.sin(je*9)*.8:-Re,-.55,.42,1.1,.46),$i(A.body,z,0,1.66,0,0,0,1.2,1.12,.72),$i(A.armL,z,-.79,2.12,0,D?-2.6+Math.sin(je*9)*.4:-1.2+Re*.12,-.5,.34,1,.38),$i(A.armR,z,.79,2.12,0,D?-2.6-Math.sin(je*9)*.4:S>1?-2.4:-1.02+Re*.1,-.5,.34,1,.38);let tn=Math.sin(je*1.7+v.ph)*.06;$i(A.head,z,0,2.84,0,tn,0,1.28,1.28,1.28),$i(A.helm,z,0,2.84,0,tn,.8,1.46,.44,1.46),$i(A.brim,z,0,2.84,0,tn,.6,1.68,.1,1.68),eo.makeTranslation(.08,1.86,.7),to.makeRotationX(S>1?-.5:U?-.08+Re*.04:-.32),en.copy(za).multiply(eo).multiply(to).scale(no.set(.17,.22,1.75)),A.gun.setMatrixAt(z,en);let An=q[Ze(v.coin)];A.body.setColorAt(z,An),A.armL.setColorAt(z,An),A.armR.setColorAt(z,An),v.label&&v.label.position.set(v.x,v.y+4.9*X+(v.mode==="trench"?0:.3),v.z)}for(let v of Object.values(A))v.instanceMatrix.needsUpdate=!0,v.instanceColor&&(v.instanceColor.needsUpdate=!0);Tn&&zc%12===0&&(Tn=!1,qt.needsUpdate=!0)}function Oc(g,v,z){let U=Wt[an];an=(an+1)%Yt,U.a.copy(g),U.d.copy(v).sub(g);let H=U.d.length();U.d.normalize(),U.t=0,U.life=H/90,U.c=z}function Va(g,v=!0){if(je+=g,zc++,f.uTime.value=je,ei+=(jt-ei)*(1-Math.exp(-g*(n?9:3.4))),Lc(ei,zt,Mn),In.x+=(In.tx-In.x)*Math.min(1,g*2.5),In.y+=(In.ty-In.y)*Math.min(1,g*2.5),zt.x+=In.x*1.2,zt.y-=In.y*.6,Xe=Math.max(0,Xe-g*2.2),fs<1){jr&&(fs=Math.min(1,fs+g/4.6));let S=Yi((fs-.1)/.9,0,1),D=S<.5?4*S**3:1-Math.pow(-2*S+2,3)/2,X=(1-D)**2,Te=2*(1-D)*D,Re=D*D;zt.set(X*Da.x+Te*Na.x+Re*zt.x,X*Da.y+Te*Na.y+Re*zt.y,X*Da.z+Te*Na.z+Re*zt.z),Mn.lerpVectors(ef,Mn,D)}{let S=1-di(0,.8,ei);zt.x+=Math.sin(je*.13)*4*S,zt.y+=Math.sin(je*.09)*1.2*S,Mn.x+=Math.sin(je*.13)*1.5*S}if(Xe>0&&(zt.x+=(i()-.5)*Xe*.35,zt.y+=(i()-.5)*Xe*.35),xi+=((Ln.S.on?1:0)-xi)*(1-Math.exp(-g*2.2)),xi<.002&&(xi=0),Ln.S.on?(Ln.update(g,je,La,Ua,a),zt.copy(La),Mn.copy(Ua),Ln.radar(Uc,g)):xi>0&&(zt.lerp(La,xi),Mn.lerp(Ua,xi)),!Ln.S.on){let S=a.aspect<.9?52:42;Math.abs(a.fov-S)>.01&&(a.fov+=(S-a.fov)*Math.min(1,g*3),a.updateProjectionMatrix())}a.position.copy(zt),a.lookAt(Mn),Ia+=(Ln.S.tod-Ia)*(1-Math.exp(-g*1.6));let z=_n(di(.05,1.25,ei),Ia,xi),U=di(.45,.95,z);f.uT.value=z,f.uNight.value=U,ce.update(g,je,U,a.position,Ln.S.on?Ln.S:null,xi),x.position.set(a.position.x*.2,_n(46,-80,di(.06,.9,z)),-1e3),f.uSunX.value=x.position.x,x.lookAt(a.position),m.position.copy(x.position),m.material.opacity=(1-U)*.42,d.intensity=_n(.9,.42,U),d.color.setRGB(_n(.75,.32,U),_n(.94,.26,U),_n(1,.62,U)),d.groundColor.setRGB(_n(1,.2,U),_n(.72,.08,U),_n(.85,.24,U)),C.intensity=_n(1.5,.3,di(.2,.9,z)),C.color.setRGB(1,_n(.94,.58,di(0,.6,z))*(1-U*.3)+U*.4,_n(.86,.45,di(0,.6,z))+U*.5),o.fog.color.setRGB(_n(1,.07,U),_n(.78,.03,U)*(1-di(.3,.6,z)*.2),_n(.86,.16,U)),o.fog.near=90,o.fog.far=_n(900,520,U),ie.color.setScalar(.15+U*2.2);{let S=di(-3,-16,a.position.y);_.intensity=S*1.1,_.position.set(a.position.x+14,a.position.y+8,40),_.target.position.set(a.position.x,a.position.y-2,0),d.intensity+=S*.3}for(let S of et)S.cone.material.opacity=U*.07,S.cone.rotation.z=Math.sin(je*S.sp+S.ph)*.5,S.cone.rotation.x=-.15+Math.cos(je*S.sp*.8+S.ph)*.25;for(let S of ve)S.m.position.x+=S.sp*g,S.m.position.x>600&&(S.m.position.x=-600);yt.emissiveIntensity=.3*(1-U),yt.opacity=.97-U*.45;{let S=-300+je*21%600,D=31+Math.sin(je*.5)*.6;fe.position.set(S,D,-13),fe.rotation.z=Math.sin(je*.7)*.05,fe.userData.prop.rotation.z=je*40;let X=xe.geometry.attributes.position;for(let Te=0;Te<X.count;Te++){let Re=(X.getX(Te)+9.5)/19;X.setZ(Te,Math.sin(je*6-Re*7)*.35*Re)}X.needsUpdate=!0,xe.position.set(S-22,D-.4,-13),Ce.position.set(S-8.3,D-.2,-13),Ce.scale.set(7.6,.05,.05),xe.visible=Ce.visible=!!Fe}if(Ke.position.set(-18+Math.sin(je*.035)*58,47+Math.sin(je*.3)*.8,-105),Ke.rotation.y=Math.cos(je*.035)>0?0:Math.PI,Ke.rotation.z=Math.sin(je*.4)*.02,rt.rotation.y=Ke.rotation.y?Math.PI:0,rt.position.z=Ke.rotation.y?-4.75:4.75,Be.forEach((S,D)=>{let X=je*S.sp+S.ph,Te=S.cx+Math.cos(X)*S.r,Re=S.cz+Math.sin(X)*S.r*.5,ye=S.h+Math.sin(je*.5+S.ph)*2,Qe=Math.sin(je*8+S.ph)*.55,tn=Math.atan2(-Math.sin(X)*S.sp,Math.cos(X)*S.sp*.5),An=U<.5?1:0;for(let ln of[-1,1])ds.setFromEuler(Ie.set(0,tn,ln*(.25+Qe))),en.compose(Ui.set(Te+Math.cos(tn)*ln*.55*An,ye,Re-Math.sin(tn)*ln*.55*An),ds,Us.set(1.2*An,.06*An,.38*An)),F.setMatrixAt(D*2+(ln>0?1:0),en)}),F.instanceMatrix.needsUpdate=!0,a.position.y<-2){let S=a.quaternion;Mt.forEach((D,X)=>{en.compose(Ui.set(D.x+Math.sin(je*.3+D.ph)*.6,D.y+Math.sin(je*.21+D.ph*2)*.4,D.z),S,Us.setScalar(D.s*(.7+.3*Math.sin(je*2+D.ph)))),tt.setMatrixAt(X,en)}),tt.instanceMatrix.needsUpdate=!0,tt.visible=!0}else tt.visible=!1;if(Pa-=g,Pa<=0&&ge&&Math.abs(ei-5)<1.2&&(Pa=.35,ju()),of(g),ot.length&&!Z.some(S=>S.mode==="recruit"&&S.stage<2&&S.x>cn.barracks.x1-8)){let S=ot.shift();rn(S)}if(ut||(re.position.y+=(Ve.y-.1-re.position.y)*Math.min(1,g*.8)),re.userData.cable.scale.y=Math.max(.1,-re.position.y),re.userData.cable.position.y=3.4+-re.position.y/2,(je-pn>7||Math.abs(ei-3)<.5&&je-pn>2.2)&&!Z.some(S=>S.mode==="charge")){let S=Nt.shift();if(!S&&pt.length){let D=pt.filter(X=>!Ut.has(X.mint));D.length?S=D[Math.floor(i()*Math.min(6,D.length))]:Ut.clear()}S&&At(S)&&(Ut.add(S.mint),pn=je)}if(Fa-=g,Fa<=0){let S=Z.filter(X=>X.mode==="trench"&&X.coin.chg!=null&&X.coin.chg>2).sort((X,Te)=>Te.coin.chg-X.coin.chg),D=S[Math.floor(i()*i()*Math.min(S.length,8))];D&&j(D),Fa=(1.2+i()*2.2)*(1.5-io)}if(Ba-=g,Ba<=0){let S=Z.filter(X=>X.mode==="trench"&&X.coin.chg!=null&&X.coin.chg<-8).sort((X,Te)=>X.coin.chg-Te.coin.chg),D=S[Math.floor(i()*Math.min(S.length,6))];D&&We(D),Ba=(2+i()*3)*(.5+io)}Me+=g,he.intensity=Math.max(0,1-Me/.3)*110;for(let S=W.length-1;S>=0;S--){let D=W[S];D.t+=g,D.v.y-=9*g,D.p.addScaledVector(D.v,g),on(D.p,so.set(i()-.5,-2,i()-.5),[3.4,2.2,.8],.35,.12,2),D.t>D.fuse&&(mi(D.p,D.c,t?50:90,13,1.4,3),W.splice(S,1))}for(let S=0;S<Ot;S++){let D=Qn[S];if(D.t>=D.life){D.t<9&&(Qt.setMatrixAt(S,kt),D.t=9);continue}D.t+=g,D.v.multiplyScalar(Math.exp(-D.drag*g)),D.v.y-=D.g*g,D.p.addScaledVector(D.v,g);let X=1-D.t/D.life;en.compose(D.p,ds.identity(),Us.setScalar(D.s*(.4+X*.6))),Qt.setMatrixAt(S,en),Qt.setColorAt(S,ka.setRGB(D.c[0]*X,D.c[1]*X,D.c[2]*X))}Qt.instanceMatrix.needsUpdate=!0,Qt.instanceColor&&(Qt.instanceColor.needsUpdate=!0);for(let S=0;S<Pn.length;S++){let D=Pn[S];if(D.t>=D.life){D.t<9&&(Zn.setMatrixAt(S,kt),D.t=9);continue}D.t+=g,D.v.y-=14*g,D.p.addScaledVector(D.v,g),D.p.y<Ve.y+.05&&(D.p.y=Ve.y+.05,D.v.set(0,0,0)),en.compose(D.p,ds.setFromEuler(D.r),Us.setScalar(D.s)),Zn.setMatrixAt(S,en)}Zn.instanceMatrix.needsUpdate=!0;let H=0;for(Ne.forEach((S,D)=>{if(S.t>=S.life)if(S.wait-=g,U>.5&&S.wait<=0)S.p.set(Ve.x0+i()*(yn.x1-Ve.x0+10),1,-3-i()*20),S.v.set((i()-.5)*3,24+i()*8,(i()-.5)*3),S.t=0,S.up=!0,S.life=11+i()*4,S.c=hn[Math.floor(i()*3)],S.wait=1+i()*3;else{en.makeScale(0,0,0),wt.setMatrixAt(D,en);return}S.t+=g,S.up?(S.v.y-=9*g,S.p.addScaledVector(S.v,g),on(S.p,so.set((i()-.5)*.6,-1.2,(i()-.5)*.6),S.c,.45,.14,2.2),S.v.y<3&&(S.up=!1)):(S.p.y-=1.4*g,S.p.x+=Math.sin(je*.7+D)*.4*g);let X=Math.max(0,1-S.t/S.life),Te=(.78+.22*Math.sin(je*23+D*3))*Math.min(1,X*3);if(en.compose(S.p,ds.identity(),Us.setScalar(1)),wt.setMatrixAt(D,en),wt.setColorAt(D,ka.setRGB(S.c[0]*Te,S.c[1]*Te,S.c[2]*Te)),!S.up&&H<gt.length){let Re=gt[H++];Re.position.copy(S.p),Re.color.setRGB(S.c[0]/3.6,S.c[1]/3.6,S.c[2]/3.6),Re.intensity=160*Te*U}});H<gt.length;H++)gt[H].intensity=0;if(wt.instanceMatrix.needsUpdate=!0,wt.instanceColor&&(wt.instanceColor.needsUpdate=!0),Xt-=g,U>.4&&Xt<=0){let S=3+Math.floor(i()*4),D=new L(-60+i()*120,4+i()*10,-30-i()*60),X=new L(-60+i()*120,8+i()*20,-20-i()*80),Te=[[3.4,.6,2],[3.6,2.2,.5],[.6,2.6,3.6]][Math.floor(i()*3)];for(let Re=0;Re<S;Re++)Oc(D,X,Te),Wt[(an+Yt-1)%Yt].t=-Re*.07;Xt=(.3+i()*.8)*(.6+io)}Wt.forEach((S,D)=>{if(S.t>S.life+.1){en.makeScale(0,0,0),ft.setMatrixAt(D,en);return}if(S.t+=g,S.t<0||S.t>S.life){en.makeScale(0,0,0),ft.setMatrixAt(D,en);return}Ui.copy(S.a).addScaledVector(S.d,S.t*90),ds.setFromUnitVectors(rf,S.d),en.compose(Ui,ds,Us.set(.08,.08,2.4)),ft.setMatrixAt(D,en),ft.setColorAt(D,ka.setRGB(...S.c))}),ft.instanceMatrix.needsUpdate=!0,ft.instanceColor&&(ft.instanceColor.needsUpdate=!0),St.forEach((S,D)=>{let X=je*S.sp+S.ph;if(S.g.position.set(-6+Math.cos(X)*S.r*1.4,S.h+Math.sin(je*.7+D)*1.2,-34+Math.sin(X)*S.r*.55),S.g.rotation.y=-X+(D?Math.PI:0),S.rot.rotation.y=je*22,S.red.visible=Math.sin(je*6+D)>.3,S.sp2){let Te=a.position.distanceTo(S.g.position),Re=Yi(Te/40,.6,1.5);S.sp2.scale.set(9.4*Re,3.36*Re,1),S.sp2.material.opacity=Math.max(di(.55,.95,ei),xi),S.sp2.visible=ei>.55||xi>.05}});for(let S of ht)S.f.scale.setScalar(.8+.3*Math.sin(je*13+S.ph)*Math.sin(je*7.3+S.ph*2));Ha-=g,Ha<=0&&(jn(),Ha=3),cn.fallen.light&&(cn.fallen.light.intensity=(t?26:34)*(1+Math.min(1,Is/30)*.8)*(.92+.08*Math.sin(je*9))),v&&h.render()}function Ga(g){Ls=requestAnimationFrame(Ga);let v=Math.min(.05,(g-Oa)/1e3);Oa=g,Nc||Va(n?v*.6:v)}function Fc(){a.aspect=innerWidth/innerHeight,a.fov=a.aspect<.9?52:42,a.updateProjectionMatrix(),r.setSize(innerWidth,innerHeight,!1),h.setSize(innerWidth,innerHeight),u.setSize(innerWidth,innerHeight)}addEventListener("resize",Fc),Fc(),document.addEventListener("visibilitychange",()=>{document.hidden?(cancelAnimationFrame(Ls),Ls=0):Ls||(Oa=performance.now(),Ls=requestAnimationFrame(Ga))});let Bc=new ma,Hc=new Ee;return s.addEventListener("click",g=>{if(!e.onPick)return;Hc.set(g.clientX/innerWidth*2-1,-g.clientY/innerHeight*2+1),Bc.setFromCamera(Hc,a);let v=Z.filter(U=>U.label).map(U=>U.label),z=Bc.intersectObjects(v,!1);z.length&&e.onPick(z[0].object.userData.coin)}),Lc(0,zt,Mn),a.position.copy(zt),a.lookAt(Mn),Ls=requestAnimationFrame(Ga),{setF(g){jt=Yi(g,0,gi.length-1),fs<1&&g>.05&&(jr=!0)},jump(g){jt=ei=Yi(g,0,gi.length-1)},hold(){jt<.2&&!n&&(fs=0,jr=!1)},intro(){jr=!0},play(g,v){g&&!Ln.S.on?(fs=1,Uc=v||null,Ln.enter(a,Mn)):!g&&Ln.S.on&&Ln.exit()},playing(){return Ln.S.on},playInput(g){Ln.input(g)},playState(){return Ln.state()},playTime(){return Ln.cycleTime()},setCoins:dt,recruit:Dt,graduate:Rt,setGrads(g){pt=(g||[]).filter(v=>v&&v.mint&&v.symbol).slice(0,20)},setWhales:$t,setScreens(g){Ft=g,jn()},setFallen:Aa,setMood(g){io=Yi(g,0,1)},pause(g){Nc=!!g},stations:gi.length,adv(g,v=1/30){let z=Math.max(1,Math.round(g/v));for(let U=0;U<z;U++)Va(v,!1)},shot(g=1/30){Va(g,!0)}}}export{yn as NML,cn as ROOMS,vn as SH,Ve as TR,L_ as createWorld};
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2023 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
