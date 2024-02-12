import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getUsers } from "../apiUsers";

// // action to handle asynchrous data fetching from API
export const getUsersAction = createAsyncThunk("getUsersAction", getUsers);

const usersSlice = createSlice({
  name: "users",
  initialState: {
    isLoading: false,
    data: null,
    isError: false,
  },
  extraReducers: (builder) => {
    builder.addCase(getUsersAction.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(getUsersAction.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(getUsersAction.rejected, (state, action) => {
      console.log("Error", action.payload);
      state.isError = true;
      state.isLoading = false;
    });
  },
});

export default usersSlice.reducer;