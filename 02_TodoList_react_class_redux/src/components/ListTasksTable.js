import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Modal from './Modal';
import Button from './Button';

import ListTasksItem from './ListTasksItem';

import { listTaskSortAndSearchSelector } from '../store/selectors';

const styleColumnId = { width: '10%' }
const styleColumnLevel = { width: '20%' }
const styleColumnAction = { width: '200px' }

function ListTasksTable({
  // listTasks, // listTasks ánh xạ từ redux chứ khong nhận từ App.js
  handleEditTask,
  handleDeleteTask,
}) {
  const listTasks = useSelector(listTaskSortAndSearchSelector); // Đúng 
  // const listTasks = useSelector(state => listTaskSortAndSearchSelector(state)); // Đúng
  // const listTasks = useSelector(listTaskSortAndSearchSelector(state)); // Sai
  const [isLoading, setIsLoading] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [taskDelete, setTaskDelete] = useState(null);

  console.log("listTasks = ", listTasks);

  useEffect(() => {
    if (taskDelete) {
      setIsOpenModal(true);
    } else {
      setIsOpenModal(false);
    }
  }, [taskDelete])

  function handleSetTaskDelete(task) {
    setTaskDelete(task);
  }

  function handleSubmit() {
    if (isLoading) return;
    setIsLoading(true);
    handleDeleteTask && typeof handleDeleteTask === 'function' &&
      handleDeleteTask(taskDelete, (responseData) => {
        setIsLoading(false);
        // Khi callback được gọi sau một khoảng thời gian X??? -> đưa loading về false
        if (responseData && responseData.error) alert(responseData.message);
        else setTaskDelete(null);
      });
  }

  return (
    <div className="panel panel-success">
      <table className="table table-hover ">
        <thead>
          <tr>

            <th style={styleColumnId} className="text-center">#</th>
            <th>Task</th>
            <th style={styleColumnLevel} className="text-center">Level</th>
            <th style={styleColumnAction}>Action</th>
          </tr>
        </thead>

        <tbody>
          {
            listTasks && listTasks.length > 0 &&
            listTasks.map((task, index) => {
              return <ListTasksItem
                key={task.id} task={task} index={index}
                handleEditTask={handleEditTask}
                handleSetTaskDelete={handleSetTaskDelete}
              />
            })
          }

        </tbody>
      </table>
      <Modal
        title="Cảnh báo"
        isVisible={isOpenModal}
        renderFooter={() => {
          return (
            <>
              <Button
                loading={isLoading}
                onClick={handleSubmit}
                type="button"
                style={{ marginRight: 10 }}
                className="btn btn-primary"
              >Confirm</Button>
              <Button
                onClick={() => setTaskDelete(null)}
                type="button" className="btn btn-secondary">Cancel</Button>
            </>
          )
        }}>
        <h4>Bạn có chắc chắn muốn xoá task {taskDelete && taskDelete.name}</h4>
      </Modal>
    </div>
  )
}

// const mapStateToProps = state => {
//   return {
//     listTasks: listTaskSortAndSearchSelector(state)
//   }
// }

// export default connect(mapStateToProps)(ListTasksTable);
export default ListTasksTable;