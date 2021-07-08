import React from 'react'
import CardTheme from './components/Card'
import SwitchTheme from './components/Switch'
import './theme.css'
import ThemeProvider from './context/ThemeProvider'

class App extends React.PureComponent {
  render() {
    return (
        <ThemeProvider>
          <div className="App">
            <h1>React Context Api</h1>
            <h2>Theme Switch</h2>
            <CardTheme/>
            <SwitchTheme/>
          </div>
        </ThemeProvider>
    )
  }
}

export default App;