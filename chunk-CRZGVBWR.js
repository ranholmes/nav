import{a as ee}from"./chunk-EFG6AXBF.js";import{b as Y}from"./chunk-A2TDJE72.js";import"./chunk-EFUDVGLM.js";import{i as X}from"./chunk-R6KXI4MF.js";import"./chunk-FU7N34AT.js";import{Jb as Z,gb as U,hb as j,jb as G,kb as K}from"./chunk-FAP22HFQ.js";import{Jb as R,Xb as _,Yb as L,Zb as $,bc as V,be as J,ec as B,hb as q,he as P,ke as d,lb as z,lc as W,mc as F,nc as H,oe as b,qb as D,sc as Q,uc as O,xa as C,xb as x,ya as I}from"./chunk-PETYL577.js";var p=J(),E=s=>(s.textContent||"").trim(),te=s=>(s.getAttribute("href")||"").trim(),ie=s=>(s.getAttribute("icon")||"").trim();function A(s){let c=[];return Array.from(s.children).forEach(e=>{if(e.nodeName==="DT"){let o=e.firstElementChild;o?.nodeName==="A"&&c.push({name:E(o),icon:ie(o),url:te(o),tags:[],desc:"",rate:5,id:p+=1,breadcrumb:[]})}}),c}function oe(s){let c=JSON.parse(JSON.stringify(P)),e=[],o=document.createElement("div");o.innerHTML=s;let l=o.querySelector("dl dl");if(!l)return{message:"\u672A\u627E\u5230dl dl\u8282\u70B9"};try{let h=function(m,a){Array.from(m.children).forEach(t=>{if(t.nodeName==="DT"){let r=t.querySelector("a");r&&a.nav.push({name:E(r),url:te(r),desc:"",tags:[],rate:5,top:!1,icon:ie(r),id:p+=1,breadcrumb:[]})}})},u=function(m,a){Array.from(m.children).forEach((t,r)=>{if(t.nodeName==="DT"){let v=t.querySelector("h3");if(v){let i=E(v);a.nav.some(S=>S.title===i)&&(i=i+r);let f={id:p+=1,title:i,nav:[],icon:""};a.nav.push(f);let k=t.querySelector("dl");k&&h(k,f)}}})},N=function(m,a){Array.from(m.children).forEach((t,r)=>{if(t.nodeName==="DT"){let v=t.querySelector("h3");if(v){let i=E(v);a.nav.some(S=>S.title===i)&&(i=i+r);let f={id:p+=1,title:i,icon:"",nav:[]};a.nav.push(f);let k=t.querySelector("dl");if(k){let S=A(k);S.length>0&&f.nav.push({id:p+=1,title:i,icon:"",nav:S}),u(k,f)}}}})};var w=h,g=u,ne=N;Array.from(l.children).forEach((m,a)=>{if(m.nodeName==="DT"){let t=m.querySelector("h3");if(t){let r=E(t);e.some(f=>f.title===r)&&(r=r+a);let i={id:p+=1,title:r,icon:"",nav:[]};e.push(i);let T=m.querySelector("dl");if(T){let f=A(T);f.length>0&&i.nav.push({id:p+=1,title:r,icon:"",nav:[{id:p+=1,title:r,icon:"",nav:f}]}),N(T,i)}}}});let n=A(l);n.length>0&&e.push({id:p+=1,title:d("_uncategorized"),icon:"",nav:[{id:p+=1,title:d("_uncategorized"),icon:"",nav:[{id:p+=1,title:d("_uncategorized"),icon:"",nav:n}]}]})}catch(h){throw console.log(h),h}function y(h,u){for(let N=0;N<h.length;N++){let n=h[N],m=(n.title||b(n.url)).trim(),a=u.findIndex(t=>(t.title||b(t.url)).trim()===m);if(a!==-1)Array.isArray(n.nav)&&y(n.nav,u[a].nav);else{let t=b((n.url||"").trim());n.url&&(u.some(i=>b(i.url).trim()===t)||u.push(n));let r=(n.title||"").trim();n.title&&(u.some(i=>i.title?.trim()===r)||u.push(n))}}}return y(e,c),c}var re=["file"],M=class s{constructor(c,e){this.message=c;this.notification=e}file;$t=d;websiteList=P;ngOnInit(){}onClickFile(){this.file.nativeElement.click()}onBookChange(c){let e=this,{files:o}=c.target;if(o.length<=0)return;let l=o[0],y=new FileReader;y.readAsText(l),y.onload=function(){let w=this.result;try{let g=oe(w);Array.isArray(g)?(e.message.success(d("_importSuccess")),e.websiteList=g,Y(e.websiteList),setTimeout(()=>window.location.reload(),2e3)):e.notification.error(d("_errorBookTip"),`${g?.message??""}`)}catch(g){e.notification.error(d("_errorBookTip"),`${g.message}`)}}}static \u0275fac=function(e){return new(e||s)(D(Z),D(ee))};static \u0275cmp=x({type:s,selectors:[["system-bookmark"]],viewQuery:function(e,o){if(e&1&&W(re,5),e&2){let l;F(l=H())&&(o.file=l.first)}},decls:6,vars:2,consts:[["file",""],[1,"text-center"],[1,"mb-4",3,"innerHTML"],["nz-button","","nzType","primary",3,"click"],["type","file","accept","text/html",1,"!hidden",3,"change"]],template:function(e,o){if(e&1){let l=V();_(0,"div",1),$(1,"div",2),_(2,"button",3),B("click",function(){return C(l),I(o.onClickFile())}),Q(3),L(),_(4,"input",4,0),B("change",function(w){return C(l),I(o.onBookChange(w))}),L()()}e&2&&(z(),R("innerHTML",o.$t("_importEnter"),q),z(2),O(" ",o.$t("_upload")," "))},dependencies:[X,K,G,U,j],encapsulation:2})};export{M as default};
