(function(t){function e(e){for(var n,r,s=e[0],d=e[1],l=e[2],u=0,p=[];u<s.length;u++)r=s[u],i[r]&&p.push(i[r][0]),i[r]=0;for(n in d)Object.prototype.hasOwnProperty.call(d,n)&&(t[n]=d[n]);c&&c(e);while(p.length)p.shift()();return a.push.apply(a,l||[]),o()}function o(){for(var t,e=0;e<a.length;e++){for(var o=a[e],n=!0,s=1;s<o.length;s++){var d=o[s];0!==i[d]&&(n=!1)}n&&(a.splice(e--,1),t=r(r.s=o[0]))}return t}var n={},i={app:0},a=[];function r(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=t,r.c=n,r.d=function(t,e,o){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(r.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)r.d(o,n,function(e){return t[e]}.bind(null,n));return o},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/todolist-vue/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],d=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var c=d;a.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},"034f":function(t,e,o){"use strict";var n=o("c21b"),i=o.n(n);i.a},"56d7":function(t,e,o){"use strict";o.r(e);o("cadf"),o("551c"),o("097d");var n=o("2b0e"),i=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-app",[o("v-toolbar",{attrs:{color:"primary",dark:"",extended:""}},[o("v-toolbar-side-icon"),o("v-toolbar-title",[t._v("BlackMaple's TODO")])],1),o("v-layout",{attrs:{wrap:"","mb-5":""}},[o("v-flex",{attrs:{xs8:"","offset-xs2":""}},[o("v-card",{staticClass:"card--flex-toolbar"},[o("v-toolbar",{attrs:{card:"",prominent:""}},[o("v-toolbar-title",{staticClass:"body-2 grey--text"},[t._v("待辦清單")]),o("v-spacer"),o("v-btn",{attrs:{icon:""}},[o("v-icon",[t._v("search")])],1)],1),o("v-divider"),o("v-layout",{staticStyle:{"min-height":"50px"},attrs:{column:""}},[t._l(t.todoList,function(e,n){return[o("todo-item",{key:e.id,attrs:{todo:e,index:n},on:{delete:t.deleteTodo}}),o("v-divider",{key:n})]})],2),o("v-text-field",{attrs:{label:"把要丟給黑楓的工作輸入進來吧～",box:"","hide-details":"","append-icon":t.inputTodo?"send":""},on:{"click:append":t.addTodo,keyup:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.addTodo(e):null}},model:{value:t.inputTodo,callback:function(e){t.inputTodo=e},expression:"inputTodo"}})],1)],1)],1)],1)},a=[],r=(o("ac6a"),function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-layout",{staticClass:"mx-4 my-2",attrs:{row:""}},[o("div",{staticClass:"body-1 ma-auto"},[t._v(t._s(t.todo.content))]),o("v-spacer"),t.todo.timestamp?o("div",{staticClass:"ma-auto mr-3"},[t._v("時間："+t._s(t.todo.timestamp.toDate().toLocaleString()))]):t._e(),o("v-btn",{attrs:{icon:""},on:{click:t.handleDelete}},[o("v-icon",[t._v("clear")])],1)],1)}),s=[],d={props:["todo","index"],methods:{handleDelete:function(){this.$emit("delete",this.index)}}},l=d,c=(o("91cc"),o("2877")),u=Object(c["a"])(l,r,s,!1,null,"1aecbaa6",null);u.options.__file="TodoItem.vue";var p=u.exports,f=o("8aa5"),v=o.n(f),b=(o("e71f"),{apiKey:"AIzaSyAIWl_tfFv-WOLLGalaLWABeVAiyOW9Gac",authDomain:"todolist-vue-a32bf.firebaseapp.com",databaseURL:"https://todolist-vue-a32bf.firebaseio.com",projectId:"todolist-vue-a32bf",storageBucket:"todolist-vue-a32bf.appspot.com",messagingSenderId:"292579075454"}),h=v.a.initializeApp(b),m=h.firestore(),y={timestampsInSnapshots:!0};m.settings(y);var _=m,x={components:{"todo-item":p},data:function(){return{inputTodo:"",todoList:[],todoCollection:null}},methods:{addTodo:function(){""!==this.inputTodo&&(this.todoList.push({content:this.inputTodo}),this.todoCollection.add({content:this.inputTodo,timestamp:v.a.firestore.FieldValue.serverTimestamp()}),this.inputTodo="")},deleteTodo:function(t){this.todoCollection.doc(this.todoList[t].id).delete(),this.todoList.splice(t,1)},initFirestore:function(){var t=this;this.todoCollection=_.collection("todos"),this.todoCollection.orderBy("timestamp").onSnapshot(function(e){var o=[];e.forEach(function(t){var e=t.data();e.id=t.id,o.push(e)}),t.todoList=o})}},created:function(){this.initFirestore()}},T=x,g=(o("034f"),Object(c["a"])(T,i,a,!1,null,null,null));g.options.__file="App.vue";var k=g.exports,O=o("2f62");n["default"].use(O["a"]);var w=new O["a"].Store({state:{},mutations:{},actions:{}}),S=o("ce5b"),j=o.n(S);o("bf40"),o("d1e7");n["default"].use(j.a),n["default"].config.productionTip=!1,new n["default"]({store:w,render:function(t){return t(k)}}).$mount("#app")},"91cc":function(t,e,o){"use strict";var n=o("edf0"),i=o.n(n);i.a},c21b:function(t,e,o){},edf0:function(t,e,o){}});
//# sourceMappingURL=app.e59ee278.js.map