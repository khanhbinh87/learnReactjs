import React, { Component } from 'react';

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import ControlSort from './ControlSort';
import ControlSearch from './ControlSearch';
import ControlAddNew from './ControlAddNew';

export default class Control extends Component {

  render() {
    const {
      orderBy,
      orderDir,
      searchText,
      onSelectSort,
      onChangeSearch,
      handleAddNewTask,
    } = this.props;
    return (
      <Row>

        <Col xs={12} lg={6}>
          <Row>
            <ControlSort
              orderBy={orderBy}
              orderDir={orderDir}
              onSelectSort={onSelectSort}
            />
            <ControlSearch
              searchText={searchText}
              onChangeSearch={onChangeSearch}
            />
          </Row>
        </Col>

        <Col xs={12} lg={6}>
          <ControlAddNew handleAddNewTask={handleAddNewTask} />
        </Col>

      </Row >
    )
  }
}