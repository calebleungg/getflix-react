import React, { createContext, useContext } from "react"
import { GlobalContextState, GlobalReducerActions } from "../types"

export const GlobalContext = createContext<GlobalContextState>({
  searchInput: "",
  fetchingPage: false,
  moviesLoading: false,
  modalMovieId: null,
  moviesById: {},
})

export const useGlobalContext = ():[
  GlobalContextState,
  React.Dispatch<GlobalReducerActions>
] => {
  const context = useContext(GlobalContext);

  return [
    context,
    context.dispatch as React.Dispatch<GlobalReducerActions>,
  ]
}
