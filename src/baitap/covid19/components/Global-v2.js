import React, {useContext} from 'react'
import { Row, Col, Card, Skeleton } from 'antd'
import CoronaContext from '../context/index'
import { helper } from '../helpers/common'
import NumberFormat from 'react-number-format'

const GlobalVirus = () => {
  // useContext : hooks of context api
  const { loading, virus} = useContext(CoronaContext);
  if (loading || helper.isEmptyObject(virus)) {
    return <Skeleton active/> // đợi loading data
  } 
  return (
    <Row>
      <Col span={8}>
        <Card title="Nhiễm bệnh">
          <p>Ca nhiễm mới: <NumberFormat value={virus.Global.NewConfirmed} displayType={'text'} thousandSeparator={true}/> </p>
          <p>Tổng ca nhiễm: <NumberFormat value={virus.Global.TotalConfirmed} displayType={'text'} thousandSeparator={true}/></p>
        </Card>
      </Col>
      <Col span={8}>
        <Card title="Tử vong">
          <p>Số ca tử vong: <NumberFormat value={virus.Global.NewDeaths} displayType={'text'} thousandSeparator={true}/></p>
          <p>Tổng số ca tử vong: <NumberFormat value={virus.Global.TotalDeaths} displayType={'text'} thousandSeparator={true}/></p>
        </Card>
      </Col>
      <Col span={8}>
        <Card title="Khỏi bệnh">
          <p>Số ca khỏi bệnh: <NumberFormat value={virus.Global.NewRecovered} displayType={'text'} thousandSeparator={true}/></p>
          <p>Tổng số ca khỏi bệnh: <NumberFormat value={virus.Global.TotalRecovered} displayType={'text'} thousandSeparator={true}/></p>
        </Card>
      </Col>
    </Row>
  )
}

export default React.memo(GlobalVirus)