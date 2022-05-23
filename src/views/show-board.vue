<template>
  <b-row>
    <b-col cols="12">
      <h2>
        Check Annotation
        <b-link href="/">(All Annotations)</b-link>
        <b-button
                  :variant="'primary'"
                  v-download-data="valid_json"
                  v-download-data:type="'json'"
                  v-download-data:filename="this.key"
              >Download
              </b-button>
      </h2>
      <b-jumbotron>
        <h2>{{ this.filename}}</h2>
        <h3>Tagged By {{this.prolificID}}</h3>

      <br>
      <!-- <div class="demo"> -->
      <br>
        <p ref="paragraph">{{ paragraph /*JSON.parse(this.board.json_data).data*/}}</p>
        <!-- <p ref="paragraph1">{{ this.board }}</p> -->

      <b-table striped hover :items="qas">
      </b-table>
      </b-jumbotron>
    </b-col>
  </b-row>
</template>

<script>
import firebase from "../firebase"
import router from "../router"
export default {
  name: "show-board",
  data() {
    return {
      key: "",
      board: {},
      filename:"",
      paragraph:"",
      qas:[],
      prolificID:""
    }
  },
  created() {
    const ref = firebase.firestore().collection("annotations").doc(this.$route.params.id)
    ref.get().then((doc) => {
      if (doc.exists) {
        this.key = doc.id
        this.board = doc.data()
        this.parsedoc(doc.data())
        // console.log(doc.data())
      } else {
        alert("No such document!")
      }
    })
  },
  computed: {
    valid_json: function () {
      let json = JSON.stringify(this.board).replace(/[\u007F-\uFFFF]/g, function (
          chr
      ) {
        return "\\u" + ("0000" + chr.charCodeAt(0).toString(16)).substr(-4);
      });
      return json;
    }
},
  methods: {
    editBoard(id) {
      router.push({
        name: "edit-board",
        params: { id: id }
      })
    },
    deleteBoard(id) {
      firebase.firestore().collection("annotations").doc(id).delete().then(() => {
        router.push({
          name: "boards"
        })
      }).catch((error) => {
        alert("Error removing document: ", error)
      })
    },
    parsedoc(data){
      this.filename = data.filename;
      // console.log(this.filename);
      let paragraph = JSON.parse(data.json_data).data[0].paragraphs[0];
       this.paragraph = paragraph.context;
       this.prolificID = data.prolificID;
       let items =[];
       let color = "";
       for (var i = 0; i < paragraph.qas.length; i++) {
        if(paragraph.qas[i].answers[0].withAnswer== true || paragraph.qas[i].answers[0].withAnswer== "true")
            color = "success";
        else
             color = "danger";
        var item = {
          // fields: ["שאלות", "תשובות", "עריכה" , "יש-תשובה"]
          question: paragraph.qas[i].question,
          answer: paragraph.qas[i].answers[0].text,
          withAnswer: paragraph.qas[i].answers[0].withAnswer,
          answersStartIndex: paragraph.qas[i].answers[0].answer_start,
          _rowVariant: color
        };
        items.push(item);
      }
      this.qas = items;
    }
  }
}
</script>

<style>
.jumbotron {
  padding: 2rem;
}
.edit-btn {
  margin-right: 20px;
  width: 70px;
}
</style>