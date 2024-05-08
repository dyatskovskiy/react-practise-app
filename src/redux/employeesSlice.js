import { createSlice } from "@reduxjs/toolkit";
import { fetchAll, fetchFiltered } from "./operations";

const employeesSlice = createSlice({
  name: "employees",
  initialState: {
    list: [],
    isLoading: false,
    error: null,
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchAll.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(fetchAll.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.list = action.payload;
      })
      .addCase(fetchAll.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchFiltered.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(fetchFiltered.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.list = action.payload;
      })
      .addCase(fetchFiltered.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const employeesReducer = employeesSlice.reducer;
