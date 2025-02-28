import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const emailVerificationSlice = createSlice({
  name: "emailVerification",
  initialState: {
    emailVerification: false,
  },
  reducers: {
    changeVerificationModal: (
      state: { emailVerification: boolean },
      action: PayloadAction<boolean>
    ) => {
      state.emailVerification = action.payload;
    },
  },
});

export const { changeVerificationModal } = emailVerificationSlice.actions;
