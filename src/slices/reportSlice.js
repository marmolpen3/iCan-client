import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  reportList: [],
  validationErrors: false
};

export const reportSlice = createSlice({
  name: "report",
  initialState,
  reducers: {
    setReportList: (state, action) => {
      state.reportList = action.payload;
    },
    addReport: (state, action) => {
      state.reportList.unshift(action.payload);
    },
    setValidationErrors: (state, action) => {
      state.validationErrors = action.payload;
    }
  },
});

export const { setReportList, addReport, setValidationErrors } = reportSlice.actions;

export default reportSlice.reducer;