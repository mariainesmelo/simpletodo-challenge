<template>
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
              <button @click="removeFavTodo(todo)">
                <img src="src/assets/delete-outline-24-px-1.svg" alt="" />
              </button>
              <button
                @click="moveFromFavTodo(todo)"
                class="removeFromFavButton"
              >
                Remove from Fav
              </button>
            </div>
          </li>
        </ul>
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
    removeTodo(id) {
      store.commit("removeTodo", id);
    },
    addFavTodo(favTodo) {
      store.commit("addFavTodo", favTodo);
    },
    moveFromFavTodo(favTodo) {
      store.commit("moveFromFavTodo", favTodo);
    },
    removeFavTodo(favTodo) {
      store.commit("removeFavTodo", favTodo);
    }
  },
};
</script>
