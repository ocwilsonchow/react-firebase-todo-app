import React from 'react'
import { Routes, BrowserRouter, Route } from 'react-router-dom'

import App from '@/layouts/App'

import PagesHome from '@/pages/Home'
import PagesShow from '@/pages/todos/Index'
import PagesCreate from '@/pages/Create'
import PagesNotFound from '@/pages/NotFound'

import { TodosProvider } from '@/contexts/ToDos'

function Routing() {
  return (
    <BrowserRouter>
      <TodosProvider>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<PagesHome />} />
            <Route path="/todos" element={<PagesShow />} />
            <Route path="/todos/new" element={<PagesCreate />} />
            <Route path="*" element={<PagesNotFound />} />
          </Route>
        </Routes>
      </TodosProvider>
    </BrowserRouter>
  )
}

export default Routing
