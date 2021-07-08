import React from 'react'
import ThemeContext from './ThemeContext'
import PropTypes from 'prop-types'

const ThemeLight = [
  '--border: rgba(0,0,0,.2)',
  '--shadow: #000',
  '--heading: rgba(255,100,0,1)',
  '--main: #1d8f13',
  '--text: #000',
  '--textAlt: #fff',
  '--inactive: rgba(0,0,0,.3)',
  '--background: #fff',
]

const ThemeDark = [
  '--border: rgba(255,255,255,.1)',
  '--shadow: #000',
  '--heading: rgba(255,255,5,.9)',
  '--main: #79248f',
  '--text: rgb(255, 255, 255)',
  '--textAlt: #fff',
  '--inactive: rgba(255,255,255,.3)',
  '--background: #2D2D2D',
]

class ThemeProvider extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      dark: false, // nền trắng và ngược lại

    }
  }

  // gọi nó trong componentDidMount và componentDidUpdate
  applyTheme = (theme) => {
    // css cho toàn bộ trang
    const root = document.querySelector('html')
    root.style.cssText = theme.join(';')
  }

  // viết hàm chuyển đổi màu sắc
  // khi người dùng bấm chọn màu sắc giao diện
  toggle = () => {
    // css cho thẻ body
    const body = document.querySelector('body')
    body.style.cssText = 'transition: background .5s ease'

    // cập nhật lại state
    this.setState(state => ({...this.state, dark: !state.dark}))
    // lưu giá trị state dark vào localStorage
    window.localStorage.setItem('darkTheme', this.state.dark)
  }

  componentDidMount() {
    // khi mà render giao diện lần đầu - mounting ( cần biết là đang có giao diện màu gì ?)
    const lastTheme = window.localStorage.getItem('darkTheme')
    // dạng dữ liệu string k phải boolean
    if (lastTheme === 'true') {
      // lastTheme: theme màu tối 
      // cập nhật lại state
      this.setState({...this.state, dark: true})
    } else {
      this.setState({...this.state, dark: false})
    }
  }
  // khi ng dùng bấm chọn màu nền giao diện
  componentDidUpdate() {
    // trong componentDidUpdate k thể cập nhật state
    // cta cập nhật thẳng vào giao diện
    const theme = window.localStorage.getItem('darkTheme')
    if (theme === 'true') {
      // chọn nền màu đen
      this.applyTheme(ThemeLight)
    } else {
      // chọn nền màu trắng
      this.applyTheme(ThemeDark)
    }
  }

  render() {
    return (
      <ThemeContext.Provider value={{dark: this.state.dark, toggle: this.toggle}}>
        {this.props.children}
      </ThemeContext.Provider>
    )
  }
}

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired
}

export default ThemeProvider