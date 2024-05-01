const rootSlice = createSlice({
  name: 'root',
  initialState: {
    loading: false,
    portfolioData: null,
  },
  reducer: {
    showoadeing: (state, action) => {
      state.loading = true;
    },

    hideLoading: (state, action) => {
      state.loading = false;
    },

    setPortfolioData: (state, action) => {
      state.portfolioData = action.payload;
    },
  },
});

export default rootSlice;
export const { showoadeing, hideLoading, setPortfolioData } =
  rootSlice.reducers;
