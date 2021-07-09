import React from 'react'
import CounterPage from './pages/app'
import { Provider } from 'react-redux'
import store from './store'

const App = () => {
  return (
    <>
      <Provider store={store}>
        <CounterPage/>
      </Provider>
    </>
  )
}

export default React.memo(App)