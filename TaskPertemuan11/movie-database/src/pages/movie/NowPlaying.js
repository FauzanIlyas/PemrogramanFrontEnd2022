import { useEffect, useState } from "react";
import axios from "axios";
import Movies from "../../components/Movies/Movies";
import Hero from "../../components/Hero/Hero";

function NowPlayingMovie() {
  // Simpan API_KEY dan URL ke variable
  const API_KEY = process.env.REACT_APP_API_KEY;
  const URL = `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}`;

  // Membuat state movies
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getNowPlayingMovies();
    // // Fetch data dari axios
    // const response = await axios(URL);
    // //console.log(response.data.results);

    // // Simpan data ke state
    // setMovies(response.data.results);
  }, []);

  async function getNowPlayingMovies() {
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
      <Movies title="NOW PLAYING" movies={movies} />
    </>
  );
}

export default NowPlayingMovie;

// function NowPlayingMovie() {
//   return (
//     <>
//       <h2>Now Playing Movie</h2>
//     </>
//   );
// }

// export default NowPlayingMovie;
