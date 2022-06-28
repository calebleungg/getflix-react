import { useGlobalContext } from "../../context/globalContext"
import React, { useEffect } from "react"
import Modal from '@mui/material/Modal';
import * as Actions from "../../actions";
import * as Api from "../../api";
import "./styles.scss"

const MovieModal: React.FunctionComponent = () => {
  const [{ modalMovieId, moviesById }, dispatch] = useGlobalContext()

  const movie = moviesById[modalMovieId || -1]
  const visible = movie ? true : false;

  const handleClose = () => dispatch(Actions.closeModal())

  const fetchMovieData = async () => {
    if (!modalMovieId) {
      return;
    }

    const movieData = await Api.getMovieDataForId(modalMovieId)
    if (movieData?.data) {
      dispatch(Actions.loadMovieData(movieData.data))
    }
  }

  useEffect(() => {
    if (movie && !movie.loaded) {
      fetchMovieData()
    }
  }, [movie])

  if (!movie) {
    return <React.Fragment></React.Fragment>
  }

  return (
    <Modal open={visible} onClose={handleClose}>
      <div className="movie-modal-content">
        <img src={movie.Poster} />
        {!movie.loaded && (
          <div className="details">
            <div className="placeholder-details" />
            <div className="placeholder-details" />
            <div className="placeholder-details" />
          </div>
        )}
        {movie.loaded && (
          <div className="details">
            <div><span>🎬</span>{movie.Title}</div>
            <div><span>🗓</span>{`Released on ${movie.Released}`}</div>
            <div><span>🎥</span>{`Runtime: ${movie.Runtime}`}</div>
            <div><span>🎥</span>{`Rated: ${movie.Rated}`}</div>
            <div><span>🎬</span>{`Director: ${movie.Director}`}</div>
            <div><span>✏️</span>{`Writer: ${movie.Writer}`}</div>
            <div><span>👥</span>{`Actors: ${movie.Actors}`}</div>
            <div className="description"><span>🌄</span>{movie.Plot}</div>
            <div className="ratings">
              {(movie.Ratings || []).map((rating, index) => (
                <div key={`rating-given-${index}`}>
                  {`${rating["Source"]} gave it a ${rating["Value"]}`}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </Modal>
  )
}

export default MovieModal;