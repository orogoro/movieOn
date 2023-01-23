import { Routes, Route, Navigate } from "react-router-dom";
import { lazy, Suspense } from "react";
import { ToastContainer } from "react-toastify";

import { Container, Navigation, Loader } from "./";

const Movies = lazy(() => import("../pages/MoviesPage"));
const Home = lazy(() => import("../pages/HomePage"));
const MovieDetails = lazy(() => import("../pages/MovieDetailsPage"));
const Search = lazy(() => import("../pages/SearchPage"));

const App: React.FC = () => {
  return (
    <>
      <Navigation />
      <Container>
        <Suspense fallback={<Loader size={70} styles={""} />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="Movies" element={<Movies />} />
            <Route path="Movies/:itemId" element={<MovieDetails />} />
            <Route path="Search/:query" element={<Search />} />

            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </Suspense>
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss={false}
          draggable
          pauseOnHover={false}
        />
      </Container>
    </>
  );
};

export default App;
