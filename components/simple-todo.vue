<template>
  <div>
    <form @submit.prevent="addTodo">
      <input type="text" placeholder="What must be done?" v-model="text" />
      <button>Add Todo</button>
    </form>
    <div class="flexbox">
      <ul>
        <p>To do</p>
        <li v-for="(todo, index) in todos" :key="index">
          {{ todo.text }}
          <button @click="removeTodo(todo)">X</button>
          <button @click="addFavTodo(todo)">Favorite</button>
        </li>
      </ul>
      <ul>
        <p>Favorites</p>
        <li v-for="(todo, index) in favoriteTodos" :key="index">
          {{ todo.text }}
          <button @click="deleteFavTodo(todo)">X</button>
          <button @click="removeFromFavTodo(todo)">
            Remove from favorites
          </button>
        </li>
      </ul>
    </div>
    <form @submit.prevent="fetchCatFacts">
      <input type="number" placeholder="Number of facts" v-model="factsNo" />
      <button>Cats Facts</button>
    </form>
  </div>
</template>

<script>
import store from "../store";

export default {
  data() {
    return {
      text: "",
      factsNo: 5,
      favOnes: this.text,
    };
  },

  computed: {
    todos: () => store.state.todos,
    favoriteTodos: () => store.state.favoriteTodos,
    catsFacts: () => store.state.catsFacts,
  },
  methods: {
    addTodo() {
      store.commit("addTodo", this.text);
      this.text = "";
    },
    removeTodo(id) {
      store.commit("removeTodo", id);
    },
    addFavTodo(favTodo) {
      store.commit("addFavTodo", favTodo);
	},
	removeFromFavTodo(favTodo) {
      store.commit("removeFromFavTodo", favTodo);
	},
	deleteFavTodo(favTodo){
		store.commit('deleteFavTodo', favTodo)
	},
    fetchCatFacts() {
      store.commit("fetchCatFacts", this.factsNo);
    },
  },
};
</script>


<style>
.flexbox {
  display: flex;
  justify-content: space-around;
}
</style>