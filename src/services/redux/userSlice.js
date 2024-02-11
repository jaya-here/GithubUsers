import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getUser } from "../apiUsers";

// Action
export const getUserAction = createAsyncThunk("getUserAction", getUser);

const userSlice = createSlice({
  name: "user",
  initialState: {
    isLoading: false,
    data: null,
    isError: false,
  },
  extraReducers: (builder) => {
    builder.addCase(getUserAction.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(getUserAction.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(getUserAction.rejected, (state, action) => {
      console.log("Error", action.payload);
      state.isError = true;
    });
  },
});

export default userSlice.reducer;