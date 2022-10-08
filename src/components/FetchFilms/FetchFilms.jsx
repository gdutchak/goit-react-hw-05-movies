import { useEffect } from "react";
import { useState } from "react";
import fetchTrendingFilms from "utils/fetchFilms";

const TrendingFilms = () => {
    const [films, setFilms] = useState([])

    useEffect(() => {
        fetchTrendingFilms().then(data => setFilms(data.results))
    }, [])

    return (
        <ul>
            {films.map(({ id, original_title }) => <li key={id}>{original_title}</li>)}
        </ul>
    )
}

export default TrendingFilms;