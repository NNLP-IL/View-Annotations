(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["show-board-vue"],{"70d0":function(a,e,t){"use strict";var s=t("7513"),r=t.n(s);r.a},7513:function(a,e,t){},df73:function(a,e,t){"use strict";t.r(e);var s=function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("b-row",[t("b-col",{attrs:{cols:"12"}},[t("h2",[a._v("\n      Check Annotation\n      "),t("b-link",{attrs:{href:"/"}},[a._v("(All Annotations)")])],1),t("b-jumbotron",[t("h2",[a._v(a._s(this.filename))]),t("h3",[a._v("Tagged By "+a._s(this.prolificID))]),t("br"),t("br"),t("p",{ref:"paragraph"},[a._v(a._s(a.paragraph))]),t("b-table",{attrs:{striped:"",hover:"",items:a.qas}})],1)],1)],1)},r=[],n=t("dc59"),o=t("41cb"),i={name:"show-board",data(){return{key:"",board:{},filename:"",paragraph:"",qas:[],prolificID:""}},created(){const a=n["a"].firestore().collection("annotations").doc(this.$route.params.id);a.get().then(a=>{a.exists?(this.key=a.id,this.board=a.data(),this.parsedoc(a.data())):alert("No such document!")})},methods:{editBoard(a){o["a"].push({name:"edit-board",params:{id:a}})},deleteBoard(a){n["a"].firestore().collection("annotations").doc(a).delete().then(()=>{o["a"].push({name:"boards"})}).catch(a=>{alert("Error removing document: ",a)})},parsedoc(a){this.filename=a.filename;let e=JSON.parse(a.json_data).data[0].paragraphs[0];this.paragraph=e.context,this.prolificID=a.prolificID;let t=[],s="";for(var r=0;r<e.qas.length;r++){s=1==e.qas[r].answers[0].withAnswer||"true"==e.qas[r].answers[0].withAnswer?"success":"danger";var n={question:e.qas[r].question,answer:e.qas[r].answers[0].text,withAnswer:e.qas[r].answers[0].withAnswer,_rowVariant:s};t.push(n)}this.qas=t}}},d=i,h=(t("70d0"),t("2877")),c=Object(h["a"])(d,s,r,!1,null,null,null);c.options.__file="show-board.vue";e["default"]=c.exports}}]);
//# sourceMappingURL=show-board-vue.16b15308.js.map