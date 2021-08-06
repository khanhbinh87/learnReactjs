import React, { useState, useMemo, useEffect } from 'react';

import Container from 'react-bootstrap/Container';

import Header from './components/Header';
import Control from './components/Control';
import ListTasksTable from './components/ListTasksTable';

import initListTasks from './mock/state';

import { LIST_TASK_KEY } from './constants';

function App() {
  const [orderBy, setOrderBy] = useState('name');
  const [orderDir, setOrderDir] = useState('asc');
  const [searchText, setSearchText] = useState('');
  const [listTasks, setListTasks] = useState(initListTasks);

  useEffect(() => {
    localStorage.setItem(LIST_TASK_KEY, JSON.stringify(listTasks));
  }, [listTasks]);

  function onSelectSort(orderBy, orderDir) {
    setOrderBy(orderBy);
    setOrderDir(orderDir);
  }

  function onChangeSearch(text) {
    setSearchText(text);
  }

  function handleAddNewTask({ id, name, level }) {
    listTasks.push({
      id, name, level
    })
    setListTasks([...listTasks]);
  }

  function handleDeleteTask(taskDelete, callback) {
    setTimeout(() => {
      let newTask = listTasks.filter(task => task.id !== taskDelete.id)
      setListTasks(newTask);
      callback && typeof callback === 'function' &&
        callback();
    }, 2000);
  }

  function handleEditTask(taskEdit, callback) {
    setTimeout(() => {
      let findIndex = listTasks.findIndex((task) => {
        return task.id === taskEdit.id
      })
      if (findIndex !== -1) {
        listTasks[findIndex].name = taskEdit.name
        listTasks[findIndex].level = taskEdit.level
        setListTasks([...listTasks]);
      }
      callback && typeof callback === 'function' && callback();
    }, 2000)
  }

  const listTaskSearch = useMemo(() => {
    return listTasks.filter(task => {
      let nameLower = task.name.toLowerCase(),
        queryLower = searchText.toLowerCase();
      return nameLower.indexOf(queryLower) !== -1;
    })
  }, [searchText, listTasks])

  const listTaskSearchAndSort = useMemo(() => {
    let returnIndex = 1; // default for desc
    if (orderDir === 'asc') returnIndex = -1;

    listTaskSearch.sort((a, b) => {
      if (a[orderBy] < b[orderBy]) return returnIndex;
      else if (a[orderBy] > b[orderBy]) return (-1) * returnIndex;
      return 0;
    })

    return [...listTaskSearch];
  }, [orderBy, orderDir, listTaskSearch])

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
  );
}

export default App;

// Data gốc -> Search Data1  -> Sort -> Data2