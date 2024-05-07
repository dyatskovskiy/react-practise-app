import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
  name: "filters",
  initialState: {
    inputValue: "",
    filter: "all",
    sortType: "alphabet",
  },
  reducers: {
    setInputValue(state, action) {
      state.inputValue = action.payload;
    },

    changeFilter(state, action) {
      state.filter = action.payload;
    },

    setSortType(state, action) {
      state.sortType = action.payload;
    },
  },
});

export const { setInputValue, changeFilter, setSortType } =
  filtersSlice.actions;

export const filtersReducer = filtersSlice.reducer;
