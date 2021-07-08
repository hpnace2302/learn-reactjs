import React from 'react'
import { helper } from '../helpers/common'
import CoronaContext from '../context/CoronaContext'

const CountriesCorona = ({error, data}) => {
    // if (!helper.isEmptyObject(error) || helper.isEmptyObject(data)) {
    //     // có lỗi 
    //     return (
    //         <>
    //             <h1 style={{color:'red'}}>{error.mess}</h1>
    //         </>
    //     )
    // }
    return (
        <CoronaContext.Consumer>
          {context => {
            if (helper.isEmptyObject(context.virus)) {
              return <h3>not found data !</h3>
            }
            return (
              <table width="100%" 
                border="1" 
                cellSpacing="0" 
                cellPadding="0">
                    <thead>
                        <tr>
                            <th>Country</th>
                            <th>CountryCode</th>
                            <th>NewConfirmed</th>
                            <th>TotalConfirmed</th>
                            <th>NewDeaths</th>
                            <th>TotalDeaths</th>
                            <th>NewRecovered</th>
                            <th>TotalRecovered</th>
                        </tr>
                    </thead>
                    <tbody>
                        {context.virus.Countries.map(item => (
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
                        ))}
                    </tbody>
              </table>
            )
          }}
        </CoronaContext.Consumer>
    )
}

export default React.memo(CountriesCorona)
