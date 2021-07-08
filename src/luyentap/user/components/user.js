import React from 'react'
import { helper } from '../helpers/common'

const UserComponent = ({data,error}) => {
    if (!helper.isEmptyObject(error) || helper.isEmptyObject(data)) {
        // có lỗi 
        return (
            <>
                <h1 style={{color:'red'}}>{error.mess}</h1>
            </>
        )
    }
    // console.log(data)
    return (
        <div>
            <table width="100%" 
            border="1" 
            cellSpacing="0" 
            cellPadding="0">
            <thead>
                <tr>
                    <th>STT</th>
                    <th>Name</th>
                    <th>Singer Name</th>
                    {/* <th>Email</th>
                    <th>Address</th> */}
                </tr>
            </thead>
            <tbody>
                {data.map(item => (
                    <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.singer}</td>
                        {/* <td>{item.email}</td>
                        <td>{item.address.city}</td> */}
                    </tr>
                ))}
            </tbody>
        </table>
        </div>
    )
}

export default UserComponent;