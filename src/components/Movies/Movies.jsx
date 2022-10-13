import { Suspense, useState, useEffect } from "react";
import { Outlet, useLocation, useSearchParams } from "react-router-dom";
import fetchFilmsCoreWords from "utils/fetchFilmsCoreWords";
import { ButtonInp, Input, LinkEl } from "./Movies.styled";

const FetchFilmsCoreWords = () => {
    const [collection, setCollection] = useState(null);
    const [search, setSearch] = useSearchParams();
    const name = search.get('search') ?? '';
    const location = useLocation();
    const [data] = useState(name);

    const findFilms = () => {
        if (!name) {
            alert("Please write the name!")
            return
        }
        if (name) {
            return fetchFilmsCoreWords(name)
                .then(r => setCollection(r.results))
        }
    }

    useEffect(() => {
        if (!data) {
            return
        }
        if (name === data) {
            fetchFilmsCoreWords(name).then(r => setCollection(r.results))
        }
    }, [name, data])

    return (
        <>
            <Input name="name" onInput={e => setSearch(search !== '' ? { search: e.target.value } : {})} value={name}></Input>
            <ButtonInp type="submit" onClick={findFilms}>Search</ButtonInp>
            {collection ? collection.map(({ id, original_title }) =>
                <LinkEl key={id} state={{ from: location }} to={`${id}`}>{original_title}</LinkEl>) : null}
            <Suspense fallback={null}><Outlet /></Suspense>
        </>
    )
}

export default FetchFilmsCoreWords;