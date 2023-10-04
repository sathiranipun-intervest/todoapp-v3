import React, { Fragment } from "react";
import { useSelector } from "react-redux";

export default function NotificationBar() {
  const state = useSelector((state) => state.todo);

  let notification;
  
  switch (true) {
    case state.isUpdating:
        notification = <div className="alert alert-success m-4" role="alert">Updating ... 🚀 </div>;
        break;
    case state.isDeleting:
        notification = <div className="alert alert-danger m-4" role="alert">Deleting ... 🗑️ </div>;
        break;
    case state.fetchingData:
      notification = <div className="alert alert-primary m-4" role="alert">Data Fetching ... 📲 </div>;
      break;
    default:
      notification = <div className="alert alert-warning m-4" role="alert"><b>My ToDo</b> :  Your Personal Digital Assistant 📅</div>;
      break;
  }

  return <Fragment>{notification}</Fragment>;
}
