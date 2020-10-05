import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		todos: [],
		favoriteTodos: [],
	},
	mutations: {
		addTodo(state, text) {
			state.todos.push({ text })
		},
		removeTodo(state, todo,) {
			state.todos.splice(state.todos.indexOf(todo), 1)
		},
		addFavTodo(state, favTodo) {
			state.todos = state.todos.filter(todo => todo !== favTodo)
			state.favoriteTodos.push(favTodo)
		},
		moveFromFavTodo(state, favTodo){
			state.favoriteTodos = state.favoriteTodos.filter(todo => todo !== favTodo)
			state.todos.push(favTodo)
		},
		removeFavTodo(state, favTodo){
			state.favoriteTodos.splice(state.favoriteTodos.indexOf(favTodo), 1)
		},
		fetchCatFacts(state, factsNo) {
			fetch(`https://cat-fact.herokuapp.com/facts/random?amount=${factsNo}`)
				.then(response => {
					response.json().then(data => {
						console.log(state.todos.concat(data))
						state.todos = state.todos.concat(data)
						console.log(state.todos)
					})
				})
		}
	}
})



//