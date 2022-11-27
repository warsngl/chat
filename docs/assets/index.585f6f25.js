var V=Object.defineProperty,F=Object.defineProperties;var J=Object.getOwnPropertyDescriptors;var M=Object.getOwnPropertySymbols;var T=Object.prototype.hasOwnProperty,z=Object.prototype.propertyIsEnumerable;var O=(e,s,t)=>s in e?V(e,s,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[s]=t,A=(e,s)=>{for(var t in s||(s={}))T.call(s,t)&&O(e,t,s[t]);if(M)for(var t of M(s))z.call(s,t)&&O(e,t,s[t]);return e},K=(e,s)=>F(e,J(s));import{c as H,r as g,o as a,a as l,b as r,d as v,w as $,t as h,e as b,f as q,g as k,F as N,i as W,h as Y,j as C,v as R,k as w,l as E,m as S,p as U,n as I,q as j,s as m,u as G,x as Q,y as D,z as X,A as Z,B as ee,C as se,D as te}from"./vendor.d3232155.js";const oe=function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))u(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const d of o.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&u(d)}).observe(document,{childList:!0,subtree:!0});function t(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerpolicy&&(o.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?o.credentials="include":i.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function u(i){if(i.ep)return;i.ep=!0;const o=t(i);fetch(i.href,o)}};oe();const re=H({state(){return{user:{name:"",id:"",count:0,onlineAt:"",rooms:[],messages:[]}}},mutations:{setUser(e,s){e.user=s},setUserProp(e,{prop:s,val:t}){e.user[s]=t},pushUserProps(e,{prop:s,val:t}){e.user[s].push(t)}}}),ne={class:"fa"},ie=b("Rooms"),ae={class:"room-name"},le=b("Profile");function de(e,s,t,u,i,o){var n;const d=g("router-link");return a(),l("ul",ne,[r("li",null,[v(d,{to:"/"},{default:$(()=>[ie]),_:1})]),r("li",null,[r("p",ae,h(e.room||((n=e.$route.params)==null?void 0:n.id)||"Lobby"),1)]),r("li",null,[v(d,{to:"/user/"+e.user},{default:$(()=>[le]),_:1},8,["to"])])])}var _=(e,s)=>{const t=e.__vccOpts||e;for(const[u,i]of s)t[u]=i;return t};const ue={};var he=_(ue,[["render",de]]);function me(e,s,t,u,i,o){const d=g("TheNavbar"),n=g("router-view");return a(),l(N,null,[e.user?(a(),q(d,{key:0,class:"w-full mb-4"})):k("",!0),v(n)],64)}window.addEventListener("resize",()=>{let e=window.innerHeight*.01;document.documentElement.style.setProperty("--vh",`${e}px`)});const ce={data:()=>({}),components:{TheNavbar:he},mounted(){if(this.lsUser)try{this.$store.commit("setUser",this.lsUser)}catch(e){console.log(e),localStorage.removeItem("chat--user"),this.$router.push("/login")}finally{}else this.$router.push("/login")},beforeUnmount(){this.lsUser=this.user,window.removeEventListener("resize")}};var pe=_(ce,[["render",me]]);const _e={apiKey:"AIzaSyD8pkb9OsLYohxINl6WKVf5G9VjgFDKRHo",authDomain:"a-little-chat.firebaseapp.com",databaseURL:"https://a-little-chat-default-rtdb.europe-west1.firebasedatabase.app",projectId:"a-little-chat",storageBucket:"a-little-chat.appspot.com",messagingSenderId:"191360084622",appId:"1:191360084622:web:cc0b9e3dd41a09879377df"};W(_e);const c=Y();var p="/chat/assets/icon.01d8339e.svg";const x=e=>(U("data-v-3d28ceda"),e=e(),I(),e),fe=p+"#loader",ge=p+"#enter",ve={key:0,class:"loader"},ye=x(()=>r("svg",{class:"w-8 h-8"},[r("use",{href:fe})],-1)),$e=[ye],be={key:1},ke={class:"fc mb-2"},we={class:"fc mb-2"},Le=x(()=>r("svg",{class:"w-4 h-4",fill:"white"},[r("use",{href:ge})],-1)),Ne=[Le],Ce={key:0,class:"text-center text-xl mt-8"},Re={key:1,class:"room-list"},Ue=["onClick"],Ie=["onClick"];function Me(e,s,t,u,i,o){const d=g("router-link");return e.isLoading?(a(),l("div",ve,$e)):(a(),l("div",be,[r("div",ke,[r("button",{class:"button-ok shine md:w-[60%]",onClick:s[0]||(s[0]=(...n)=>o.createRoom&&o.createRoom(...n))},"Create")]),r("div",we,[C(r("input",{class:"input shine",placeholder:"Join private room","onUpdate:modelValue":s[1]||(s[1]=n=>e.id=n),onKeydown:s[2]||(s[2]=w((...n)=>o.joinRoom&&o.joinRoom(...n),["enter"]))},null,544),[[R,e.id]]),r("button",{onClick:s[3]||(s[3]=(...n)=>o.joinRoom&&o.joinRoom(...n))},Ne)]),e.rooms.length==0?(a(),l("h1",Ce,"No rooms yet!")):(a(),l("ul",Re,[(a(!0),l(N,null,E(e.rooms,n=>(a(),l("li",{class:"room shine cursor-pointer",onClick:S(f=>e.$router.push("/room/"+n.id),["self"])},[r("span",{class:"mr-1",onClick:S(f=>e.$router.push("/room/"+n.id),["self"])},h(n.id)+" by",9,Ie),v(d,{class:"underline",to:"/user/"+n.admin},{default:$(()=>[b(h(n.admin),1)]),_:2},1032,["to"])],8,Ue))),256))]))]))}const Oe={data:()=>({rooms:[],id:"",isLoading:!1}),computed:{},methods:{getRooms(){this.isLoading=!0,j(m(c,"rooms"),e=>{let s=e.val();s&&(this.rooms=Object.keys(s).filter(t=>s[t]._info.private==!1||Object.values(s[t]._info.users).includes(this.user)).map(t=>({id:t,admin:s[t]._info.users.admin})))}),this.isLoading=!1},createRoom(){let e=this.add("rooms/",{_info:{name:"",users:{admin:this.user},private:!1}});this.add("rooms/"+e,{text:"Hi there\u{1F525}",user:this.user}),this.add("users/"+this.fullUser.id+"/rooms/",e),this.$router.push(`/room/${e}`)},joinRoom(){this.add(`rooms/${this.id}/_info/users`,this.user),this.$router.push(`/room/${this.id}`)}},mounted(){this.getRooms()}};var Ae=_(Oe,[["render",Me],["__scopeId","data-v-3d28ceda"]]);const Ke=e=>(U("data-v-1bf849d6"),e=e(),I(),e),Ee={class:"flex justify-center mt-12"},Se={class:"relative"},je=Ke(()=>r("label",{class:"name",for:"name"},"Name",-1));function De(e,s,t,u,i,o){return a(),l("div",Ee,[r("div",Se,[je,C(r("input",{class:"input shine",id:"name","onUpdate:modelValue":s[0]||(s[0]=d=>e.name=d),placeholder:"Enter name",onKeydown:s[1]||(s[1]=w((...d)=>o.enter&&o.enter(...d),["enter"]))},null,544),[[R,e.name]])]),r("button",{class:"button-ok shine w-12",onClick:s[2]||(s[2]=(...d)=>o.enter&&o.enter(...d))},"Join")])}const xe={data:()=>({name:""}),methods:{enter(){this.$store.commit("setUserProp",{prop:"name",val:this.name}),this.$store.commit("setUserProp",{prop:"onlineAt",val:new Date});const e=this.getKey("users");this.$store.commit("setUserProp",{prop:"id",val:e}),this.$store.commit("setUserProp",{prop:"rooms",val:[]}),this.updateByKey("users/",e,this.fullUser),this.lsUser=this.fullUser,this.$router.push("/")}}};var Be=_(xe,[["render",De],["__scopeId","data-v-1bf849d6"]]);const Pe={class:"fcc"},Ve={class:"flex text-left"},Fe=r("div",{class:"w-24 mr-20 font-bold"},[r("p",null,"Name"),r("p",null,"Register at"),r("p",null,"Messages")],-1),Je={class:"w-50"};function Te(e,s,t,u,i,o){return a(),l("div",Pe,[r("button",{class:"mb-3 bg-m4 text-m1 px-2 py-1 rounded shadow shadow-yellow-400",onClick:s[0]||(s[0]=(...d)=>o.logout&&o.logout(...d))},"Logout"),r("div",Ve,[Fe,r("div",Je,[r("p",null,h(e.target.name),1),r("p",null,h(o.onlineAt.day+" "+o.onlineAt.month+" "+o.onlineAt.year),1),r("p",null,h(e.target.count),1)])])])}const ze={data:()=>({target:{}}),computed:{profile(){return this.$route.params.id},onlineAt(){let e=new Date(this.target.onlineAt),s=e.getDate(),u=["January","February","March","April","May","June","July","August","September","October","November","December"][e.getMonth()],i=e.getFullYear();return{day:s,month:u,year:i}}},methods:{logout(){this.$router.push("/login")}},mounted(){this.getOne("users").then(e=>{Object.keys(e).forEach(s=>{e[s].name==this.profile&&(this.target=e[s])})})}};var He=_(ze,[["render",Te]]);const y=e=>(U("data-v-a8f87c8a"),e=e(),I(),e),qe=p+"#loader",We=p+"#lock",Ye=p+"#unlock",B=p+"#delete",P=p+"#edit",Ge={key:0,class:"loader"},Qe=y(()=>r("svg",{class:"w-8 h-8"},[r("use",{href:qe})],-1)),Xe=[Qe],Ze={key:1,class:"chat"},es={key:0,class:"chat-icon"},ss={key:0,href:We},ts={key:1,href:Ye},os=y(()=>r("use",{href:B},null,-1)),rs=[os],ns=y(()=>r("use",{href:P},null,-1)),is=[ns],as={class:"message-list"},ls=["onMouseover","onMouseleave"],ds={class:"flex items-center"},us={key:0,class:"edit"},hs=["onClick"],ms=y(()=>r("use",{href:P},null,-1)),cs=[ms],ps=["onClick"],_s=y(()=>r("use",{href:B},null,-1)),fs=[_s],gs={class:"message-text"};function vs(e,s,t,u,i,o){const d=g("router-link");return e.isLoading?(a(),l("div",Ge,Xe)):(a(),l("div",Ze,[e.isAdmin?(a(),l("div",es,[(a(),l("svg",{class:"w-4 h-4 mr-2",onClick:s[0]||(s[0]=(...n)=>o.handleLock&&o.handleLock(...n)),fill:"white"},[e.roomInfo.private?(a(),l("use",ts)):(a(),l("use",ss))])),(a(),l("svg",{class:"w-4 h-4 mr-2",onClick:s[1]||(s[1]=(...n)=>o.deleteChat&&o.deleteChat(...n)),fill:"white"},rs)),(a(),l("svg",{class:"w-4 h-4",onClick:s[2]||(s[2]=n=>e.editRoomName=!e.editRoomName),fill:"white"},is)),e.editRoomName?(a(),l("input",{key:0,class:"message-input absolute",onKeydown:s[3]||(s[3]=w(n=>o.setRoomName(n.target.value),["enter"]))},null,32)):k("",!0)])):k("",!0),r("ul",as,[(a(!0),l(N,null,E(e.messages,(n,f)=>(a(),l("li",{class:G(["message",n.user==e.user&&"ml-auto"]),onMouseover:L=>e.hover[f]=!0,onMouseleave:L=>e.hover[f]=!1},[r("div",ds,[v(d,{class:"message-user",to:"/user/"+n.user},{default:$(()=>[b(h(n.user),1)]),_:2},1032,["to"]),n.user==e.user&&e.hover[f]?(a(),l("div",us,[(a(),l("svg",{class:"mr-2",onClick:L=>o.handleEditMessage(n)},cs,8,hs)),(a(),l("svg",{onClick:L=>o.deleteMessage(n)},fs,8,ps))])):k("",!0)]),r("div",gs,h(n.text),1)],42,ls))),256))]),C(r("input",{class:"message-input","onUpdate:modelValue":s[4]||(s[4]=n=>e.text=n),placeholder:"Type message...",onKeydown:s[5]||(s[5]=w((...n)=>o.handleEnter&&o.handleEnter(...n),["enter"]))},null,544),[[R,e.text]])]))}const ys={data:()=>({roomInfo:{},text:"",messages:{},isLoading:!1,isAdmin:!1,isEdit:!1,message:{},hover:[],editRoomName:!1}),computed:{getFullRoom(){let e;return this.getOne("rooms/"+this.room).then(s=>e=s),e}},methods:{getMessages(){this.isLoading=!0,j(m(c,"rooms/"+this.room),e=>{let s=e.val();if(s){this.roomInfo=s._info,this.isAdmin=Object.values(s._info.users).includes(this.user)==1,this.messages=Object.keys(s).map(t=>K(A({},s[t]),{id:t})),this.messages.pop();for(let t=0;t<this.messages.length;t++)this.hover.push(!1)}else this.messages=[{text:"No messages yet!",user:"Admin"}]}),this.isLoading=!1},deleteChat(){this.removeOne("rooms/"+this.room).then(e=>this.$router.push("/"))},handleLock(){this.updateByKey(`rooms/${this.room}`,"_info",{private:!this.roomInfo.private})},handleEnter(){this.isEdit&&this.text?this.editMessage():this.sendMessage()},sendMessage(e=this.text,s=this.user){if(this.text){let t=new Date,u=this.add("rooms/"+this.room,{text:e,user:s,date:t});this.updateByKey("users/"+this.fullUser.id+"/messages",u,{text:e,user:s,date:t}),this.getOne("users/"+this.fullUser.id+"/count").then(i=>this.updateByKey("users",this.fullUser.id,{count:i+1}))}},editMessage(){const{user:e,id:s}=this.message;this.updateByKey(`rooms/${this.room}`,s,{text:this.text}),this.text="",this.isEdit=!1},deleteMessage({id:e}){this.removeOne(`rooms/${this.room}/${e}`)},handleEditMessage(e){this.message=e,this.text=e.text,this.isEdit=!0},setRoomName(e){this.updateByKey(`rooms/${this.room}`,"_info",{name:e}),this.editRoomName=!1}},mounted(){this.getMessages()}};var $s=_(ys,[["render",vs],["__scopeId","data-v-a8f87c8a"]]);var bs={data:()=>({}),computed:{user(){var e;return(e=this.$store.state.user)==null?void 0:e.name},fullUser(){return this.$store.state.user},room(){var e;return(e=this.$route.params)==null?void 0:e.roomID},lsUser:{get(){return JSON.parse(localStorage.getItem("chat--user"))||null},set(e){localStorage.setItem("chat--user",JSON.stringify(e))}}},watch:{},methods:{getOne(e,s){return Q(m(c,e)).then(t=>t.val())},add(e,s){return D(m(c,e),s).key},getKey(e){return D(m(c,e)).key},updateByKey(e,s,t){X(m(c,e+"/"+s),t)},removeOne(e){return Z(m(c,e))}}};const ks=[{path:"/",component:Ae},{path:"/login",component:Be},{path:"/user/:id",component:He},{path:"/user",redirect:"/"},{path:"/room",redirect:"/"},{path:"/room/:roomID",component:$s}],ws=ee({history:se(),routes:ks});te(pe).use(ws).use(re).mixin(bs).mount("#app");