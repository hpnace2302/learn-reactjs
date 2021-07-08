import React,{lazy, Suspense} from 'react'
import {Skeleton} from 'antd'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
const PopularMovies = lazy(() => import('../pages/popularMovies/index'))
const SearchMovies = lazy(() => import('../pages/searchMovies/index'))
const DetailMovie = lazy(() => import('../pages/detail/index'))
const LoginMoviePage = lazy(() => import('../pages/login/index'))
const RouteMovies = () => {
  return (
    <Router>
      <Suspense fallback={<Skeleton active/>}>
        <Switch>
        {/* đường dẫn mặc định */}
          <Route path="/">
            <PopularMovies/>
          </Route>
          <Route path="/popular-movie">
            <PopularMovies/>
          </Route>
          <Route path="/search-movie">
            <SearchMovies/>
          </Route>
          {/* localhosst:3000/movie/ngoi-nha-hanh-phuc~id */}
          {/* :slug :tên prama */}
          <Route path="/movie/:slug~:id">
            <DetailMovie/>
          </Route>
          <Route path="/movie/login">
            <LoginMoviePage/>
          </Route>
        </Switch>
      </Suspense>
    </Router>
  )
}

export default React.memo(RouteMovies)