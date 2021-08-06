import React, { Component } from 'react';


import Container from 'react-bootstrap/Container';

import Header from './components/Header';
import Control from './components/Control';
import ListTasksTable from './components/ListTasksTable';

export default class App extends Component {
  
  render() {
    return (
      <Container>
        <Header />
        <Control />
        <ListTasksTable />
      </Container>
    )
  }
}