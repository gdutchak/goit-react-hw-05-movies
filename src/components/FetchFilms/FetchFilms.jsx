import { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import fetchTrendingFilms from "utils/fetchFilms";
import { LinkEl } from "./FetchFilms.styled";

const TrendingFilms = () => {
    const [films, setFilms] = useState([]);
    const location = useLocation();

    useEffect(() => {
        fetchTrendingFilms().then(data => setFilms(data.results))
    }, [])


    return (
        <>
            {films.map(({ id, original_title }) => <LinkEl key={id} state={{ from: location }} to={`movies/${id}`}>{original_title}</LinkEl>)}
            <Outlet />
        </>
    )
}

export default TrendingFilms;


