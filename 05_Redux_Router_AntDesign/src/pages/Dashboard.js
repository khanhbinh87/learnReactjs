import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { Button } from 'antd';
// Phải đăng nhập mới được phép vào
// Nếu chưa đăng nhập -> Đẩy qua login
import { actLogout } from '../store/user/actions'; // dispatch một action 

export default function Dashboard() {
  const history = useHistory();
  const dispatch = useDispatch();
  const token = useSelector(rootState => rootState.User.token);

  useEffect(() => {
    if (!token) history.push('/login');
  }, [token, history])

  function handleLogout() {
    dispatch(actLogout());
  }

  return (
    <>
      <h1>Dashboard Token: {token}</h1>
      <Button onClick={handleLogout} type="primary">Logout</Button>
    </>
  )
}