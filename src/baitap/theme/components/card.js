import React, {useContext} from 'react'
import ThemeContext from '../context/ThemeContext'
// import { IoMdMoon as Moon, IoMdSunny as Sun} from 'react-icons/io'

const CardTheme = () => {
  const { dark } = useContext(ThemeContext)
  return (
    <div className="Card">
      <div className="img"/>
      <h2>Thế giới của bọn ngáo</h2>
      <p>Đùa với đại ca à ? láo cá chó</p>
      <button>{dark ? `Dark Theme` : `Light Theme`}</button>
    </div>
  )
}

export default React.memo(CardTheme)