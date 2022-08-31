import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { authService } from './authService';

// const token = thunkAPI.getState() // возвращает весь стейт

// конфиг для отправки запросов, токен в service функции можно отправлять вторым параметром
// const config = {
//   headers: { Authorization: `Bearer ${token}` },
// };

// Get user from localStorage
const user = JSON.parse(localStorage.getItem('user'));

// login user
export const login = createAsyncThunk('auth/login', async (data, thunkAPI) => {
  return await authService.login(data);
});

// register user
export const register = createAsyncThunk('auth/register', async (userData, thunkAPI) => {
  return await authService.register(userData);
});

// logout user
export const logout = createAsyncThunk('auth/logout', () => {
  authService.logout();
});

const initialState = {
  userData: user ? user : null,
  status: 'idle',
  error: null
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(register.rejected, (state, action) => {
        state.status = 'rejected';
        state.error = action.payload;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.status = 'idle';
        state.userData = action.payload;
      })

      .addCase(login.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(login.rejected, (state, action) => {
        state.status = 'rejected';
        state.error = action.payload;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.status = 'idle';
        state.userData = action.payload;
      })

      .addCase(logout.fulfilled, (state) => {
        state.userData = null;
      });
  }
});

export const authRedcuer = authSlice.reducer;
export const {} = authSlice.actions;

export const getUserData = (state) => state.auth.userData.userDetails;
