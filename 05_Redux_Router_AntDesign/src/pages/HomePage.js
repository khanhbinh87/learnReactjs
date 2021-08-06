import React from 'react';
import { useSelector } from 'react-redux';

export default function Homepage() {
  const user = useSelector(rootState => rootState.User.user)

  return (
    <h1>Homepage username: {user.username}</h1>
  )
}