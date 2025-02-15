import { useState, useEffect } from "react";
import axios from "axios";

const useMoviesFetch = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get("https://ghibliapi.vercel.app/films");
        setMovies(response.data);
        setLoading(false);
      } catch (err) {
        setError(
          "An error occurred while fetching the data. Please try again later."
        );
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  return { movies, loading, error };
};

export default useMoviesFetch;
