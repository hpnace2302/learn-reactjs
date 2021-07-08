import React,{useState, useEffect} from 'react'
import LayoutMovies from '../../components/layout'
import BreadcrumbMovies from '../../components/Breadcrumb'
import {Row, Col, Image, Skeleton} from 'antd'
import { useParams } from 'react-router-dom'
import {api} from '../../service/api'
import { helper} from '../../helper/common'

const DetailMovies = () => {
  const {id , slug} = useParams()

  const [loading, setLoading] = useState(true)
  const [detailMovies, setDetailMovies] = useState({})


  useEffect(() => {
    const getData = async () => {
      const data = await api.getDataMoviesById(id)
      const result = {}
      if (!helper.isEmptyObject(data)) {
        result.poster_path = data.poster_path;
        result.original_title = data.original_title;
        result.title = data.title;
        result.overview = data.overview;
        result.imdb_id = data.imdb_id;
        result.vote_average = data.vote_average;
        result.vote_count = data.vote_count;
        result.images = data['images']['posters'] || [];
        setDetailMovies(result);
      }
      setLoading(false)
    }
    getData()
  },[id])
  if (loading || helper.isEmptyObject(detailMovies)) {
    return <Skeleton active/>
  }
  return (
    <LayoutMovies>
      <BreadcrumbMovies
        item_lv1="App"
        item_lv2="Movies"
        item_lv3={slug}
      />
      <div className="site-layout-content">
        <Row>
          <Col span={8}>
            <div style={{padding: '20px'}}>
              <Image
                src={`https://image.tmdb.org/t/p/w300/${detailMovies.poster_path}`}
              />
              <p style={{textAlign: 'center'}}>{detailMovies.original_title}</p>
            </div>
          </Col>
          <Col span={16}>
            <div style={{padding: '20px'}}>
              <h2>Tên bộ phim : {detailMovies.title}</h2>
              <p>Miêu tả : {detailMovies.overview}</p>
              <p>Vote average :{detailMovies.vote_average}</p>
              <p>Vote count : {detailMovies.vote_count}</p>
              <p>imdb id : {detailMovies.imdb_id}</p>
              <Row style={{margin: '20px 0 0 0'}}>
                {detailMovies.images.map((item,index) => (
                  <Col span={4} key={index} style={{marginRight:'10px'}}>
                    <Image
                      src={`https://image.tmdb.org/t/p/w300/${item.file_path}`}
                    />
                  </Col>
                ))}
              </Row>
            </div>
          </Col>
        </Row>
      </div>
    </LayoutMovies>
  )
}

export default React.memo(DetailMovies)