export default {
  LOGIN: (state, user) => {
    state.user = user;
  },
  LOGOUT(state) {
    state.user = null;
  },
  LOADING: (state, status) => {
    state.isLoading = status;
  }
  // AUTH_LOADING: (state, status) => {
  //   state.isAuthLoading = status;
  // }
};
