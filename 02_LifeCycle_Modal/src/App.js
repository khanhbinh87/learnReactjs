import React, { useState, useCallback } from 'react';
import Modal from './components/Modal/Modal';

function App() {
  const [isVisible, setIsVisible] = useState(false);

  const onCancel = useCallback(
    () => {
      setIsVisible(false);
    },
    []
  )
  const onOk = useCallback(
    () => {
      console.log("Ok")
    },
    []
  )

  let injectedProps = {
    isVisible,
    isRenderHeader: false,
    title: 'Form Login',
    onOk,
    onCancel,
    isRenderCloseIcon: false,
    renderFooter: () => {
      return (
        <div>
          <button onClick={() => setIsVisible(false)}>Huỷ</button>
          <button onClick={() => onOk()}>Lưu và tiếp tục</button>
        </div>
      )
    }
  }
  return (
    <div>
      <h1>Empty Project</h1>
      <button onClick={() => setIsVisible(!isVisible)}>Toggle Modal</button>

      <Modal {...injectedProps}>
        <form>
          <div>
            <input name="name" type="text"></input>
          </div>
          <div>
            <input name="name" type="password" autoComplete="on"></input>
          </div>
        </form>
      </Modal>
    </div>
  );
}

export default App;
