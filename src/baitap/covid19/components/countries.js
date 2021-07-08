import React from 'react'
import CoronaContext from '../context/index'
import { helper } from '../helpers/common'

const CountriesCorona = () => {
    // if (!helper.isEmptyObject(error) || helper.isEmptyObject(data)) {
    //     // có lỗi 
    //     return (
    //         <h1 style={{color: 'red'}}>{error.mess}</h1>
    //     )
    // }
    // console.log(virus)
    return (
      <CoronaContext.Consumer>
        {context => {
          if (helper.isEmptyObject(context.virus)) {
            return <h3>not found data !</h3>
          } else {
            return (
              context.virus.Countries.map((item, index) => (
                <table width="100%" border="1" cellSpacing="0" cellPadding="0">
                    <thead>
                        <tr>
                            <th>Country</th>
                            <th>Country Code</th>
                            <th>New Confirmed</th>
                            <th>Total Confirmed</th>
                            <th>New Deaths</th>
                            <th>Total Deaths</th>
                            <th>New Recovered</th>
                            <th>Total Recovered</th>
                        </tr>
                    </thead>
                    <tbody>
                      <tr key={item.ID}>
                          <td>{item.Country}</td>
                          <td>{item.CountryCode}</td>
                          <td>{item.NewConfirmed}</td>
                          <td>{item.TotalConfirmed}</td>
                          <td>{item.NewDeaths}</td>
                          <td>{item.TotalDeaths}</td>
                          <td>{item.NewRecovered}</td>
                          <td>{item.TotalRecovered}</td>
                      </tr>
                    </tbody>
                </table>
              ))
            )
          }
        }}
      </CoronaContext.Consumer>
    )
}

export default React.memo(CountriesCorona)