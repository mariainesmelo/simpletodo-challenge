<template>
  <div class="todoContainer">
    <div class="inputButtons">
      <form @submit.prevent="addTodo">
        <p>What do you have to do?</p>
        <input type="text" placeholder="Type here" v-model="text" />
        <button>Add Todo</button>
      </form>
      <form @submit.prevent="fetchCatFacts">
        <p>Find some cool cats facts!</p>
        <input type="number" placeholder="Number of facts" v-model="factsNo" />
        <button>Cats Facts</button>
      </form>
    </div>
  </div>
</template>

<script>
import store from "../store";

export default {
  data() {
    return {
      text: "",
      factsNo: 5,
    };
  },

  computed: {
    todos: () => store.state.todos,
    favoriteTodos: () => store.state.favoriteTodos,
  },
  methods: {
    addTodo() {
      store.commit("addTodo", this.text);
      this.text = "";
    },
    fetchCatFacts() {
      store.commit("fetchCatFacts", this.factsNo);
    },
  },
};
</script>


