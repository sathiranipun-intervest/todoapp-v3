import React from "react";
import Header from "./components/Header";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import NotificationBar from "./components/NotificationBar";
import TaskContainer from "./components/TaskContainer";
import Footer from "./components/Footer";

function App() {
  return (
    <div align="center" className="container">
      <NotificationBar />
      <Header />
      <hr width="80%" />
      <TodoForm />
      <TaskContainer />
      <Footer />
    </div>
  );
}

export default App;
