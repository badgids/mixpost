import{r as u,o as _,k as f,w as s,b as t,a as e,d as l,O as d}from"./app.7a64cfa1.js";import{u as h}from"./useNotifications.e3a4e3f0.js";import{_ as v}from"./Panel.16e7074b.js";import{_ as x}from"./Input.30e3f39f.js";import{U as k}from"./Services.049764b4.js";import{_ as U}from"./PrimaryButton.4a06c814.js";import{_ as $}from"./HorizontalGroup.07e0a23c.js";import{_ as y}from"./Error.6a3edd52.js";import{_ as g}from"./ReadDocHelp.6479b75c.js";import"./PageHeader.987f2c53.js";import"./Tab.dd86d6a5.js";import"./ProviderIcon.ffdeb76d.js";const V={class:"flex items-center"},b={class:"mr-xs"},N=t("span",null,"Unsplash",-1),O=t("p",null,"With Unsplash you can use external stock photos directly in Mixpost.",-1),S=t("p",null,[t("a",{href:"https://unsplash.com/oauth/applications",class:"link",target:"_blank"},"Create an App on Unsplash"),l(". ")],-1),T={__name:"UnsplashServiceForm",props:{form:{required:!0,type:Object}},setup(a){const i=a,{notify:c}=h(),o=u({}),m=()=>{o.value={},d.put(route("mixpost.services.update",{service:"unsplash"}),i.form,{preserveScroll:!0,onSuccess(){c("success","Unsplash credentials have been saved")},onError:r=>{o.value=r}})};return(r,n)=>(_(),f(v,null,{title:s(()=>[t("div",V,[t("span",b,[e(k,{class:"text-black"})]),N])]),description:s(()=>[O,S,e(g,{href:`${r.$page.props.mixpost.docs_link}/services/media//unsplash`,class:"mt-xs"},null,8,["href"])]),default:s(()=>[e($,{class:"mt-lg"},{title:s(()=>[l("API Key")]),footer:s(()=>[e(y,{message:o.value.client_id},null,8,["message"])]),default:s(()=>[e(x,{modelValue:a.form.client_id,"onUpdate:modelValue":n[0]||(n[0]=p=>a.form.client_id=p),error:o.value.hasOwnProperty("client_id"),type:"text",autocomplete:"off"},null,8,["modelValue","error"])]),_:1}),e(U,{onClick:m,class:"mt-lg"},{default:s(()=>[l("Save")]),_:1})]),_:1}))}};export{T as default};
