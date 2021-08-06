import React, { Component } from 'react';

export default class Test extends Component {
  componentWillUnmount() {
    console.log("componentWillUnmount");
  }
  componentWillReceiveProps(nextProps) {
    // Nếu thưangf hiện tại có sử dụng props từ component cha truyền vào
    // Giống như là một hàm lắng nghe sự thay đổi của props
    // Nếu props có thay đổi -> Hàm sẽ chạy
    // listener
    // trong nextProps chứa toàn bộ cái props truyền vào
    // Nếu mình muốn biết một thuộc nào tính nào trong đó có thay đổi hay không?
    // Tự kiểm tra
    // nextProps.counter
    // nextProps.isVisble
    console.log("nextProps = ", nextProps);
  }
  render() {
    return (
      <h1>Component Test</h1>
    )
  }
}