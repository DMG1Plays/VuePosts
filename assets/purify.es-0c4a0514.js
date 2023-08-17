/*! @license DOMPurify 3.0.5 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.0.5/LICENSE */const{entries:at,setPrototypeOf:Je,isFrozen:Mt,getPrototypeOf:wt,getOwnPropertyDescriptor:xt}=Object;let{freeze:h,seal:D,create:Pt}=Object,{apply:Ne,construct:Oe}=typeof Reflect<"u"&&Reflect;Ne||(Ne=function(i,c,r){return i.apply(c,r)});h||(h=function(i){return i});D||(D=function(i){return i});Oe||(Oe=function(i,c){return new i(...c)});const kt=S(Array.prototype.forEach),Qe=S(Array.prototype.pop),B=S(Array.prototype.push),te=S(String.prototype.toLowerCase),Se=S(String.prototype.toString),vt=S(String.prototype.match),L=S(String.prototype.replace),Ut=S(String.prototype.indexOf),Ft=S(String.prototype.trim),A=S(RegExp.prototype.test),Y=Ht(TypeError);function S(s){return function(i){for(var c=arguments.length,r=new Array(c>1?c-1:0),m=1;m<c;m++)r[m-1]=arguments[m];return Ne(s,i,r)}}function Ht(s){return function(){for(var i=arguments.length,c=new Array(i),r=0;r<i;r++)c[r]=arguments[r];return Oe(s,c)}}function a(s,i,c){var r;c=(r=c)!==null&&r!==void 0?r:te,Je&&Je(s,null);let m=i.length;for(;m--;){let R=i[m];if(typeof R=="string"){const y=c(R);y!==R&&(Mt(i)||(i[m]=y),R=y)}s[R]=!0}return s}function H(s){const i=Pt(null);for(const[c,r]of at(s))i[c]=r;return i}function Q(s,i){for(;s!==null;){const r=xt(s,i);if(r){if(r.get)return S(r.get);if(typeof r.value=="function")return S(r.value)}s=wt(s)}function c(r){return console.warn("fallback value for",r),null}return c}const et=h(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","section","select","shadow","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),Re=h(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","filter","font","g","glyph","glyphref","hkern","image","line","lineargradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),Le=h(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),zt=h(["animate","color-profile","cursor","discard","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),De=h(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover","mprescripts"]),Wt=h(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),tt=h(["#text"]),nt=h(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","face","for","headers","height","hidden","high","href","hreflang","id","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","pattern","placeholder","playsinline","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","xmlns","slot"]),ye=h(["accent-height","accumulate","additive","alignment-baseline","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),ot=h(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),ee=h(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),Gt=D(/\{\{[\w\W]*|[\w\W]*\}\}/gm),Bt=D(/<%[\w\W]*|[\w\W]*%>/gm),Yt=D(/\${[\w\W]*}/gm),Xt=D(/^data-[\-\w.\u00B7-\uFFFF]/),Vt=D(/^aria-[\-\w]+$/),rt=D(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),jt=D(/^(?:\w+script|data):/i),qt=D(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),st=D(/^html$/i);var it=Object.freeze({__proto__:null,MUSTACHE_EXPR:Gt,ERB_EXPR:Bt,TMPLIT_EXPR:Yt,DATA_ATTR:Xt,ARIA_ATTR:Vt,IS_ALLOWED_URI:rt,IS_SCRIPT_OR_DATA:jt,ATTR_WHITESPACE:qt,DOCTYPE_NAME:st});const $t=()=>typeof window>"u"?null:window,Kt=function(i,c){if(typeof i!="object"||typeof i.createPolicy!="function")return null;let r=null;const m="data-tt-policy-suffix";c&&c.hasAttribute(m)&&(r=c.getAttribute(m));const R="dompurify"+(r?"#"+r:"");try{return i.createPolicy(R,{createHTML(y){return y},createScriptURL(y){return y}})}catch{return console.warn("TrustedTypes policy "+R+" could not be created."),null}};function lt(){let s=arguments.length>0&&arguments[0]!==void 0?arguments[0]:$t();const i=o=>lt(o);if(i.version="3.0.5",i.removed=[],!s||!s.document||s.document.nodeType!==9)return i.isSupported=!1,i;const c=s.document,r=c.currentScript;let{document:m}=s;const{DocumentFragment:R,HTMLTemplateElement:y,Node:ne,Element:be,NodeFilter:oe,NamedNodeMap:ct=s.NamedNodeMap||s.MozNamedAttrMap,HTMLFormElement:ut,DOMParser:ft,trustedTypes:X}=s,V=be.prototype,mt=Q(V,"cloneNode"),pt=Q(V,"nextSibling"),dt=Q(V,"childNodes"),ie=Q(V,"parentNode");if(typeof y=="function"){const o=m.createElement("template");o.content&&o.content.ownerDocument&&(m=o.content.ownerDocument)}let E,z="";const{implementation:ae,createNodeIterator:Tt,createDocumentFragment:_t,getElementsByTagName:Et}=m,{importNode:ht}=c;let N={};i.isSupported=typeof at=="function"&&typeof ie=="function"&&ae&&ae.createHTMLDocument!==void 0;const{MUSTACHE_EXPR:re,ERB_EXPR:se,TMPLIT_EXPR:le,DATA_ATTR:At,ARIA_ATTR:gt,IS_SCRIPT_OR_DATA:St,ATTR_WHITESPACE:Ie}=it;let{IS_ALLOWED_URI:Ce}=it,p=null;const Me=a({},[...et,...Re,...Le,...De,...tt]);let d=null;const we=a({},[...nt,...ye,...ot,...ee]);let f=Object.seal(Object.create(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),W=null,ce=null,xe=!0,ue=!0,Pe=!1,ke=!0,x=!1,C=!1,fe=!1,me=!1,P=!1,j=!1,q=!1,ve=!0,Ue=!1;const Rt="user-content-";let pe=!0,G=!1,k={},v=null;const Fe=a({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","style","svg","template","thead","title","video","xmp"]);let He=null;const ze=a({},["audio","video","img","source","image","track"]);let de=null;const We=a({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),$="http://www.w3.org/1998/Math/MathML",K="http://www.w3.org/2000/svg",b="http://www.w3.org/1999/xhtml";let U=b,Te=!1,_e=null;const Lt=a({},[$,K,b],Se);let M;const Dt=["application/xhtml+xml","text/html"],yt="text/html";let T,F=null;const Nt=m.createElement("form"),Ge=function(e){return e instanceof RegExp||e instanceof Function},Ee=function(e){if(!(F&&F===e)){if((!e||typeof e!="object")&&(e={}),e=H(e),M=Dt.indexOf(e.PARSER_MEDIA_TYPE)===-1?M=yt:M=e.PARSER_MEDIA_TYPE,T=M==="application/xhtml+xml"?Se:te,p="ALLOWED_TAGS"in e?a({},e.ALLOWED_TAGS,T):Me,d="ALLOWED_ATTR"in e?a({},e.ALLOWED_ATTR,T):we,_e="ALLOWED_NAMESPACES"in e?a({},e.ALLOWED_NAMESPACES,Se):Lt,de="ADD_URI_SAFE_ATTR"in e?a(H(We),e.ADD_URI_SAFE_ATTR,T):We,He="ADD_DATA_URI_TAGS"in e?a(H(ze),e.ADD_DATA_URI_TAGS,T):ze,v="FORBID_CONTENTS"in e?a({},e.FORBID_CONTENTS,T):Fe,W="FORBID_TAGS"in e?a({},e.FORBID_TAGS,T):{},ce="FORBID_ATTR"in e?a({},e.FORBID_ATTR,T):{},k="USE_PROFILES"in e?e.USE_PROFILES:!1,xe=e.ALLOW_ARIA_ATTR!==!1,ue=e.ALLOW_DATA_ATTR!==!1,Pe=e.ALLOW_UNKNOWN_PROTOCOLS||!1,ke=e.ALLOW_SELF_CLOSE_IN_ATTR!==!1,x=e.SAFE_FOR_TEMPLATES||!1,C=e.WHOLE_DOCUMENT||!1,P=e.RETURN_DOM||!1,j=e.RETURN_DOM_FRAGMENT||!1,q=e.RETURN_TRUSTED_TYPE||!1,me=e.FORCE_BODY||!1,ve=e.SANITIZE_DOM!==!1,Ue=e.SANITIZE_NAMED_PROPS||!1,pe=e.KEEP_CONTENT!==!1,G=e.IN_PLACE||!1,Ce=e.ALLOWED_URI_REGEXP||rt,U=e.NAMESPACE||b,f=e.CUSTOM_ELEMENT_HANDLING||{},e.CUSTOM_ELEMENT_HANDLING&&Ge(e.CUSTOM_ELEMENT_HANDLING.tagNameCheck)&&(f.tagNameCheck=e.CUSTOM_ELEMENT_HANDLING.tagNameCheck),e.CUSTOM_ELEMENT_HANDLING&&Ge(e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)&&(f.attributeNameCheck=e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),e.CUSTOM_ELEMENT_HANDLING&&typeof e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements=="boolean"&&(f.allowCustomizedBuiltInElements=e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),x&&(ue=!1),j&&(P=!0),k&&(p=a({},[...tt]),d=[],k.html===!0&&(a(p,et),a(d,nt)),k.svg===!0&&(a(p,Re),a(d,ye),a(d,ee)),k.svgFilters===!0&&(a(p,Le),a(d,ye),a(d,ee)),k.mathMl===!0&&(a(p,De),a(d,ot),a(d,ee))),e.ADD_TAGS&&(p===Me&&(p=H(p)),a(p,e.ADD_TAGS,T)),e.ADD_ATTR&&(d===we&&(d=H(d)),a(d,e.ADD_ATTR,T)),e.ADD_URI_SAFE_ATTR&&a(de,e.ADD_URI_SAFE_ATTR,T),e.FORBID_CONTENTS&&(v===Fe&&(v=H(v)),a(v,e.FORBID_CONTENTS,T)),pe&&(p["#text"]=!0),C&&a(p,["html","head","body"]),p.table&&(a(p,["tbody"]),delete W.tbody),e.TRUSTED_TYPES_POLICY){if(typeof e.TRUSTED_TYPES_POLICY.createHTML!="function")throw Y('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');if(typeof e.TRUSTED_TYPES_POLICY.createScriptURL!="function")throw Y('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');E=e.TRUSTED_TYPES_POLICY,z=E.createHTML("")}else E===void 0&&(E=Kt(X,r)),E!==null&&typeof z=="string"&&(z=E.createHTML(""));h&&h(e),F=e}},Be=a({},["mi","mo","mn","ms","mtext"]),Ye=a({},["foreignobject","desc","title","annotation-xml"]),Ot=a({},["title","style","font","a","script"]),Z=a({},Re);a(Z,Le),a(Z,zt);const he=a({},De);a(he,Wt);const bt=function(e){let t=ie(e);(!t||!t.tagName)&&(t={namespaceURI:U,tagName:"template"});const n=te(e.tagName),l=te(t.tagName);return _e[e.namespaceURI]?e.namespaceURI===K?t.namespaceURI===b?n==="svg":t.namespaceURI===$?n==="svg"&&(l==="annotation-xml"||Be[l]):!!Z[n]:e.namespaceURI===$?t.namespaceURI===b?n==="math":t.namespaceURI===K?n==="math"&&Ye[l]:!!he[n]:e.namespaceURI===b?t.namespaceURI===K&&!Ye[l]||t.namespaceURI===$&&!Be[l]?!1:!he[n]&&(Ot[n]||!Z[n]):!!(M==="application/xhtml+xml"&&_e[e.namespaceURI]):!1},w=function(e){B(i.removed,{element:e});try{e.parentNode.removeChild(e)}catch{e.remove()}},Ae=function(e,t){try{B(i.removed,{attribute:t.getAttributeNode(e),from:t})}catch{B(i.removed,{attribute:null,from:t})}if(t.removeAttribute(e),e==="is"&&!d[e])if(P||j)try{w(t)}catch{}else try{t.setAttribute(e,"")}catch{}},Xe=function(e){let t,n;if(me)e="<remove></remove>"+e;else{const g=vt(e,/^[\r\n\t ]+/);n=g&&g[0]}M==="application/xhtml+xml"&&U===b&&(e='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+e+"</body></html>");const l=E?E.createHTML(e):e;if(U===b)try{t=new ft().parseFromString(l,M)}catch{}if(!t||!t.documentElement){t=ae.createDocument(U,"template",null);try{t.documentElement.innerHTML=Te?z:l}catch{}}const _=t.body||t.documentElement;return e&&n&&_.insertBefore(m.createTextNode(n),_.childNodes[0]||null),U===b?Et.call(t,C?"html":"body")[0]:C?t.documentElement:_},Ve=function(e){return Tt.call(e.ownerDocument||e,e,oe.SHOW_ELEMENT|oe.SHOW_COMMENT|oe.SHOW_TEXT,null,!1)},It=function(e){return e instanceof ut&&(typeof e.nodeName!="string"||typeof e.textContent!="string"||typeof e.removeChild!="function"||!(e.attributes instanceof ct)||typeof e.removeAttribute!="function"||typeof e.setAttribute!="function"||typeof e.namespaceURI!="string"||typeof e.insertBefore!="function"||typeof e.hasChildNodes!="function")},J=function(e){return typeof ne=="object"?e instanceof ne:e&&typeof e=="object"&&typeof e.nodeType=="number"&&typeof e.nodeName=="string"},I=function(e,t,n){N[e]&&kt(N[e],l=>{l.call(i,t,n,F)})},je=function(e){let t;if(I("beforeSanitizeElements",e,null),It(e))return w(e),!0;const n=T(e.nodeName);if(I("uponSanitizeElement",e,{tagName:n,allowedTags:p}),e.hasChildNodes()&&!J(e.firstElementChild)&&(!J(e.content)||!J(e.content.firstElementChild))&&A(/<[/\w]/g,e.innerHTML)&&A(/<[/\w]/g,e.textContent))return w(e),!0;if(!p[n]||W[n]){if(!W[n]&&$e(n)&&(f.tagNameCheck instanceof RegExp&&A(f.tagNameCheck,n)||f.tagNameCheck instanceof Function&&f.tagNameCheck(n)))return!1;if(pe&&!v[n]){const l=ie(e)||e.parentNode,_=dt(e)||e.childNodes;if(_&&l){const g=_.length;for(let u=g-1;u>=0;--u)l.insertBefore(mt(_[u],!0),pt(e))}}return w(e),!0}return e instanceof be&&!bt(e)||(n==="noscript"||n==="noembed"||n==="noframes")&&A(/<\/no(script|embed|frames)/i,e.innerHTML)?(w(e),!0):(x&&e.nodeType===3&&(t=e.textContent,t=L(t,re," "),t=L(t,se," "),t=L(t,le," "),e.textContent!==t&&(B(i.removed,{element:e.cloneNode()}),e.textContent=t)),I("afterSanitizeElements",e,null),!1)},qe=function(e,t,n){if(ve&&(t==="id"||t==="name")&&(n in m||n in Nt))return!1;if(!(ue&&!ce[t]&&A(At,t))){if(!(xe&&A(gt,t))){if(!d[t]||ce[t]){if(!($e(e)&&(f.tagNameCheck instanceof RegExp&&A(f.tagNameCheck,e)||f.tagNameCheck instanceof Function&&f.tagNameCheck(e))&&(f.attributeNameCheck instanceof RegExp&&A(f.attributeNameCheck,t)||f.attributeNameCheck instanceof Function&&f.attributeNameCheck(t))||t==="is"&&f.allowCustomizedBuiltInElements&&(f.tagNameCheck instanceof RegExp&&A(f.tagNameCheck,n)||f.tagNameCheck instanceof Function&&f.tagNameCheck(n))))return!1}else if(!de[t]){if(!A(Ce,L(n,Ie,""))){if(!((t==="src"||t==="xlink:href"||t==="href")&&e!=="script"&&Ut(n,"data:")===0&&He[e])){if(!(Pe&&!A(St,L(n,Ie,"")))){if(n)return!1}}}}}}return!0},$e=function(e){return e.indexOf("-")>0},Ke=function(e){let t,n,l,_;I("beforeSanitizeAttributes",e,null);const{attributes:g}=e;if(!g)return;const u={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:d};for(_=g.length;_--;){t=g[_];const{name:O,namespaceURI:ge}=t;if(n=O==="value"?t.value:Ft(t.value),l=T(O),u.attrName=l,u.attrValue=n,u.keepAttr=!0,u.forceKeepAttr=void 0,I("uponSanitizeAttribute",e,u),n=u.attrValue,u.forceKeepAttr||(Ae(O,e),!u.keepAttr))continue;if(!ke&&A(/\/>/i,n)){Ae(O,e);continue}x&&(n=L(n,re," "),n=L(n,se," "),n=L(n,le," "));const Ze=T(e.nodeName);if(qe(Ze,l,n)){if(Ue&&(l==="id"||l==="name")&&(Ae(O,e),n=Rt+n),E&&typeof X=="object"&&typeof X.getAttributeType=="function"&&!ge)switch(X.getAttributeType(Ze,l)){case"TrustedHTML":{n=E.createHTML(n);break}case"TrustedScriptURL":{n=E.createScriptURL(n);break}}try{ge?e.setAttributeNS(ge,O,n):e.setAttribute(O,n),Qe(i.removed)}catch{}}}I("afterSanitizeAttributes",e,null)},Ct=function o(e){let t;const n=Ve(e);for(I("beforeSanitizeShadowDOM",e,null);t=n.nextNode();)I("uponSanitizeShadowNode",t,null),!je(t)&&(t.content instanceof R&&o(t.content),Ke(t));I("afterSanitizeShadowDOM",e,null)};return i.sanitize=function(o){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t,n,l,_;if(Te=!o,Te&&(o="<!-->"),typeof o!="string"&&!J(o))if(typeof o.toString=="function"){if(o=o.toString(),typeof o!="string")throw Y("dirty is not a string, aborting")}else throw Y("toString is not a function");if(!i.isSupported)return o;if(fe||Ee(e),i.removed=[],typeof o=="string"&&(G=!1),G){if(o.nodeName){const O=T(o.nodeName);if(!p[O]||W[O])throw Y("root node is forbidden and cannot be sanitized in-place")}}else if(o instanceof ne)t=Xe("<!---->"),n=t.ownerDocument.importNode(o,!0),n.nodeType===1&&n.nodeName==="BODY"||n.nodeName==="HTML"?t=n:t.appendChild(n);else{if(!P&&!x&&!C&&o.indexOf("<")===-1)return E&&q?E.createHTML(o):o;if(t=Xe(o),!t)return P?null:q?z:""}t&&me&&w(t.firstChild);const g=Ve(G?o:t);for(;l=g.nextNode();)je(l)||(l.content instanceof R&&Ct(l.content),Ke(l));if(G)return o;if(P){if(j)for(_=_t.call(t.ownerDocument);t.firstChild;)_.appendChild(t.firstChild);else _=t;return(d.shadowroot||d.shadowrootmode)&&(_=ht.call(c,_,!0)),_}let u=C?t.outerHTML:t.innerHTML;return C&&p["!doctype"]&&t.ownerDocument&&t.ownerDocument.doctype&&t.ownerDocument.doctype.name&&A(st,t.ownerDocument.doctype.name)&&(u="<!DOCTYPE "+t.ownerDocument.doctype.name+`>
`+u),x&&(u=L(u,re," "),u=L(u,se," "),u=L(u,le," ")),E&&q?E.createHTML(u):u},i.setConfig=function(o){Ee(o),fe=!0},i.clearConfig=function(){F=null,fe=!1},i.isValidAttribute=function(o,e,t){F||Ee({});const n=T(o),l=T(e);return qe(n,l,t)},i.addHook=function(o,e){typeof e=="function"&&(N[o]=N[o]||[],B(N[o],e))},i.removeHook=function(o){if(N[o])return Qe(N[o])},i.removeHooks=function(o){N[o]&&(N[o]=[])},i.removeAllHooks=function(){N={}},i}var Jt=lt();export{Jt as p};
