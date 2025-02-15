import React from "react";
import GhibliMovie from "./GhibliMovie";

function MovieList({ movies }) {
  return (
    <div className="movie-list">
      {movies.map((movie) => (
        <GhibliMovie
          key={movie.id}
          {...movie}
          // title={movie.title}
          // release_date={movie.release_date}
          // director={movie.director}
          // image={movie.image}
        />
      ))}
    </div>
  );
}

export default MovieList;
