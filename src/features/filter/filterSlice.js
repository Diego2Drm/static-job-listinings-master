import { createSlice } from "@reduxjs/toolkit";
// import data from "../../data.json"

const initialState = {
  data: [],
  filtered: [],
  original: [],
}

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setData: (state, action) => {
      state.data = action.payload;
      state.filtered = action.payload;
      state.original = action.payload;
    },
    // filterRole: (state, action) => {
    //   state.original = state.data;
    //   state.filtered = state.data.filter(item => item.role === action.payload)
    // },
    applyFilters: (state, action) => {
      const filters = action.payload;

      state.filtered = state.data.filter(item => {
        const matchRole = filters.role ? item.role === filters.role : true;
        const matchLevel = filters.level ? item.level === filters.level : true;
        const matchLanguages = filters.languages
          ? filters.languages.every(lang => item.languages.includes(lang))
          : true;
        const matchTools = filters.tools
          ? filters.tools.every(tool => item.tools.includes(tool))
          : true;

        return matchRole && matchLevel && matchLanguages && matchTools;
      });
    },
    removeFilter: (state) => {
      state.filtered = state.original
    }
  },
});

export const { setData,  removeFilter, applyFilters } = filterSlice.actions;

export default filterSlice.reducer;

