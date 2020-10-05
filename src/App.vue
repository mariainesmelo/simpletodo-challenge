<template>
  <div id="app">
    <div class="navBar">
      <img src="./assets/logo.png" />
      <h1>{{ msg }}</h1>
    </div>
    <todosinput></todosinput>
    <todoslist></todoslist>
  </div>
</template>

<script>
import todosinput from "../components/todos-input.vue";
import todoslist from "../components/todos-list.vue";
import "./App.css";

export default {
  name: "app",

  components: {
    todosinput,
    todoslist
  },

  data() {
    return {
      msg: "Simple Todo",
    };
  },
};
</script>

