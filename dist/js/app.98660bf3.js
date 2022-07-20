(function(){"use strict";var o={9516:function(o,t,a){var e=a(9242),r=a(3396);function i(o,t,a,e,i,s){const n=(0,r.up)("RouterView");return(0,r.wg)(),(0,r.j4)(n)}var s=(0,r.aZ)({name:"App",components:{}}),n=a(89);const l=(0,n.Z)(s,[["render",i]]);var u=l,c=a(2483),m=a.p+"img/logo.1c6a5565.png";const d=(0,r._)("link",{rel:"stylesheet",type:"text/css",href:"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css"},null,-1),f={class:"login"},p={class:"login__container"},h=(0,r._)("img",{class:"login__logo",src:m,alt:""},null,-1),v={action:"",class:"login__form"},_=(0,r._)("i",{class:"fa fa-user fa-lg fa-fw","aria-hidden":"true"},null,-1),g=(0,r._)("i",{class:"fa fa-eye fa-lg fa-fw","aria-hidden":"true"},null,-1);function b(o,t,a,i,s,n){return(0,r.wg)(),(0,r.iD)(r.HY,null,[d,(0,r._)("main",f,[(0,r._)("div",p,[h,(0,r._)("form",v,[(0,r.wy)((0,r._)("input",{"onUpdate:modelValue":t[0]||(t[0]=o=>s.form.email=o),class:"login__input",type:"email",placeholder:"Usuário",autocomplete:"off"},null,512),[[e.nr,s.form.email]]),_,(0,r.wy)((0,r._)("input",{"onUpdate:modelValue":t[1]||(t[1]=o=>s.form.senha=o),class:"login__input",type:"password",placeholder:"Senha"},null,512),[[e.nr,s.form.senha]]),g,(0,r._)("input",{type:"submit",onClick:t[2]||(t[2]=(0,e.iM)((o=>n.login()),["prevent"])),class:"login__submit",value:"Entrar"})])])])],64)}var w=a(2492),y=a.n(w),C={name:"FormLogin",data(){return{form:{email:"",senha:""}}},methods:{login(){"admin@admin.com"===this.form.email&&"admin"===this.form.senha?(y().fire({title:"Bem-vindo de volta!",icon:"success",iconColor:"white",toast:!0,position:"bottom-right",timer:5e3,timerProgressBar:!0,showConfirmButton:!1,customClass:{popup:"colored-toast"}}),this.form.email="",this.form.senha="",this.$router.push({name:"ToList"})):(y().fire({title:"Usuário e/ou senha inválidos!",icon:"error",iconColor:"white",toast:!0,position:"bottom-right",timer:5e3,timerProgressBar:!0,showConfirmButton:!1,customClass:{popup:"colored-toast"}}),this.form.email="",this.form.senha="")}}};const x=(0,n.Z)(C,[["render",b]]);var k=x,B=a(7139);const j=(0,r._)("header",null,[(0,r._)("nav",{class:"navbar has-shadow topo__color"},[(0,r._)("img",{class:"img__logo",src:m,alt:""})])],-1),P={class:"column is-three-quarter conteudo"},Z={class:"lista"},z=(0,r._)("div",{class:"div__sem-mensagem"},[(0,r._)("span",{class:"text-negado"},"Nenhuma Postagem Realizada")],-1);function F(o,t,a,e,i,s){const n=(0,r.up)("Formulario"),l=(0,r.up)("Card"),u=(0,r.up)("Box");return(0,r.wg)(),(0,r.iD)(r.HY,null,[j,(0,r._)("main",{class:(0,B.C_)(["columns is-gapless is-multiline",{"modo-escuro":o.modoEscuroAtivo}])},[(0,r._)("div",P,[(0,r.Wm)(n,{onAoSalvarPostagem:o.salvarPostagem},null,8,["onAoSalvarPostagem"]),(0,r._)("div",Z,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(o.tarefas,((o,t)=>((0,r.wg)(),(0,r.j4)(l,{key:t,tarefa:o},null,8,["tarefa"])))),128)),o.listaEstaVazia?((0,r.wg)(),(0,r.j4)(u,{key:0},{default:(0,r.w5)((()=>[z])),_:1})):(0,r.kq)("",!0)])])],2)],64)}const O={class:"box formulario"},T={class:"columns"},U={class:"column is-2",role:"form","aria-label":"Formulario para criação de uma nova tarefa"},D={class:"column is-7",role:"form","aria-label":"Formulario para criação de uma nova tarefa"},L={class:"column is-2",role:"form","aria-label":"Formulario para criação de uma nova tarefa"},S={class:"column"};function A(o,t,a,i,s,n){const l=(0,r.up)("ButtonSave");return(0,r.wg)(),(0,r.iD)("div",O,[(0,r._)("div",T,[(0,r._)("div",U,[(0,r.wy)((0,r._)("input",{type:"text",class:"input",placeholder:"Título do Projeto","onUpdate:modelValue":t[0]||(t[0]=t=>o.titulo=t)},null,512),[[e.nr,o.titulo]])]),(0,r._)("div",D,[(0,r.wy)((0,r._)("input",{type:"text",class:"input",placeholder:"Descrição do Projeto","onUpdate:modelValue":t[1]||(t[1]=t=>o.descricao=t)},null,512),[[e.nr,o.descricao]])]),(0,r._)("div",L,[(0,r.wy)((0,r._)("input",{type:"text",class:"input",placeholder:"Link para GitHub","onUpdate:modelValue":t[2]||(t[2]=t=>o.github=t)},null,512),[[e.nr,o.github]])]),(0,r._)("div",S,[(0,r.Wm)(l,{onAoFinalizar:o.finalizarTarefa},null,8,["onAoFinalizar"])])])])}const E=o=>((0,r.dD)("data-v-a24b2394"),o=o(),(0,r.Cn)(),o),V={class:"is-flex is-align-items-center is-justify-content-space-between"},q=["disabled"],H=E((()=>(0,r._)("span",{class:"icon"},[(0,r._)("i",{class:"fas fa-save"})],-1))),M=E((()=>(0,r._)("span",null,"Salvar",-1))),R=[H,M];function $(o,t,a,e,i,s){return(0,r.wg)(),(0,r.iD)("div",V,[(0,r._)("button",{class:"button",onClick:t[0]||(t[0]=(...t)=>o.salvar&&o.salvar(...t)),disabled:o.cronometroRodando},R,8,q)])}var W=(0,r.aZ)({name:"ButtonSave",emits:["aoFinalizar"],components:{},data(){return{tempoEmSegundos:0,cronometro:0,cronometroRodando:!1}},methods:{salvar(){this.$emit("aoFinalizar")}}});const Y=(0,n.Z)(W,[["render",$],["__scopeId","data-v-a24b2394"]]);var G=Y,I=(0,r.aZ)({name:"Formulario",emits:["aoSalvarPostagem"],components:{ButtonSave:G},data(){return{titulo:"",descricao:"",github:""}},methods:{finalizarTarefa(){""===this.titulo||""===this.descricao||""===this.github?y().fire({title:"Preencha todos os campos!!!",icon:"error",iconColor:"white",toast:!0,position:"bottom-right",timer:5e3,timerProgressBar:!0,showConfirmButton:!1,customClass:{popup:"colored-toast"}}):(this.$emit("aoSalvarPostagem",{titulo:this.titulo,descricao:this.descricao,github:this.github}),this.titulo="",this.descricao="",this.github="",y().fire({title:"Projeto Cadastrado!!!",icon:"success",iconColor:"white",toast:!0,position:"bottom-right",timer:5e3,timerProgressBar:!0,showConfirmButton:!1,customClass:{popup:"colored-toast"}}))}}});const K=(0,n.Z)(I,[["render",A]]);var N=K;const J={class:"columns"},Q={class:"column is-2 display"},X=(0,r._)("h4",{class:"title__informs"},"Título:",-1),oo={class:"column is-7 display"},to=(0,r._)("h4",{class:"title__informs"},"Descrição:",-1),ao={class:"column is-3 display"},eo=(0,r._)("span",{class:"title__informs"},"Link GitHub: ",-1),ro=(0,r._)("hr",null,null,-1),io=(0,r._)("span",{class:"title__informs"},"Autor: ",-1),so=(0,r.Uk)(" Matheus Mattos ");function no(o,t,a,e,i,s){const n=(0,r.up)("Box");return(0,r.wg)(),(0,r.j4)(n,null,{default:(0,r.w5)((()=>[(0,r._)("div",J,[(0,r._)("div",Q,[X,(0,r.Uk)(" "+(0,B.zw)(o.tarefa.titulo||"Tarefa sem descrição"),1)]),(0,r._)("div",oo,[to,(0,r.Uk)(" "+(0,B.zw)(o.tarefa.descricao||"Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque explicabo natus, amet animi nulla esse totam ipsa earum fugiat illum debitis harum voluptatum a laudantium fugit similique, hic iurearchitecto!"),1)]),(0,r._)("div",ao,[eo,(0,r.Uk)((0,B.zw)(o.tarefa.github||"Lorem ipsum dolor sit amet consectetur")+" ",1),ro,io,so])])])),_:1})}function lo(o,t,a,e,i,s){return(0,r.wg)(),(0,r.iD)("div",{class:"box has-text-weight-bold",style:(0,B.j5)(o.estilos)},[(0,r.WI)(o.$slots,"default")],4)}var uo=(0,r.aZ)({name:"Box",data(){return{estilos:{background:"#63B1BC"}}}});const co=(0,n.Z)(uo,[["render",lo]]);var mo=co,fo=(0,r.aZ)({name:"Card",components:{Box:mo},props:{tarefa:{type:Object,required:!0}}});const po=(0,n.Z)(fo,[["render",no]]);var ho=po,vo=(0,r.aZ)({name:"ToList",components:{Formulario:N,Card:ho,Box:mo},data(){return{tarefas:[],modoEscuroAtivo:!1}},computed:{listaEstaVazia(){return 0===this.tarefas.length}},methods:{salvarPostagem(o){this.tarefas.push(o)},trocarTema(o){this.modoEscuroAtivo=o}}});const _o=(0,n.Z)(vo,[["render",F]]);var go=_o;const bo=[{path:"/",name:"Login",component:k},{path:"/toList",name:"ToList",component:go}],wo=(0,c.p7)({history:(0,c.r5)(),routes:bo});var yo=wo;(0,e.ri)(u).use(yo).mount("#app")}},t={};function a(e){var r=t[e];if(void 0!==r)return r.exports;var i=t[e]={exports:{}};return o[e].call(i.exports,i,i.exports,a),i.exports}a.m=o,function(){var o=[];a.O=function(t,e,r,i){if(!e){var s=1/0;for(c=0;c<o.length;c++){e=o[c][0],r=o[c][1],i=o[c][2];for(var n=!0,l=0;l<e.length;l++)(!1&i||s>=i)&&Object.keys(a.O).every((function(o){return a.O[o](e[l])}))?e.splice(l--,1):(n=!1,i<s&&(s=i));if(n){o.splice(c--,1);var u=r();void 0!==u&&(t=u)}}return t}i=i||0;for(var c=o.length;c>0&&o[c-1][2]>i;c--)o[c]=o[c-1];o[c]=[e,r,i]}}(),function(){a.n=function(o){var t=o&&o.__esModule?function(){return o["default"]}:function(){return o};return a.d(t,{a:t}),t}}(),function(){a.d=function(o,t){for(var e in t)a.o(t,e)&&!a.o(o,e)&&Object.defineProperty(o,e,{enumerable:!0,get:t[e]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(o){if("object"===typeof window)return window}}()}(),function(){a.o=function(o,t){return Object.prototype.hasOwnProperty.call(o,t)}}(),function(){a.p="/"}(),function(){var o={143:0};a.O.j=function(t){return 0===o[t]};var t=function(t,e){var r,i,s=e[0],n=e[1],l=e[2],u=0;if(s.some((function(t){return 0!==o[t]}))){for(r in n)a.o(n,r)&&(a.m[r]=n[r]);if(l)var c=l(a)}for(t&&t(e);u<s.length;u++)i=s[u],a.o(o,i)&&o[i]&&o[i][0](),o[i]=0;return a.O(c)},e=self["webpackChunktracker_sptech"]=self["webpackChunktracker_sptech"]||[];e.forEach(t.bind(null,0)),e.push=t.bind(null,e.push.bind(e))}();var e=a.O(void 0,[998],(function(){return a(9516)}));e=a.O(e)})();
//# sourceMappingURL=app.98660bf3.js.map