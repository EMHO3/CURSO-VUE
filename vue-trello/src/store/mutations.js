import Vue from 'vue'
import * as types from './mutations-types'

export default {
  // fetch de los paneles creaos por el usuario
  [types.FETCH_BOARDS_REQUEST] (state) {
    state.fetchingData = true
    state.error = null
  },
  [types.FETCH_BOARDS_SUCCES] (state, { boards }) {
    state.fetchingData = false
    state.error = null
    state.boards = {...boards}
  },
  [types.FETCH_BOARDS_FAILURE] (state, {error}) {
    state.fetchingData = false
    state.error = error
  },

  // fetch de las listas de un determinado panel
  [types.FETCH_LISTS_REQUEST] (state) {
    state.fetchingData = true
    state.error = null
  },
  [types.FETCH_LISTS_SUCCES] (state, { lists }) {
    state.fetchingData = false
    state.error = null
    state.lists = {...lists}
  },
  [types.FETCH_LISTS_FAILURE] (state, {error}) {
    state.fetchingData = false
    state.error = error
  },

  // fetch de las tareas de una lista
  [types.FETCH_TASKS_REQUEST] (state) {
    state.fetchingData = true
    state.error = null
  },
  [types.FETCH_TASKS_SUCCES] (state, { tasks }) {
    state.fetchingData = false
    state.error = null
    state.tasks = {...tasks}
  },
  [types.FETCH_TASKS_FAILURE] (state, {error}) {
    state.fetchingData = false
    state.error = error
  },
  [types.ADD_BOARD] (state, { board }) {
    Vue.set(state.boards, board.id, board)
  },
  [types.ADD_BOARD] (state, { column }) {
    Vue.set(state.lists, column.id, column)
  },
  [types.ADD_BOARD] (state, { tasks }) {
    Vue.set(state.lists, tasks.id, tasks)
  },
  [types.DELETE_TASK] (state, { taskId }) {
    state.tasks = Object.values(state.tasks).filter(task => task.id !== taskId)
  },
  [types.MARK_AS_COMPLETED] (state, {task}) {
    task.completed = !task.completed
  }

}
