import initListTasks from '../mock/state';
import {
  CHANGE_SELECT_SORT,
  CHANGE_SEARCH_TEXT,
  HANDLE_ADD_NEW_TASK
} from './actionsType';

const initialState = {
  orderBy: 'name',
  orderDir: 'asc',
  searchText: '',
  listTasks: initListTasks
}
// Pure Function 
const reducers = function (state = initialState, action) {
  console.log("reducers run", action);
  switch (action.type) {
    case CHANGE_SELECT_SORT:
      return {
        ...state,
        orderBy: action.payload.orderBy,
        orderDir: action.payload.orderDir,
      }
    case CHANGE_SEARCH_TEXT:
      return {
        ...state,
        searchText: action.payload.searchText
      }
    case HANDLE_ADD_NEW_TASK:
      return {
        ...state,
        listTasks: [
          ...state.listTasks,
          action.payload.task
        ]
      }
    default:
      return state;
  }
}

export default reducers;