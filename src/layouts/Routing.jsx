import React from 'react'
import { Routes, BrowserRouter, Route } from 'react-router-dom'

import App from '@/layouts/App'

import PagesHome from '@/pages/Home'
import PagesIndex from '@/pages/todos/Index'
import PagesShow from '@/pages/todos/Show'
import PagesCreate from '@/pages/todos/Create'
import PagesNotFound from '@/pages/NotFound'

import { TodosProvider } from '@/contexts/ToDos'
import PagesEdit from '@/pages/todos/Edit'

function Routing() {
  return (
    <BrowserRouter>
      <TodosProvider>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<PagesHome />} />
            <Route path="/todos" element={<PagesIndex />} />
            <Route path="/todos/:id" element={<PagesShow />} />
            <Route path="/todos/new" element={<PagesCreate />} />
            <Route path="/todos/:id/edit" element={<PagesEdit />} />
            <Route path="*" element={<PagesNotFound />} />
          </Route>
        </Routes>
      </TodosProvider>
    </BrowserRouter>
  )
}

export default Routing
