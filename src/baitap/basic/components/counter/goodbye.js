import React from 'react'
const GoodbyeComponent = () => {
    console.log('123')
    return (
        <>
            <h1>See you again</h1>
        </>
    )
}
// áp dụng cho func component tương tự như PureComponent của class
export default React.memo(GoodbyeComponent);