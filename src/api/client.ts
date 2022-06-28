import axios from "axios"

// ideally this would be an .env variable
// but for simplicitys sake we shall use a constant
export const OMDB_API_KEY = "320f6ab2"

const API_BASE_URL = `https://www.omdbapi.com`

export default axios.create({ baseURL: API_BASE_URL })