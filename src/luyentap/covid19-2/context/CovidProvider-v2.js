import React, {useState, useEffect} from 'react'
import CoronaContext from './CoronaContext'
import {helper} from '../helpers/common'
import {api} from '../services/api'
import PropTypes from 'prop-types'

const CovidProviderV2 = (props) => {
  const [loading, setLoading] = useState(false)
  const [virus, setVirus] = useState({})

  useEffect(() => {
    const getData = async () => {
      setLoading(true)
      const data = await api.getDataVirusCorona()
      if (!helper.isEmptyObject(data)) {
        setVirus(data)
      } else {
        setVirus({})
      }
      setLoading(false)
    }
    getData()
  },[])
  return (
    <>
      <CoronaContext.Provider
        value={{loading: loading , virus: virus}}
      >
        {props.children}
      </CoronaContext.Provider>
    </>
  )
}

CovidProviderV2.propTypes = {
  children: PropTypes.node.isRequired
}

export default React.memo(CovidProviderV2)