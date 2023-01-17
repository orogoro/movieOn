import { Routes, Route, Navigate } from "react-router-dom";
import { lazy, Suspense } from "react";

import { Container, Navigation } from "./";

const Movies = lazy(() => import("../pages/MoviesPage"));
const Home = lazy(() => import("../pages/HomePage"));
const MovieDetails = lazy(() => import("../pages/MovieDetailsPage"));

const App: React.FC = () => {
  return (
    <>
      <Navigation />
      <Container>
        <Suspense fallback={"Loading..."}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="Movies" element={<Movies />} />
            <Route path="Movies/:itemId" element={<MovieDetails />} />

            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </Suspense>
      </Container>
    </>
  );
};

export default App;
