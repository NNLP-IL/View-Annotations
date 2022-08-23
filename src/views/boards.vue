<template>
  <div v-if="this.error != false">
    <div class="container text-center">
      <h2>Please enter password to access this page.</h2>

      <div class="row">
        <div class="col-md-6 offset-md-3">
          <form v-on:submit.prevent="validateBeforeSubmit">
            <div class="form-group text-left">
              <label class="custom-label control-label">Password</label>
              <input class="form-control password-field" type="password" name="password" v-model.trim="password">
              <span class="error help-block" ></span>
            </div>
            <div class="text-danger" v-if="error"><p>Incorrect password.</p></div>
            <button class="btn btn-primary" type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  </div>
  <b-row v-else>
    <b-col cols="12">
      <h2>
        Annotations
        <!-- <b-link href="/add-board">(Add Board)</b-link> -->
      </h2>
      <b-table striped hover :items="boards" :fields="fields">
        <template slot="actions" scope="row">
          <b-btn size="sm" @click.stop="details(row.item)">Details</b-btn>
        </template>
      </b-table>
    </b-col>
  </b-row>
</template>

<script>
import firebase from "../firebase"
import router from "../router"

export default {
  name: "boards",
  data() {
    return {
      fields: {
        title: { label: "Title", "class": "text-left" },
        withAnswer:{label:"With Answer", "class": "text-center" }, 
        noAnswer:{label:"No Answer", "class": "text-center" },
        actions: { label: "Action", "class": "text-right" }
      },
      boards: [],
      errors: [],
      ref: firebase.firestore().collection("annotations"),
      error: null,
      password: null
    }
  },
  created() {
    firebase.auth;
    this.ref.onSnapshot((querySnapshot) => {
      this.boards = [];
      querySnapshot.forEach((doc) => {
        let answers = this.parsedoc(doc.data());
        // console.log(doc);
        this.boards.push({
          key: doc.id,
          withAnswer: answers[0],
          noAnswer: answers[1],
          title: doc.id //doc.prolificID+" "+ doc.filename
        });
      });
    });
  },
  methods: {
    details(board) {
      router.push({ name: "show-board", params: { id: board.key }})
    },
    parsedoc(data){
      this.filename = data.filename;
      // console.log(this.filename);
      let paragraph = JSON.parse(data.json_data).data[0].paragraphs[0];
      this.paragraph = paragraph.context;
      this.prolificID = data.prolificID;
      let withAnswer = 0;
      let noAnswer = 0;
      for (var i = 0; i < paragraph.qas.length; i++) {
        if(paragraph.qas[i].answers[0].withAnswer== true || paragraph.qas[i].answers[0].withAnswer== "true")
          withAnswer = withAnswer + 1;
        else
          noAnswer = noAnswer +1;
      }
      let ret = [];
      ret.push(withAnswer);
      ret.push(noAnswer);
      return ret;
    },
    validateBeforeSubmit () {
      if (this.password === 'webiks') {
        this.error = false
      } else {
        this.error = true
      }
    }
  }
}
</script>

<style>
.table {
  width: 96%;
  margin: 0 auto;
}
</style>