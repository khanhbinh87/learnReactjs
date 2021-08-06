import React, { Component } from 'react';

export default class ControlSearch extends Component {
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
    const { onChangeSearch } = this.props;

    this.setState({ text: e.target.value })
    onChangeSearch && typeof onChangeSearch === 'function' &&
      onChangeSearch(e.target.value);
  }
  handleClear = () => {
    const { onChangeSearch } = this.props;

    onChangeSearch && typeof onChangeSearch === 'function' &&
      onChangeSearch('');
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