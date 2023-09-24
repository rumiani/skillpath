import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { initialStateTypes, pathType } from "./interfaces";

const initialState: initialStateTypes = {
  user: {
    id: "",
    name: "",
    email: "",
    avatar: "",
    role: "",
    joinTime: "",
    permission: true,
    loggedIn: true,
    linkedIn: "",
    twitter: "",
  },
  users: [],
  path: {
    id: "",
    title: "",
    body: "",
    length: 1,
    tags: [],
    url: "",
  },
  paths: [],
};

export const appStateSlice = createSlice({
  name: "appState",
  initialState,
  reducers: {
    pathReducer: (state, action: PayloadAction<object>) => {
      state.path = { ...state.path, ...action.payload };
    },
    resetPathReducer: (state) => {
      state.path = initialState.path;
    },
    userReducer: (state, action: PayloadAction<object>) => {
      state.user = { ...state.user, ...action.payload };
    },
  },
});

export const { pathReducer, resetPathReducer, userReducer } =
  appStateSlice.actions;

export default appStateSlice.reducer;
