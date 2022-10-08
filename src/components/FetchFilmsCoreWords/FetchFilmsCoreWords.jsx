import { useState } from "react";
import fetchFilmsCoreWords from "utils/fetchFilmsCoreWords";

const FetchFilmsCoreWords = () => {
    const [name, setName] = useState([])

    const findFilms = e => {
        if (e.target.value.trim() !== '') {
            fetchFilmsCoreWords(e.target.value).then(r => setName(r.results))
        }
        if (e.target.value === '') {
            setName([])
        }
    }

    return (
        <>
            <input name="name" onInput={findFilms}></input>
            <ul>
                {name.map(({ id, original_title }) => <li key={id}>{original_title}</li>)}
            </ul>
        </>
    )
}

export default FetchFilmsCoreWords;