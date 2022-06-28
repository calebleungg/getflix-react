import React from "react"
import "./design_system/index.scss";
import GlobalContextProvider from "./context/provider";
import MovieList from "./components/MovieList";
import ApplicationLayout from "./components/ApplicationLayout";
import MovieModal from "./components/MovieList/MovieModal";

const App: React.FunctionComponent = () => {
  return (
    <GlobalContextProvider>
      <ApplicationLayout>
        <MovieList />
        <MovieModal />
      </ApplicationLayout>  
    </GlobalContextProvider>
  );
}

export default App