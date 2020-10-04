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
		removeTodo(state, todo) {
			state.todos.splice(state.todos.indexOf(todo), 1)
		},
		favTodo(state, favOnes) {
			state.favoriteTodos.push(favOnes)
		},
		fetchCatFacts(state, factsNo) {
			fetch(`https://cat-fact.herokuapp.com/facts/random?amount=${factsNo}`)
				.then(response => {
					response.json().then(data => {
						console.log(state.todos.concat(data))
						state.todos = state.todos.concat(data)
						// state.catsFacts = data
						// console.log(state.catsFacts);
						console.log(state.todos)
					})
				})
		}
	}
})



//