(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["add-board-vue"],{"314c":function(t,r,o){},"7e1d":function(t,r,o){"use strict";var a=o("314c"),e=o.n(a);e.a},d0e5:function(t,r,o){"use strict";o.r(r);var a=function(){var t=this,r=t.$createElement,o=t._self._c||r;return o("b-row",[o("b-col",{attrs:{cols:"12"}},[o("h2",[t._v("\n      Add Board\n      "),o("b-link",{attrs:{href:"/"}},[t._v("(Boards)")])],1),o("b-jumbotron",[o("b-form",{on:{submit:t.onSubmit}},[o("b-form-group",{attrs:{id:"fieldsetHorizontal",horizontal:"","label-cols":4,breakpoint:"md",label:"Enter Title"}},[o("b-form-input",{attrs:{id:"title"},model:{value:t.board.title,callback:function(r){t.$set(t.board,"title","string"===typeof r?r.trim():r)},expression:"board.title"}})],1),o("b-form-group",{attrs:{id:"fieldsetHorizontal",horizontal:"","label-cols":4,breakpoint:"md",label:"Enter Description"}},[o("b-form-textarea",{attrs:{id:"description",placeholder:"Enter something",rows:2,"max-rows":6},model:{value:t.board.description,callback:function(r){t.$set(t.board,"description",r)},expression:"board.description"}},[t._v(t._s(t.board.description))])],1),o("b-form-group",{attrs:{id:"fieldsetHorizontal",horizontal:"","label-cols":4,breakpoint:"md",label:"Enter Author"}},[o("b-form-input",{attrs:{id:"author"},model:{value:t.board.author,callback:function(r){t.$set(t.board,"author","string"===typeof r?r.trim():r)},expression:"board.author"}})],1),o("b-button",{attrs:{type:"submit",variant:"primary"}},[t._v("Save")])],1)],1)],1)],1)},e=[],i=o("dc59"),n=o("41cb"),d={name:"add-board",data(){return{ref:i["a"].firestore().collection("boards"),board:{}}},methods:{onSubmit(t){t.preventDefault(),this.ref.add(this.board).then(t=>{this.board.title="",this.board.description="",this.board.author="",n["a"].push({name:"boards"})}).catch(t=>{alert("Error adding document: ",t)})}}},s=d,l=(o("7e1d"),o("2877")),b=Object(l["a"])(s,a,e,!1,null,null,null);b.options.__file="add-board.vue";r["default"]=b.exports}}]);
//# sourceMappingURL=add-board-vue.0e156490.js.map