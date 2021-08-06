import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { StyledLoginContainer } from "./Login.styled";

import { actLogin } from '../../store/user/actions';

export default function Login() {
  const dispatch = useDispatch();
  const history = useHistory();
  const token = useSelector(rootState => rootState.User.token);

  useEffect(() => {
    if (token) {
      // Đã đăng nhập
      history.push('/');
    }
  }, [token, history])
  // const state = useSelector(function(rootState) {
  //   return rootState;
  // });

  // history để check đăng nhập -> chưa đăng nhập cho ở lại login
  // nếu đăng nhập rồi -> token !== null -> đẩy qua trang chủ
  const onFinish = values => {
    console.log('Received values of form: ', values);
    dispatch(actLogin({
      username: values.username,
      password: values.password
    }))
  };

  return (
    <StyledLoginContainer>
      <Form onFinish={onFinish}>

        {/* Input Username */}
        <Form.Item
          name="username"
          rules={[{
            required: true,
            message: 'Please input your Username!',
          }]}>
          <Input
            value="test"
            prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
        </Form.Item>

        {/* Input Password */}
        <Form.Item
          name="password"
          rules={[{
            required: true,
            message: 'Please input your Password!',
          }]}>
          <Input
            value="123456"
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password" />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" className="login-form-button">
            Log in
        </Button>
          {/* Or <a href="">register now!</a> */}
        </Form.Item>
      </Form>
    </StyledLoginContainer>
  )
}