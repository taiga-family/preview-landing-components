import{sa as c}from"./chunk-BZ65WEPX.js";function E(t,e,o){let n=t.selection.$anchor;for(let r=n.depth;r>0;r--)if(n.node(r).type.name===o)return e&&e(t.tr.delete(n.before(r),n.after(r)).scrollIntoView()),!0;return!1}function f(t,e){let o=Object.keys(e);return!o.length||!!o.filter(n=>e[n]===t[n]).length}function d(t,e,o={}){return t.find(({attrs:n,type:r})=>r===e&&f(n,o))||null}function S(t,e,o={}){if(!t||!e)return null;let{node:n,offset:r}=t.parent.childAfter(t.parentOffset);if(!n)return null;let s=d(n.marks,e,o);if(!s)return null;let i=t.index(),a=t.start()+r,l=i+1,u=a+n.nodeSize;for(d(n.marks,e,o);i>0&&s.isInSet(t.parent.child(i-1).marks);)i-=1,a-=t.parent.child(i).nodeSize;for(;l<t.parent.childCount&&d(t.parent.child(l).marks,e,o);)u+=t.parent.child(l).nodeSize,l+=1;return{from:a,to:u}}function A(t,e){let o=e??t.selection.$head.parent.textContent,n=t.doc.cut(t.selection.from,t.selection.to);return n.content.size?c(n.content,t.schema):o}function _(t){var e,o,n;if(!t)return{before:"",after:""};let{$from:r,$to:s}=t.state.selection,i=(e=r.nodeBefore)===null||e===void 0?void 0:e.textContent;i=((i==null?void 0:i.slice(((o=(i==null?void 0:i.lastIndexOf(" "))||(i==null?void 0:i.lastIndexOf(`
`)))!==null&&o!==void 0?o:0)+1))||"").trim();let a=((n=s.nodeAfter)===null||n===void 0?void 0:n.textContent.trim())||"";return{before:i,after:a}}var m="\\s*,\\s*",v="#(?:[a-f0-9]{6}|[a-f0-9]{3})",g="\\(\\s*(?:\\d{1,3}\\s*,\\s*){2}\\d{1,3}\\s*\\)",p="\\(\\s*(?:\\d{1,3}\\s*,\\s*){2}\\d{1,3}\\s*,\\s*\\d*\\.?\\d+\\)",h="(?:[+-]?\\d*\\.?\\d+)(?:%|[a-z]+)?",x="[_a-z-][_a-z0-9-]*",b=["(?:",v,"|","(?:rgb|hsl)",g,"|","(?:rgba|hsla)",p,"|",x,")"],T=["\\s*(",...b,")","(?:\\s+","(",h,"))?","(?:",m,"\\s*)?"];function M(t){return t.reduce((e,o)=>(e[o]={parseHTML:n=>n==null?void 0:n.getAttribute(`${o}`)},e),{})}function O(t){return t.split(";").reduce((e,o)=>{var n;let[r,s]=(n=o.split(":"))!==null&&n!==void 0?n:[];return r&&s&&(e[r.trim()]=s.trim()),e},{})}function k(t){var e;let o=((e=t.endContainer.nodeValue)===null||e===void 0?void 0:e.length)||0;return t.endOffset-t.startOffset>0||t.endOffset-t.startOffset===0&&o===1||t.startOffset!==0&&o>1&&t.endOffset!==o}export{E as a,S as b,A as c,_ as d,M as e,O as f,k as g};
//# sourceMappingURL=chunk-4PO7KRVF.js.map