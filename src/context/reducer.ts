import { DISPATCH_ACTION, GlobalContextState, GlobalReducerActions } from "../types";
import * as Api from "../api";
import _ from "lodash";

export const globalReducer = (
  state: GlobalContextState,
  action: GlobalReducerActions,
): GlobalContextState => {
  switch (action.type) {
    case DISPATCH_ACTION.ADD_MOVIES:
      return {
        ...state,
        moviesById: _.merge(
          state.moviesById,
          _.keyBy(action.value, (movie) => movie.imdbID)
        ),
      };
    case DISPATCH_ACTION.RESET_MOVIES:
      return {
        ...state,
        moviesById: {}
      };
    case DISPATCH_ACTION.OPEN_MODEL:
      return {
        ...state,
        modalMovieId: action.value
      };
    case DISPATCH_ACTION.CLOSE_MODAL:
      return {
        ...state,
        modalMovieId: null
      };
    case DISPATCH_ACTION.SET_LOADING:
      return {
        ...state,
        moviesLoading: action.value
      };
    case DISPATCH_ACTION.SET_SEARCH_INPUT:
      return {
        ...state,
        searchInput: action.value
      };
    case DISPATCH_ACTION.LOAD_MOVIE_DATA:
      return {
        ...state,
        moviesById: {
          ...state.moviesById,
          [action.value.imdbID]: {
            ...state.moviesById[action.value.imdbID],
            ...action.value,
            loaded: true,
          }
        }
      };
    case DISPATCH_ACTION.SET_FETCHING_PAGE:
      return {
        ...state,
        fetchingPage: action.value
      }
    default: {
      return state;
    }
  }
}
