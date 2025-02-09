import { createSlice } from "@reduxjs/toolkit";
import { Chat } from "../../types";

type initialStateType = {
  chat: Chat[];
};

const initialState: initialStateType = {
  chat: [],
};

export const chatSlice = createSlice({
  name: "chatSlice",
  initialState,
  reducers: {
    addMessage: (state: initialStateType, action) => {
      state.chat = action.payload;
    },
  },
});

export const { addMessage } = chatSlice.actions;