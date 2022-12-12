import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Component } from "react";

class TodoItem extends Component {
  render() {
    const { title, handleDelete, handleEdit } = this.props;
    return (
      <li className="list-group-item text-capitalize d-flex justify-content-between my-2">
        <h6>{title}</h6>
        <div className="todo-icon">
          <span className="btn-click mx-0 text-success" onClick={handleEdit}>
            <h5 className="text-capitalize text-success">edit</h5>
          </span>
          <span className="btn-click mx-0 text-danger" onClick={handleDelete}>
            <h5 className="text-capitalize variant-danger">delete</h5>
          </span>
        </div>
      </li>
    );
  }
}

export default TodoItem;
