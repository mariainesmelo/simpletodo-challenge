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
    <div class="todoListContainer">
      <div class="listSpace">
        <ul>
          <h2>To do</h2>
          <li v-for="(todo, index) in todos" :key="index" class="todoItem">
            <p>{{ todo.text }}</p>
            <div class="todoItemButtonsContainer">
              <button @click="removeTodo(todo)">
                <img src="src/assets/delete-outline-24-px-1.svg" alt="" />
              </button>
              <button @click="addFavTodo(todo)">
                <img src="src/assets/favorite-border-24-px-1.svg" alt="" />
              </button>
            </div>
          </li>
        </ul>
      </div>
      <div class="listSpace">
        <ul>
          <h2>Favorites</h2>
          <li
            v-for="(todo, index) in favoriteTodos"
            :key="index"
            class="todoItem"
          >
            <p>{{ todo.text }}</p>
            <div class="todoItemButtonsContainer">
              <button @click="deleteFavTodo(todo)">
                <img src="src/assets/delete-outline-24-px-1.svg" alt="" />
              </button>
              <button
                @click="removeFromFavTodo(todo)"
                class="removeFromFavButton"
              >
                Remove from Fav
              </button>
            </div>
          </li>
        </ul>
      </div>
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
    deleteFavTodo(favTodo) {
      store.commit("deleteFavTodo", favTodo);
    },
    fetchCatFacts() {
      store.commit("fetchCatFacts", this.factsNo);
    },
  },
};
</script>


