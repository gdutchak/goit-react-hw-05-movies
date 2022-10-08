import { Route, Routes } from "react-router-dom";
import Layout from "./Header/Header";
import TrendingFilms from "./FetchFilms/FetchFilms";
import FetchFilmsCoreWords from "./FetchFilmsCoreWords/FetchFilmsCoreWords";


export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="home" element={<TrendingFilms />} />
          <Route path="home" element={<FetchFilmsCoreWords />} />
        </Route>
      </Routes>
    </>
  );
};
