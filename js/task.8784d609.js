(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["task"],{"2fa3":function(t,e,n){"use strict";n("687e")},"687e":function(t,e,n){},"7d23":function(t,e,n){},9709:function(t,e,n){"use strict";n.r(e);var c=n("7a23"),s=Object(c["I"])("data-v-4e0f42cb");Object(c["r"])("data-v-4e0f42cb");var a={class:"tasks"},u=Object(c["e"])("课程检测");Object(c["p"])();var i=s((function(t,e,n,i,o,b){var r=Object(c["w"])("box-title"),l=Object(c["w"])("tsc");return Object(c["o"])(),Object(c["d"])("div",a,[Object(c["f"])(r,null,{default:s((function(){return[u]})),_:1}),Object(c["e"])(" "+Object(c["z"])(t.list.code)+" ",1),(Object(c["o"])(!0),Object(c["d"])(c["a"],null,Object(c["u"])(t.taskes,(function(t){return Object(c["o"])(),Object(c["d"])("div",{class:"task",key:t},[Object(c["f"])(l,{stc:t},null,8,["stc"])])})),128)),Object(c["f"])("div",null,[Object(c["f"])("button",{onClick:e[1]||(e[1]=function(){return t.hSubmit.apply(t,arguments)})},"提交")])])})),o=n("bc3a"),b=n.n(o),r=n("e5b9"),l=Object(c["g"])({name:"Task",props:{taskes:{type:Array,default:function(){return[{id:1,type:"single",subject:"xxxx",A:"选项A",B:"选项B",C:"选项C",D:"选项D",ans:"A"},{id:2,type:"single",subject:"xxxx",A:"选项A",B:"选项B",C:"选项C",D:"选项D",ans:"A"},{id:3,type:"single",subject:"xxxx",A:"选项A",B:"选项B",C:"选项C",D:"选项D",ans:"A"},{id:4,type:"single",subject:"xxxx",A:"选项A",B:"选项B",C:"选项C",D:"选项D",ans:"A"}]}}},components:{tsc:r["a"]},setup:function(){var t=Object(c["t"])({});return b.a.get("https://api.apiopen.top/singlePoetry").then((function(e){t.value=e.data})),{list:t}},methods:{hSubmit:function(){this.$router.push({path:"/taskresult",params:{a:1}})}}});n("d16e");l.render=i,l.__scopeId="data-v-4e0f42cb";e["default"]=l},d16e:function(t,e,n){"use strict";n("7d23")},e5b9:function(t,e,n){"use strict";var c=n("7a23"),s=Object(c["I"])("data-v-2547087f");Object(c["r"])("data-v-2547087f");var a={class:"ans radio-box"};Object(c["p"])();var u=s((function(t,e,n,s,u,i){return Object(c["o"])(),Object(c["d"])("div",null,[Object(c["f"])("div",{class:"subject",innerHTML:t.stc.subject},null,8,["innerHTML"]),Object(c["f"])("ul",null,[(Object(c["o"])(!0),Object(c["d"])(c["a"],null,Object(c["u"])(t.list,(function(n){return Object(c["o"])(),Object(c["d"])("li",{key:n,class:"item"},[Object(c["f"])("div",a,[Object(c["G"])(Object(c["f"])("input",{type:"radio",id:"o"+t.stc.id+n,value:n,name:"o"+t.stc.id,"onUpdate:modelValue":e[1]||(e[1]=function(e){return t.yourAns=e})},null,8,["id","value","name"]),[[c["C"],t.yourAns]]),Object(c["f"])("label",{for:"o"+t.stc.id+n},null,8,["for"]),Object(c["e"])(" "+Object(c["z"])(n),1)]),Object(c["f"])("div",{onClick:function(e){return t.hSelect(n)},class:"content",innerHTML:t.stc[n]},null,8,["onClick","innerHTML"])])})),128))])])})),i=Object(c["g"])({name:"Task",props:{stc:{type:Object}},data:function(){return{list:["A","B","C","D"],yourAns:""}},methods:{hSelect:function(t){console.log(t),this.yourAns=t}}});n("2fa3");i.render=u,i.__scopeId="data-v-2547087f";e["a"]=i}}]);
//# sourceMappingURL=task.8784d609.js.map