import { Suspense, useEffect } from "react";
import { useState } from "react";
import { Outlet, useLocation, useParams } from "react-router-dom";
import fetchInfoFilm from "utils/fetchInfoFilm";
import { Border, Button, Div, Img, LinkActor } from "./MovieDetails.styled";

const InfoFilms = () => {
    const [info, setInfo] = useState(null);
    const location = useLocation();
    const { id } = useParams();

    useEffect(() => {
        fetchInfoFilm(id).then(r => {
            setInfo(r)
        })
    }, [id])

    if (info) {
        const { poster_path, original_title, genres, overview, vote_average, id } = info;
        const vote = vote_average.toFixed(0);
        const genre = genres.map(({ name }) => name).join(', ');
        return (
            <>
                <Button type="button" to={location.state.from}> &#x2190; Go back</Button>
                <Border>
                    <Div>{poster_path ? <Img src={`https://image.tmdb.org/t/p/w300${poster_path}`}></Img> : "We couldn`t found this foto"}
                        <div><h1>{original_title}</h1>
                            <p>User score: {vote}%</p>
                            <h2>Overview</h2>
                            <p>{overview}</p>
                            <h3>Genres</h3>
                            <p>{genre}</p>
                        </div></Div>
                    <p>Additional information:</p>
                    <LinkActor to={'actors'} state={{ id, from: location.state.from }} >Cast</LinkActor>
                    <LinkActor to={'review'} state={{ id, from: location.state.from }}>Reviews</LinkActor>
                    <Suspense fallback={null}><Outlet /></Suspense>
                </Border>
            </>
        )
    }

}

export default InfoFilms;