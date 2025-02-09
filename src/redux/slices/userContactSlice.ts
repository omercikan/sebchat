import { createSlice } from "@reduxjs/toolkit";
import { UserContactList } from "../../types";

type initialStateType = {
  userContactList: UserContactList[];
};

const initialState: initialStateType = {
  userContactList: [],
};

export const userContactSlice = createSlice({
  name: "userContact",
  initialState,
  reducers: {
    addContactList: (state, action) => {
      state.userContactList = action.payload;
    },
  },
});

export const { addContactList } = userContactSlice.actions;
