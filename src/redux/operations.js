import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL =
  "https://stoplight.io/mocks/kode-frontend-team/koder-stoplight/86566464";

export const fetchAll = createAsyncThunk(
  "employees/fetchAll",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/users?__dynamic=true");

      return response.data.items;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchFiltered = createAsyncThunk(
  "employees/fetchFiltered",
  async (filter, thunkAPI) => {
    try {
      const response = await axios.get(`/users?__example=${filter}`);

      return response.data.items;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
