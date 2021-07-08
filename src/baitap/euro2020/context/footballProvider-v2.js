import React, {useState, useEffect}from 'react'
import footballContext from './index'
import {api} from '../service/api'
import { helper} from '../helpers/common'
import PropTypes from 'prop-types'

const FootballProviderV2 = (props) => {
  const [loading, setLoading] = useState(false)
  const [football, setFootball] = useState({})
  useEffect(() => {
    const getData = async () => {
      setLoading(true)
      const data = await api.getDataEuro2020()
      if (!helper.isEmptyObject(data)) {
        setFootball(data)
      } else {
        setFootball({})
      }
      setLoading(false)
    }
    getData()
  },[]) // componentDidMount

  return (
    <>
      <footballContext.Provider value={{
        loading: loading, football: football}}>
        {props.children}
      </footballContext.Provider>
    </>
  )
}

FootballProviderV2.propTypes = {
  children: PropTypes.node.isRequired
}

export default FootballProviderV2