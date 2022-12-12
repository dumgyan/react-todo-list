import React, { Component } from "react";
class TodoInput extends Component {
  render() {
    const { item, handleChange, handleSubmit, editItem } = this.props;
    return (
      <div className="card card-body my-3">
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <input
              className="form-control"
              type="text"
              placeholder="Add Todo Item"
              value={item}
              onChange={handleChange}
            />
          </div>
          <button
            type="submit"
            disabled = {item ? false : true}
            className={editItem ? "btn btn-block btn-success mt-3" : "btn btn-primary btn-block text-uppercase mt-3"}
          >
            {editItem ? "edit item" : "add item"}
          </button>
        </form>
      </div>
    );
  }
}

export default TodoInput;
