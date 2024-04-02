import * as types from './mutations-types'
import API from '@/api'

export default {
  fetchBoards ({ commit }, {user}) {
    commit(types.FETCH_BOARDS_REQUEST)
    API.getBoardByUser(user).then(snap => commit(types.FETCH_BOARDS_SUCCES, {boards: snap.val()})).catch(error => commit(types.FETCH_BOARDS_FAILURE, {error}))
  },
  // fetch via AJAX de las listas asociadas a un panel
  fetchLists ({commit}, {board}) {
    commit(types.FETCH_LISTS_REQUEST)
    API.getListsFromBoard(board).then(snap => commit(types.FETCH_LISTS_SUCCES, {lists: snap.val()})).catch(error => commit(types.FETCH_LISTS_FAILURE, {error}))
  },

  // fetch via AJAX de las tareas de una lista
  fetchTasks ({commit}, {list}) {
    commit(types.FETCH_TASKS_REQUEST)
    API.getTasksFromList(list).then(snap => commit(types.FETCH_LISTS_SUCCES, {tasks: snap.val()})).catch(error => commit(types.FETCH_LISTS_FAILURE, {error}))
  },

  // Añadir un nuevo panel
  addBoard ({commit}, {name}) {
    API.postBoard(name).then(board => commit(types.ADD_BOARD, {board}))
  },
  addColumn ({ commit }, {board, name}) {
    API.postList(board, name).then((column) => commit(types.ADD_COLUMN, {column}))
  },
  addTask ({commit}, {list, title}) {
    API.postTasks(list, title).then((task) => commit(types.ADD_TASK, {task}))
  },
  deleteTask ({commit}, {taskId}) {
    API.deleteTask(taskId).then(() => commit(types.DELETE_TASK, {taskId}))
  },
  markAsCompleted ({commit}, {task}) {
    API.comletedTak(task.id).then(() => commit(types.MARK_AS_COMPLETED, {task}))
  }
}
