import React from 'react'
import CardTheme from './components/card'
import SwitchTheme from './components/switch'
import './theme.css'
import ThemeProvider from './context/ThemeProvider'

class AppTheme extends React.Component {
  render() {
    return (
      <ThemeProvider>
        <>
          <div className="App">
            <h2>React Context Api</h2>
            <h2>Theme Switch</h2>
            <CardTheme/>
            <SwitchTheme/>
          </div>
        </>
      </ThemeProvider>
    )
  }
}

export default AppTheme;