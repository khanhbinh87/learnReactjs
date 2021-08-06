import React, { useState, useEffect } from 'react';

function AppFunc() {
  const [counter, setCounter] = useState(0)
  const [isVisible, setIsVisible] = useState(false);
  // Modal
  useEffect(() => {
    // didMount - didUpdate
    console.log("useEffect 3 run")
  }, [counter, isVisible])

  useEffect(() => {
    // didMount - didUpdate
    console.log("useEffect 1 run")
  }, [counter])

  useEffect(() => {
    // didMount
    // Trong tham số thứ 2 truyền vào một array
    // Trong array này nhận vào một danh sách state hoặc props -> Để lắng nghe sự thay đổi của state đó, props đó
    console.log("useEffect 2 run")
  }, [isVisible])

  console.log("render")
  return (
    <div>
      <h1>AppFunc</h1>

      <button onClick={() => {
        setCounter(counter + 1)
      }}>Click Me</button>

      <button onClick={() => {
        setIsVisible(!isVisible)
      }}>Toggle Visible</button>

    </div>
  )
}

export default AppFunc;