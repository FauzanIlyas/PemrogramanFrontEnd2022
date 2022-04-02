import Movie from "../Movie/Movie";
import styles from "./Movies.module.css";
// import data movies
import data from "../../utils/constants/data";
import { useState } from "react";
import { nanoid } from "nanoid";


function Movies() {
  // membuat variable movies
  // const movies = data;

  // membuat variable movies
  const [movies, setMovies] = useState(data);

  //  buat fungsi tambah film
  // dijalankan ketika tombol di klik
  function tambahfilm() {
    //console.log("tambah film");
    const movie = {
      id: nanoid(5),
      title: "Spiral Jigsaw",
      year: "2021",
      type: "Movie",
      poster: "https://picsum.photos/300/400",
    };

    // movies.push(movie);
    // console.log(movies);
    // menambahkan movie ke state movies
    // setMovies(movies.push(movie));
    // spread operator copy dan merge array
    setMovies([...movies, movie]);
  }

  return (
    <div className={styles.container}>
      <section className={styles.movies}>
        <h2 className={styles.movies__title}>Latest Movies</h2>
        <div className={styles.movie__container}>
          {/* 
            * looping data movies: map.
            * render component movie
            * kirim props movie
          */}
          {
            movies.map(function(movie) {
              return <Movie key={movie.id} movie={movie} />;
            })}
        </div>
        {/* menambahkan event on click */}
        <button onClick={tambahfilm}>Add Movie</button>
      </section>
    </div>
  );
}

export default Movies;
