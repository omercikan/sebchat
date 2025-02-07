import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const sidebarActiveSlice = createSlice({
  name: "sidebarActiveSlice",
  initialState: {
    activeTab: "Ekle",
  },
  reducers: {
    changeSidebarTab: (
      state: { activeTab: string },
      action: PayloadAction<string>
    ) => {
      state.activeTab = action.payload;
    },
  },
});

export const { changeSidebarTab } = sidebarActiveSlice.actions;