import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

interface LoginState {
  loading: boolean;
  error: string | null;
  userName: string | null; // Add userName and userEmail fields
  userEmail: string | null;
}
interface initialValueType {
  email: string | null,
  password: string | null
}
// Define loginUser async action using createAsyncThunk
export const loginUser = createAsyncThunk(
  'login/loginUser',
  async (userDetails: initialValueType, thunkAPI) => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/student/login`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(userDetails),
        }
      );
      const data = await res.json();
      return data; // Return the JSON data for successful response
    } catch (error) {
      console.error('Error logging in user:', error);
      throw error;
    }
  }
);

// Create a separate slice for user login
const loginSlice = createSlice({
  name: 'login',
  initialState: {
    loading: false,
    error: null,
    userName: null,
    userEmail: null,
  } as LoginState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        const { name, email } = action.payload.data; // Destructure user data
        state.loading = false;
        state.error = null;
        state.userName = state.userName || name;
        state.userEmail = state.userEmail || email;
        localStorage.setItem('user-token', JSON.stringify(action.payload.token));

      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message as string;
      });
  },
});

// Export the async action and reducer from the slice
export const { reducer: loginReducer } = loginSlice;
export const loginActions = loginSlice.actions; // Export actions object
export default loginReducer; 
