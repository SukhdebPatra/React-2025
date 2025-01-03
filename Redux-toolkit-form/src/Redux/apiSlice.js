// src/redux/apiSlice.js

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Define an async thunk for making the API call
export const fetchData = createAsyncThunk('data/fetchData', async () => {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    console.log(response.data); // Log the data to ensure the API is working
    return response.data; // Return the actual data
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error; // Throw error to be handled in the rejected case
  }
});

const apiSlice = createSlice({
  name: 'api',
  initialState: {
    data: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload; // Store the response data
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message; // Store error message if the request fails
      });
  },
});

export default apiSlice.reducer;
