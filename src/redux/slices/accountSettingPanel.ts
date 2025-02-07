import { createSlice } from "@reduxjs/toolkit";

export const accountSettingPanel = createSlice({
    name: "accountSettingPanel",
    initialState: {
        panel: false,
    },
    reducers: {
        changePanelState: (state, action) => {
            state.panel = action.payload;
        }
    }
});

export const { changePanelState } = accountSettingPanel.actions;