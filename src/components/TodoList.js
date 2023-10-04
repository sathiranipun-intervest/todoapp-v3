import React from "react";
import "./TodoList.css";

import { useSelector, useDispatch } from "react-redux";
import { updateData, removeData } from "../redux/apiCalls";

const TodoList = () => {
  const state = useSelector((state) => state.todo);
  const dispatch = useDispatch();

  return (
    <div className="mt-2">
      {state.todoList.map((todo, index) => (
        <div className="input-group todo-list-wrapper mb-2" key={todo._uuid}>
          <div className="input-group-text2 task-line">
            <input
              type="checkbox"
              className={`form-check-input mt-0 p-2 me-3 ${
                todo.completed ? "complete" : "incomplete"
              }`}
              onChange={() => {
                dispatch(
                  updateData({
                    ...todo,
                    completed: !todo.completed,
                  })
                );
              }}
              checked={todo.completed}
            />
            <input
              type="text"
              className={`form-control ${
                todo.completed ? "complete" : "incomplete"
              }`}
              value={todo.title}
              disabled
            />
            <button
              type="button"
              className="btn btn-danger ms-2"
              onClick={() => dispatch(removeData(todo._uuid))}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
