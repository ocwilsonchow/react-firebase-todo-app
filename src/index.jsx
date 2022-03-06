import { AppContainer } from 'react-hot-loader'
import React from 'react'
import ReactDOM from 'react-dom'

import Routing from '@/layouts/Routing'
import '@/styles/index.scss'

const render = () => {
  ReactDOM.render((
    <AppContainer>
      <Routing />
    </AppContainer>
  ), document.getElementById('root'))
}

render()

if (module.hot) {
  module.hot.accept('@/layouts/App', () => {
    render()
  })
}
