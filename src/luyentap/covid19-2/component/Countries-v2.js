import React, {useContext}from 'react'
import { Row, Col, Table, Skeleton} from 'antd'
import {helper} from '../helpers/common'
import CoronaContext from '../context/CoronaContext'
import NumberFormat from 'react-number-format'

const columns = [
  // các dòng và cột của bảng
  {
    title: 'Country',
    dataIndex: 'Country',
    key: 'Country'
  },
  {
    title: 'Country Code',
    dataIndex: 'CountryCode',
    key: 'CountryCode'    
  },
  {
    title: 'New Confirmed',
    dataIndex: 'NewConfirmed',
    key: 'NewConfirmed',
    render: text => <NumberFormat value={text} displayType={'text'} thousandSeparator={true}/>
  },
  {
    title: 'Total Confirmed',
    dataIndex: 'TotalConfirmed',
    key: 'TotalConfirmed',
    render: text => <NumberFormat value={text} displayType={'text'} thousandSeparator={true}/>
  },
  {
    title: 'New Deaths',
    dataIndex: 'NewDeaths',
    key: 'NewDeaths',
    render: text => <NumberFormat value={text} displayType={'text'} thousandSeparator={true}/>
  },
  {
    title: 'Total Deaths',
    dataIndex: 'TotalDeaths',
    key: 'TotalDeaths',
    render: text => <NumberFormat value={text} displayType={'text'} thousandSeparator={true}/>
  },
  {
    title: 'New Recovered',
    dataIndex: 'NewRecovered',
    key: 'NewRecovered',
    render: text => <NumberFormat value={text} displayType={'text'} thousandSeparator={true}/>
  },
  {
    title: 'Total Recovered',
    dataIndex: 'TotalRecovered',
    key: 'TotalRecovered',
    render: text => <NumberFormat value={text} displayType={'text'} thousandSeparator={true}/>
  },
]

const CountriesVirus = () => {
  const {loading , virus} = useContext(CoronaContext)
  if (loading || helper.isEmptyObject(virus)) {
    return <Skeleton active/> // đợi loading data
  }
  return (
    <Row style={{marginTop: '20px' }}>
      <Col span={24}>
        <Table rowKey="ID" dataSource={virus.Countries} columns={columns}></Table>
      </Col>
    </Row>
  )
}

export default React.memo(CountriesVirus)