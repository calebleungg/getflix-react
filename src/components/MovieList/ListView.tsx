import React, { useEffect, useState, useCallback } from "react"
import _ from "lodash"
import { useGlobalContext } from "../../context/globalContext";
import MovieItem from "./MovieItem";
import * as Actions from "../../actions";
import * as Api from "../../api";
import "./styles.scss"

const ListView: React.FunctionComponent = () => {
  const [{ moviesById, moviesLoading, fetchingPage, searchInput }, dispatch] = useGlobalContext()
  // the first search will return the first 2 pages
  const [page, setPage] = useState(3)

  const movieList = _.values(moviesById)

  const fetchNextPage = async () => {
    dispatch(Actions.setFetchingPage(true))
    if (fetchingPage) {
      return;
    }

    const movies = await Api.getSearchedMovies(searchInput, page)
    dispatch(Actions.addMovies(movies.results || []))
    setPage(page + 1)
    dispatch(Actions.setFetchingPage(false))
  }

  const handleScroll = () => {
    const reachedTriggerPoint = (window.innerHeight + window.scrollY) >= document.body.offsetHeight * 0.65
    if (reachedTriggerPoint) {
      fetchNextPage()
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [fetchingPage, searchInput])

  return (
    <div className="list-wrapper">
      {movieList.map((movie) => (
        <MovieItem key={movie.imdbID} movie={movie} />
      ))}
      {moviesLoading && movieList.length === 0 && [1,2,3,4, 6].map((num) => (
        <div key={`placeholder-bubble-${num}`} className="placeholder-movie" />
      ))}
      {!moviesLoading && movieList.length === 0 && (
        <div className="empty-state">
          <div className="title">There isn't a movie you can't find! 👋 </div>
        </div>
      )}
    </div>
  )
}

export default ListView