(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{182:function(e,a,t){e.exports=t(353)},352:function(e,a,t){},353:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(11),i=t.n(r),c=t(126),o=t(357),m=t(358),u=t(359),s=t(355),p=t(356),d=t(361),E=t(360),b=t(74),f=o.a.Title,v=o.a.Text,y={labelCol:{span:8},wrapperCol:{span:16},layout:"horizontal",size:"small"},w={wrapperCol:{offset:8,span:16}},h={required:"${label} jest wymagane!"},z=function(){var e=Object(n.useState)(null),a=Object(c.a)(e,2),t=a[0],r=a[1],i=m.a.useForm(),o=Object(c.a)(i,1)[0];return l.a.createElement(m.a,Object.assign({},y,{onFinish:function(e){console.log(e),r(e)},validateMessages:h,form:o}),l.a.createElement(f,{level:3},"Panel tworzenia zlecenia lekowego dla pacjenta"),l.a.createElement(v,null,"Informacje o leku"),l.a.createElement(m.a.Item,{label:"Nazwa",name:["medicine","name"],rules:[{required:!0}]},l.a.createElement(u.a,{showSearch:!0,style:{width:200},placeholder:"Wybierz lek",optionFilterProp:"children",filterOption:function(e,a){return a.children.toLowerCase().indexOf(e.toLowerCase())>=0}},l.a.createElement(u.a.Option,{value:"Avifavir"},"Avifavir"),l.a.createElement(u.a.Option,{value:"Abakawir"},"Abakawir"),l.a.createElement(u.a.Option,{value:"Abasaglar"},"Abasaglar"),l.a.createElement(u.a.Option,{value:"Abelcyt"},"Abelcyt"),l.a.createElement(u.a.Option,{value:"ABE"},"ABE"))),l.a.createElement(m.a.Item,{label:"Pora podania",name:["medicine","hour-of-application"],rules:[{required:!0}]},l.a.createElement(s.default.Group,null,l.a.createElement(s.default.Button,{value:"8:00"},"8:00"),l.a.createElement(s.default.Button,{value:"15:00"},"15:00"),l.a.createElement(s.default.Button,{value:"22:00"},"22:00"))),l.a.createElement(m.a.Item,{label:"Data podania",name:["medicine","date-of-application"],rules:[{required:!0}]},l.a.createElement(p.a,{placeholder:"Wybierz dat\u0119"})),l.a.createElement(m.a.Item,{label:"Ilo\u015b\u0107 w tabletkach",name:["medicine","quantity"],rules:[{required:!0}]},l.a.createElement(d.a,null)),l.a.createElement(m.a.Item,{name:["medicine","hospital-section"],label:"Oddzia\u0142",rules:[{required:!0}]},l.a.createElement(u.a,null,l.a.createElement(u.a.Option,{value:"oddzia\u0142 A"},"oddzia\u0142 A"),l.a.createElement(u.a.Option,{value:"oddzia\u0142 B"},"oddzia\u0142 B"),l.a.createElement(u.a.Option,{value:"oddzia\u0142 C"},"oddzia\u0142 C"))),l.a.createElement(v,null,"Dane pacjenta"),l.a.createElement(m.a.Item,{name:["pacient","name"],label:"Imi\u0119",rules:[{required:!0}]},l.a.createElement(E.a,null)),l.a.createElement(m.a.Item,{name:["pacient","surname"],label:"Nazwisko",rules:[{required:!0}]},l.a.createElement(E.a,null)),l.a.createElement(m.a.Item,{name:["pacient","pesel"],label:"PESEL",rules:[{required:!0},function(e){var a=e.getFieldValue;return{validator:function(e,t){return function(e){if(!e)return!1;if("string"!==typeof(e=e.toString()))return!1;for(var a=[1,3,7,9,1,3,7,9,1,3],t=0,n=parseInt(e.substring(10,11)),l=0;l<a.length;l++)t+=parseInt(e.substring(l,l+1))*a[l];return(10-(t%=10))%10===n}(a(["pacient","pesel"]))?Promise.resolve():Promise.reject("Nie poprawny PESEL!")}}}]},l.a.createElement(d.a,null)),l.a.createElement(m.a.Item,w,l.a.createElement(b.a,{type:"primary",htmlType:"submit"},"Wy\u015blij"),l.a.createElement(b.a,{htmlType:"button",onClick:function(){o.resetFields()}},"Reset")),t&&l.a.createElement(v,null,"Ostatnie wys\u0142ane zlecenie by\u0142o dla pacjenta: ",t.pacient.name," ",t.pacient.surname,l.a.createElement("br",null)),l.a.createElement(v,null,"po wys\u0142aniu dane mo\u017cna zobaczy\u0107 w konsoli"))},O=(t(351),t(352),function(){return l.a.createElement("div",{className:"box-wrapper-grid"},l.a.createElement("div",{className:"box"},l.a.createElement(z,null)))});var g=function(){return l.a.createElement("div",{className:"App"},l.a.createElement("main",null,l.a.createElement(O,null)))};i.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(g,null),","),document.getElementById("root"))}},[[182,1,2]]]);
//# sourceMappingURL=main.ce6a21b4.chunk.js.map