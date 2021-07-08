import React,{useState , useEffect} from 'react'
import ListMovie from './components/ListMovie'
import {api} from './service/api'
import { helper} from './helper/common'
import { Skeleton, Pagination, Row, Col } from 'antd'

const AppMovie = () => {
  const [loading, setLoading] = useState(false)
  const [movie,setListMovie] = useState({})
  const [page,setPage] = useState(1)
  const [totalResults, setTotalResults] = useState(0)
  const [totalPage, setTotalPage] = useState(0)

  // trong class component thì mình call api trong componentDidMount
  useEffect(() => {
    const getDataApi = async () => {
      setLoading(true)
      const data = await api.getDataMovies(page)
      if (!helper.isEmptyObject(data)) {
        if (data.hasOwnProperty('results')) {
          setListMovie(data.results)
        }
        if (data.hasOwnProperty('total_results')) {
          setTotalResults(data.total_results)
        }
        if (data.hasOwnProperty('total_pages')) {
          setTotalPage(data.total_pages)
        }
      }
      setLoading(false)
    }
    getDataApi()
  },[page])

  const getDataByPage = (p) => {
    if (p >= 1 && p <= totalPage) {
      setPage(p)
    }
  }
    
  // console.log(movie)
  // console.log(loading)
  return (
    <>
    {(loading || helper.isEmptyObject(movie)) ? 
    <Skeleton active/> : 
      <Row>
        <Col span={20} offset={2}>
          <ListMovie
            movie={movie}
          />
          <Pagination 
            style={{marginBottom: '30px',textAlign: 'center'}} 
            current={page} 
            total={totalResults}
            pageSize={20} 
            showSizeChanger={false}
            onChange={(p) => {
              getDataByPage(p)
            }}
          />
        </Col>
      </Row>
    }
    </>
  )
}

export default React.memo(AppMovie)