import Movie from "../Movie/Movie";
import styles from "./Movies.module.css";
// import data movies
import data from "../../utils/constants/data";


function Movies() {
  // membuat variable movies
  const movies = data;

  // fungsi tambah film
  // dijalankan ketika tombol di klik
  function tambahfilm() {
    //console.log("tambah film");
    const movie = {
      id: "xyz",
      title: "Spiral Jigsaw",
      year: "2021",
      type: "Movie",
      poster: "https://picsum.photos/300/400",
    };

    movies.push(movie);
    console.log(movies);
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
