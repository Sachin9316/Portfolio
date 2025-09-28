import { createSlice } from "@reduxjs/toolkit";

export const homeSlice = createSlice({
  name: "home",
  initialState: {
    user: [],
  },
  reducers: {
    setHomeData: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { setHomeData } = homeSlice.actions;
export default homeSlice.reducer;
