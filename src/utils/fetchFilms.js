function fetchTrendingFilms() {
    return fetch('https://api.themoviedb.org/3/trending/movie/week?api_key=62f49978977e44c6bb0e3dfa31d10c8e').then(r => r.json())
}

export default fetchTrendingFilms;