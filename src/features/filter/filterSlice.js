import { createSlice } from "@reduxjs/toolkit";
import data from "../../data.json"

const initialState = data

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    filterFrontEnd: (state, action) => {
      state = state.filter(item => item.role == action.payload)
      return state;
    },

    originalState: () => {
      return initialState;
    }
  },
});

export const { filterFrontEnd, originalState } = filterSlice.actions;

export default filterSlice.reducer;

