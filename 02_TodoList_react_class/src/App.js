import React, { Component } from 'react';


import Container from 'react-bootstrap/Container';

import Header from './components/Header';
import Control from './components/Control';
import ListTasksTable from './components/ListTasksTable';

import initListTasks from './mock/state';

import { LIST_TASK_KEY } from './constants';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orderBy: 'name',
      orderDir: ' asc',
      searchText: '',
      listTasks: initListTasks
    }
  }

  componentDidUpdate() {
    localStorage.setItem(LIST_TASK_KEY, JSON.stringify(this.state.listTasks));
  }

  onSelectSort = (orderBy, orderDir) => this.setState({ orderBy, orderDir })

  onChangeSearch = (searchText) => this.setState({ searchText })

  handleAddNewTask = ({ id, name, level }) => {
    let { listTasks } = this.state;
    listTasks.push({
      id, name, level
    })
    this.setState({ listTasks: [...listTasks] })
  }

  handleEditTask = (taskEdit, callback) => {
    let { listTasks } = this.state;
    setTimeout(() => {
      let findIndex = listTasks.findIndex((task) => {
        return task.id === taskEdit.id
      })
      if (findIndex !== -1) {
        listTasks[findIndex].name = taskEdit.name
        listTasks[findIndex].level = taskEdit.level
        this.setState({ listTasks: [...listTasks] })
      }
      callback && typeof callback === 'function' && callback();
    }, 2000)
  }

  handleDeleteTask = (taskDelete, callback) => {
    let { listTasks } = this.state;

    setTimeout(() => {
      let newTask = listTasks.filter(task => task.id !== taskDelete.id)
      this.setState({ listTasks: newTask })
      callback && typeof callback === 'function' && callback();
    }, 2000);
  }

  render() {
    const {
      onSelectSort,
      onChangeSearch,
      handleEditTask,
      handleDeleteTask,
      handleAddNewTask } = this
    const { listTasks, orderBy, orderDir, searchText } = this.state;

    let listTaskSearchAndSort = listTasks.filter(task => {
      let nameLower = task.name.toLowerCase(),
        queryLower = searchText.toLowerCase();
      return nameLower.indexOf(queryLower) !== -1;
    }).sort((a, b) => {
      if (a[orderBy] < b[orderBy]) return orderDir === 'asc' ? -1 : 1;
      else if (a[orderBy] > b[orderBy]) return orderDir === 'asc' ? 1 : -1;
      return 0;
    })

    let injectedPropsControl = {
      orderBy,
      orderDir,
      searchText,
      onSelectSort,
      onChangeSearch,
      handleAddNewTask
    }

    return (
      <Container>
        <Header />
        <Control {...injectedPropsControl} />
        <ListTasksTable
          listTasks={listTaskSearchAndSort}
          handleEditTask={handleEditTask}
          handleDeleteTask={handleDeleteTask}
        />
      </Container>
    )
  }
}