import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Event, Artist } from "../types/types";

interface LoginSliceType {
  loggedIn: boolean;
}

const loginSliceInitialState: LoginSliceType = { loggedIn: false };

const loginSlice = createSlice({
  name: "login",
  initialState: loginSliceInitialState,
  reducers: {
    logIn(state) {
      state.loggedIn = true;
    },
    logOut(state) {
      state.loggedIn = false;
    },
  },
});

interface AccountsWindowSliceType {
  accountWindowVisible: boolean;
  animation: boolean;
}

const accountsWindowSliceInitialState: AccountsWindowSliceType = { accountWindowVisible: false, animation: false };

const accountWindowSlice = createSlice({
  name: "accountWindow",
  initialState: accountsWindowSliceInitialState,
  reducers: {
    toggleAccountWindow(state) {
      state.accountWindowVisible = !state.accountWindowVisible;
    },
    toggleAnimation(state) {
      state.animation = !state.animation;
    },
  },
});

interface AccountSliceType {
  artists: Artist[];
  events: Event[];
}

const accountSliceInitialState: AccountSliceType = { artists: [], events: [] };

const accountSlice = createSlice({
  name: "account",
  initialState: accountSliceInitialState,
  reducers: {
    addArtist(state, action: PayloadAction<Artist>) {
      return {
        ...state,
        artists: [...state.artists, action.payload],
      };
    },
    removeArtist(state, action: PayloadAction<Artist>) {
      return {
        ...state,
        artists: state.artists.filter((artist) => artist.artist_id != action.payload.artist_id),
      };
    },
    addEvent(state, action: PayloadAction<Event>) {
      return {
        ...state,
        events: [...state.events, action.payload],
      };
    },
    removeEvent(state, action: PayloadAction<string>) {
      return {
        ...state,
        events: state.events.filter((event) => event.event_id != action.payload),
      };
    },
  },
});

const store = configureStore({
  reducer: { login: loginSlice.reducer, accountWindow: accountWindowSlice.reducer, account: accountSlice.reducer },
});

export const loginActions = loginSlice.actions;
export const accountWindowActions = accountWindowSlice.actions;
export const accountActions = accountSlice.actions;

export default store;

export type AppStore = typeof store;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
