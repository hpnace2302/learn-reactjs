import React from 'react'
import { helper } from '../helpers/common'
import ContextCorona from '../context/index'

const GlobalCorona = () => {
    // props = {error, data}
    // if (!helper.isEmptyObject(error) || helper.isEmptyObject(data)) {
    //     // có lỗi 
    //     return (
    //         <h1 style={{color: 'red'}}>{error.mess}</h1>
    //     )
    // }
    return (
      <ContextCorona.Consumer>
        {context => {
          if (helper.isEmptyObject(context.virus)) {
            return <h3>not found data !</h3>
          } else {
            return (
              <section className="global__corona">
                <div className="global__item">
                    <p>Mới nhiễm bệnh : {context.virus.Global.NewConfirmed}</p>
                    <p>Tổng số ca nhiễm : {context.virus.Global.TotalConfirmed}</p>
                </div>
                <div className="global__item">
                    <p>Mới tử vong : {context.virus.Global.NewDeaths}</p>
                    <p>Tổng ca tử vong : {context.virus.Global.TotalDeaths}</p>
                </div>
                <div className="global__item">
                    <p>Mới khỏi bệnh : {context.virus.Global.NewRecovered}</p>
                    <p>Tổng ca khỏi bệnh : {context.virus.Global.TotalRecovered}</p>
                </div>
              </section>
            )
          }
        }}
        </ContextCorona.Consumer>
    )
}

export default React.memo(GlobalCorona)