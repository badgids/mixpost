import{r as _,o as v,k as w,w as e,b as r,a as t,d as i,O as g}from"./app.4ca5fe15.js";import{u as h}from"./useNotifications.f88b68af.js";import{_ as V}from"./Panel.8eca0e74.js";import{_ as u}from"./Input.08a10bbb.js";import{T as x}from"./ProviderIcon.0162c270.js";import{_ as y}from"./PrimaryButton.a4e20dc3.js";import{_ as m}from"./HorizontalGroup.40fb8f99.js";import{_ as c}from"./Error.35d706bf.js";import{_ as $}from"./ReadDocHelp.5b7b4b78.js";import{_ as k}from"./Select.166d3a63.js";const T={class:"flex items-center"},b={class:"mr-xs"},O=r("span",null,"Twitter",-1),P=r("a",{href:"https://developer.twitter.com/en/portal/projects-and-apps",class:"link",target:"_blank"},"Create an App on Twitter",-1),S=r("option",{value:"legacy"},"Legacy",-1),A=r("option",{value:"free"},"Free",-1),B=r("option",{value:"basic"},"Basic",-1),R={__name:"TwitterServiceForm",props:{form:{required:!0,type:Object}},setup(s){const d=s,{notify:f}=h(),o=_({}),p=()=>{o.value={},g.put(route("mixpost.services.update",{service:"twitter"}),d.form,{preserveScroll:!0,onSuccess(){f("success","Twitter credentials have been saved")},onError:n=>{o.value=n}})};return(n,a)=>(v(),w(V,null,{title:e(()=>[r("div",T,[r("span",b,[t(x,{class:"text-twitter"})]),O])]),description:e(()=>[P,i('. You will need to edit the App Permissions and allow "Read and Write". '),t($,{href:`${n.$page.props.mixpost.docs_link}/books/services-configuration-mixpost/page/twitter`,class:"mt-xs"},null,8,["href"])]),default:e(()=>[t(m,{class:"mt-lg"},{title:e(()=>[i("API Key")]),footer:e(()=>[t(c,{message:o.value.client_id},null,8,["message"])]),default:e(()=>[t(u,{modelValue:s.form.client_id,"onUpdate:modelValue":a[0]||(a[0]=l=>s.form.client_id=l),error:o.value.hasOwnProperty("client_id"),type:"text",autocomplete:"off"},null,8,["modelValue","error"])]),_:1}),t(m,{class:"mt-lg"},{title:e(()=>[i("API Secret")]),footer:e(()=>[t(c,{message:o.value.client_secret},null,8,["message"])]),default:e(()=>[t(u,{modelValue:s.form.client_secret,"onUpdate:modelValue":a[1]||(a[1]=l=>s.form.client_secret=l),error:o.value.hasOwnProperty("client_secret"),type:"password",autocomplete:"new-password"},null,8,["modelValue","error"])]),_:1}),t(m,{class:"mt-lg"},{title:e(()=>[i("Tier")]),footer:e(()=>[t(c,{message:o.value.environment},null,8,["message"])]),default:e(()=>[t(k,{modelValue:s.form.tier,"onUpdate:modelValue":a[2]||(a[2]=l=>s.form.tier=l),error:o.value.hasOwnProperty("tier"),class:"w-full"},{default:e(()=>[S,A,B]),_:1},8,["modelValue","error"])]),_:1}),t(y,{onClick:p,class:"mt-lg"},{default:e(()=>[i("Save")]),_:1})]),_:1}))}};export{R as default};
