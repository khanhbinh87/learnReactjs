import {
  HANDLE_ADD_NEW_TASK,
  CHANGE_SELECT_SORT,
  CHANGE_SEARCH_TEXT
} from './actionsType';


function actHandleAddNewTask(newTask) {
  return {
    type: HANDLE_ADD_NEW_TASK,
    payload: {
      task: newTask
    }
  }
}
function actChangeSelectSort({ orderBy, orderDir }) {
  console.log("actChangeSelectSort", orderBy, orderDir);
  return {
    type: CHANGE_SELECT_SORT,
    payload: { orderBy, orderDir }
  }
}
function actChangeSearchText(searchText) {
  return {
    type: CHANGE_SEARCH_TEXT,
    payload: { searchText }
  }
}

export {
  actHandleAddNewTask,
  actChangeSelectSort,
  actChangeSearchText
}