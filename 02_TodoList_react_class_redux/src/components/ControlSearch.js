import React, { Component } from 'react';
import { connect } from 'react-redux';

import { searchTextSelector } from '../store/selectors';
import { actChangeSearchText } from '../store/actions';

class ControlSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: props.searchText
    }
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps && nextProps.searchText !== this.state.text) {
      this.setState({ text: nextProps.searchText })
    }
  }

  handleChangeSearchText = (e) => {
    this.setState({ text: e.target.value })

    this.props.dispatch(actChangeSearchText(e.target.value));
  }
  handleClear = () => {
    this.props.dispatch(actChangeSearchText(""));
  }

  render() {
    const { text } = this.state;

    return (
      <div className="col-12">
        <div className="input-group">
          <input
            type="text"
            value={text}
            className="form-control"
            placeholder="Search for..."
            onChange={this.handleChangeSearchText}
          />
          <span className="input-group-append">
            <button
              type="button"
              className="btn btn-info"
              onClick={this.handleClear}
            >Clear!</button>
          </span>
        </div>
      </div>
    )
  }
}

const mapStateToprops = state => {
  return {
    searchText: searchTextSelector(state)
  }
}

// HOC -> Một function nhận vào một Component return về một Component khác
// HOF -> Một function return về một function khác
export default connect(mapStateToprops)(ControlSearch);