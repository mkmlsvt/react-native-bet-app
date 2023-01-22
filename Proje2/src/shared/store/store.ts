import {configureStore} from '@reduxjs/toolkit';
import {useDispatch, TypedUseSelectorHook, useSelector} from 'react-redux';
import {combineReducers} from 'redux';
import couponSlice from './slices/couponSlice';
//Slices
import userSlice from './slices/userSlice';

const reducers = combineReducers({
  user: userSlice,
  coupon: couponSlice,
});

export const store = configureStore({
  reducer: reducers,
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
