import { DISPATCH_ACTION } from "./enums";
import { Movie } from "./movie";

export type GlobalReducerActions = 
  | {
    type: DISPATCH_ACTION.ADD_MOVIES;
    value: Movie[];
  } | {
    type: DISPATCH_ACTION.RESET_MOVIES;
    value: [];
  } | {
    type: DISPATCH_ACTION.OPEN_MODEL;
    value: string;
  } | {
    type: DISPATCH_ACTION.CLOSE_MODAL;
    value: null;
  } | {
    type: DISPATCH_ACTION.LOAD_MOVIE_DATA;
    value: Movie;
  } | {
    type: DISPATCH_ACTION.SET_LOADING;
    value: boolean;
  } | {
    type: DISPATCH_ACTION.SET_FETCHING_PAGE;
    value: boolean;
  } | {
    type: DISPATCH_ACTION.SET_SEARCH_INPUT;
    value: string;
  }

export interface GlobalContextState {
  searchInput: string,
  fetchingPage: boolean,
  moviesLoading: boolean,
  modalMovieId: string | null,
  moviesById: { [id: string]: Movie },
  dispatch?: React.Dispatch<GlobalReducerActions>
}
