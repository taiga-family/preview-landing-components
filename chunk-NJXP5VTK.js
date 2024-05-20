import{$a as de,M,Y as ne,e as te,ya as oe}from"./chunk-7C7OTY5L.js";import{Ab as c,Bb as v,Bc as C,Cb as E,Db as g,Eb as _,Fa as L,Fb as I,Ga as V,Hc as ee,Ia as y,Jb as Y,K as B,La as h,Ma as b,Mb as d,Nb as J,Nc as w,Ob as K,Pb as Q,ac as F,ca as k,cc as x,dc as Z,eb as G,gb as m,ib as p,ja as a,jb as s,kd as j,la as D,ld as ie,nb as X,qc as $,ub as f,va as R,wa as u,xa as l,yb as q,zb as A}from"./chunk-BZLH56ZP.js";import{B as O,Sa as se,Xa as ae,Ya as ue,q as re}from"./chunk-BZ65WEPX.js";var le=(()=>{class t{constructor({nativeElement:e}){return new h(e)}}return t.\u0275fac=function(e){return new(e||t)(s(h))},t.\u0275dir=l({type:t,selectors:[["","tuiElement",""]],exportAs:["elementRef"]}),t})();var ce=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=u({type:t}),t.\u0275inj=a({}),t})();var W=(()=>{class t extends le{}return t.\u0275fac=(()=>{let n;return function(i){return(n||(n=y(t)))(i||t)}})(),t.\u0275dir=l({type:t,selectors:[["","tuiResizeable",""]],features:[f]}),t})(),he=(()=>{class t{constructor(e){this.resizeable=e,this.tuiResizer=[0,0],this.tuiSizeChange=new b,this.x=NaN,this.y=NaN,this.width=0,this.height=0}get cursor(){return this.tuiResizer[0]?this.tuiResizer[1]?this.tuiResizer[0]*this.tuiResizer[1]>0?"nwse-resize":"nesw-resize":"ew-resize":"ns-resize"}onTouchStart({touches:e}){this.onMouseDown(e[0].clientX,e[0].clientY)}onMouseDown(e,i){this.x=e,this.y=i,this.width=this.resizeable.nativeElement.clientWidth,this.height=this.resizeable.nativeElement.clientHeight}onMouseMove({x:e,y:i,buttons:o}){o?this.onMove(e,i):this.onMouseUp()}onTouchMove({touches:e}){this.onMove(e[0].clientX,e[0].clientY)}onMouseUp(){this.x=NaN}onMove(e,i){if(Number.isNaN(this.x))return;let{style:o}=this.resizeable.nativeElement,r=[this.width+this.tuiResizer[0]*(e-this.x),this.height+this.tuiResizer[1]*(i-this.y)];this.tuiResizer[0]&&(o.width=M(r[0])),this.tuiResizer[1]&&(o.height=M(r[1])),this.tuiSizeChange.emit(r)}}return t.\u0275fac=function(e){return new(e||t)(s(W))},t.\u0275dir=l({type:t,selectors:[["","tuiResizer",""]],hostVars:4,hostBindings:function(e,i){e&1&&d("touchstart.silent.passive",function(r){return i.onTouchStart(r)})("mousedown.silent.prevent",function(r){return i.onMouseDown(r.x,r.y)})("mousemove.silent",function(r){return i.onMouseMove(r)},!1,m)("touchmove.silent",function(r){return i.onTouchMove(r)},!1,m)("mouseup.silent",function(){return i.onMouseUp()},!1,m)("touchend.silent",function(){return i.onMouseUp()},!1,m),e&2&&v("touch-action","none")("cursor",i.cursor)},inputs:{tuiResizer:"tuiResizer"},outputs:{tuiSizeChange:"tuiSizeChange"}}),t})(),me=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=u({type:t}),t.\u0275inj=a({}),t})();var U=class{constructor(n,e,i){let o=e.get($),z=e.get(X).resolveComponentFactory(n);this.componentRef=z.create(e,[]),this.updateProps(i),o.attachView(this.componentRef.hostView)}get instance(){return this.componentRef.instance}get el(){return this.componentRef.injector.get(h)}get dom(){return this.el.nativeElement}updateProps(n){Object.entries(n).forEach(([e,i])=>{this.instance[e]=i})}detectChanges(){this.componentRef.changeDetectorRef.detectChanges()}destroy(){this.componentRef.destroy()}},H=class{},P=class extends ue{constructor(){super(...arguments),this.contentDOMElement=null}mount(){let n=this.options.injector,e=n.get(C),i={editor:this.editor,node:this.node,decorations:this.decorations,selected:!1,extension:this.extension,getPos:()=>this.getPos(),updateAttributes:(o={})=>this.updateAttributes(o),deleteNode:()=>this.deleteNode()};this.editor.on("selectionUpdate",this.handleSelectionUpdate.bind(this)),this.renderer=new U(this.component,n,i),this.extension.config.draggable&&(this.renderer.el.nativeElement.ondragstart=o=>{this.onDragStart(o)}),this.contentDOMElement=this.node.isLeaf?null:e.createElement(this.node.isInline?"span":"div"),this.contentDOMElement&&(this.contentDOMElement.style.whiteSpace="inherit",this.renderer.detectChanges()),this.appendContendDom()}get dom(){return this.renderer.dom}get contentDOM(){return this.node.isLeaf?null:this.contentDOMElement}update(n,e){return this.options.update?this.options.update(n,e):n.type!==this.node.type?!1:(n===this.node&&this.decorations===e||(this.node=n,this.decorations=e,this.renderer.updateProps({node:n,decorations:e}),this.appendContendDom()),!0)}handleSelectionUpdate(){let{from:n,to:e}=this.editor.state.selection;n<=this.getPos()&&e>=this.getPos()+this.node.nodeSize?this.selectNode():this.deselectNode()}selectNode(){this.renderer.updateProps({selected:!0})}deselectNode(){this.renderer.updateProps({selected:!1})}destroy(){this.renderer.destroy(),this.editor.off("selectionUpdate",this.handleSelectionUpdate.bind(this)),this.contentDOMElement=null}appendContendDom(){let n=this.dom.querySelector("[data-node-view-content]");this.contentDOMElement&&n&&!n.contains(this.contentDOMElement)&&n.appendChild(this.contentDOMElement)}};var Te=["*"],De=t=>[t,0],Re=()=>[1,0],ye=()=>[0,1];function be(t,n){if(t&1){let e=Y();g(0,"div",4),d("tuiSizeChange",function(o){L(e);let r=J();return V(r.sizeChange.emit(o))}),_()}t&2&&c("tuiResizer",x(1,ye))}var pe=(()=>{class t extends H{constructor(){super(...arguments),this.currentHeight=0,this.currentWidth=0}get attrs(){var e;return((e=this.node)===null||e===void 0?void 0:e.attrs)||{src:""}}get width(){return this.currentWidth||this.attrs.width||null}get height(){return this.currentHeight||this.attrs.height||null}}return t.\u0275fac=(()=>{let n;return function(i){return(n||(n=y(t)))(i||t)}})(),t.\u0275dir=l({type:t,features:[f]}),t})(),ge=(()=>{class t{constructor(){this.autoHeight=!1,this.width=null,this.height=null,this.sizeChange=new b}get hostWidth(){return j(this.width)?M(this.width):this.width}get hostHeight(){return this.autoHeight?null:j(this.height)?M(this.height):this.height}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=R({type:t,selectors:[["tui-editor-resizable"]],hostVars:4,hostBindings:function(e,i){e&2&&v("width",i.hostWidth)("height",i.hostHeight)},inputs:{autoHeight:"autoHeight",width:"width",height:"height"},outputs:{sizeChange:"sizeChange"},ngContentSelectors:Te,decls:5,vars:8,consts:[["tuiResizeable","",1,"t-resizable"],[1,"t-handle","t-handle-left-side",3,"tuiSizeChange","tuiResizer"],["class","t-handle t-handle-bottom-side",3,"tuiResizer","tuiSizeChange",4,"ngIf"],[1,"t-handle","t-handle-right-side",3,"tuiSizeChange","tuiResizer"],[1,"t-handle","t-handle-bottom-side",3,"tuiSizeChange","tuiResizer"]],template:function(e,i){e&1&&(K(),g(0,"div",0),Q(1),g(2,"div",1),d("tuiSizeChange",function(r){return i.sizeChange.emit(r)}),_(),q(3,be,1,2,"div",2),g(4,"div",3),d("tuiSizeChange",function(r){return i.sizeChange.emit(r)}),_()()),e&2&&(E("t-resizable-auto-height",i.autoHeight),p(2),c("tuiResizer",Z(5,De,-1)),p(),c("ngIf",!i.autoHeight),p(),c("tuiResizer",x(7,Re)))},dependencies:[W,he,ee],styles:['[_nghost-%COMP%]{position:relative;display:inline-block;box-sizing:border-box}[_nghost-%COMP%]   .t-resizable[_ngcontent-%COMP%]{box-sizing:border-box}[_nghost-%COMP%]   .t-resizable-auto-height[_ngcontent-%COMP%]{height:auto!important}[_nghost-%COMP%]   iframe[_ngcontent-%COMP%]{display:inline;pointer-events:none}[_nghost-%COMP%]:hover   .t-handle[_ngcontent-%COMP%]:after{opacity:1}.t-handle[_ngcontent-%COMP%]{position:absolute;top:0;display:flex;width:.75rem;cursor:col-resize;justify-content:center;align-items:center;height:100%}.t-handle[_ngcontent-%COMP%]:after{transition-property:opacity;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;content:"";width:50%;height:33%;box-sizing:border-box;border-radius:var(--tui-radius-m);background:var(--tui-base-08);border:1px solid var(--tui-base-03);opacity:0}.t-handle-left-side[_ngcontent-%COMP%]{left:0}.t-handle-bottom-side[_ngcontent-%COMP%]{top:unset;bottom:.3125rem;height:.95rem;width:100%}.t-handle-right-side[_ngcontent-%COMP%]{right:0}'],changeDetection:0}),t})(),fe=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=u({type:t}),t.\u0275inj=a({imports:[[w,ce,me]]}),t})();var Ie=/(?:^|\s)(!\[(.+|:?)]\((\S+)(?:(?:\s+)["'](\S+)["'])?\))$/,ve=ae.create({name:"image",addOptions(){return{inline:!1,allowBase64:!1,HTMLAttributes:{}}},inline(){return this.options.inline},group(){return this.options.inline?"inline":"block"},draggable:!0,addAttributes(){return{src:{default:null},alt:{default:null},title:{default:null}}},parseHTML(){return[{tag:this.options.allowBase64?"img[src]":'img[src]:not([src^="data:"])'}]},renderHTML({HTMLAttributes:t}){return["img",O(this.options.HTMLAttributes,t)]},addCommands(){return{setImage:t=>({commands:n})=>n.insertContent({type:this.name,attrs:t})}},addInputRules(){return[se({find:Ie,type:this.type,getAttributes:t=>{let[,,n,e,i]=t;return{src:e,alt:n,title:i}}})]}});var Ce=new D("[TUI_EDITOR_MIN_IMAGE_WIDTH]",{factory:()=>null}),we=new D("[TUI_EDITOR_MAX_IMAGE_WIDTH]",{factory:()=>null}),Oe=new D("[TUI_IMAGE_EDITOR_OPTIONS]",{factory:()=>({minWidth:null,maxWidth:1/0})}),Se=(()=>{class t extends pe{constructor(e,i,o,r,z,T,N){super(),this.legacyMinWidth=e,this.legacyMaxWidth=i,this.options=o,this.doc=r,this.sanitizer=z,this.el=T,this.win=N,this.contenteditable=!0,this.focused=!1}get dragHandle(){var e;return(e=this.attrs.draggable)!==null&&e!==void 0?e:null}get height(){return null}get alt(){return this.attrs.alt||""}get title(){return this.attrs.title||""}get src(){return this.sanitizer.bypassSecurityTrustResourceUrl(this.attrs.src)}currentTargetIsFocused(e){this.focused=this.el.nativeElement.contains(e),this.focused&&this.selectFakeText()}get minWidth(){var e;return((e=this.legacyMinWidth)!==null&&e!==void 0?e:this.options.minWidth)||0}get maxWidth(){var e;return((e=this.legacyMaxWidth)!==null&&e!==void 0?e:this.options.maxWidth)||0}updateSize([e]){this.currentWidth=Math.max(this.minWidth,Math.min(this.maxWidth,e)),this.attrs.width=this.currentWidth,this.editor.commands.setContent(this.editor.getJSON())}selectFakeText(){var e,i,o;let r=this.doc.createRange();(e=this.el.nativeElement.querySelector("p"))===null||e===void 0||e.focus(),r.selectNode(this.el.nativeElement),(i=this.win.getSelection())===null||i===void 0||i.removeAllRanges(),(o=this.win.getSelection())===null||o===void 0||o.addRange(r)}}return t.\u0275fac=function(e){return new(e||t)(s(Ce),s(we),s(Oe),s(C),s(te),s(h),s(ne))},t.\u0275cmp=R({type:t,selectors:[["tui-image-editor"]],hostVars:2,hostBindings:function(e,i){e&1&&d("click.silent",function(r){return i.currentTargetIsFocused(r.target)},!1,m),e&2&&A("contenteditable",i.contenteditable)("data-drag-handle",i.dragHandle)},features:[F([oe]),f],decls:4,vars:12,consts:[["contenteditable","false",1,"t-emulate-inline-node"],[3,"sizeChange","autoHeight","width"],["contenteditable","false",3,"alt","src","title"]],template:function(e,i){e&1&&(I(0,"p",0),g(1,"tui-editor-resizable",1),d("sizeChange",function(r){return i.updateSize(r)}),I(2,"img",2),_(),I(3,"p",0)),e&2&&(p(),c("autoHeight",!0)("width",i.width),p(),v("max-width",i.maxWidth,"px")("min-width",i.minWidth,"px"),E("ProseMirror-selectednode",i.focused),c("alt",i.alt)("src",i.src,G)("title",i.title),A("width",i.width))},dependencies:[ge],styles:["[data-drag-handle][_nghost-%COMP%]{cursor:move}img[_ngcontent-%COMP%]{pointer-events:none}.t-emulate-inline-node[_ngcontent-%COMP%]{display:inline-block;margin:0;height:0}"],changeDetection:0}),t})(),He=[{tag:"img"}],Pe={src:{default:"",keepOnSplit:!1},width:{default:null,keepOnSplit:!1},alt:{default:"",keepOnSplit:!1},title:{default:"",keepOnSplit:!1}};function _e(t){return(n,e)=>{var i;let o=e instanceof DragEvent?e.dataTransfer:e.clipboardData,r=Array.from((i=o==null?void 0:o.files)!==null&&i!==void 0?i:[]).filter(T=>/image/i.test(T.type));r.length&&e.preventDefault();let z=t.get(de);r.forEach(T=>{z(T).pipe(B(1),k(()=>!n.isDestroyed)).subscribe(N=>{let Me=n.state.schema.nodes.imageEditor.create({src:N}),ze=n.state.tr.replaceSelectionWith(Me);setTimeout==null||setTimeout(()=>{n.isDestroyed||n.dispatch(ze)})})})}}function At({injector:t,draggable:n}){return Ne(t,{draggable:n})}function Ne(t,{draggable:n}={}){let e=ie(n)?n:!0;return ve.extend({name:"image",group:"inline",inline:!0,atom:!0,priority:0,selectable:!0,draggable:e,parseHTML(){return He},addAttributes(){return Object.assign(Object.assign({},Pe),{draggable:{default:e?"":null,keepOnSplit:!1}})},renderHTML({HTMLAttributes:i}){return["img",O(i)]},addNodeView(){return i=>Reflect.construct(P,[Se,i,Object.assign({injector:t},i)])},addCommands(){return{setEditableImage:i=>({commands:o})=>o.insertContent({type:this.name,attrs:i})}},addProseMirrorPlugins(){return[new re({props:{handleDOMEvents:{paste:_e(t),drop:_e(t)}}})]}})}var Ft=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=u({type:t}),t.\u0275inj=a({imports:[[w,fe]]}),t})();export{we as TUI_EDITOR_MAX_IMAGE_WIDTH,Ce as TUI_EDITOR_MIN_IMAGE_WIDTH,Oe as TUI_IMAGE_EDITOR_OPTIONS,Se as TuiImageEditorComponent,Ft as TuiImageEditorModule,Ne as createImageEditorExtension,At as tuiCreateImageEditorExtension};
//# sourceMappingURL=chunk-NJXP5VTK.js.map
