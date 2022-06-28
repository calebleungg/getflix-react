import React, { useReducer } from "react"
import { GlobalContext } from "./globalContext";
import { globalReducer } from "./reducer";

type ProviderProps = {
  children: React.ReactNode,
}

const GlobalContextProvider: React.FunctionComponent<ProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(globalReducer, {
    searchInput: "",
    fetchingPage: false,
    moviesLoading: false,
    modalMovieId: null,
    moviesById: {},
  })

  return (
    <GlobalContext.Provider value={{ ...state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  )
}

export default GlobalContextProvider;