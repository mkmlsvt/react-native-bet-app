import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {CouponType, MatchPredict} from './type';

export const initialUserState: CouponType | {} = {};

const couponSlice = createSlice({
  name: 'coupon',
  initialState: initialUserState,
  reducers: {
    setCoupon: (state, action: PayloadAction<CouponType | {}>) => {
      return action?.payload;
    },
  },
});

export default couponSlice.reducer;
export const {setCoupon} = couponSlice.actions;
