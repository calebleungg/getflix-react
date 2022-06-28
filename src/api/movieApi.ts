import client, { OMDB_API_KEY } from "./client"

export const getSearchedMovies = async (
  search: string,
  page: number
) => {
  try {
    const request = await client.get("", {
      params: { s: search, plot: "full", page, apikey: OMDB_API_KEY }
    })

    if (request.status === 200) {
      return { results: request.data.Search }
    } else {
      return { error: "Failed to fetch data", results: [] }
    }
  } catch (error) {
    return { error: "Failed to fetch data", results: [] }
  }
}

export const getMovieDataForId = async (movieId: string) => {
  try {
    const request = await client.get("", {
      params: { i: movieId, apikey: OMDB_API_KEY }
    })

    if (request.status === 200) {
      return { data: request.data }
    } else {
      return { error: "Failed to fetch data" }
    }
  } catch (error) {
    
  }
}