import React, { useState, createContext, useContext } from 'react'
import axios from 'axios'
import produce from 'immer'

const TodosContext = createContext()

const initTodos = { data: null, error: null, loading: true }

export function TodosProvider({ children }) {
  const [todos, setTodos] = useState(initTodos)

  const getTodos = async () => {
    setTodos(initTodos)
    setTodos(await produce(initTodos, async (draft) => {
      try {
        const resp = await axios({
          method: 'GET',
          url: 'https://fswdi-api-todos.herokuapp.com/api/todos'
        })
        draft.data = resp.data.data
      } catch (err) {
        draft.error = err.response.data
      } finally {
        draft.loading = false
      }
    }))
  }

  const contextData = {
    todos,
    getTodos
  }

  return <TodosContext.Provider value={contextData}>{children}</TodosContext.Provider>
}

export function useTodos() {
  return useContext(TodosContext)
}
