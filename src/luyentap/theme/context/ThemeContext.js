import React from 'react'

const ThemeContext = React.createContext({
  // truyền giá trị mặc định cho context
  dark: false,
  toggle: () => {

  }
})

export default ThemeContext