import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import notes from './reducers/notes'

// import { notesReducer } from './notesReducer'
// const store = createStore(notesReducer)
// 异步请求中间件 https://redux.js.org/api/applymiddleware
// https://blog.csdn.net/qq_15009739/article/details/107223233
const store = createStore(
  combineReducers({
    notes,
  }),
  applyMiddleware(thunk),
)

export default store
