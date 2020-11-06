import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    list: [],
    tasks: [],
    choosenEmployer: {},
    isMobile: false,
    isTablet: false,
    isDesktop: true
  },
  mutations: {
    SET_LIST (state, value) {
      state.list = value
    },
    SET_TASKS (state, value) {
      state.tasks = value
    },
    SET_CHOOSEN_EMPLOYER (state, value) {
      state.choosenEmployer = value
    },
    CLEAR_STATE (state) {
      state.list = []
      state.tasks = []
    },
    SET_IS_MOBILE (state, value) {
      state.isMobile = value
    },
    SET_IS_TABLET (state, value) {
      state.isTablet = value
    },
    SET_IS_DESKTOP (state, value) {
      state.isDesktop = value
    }
  },
  actions: {
    async fetchEmployeesList ({ commit }) {
      let list = null
      try {
        list = await Axios.get('https://jsonplaceholder.typicode.com/users')
      } catch (e) {
        console.error('при вызове списка сотрудников произошла ошибка', e)
      }
      commit('SET_LIST', list && list.data)
    },

    async getEmployerTasks ({ commit }, id) {
      let tasks = null
      try {
        tasks = await Axios.get(`https://jsonplaceholder.typicode.com/users/${id}/todos`)
      } catch (e) {
        console.error('при вызове списка задач произошла ошибка', e)
      }
      tasks = tasks.data.map(task => {
        task.importance = false
        return task
      })
      commit('SET_TASKS', tasks)
    }
  }
})
