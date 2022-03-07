import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// local service
import { getPricing } from '../../../services';

export const getPricingAction = createAsyncThunk(
  'getPricing',
  async ({ page, limit }: any, thunkAPI) => {
    const res = await getPricing(page, limit);
    return res?.data?.data;
  }
);

interface Tstate {
  data: any;
  load: boolean;
  error: any;
}

const initialState: Tstate = {
  data: '',
  load: false,
  error: false
};

const pricingSlice = createSlice({
  name: 'pricing',
  initialState,
  reducers: {},

  extraReducers: builder => {
    builder.addCase(getPricingAction.pending, (state, action) => {
      state.load = true;
    });
    builder.addCase(getPricingAction.fulfilled, (state, action) => {
      state.data = action.payload;
      state.load = false;
    });
    builder.addCase(getPricingAction.rejected, (state, action) => {
      state.load = false;
      state.error = action?.error;
    });
  }
});

export default pricingSlice.reducer;
