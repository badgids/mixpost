import{r as V,j as B,_ as Q,o as l,c,b as _,g as R,n as S,u as v,h as y,F as x,G as H,m as b,w as t,a as s,t as D,f as m,e as O,k as z,p as M,B as N,L as W,x as X,q as j,y as Y,s as L,d as T,H as Z,l as A}from"./app.49d6203c.js";import{u as ee}from"./useNotifications.345c9a11.js";import{l as I}from"./helpers.9ad02fa8.js";import{_ as te}from"./PageHeader.6ddc473d.js";import{_ as U,a as se,C as le,b as oe}from"./PostsFilter.6c8e0445.js";import{T as ae,_ as P}from"./Tab.11c51d57.js";import{_ as ne}from"./PrimaryButton.5b6a7a61.js";import{_ as q}from"./Checkbox.73b2c3c5.js";import{_ as ie,a as ce}from"./PureDangerButton.268d794b.js";import{d as re,a as de,T as ue,c as me}from"./Alert.1a21492b.js";import{u as fe}from"./SearchInput.d7be5bcd.js";import{_ as pe,a as _e}from"./NoResult.6ddea1de.js";import{a as E,e as ve,d as he,_ as ge,c as $e,b as ye}from"./VerticallyScrollableContent.ec2d53b4.js";import{a as be,_ as ke}from"./DropdownItem.d3b8a1ab.js";import{_ as F}from"./Account.955c5c49.js";import"./EllipsisVertical.a5855e25.js";import"./ProviderIcon.6f24b35f.js";import"./Facebook.bb37fb73.js";import"./Input.a6b9bc44.js";import"./ExclamationCircle.c602987a.js";const xe=()=>{const e=V([]),o=V([]),d=B({get(){return C(e.value)},set(){const a=e.value;if(C(a)){i(a);return}u(a)}}),h=a=>{e.value=a},u=a=>{for(const n of a)k(n)||o.value.push(n)},f=a=>{let n=o.value.indexOf(a);n!==-1&&o.value.splice(n,1)},i=a=>{for(const n of a)f(n)},w=()=>{o.value=[]},k=a=>o.value.includes(a),C=a=>a.length?a.every(n=>k(n)):!1;return{selectedRecords:o,toggleSelectRecordsOnPage:d,putPageRecords:h,deselectRecord:f,deselectAllRecords:w}},we={},Ce={class:"flex flex-col overflow-x-hidden overflow-y-hidden"},De={class:"-m-1.5 overflow-x-auto"},Re={class:"p-1.5 min-w-full inline-block align-middle overflow-hidden"},Se={class:"min-w-full divide-y divide-gray-200 border-collapse"},Pe={class:"divide-y divide-gray-100"};function Oe(e,o){return l(),c("div",Ce,[_("div",De,[_("div",Re,[_("table",Se,[_("thead",null,[R(e.$slots,"head")]),_("tbody",Pe,[R(e.$slots,"body")])])])])])}const Ve=Q(we,[["render",Oe]]),G={__name:"TableRow",props:{hoverable:{type:Boolean,default:!1}},setup(e){return(o,d)=>(l(),c("tr",{class:S({"bg-white hover:bg-gray-50 transition-colors ease-in-out duration-200":e.hoverable})},[R(o.$slots,"default")],2))}},Be=["scope"],Ie=["role"],$={__name:"TableCell",props:{component:{type:String,default:"td"},scope:{type:String},class:{type:String},align:{type:String,default:"left"},clickable:{type:Boolean,default:!1}},emits:["click"],setup(e){const o=e,d="px-lg py-sm",h=B(()=>({left:"text-left",right:"text-right"})[o.align]);return(u,f)=>(l(),c(x,null,[e.component==="th"?(l(),c("th",{key:0,scope:e.scope,class:S([[o.class,v(h),d],"font-medium"])},[R(u.$slots,"default")],10,Be)):y("",!0),e.component==="td"?(l(),c("td",{key:1,class:S([o.class,v(h),d]),onClick:f[0]||(f[0]=()=>{e.clickable&&u.$emit("click")}),role:e.clickable?"button":"cell"},[R(u.$slots,"default")],10,Ie)):y("",!0)],64))}},Ne={class:"w-44"},je={key:0,class:"text-sm mt-xs text-gray-500"},Le={key:1,class:"text-sm mt-xs text-gray-500"},Te={class:"w-96 text-left break-words"},Ae={key:0,class:"w-48 flex relative"},Ue={key:0,class:"absolute top-0 -right-5 z-10"},qe={class:"flex flex-wrap gap-xs"},Ee={class:"flex gap-xs"},Fe={class:"mr-xs"},He={class:"text-left"},ze={class:"mr-xs"},Me=m("Close"),Ge={__name:"PostItem",props:{item:{type:Object,required:!0},filter:{type:Object,default:{accounts:[]}}},setup(e){const o=e,{getOriginalVersion:d,getAccountVersion:h}=fe(),u=B(()=>{if(!o.item.versions.length)return{excerpt:"",media:null,media_count:0};let k=o.item.accounts;o.filter.accounts.length&&(k=k.filter(n=>o.filter.accounts.includes(n.id)));const C=k.map(n=>{const g=h(o.item.versions,n.id);return g?g.content[0]:d(o.item.versions).content[0]}),a=C.length?C[0]:o.item.versions[0].content[0];return{excerpt:a.excerpt,media:a.media.length?a.media[0]:null,media_count:a.media.length}}),f=V(!1),i=()=>{f.value=!0},w=()=>{f.value=!1};return(k,C)=>{const a=H("tooltip");return l(),b(G,{hoverable:!0},{default:t(()=>[s($,{class:"w-10"},{default:t(()=>[R(k.$slots,"checkbox")]),_:3}),s($,{clickable:!0,onClick:i},{default:t(()=>[_("div",Ne,[s(E,{value:e.item.status},null,8,["value"]),e.item.status==="SCHEDULED"?(l(),c("div",je,D(e.item.scheduled_at.human),1)):y("",!0),e.item.status==="PUBLISHED"?(l(),c("div",Le,D(e.item.published_at.human),1)):y("",!0)])]),_:1}),s($,{clickable:!0,onClick:i,class:"!pl-0"},{default:t(()=>[_("div",Te,D(v(u).excerpt),1)]),_:1}),s($,{clickable:!0,onClick:i},{default:t(()=>[v(u).media?(l(),c("div",Ae,[v(u).media?(l(),b(pe,{key:0,media:v(u).media,"img-height":"sm"},{default:t(()=>[v(u).media_count>1?(l(),c("div",Ue,[s(ve,null,{default:t(()=>[m("+"+D(v(u).media_count-1),1)]),_:1})])):y("",!0)]),_:1},8,["media"])):y("",!0)])):y("",!0)]),_:1}),s($,{clickable:!0,onClick:i},{default:t(()=>[_("div",qe,[(l(!0),c(x,null,O(e.item.tags,n=>(l(),b(he,{key:n.id,item:n,removable:!1,editable:!1},null,8,["item"]))),128))])]),_:1}),s($,null,{default:t(()=>[_("div",Ee,[(l(!0),c(x,null,O(e.item.accounts.slice(0,3),(n,g)=>(l(),c("div",{key:n.id,class:S({"-ml-6":g>0})},[z(s(F,{provider:n.provider,"img-url":n.image,active:!0},null,8,["provider","img-url"]),[[a,n.name]])],2))),128)),e.item.accounts.length>3?(l(),b(be,{key:0,"width-classes":"w-64",placement:"bottom-end"},{trigger:t(()=>[s(ge,{class:"mt-4 font-semibold"},{default:t(()=>[m("+"+D(e.item.accounts.slice(3).length),1)]),_:1})]),content:t(()=>[s($e,null,{default:t(()=>[(l(!0),c(x,null,O(e.item.accounts.slice(3),n=>(l(),b(ke,{as:"div"},{default:t(()=>[_("span",Fe,[s(F,{provider:n.provider,"img-url":n.image,active:!0},null,8,["provider","img-url"])]),_("span",He,D(n.name),1)]),_:2},1024))),256))]),_:1})]),_:1})):y("",!0)])]),_:1}),s($,null,{default:t(()=>[s(U,{"item-id":e.item.id},null,8,["item-id"])]),_:1}),s(re,{show:f.value,scrollableBody:!0,onClose:w},{body:t(()=>[s(E,{value:e.item.status,class:"mb-lg"},null,8,["value"]),f.value?(l(),b(ye,{key:0,accounts:e.item.accounts,"selected-accounts":e.item.accounts.map(n=>n.id),versions:e.item.versions},null,8,["accounts","selected-accounts","versions"])):y("",!0)]),footer:t(()=>[f.value?(l(),c(x,{key:0},[_("div",ze,[s(U,{"item-id":e.item.id},null,8,["item-id"])]),s(M,{onClick:w},{default:t(()=>[Me]),_:1})],64)):y("",!0)]),_:1},8,["show"])]),_:3})}}},Je={class:"bg-white border border-gray-100 rounded-lg p-sm w-fit"},Ke={class:"flex flex-wrap items-center space-x-1"},Qe={__name:"Pagination",props:{meta:{type:Object,default:{current_page:1,from:1,last_page:1,per_page:2,to:1,total:0,links:[]}},links:{type:Object,default:{first:null,last:null,next:null,prev:null}}},setup(e){const o=e,d="px-sm py-xs rounded-md leading-4",h=B(()=>o.meta.links.map(u=>{const f=u.label.replace("&laquo; ","").replace(" &raquo;","");return{active:u.active,url:u.url,label:f,component:isNaN(parseInt(u.label))?{Next:se,Previous:le}[f]:null}}));return(u,f)=>(l(),c("div",Je,[_("div",Ke,[(l(!0),c(x,null,O(v(h),(i,w)=>(l(),c(x,null,[i.url===null?(l(),c("div",{key:w,class:S([[d,{"!px-0":i.label==="...","!px-xs":i.component}],"text-gray-400"])},[i.component?(l(),b(N(i.component),{key:0})):(l(),c(x,{key:1},[m(D(i.label),1)],64))],2)):(l(),b(v(W),{key:`link-${w}`,disabled:"",class:S(["transition-colors ease-in-out duration-200",[d,{"bg-indigo-500 text-white":i.active,"hover:text-indigo-500 focus:text-indigo-500":!i.active,"!px-xs":i.component}]]),href:i.url},{default:t(()=>[i.component?(l(),b(N(i.component),{key:0})):(l(),c(x,{key:1},[m(D(i.label),1)],64))]),_:2},1032,["class","href"]))],64))),256))])]))}},We={class:"row-py mb-2xl"},Xe={class:"w-full row-px"},Ye=m("All"),Ze=m("Drafts"),et=m("Scheduled"),tt=m("Published"),st=m("Failed"),lt={class:"w-full row-px mt-lg"},ot=m("Status"),at=m("Content"),nt=m("Media"),it=m("Labels"),ct=m("Accounts"),rt=m("No posts found."),dt={key:0,class:"mt-lg"},ut=m(" Delete posts "),mt=m(" Are you sure you want to delete selected posts? "),ft=m("Cancel"),pt=m("Delete"),jt={__name:"Index",props:{filter:{type:Object,default:{}},posts:{type:Object},has_failed_posts:{type:Boolean,default:!1}},setup(e){const o=e,d=V({keyword:o.filter.keyword,status:o.filter.status,tags:o.filter.tags,accounts:o.filter.accounts}),{selectedRecords:h,putPageRecords:u,toggleSelectRecordsOnPage:f,deselectRecord:i,deselectAllRecords:w}=xe(),k=()=>o.posts.data.map(g=>g.id);X(()=>{u(k()),j.on("postDelete",g=>{i(g)})}),Y(()=>{j.off("postDelete")}),L(()=>I.exports.cloneDeep(d.value),I.exports.throttle(()=>{T.Inertia.get(route("mixpost.posts.index"),I.exports.pickBy(d.value),{preserveState:!0,only:["posts","filter"]})},300)),L(()=>o.posts.data,()=>{u(k())});const{notify:C}=ee(),a=V(!1),n=()=>{T.Inertia.delete(route("mixpost.posts.multipleDelete"),{data:{posts:h.value,status:d.value.status},onSuccess(){w(),C("success","Selected posts deleted")},onFinish(){a.value=!1}})};return(g,r)=>{const J=H("tooltip");return l(),c(x,null,[s(v(Z),{title:"Posts"}),_("div",We,[s(te,{title:"Posts"},{default:t(()=>[s(oe,{modelValue:d.value,"onUpdate:modelValue":r[0]||(r[0]=p=>d.value=p),class:"ml-2"},null,8,["modelValue"])]),_:1}),_("div",Xe,[s(ae,null,{default:t(()=>[s(P,{onClick:r[1]||(r[1]=p=>d.value.status=null),active:!g.$page.props.filter.status},{default:t(()=>[Ye]),_:1},8,["active"]),s(P,{onClick:r[2]||(r[2]=p=>d.value.status="draft"),active:g.$page.props.filter.status==="draft"},{default:t(()=>[Ze]),_:1},8,["active"]),s(P,{onClick:r[3]||(r[3]=p=>d.value.status="scheduled"),active:g.$page.props.filter.status==="scheduled"},{default:t(()=>[et]),_:1},8,["active"]),s(P,{onClick:r[4]||(r[4]=p=>d.value.status="published"),active:g.$page.props.filter.status==="published"},{default:t(()=>[tt]),_:1},8,["active"]),e.has_failed_posts?(l(),b(P,{key:0,onClick:r[5]||(r[5]=p=>d.value.status="failed"),active:g.$page.props.filter.status==="failed",class:"text-red-500"},{default:t(()=>[st]),_:1},8,["active"])):y("",!0)]),_:1})]),_("div",lt,[s(ie,{count:v(h).length,onClose:v(w)},{default:t(()=>[z((l(),b(ce,{onClick:r[6]||(r[6]=p=>a.value=!0)},{default:t(()=>[s(ue)]),_:1})),[[J,"Delete"]])]),_:1},8,["count","onClose"]),s(ne,{"with-padding":!1},{default:t(()=>[s(Ve,null,{head:t(()=>[s(G,null,{default:t(()=>[s($,{component:"th",scope:"col",class:"w-10"},{default:t(()=>[s(q,{checked:v(f),"onUpdate:checked":r[7]||(r[7]=p=>A(f)?f.value=p:null),disabled:!e.posts.meta.total},null,8,["checked","disabled"])]),_:1}),s($,{component:"th",scope:"col",class:"w-44"},{default:t(()=>[ot]),_:1}),s($,{component:"th",scope:"col",class:"!pl-0 text-left"},{default:t(()=>[at]),_:1}),s($,{component:"th",scope:"col",class:"w-48"},{default:t(()=>[nt]),_:1}),s($,{component:"th",scope:"col"},{default:t(()=>[it]),_:1}),s($,{component:"th",scope:"col"},{default:t(()=>[ct]),_:1}),s($,{component:"th",scope:"col"})]),_:1})]),body:t(()=>[(l(!0),c(x,null,O(e.posts.data,p=>(l(),b(Ge,{key:p.id,item:p,filter:e.posts.filter,onOnDelete:()=>{v(i)(p.id)}},{checkbox:t(()=>[s(q,{checked:v(h),"onUpdate:checked":r[8]||(r[8]=K=>A(h)?h.value=K:null),value:p.id,number:""},null,8,["checked","value"])]),_:2},1032,["item","filter","onOnDelete"]))),128))]),_:1}),e.posts.meta.total?y("",!0):(l(),b(_e,{key:0,class:"py-md px-md"},{default:t(()=>[rt]),_:1}))]),_:1}),e.posts.meta.links.length>3?(l(),c("div",dt,[s(Qe,{meta:e.posts.meta,links:e.posts.links},null,8,["meta","links"])])):y("",!0)])]),s(de,{show:a.value,variant:"danger",onClose:r[10]||(r[10]=p=>a.value=!1)},{header:t(()=>[ut]),body:t(()=>[mt]),footer:t(()=>[s(M,{onClick:r[9]||(r[9]=p=>a.value=!1),class:"mr-xs"},{default:t(()=>[ft]),_:1}),s(me,{onClick:n},{default:t(()=>[pt]),_:1})]),_:1},8,["show"])],64)}}};export{jt as default};
