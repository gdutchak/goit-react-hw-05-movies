import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import fetchInfoActors from "utils/fetchInfoActors";
import { ImgActor, List } from "./Cast.styled";

const AboutActors = () => {
    const [actors, setActors] = useState(null)
    const { id } = useParams();

    useEffect(() => {
        fetchInfoActors(id).then(r => setActors(r.cast))
    }, [id])

    if (actors) {
        return <List>
            {actors.map(({ profile_path, name, character, id }) => {
                return (
                    <li key={id}>
                        {profile_path ? <ImgActor src={`https://image.tmdb.org/t/p/w300/${profile_path}`}></ImgActor> : "We couldn`t found this foto"}
                        <h4>{name ? name : 'We coudn`t found the foto('}</h4>
                        <p>Character: {character ? character : 'We coudn`t found the character('}</p>
                    </li>
                )
            })}
        </List>
    }
}

export default AboutActors;