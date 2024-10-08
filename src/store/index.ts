import { configureStore, createSlice } from "@reduxjs/toolkit";

interface ModalSliceInitialStateType {
  mobileMenuVisible: boolean;
  logInWindowVisible: boolean;
  logOutWindowVisible: boolean;
  searchWindowVisible: boolean;
  eventsWindowVisible: boolean;
  artistsWindowVisible: boolean;
  animation: boolean;
}

const ModalSliceInitialState: ModalSliceInitialStateType = { mobileMenuVisible: false, logInWindowVisible: false, logOutWindowVisible: false, searchWindowVisible: false, eventsWindowVisible: false, artistsWindowVisible: false, animation: false };

const modalSlice = createSlice({
  name: "modal",
  initialState: ModalSliceInitialState,
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

interface Event {}

interface EventsSliceType {
  events: object[];
  isLoading: boolean;
}

const eventsSlice = createSlice({
  name: "events",
  initialState: { events: [], isLoading: false, error: false, filter: { city: "All", dateFrom: "", dateTo: "" } },
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

const loginSlice = createSlice({
  name: "login",
  initialState: { loggedIn: false },
  reducers: {
    logIn(state) {
      state.loggedIn = true;
    },
    logOut(state) {
      state.loggedIn = false;
    },
  },
});

const accountWindowSlice = createSlice({
  name: "accountWindow",
  initialState: { accountWindowVisible: false, animation: false },
  reducers: {
    toggleAccountWindow(state) {
      state.accountWindowVisible = !state.accountWindowVisible;
    },
    toggleAnimation(state) {
      state.animation = !state.animation;
    },
  },
});

const accountSlice = createSlice({
  name: "account",
  initialState: { artists: [], events: [] },
  reducers: {
    addArtist(state, action) {
      return {
        ...state,
        artists: [...state.artists, action.payload],
      };
    },
    removeArtist(state, action) {
      return {
        ...state,
        artists: state.artists.filter((artist) => artist.artist_id != action.payload),
      };
    },
    addEvent(state, action) {
      return {
        ...state,
        events: [...state.events, action.payload],
      };
    },
    removeEvent(state, action) {
      return {
        ...state,
        events: state.events.filter((event) => event.event_id != action.payload),
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
