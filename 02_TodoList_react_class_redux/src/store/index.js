import { createStore } from 'redux'

import reducers from './reducers';

import { LIST_TASK_KEY } from '../constants';

const store = createStore(reducers);

store.subscribe(function() {
  localStorage.setItem(LIST_TASK_KEY, JSON.stringify(store.getState().listTasks));
})

export default store;