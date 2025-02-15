import React from "react";

function GhibliMovie({ title, release_date, director, image }) {
  return (
    <div className="ghibli-movie">
      <img src={image} alt={`${title} poster`} className="movie-poster" />
      <h2>{title}</h2>
      <p>Release Date: {release_date}</p>
      <p>Director: {director}</p>
    </div>
  );
}

export default GhibliMovie;

// import React from "react";

// function GhibliMovie({ title, release_date, director, image }) {
//   return (
//     <div className="ghibli-movie">
//       <img src={image} alt={`${title} poster`} className="movie-poster" />
//       <h2>{title}</h2>
//       <p>Release Date: {release_date}</p>
//       <p>Director: {director}</p>
//     </div>
//   );
// }

// export default GhibliMovie;
