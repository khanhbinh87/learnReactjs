import React from 'react';
import Test from './components/Test';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      isVisible: false
    }
    console.log("Contructor", this);
  }

  UNSAFE_componentWillMount() {
    console.log("UNSAFE_componentWillMount")
  }
  componentDidMount() {
    console.log("componentDidMount")
  }
  UNSAFE_componentWillUpdate(nextProps, nextState) {
    console.log("UNSAFE_componentWillUpdate")
  }
  componentDidUpdate() {
    // 
    console.log("componentDidUpdate")
  }

  render() {
    console.log("render");
    return (
      <div>
        <h1>Hello</h1>
        <button onClick={() => {
          this.setState({
            counter: this.state.counter + 1
          })
        }}>Click Me</button>

        <button onClick={() => {
          this.setState({
            isVisible: !this.state.isVisible
          })
        }}>Toggle Visible</button>
        {
          this.state.isVisible &&
          <Test
            myCounter={this.state.counter}
            myIsVisible={this.state.isVisible}
          />
        }

      </div>
    )
  }
}
export default App;
