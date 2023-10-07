import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  users: [
    {
      name: 'enoh',
      id: 1,
    },
    {
      name: 'Collins',
      id: 2,
    },
  ],
  isLoading: true,
  error: false,
};

export const usersSlice = createSlice({
  name: 'users',
  initialState,
});

export default usersSlice.reducer;
