import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
export const userSlice = createSlice({
  name: 'user',
  initialState:{
    user:null,
  },
  reducers: {
    login: (state,action) => {
      state.user = action.payload;
    },

    logout: (state) => {
      state.user= null;  //when the user logs out it should be set to null
    },
  },
});
export const { login, logout } = userSlice.actions;

export const selectUser = (state) => state.user.user; //allows the information to be pulled

export default userSlice.reducer;
