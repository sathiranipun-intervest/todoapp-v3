import React, {useEffect} from "react";
import "./TaskContainer.css";
import { useSelector, useDispatch } from "react-redux";
import TodoList from "./TodoList";
import { requestData } from "../redux/apiCalls"; 

export default function TaskContainer() {
  const state = useSelector((state) => state.todo);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(requestData());
  }, []);

  useEffect(() => {
    dispatch(requestData());
  }, [state.refreshStatus]);

  return (
    <div className="body-wrapper">
      {state.todoList.length === 0 ? (
        <div>
          <img src="../empty-list.svg" alt="Empty List" width="300px" />
          <p>Your Todo List is Empty! Start by adding new tasks.</p>
        </div>
      ) : (
        <TodoList />
      )}
    </div>
  );
}
