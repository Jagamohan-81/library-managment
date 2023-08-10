
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
  isSignUpMode: boolean;
}

const initialState: AuthState = {
  isSignUpMode: true,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    toggleAuthMode: (state) => {
      state.isSignUpMode = !state.isSignUpMode;
    },
  },
});

export const { toggleAuthMode } = authSlice.actions;
export default authSlice.reducer;

