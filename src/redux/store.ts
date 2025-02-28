import { configureStore } from "@reduxjs/toolkit";
import { chatSlice } from "./slices/chatSlice";
import { userContactSlice } from "./slices/userContactSlice";
import { tabSlice } from "./slices/TabsSlice";
import { chatListSlice } from "./slices/chatListSlice";
import { sidebarActiveSlice } from "./slices/SidebarActiveSlice";
import { setChatIdSlice } from "./slices/setChatIdSlice";
import { accountSettingPanel } from "./slices/accountSettingPanel";
import { emailVerificationSlice } from "./slices/emailVerificationSlice";

export const store = configureStore({
  reducer: {
    chatSlice: chatSlice.reducer,
    userContactSlice: userContactSlice.reducer,
    tabsSlice: tabSlice.reducer,
    chatListSlice: chatListSlice.reducer,
    sidebarActiveSlice: sidebarActiveSlice.reducer,
    setChatId: setChatIdSlice.reducer,
    accountSettingPanel: accountSettingPanel.reducer,
    emailVerificationSlice: emailVerificationSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
