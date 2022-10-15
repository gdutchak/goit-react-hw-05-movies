import { Error, ErrorContainer, ErrorLink } from "./Error.styled";

const ErrorPage = () => {
    return (<ErrorContainer>
        <Error>Ooops, this page is didn't found. Please, move to main page.</Error>
        <ErrorLink to={'/'}>Going to homepage</ErrorLink>
    </ErrorContainer>)
}

export default ErrorPage;