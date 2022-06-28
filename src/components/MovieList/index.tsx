import React from "react"
import "./styles.scss"
import MovieSearchInput from "../MovieSearchInput";
import ListView from "./ListView";

const MovieList: React.FunctionComponent = () => {
  return (
    <div className="movie-list-container">
      <div className="title text-primary">Search for your favourite movie!</div>
      <div className="divider-sm" />
      <MovieSearchInput />
      <div className="divider-md" />
      <ListView />
    </div>
  )
}

export default MovieList;