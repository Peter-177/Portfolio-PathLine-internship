import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  // Theme removed as per request to have a single consistent theme
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    // Reducers can be added here if needed for user profile, etc.
  },
});

export default userSlice.reducer;
