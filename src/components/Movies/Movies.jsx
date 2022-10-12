import { Suspense, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import fetchFilmsCoreWords from "utils/fetchFilmsCoreWords";
import { ButtonInp, Input, LinkEl, List } from "./Movies.styled";

const FetchFilmsCoreWords = () => {
    const [name, setName] = useState('');
    const [collection, setCollection] = useState(null);
    // const [search, setSearch] = useSearchParams();
    // const name = search.get('search');
    const location = useLocation();

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

    return (
        <>
            <Input name="name" onInput={e => setName(e.target.value)}></Input>
            <ButtonInp type="submit" onClick={findFilms}>Search</ButtonInp>
            <List>
                {collection ? collection.map(({ id, original_title }) =>
                    <LinkEl key={id} state={{ from: location }} to={`${id}`}>{original_title}</LinkEl>) : null}
            </List>
            <Suspense fallback={null}><Outlet /></Suspense>
        </>
    )
}

export default FetchFilmsCoreWords;
// id, 