
import React from 'react';
import HomePage from '../pages/HomePage';
import Login from '../pages/Login';
import Register from '../pages/Register';
import About from '../pages/About';
import ListBlogs from '../pages/ListBlogs';
import BlogDetail from '../pages/BlogDetail';
import Dashboard from '../pages/Dashboard';

const ROUTERS = [
  {
    path: '/',
    exact: true,
    render: () => <HomePage />
  },
  {
    path: '/login',
    exact: false,
    render: () => <Login />
  },
  {
    path: '/register',
    exact: false,
    render: () => <Register />
  },
  {
    path: '/about',
    exact: false,
    render: () => <About />
  },
  {
    path: '/list-blogs',
    exact: false,
    render: () => <ListBlogs />
  },
  {
    path: '/blog/:blog_id',
    exact: false,
    render: () => <BlogDetail />
  },
  {
    path: '/dashboard',
    exact: false,
    render: () => <Dashboard />
  }
]

export default ROUTERS;