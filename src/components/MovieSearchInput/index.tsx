import React from "react"
import _ from "lodash"
import "./styles.scss"
import { useGlobalContext } from "../../context/globalContext"
import * as Api from "../../api";
import * as Actions from "../../actions";

const MovieSearchInput: React.FunctionComponent = () => {
  const [_state, dispatch] = useGlobalContext()

  const fetchMovies = async (search: string) => {
    dispatch(Actions.setSearchInput(search))
    dispatch(Actions.setLoading(true))
    dispatch(Actions.resetMovieList())

    const results = await Promise.all([
      Api.getSearchedMovies(search, 1),
      Api.getSearchedMovies(search, 2)
    ])
    const accumulatedResults = _.flatMapDeep(results, (movies) => movies.results || [])
      .map((movie) => ({ ...movie, loaded: false }))
    dispatch(Actions.addMovies(accumulatedResults))

    setTimeout(() => {
      dispatch(Actions.setLoading(false))
    }, 500)
  }

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (event.target.value.length > 3) {
      fetchMovies(event.target.value)
    } else {
      dispatch(Actions.resetMovieList())
    }
  }

  return (
    <div className="search-container relative">
      <span className="emoji">🔎</span>
      <input
        className="input-basic content"
        type="text"
        onChange={_.debounce((event) => handleChange(event), 500)}
        placeholder="Enter a movie title"
      />
    </div>
  )
}

export default MovieSearchInput