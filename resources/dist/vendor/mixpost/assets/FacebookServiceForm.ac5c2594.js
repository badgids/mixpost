import{r as _,o as v,k,w as e,b as s,a as o,d as i,O as b}from"./app.7a64cfa1.js";import{u as g}from"./useNotifications.e3a4e3f0.js";import{_ as h}from"./Panel.16e7074b.js";import{_ as u}from"./Input.30e3f39f.js";import{_ as V}from"./Select.0634c6d9.js";import{F as w}from"./ProviderIcon.ffdeb76d.js";import{_ as x}from"./PrimaryButton.4a06c814.js";import{_ as c}from"./HorizontalGroup.07e0a23c.js";import{_ as m}from"./Error.6a3edd52.js";import{_ as $}from"./ReadDocHelp.6479b75c.js";const y={class:"flex items-center"},F={class:"mr-xs"},O=s("span",null,"Facebook",-1),A=s("p",null,[s("a",{href:"https://developers.facebook.com/apps",class:"link",target:"_blank"},"Create an App on Facebook"),i(". ")],-1),N=s("label",{for:"version"},"API Version",-1),P=s("option",{value:"v19.0"},"v19.0",-1),S=s("option",{value:"v18.0"},"v18.0",-1),B=s("option",{value:"v17.0"},"v17.0",-1),C=s("option",{value:"v16.0"},"v16.0",-1),J={__name:"FacebookServiceForm",props:{form:{required:!0,type:Object}},setup(a){const f=a,{notify:p}=g(),t=_({}),d=()=>{t.value={},b.put(route("mixpost.services.update",{service:"facebook"}),f.form,{preserveScroll:!0,onSuccess(){p("success","Facebook credentials have been saved")},onError:n=>{t.value=n}})};return(n,r)=>(v(),k(h,{class:"mt-lg"},{title:e(()=>[s("div",y,[s("span",F,[o(w,{class:"text-facebook"})]),O])]),description:e(()=>[A,o($,{href:`${n.$page.props.mixpost.docs_link}/services/social/facebook/`,class:"mt-xs"},null,8,["href"])]),default:e(()=>[o(c,{class:"mt-lg"},{title:e(()=>[i("App ID")]),footer:e(()=>[o(m,{message:t.value.client_id},null,8,["message"])]),default:e(()=>[o(u,{modelValue:a.form.client_id,"onUpdate:modelValue":r[0]||(r[0]=l=>a.form.client_id=l),error:t.value.hasOwnProperty("client_id"),type:"text",class:"w-full",autocomplete:"off"},null,8,["modelValue","error"])]),_:1}),o(c,{class:"mt-lg"},{title:e(()=>[i("App secret")]),footer:e(()=>[o(m,{message:t.value.client_secret},null,8,["message"])]),default:e(()=>[o(u,{modelValue:a.form.client_secret,"onUpdate:modelValue":r[1]||(r[1]=l=>a.form.client_secret=l),error:t.value.hasOwnProperty("client_secret"),type:"password",class:"w-full",autocomplete:"new-password"},null,8,["modelValue","error"])]),_:1}),o(c,{class:"mt-lg"},{title:e(()=>[N]),footer:e(()=>[o(m,{message:t.value.api_version},null,8,["message"])]),default:e(()=>[o(V,{modelValue:a.form.api_version,"onUpdate:modelValue":r[2]||(r[2]=l=>a.form.api_version=l),error:t.value.hasOwnProperty("api_version"),id:"version"},{default:e(()=>[P,S,B,C]),_:1},8,["modelValue","error"])]),_:1}),o(x,{onClick:d,class:"mt-lg"},{default:e(()=>[i("Save")]),_:1})]),_:1}))}};export{J as default};
