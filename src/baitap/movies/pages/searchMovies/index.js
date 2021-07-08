import React,{useState} from 'react'
import LayoutMovies from '../../components/layout'
import BreadcrumbMovies from '../../components/breadcrumb'
import CardMovies from '../../components/CardMovies'
import InputSeachMovie from './components/search'
import {Row, Col} from 'antd'
import {api} from '../../service/api'
import { helper} from '../../helper/common'


const SearchMovies = () => {
  const [loading, setLoading] = useState(false)
  const [dataSearch,setDataSearch] = useState({})
  const [page, setPage] = useState(1)

  const searchFlim = async (keyword) => {
    setLoading(true)
    const data = await api.SearchMoviesByKeyWord(keyword, page)
    if (!helper.isEmptyObject(data)) {
      if (data.hasOwnProperty('results')) {
        setDataSearch(data.results)
      }
    }
    setLoading(false)
  }
  return (
    <LayoutMovies>
      <BreadcrumbMovies
        item_lv1="App"
        item_lv2="Movies"
        item_lv3="Search"
      />
      <div className="site-layout-content">
        <Row>
          <Col span={24}>
            <h3 style={{textAlign: 'center'}}>This is search movies page</h3>
            <InputSeachMovie
              search={searchFlim}
              loading={loading}
            />
            {!helper.isEmptyObject(dataSearch) &&
              <Row style={{marginTop: '30px'}}>
                {dataSearch.map(item => (
                  <Col span={6} key={item.ID}>
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