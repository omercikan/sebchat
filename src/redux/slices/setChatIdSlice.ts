import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const setChatIdSlice = createSlice({
  name: "setChatIdSlice",
  initialState: {
    activeChatId: "",
  },
  reducers: {
    setChatId: (
      state: { activeChatId: string },
      action: PayloadAction<string>
    ) => {
      state.activeChatId = action.payload;
    },
  },
});

export const { setChatId } = setChatIdSlice.actions;
