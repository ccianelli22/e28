(function(e){function t(t){for(var o,c,l=t[0],s=t[1],i=t[2],d=0,b=[];d<l.length;d++)c=l[d],Object.prototype.hasOwnProperty.call(n,c)&&n[c]&&b.push(n[c][0]),n[c]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(e[o]=s[o]);u&&u(t);while(b.length)b.shift()();return a.push.apply(a,i||[]),r()}function r(){for(var e,t=0;t<a.length;t++){for(var r=a[t],o=!0,l=1;l<r.length;l++){var s=r[l];0!==n[s]&&(o=!1)}o&&(a.splice(t--,1),e=c(c.s=r[0]))}return e}var o={},n={app:0},a=[];function c(t){if(o[t])return o[t].exports;var r=o[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,c),r.l=!0,r.exports}c.m=e,c.c=o,c.d=function(e,t,r){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(c.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)c.d(r,o,function(t){return e[t]}.bind(null,o));return r},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=t,l=l.slice();for(var i=0;i<l.length;i++)t(l[i]);var u=s;a.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"0b46":function(e,t,r){"use strict";r("3cf3")},"3cf3":function(e,t,r){},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var o=r("7a23"),n={class:"flex flex-col "},a={class:"bg-orange-500"},c={class:"grid grid-cols-3 text-center"},l={class:"col-span-1"},s={class:"font-semibold text-lg lg:text-3xl xl:text-5xl"},i={class:"font-semibold lg:text-xl xl:text-3xl"},u=Object(o["h"])("span",{class:"font-semibold text-lg lg:text-3xl xl:text-5xl"},"|",-1),d={class:"col-span-1"},b=Object(o["h"])("h1",{class:"font-semibold text-lg xl:text-5xl"},"Computer",-1),m={class:"font-semibold lg:text-xl xl:text-3xl"},p={class:"flex flex-row items-baseline justify-evenly"},f={class:" rounded m-2 p-1 hover:bg-black hover:text-orange-500 transition-colors duration-300"},h=Object(o["g"])("GO HOME");function g(e,t,r,g,y,O){var j=Object(o["y"])("router-link"),v=Object(o["y"])("GameHistory"),x=Object(o["y"])("Modal"),w=Object(o["y"])("router-view");return Object(o["q"])(),Object(o["e"])("div",n,[Object(o["h"])("div",a,[Object(o["h"])("div",c,[Object(o["h"])("div",l,[Object(o["h"])("h1",s,Object(o["A"])(g.gameData.username),1),Object(o["h"])("h3",i,Object(o["A"])(g.gameData.userScore),1)]),u,Object(o["h"])("div",d,[b,Object(o["h"])("h3",m,Object(o["A"])(g.gameData.computerScore),1)])]),Object(o["h"])("div",p,[Object(o["h"])("button",f,[Object(o["h"])(j,{to:"/"},{default:Object(o["F"])((function(){return[h]})),_:1})]),Object(o["h"])("button",{id:"history",class:" rounded m-2 p-1 hover:bg-black hover:text-orange-500 transition-colors duration-300",onClick:t[1]||(t[1]=function(){var e;return(e=g.modalFunc).openModal.apply(e,arguments)})}," History ")])]),g.modal.showModal&&"history"===g.modal.activeModalID?(Object(o["q"])(),Object(o["e"])(x,{key:0,header:"History"},{child:Object(o["F"])((function(){return[Object(o["h"])(v)]})),_:1})):Object(o["f"])("",!0),Object(o["h"])(w)])}var y=Object(o["I"])("data-v-208ded6c");Object(o["t"])("data-v-208ded6c");var O={id:"modalContainer",class:"flex overflow-y-auto top-0 flex-col bg-black text-orange-500 w-3/4 lg:text-xl xl:w-3/4 mx-24 xl:mx-48 mt-4 absolute border-2 border-gray-200 border-solid font-semibold transition opacity-0 duration-300"},j={class:"flex flex-row my-2 items-baseline"},v={class:"mx-auto text-xl lg:text-3xl underline italic mb-2"};Object(o["r"])();var x=y((function(e,t,r,n,a,c){return Object(o["q"])(),Object(o["e"])(o["b"],{to:"body"},[Object(o["h"])("div",O,[Object(o["h"])("div",j,[Object(o["h"])("h3",v,Object(o["A"])(n.props.header),1),Object(o["h"])("button",{class:"p-1 text-sm mx-2 hover:text-black hover:bg-orange-500 self-start transition-color duration-300 rounded-full",type:"button",onClick:t[1]||(t[1]=function(){var e;return(e=n.modalFunc).closeModal.apply(e,arguments)})}," X ")]),Object(o["x"])(e.$slots,"child")])])})),w={props:{header:String},setup:function(e){var t=Object(o["l"])("modalFunc");return{modalFunc:t,props:e}}};r("0b46");w.render=x,w.__scopeId="data-v-208ded6c";var k=w,S={class:"flex flex-col items-center"},I=Object(o["h"])("p",{class:"italic text-xl font-semibold mt-2"}," Current Score is: ",-1),M={class:"grid grid-cols-3 gap-6 my-2 "},W={class:"col-span-2"},C={class:" my-2 italic font-semibold text-purple-400"},A=Object(o["h"])("p",{class:"italic font-semibold"},"Computer:",-1),D={class:"col-span-1 "},E={class:"text-purple-400 my-2"},G={class:"underline italic text-purple-400 font-semibold"},F={class:"list-disc"};function q(e,t,r,n,a,c){return Object(o["q"])(),Object(o["e"])("div",S,[I,Object(o["h"])("div",M,[Object(o["h"])("div",W,[Object(o["h"])("p",C,Object(o["A"])(n.gameData.username)+": ",1),A]),Object(o["h"])("div",D,[Object(o["h"])("p",E,Object(o["A"])(n.gameData.userScore),1),Object(o["h"])("p",null,Object(o["A"])(n.gameData.computerScore),1)])]),(Object(o["q"])(!0),Object(o["e"])(o["a"],null,Object(o["w"])(n.gameData.gameHistory,(function(e,t,r){return Object(o["q"])(),Object(o["e"])("div",{class:"flex flex-col my-3 text-center",key:r},[Object(o["h"])("p",G,Object(o["A"])(t.toUpperCase()),1),Object(o["h"])("ul",F,[(Object(o["q"])(!0),Object(o["e"])(o["a"],null,Object(o["w"])(e,(function(e,t,r){return Object(o["q"])(),Object(o["e"])("li",{key:r},Object(o["A"])(t)+": "+Object(o["A"])(e.toUpperCase()),1)})),128))])])})),128))])}var T={setup:function(){var e=Object(o["l"])("gameData");return{gameData:e}}};T.render=q;var U=T,H={components:{Modal:k,GameHistory:U},setup:function(){var e=Object(o["u"])({username:"Player-1",computerScore:0,userScore:0,round:1,gameHistory:{mysteryWord:{}}}),t=Object(o["u"])({showModal:!1,activeModalID:""}),r={openModal:function(e){t.activeModalID=e.target.id,t.showModal=!0,document.getElementById("app").classList.add("opacity-25"),setTimeout((function(){var e=document.getElementById("modalContainer");e.classList.toggle("opacity-0")}),50)},closeModal:function(){document.getElementById("app").classList.remove("opacity-25");var e=document.getElementById("modalContainer");e.classList.toggle("opacity-0"),setTimeout((function(){t.showModal=!1,t.activeModalID=""}),300)}};return Object(o["s"])("gameData",e),Object(o["s"])("modal",t),Object(o["s"])("modalFunc",r),{gameData:e,modal:t,modalFunc:r}}};H.render=g;var B=H,L=(r("b3d2"),{class:"flex flex-col items-center my-8"}),P=Object(o["h"])("p",{class:"italic my-2"}," Please enter your name ",-1),_={class:"flex flex-col items-center"},R=Object(o["h"])("p",null,"Select which game you woukld like to play!",-1),N={class:"flex flex-row justify-between"},Y={class:"p-1 w-32 mx-5 rounded border-2 border-gray-300 border-solid hover:bg-orange-500 hover:text-gray-100 duration-300 transition-colors",type:"button"},z=Object(o["g"])("Mystery Word"),V={class:"p-1 w-32 mx-5 rounded border-2 border-gray-300 border-solid hover:bg-purple-600 hover:text-gray-100 duration-300 transition-colors",type:"button"},J=Object(o["g"])("Blackjack");function K(e,t,r,n,a,c){var l=Object(o["y"])("router-link"),s=Object(o["y"])("Fragment");return Object(o["q"])(),Object(o["e"])(s,null,{default:Object(o["F"])((function(){return[Object(o["h"])("div",L,[P,Object(o["G"])(Object(o["h"])("input",{class:"my-2 border-2 border-solid border-gray-300 hover:bg-blue-200",maxlength:"20","onUpdate:modelValue":t[1]||(t[1]=function(e){return n.gameData.username=e})},null,512),[[o["C"],n.gameData.username]]),Object(o["h"])("button",{onClick:t[2]||(t[2]=function(){return n.resetGame.apply(n,arguments)}),class:"border-2 my-2 border-solid border-gray-300 rounded-lg p-1 hover:bg-red-700 hover:text-gray-100 duration-300 transition-colors",type:"button"}," Reset ")]),Object(o["h"])("div",_,[R,Object(o["h"])("div",N,[Object(o["h"])("button",Y,[Object(o["h"])(l,{to:"/MysteryWord"},{default:Object(o["F"])((function(){return[z]})),_:1})]),Object(o["h"])("button",V,[Object(o["h"])(l,{to:{name:"Blackjack"}},{default:Object(o["F"])((function(){return[J]})),_:1})])])])]})),_:1})}var X={setup:function(){var e=Object(o["l"])("gameData"),t=function(){e.userScore=0,e.computerScore=0,e.username="Player-1"};return{gameData:e,resetGame:t}}};X.render=K;var $=X,Q=r("954b"),Z={class:"flex flex-col"},ee={key:0,class:"flex flex-col m-4"},te={class:"flex-1"},re={class:"self-center"},oe={key:0,class:"flex flex-row items-baseline mt-4 self-center"},ne={key:1,class:"text-red-600 mt-2 text-lg xl:text-3xl self-center font-semibold"},ae={key:2,class:"text-green-600 mt-2 text-lg xl:text-3xl self-center font-semibold"},ce={class:"flex flex-col items-baseline mt-6 self-center"},le=Object(o["h"])("h5",{class:"text-xl text-red-600 font-semibold"},"Letters tried",-1),se={class:"flex flex-row"},ie={key:1,class:"flex flex-col items-center mt-20 justify-center xl:text-lg relative top-0"},ue=Object(o["h"])("p",{class:"font-semibold italic"}," How many letters do you want your word to be? ",-1),de={class:"flex mt-4 text-center"};function be(e,t,n,a,c,l){var s=Object(o["y"])("MysteryWordRules"),i=Object(o["y"])("Modal");return Object(o["q"])(),Object(o["e"])("div",Z,[Object(o["h"])("button",{id:"mysteryWord",class:"text-sm italic underline font-semibold hover:text-purple-600 duration-300 transition",type:"button",onClick:t[1]||(t[1]=function(){var e;return(e=a.modalFunc).openModal.apply(e,arguments)})}," SHOW RULES "),a.mysteryWordGame.playingGame?(Object(o["q"])(),Object(o["e"])("div",ee,[Object(o["h"])("div",te,[Object(o["h"])("img",{id:"vampire",class:"rounded relative w-16 h-16 lg:h-24 lg:w-24 xl:w-32 xl:h-32 pr-3 duration-300 transition opacity-100",src:r("b05e")},null,8,["src"]),Object(o["h"])("img",{id:"user",class:"rounded float-right w-24 h-16 lg:h-24 lg:w-32 xl:w-48 xl:h-32 pr-3 duration-300 transition opacity-100",src:r("c398")},null,8,["src"])]),Object(o["h"])("div",re,[(Object(o["q"])(!0),Object(o["e"])(o["a"],null,Object(o["w"])(a.mysteryWordGame.hiddenWord,(function(e,t){return Object(o["q"])(),Object(o["e"])("span",{class:"mx-2 md:text-lg xl:text-2xl",key:t},Object(o["A"])(e),1)})),128))]),a.mysteryWordGame.winner?Object(o["f"])("",!0):(Object(o["q"])(),Object(o["e"])("div",oe,[Object(o["G"])(Object(o["h"])("input",{class:"border-2 p-2 border-gray-300 border-solid hover:bg-orange-300 duration-300 transition-colors",type:"text",maxlength:"1","onUpdate:modelValue":t[2]||(t[2]=function(e){return a.mysteryWordGame.letterInput=e}),onKeyup:t[3]||(t[3]=Object(o["H"])((function(){return a.submit.apply(a,arguments)}),["enter"]))},null,544),[[o["C"],a.mysteryWordGame.letterInput]]),Object(o["h"])("button",{class:"ml-4 p-2 rounded border-2 border-gray-300 border-solid hover:bg-orange-500 duration-300 transition-colors",type:" button",onClick:t[4]||(t[4]=function(){return a.submit.apply(a,arguments)})}," Submit ")])),"computer"===a.mysteryWordGame.winner?(Object(o["q"])(),Object(o["e"])("h3",ne," YOU HAVE BEEN BITTEN! THE CORRECT WORD WAS "+Object(o["A"])(a.mysteryWordGame.wordSelected),1)):Object(o["f"])("",!0),"user"===a.mysteryWordGame.winner?(Object(o["q"])(),Object(o["e"])("h3",ae," YOU ESCAPED WITH YOUR LIFE ")):Object(o["f"])("",!0),Object(o["h"])("div",ce,[le,Object(o["h"])("div",se,[(Object(o["q"])(!0),Object(o["e"])(o["a"],null,Object(o["w"])(a.mysteryWordGame.lettersTried,(function(e,t){return Object(o["q"])(),Object(o["e"])("span",{class:"text-sm mx-2 text-red-600 font-semibold",key:t},Object(o["A"])(e),1)})),128))])])])):(Object(o["q"])(),Object(o["e"])("div",ie,[ue,Object(o["h"])("div",de,[Object(o["G"])(Object(o["h"])("input",{class:"p-2 mr-4 rounded-full border-2 border-solid border-gray-300 hover:bg-orange-300 duration-300 transition-colors",type:"number",min:"3",max:"12","onUpdate:modelValue":t[5]||(t[5]=function(e){return a.mysteryWordGame.numberFilter=e})},null,512),[[o["C"],a.mysteryWordGame.numberFilter]]),Object(o["h"])("button",{class:"p-2 rounded-full border-2 border-solid border-gray-300 hover:bg-orange-500 duration-300 transition-colors",type:"button",onClick:t[6]||(t[6]=function(){return a.startGame.apply(a,arguments)})}," Play ")])])),a.modal.showModal&&"mysteryWord"===a.modal.activeModalID?(Object(o["q"])(),Object(o["e"])(o["b"],{key:2,to:"body"},[Object(o["h"])(i,{header:"Rules"},{child:Object(o["F"])((function(){return[Object(o["h"])(s)]})),_:1})])):Object(o["f"])("",!0)])}r("cb29"),r("4de4"),r("4160"),r("caad"),r("a9e3"),r("d3b7"),r("ac1f"),r("25f0"),r("2532"),r("5319"),r("841c"),r("159b");var me=r("2909"),pe={class:"flex justify-center mt-2"},fe=Object(o["h"])("ul",{class:"list-disc list-inside text-start"},[Object(o["h"])("li",null," You will have 6 attempts to guess any letter in the word "),Object(o["h"])("li",null," If you cannot guess the letters in the word then you lose and the computer will get a point "),Object(o["h"])("li",null," If you guess all of the letters in the word then you win and will gain a point "),Object(o["h"])("li",null," You can change the amount of letters in the word from 3-12 on the home page. "),Object(o["h"])("li",null," Have Fun ")],-1);function he(e,t,r,n,a,c){return Object(o["q"])(),Object(o["e"])("div",pe,[fe])}var ge={};ge.render=he;var ye=ge,Oe=["afraid","afterlife","alarming","alien","angel","apparition","astronaut","autumn","ballerina","bat","beast","bizarre","black","blackcat","blood","bloodcurdling","bogeyman","bone","boo","broomstick","cackle","cadaver","candy","cape","carve","casket","cat","cauldron","cemetery","chilling","cloak","clown","cobweb","coffin","corpse","costume","cowboy","cowgirl","creepy","crown","crypt","dark","darkness","dead","death","demon","devil","devilish","disguise","dreadful","dressup","eerie","elf","enchant","evil","eyeballs","eyepatch","facepaint","fairy","fall","fangs","fantasy","fear","firefighter","flashlight","fog","fright","frighten","frightening","frightful","genie","ghastly","ghost","ghostly","ghoul","ghoulish","goblin","goodies","gory","gown","grave","gravestone","grim","GrimReaper","grisly","gruesome","hairraising","Halloween","hat","haunt","hauntedhouse","hayride","headstone","hobgoblin","hocuspocus","horrible","horrify","howl","imp","jackolantern","jumpsuit","kimono","king","lantern","macabre","magic","magicwand","makebelieve","makeup","mask","masquerade","mausoleum","midnight","mist","monster","moon","moonlight","moonlit","morbid","mummy","mysterious","night","nightmare","ninja","October","ogre","orange","otherworldly","owl","party","petrify","phantasm","phantom","pirate","pitchfork","poltergeist","potion","prank","pretend","prince","princess","pumpkin","queen","repulsive","revolting","RIP","robe","robot","scare","scarecrow","scary","scream","shadow","shadowy","shock","shocking","skeleton","skull","soldier","specter","spell","spider","spiderweb","spinechilling","spirit","spook","spooky","startling","strange","superhero","supernatural","superstition","sweets","tarantula","terrible","terrify","thirtyfirst","thrilling","tiara","toga","tomb","tombstone","treat","treats","trick","trickortreat","troll","tutu","unearthly","unnerving","vampire","vanish","wand","warlock","web","weird","werewolf","wicked","wig","witch","witchcraft","wizard","wizardry","wraith","zombie"],je=6,ve={components:{Modal:k,MysteryWordRules:ye},setup:function(){var e=Object(o["l"])("gameData"),t=Object(o["l"])("modalFunc"),n=Object(o["l"])("modal"),a=Object(o["u"])({playingGame:!1,numberFilter:"5",lettersTried:[],attempts:0,letterInput:"",wordSelected:"",hiddenWord:"",winner:""}),c=function(){var e=Oe,t=e.filter((function(e){return e.length===Number(a.numberFilter)}));if(t.length>0){var r=t.length-1,o=Math.round(Math.random()*r);a.wordSelected=t[o].toUpperCase(),a.hiddenWord=new Array(Number(a.numberFilter)).fill("_"),a.playingGame=!0,console.log(a.wordSelected)}else window.alert("I do not have any ".concat(a.numberFilter," letter words. Please choose another number."))},l=function(){e.round+=1,setTimeout((function(){a.playingGame=!1,a.lettersTried=[],a.attempts=0,a.winner=""}),3e3)},s=function(){var e=Object(me["a"])(a.wordSelected);e.forEach((function(e,t){a.letterInput.toUpperCase()===e&&(a.hiddenWord[t]=e)}))},i=function(e){var t=document.getElementById(e);"computer"===a.winner&&t.classList.add("bg-red-600"),setTimeout((function(){t.classList.add("opacity-0"),t.classList.remove("opacity-100")}),700)},u=function(){a.lettersTried.includes(a.letterInput.toUpperCase())?alert("YOU HAVE ALREADY SUBMITTED ".concat(a.letterInput.toUpperCase(),".")):-1===a.letterInput.search(/[a-zA-z]/)?alert("YOU MAY ONLY USE LETTERS"):!1===a.wordSelected.includes(a.letterInput.toUpperCase())&&a.attempts+1===je?d("computer"):(a.wordSelected.includes(a.letterInput.toUpperCase())?(s(),a.wordSelected===a.hiddenWord.toString().replaceAll(",","")&&d("user")):(b(),a.attempts+=1),a.lettersTried.push(a.letterInput.toUpperCase())),a.letterInput=""},d=function(t){"user"===t?(document.getElementById("user").src=r("754a"),a.winner="user",i("vampire"),e.userScore+=1):(b(),a.winner="computer",i("user"),e.computerScore+=1),e.gameHistory.mysteryWord["Round ".concat(e.round)]=t,l()},b=function(){var e=document.getElementById("vampire"),t=0,r=window.innerWidth-32,o=r/7;console.log(o),window.setInterval((function(){if(t<o){var r=Number(e.style.marginLeft.replace("px",""));r+=o/100,e.style.marginLeft="".concat(r,"px"),t+=o/100}else window.clearInterval()}),1)};return{gameData:e,modalFunc:t,modal:n,submit:u,mysteryWordGame:a,moveVampire:b,startGame:c}}};ve.render=be;var xe=ve,we={class:"about"};function ke(e,t,r,n,a,c){return Object(o["q"])(),Object(o["e"])("div",we,[Object(o["h"])("h1",null,"This is for BLACKJACK page "+Object(o["A"])(),1),Object(o["h"])("button",{class:"p-2 bg-blue-300",onClick:t[1]||(t[1]=function(){return n.testing.apply(n,arguments)}),type:"button"}," TEST ")])}var Se={setup:function(){var e=Object(o["l"])("gameData"),t=function(){e.computerScore+=1};return{gameData:e,testing:t}}};Se.render=ke;var Ie=Se,Me={class:"font-semibold text-4xl m-4"};function We(e,t,r,n,a,c){return Object(o["q"])(),Object(o["e"])("h1",Me,"404: PAGE NOT FOUND")}var Ce={};Ce.render=We;var Ae=Ce,De=[{path:"/",name:"Home",component:$,props:!0},{path:"/Blackjack",name:"Blackjack",component:Ie,props:!0},{path:"/MysteryWord",name:"MysteryWord",component:xe,props:!0},{path:"/:pathMatch(.*)*",name:"Page404",component:Ae,props:!0}],Ee=Object(Q["a"])({history:Object(Q["b"])(),routes:De}),Ge=Ee,Fe=r("5502"),qe=Object(Fe["a"])({state:{},mutations:{},actions:{},modules:{}}),Te=r("9483");Object(Te["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}}),Object(o["d"])(B).use(qe).use(Ge).mount("#app")},"754a":function(e,t,r){e.exports=r.p+"img/runaway.d4684762.png"},b05e:function(e,t,r){e.exports=r.p+"img/vampire.138f50d1.png"},b3d2:function(e,t,r){},c398:function(e,t,r){e.exports=r.p+"img/sleeping.75c9476a.png"}});
//# sourceMappingURL=app.4341ed39.js.map