import React,{useState} from 'react'
import LayoutMovies from '../../components/layout'
import BreadcrumbMovies from '../../components/Breadcrumb'
import InputSeachMovies from './components/search'
import CardMovies from '../../components/CardMovies'
import {Row, Col} from 'antd'
import {api} from '../../service/api'
import { helper} from '../../helper/common'

const SearchMovies = () => {
  const [loading, setLoading] = useState(false)
  const [dataSearch,setDataSearch] = useState({})
  // const [page, setPage] = useState(1)

  const searchFilm = async (keyword) => {
    setLoading(true)
    const data = await api.searchMoviesByKeyWord(keyword, 1)
    if (!helper.isEmptyObject(data)) {
      if (data.hasOwnProperty('results')) {
        setDataSearch(data.results)
      }
    }
    setLoading(false)
  }

  // useEffect(() => {

  // },[])
  return (
    <LayoutMovies>
      <BreadcrumbMovies
        item_lv1="Movies"
        item_lv2="AppMovies"
        item_lv3="Search"
      />
      <div className="site-layout-content">
        <Row>
          <Col span={24}>
            <InputSeachMovies
              search={searchFilm}
              loading={loading}
            />
            {!helper.isEmptyObject(dataSearch) 
              && 
              <Row style={{margin: '30px 0 0 0'}}>
                {dataSearch.map(item => (
                  <Col span={6} key={item.id}>
                    <CardMovies item={item}/>
                  </Col>
                ))}
              </Row>
            }
          </Col>
        </Row>
      </div>
    </LayoutMovies>
  )
}

export default React.memo(SearchMovies)