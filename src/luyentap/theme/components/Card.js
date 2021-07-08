import React, {useContext} from 'react'
import ThemeContext from '../context/ThemeContext'

const CardTheme = () => {
  const {dark} = useContext(ThemeContext)
  return (
    <div style={{textAlign: 'center'}} className="Card">
      <div className="img"/>
      <h2>Thế giới của bọn ngáo</h2>
      <p>Đùa với đại ca à ?</p>
      <button>{dark ? `Dark Theme` : `Light Theme`}</button>
    </div>
  )
}

export default React.memo(CardTheme)