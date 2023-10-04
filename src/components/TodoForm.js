import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addData } from "../redux/apiCalls";

const TodoForm = () => {
  const state = useSelector((state) => state.todo);
  const dispatch = useDispatch();

  const [input, setInput] = useState("");
  const [emptyError, setEmptyError] = useState(false);

  const onInputChange = (event) => {
    setInput(event.target.value);
  };

  const onTodoSubmit = (e) => {
    e.preventDefault();
    if (input.trim() !== "") {
      setEmptyError(false);
      dispatch(
        addData({
          title: input,
          completed: false,
        })
      );
      setInput("");
    } else {
      setEmptyError(true);
    }
  };

  return (
    <form onSubmit={onTodoSubmit} className="text-center">

      {/* <!-- Button trigger modal --> */}
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Add New Task 📝
      </button>

      {/* <!-- Modal --> */}
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body">
              <div className="col-auto">
                <label className="pb-2">Add New Task &nbsp;📋</label>
                <input
                  type="text"
                  value={input}
                  className="form-control"
                  onChange={onInputChange}
                />
                {emptyError && (
                  <p className="text-danger pt-2">*Input field is Empty!</p>
                )}
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-danger"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="submit" className="btn btn-primary">
                {state.fetchingData ? (
                  <div
                    className="spinner-border spinner-border-sm text-light"
                    role="status"
                  ></div>
                ) : (
                  "Add Task"
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default TodoForm;
