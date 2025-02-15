import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MovieList from "./components/MovieList";
import Pagination from "./components/Pagination";
import useMoviesFetch from "./hooks/useMoviesFetch";
import usePagination from "./hooks/usePagination";

function App() {
  const { movies, loading, error } = useMoviesFetch();
  const {
    currentItems: currentMovies,
    paginate,
    currentPage,
    totalItems,
  } = usePagination(movies, 3);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="App">
      <Header />
      <main>
        <h2>Studio Ghibli Films</h2>
        <MovieList movies={currentMovies} />
        <Pagination
          moviesPerPage={3}
          totalMovies={totalItems}
          paginate={paginate}
          currentPage={currentPage}
        />
      </main>
      <Footer />
    </div>
  );
}

export default App;
