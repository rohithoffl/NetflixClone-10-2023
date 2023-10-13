const API_KEY = "517899c48b934220051609fc702f5aa8";

const requests = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_network=213`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_gentrs=28`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_gentrs=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_gentrs=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_gentrs=10749`,
    fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_gentrs=99`,
}

export default requests;