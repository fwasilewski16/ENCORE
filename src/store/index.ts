import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Event, Artist } from "../types/types";

interface ModalSliceStateType {
  mobileMenuVisible: boolean;
  logInWindowVisible: boolean;
  logOutWindowVisible: boolean;
  searchWindowVisible: boolean;
  eventsWindowVisible: boolean;
  artistsWindowVisible: boolean;
  animation: boolean;
}

const modalSliceInitialState: ModalSliceStateType = { mobileMenuVisible: false, logInWindowVisible: false, logOutWindowVisible: false, searchWindowVisible: false, eventsWindowVisible: false, artistsWindowVisible: false, animation: false };

const modalSlice = createSlice({
  name: "modal",
  initialState: modalSliceInitialState,
  reducers: {
    toggleMobileWindow(state) {
      state.mobileMenuVisible = !state.mobileMenuVisible;
    },
    togglelogInWindow(state) {
      state.logInWindowVisible = !state.logInWindowVisible;
    },
    togglelogOutWindow(state) {
      state.logOutWindowVisible = !state.logOutWindowVisible;
    },
    toggleSearchWindow(state) {
      state.searchWindowVisible = !state.searchWindowVisible;
    },
    toggleEventsWindow(state) {
      state.eventsWindowVisible = !state.eventsWindowVisible;
    },
    toggleArtistsWindow(state) {
      state.artistsWindowVisible = !state.artistsWindowVisible;
    },
    toggleAnimation(state) {
      state.animation = !state.animation;
    },
  },
});

interface EventsSliceStateType {
  events: Event[];
  isLoading: boolean;
  error: boolean;
  filter: {
    city: string;
    dateFrom: string;
    dateTo: string;
  };
}

const eventsSliceInitialState: EventsSliceStateType = { events: [], isLoading: false, error: false, filter: { city: "All", dateFrom: "", dateTo: "" } };

const eventsSlice = createSlice({
  name: "events",
  initialState: eventsSliceInitialState,
  reducers: {
    addEvents(state, action) {
      state.events = action.payload;
    },
    isLoadingHandler(state, action) {
      state.isLoading = action.payload;
    },
    errorHandler(state, action) {
      state.error = action.payload;
    },
    cityHandler(state, action) {
      state.filter.city = action.payload;
    },
    dateFromHandler(state, action) {
      state.filter.dateFrom = action.payload;
    },
    dateToHandler(state, action) {
      state.filter.dateTo = action.payload;
    },
  },
});

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
    removeEvent(state, action: PayloadAction<Event>) {
      return {
        ...state,
        events: state.events.filter((event) => event.event_id != action.payload.artist_id),
      };
    },
  },
});

const store = configureStore({
  reducer: { modal: modalSlice.reducer, login: loginSlice.reducer, accountWindow: accountWindowSlice.reducer, account: accountSlice.reducer, events: eventsSlice.reducer },
});

export const modalActions = modalSlice.actions;
export const eventsActions = eventsSlice.actions;
export const loginActions = loginSlice.actions;
export const accountWindowActions = accountWindowSlice.actions;
export const accountActions = accountSlice.actions;

export default store;

export type AppStore = typeof store;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
