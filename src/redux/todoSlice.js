import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const requestData = createAsyncThunk("TODO/GET_DATA", async () => {
  const response = await axios.get("api/v1/task", {
    headers: {
      Authorization:
        "Bearer jkGLoBbld4Xzvzm6JBzlgwoVrUEj-OiPrHl4kqCpU-Rw8XvzZw",
    },
  });
  console.log("Fetched Tasks:", response.data.items);
  return response.data.items;
});

// export const addData = createAsyncThunk("TODO/ADD_DATA", async (values) => {
//   const response = await axios.post("api/v1/task", {
//     { title: values.title, completed: false },
//     headers: {
//       "Content-Type": "application/json",
//       Authorization:
//         "Bearer jkGLoBbld4Xzvzm6JBzlgwoVrUEj-OiPrHl4kqCpU-Rw8XvzZw",
//     },
//   });
//   console.log("Submited Task:", response.data.items);
//   return response.data.items;
// });

export const addData = createAsyncThunk("TODO/ADD_DATA", async (values) => {
  console.log("title :", values.title, values.completed);
  const response = await axios({
    url: "https://crudapi.co.uk/api/v1/task",
    method: "POST",
    data: {
      title: values.title,
      completed: values.completed,
    },
    headers: {
      "Content-Type": "application/json",
      Authorization:
        "Bearer jkGLoBbld4Xzvzm6JBzlgwoVrUEj-OiPrHl4kqCpU-Rw8XvzZw",
    },
  });
  // const response = await axios("api/v1/task", {
  //   title: values.title,
  //   completed: values.completed,
  // }, {
  //   headers: {
  //     "Content-Type": "application/json",
  //     Authorization: "Bearer jkGLoBbld4Xzvzm6JBzlgwoVrUEj-OiPrHl4kqCpU-Rw8XvzZw",
  //   },
  // });
  console.log("Submitted Task:", response.data);
  return response.data;
});

export const todoSlice = createSlice({
  name: "todo",
  initialState: {
    todoList: [],
    isLoading: false,
    refreshStatus: true,
    isError: false,
    test: "test-Initial",
  },
  extraReducers: {
    [requestData.pending]: (state, action) => {
      return {
        ...state,
        isLoading: true,
        test: "test-Loading",
      };
    },
    [requestData.fulfilled]: (state, action) => {
      return {
        ...state,
        todoList: action.payload,
        isLoading: false,
        test: "test-fulfilled",
        refreshStatus: !state.refreshStatus,
      };
    },
    [addData.fulfilled]: (state) => {
      return {
        ...state,
        refreshStatus: !state.refreshStatus,
      };
    },
  },
});

export const {} = todoSlice.actions;
export default todoSlice.reducer;
