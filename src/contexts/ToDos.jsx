import React, { useState, createContext, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import produce from 'immer'

const TodosContext = createContext()

const initTodos = { data: null, error: null, loading: true }
const initTodo = { data: null, error: null, loading: true }

export function TodosProvider({ children }) {
  const [todos, setTodos] = useState(initTodos)
  const [todo, setTodo] = useState(initTodo)
  const navigation = useNavigate()

  const getTodos = async () => {
    setTodos(initTodos)
    setTodos(await produce(initTodos, async (draft) => {
      try {
        const resp = await axios({
          method: 'GET',
          url: 'https://fswdi-api-todos.herokuapp.com/api/todos'
        })
        draft.data = resp.data.todos
      } catch (err) {
        draft.error = err.response.data
      } finally {
        draft.loading = false
      }
    }))
  }

  const getTodo = async (id) => {
    setTodo(initTodo)
    setTodo(await produce(initTodo, async (draft) => {
      try {
        const resp = await axios({
          method: 'GET',
          url: `https://fswdi-api-todos.herokuapp.com/api/todos/${id}`
        })
        draft.data = resp.data.todo
      } catch (err) {
        draft.error = err.response.data
      } finally {
        draft.loading = false
      }
    }))
  }

  const createTodo = async (data) => {
    try {
      const resp = await axios({
        method: 'POST',
        url: 'https://fswdi-api-todos.herokuapp.com/api/todos',
        data
      })
      console.log(resp)  // eslint-disable-line
      navigation(`/todos/${resp.data.todo.id}`)
    } catch (err) {
      console.log(err)  // eslint-disable-line
    }
  }

  const editTodo = async (data) => {
    try {
      const resp = await axios({
        method: 'PUT',
        url: `https://fswdi-api-todos.herokuapp.com/api/todos/${data.id}`,
        data
      })
      navigation(`/todos/${resp.data.todo.id}`)
    } catch (err) {
      console.log(err) // eslint-disable-line
    }
  }

  const destroyTodo = async (deleteId) => {
    try {
      await axios({
        method: 'DELETE',
        url: `https://fswdi-api-todos.herokuapp.com/api/todos/${deleteId}`
      })
      console.log('deleted') // eslint-disable-line
      navigation('/todos')
    } catch (err) {
      console.log(err) // eslint-disable-line
    }
  }

  const contextData = {
    todos,
    getTodos,
    todo,
    getTodo,
    createTodo,
    editTodo,
    destroyTodo
  }

  return <TodosContext.Provider value={contextData}>{children}</TodosContext.Provider>
}

export function useTodos() {
  return useContext(TodosContext)
}
