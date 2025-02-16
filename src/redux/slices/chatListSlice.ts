import { createSlice } from "@reduxjs/toolkit";
import { ChatListInterface } from "../../types";

type initialStateType = {
  chatList: ChatListInterface[];
};

const initialState: initialStateType = {
  chatList: [],
};

export const chatListSlice = createSlice({
  name: "chatListSlice",
  initialState,
  reducers: {
    addChatList: (state: initialStateType, action) => {
      state.chatList = action.payload;
    },
  },
});

export const { addChatList } = chatListSlice.actions;
