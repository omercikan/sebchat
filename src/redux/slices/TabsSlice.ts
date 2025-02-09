import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  addContact: true,
  chatList: false,
};

export const tabSlice = createSlice({
  name: "tabSlice",
  initialState,
  reducers: {
    changeAddContactState: (state) => {
      state.addContact = true;
      state.chatList = false;
    },

    changeChatListState: (state) => {
      state.chatList = true;
      state.addContact = false;
    },
  },
});

export const { changeAddContactState, changeChatListState } = tabSlice.actions;
