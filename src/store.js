import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    count: 0,
    time: new Date().getTime(),
    toDos: [
      { id: 1, text: 'one', done: true },
      { id: 2, text: 'two', done: false }
    ]
  },
  getters: {
    doneToDos: state => (done) => {
      return state.toDos.filter(
          todo => todo.done === done
      )
    }
  },
  mutations: {
    increment(state){
      state.count ++;
      state.time = new Date().getTime()
    }
  },
  actions: {

  }
})
