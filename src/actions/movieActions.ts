import { DISPATCH_ACTION, GlobalReducerActions, Movie } from "../types";

export const addMovies = (movies: Movie[]): GlobalReducerActions => ({
  type: DISPATCH_ACTION.ADD_MOVIES,
  value: movies
})

export const resetMovieList = (): GlobalReducerActions => ({
  type: DISPATCH_ACTION.RESET_MOVIES,
  value: []
})

export const loadMovieData = (movieData: Movie): GlobalReducerActions => ({
  type: DISPATCH_ACTION.LOAD_MOVIE_DATA,
  value: movieData,
})

export const setLoading = (loading: boolean): GlobalReducerActions => ({
  type: DISPATCH_ACTION.SET_LOADING,
  value: loading
})

export const setFetchingPage = (fetching: boolean): GlobalReducerActions => ({
  type: DISPATCH_ACTION.SET_FETCHING_PAGE,
  value: fetching,
})

export const setSearchInput = (search: string): GlobalReducerActions => ({
  type: DISPATCH_ACTION.SET_SEARCH_INPUT,
  value: search,
})