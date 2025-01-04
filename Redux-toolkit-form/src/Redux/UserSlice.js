import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Base URL for your API
const BASE_URL = 'http://localhost:3000/users';

// Async thunk for reading data (GET)
export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
  const response = await axios.get(BASE_URL);
  return response.data;
});

// Async thunk for creating data (POST)
export const createUser = createAsyncThunk('users/createUser', async (newUser) => {
  const response = await axios.post(BASE_URL, newUser);
  return response.data;
});

// Async thunk for updating data (PUT)
export const updateUser = createAsyncThunk('users/updateUser', async ({ id, updatedUser }) => {
  const response = await axios.put(`${BASE_URL}/${id}`, updatedUser);
  return response.data;
});

// Async thunk for deleting data (DELETE)
export const deleteUser = createAsyncThunk('users/deleteUser', async (id) => {
  await axios.delete(`${BASE_URL}/${id}`);
  return id; // Returning the id to remove the user from the state
});

const userSlice = createSlice({
  name: 'users',
  initialState: {
    users: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    // Fetch users
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });

    // Create user
    builder
      .addCase(createUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(createUser.fulfilled, (state, action) => {
        state.loading = false;
        state.users.push(action.payload); // Add the new user to the users array
      })
      .addCase(createUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });

    // Update user
    builder
      .addCase(updateUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        state.loading = false;
        const index = state.users.findIndex(user => user.id === action.payload.id);
        if (index !== -1) {
          state.users[index] = action.payload; // Update the user in the array
        }
      })
      .addCase(updateUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });

    // Delete user
    builder
      .addCase(deleteUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteUser.fulfilled, (state, action) => {
        state.loading = false;
        state.users = state.users.filter(user => user.id !== action.payload); // Remove user by id
      })
      .addCase(deleteUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default userSlice.reducer;
// export { fetchUsers, createUser, updateUser, deleteUser };
