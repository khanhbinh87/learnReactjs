import React, { Component } from 'react';

import uuidv4 from 'uuid/v4';

import Modal from './Modal';

import { TASK_LEVEL } from '../constants';

const initTask = { name: '', level: 0 };

export default class ControlAddNew extends Component {
  state = {
    task: initTask,
    isOpenModal: false
  }

  handleOnChange = (keyField) => {
    return (e) => {
      this.setState({
        task: { ...this.state.task, [keyField]: e.target.value }
      })
    }
  }
  handleSubmit = () => {
    let data = { id: uuidv4(), ...this.state.task }

    this.props.handleAddNewTask(data);
    this.setState({
      task: initTask,
      isOpenModal: false
    })
  }
  handleClickAddTask = (value) => {
    this.setState({ isOpenModal: value })
  }

  render() {
    const { handleSubmit, handleOnChange, handleClickAddTask } = this;
    const { task, isOpenModal } = this.state;
    return (
      <>
        <div className="form-group add-task">
          <button
            onClick={() => handleClickAddTask(true)}
            type="button" className="btn btn-info btn-block">Add Task</button>
        </div>
        <Modal
          title="Thêm mới tác vụ"
          width={500}
          isVisible={isOpenModal}
          renderFooter={() => {
            return (
              <>
                <button
                  onClick={handleSubmit}
                  type="button"
                  style={{ marginRight: 10 }}
                  className="btn btn-primary"
                >Submit</button>
                <button
                  onClick={() => handleClickAddTask(false)}
                  type="button" className="btn btn-secondary">Cancel</button>
              </>
            )
          }} >
          <div className="form-group">
            <label className="sr-only">label</label>
            <input
              value={task.name}
              onChange={handleOnChange('name')}
              type="text"
              className="form-control"
              placeholder="Task Name" />
          </div>

          <div className="form-group">
            <label className="sr-only">label</label>
            <select
              value={task.level}
              onChange={handleOnChange('level')}
              className="form-control">
              {TASK_LEVEL.map((level, idx) => <option
                key={level.name + idx}
                value={idx}>{level.name}</option>)}
            </select>
          </div>
        </Modal>
      </>
    )
  }
}