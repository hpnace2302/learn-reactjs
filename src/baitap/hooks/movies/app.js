import React, {useState , useEffect} from 'react'
import ListMovie from './components/ListMovie'
import {api} from './service/api'
import {helper} from './helper/common'
import { Skeleton ,Pagination , Row, Col} from 'antd'

const App = () => {
  // khai báo state
  const [loading, setLoading] = useState(false) // load data
  const [movies, setListMovie] = useState({}) // data movies
  const [page, setPage] = useState(1) // data page
  const [totalResults, setTotalResults] = useState(0)
  const [totalPage, setTotalPage] = useState(0)

  // trong class component thì mình call api trong componentDidMount 
  // trong function component dùng useEffect

  // useEffect truyền vào 2 tham số : 1 là func , 2 là mảng rỗng
  // là mảng điều kiện rỗng
  useEffect(() => {
    // viết hàm call api
    const getDataApi = async () => {
      // setState
      setLoading(true)
      const data = await api.getDataMovies(page)
      if (!helper.isEmptyObject(data)) {
        // có dữ liệu trả về - cập nhật state
        if (data.hasOwnProperty('results')) {
          // kiểm tra obj có tồn tại key k ?
          setListMovie(data.results)
        }
        // cập nhật state total item
        if (data.hasOwnProperty('total_results')) {
          setTotalResults(data.total_results)
        }
        // cập nhật state total Page 
        if (data.hasOwnProperty('total_pages')) {
          setTotalPage(data.total_pages)
        }
      }
      setLoading(false) // dừng việc get data
    }
    getDataApi()
  },[page])   // tương đương componentDidMount và componentDidUpdate nếu mảng điều kiện k rỗng
  const getDataByPage = (p) => {
    // p >= 1 && p <= totalPage thì mới cập nhật state
    if (p >= 1 && p <= totalPage) {
      setPage(p)
    }
  }
  // console.log(loading)
  // console.log(movies)
  return (
    <>
      {loading || helper.isEmptyObject(movies) ?
       <Skeleton active/> :
       <>
        <Row style={{textAlign: 'center', marginBottom: '30px'}}>
          <Col span={20} offset={2}>
            <ListMovie movies = {movies}/>
            <Pagination 
              current={page}
              total={totalResults}
              pageSize={20} // do api quy dinh 20 movie trên trang
              showSizeChanger={false} // k hiển thị chọn item trên Trang
              onChange={p => getDataByPage(p)} // bấm chuyển trang , p là số trang đang chọn
            />
          </Col>
        </Row>
       </>}
    </>
  )
}

export default React.memo(App)