import React,{lazy, Suspense} from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { Skeleton } from 'antd';
import { helper } from '../helper/common';

const PopularMovies = lazy(() => import('../pages/popularMovies/index'))
const SearchMovies = lazy(() => import('../pages/searchMovies/index'))
const DetailMovies = lazy(() => import('../pages/detail/index'))
const LoginMoviePage = lazy(() => import('../pages/login/index'))

function IsLoginUserMovies({children,...rest}) {
  let auth = helper.fakeAuthLogin()
  return (
    <Route
      {...rest}
      render={({location}) => 
        auth ? (
          <Redirect
            to={{
              pathname: "/",
              state: { from: location }
            }}
          />
        ) : (
          children
        )
      }
    />
  )
}

function PrivateRouteMovie({ children, ...rest }) {
  let auth = helper.fakeAuthLogin(); // biet login hay chua
  return (
    <Route
      {...rest}
      render={({ location }) =>
        auth ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/movie/login",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}

const RouteMovies = () => {
  return (
    <Router>
      <Suspense fallback={<Skeleton active/>}>
        <Switch>
          <PrivateRouteMovie path="/" exact>
            <PopularMovies/>
          </PrivateRouteMovie>

          <PrivateRouteMovie path="/popular-movies">
            <PopularMovies/>
          </PrivateRouteMovie>

          <PrivateRouteMovie path="/search-movies">
            <SearchMovies/>
          </PrivateRouteMovie>

          <PrivateRouteMovie path="/movie/:slug~:id">
            <DetailMovies/>
          </PrivateRouteMovie>
          
          <IsLoginUserMovies path="/movie/login">
            <LoginMoviePage/>
          </IsLoginUserMovies>
        </Switch>
      </Suspense>
    </Router>
  )
}

export default React.memo(RouteMovies)