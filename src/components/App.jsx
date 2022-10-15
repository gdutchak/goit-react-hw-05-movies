import { Route, Routes } from "react-router-dom";
import Layout from "./Home/Home";
import { lazy } from "react";
import ErrorPage from "./Error/Error";

const FetchFilmsCoreWord = lazy(() => import('./Movies/Movies'));
const TrendOfFilms = lazy(() => import('./FetchFilms/FetchFilms'));
const InfoFilms = lazy(() => import('./MovieDetails/MovieDetails'));
const AboutActors = lazy(() => import('./Cast/Cast'));
const Review = lazy(() => import('./Reviews/Reviews'));


export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<TrendOfFilms />} />
          <Route path="movies" element={<FetchFilmsCoreWord />}>
          </Route>
          <Route path="movies/:id" element={<InfoFilms />}>
            <Route path="actors" element={<AboutActors />}></Route>
            <Route path="review" element={<Review />}></Route>
          </Route>
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
};

