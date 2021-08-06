import styled from "styled-components";
import { Menu } from "antd";
import { StyledContainer } from "../Layout/Layout.styled";

const MenuItem = Menu.Item;

// import { VARIABLES } from "../../constants/themes";

// 1. Tách CSS dạng Module viết trong javascript
//     - Random Class -> Không bị trùng tên CSS
//     - Template String ES6 -> Chuỗi có thể truyền biến được vào trong
//     - Dùng giống như một Component -> Truyền Props vào CSS 
//        => Module CSS của mình nó linh động
// color: ${props => props.colorProps || VARIABLES.BLACK};
// border-bottom: ${VARIABLES.BORDER_WIDTH} solid ${VARIABLES.BLACK};

export const StyledHeaderMenu = styled.header`
`


export const StyledHeaderMenuContainer = styled(StyledContainer)`
  margin-top: 20px;
`

// -> .ant-menu-horizontal
// scss, sass
export const StyledMenu = styled(Menu)` 
  color: #fff;
  border-bottom: 0;
  background: #5f5f5f; 
  &.ant-menu-horizontal {
    line-height: 50px;
  }

  &.ant-menu-horizontal > .ant-menu-item:hover,
  &.ant-menu-horizontal > .ant-menu-submenu:hover {
    color: #fff;
    border-bottom: 0;
    background-color: #333;
  }

  &.ant-menu-horizontal > .ant-menu-item-active,
  &.ant-menu-horizontal > .ant-menu-submenu-active,
  &.ant-menu-horizontal > .ant-menu-item-open,
  &.ant-menu-horizontal > .ant-menu-submenu-open,
  &.ant-menu-horizontal > .ant-menu-item-selected,
  &.ant-menu-horizontal > .ant-menu-submenu-selected {
    color: #fff;
    border-bottom: 0;
    background-color: #4CAF50;
  }

  &.ant-menu-horizontal > .ant-menu-item, 
  &.ant-menu-horizontal > .ant-menu-submenu {
    top: 0; 
    height: 50px;
    border-bottom: 0;
  }
  &.ant-menu-horizontal .ant-menu-item,
  &.ant-menu-horizontal .ant-menu-submenu {
    margin-top: 0;
  }
`

export const StyledMenuItem = styled(MenuItem)`

`