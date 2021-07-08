import React from 'react'
import { Layout, Menu } from 'antd'
import { NavLink, useLocation , useHistory } from 'react-router-dom'
import {helper} from '../../helper/common'

const { Header } = Layout

const HeaderMovies = () => {
  // biết được vị trí đường link
  // hooks của react router dom
  const {pathname} = useLocation()
  const emailUser = helper.getEmailUser()
  const history = useHistory()

  const logoutMovies = () => {
    helper.removeToken()
    // quay về trang login
    history.push('/movie/login')
  }
  return (
    <Header>
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={pathname}>
        <Menu.Item key="/popular-movies">
          <NavLink to="/popular-movies">Popular Movies</NavLink>
        </Menu.Item>
        <Menu.Item key="/search-movies">
          <NavLink to="/search-movies">Search Movies</NavLink>
        </Menu.Item>
        { emailUser === null &&
        <Menu.Item key="/movie/login">
          <NavLink to="/movie/login">
            Login
          </NavLink>
        </Menu.Item>
        }
        {emailUser !== null &&
          <Menu.Item key="user">Hi : {emailUser}</Menu.Item>
        }
        {emailUser !== null && 
        <Menu.Item key="logout" onClick={() => logoutMovies()}>
          Logout
        </Menu.Item>
        }
      </Menu>
    </Header>
  )
}

export default React.memo(HeaderMovies)