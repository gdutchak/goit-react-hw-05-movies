import { List } from "components/Cast/Cast.styled";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import fetchInfoReview from "utils/fetchInfoReview";

const Review = () => {
    const [review, setReview] = useState(null)
    const { id } = useParams()

    useEffect(() => {
        fetchInfoReview(id).then(r => setReview(r.results))
    }, [id])

    if (!review || review.length === 0) {
        return <p>This film hasn`t feedback yet. You can be first!</p>;
    } else {
        return <List>
            {review.map(({ author, content, id }) => {
                return <li key={id}>
                    <h4>{author}</h4>
                    <p>{content}</p>
                </li>
            })}
        </List>
    }
}

export default Review;