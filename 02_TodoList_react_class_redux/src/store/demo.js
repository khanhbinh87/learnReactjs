import { createStore } from 'redux'

const CHANGE_SELECT_SORT = 'CHANGE_SELECT_SORT';

const initialState = {
  orderBy: 'name',
  orderDir: ' asc',
  searchText: '',
  listTasks: [{
    id: 1,
    name: 'Task 1',
    level: 0
  }]
}

const reducers = function (state = initialState, action) {
  console.log("reducers run", action);
  if (action.type === CHANGE_SELECT_SORT) {
    return {
      ...state,
      orderBy: action.payload.orderBy,
      orderDir: action.payload.orderDir,
    }
  } else if (action.type === 'CHANGE_SEARCH_TEXT') {
    return {
      ...state,
      searchText: action.text
    }
  } else if (action.type === 'ADD_NEW_TASK') {
    return {
      ...state,
      listTasks: [
        ...state.listTasks,
        action.task
      ]
    }
  }

  return state;
}


// Action Default ban đầu reducers mặc định chạy
const store = createStore(reducers);
console.log("stote = ", store);
store.subscribe(function () {
  // 1. Đọc tài liệu
  // 2. Dùng ES6 
  //      - Nếu params là array rỗng -> function callback không được truyền tham số gì cả
  //      - Nếu params 
  // Lắng nghe sự thay đổi của state. 
  const state = store.getState();

  const selectorsListTasks = getListTaskSearchAndSort(state);
  console.log(state.listTasks)
  console.log(selectorsListTasks)
  console.log("===============================");
})

// Khi kích hoạt một action -> Gửi tới reducers
store.dispatch({
  type: CHANGE_SELECT_SORT,
  payload: {
    orderBy: 'level',
    orderDir: 'desc'
  }
})

// Action 4
store.dispatch({
  type: 'ADD_NEW_TASK',
  task: {
    id: 2,
    name: 'ABC Lorem isum',
    level: 2
  }
})
store.dispatch({
  type: 'ADD_NEW_TASK',
  task: {
    id: 3,
    name: 'DEF Lorem isum',
    level: 1
  }
})
store.dispatch({
  type: 'ADD_NEW_TASK',
  task: {
    id: 4,
    name: 'ZZZEGHJ Lorem isum',
    level: 1
  }
})


store.dispatch({
  type: CHANGE_SELECT_SORT,
  payload: {
    orderBy: 'name',
    orderDir: 'desc'
  }
})

function getListTaskSearchAndSort({ listTasks, orderBy, orderDir, searchText }) {
  const newListTasks = listTasks.filter(task => {
    let nameLower = task.name.toLowerCase(),
      queryLower = searchText.toLowerCase();
    return nameLower.indexOf(queryLower) !== -1;
  })
  return newListTasks.sort((a, b) => {
    if (a[orderBy] < b[orderBy]) return orderDir === 'asc' ? -1 : 1;
    else if (a[orderBy] > b[orderBy]) return orderDir === 'asc' ? 1 : -1;
    return 0;
  })
}

/*
Store

Action
  -> Một Store có thể có nhiều action
  -> Là một object chứa các thuộc tính như sau
    -> Là một function và function này return về một object
    {
      type: 'ACTION___fsdhfjk', -> Thuộc tính bắt buộc phải có trong object
      ..... -> thêm một số thuộc tính khác
      payload -> truyền thêm dữ liệu, data mới vào reducer để xử lí
    }

  Ví dụ
   Có 1 action
    {
      type: ADD_NEW_TASK',
      payload: {
        task: {
          id: fdhskshjfksfh,
          name: 'fsdhjfks',
          level: 1
        }
      }
    }

Reducer
  -> Khởi tạo giá trị mặc định cho state trong reducer
  -> Chỉ thay đổi state trong reducer

Selectors -> React, Redux
Getters -> VueX

state = {
  todos: []
}



Nếu component muốn thay đổi lại state -> Truyền thông điệp tới reducer thông qua action.
  (Component) dispatch một action -> chuyển tới reducer
    -> Thay đổi state theo từng loại action tương ứng
      (Kiểm điều kiện if else type thuộc nào?) -> thay đổi lại state

      dispatch({
        type: 'HDJKSAHDAK',
        payload: ....
      })

Reducer có dạng như sau nhận vào 2 tham số
1. State cũ (Nếu State cũ chưa khởi tạo thì sẽ lấy giá trị mặc định là initialState)
2. Action truyền vào mỗi lần mình dispatch

let initialState = {
  todos: []
}

function todoApp(state = initialState, action) {
  // For now, don't handle any actions
  // and just return the state given to us.
  if(action.type === 'ADD_NEW_TASK') {
    // Thay đổi state trong đây và return về state mới
    return ...
  } else if (action.type === '') {
    return ....
  }


  return state -> Không thay đổi, không render lại
  return { ...state } -> Sẽ thay đổi, render lại
}
*/