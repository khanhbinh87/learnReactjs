import React, { Component } from 'react';
import { connect } from 'react-redux';

import Dropdown from 'react-bootstrap/Dropdown';

import { SORT } from '../constants';

import { actChangeSelectSort } from '../store/actions';

const DropdownMenu = Dropdown.Menu;
const DropdownItem = Dropdown.Item;
const DropdownToggle = Dropdown.Toggle;

class ControlSort extends Component {

  onSelectDropdown = (eventKey) => {
    let [orderBy, orderDir] = eventKey.split('-');
    
    this.props.dispatch(actChangeSelectSort({
      orderBy, orderDir
    }))
  }

  render() {
    const { orderBy, orderDir } = this.props;

    return (
      <div className="col-12">
        <div className="form-group">
          <Dropdown onSelect={this.onSelectDropdown}>
            <DropdownToggle variant="secondary" id="dropdown-basic">
              Sort By
            </DropdownToggle>

            <DropdownMenu>
              {SORT.map(o => {
                return <DropdownItem
                  key={o.key} eventKey={o.key}
                  active={`${orderBy}-${orderDir}` === o.key}>
                  {o.text}
                </DropdownItem>
              })}
            </DropdownMenu>
          </Dropdown>
          <span className="badge badge-success badge-medium">{orderBy} - {orderDir}</span>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    orderBy: state.orderBy,
    orderDir: state.orderDir
  }
}

export default connect(mapStateToProps)(ControlSort);