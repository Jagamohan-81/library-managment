import { createSlice } from '@reduxjs/toolkit';

interface AuthState {
  isSignUpMode: boolean;
  isLoggedIn: boolean;
}

const initialState: AuthState = {
  isSignUpMode: true,
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    toggleAuthMode: (state) => {
      state.isSignUpMode = !state.isSignUpMode;
    },
    setLoggedIn: (state, action) => {
      state.isLoggedIn = action.payload;
    },
    checkUserExists: (state) => {
      const token = localStorage.getItem('user-token');
      state.isLoggedIn = !!token;
    },
  },
});

export const { toggleAuthMode, setLoggedIn, checkUserExists } = authSlice.actions;

export default authSlice.reducer;
