import{$ as rt,$a as I,Aa as jt,Ac as te,B as y,Ba as Ft,Cc as ee,Da as F,Dc as x,Ea as T,Ec as G,F as ft,Fa as wt,Fc as ie,G as u,Ga as b,Gb as $,Gc as Z,Hc as oe,I as E,Ic as ne,Ie as be,J as gt,Jc as re,Kc as W,L as g,M as m,Ma as Pt,Me as Se,N as vt,Ne as He,Oc as se,Pc as Y,Q as ot,Qa as D,Qb as Wt,Qc as le,R as nt,Ra as Nt,S as j,Sa as xt,Tc as h,Ub as Yt,Va as w,Wa as L,Wb as Kt,X as ht,Xa as Rt,Xd as Te,Y as Tt,Yd as _e,Z as _t,_ as yt,_a as Et,a as mt,aa as k,ab as kt,bb as O,bc as qt,cb as P,cc as Jt,da as st,db as U,dd as ae,ea as Ct,eb as _,ec as Xt,ed as ce,fa as Mt,fb as Bt,fd as K,ga as Dt,gb as Lt,gd as pe,ge as ye,ha as It,hb as Ut,hd as q,ia as v,ib as $t,j as R,ja as r,jb as Vt,jd as ue,k as N,ka as C,kb as zt,kd as me,l as A,lb as Gt,ld as de,le as Ce,ma as Ot,md as J,nd as fe,od as ge,oe as Me,pa as a,pe as De,qa as bt,qd as ve,ra as s,rd as he,re as Ie,s as dt,sa as St,ta as B,tc as Qt,ua as p,ub as Zt,va as c,vb as lt,wa as d,wb as at,wc as V,xa as Ht,xb as ct,xc as z,ya as At,yb as pt,ye as Oe,za as M}from"./chunk-DTHNS3XT.js";function Ze(t,i){if(t&1&&(M(0,3),w(1,"tuiMapper")),t&2){let e=i.$implicit,o=T(2);s("ngComponentOutlet",e.component.component)("ngComponentOutletInjector",Rt(1,2,e,o.mapper))}}function We(t,i){if(t&1&&(p(0,"div",1),a(1,Ze,2,5,"ng-container",2),c()),t&2){let e=i.$implicit;s("@tuiParentAnimation",void 0),v(),s("ngForOf",e)}}var Ae=(()=>{class t{constructor(e,o,n,l){this.allAlerts=e,this.injector=o,this.destroy$=n,this.cdr=l,this.alerts=[],this.trackBy=f=>f,this.mapper=f=>_t.create({providers:[{provide:Qt,useValue:f}],parent:this.injector})}ngOnInit(){A(this.allAlerts).pipe(y(this.destroy$)).subscribe(e=>{this.alerts=e,this.cdr.detectChanges()})}}return t.\u0275fac=function(e){return new(e||t)(r(re),r(ht),r(h,2),r(C))},t.\u0275cmp=g({type:t,selectors:[["tui-alert-host"]],features:[D([h])],decls:1,vars:2,consts:[["class","t-wrapper",4,"ngFor","ngForOf","ngForTrackBy"],[1,"t-wrapper"],[3,"ngComponentOutlet","ngComponentOutletInjector",4,"ngFor","ngForOf"],[3,"ngComponentOutlet","ngComponentOutletInjector"]],template:function(e,o){e&1&&a(0,We,2,2,"div",0),e&2&&s("ngForOf",o.alerts)("ngForTrackBy",o.trackBy)},dependencies:[O,kt,ae],styles:["tui-alert-host>.t-wrapper{position:fixed;top:0;left:0;display:flex;width:100%;height:100%;flex-direction:column;pointer-events:none}tui-alert-host>.t-wrapper>*{pointer-events:auto}\n"],encapsulation:2,data:{animation:[$]}}),t})(),je=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=m({type:t}),t.\u0275inj=u({imports:[[_,ce]]}),t})();var Fe=(()=>{class t{constructor(e,o,n){this.doc=e,this.el=o,this.renderer=n,this.activeElement=qt(this.doc),Promise.resolve().then(()=>this.el.nativeElement.focus())}onBlur(){this.renderer.removeAttribute(this.el.nativeElement,"tabIndex")}onFocusIn(e){let{nativeElement:o}=this.el;if(Yt(o,e))return;let n=Xt({initial:o,root:o});n&&n.focus()}ngOnDestroy(){Jt(this.doc),Promise.resolve().then(()=>{Kt(this.activeElement)&&this.activeElement.focus()})}}return t.\u0275fac=function(e){return new(e||t)(r(I),r(Mt),r(It))},t.\u0275dir=vt({type:t,selectors:[["","tuiFocusTrap",""]],hostAttrs:["tabIndex","0"],hostBindings:function(e,o){e&1&&F("blur",function(){return o.onBlur()})("focusin.silent",function(l){return o.onFocusIn(l.target)},!1,k)}}),t})(),we=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=m({type:t}),t.\u0275inj=u({}),t})();function Ke(t,i){t&1&&M(0)}function qe(t,i){t&1&&d(0,"tui-scroll-controls",5)}function Je(t,i){if(t&1&&(p(0,"section",2),a(1,Ke,1,0,"ng-container",3)(2,qe,1,0,"tui-scroll-controls",4),c()),t&2){let e=i.$implicit,o=T();s("@host",void 0),bt("aria-labelledby",e.id),v(),s("polymorpheusOutlet",e.component)("polymorpheusOutletContext",e),v(),s("ngIf",!o.isMobile)}}function Xe(t,i){if(t&1){let e=jt();p(0,"div",6),F("transitionend",function(n){let f=ot(e).tuiLet,H=T();return nt(H.onDialog(n,!!H.dialogs.length,!!f))})("popstate",function(){let l=ot(e).tuiLet,f=T();return nt(f.closeLast(f.dialogs,!!l))},!1,k),c()}if(t&2){let e=T();B("t-overlay_visible",e.dialogs.length)}}var ut={label:"ignoreMe"},Qe=t=>(t==null?void 0:t.label)===ut.label,ti=Wt(R(!1)),Pe=(()=>{class t{constructor(e,o,n,l,f,H,tt,et){this.isMobile=e,this.isDialogClosesOnBack$=o,this.dialogsByType=n,this.historyRef=l,this.titleService=f,this.destroy$=H,this.cdr=tt,this.doc=et,this.dialogs=[]}ngOnInit(){A(this.dialogsByType).pipe(N(e=>[].concat(...e).sort((o,n)=>o.createdAt-n.createdAt)),y(this.destroy$)).subscribe(e=>{this.dialogs=e,this.cdr.markForCheck(),this.doc.documentElement.classList.toggle("t-overscroll-none",!!e.length)})}closeLast(e,o){if(!o)return;let[n]=e.slice(-1);n&&(e.length>1&&this.historyRef.pushState(ut,this.titleService.getTitle()),n.$implicit.complete())}onDialog({propertyName:e},o,n){!n||e!=="letter-spacing"||(o?this.historyRef.pushState(ut,this.titleService.getTitle()):Qe(this.historyRef.state)&&this.historyRef.back())}}return t.\u0275fac=function(e){return new(e||t)(r(Y),r(ti),r(W),r(te),r($t),r(h,2),r(C),r(I))},t.\u0275cmp=g({type:t,selectors:[["tui-dialog-host"]],features:[D([h])],decls:3,vars:4,consts:[["aria-modal","true","role","dialog","tuiFocusTrap","","tuiOverscroll","all","tuiScrollRef","","class","t-dialog",4,"ngFor","ngForOf"],["class","t-overlay",3,"t-overlay_visible","transitionend","popstate",4,"tuiLet"],["aria-modal","true","role","dialog","tuiFocusTrap","","tuiOverscroll","all","tuiScrollRef","",1,"t-dialog"],[4,"polymorpheusOutlet","polymorpheusOutletContext"],["class","t-scrollbars",4,"ngIf"],[1,"t-scrollbars"],[1,"t-overlay",3,"transitionend","popstate"]],template:function(e,o){e&1&&(a(0,Je,3,5,"section",0)(1,Xe,1,2,"div",1),w(2,"async")),e&2&&(s("ngForOf",o.dialogs),v(),s("tuiLet",L(2,2,o.isDialogClosesOnBack$)))},dependencies:[K,O,Fe,fe,pe,V,P,de,U],styles:["[_nghost-%COMP%]{position:fixed;left:0;bottom:0;width:100%;height:0}.t-overlay[_ngcontent-%COMP%], .t-dialog[_ngcontent-%COMP%]{position:fixed;top:0;left:0;right:0;bottom:0;display:flex;align-items:flex-start;outline:none;overflow:auto;scrollbar-width:none;-ms-overflow-style:none}.t-overlay.ng-animating[_ngcontent-%COMP%], .t-dialog.ng-animating[_ngcontent-%COMP%]{overflow:clip}.t-overlay[_ngcontent-%COMP%]::-webkit-scrollbar, .t-dialog[_ngcontent-%COMP%]::-webkit-scrollbar, .t-overlay[_ngcontent-%COMP%]::-webkit-scrollbar-thumb, .t-dialog[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background:transparent;width:0;height:0}.t-dialog[_ngcontent-%COMP%]{bottom:auto;height:100%}.t-overlay[_ngcontent-%COMP%]{height:100%;pointer-events:none;touch-action:none;opacity:0;letter-spacing:normal;transition:opacity var(--tui-duration, .3s),letter-spacing .01s;background:rgba(0,0,0,.75);-webkit-backdrop-filter:var(--tui-backdrop, none);backdrop-filter:var(--tui-backdrop, none)}.t-overlay_visible[_ngcontent-%COMP%]{opacity:1;letter-spacing:1px}.t-dialog[_ngcontent-%COMP%]:last-of-type{z-index:1}.t-scrollbars[_ngcontent-%COMP%]{position:fixed;top:0;left:0;right:0;bottom:0;margin:0;color:#747474}"],data:{animation:[Zt("host",[at(":enter",[lt({overflow:"clip"}),pt(":scope > *",[ct()],{optional:!0})]),at(":leave",[lt({overflow:"clip"}),pt(":scope > *",[ct()],{optional:!0})])])]}}),t})(),Ne=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=m({type:t}),t.\u0275inj=u({imports:[[_,z,ge,we,J,q]]}),t})();function ii(t,i){t&1&&M(0)}var oi=t=>({$implicit:t});function ni(t,i){if(t&1&&(p(0,"div",1),a(1,ii,1,0,"ng-container",2),c()),t&2){let e=i.$implicit;s("@tuiParentAnimation",void 0)("tuiActiveZoneParent",e.activeZone||null),v(),s("polymorpheusOutlet",e.component)("polymorpheusOutletContext",xt(4,oi,e))}}var xe=(()=>{class t{constructor(e,o,n){this.hints$=e,this.destroy$=o,this.cdr=n,this.hints=[]}ngOnInit(){this.hints$.pipe(y(this.destroy$)).subscribe(e=>{this.hints=e,this.cdr.detectChanges()})}}return t.\u0275fac=function(e){return new(e||t)(r(De),r(h,2),r(C))},t.\u0275cmp=g({type:t,selectors:[["tui-hints-host"]],hostAttrs:["aria-live","polite"],features:[D([h])],decls:1,vars:1,consts:[["role","tooltip",3,"tuiActiveZoneParent",4,"ngFor","ngForOf"],["role","tooltip",3,"tuiActiveZoneParent"],[4,"polymorpheusOutlet","polymorpheusOutletContext"]],template:function(e,o){e&1&&a(0,ni,2,6,"div",0),e&2&&s("ngForOf",o.hints)},dependencies:[O,ue,V],styles:["[_nghost-%COMP%]{position:fixed;top:0;left:0;width:100%;height:0}"],data:{animation:[$]}}),t})(),Re=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=m({type:t}),t.\u0275inj=u({imports:[[_,z,me]]}),t})();function si(t,i){if(t&1&&(j(),d(0,"defs",4)),t&2){let e=i.$implicit;s("innerHTML",e,st)}}function li(t,i){if(t&1&&(j(),Ht(0),a(1,si,1,1,"defs",3),At()),t&2){let e=T();v(),s("ngForOf",e.items)}}function ai(t,i){if(t&1&&(j(),p(0,"defs"),d(1,"svg",6),c()),t&2){let e=i.$implicit;v(),s("outerHTML",e,st)}}function ci(t,i){if(t&1&&(j(),a(0,ai,2,1,"defs",5)),t&2){let e=T();s("ngForOf",e.items)}}var Ee=(()=>{class t{constructor(e,o,n,l){this.svgService=e,this.cdr=o,this.destroy$=n,this.isBrowser=!0,this.isBrowser=!Bt(l)}ngOnInit(){this.svgService.items$.pipe(y(this.destroy$)).subscribe(e=>{this.items=e.values(),this.cdr.detectChanges()})}}return t.\u0275fac=function(e){return new(e||t)(r(Ie),r(C),r(h,2),r(yt))},t.\u0275cmp=g({type:t,selectors:[["tui-svg-defs-host"]],features:[D([h])],decls:4,vars:2,consts:[["version","1.1",0,"xmlns","xlink","http://www.w3.org/1999/xlink","xmlns","http://www.w3.org/2000/svg"],[4,"ngIf","ngIfElse"],["server",""],[3,"innerHTML",4,"ngFor","ngForOf"],[3,"innerHTML"],[4,"ngFor","ngForOf"],[3,"outerHTML"]],template:function(e,o){if(e&1&&(j(),p(0,"svg",0),a(1,li,2,1,"ng-container",1)(2,ci,1,1,"ng-template",null,2,Et),c()),e&2){let n=Pt(3);v(),s("ngIf",o.isBrowser)("ngIfElse",n)}},dependencies:[P,O],styles:["[_nghost-%COMP%]{display:none}"],changeDetection:0}),t})(),ke=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=m({type:t}),t.\u0275inj=u({imports:[[_,J]]}),t})();function ui(t,i){t&1&&d(0,"tui-scroll-controls",2)}var mi=["*",[["tuiOverContent"]],[["tuiOverDialogs"]],[["tuiOverAlerts"]],[["tuiOverPortals"]],[["tuiOverHints"]]],di=["*","tuiOverContent","tuiOverDialogs","tuiOverAlerts","tuiOverPortals","tuiOverHints"],Be=(()=>{class t{constructor(e,o,n,l,f,H,tt,{body:et},ze){this.reducedMotion=e,this.duration=o,this.dialogs=n,this.isMobile=l,this.breakpoint=f,this.isIOS=H,this.isAndroid=tt,this.isMobileRes$=this.breakpoint.pipe(N(it=>it==="mobile")),this.scrollbars$=this.dialogs.length&&!this.isMobile?A([...this.dialogs]).pipe(N(it=>!it.some(({length:Ge})=>Ge)),dt(0)):R(!this.isMobile),et.setAttribute("data-tui-theme",ze.toLowerCase())}}return t.\u0275fac=function(e){return new(e||t)(r(Te),r(_e),r(W),r(Y),r(Me),r(se),r(le),r(I),r(Ce))},t.\u0275cmp=g({type:t,selectors:[["tui-root"]],hostAttrs:["data-tui-version","3.63.0"],hostVars:9,hostBindings:function(e,o){e&1&&F("$.class._mobile",function(){return o.isMobileRes$}),e&2&&(Ft("$.class._mobile",o.isMobileRes$),St("--tui-duration",o.duration,"ms"),B("_ios",o.isIOS)("_android",o.isAndroid)("_reduced-motion",o.reducedMotion))},ngContentSelectors:di,decls:14,vars:3,consts:[["class","t-root-scrollbar",4,"ngIf"],[1,"t-root-content"],[1,"t-root-scrollbar"]],template:function(e,o){e&1&&(wt(mi),a(0,ui,1,0,"tui-scroll-controls",0),w(1,"async"),d(2,"tui-svg-defs-host"),p(3,"tui-dropdown-host")(4,"div",1),b(5),c(),b(6,1),d(7,"tui-dialog-host"),b(8,2),d(9,"tui-alert-host"),b(10,3),c(),b(11,4),d(12,"tui-hints-host"),b(13,5)),e&2&&s("ngIf",L(1,1,o.scrollbars$))},dependencies:[K,Ee,ve,Pe,Ae,xe,P,U],styles:['@keyframes tuiPresent{to{content:"1"}}@keyframes tuiSkeletonVibe{to{opacity:.5}}html,.tui-zero-scrollbar{scrollbar-width:none;-ms-overflow-style:none}html::-webkit-scrollbar,.tui-zero-scrollbar::-webkit-scrollbar,html::-webkit-scrollbar-thumb,.tui-zero-scrollbar::-webkit-scrollbar-thumb{background:transparent;width:0;height:0}body[data-tui-theme]{font:var(--tui-font-text-s);color:var(--tui-text-01);background:var(--tui-base-01);margin:0}tui-root{position:relative;display:block;flex:1;-webkit-tap-highlight-color:transparent}tui-root>.t-root-scrollbar{position:fixed;top:0;left:0;bottom:0;right:0;margin:0}.t-root-content{height:100%;isolation:isolate}.t-overscroll-none{overscroll-behavior:none}\n'],encapsulation:2}),t})(),Q=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=m({type:t}),t.\u0275inj=u({imports:[[_,Oe,he,ke,Re,Ne,je,q]]}),t})();var Le=(()=>{let i=class i{};i.\u0275fac=function(n){return new(n||i)},i.\u0275cmp=g({type:i,selectors:[["app"]],standalone:!0,features:[Nt],decls:7,vars:0,consts:[["ngProjectAs","tuiOverContent",5,["tuiOverContent"]],["ngProjectAs","tuiOverDialogs",5,["tuiOverDialogs"]],["ngProjectAs","tuiOverAlerts",5,["tuiOverAlerts"]],["ngProjectAs","tuiOverPortals",5,["tuiOverPortals"]],["ngProjectAs","tuiOverHints",5,["tuiOverHints"]]],template:function(n,l){n&1&&(p(0,"tui-root"),d(1,"router-outlet"),M(2,0)(3,1)(4,2)(5,3)(6,4),c())},dependencies:[Q,Be,zt],encapsulation:2,changeDetection:0});let t=i;return t})();var fi=(()=>{let i=class i extends Z{constructor(o,n,l){super(o,n,l,gt(Ct,{optional:!0}))}ngOnDestroy(){this.flush()}};i.\u0275fac=function(n){return new(n||i)(E(I),E(x),E(G))},i.\u0275prov=ft({token:i,factory:i.\u0275fac});let t=i;return t})();function gi(){return new ie}function vi(t,i,e){return new ne(t,i,e)}var Ue=[{provide:G,useFactory:gi},{provide:Z,useClass:fi},{provide:Dt,useFactory:vi,deps:[Lt,Z,Ot]}],hi=[{provide:x,useFactory:()=>new oe},{provide:rt,useValue:"BrowserAnimations"},...Ue],nn=[{provide:x,useClass:ee},{provide:rt,useValue:"NoopAnimations"},...Ue];function $e(){return[...hi]}var Ve={providers:[$e(),Gt([{path:"",pathMatch:"full",loadComponent:()=>mt(void 0,null,function*(){return import("./chunk-HV6BZGR2.js")})}]),Vt(),Tt(Q,be,Se),{provide:ye,useClass:He}]};Ut(Le,Ve).catch(t=>console.error(t));
//# sourceMappingURL=main-K2HR374H.js.map