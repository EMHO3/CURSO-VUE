import { db } from './firebase'

const boardsRef = db.ref('/boards')
const listRef = db.ref('/list')
const taskRef = db.ref('/tasks')

export default {
  getBoardByUser (userId = 1) {
    const query = boardsRef.orderByChild('owner').equalTo(userId)
    return query.once('value')
  },
  postBoard (name, owner = 1) {
    const id = boardsRef.push().key
    const board = { id, name, owner }
    return boardsRef.child(id).set(board).then(() => board)
  },
  getListsFromBoard (boardID) {
    const query = listRef.orderByChild('board').equalTo(boardID)
    return query.once('value')
  },
  postList (board, name) {
    const id = listRef.push().key
    const column = {id, name, board}
    return listRef.child(id).set(column).then(() => column)
  },
  getTasksFromList (listId) {
    const query = taskRef.orderByChild('list').equalTo(listId)
    return query.once('value')
  },
  postTask (list, title) {
    const id = taskRef.push().key
    const task = {id, list, title, completed: false}
    return taskRef.child(id).set(task).then(() => task)
  },
  deleteTask (taskId) {
    return taskRef.child(taskId).remove()
  },
  comletedTak (taskId) {
    const query = taskRef.child(taskId).child('completed')
    return query.once('value').then(snap => snap.val()).then(data => query.set(data))
  }
}
