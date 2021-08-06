import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useHistory, useLocation } from 'react-router-dom';
import { Button } from 'antd';
import {
  StyledMenu,
  StyledMenuItem,
  StyledHeaderMenu,
  StyledHeaderMenuContainer,
} from "./HeaderMenu.styled";


const StyledButton = styled(Button)`
  height: 40px;
  font-size: 16px;
  padding: 5px 30px;
`

export default function HeaderMenu() {
  const location = useLocation();
  const history = useHistory(); // history dùng trong class component???
  const [currentUrl, setCurrentUrl] = useState('/');

  useEffect(() => {
    setCurrentUrl(location.pathname);
  }, [location])

  function handleOnSelectMenu(selectedItem) {
    setCurrentUrl(selectedItem.key);
    history.push(selectedItem.key);
    // Chuyển trang bằng Code không dùng thẻ <Link> của react-router-dom
  }

  return (
    <StyledHeaderMenu colorProps="pink">
      <StyledButton type="primary">Click Me</StyledButton>
      <StyledButton type="link">Click Me Link</StyledButton>
      <StyledHeaderMenuContainer>
        <StyledMenu
          onSelect={handleOnSelectMenu}
          theme="light"
          mode="horizontal"
          selectedKeys={[currentUrl]}
        >
          <StyledMenuItem key="/">HomePage</StyledMenuItem>
          <StyledMenuItem key="/about">About</StyledMenuItem>
          <StyledMenuItem key="/list-blogs">List Blogs</StyledMenuItem>
          <StyledMenuItem key="/login">Login</StyledMenuItem>
          <StyledMenuItem key="/dashboard">Dashboard</StyledMenuItem>
          <StyledMenuItem key="/register">Register</StyledMenuItem>
        </StyledMenu>
      </StyledHeaderMenuContainer>
    </StyledHeaderMenu>
  )
}