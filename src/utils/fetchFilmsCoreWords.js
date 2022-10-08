function fetchFilmsCoreWords(value) {
    return fetch(`https://api.themoviedb.org/3/search/movie?api_key=62f49978977e44c6bb0e3dfa31d10c8e&query=${value}`).then(r => r.json())
}
export default fetchFilmsCoreWords;