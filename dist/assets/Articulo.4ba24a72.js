import{_ as N,L as k,d as r,o as n,c as l,w as p,v as d,e as _,a,t as o,F as B,r as S,b as C,f as x,p as F,h as T,u as E}from"./index.985b2cd4.js";import{B as H,N as M}from"./NotFaulty.166270f1.js";const R={name:"Page",props:["routerID"],data(){return{articuloDala:null,routerNumber:null,navB:!1}},methods:{async getPage(){const s=await(await fetch(`https://api.beta.mejorconsalud.com/wp-json/mc/v1/posts/${this.routerNumber}`)).json();this.articuloDala=s,console.log(s)},getRouter(){const e=window.location.pathname.replace(/[/articulo/]/g,"");this.routerNumber=e,this.getPage()},navBibliograf(){this.navB=!this.navB}},mounted(){this.getRouter()},components:{Button:H,Loading:k,NotFaulty:M}},h=e=>(F("data-v-1a018a5e"),e=e(),T(),e),V={key:0,class:"mainPage"},j={class:"category"},q={class:"category__title"},A=h(()=>a("span",{class:"category__tags--span"},">",-1)),z={class:"category__tags--text"},G={class:"pageConteiner"},J={class:"pageConteiner__title"},K={class:"pageConteiner__text"},O={class:"banner"},Q=["src","alt"],U=["innerHTML"],W={class:"autor__info"},X={class:"autor__info--text"},Y=x("Escrito por "),Z={class:"autor__info--span"},$={class:"autor__info--span"},tt=x("\xDAltima actualizaci\xF3n: "),at={class:"autor__info--text"},et={key:0,class:"navContainer"},ot=h(()=>a("div",{class:"navContainer__outline"},null,-1)),st={class:"navContainer__btn"},nt=["innerHTML"],lt=h(()=>a("div",{class:"navContainer__outline"},null,-1));function it(e,s,w,L,t,i){var g,m,v,b,D,f,y;const u=r("Loading"),P=r("NotFaulty"),I=r("Button");return n(),l(B,null,[p(_(u,null,null,512),[[d,!t.articuloDala]]),p(_(P,{localStorageDatas:"esta p\xE1gina"},null,512),[[d,t.articuloDala!==null&&!t.articuloDala.title]]),t.articuloDala!==null&&t.articuloDala.title?(n(),l("main",V,[a("div",j,[a("span",q,o((m=(g=t.articuloDala)==null?void 0:g.categories[0])==null?void 0:m.name),1),(n(!0),l(B,null,S((v=t.articuloDala)==null?void 0:v.tags,c=>(n(),l("div",{class:"category__tags",key:c.id},[A,a("p",z,o(c.name),1)]))),128))]),a("article",G,[a("h1",J,o(t.articuloDala.title),1),a("p",K,o(t.articuloDala.headline),1),a("div",O,[a("img",{src:(D=(b=t.articuloDala)==null?void 0:b.featured_media)==null?void 0:D.medium_large,alt:t.articuloDala.title,class:"banner__img"},null,8,Q)]),a("section",{class:"content",innerHTML:t.articuloDala.content},null,8,U),a("aside",W,[a("p",X,[Y,a("span",Z,o((y=(f=t.articuloDala)==null?void 0:f.author)==null?void 0:y.name),1)]),a("p",$,[tt,a("span",at,o(t.articuloDala.published.substr(8,2).replace(/-/g," "))+"/"+o(t.articuloDala.published.substr(5,2).replace(/-/g," "))+"/"+o(t.articuloDala.published.substr(0,4).replace(/-/g," ")),1)])])]),a("nav",null,[t.articuloDala.bibliography?(n(),l("div",et,[ot,a("div",st,[_(I,{btnName:"+",onCallEvent:i.navBibliograf},null,8,["onCallEvent"]),a("label",{for:"btnName",onClick:s[0]||(s[0]=(...c)=>i.navBibliograf&&i.navBibliograf(...c))},"Bibliograf\xEDa")]),p(a("section",{innerHTML:t.articuloDala.bibliography,class:"navContainer__list"},null,8,nt),[[d,t.navB]]),lt])):C("",!0)])])):C("",!0)],64)}const ct=N(R,[["render",it],["__scopeId","data-v-1a018a5e"]]),rt={name:"Articulo",data(){return{params:""}},mounted(){const e=E();this.params=e.params.id},components:{Page:ct}},_t={class:"container"};function ut(e,s,w,L,t,i){const u=r("Page");return n(),l("main",_t,[_(u,{routerID:t.params},null,8,["routerID"])])}const ht=N(rt,[["render",ut]]);export{ht as default};