import { useEffect, useState } from "react";
import axios from "axios";
import Movies from "../../components/Movies/Movies";
import Hero from "../../components/Hero/Hero";

function PopularMovie() {
  // Simpan API_KEY dan URL ke variable
  const API_KEY = process.env.REACT_APP_API_KEY;
  const URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`;

  // Membuat state movies
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getPopularMovies();
    // // Fetch data dari axios
    // const response = await axios(URL);
    // //console.log(response.data.results);

    // // Simpan data ke state
    // setMovies(response.data.results);
  }, []);

  async function getPopularMovies() {
    // Fetch data dari axios
    const response = await axios(URL);
    //console.log(response.data.results);

    // Simpan data ke state
    setMovies(response.data.results);
  }

  console.log(movies);

  return (
    <>
      <Hero />
      <Movies movies={movies} />
    </>
  );
}

export default PopularMovie;
