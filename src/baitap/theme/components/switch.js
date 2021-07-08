import React, {useContext} from 'react'
import ThemeContext from '../context/ThemeContext'
import { IoMdMoon as Moon, IoMdSunny as Sun} from 'react-icons/io'

const SwitchTheme = () => {
  const {toggle, dark} = useContext(ThemeContext)
  return (
    <button className="Switch" onClick={() => toggle()}>
      <Sun className={`icon ${!dark ? 'active' : ''}`} />
      <Moon className={`icon ${dark ? 'active' : ''}`} />
    </button>
  )
}

export default React.memo(SwitchTheme)