import{Ac as Z,Bc as Ee,E as C,Fa as w,Gc as Ce,Ha as Me,Hc as we,Ic as Re,Jc as R,Oc as He,U as Te,Vc as K,_a as De,ab as be,d as _e,dd as Fe,mc as ze,oa as Y}from"./chunk-7DQJ5RL6.js";import{$b as ce,Ab as O,Bb as G,Ea as v,Ec as x,Fa as _,Fb as d,Gb as g,Ha as j,Hb as q,J as ne,Ka as y,Kc as ve,Lb as E,Ma as b,Ob as l,Pb as P,Qb as ue,Qc as L,Rb as le,Tb as B,Ub as A,Vb as H,Wb as de,ac as pe,ba as oe,bc as he,ca as re,cc as F,eb as se,ec as J,fc as me,gb as M,ib as c,ja as p,jb as a,la as W,mb as ae,nd as X,oc as ge,od as ye,sc as fe,tb as D,ua as S,va as h,wa as m,wb as k,xb as Q,yb as u,z as ie,zb as z}from"./chunk-3SCFLBW7.js";import{$a as Ae,E as Se,Va as Oe,_a as Pe,t as Ie}from"./chunk-ELTCUPIJ.js";var Ne=(()=>{class t{constructor({nativeElement:e}){return new y(e)}}return t.\u0275fac=function(e){return new(e||t)(a(y))},t.\u0275dir=m({type:t,selectors:[["","tuiElement",""]],exportAs:["elementRef"]}),t})();var We=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=h({type:t}),t.\u0275inj=p({}),t})();var ee=(()=>{class t extends Ne{}return t.\u0275fac=(()=>{let n;return function(i){return(n||(n=j(t)))(i||t)}})(),t.\u0275dir=m({type:t,selectors:[["","tuiResizeable",""]],features:[D]}),t})(),je=(()=>{class t{constructor(e){this.resizeable=e,this.tuiResizer=[0,0],this.tuiSizeChange=new b,this.x=NaN,this.y=NaN,this.width=0,this.height=0}get cursor(){return this.tuiResizer[0]?this.tuiResizer[1]?this.tuiResizer[0]*this.tuiResizer[1]>0?"nwse-resize":"nesw-resize":"ew-resize":"ns-resize"}onTouchStart({touches:e}){this.onMouseDown(e[0].clientX,e[0].clientY)}onMouseDown(e,i){this.x=e,this.y=i,this.width=this.resizeable.nativeElement.clientWidth,this.height=this.resizeable.nativeElement.clientHeight}onMouseMove({x:e,y:i,buttons:o}){o?this.onMove(e,i):this.onMouseUp()}onTouchMove({touches:e}){this.onMove(e[0].clientX,e[0].clientY)}onMouseUp(){this.x=NaN}onMove(e,i){if(Number.isNaN(this.x))return;let{style:o}=this.resizeable.nativeElement,r=[this.width+this.tuiResizer[0]*(e-this.x),this.height+this.tuiResizer[1]*(i-this.y)];this.tuiResizer[0]&&(o.width=C(r[0])),this.tuiResizer[1]&&(o.height=C(r[1])),this.tuiSizeChange.emit(r)}}return t.\u0275fac=function(e){return new(e||t)(a(ee))},t.\u0275dir=m({type:t,selectors:[["","tuiResizer",""]],hostVars:4,hostBindings:function(e,i){e&1&&l("touchstart.silent.passive",function(r){return i.onTouchStart(r)})("mousedown.silent.prevent",function(r){return i.onMouseDown(r.x,r.y)})("mousemove.silent",function(r){return i.onMouseMove(r)},!1,M)("touchmove.silent",function(r){return i.onTouchMove(r)},!1,M)("mouseup.silent",function(){return i.onMouseUp()},!1,M)("touchend.silent",function(){return i.onMouseUp()},!1,M),e&2&&z("touch-action","none")("cursor",i.cursor)},inputs:{tuiResizer:"tuiResizer"},outputs:{tuiSizeChange:"tuiSizeChange"}}),t})(),ke=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=h({type:t}),t.\u0275inj=p({}),t})();var te=class{constructor(n,e,i){let o=e.get(fe),s=e.get(ae).resolveComponentFactory(n);this.componentRef=s.create(e,[]),this.updateProps(i),o.attachView(this.componentRef.hostView)}get instance(){return this.componentRef.instance}get el(){return this.componentRef.injector.get(y)}get dom(){return this.el.nativeElement}updateProps(n){Object.entries(n).forEach(([e,i])=>{this.instance[e]=i})}detectChanges(){this.componentRef.changeDetectorRef.detectChanges()}destroy(){this.componentRef.destroy()}},U=class{},V=class extends Ae{constructor(){super(...arguments),this.contentDOMElement=null}mount(){let n=this.options.injector,e=n.get(x),i={editor:this.editor,node:this.node,decorations:this.decorations,selected:!1,extension:this.extension,getPos:()=>this.getPos(),updateAttributes:(o={})=>this.updateAttributes(o),deleteNode:()=>this.deleteNode()};this.editor.on("selectionUpdate",this.handleSelectionUpdate.bind(this)),this.renderer=new te(this.component,n,i),this.extension.config.draggable&&(this.renderer.el.nativeElement.ondragstart=o=>{this.onDragStart(o)}),this.contentDOMElement=this.node.isLeaf?null:e.createElement(this.node.isInline?"span":"div"),this.contentDOMElement&&(this.contentDOMElement.style.whiteSpace="inherit",this.renderer.detectChanges()),this.appendContendDom()}get dom(){return this.renderer.dom}get contentDOM(){return this.node.isLeaf?null:this.contentDOMElement}update(n,e){return this.options.update?this.options.update(n,e):n.type!==this.node.type?!1:(n===this.node&&this.decorations===e||(this.node=n,this.decorations=e,this.renderer.updateProps({node:n,decorations:e}),this.appendContendDom()),!0)}handleSelectionUpdate(){let{from:n,to:e}=this.editor.state.selection;n<=this.getPos()&&e>=this.getPos()+this.node.nodeSize?this.selectNode():this.deselectNode()}selectNode(){this.renderer.updateProps({selected:!0})}deselectNode(){this.renderer.updateProps({selected:!1})}destroy(){this.renderer.destroy(),this.editor.off("selectionUpdate",this.handleSelectionUpdate.bind(this)),this.contentDOMElement=null}appendContendDom(){let n=this.dom.querySelector("[data-node-view-content]");this.contentDOMElement&&n&&!n.contains(this.contentDOMElement)&&n.appendChild(this.contentDOMElement)}};var Qe=["container"],Ge=["*"],qe=t=>[t,0],Je=()=>[1,0],Xe=()=>[0,1];function Ye(t,n){if(t&1){let e=E();d(0,"div",5),l("tuiSizeChange",function(o){v(e);let r=P();return _(r.sizeChange.emit(o))}),g()}t&2&&u("tuiResizer",J(1,Xe))}var Be=(()=>{class t extends U{constructor(){super(...arguments),this.currentHeight=0,this.currentWidth=0}get attrs(){var e;return((e=this.node)===null||e===void 0?void 0:e.attrs)||{src:""}}get width(){return this.currentWidth||this.attrs.width||null}get height(){return this.currentHeight||this.attrs.height||null}}return t.\u0275fac=(()=>{let n;return function(i){return(n||(n=j(t)))(i||t)}})(),t.\u0275dir=m({type:t,features:[D]}),t})(),xe=(()=>{class t{constructor(){this.autoHeight=!1,this.width=null,this.height=null,this.sizeChange=new b}get hostWidth(){return X(this.width)?C(this.width):this.width}get hostHeight(){return this.autoHeight?null:X(this.height)?C(this.height):this.height}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=S({type:t,selectors:[["tui-editor-resizable"]],viewQuery:function(e,i){if(e&1&&B(Qe,7),e&2){let o;A(o=H())&&(i.container=o.first)}},hostVars:4,hostBindings:function(e,i){e&2&&z("width",i.hostWidth)("height",i.hostHeight)},inputs:{autoHeight:"autoHeight",width:"width",height:"height"},outputs:{sizeChange:"sizeChange"},ngContentSelectors:Ge,decls:6,vars:8,consts:[["container",""],["tuiResizeable","",1,"t-resizable"],[1,"t-handle","t-handle-left-side",3,"tuiSizeChange","tuiResizer"],["class","t-handle t-handle-bottom-side",3,"tuiResizer","tuiSizeChange",4,"ngIf"],[1,"t-handle","t-handle-right-side",3,"tuiSizeChange","tuiResizer"],[1,"t-handle","t-handle-bottom-side",3,"tuiSizeChange","tuiResizer"]],template:function(e,i){if(e&1){let o=E();ue(),d(0,"div",1,0),le(2),d(3,"div",2),l("tuiSizeChange",function(s){return v(o),_(i.sizeChange.emit(s))}),g(),k(4,Ye,1,2,"div",3),d(5,"div",4),l("tuiSizeChange",function(s){return v(o),_(i.sizeChange.emit(s))}),g()()}e&2&&(O("t-resizable-auto-height",i.autoHeight),c(3),u("tuiResizer",me(5,qe,-1)),c(),u("ngIf",!i.autoHeight),c(),u("tuiResizer",J(7,Je)))},dependencies:[ee,je,ve],styles:['[_nghost-%COMP%]{position:relative;display:inline-block;box-sizing:border-box}[_nghost-%COMP%]   .t-resizable[_ngcontent-%COMP%]{box-sizing:border-box}[_nghost-%COMP%]   .t-resizable-auto-height[_ngcontent-%COMP%]{height:auto!important}[_nghost-%COMP%]   iframe[_ngcontent-%COMP%]{display:inline;pointer-events:none}[_nghost-%COMP%]:hover   .t-handle[_ngcontent-%COMP%]:after{opacity:1}.t-handle[_ngcontent-%COMP%]{position:absolute;top:0;display:flex;width:.75rem;cursor:col-resize;justify-content:center;align-items:center;height:100%}.t-handle[_ngcontent-%COMP%]:after{transition-property:opacity;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;content:"";width:50%;height:33%;box-sizing:border-box;border-radius:var(--tui-radius-m);background:var(--tui-base-08);border:1px solid var(--tui-base-03);opacity:0}.t-handle-left-side[_ngcontent-%COMP%]{left:0}.t-handle-bottom-side[_ngcontent-%COMP%]{top:unset;bottom:.3125rem;height:.95rem;width:100%}.t-handle-right-side[_ngcontent-%COMP%]{right:0}'],changeDetection:0}),t})(),Le=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=h({type:t}),t.\u0275inj=p({imports:[[L,We,ke]]}),t})();var Ke=/(?:^|\s)(!\[(.+|:?)]\((\S+)(?:(?:\s+)["'](\S+)["'])?\))$/,Ue=Pe.create({name:"image",addOptions(){return{inline:!1,allowBase64:!1,HTMLAttributes:{}}},inline(){return this.options.inline},group(){return this.options.inline?"inline":"block"},draggable:!0,addAttributes(){return{src:{default:null},alt:{default:null},title:{default:null}}},parseHTML(){return[{tag:this.options.allowBase64?"img[src]":'img[src]:not([src^="data:"])'}]},renderHTML({HTMLAttributes:t}){return["img",Se(this.options.HTMLAttributes,t)]},addCommands(){return{setImage:t=>({commands:n})=>n.insertContent({type:this.name,attrs:t})}},addInputRules(){return[Oe({find:Ke,type:this.type,getAttributes:t=>{let[,,n,e,i]=t;return{src:e,alt:n,title:i}}})]}});var Ve=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=h({type:t}),t.\u0275inj=p({}),t})();var et=["resizable"];function tt(t,n){if(t&1){let e=E();d(0,"tui-image-align",6),l("updateAlignStyles",function(o){let r=v(e).close;return P().align(o),_(r())}),g()}if(t&2){let e=P();G(e.style)}}var it=new W("[TUI_EDITOR_MIN_IMAGE_WIDTH]",{factory:()=>null}),nt=new W("[TUI_EDITOR_MAX_IMAGE_WIDTH]",{factory:()=>null}),ot=new W("[TUI_IMAGE_EDITOR_OPTIONS]",{factory:()=>({minWidth:null,maxWidth:1/0})}),rt=(()=>{class t{constructor(e){this.options=e,this.style=null,this.updateAlignStyles=new b}isAlignCenter(e){var i,o;return(o=(i=e==null?void 0:e.replace(/\s/g,""))===null||i===void 0?void 0:i.includes("justify-content:center"))!==null&&o!==void 0?o:!1}isAlignJustify(e){return e==null||e===""}isAlignLeft(e){var i,o;return(o=(i=e==null?void 0:e.replace(/\s/g,""))===null||i===void 0?void 0:i.includes("float:left"))!==null&&o!==void 0?o:!1}isAlignRight(e){var i,o;return(o=(i=e==null?void 0:e.replace(/\s/g,""))===null||i===void 0?void 0:i.includes("float:right"))!==null&&o!==void 0?o:!1}alignLeft(){this.updateAlignStyles.emit("float: left")}alignCenter(){this.updateAlignStyles.emit("display: flex; justify-content: center; margin-left: auto; margin-right: auto;")}alignJustify(){this.updateAlignStyles.emit(null)}alignRight(){this.updateAlignStyles.emit("float: right")}}return t.\u0275fac=function(e){return new(e||t)(a(K))},t.\u0275cmp=S({type:t,selectors:[["tui-image-align"]],inputs:{style:"style"},outputs:{updateAlignStyles:"updateAlignStyles"},decls:5,vars:8,consts:[[1,"t-align-list"],["size","s","tuiIconButton","",3,"click.capture","appearance","icon"],["appearance","icon","size","s","tuiIconButton","",3,"click.capture","appearance","icon"]],template:function(e,i){e&1&&(d(0,"div",0)(1,"button",1),l("click.capture",function(){return i.alignJustify()}),g(),d(2,"button",1),l("click.capture",function(){return i.alignLeft()}),g(),d(3,"button",1),l("click.capture",function(){return i.alignCenter()}),g(),d(4,"button",2),l("click.capture",function(){return i.alignRight()}),g()()),e&2&&(c(),u("appearance",i.isAlignJustify(i.style)?"flat":"icon")("icon",i.options.icons.imageExtension.alignJustify),c(),u("appearance",i.isAlignLeft(i.style)?"flat":"icon")("icon",i.options.icons.imageExtension.alignLeft),c(),u("appearance",i.isAlignCenter(i.style)?"flat":"icon")("icon",i.options.icons.imageExtension.alignCenter),c(),u("appearance",i.isAlignRight(i.style)?"flat":"icon")("icon",i.options.icons.imageExtension.alignRight))},dependencies:[Z],styles:[".t-align-list[_ngcontent-%COMP%]{display:flex;grid-gap:.3125rem;gap:.3125rem;padding:.125rem}"],changeDetection:0}),R([w],t.prototype,"isAlignCenter",null),R([w],t.prototype,"isAlignJustify",null),R([w],t.prototype,"isAlignLeft",null),R([w],t.prototype,"isAlignRight",null),t})(),st=(()=>{class t extends De{constructor(e){super(),this.el=e,this.type="dropdown"}getPosition({width:e,height:i}){let{right:o,top:r}=this.el.nativeElement.getBoundingClientRect();return[r+i+5,o-e/2]}}return t.\u0275fac=function(e){return new(e||t)(a(y))},t.\u0275dir=m({type:t,selectors:[["","tuiImageOptionsPosition",""]],features:[F([be(t)]),D]}),t})(),at=(()=>{class t extends Be{constructor(e,i,o,r,s,f,T,I,$){super(),this.legacyMinWidth=e,this.legacyMaxWidth=i,this.imageOptions=o,this.options=r,this.doc=s,this.sanitizer=f,this.el=T,this.destroy$=I,this.win=$,this.contenteditable=!1,this.style=null,this.focused=!1,this.open=!1}get dragHandle(){var e;return(e=this.attrs.draggable)!==null&&e!==void 0?e:null}get height(){return null}get alt(){return this.attrs.alt||""}get title(){return this.attrs.title||""}getSrc(e){return this.sanitizer.bypassSecurityTrustResourceUrl(e??"")}currentTargetIsFocused(e){this.focused=this.el.nativeElement.contains(e),this.focused?this.selectFakeText():this.open=!1}get minWidth(){var e;return((e=this.legacyMinWidth)!==null&&e!==void 0?e:this.imageOptions.minWidth)||0}get maxWidth(){var e;return((e=this.legacyMaxWidth)!==null&&e!==void 0?e:this.imageOptions.maxWidth)||0}ngOnInit(){this.style=this.attrs.style}ngAfterViewInit(){this.minWidth>0&&this.updateMinWidth()}align(e){this.style=e,this.attrs.style=e,this.notifyUpdate()}updateSize([e]){this.currentWidth=Math.max(this.minWidth,Math.min(this.maxWidth,e)),this.attrs.width=this.currentWidth,this.notifyUpdate()}updateMinWidth(){ie(0).pipe(oe(this.destroy$)).subscribe(()=>{var e,i,o,r,s,f,T;let I=(T=(f=(r=(o=(i=(e=this.resizable)===null||e===void 0?void 0:e.container)===null||i===void 0?void 0:i.nativeElement.querySelector("img"))===null||o===void 0?void 0:o.naturalWidth)!==null&&r!==void 0?r:(s=this.resizable)===null||s===void 0?void 0:s.width)!==null&&f!==void 0?f:this.attrs.width)!==null&&T!==void 0?T:0;this.minWidth>0&&this.minWidth>I&&this.updateSize([this.minWidth])})}notifyUpdate(){this.el.nativeElement.dispatchEvent(new CustomEvent(He,{bubbles:!0}))}selectFakeText(){var e,i,o;let r=this.doc.createRange();(e=this.el.nativeElement.querySelector("p"))===null||e===void 0||e.focus(),r.selectNode(this.el.nativeElement),(i=this.win.getSelection())===null||i===void 0||i.removeAllRanges(),(o=this.win.getSelection())===null||o===void 0||o.addRange(r)}}return t.\u0275fac=function(e){return new(e||t)(a(it),a(nt),a(ot),a(K),a(x),a(_e),a(y),a(Y,2),a(Te))},t.\u0275cmp=S({type:t,selectors:[["tui-image-editor"]],viewQuery:function(e,i){if(e&1&&B(et,7),e&2){let o;A(o=H())&&(i.resizable=o.first)}},hostVars:4,hostBindings:function(e,i){e&1&&l("click.silent",function(r){return i.currentTargetIsFocused(r.target)},!1,M),e&2&&(Q("contenteditable",i.contenteditable)("data-drag-handle",i.dragHandle),G(i.style))},features:[F([Y]),D],decls:7,vars:17,consts:[["resizable",""],["imgOptions",""],["tuiImageOptionsPosition","",1,"t-hosted",3,"openChange","content","open"],["appearance","outline","size","s","tuiIconButton","",1,"t-image-options",3,"icon"],[3,"sizeChange","autoHeight","width"],["contenteditable","false",3,"alt","src","title"],[3,"updateAlignStyles"]],template:function(e,i){if(e&1){let o=E();d(0,"tui-hosted-dropdown",2),he("openChange",function(s){return v(o),pe(i.open,s)||(i.open=s),_(s)}),q(1,"button",3),d(2,"tui-editor-resizable",4,0),l("sizeChange",function(s){return v(o),_(i.updateSize(s))}),q(4,"img",5),g()(),k(5,tt,1,2,"ng-template",null,1,ge)}if(e&2){let o=de(6);u("content",o),ce("open",i.open),c(),O("_open",i.open),u("icon",i.options.icons.imageExtension.settings),c(),u("autoHeight",!0)("width",i.width),c(2),z("max-width",i.maxWidth,"px")("min-width",i.minWidth,"px"),O("ProseMirror-selectednode",i.focused),u("alt",i.alt)("src",i.getSrc(i.attrs.src),se)("title",i.title),Q("width",i.width)}},dependencies:[we,Z,xe,rt,st],styles:["[_nghost-%COMP%]{display:inline-block}[data-drag-handle][_nghost-%COMP%]{cursor:move}[_nghost-%COMP%]:hover   .t-image-options[_ngcontent-%COMP%]{opacity:1}img[_ngcontent-%COMP%]{pointer-events:none}.t-emulate-inline-node[_ngcontent-%COMP%]{display:inline-block;margin:0;height:0}.t-hosted[_ngcontent-%COMP%]{position:relative}.t-image-options[_ngcontent-%COMP%]{position:absolute;top:.625rem;right:.625rem;z-index:1;background:var(--tui-base-01)}.t-image-options[_ngcontent-%COMP%]:not(._open){transition-property:opacity;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;opacity:0}"],changeDetection:0}),R([w],t.prototype,"getSrc",null),t})();function $e(t){return(n,e)=>{var i;let o=e instanceof DragEvent?e.dataTransfer:e.clipboardData,r=Array.from((i=o==null?void 0:o.files)!==null&&i!==void 0?i:[]).filter(f=>/image/i.test(f.type));r.length&&e.preventDefault();let s=t.get(Fe);r.forEach(f=>{s(f).pipe(ne(1),re(()=>!n.isDestroyed)).subscribe(T=>{let I=n.state.schema.nodes.image.create({src:T}),$=n.state.tr.replaceSelectionWith(I);setTimeout==null||setTimeout(()=>{n.isDestroyed||n.dispatch($)})})})}}function Di({injector:t,draggable:n}){return ut(t,{draggable:n})}function ut(t,{draggable:n}={}){let e=ye(n)?n:!0;return Ue.extend({name:"image",group:"inline",inline:!0,priority:0,selectable:!0,draggable:e,parseHTML(){return[{tag:"img"}]},addAttributes(){return{src:{default:"",keepOnSplit:!1},width:{default:null,keepOnSplit:!1},alt:{default:"",keepOnSplit:!1},style:{default:"",keepOnSplit:!1},title:{default:"",keepOnSplit:!1},draggable:{default:e?"":null,keepOnSplit:!1}}},addNodeView(){return i=>Reflect.construct(V,[at,i,Object.assign({injector:t},i)])},addCommands(){return{setEditableImage:i=>({commands:o})=>o.insertContent({type:this.name,attrs:i})}},addProseMirrorPlugins(){return[new Ie({props:{handleDOMEvents:{paste:$e(t),drop:$e(t)}}})]}})}var bi=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=h({type:t}),t.\u0275inj=p({imports:[[L,Le,Ee,Re,Ve,Me,ze,Ce]]}),t})();export{nt as TUI_EDITOR_MAX_IMAGE_WIDTH,it as TUI_EDITOR_MIN_IMAGE_WIDTH,ot as TUI_IMAGE_EDITOR_OPTIONS,rt as TuiImageAlignComponent,at as TuiImageEditorComponent,bi as TuiImageEditorModule,st as TuiImageOptionsPositionDirective,ut as createImageEditorExtension,Di as tuiCreateImageEditorExtension};
//# sourceMappingURL=chunk-SBSKZ5R6.js.map
