import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {UserType} from './type';

export const initialUserState: UserType = {
  id: 1,
  email: 'alex@gmail.com',
  userName: 'ysfrdvn',
  password: '1995',
  credit: 3,
  score: 3,
};

const userSlice = createSlice({
  name: 'user',
  initialState: initialUserState,
  reducers: {
    setUser: (state, action: PayloadAction<UserType>) => {
      return action?.payload;
    },
  },
});

export default userSlice.reducer;
export const {setUser} = userSlice.actions;
