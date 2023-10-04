import { createAsyncThunk } from "@reduxjs/toolkit";
import { httpRequest } from "../helpers/httpRequest.helper";
import { getDataAPI, addDataAPI, updateDataAPI, removeDataAPI } from "../configs/apiEndPoints";

export const requestData = createAsyncThunk("TODO/GET_DATA", async () => {
 const data = await httpRequest(getDataAPI);
 return data.items;
});

export const addData = createAsyncThunk("TODO/ADD_DATA", async (body) => {
  const data = await httpRequest(addDataAPI, "POST", body=[{title: body.title, completed: body.completed}]);
  return data.items;
 });

export const updateData = createAsyncThunk("TODO/UPDATE_DATA", async (body) => {
  const data = await httpRequest(`${updateDataAPI}/${body._uuid}`, "PUT", body);
  return data.items;
});

export const removeData = createAsyncThunk("TODO/REMOVE_DATA", async (id) => {
  const data = await httpRequest(`${removeDataAPI}/${id}`, "DELETE");
  return data.items;
});

// export const addData = createAsyncThunk("TODO/ADD_DATA", async (values) => {
//   const response = await axios({
//     url: "api/v1/task",
//     method: "POST",
//     data: [
//       {
//         title: values.title,
//         completed: values.completed,
//       },
//     ],
//     headers: {
//       "Content-Type": "application/json",
//       Authorization:
//         "Bearer jkGLoBbld4Xzvzm6JBzlgwoVrUEj-OiPrHl4kqCpU-Rw8XvzZw",
//     },
//   });
//   console.log("Submited Tasks:", response.data.items);
//   return response.data.items;
// });