import React from "react";
import { Movie } from "../../types";
import * as Actions from "../../actions";
import "./styles.scss";
import { useGlobalContext } from "../../context/globalContext";

type Props = {
  movie: Movie;
}

const MovieItem: React.FunctionComponent<Props> = ({ movie }) => {
  const [_state, dispatch] = useGlobalContext()
  const handleClick = () => dispatch(Actions.openModalFor(movie.imdbID))

  return (
    <div className="movie-item animate-fade-in" onClick={handleClick}>
      <img src={movie.Poster} />
      <div className="summary">
        <div className="subtitle"><span>🎬</span>{movie.Title}</div>
        <div className="subtitle"><span>🗓</span>{movie.Year}</div>
      </div>
    </div>
  )
}

export default MovieItem