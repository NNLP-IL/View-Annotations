(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["edit-board-vue"],{4838:function(t,o,r){"use strict";r.r(o);var a=function(){var t=this,o=t.$createElement,r=t._self._c||o;return r("b-row",[r("b-col",{attrs:{cols:"12"}},[r("h2",[t._v("\n      Edit Board\n      "),r("router-link",{attrs:{to:{name:"show-board",params:{id:t.key}}}},[t._v("(Show Board)")])],1),r("b-jumbotron",[r("b-form",{on:{submit:t.onSubmit}},[r("b-form-group",{attrs:{id:"fieldsetHorizontal",horizontal:"","label-cols":4,breakpoint:"md",label:"Enter Title"}},[r("b-form-input",{attrs:{id:"title"},model:{value:t.board.title,callback:function(o){t.$set(t.board,"title","string"===typeof o?o.trim():o)},expression:"board.title"}})],1),r("b-form-group",{attrs:{id:"fieldsetHorizontal",horizontal:"","label-cols":4,breakpoint:"md",label:"Enter Description"}},[r("b-form-textarea",{attrs:{id:"description",placeholder:"Enter something",rows:2,"max-rows":6},model:{value:t.board.description,callback:function(o){t.$set(t.board,"description",o)},expression:"board.description"}},[t._v(t._s(t.board.description))])],1),r("b-form-group",{attrs:{id:"fieldsetHorizontal",horizontal:"","label-cols":4,breakpoint:"md",label:"Enter Author"}},[r("b-form-input",{attrs:{id:"author"},model:{value:t.board.author,callback:function(o){t.$set(t.board,"author","string"===typeof o?o.trim():o)},expression:"board.author"}})],1),r("b-button",{attrs:{type:"submit",variant:"primary"}},[t._v("Update")])],1)],1)],1)],1)},e=[],i=r("dc59"),n=r("41cb"),s={name:"edit-board",data(){return{key:this.$route.params.id,board:{}}},created(){const t=i["a"].firestore().collection("annotations").doc(this.$route.params.id);t.get().then(t=>{t.exists?this.board=t.data():alert("No such document!")})},methods:{onSubmit(t){t.preventDefault();const o=i["a"].firestore().collection("annotations").doc(this.$route.params.id);o.set(this.board).then(t=>{this.key="",this.board.title="",this.board.description="",this.board.author="",n["a"].push({name:"show-board",params:{id:this.$route.params.id}})}).catch(t=>{alert("Error adding document: ",t)})}}},d=s,l=(r("eb15"),r("2877")),b=Object(l["a"])(d,a,e,!1,null,null,null);b.options.__file="edit-board.vue";o["default"]=b.exports},a2aa:function(t,o,r){},eb15:function(t,o,r){"use strict";var a=r("a2aa"),e=r.n(a);e.a}}]);
//# sourceMappingURL=edit-board-vue.621f99dc.js.map