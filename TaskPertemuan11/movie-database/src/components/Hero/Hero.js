/* eslint-disable react-hooks/exhaustive-deps */
// import styles from "./Hero.module.css";
import StyledHero, { Container } from "./Hero.Styled";
import { useEffect, useState } from "react";
import Button from "../ui/Button";
import axios from "axios";

function Hero() {
  // Membuat State movie
  const [movie, setMovie] = useState("");
  const API_KEY = process.env.REACT_APP_API_KEY;
  const genres = movie && movie.genres.map((genre) => genre.name).join(", ");
  const trailer = movie && `https://www.youtube.com/watch?v=${movie.videos.results[1].key}`;

  console.log(trailer);

  /*   async function fetchMovie() {
    const url = "https://www.omdbapi.com/?apikey=fcf50ae6&i=tt2975590";
    // Melakukan Fetch data dari API omdb.
    const response = await fetch(url);
    const data = await response.json();

    // Update state movie dengan data movie (hasil fetch)
    setMovie(data);
  } */

  /**
   * Menjalankan useEffect.
   * Parameter kedua digunakan untuk custom lifecycle update.
   * Jika state di dalam array berubah, maka jalankan useEffect lagi (lifecycle update).
   * Jika state di dalam array kosong, maka jalankan sekali (lifecycle mount).
   */
  useEffect(getDetailMovie, []);

  // Mendapatkan 1 data dari trending movies
  async function getTrendingMovies() {
    const URL = `https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}`;
    const response = await axios(URL);
    // koding dibawah bisa dihapus
    console.log(response.data.results[0]);

    return response.data.results[0];
  }

  // Mendapatkan fungsi untuk mendapatkan detail movie
  async function getDetailMovie() {
    // Ambil id dari trending movie
    const trendingMovie = await getTrendingMovies();
    const id = trendingMovie.id;

    // Fetch detail movie by id
    const URL = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&append_to_response=videos`;
    const response = await axios(URL);
    console.log(response);

    setMovie(response.data);
  }

  // Tampilkan state movie.
  //console.log(movie);

  //   return (
  //     <div className={styles.container}>
  //       <section className={styles.hero}>
  //         <div className={styles.hero__left}>
  //           <h2 className={styles.hero__title}>{movie.Title}</h2>
  //           <h3 className={styles.hero__genre}>Genre: {movie.Genre}</h3>
  //           <p className={styles.hero__description}>{movie.Plot}</p>
  //           <Button>Watch</Button>
  //         </div>
  //         <div className="hero__right">
  //           <img
  //             className={styles.hero__image}
  //             src={movie.Poster}
  //             alt="placeholder"
  //           />
  //         </div>
  //       </section>
  //     </div>
  //   );
  // }

//   return (
//     <StyledHero>
//       <section>
//         <StyledHero>
//           <h2>{movie.title}</h2>
//           <h3>{genres}</h3>
//           <p>{movie.overview}</p>
//           <Button as="a" href={trailer} target="_blank" variant="primary">Watch Movie</Button>
//         </StyledHero>
//         <StyledHero>
//           <img
//             src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
//             alt={movie.title}
//           />
//         </StyledHero>
//       </section>
//     </StyledHero>
//   );
// }

return (
  <Container>
    <StyledHero>
      <div className="hero__left">
        <h2>{movie.title}</h2>
        <h3>{genres}</h3>
        <p>{movie.overview}</p>
        <Button
          as="a"
          href={`https://www.youtube.com/watch?v=${trailer}`}
          target="_blank"
        >
          Watch Movie
        </Button>
      </div>
      <div>
        <img
          src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
          alt="placeholder"
        />
      </div>
    </StyledHero>
  </Container>
);
}

export default Hero;
