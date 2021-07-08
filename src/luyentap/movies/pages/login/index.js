import React,{useState} from 'react'
import {Row, Col, Form , Input, Button } from 'antd'
import {api} from '../../service/api'
import { helper } from '../../helper/common'
import {useHistory} from 'react-router-dom'

const LoginMovie = () => {
  const history = useHistory()
  const [errorLogin,setErrorLogin] = useState(null)


  const onFinish = (values) => {
    // console.log('Success:', values);
    const {username, password} = values
    const token = api.checkLoginUser(username, password)
    if (token !== null) {
      setErrorLogin(null)
      // lưu token vào localStorage - cookie browser
      helper.saveTokenLocalStorage(token)
      // quay vào trang tìm kiếm phim
      history.push('/search-movies')
    } else {
      setErrorLogin("accout invalid")
    }
    // console.log('Token:', token)

  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  
  return (
    <Row>
      <Col span={12} offset={6}>
        <h1 style={{textAlign: 'center'}}>Login</h1>
        {errorLogin !== null && <p style={{color: 'red',textAlign: 'center'}}>{errorLogin}</p>}
        <Form
          name="basic"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[
              {
                required: true,
                message: 'Please input your username!',
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: 'Please input your password!',
              },
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Col>
    </Row>
  )
}

export default React.memo(LoginMovie)