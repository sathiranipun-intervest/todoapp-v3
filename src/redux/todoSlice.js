import { createSlice } from "@reduxjs/toolkit";
import { requestData, addData, updateData, removeData } from "./apiCalls";

export const todoSlice = createSlice({
  name: "todo",
  initialState: {
    todoList: [],
    empltyList: true,
    refreshStatus: true,
    fetchingData: false,
    isDeleting: false,
    isUpdating: false,
  },
  extraReducers: {
    [requestData.pending]: (state) => {
      return {
        ...state,
        fetchingData: true,
      };
    },
    [requestData.fulfilled]: (state, action) => {
      return {
        ...state,
        todoList: action.payload,
        fetchingData: false,
        empltyList: false,
      };
    },
    [addData.fulfilled]: (state) => {
      return {
        ...state,
        refreshStatus: !state.refreshStatus,
      };
    },
    [updateData.pending]: (state) => {
      return {
        ...state,
        refreshStatus: !state.refreshStatus,
        isUpdating: true,
      };
    },
    [updateData.fulfilled]: (state) => {
      return {
        ...state,
        refreshStatus: !state.refreshStatus,
        isUpdating: false,
      };
    },
    [removeData.pending]: (state) => {
      return {
        ...state,
        refreshStatus: !state.refreshStatus,
        isDeleting: true,
      };
    },
    [removeData.fulfilled]: (state) => {
      return {
        ...state,
        refreshStatus: !state.refreshStatus,
        isDeleting: false,
      };
    },
  },
});

export const {} = todoSlice.actions;
export default todoSlice.reducer;
