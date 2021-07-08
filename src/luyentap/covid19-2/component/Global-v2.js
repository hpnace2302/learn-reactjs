import React, {useContext} from 'react'
import {Row, Col, Card, Skeleton} from 'antd'
import CoronaContext from '../context/CoronaContext'
import {helper} from '../helpers/common'
import NumberFormat from 'react-number-format'

const GlobalVirus = () => {
  const {loading , virus} = useContext(CoronaContext)
  if (loading || helper.isEmptyObject(virus)) {
    return <Skeleton active/> // đợi loading data
  }
  
  return (
    <Row>
      <Col span={8}>
        <Card title="Nhiễm bệnh">
          <p>- Số ca nhiễm mới : <NumberFormat thousandSeparator displayType={'text'} value={virus.Global.NewConfirmed}/></p>
          <p>- Tổng số ca nhiễm : <NumberFormat thousandSeparator displayType={'text'} value={virus.Global.TotalConfirmed}/></p>
        </Card>
      </Col>
      <Col span={8}>
        <Card title="Tử vong">
          <p>- Số ca tử vong mới : <NumberFormat thousandSeparator displayType={'text'} value={virus.Global.NewDeaths}/></p>
          <p>- Tổng số ca tử vong : <NumberFormat thousandSeparator displayType={'text'} value={virus.Global.TotalDeaths}/></p>
        </Card>
      </Col>
      <Col span={8}>
        <Card title="Khỏi bệnh">
          <p>- Số ca khỏi bệnh mới : <NumberFormat thousandSeparator displayType={'text'} value={virus.Global.NewRecovered}/></p>
          <p>- Tổng số ca khỏi bệnh : <NumberFormat thousandSeparator displayType={'text'} value={virus.Global.TotalRecovered}/></p>
        </Card>
      </Col>
    </Row>
  )
}

export default React.memo(GlobalVirus)