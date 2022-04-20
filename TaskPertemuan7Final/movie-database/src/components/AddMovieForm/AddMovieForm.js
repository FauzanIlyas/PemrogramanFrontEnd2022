import { nanoid } from "nanoid";
import { useState } from "react";
import Alert from "../Alert/Alert";
import styles from "./AddMovieForm.module.css";

// Menangkap props
function AddMovieForm(props) {
  /**
   * Ini hanya snippet(potongan) code.
   * Kode yang lainnya tetap sama.
   */

  // Destructing props: state movies
  const { movies, setMovies } = props;

  // Membuat state title, date, image dan genre
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [image, setImage] = useState("");
  const [genre, setGenre] = useState("");

  // Membuat state: isTitleError, isDateError dan isImageError
  const [isTitleError, setIsTitleError] = useState(false);
  const [isDateError, setIsDateError] = useState(false);
  const [isImageError, setIsImagesError] = useState(false);

  /**
   * Membuat fungsi handleTitle
   * Dijalankan ketika nilai input berubah
   */
  function handleTitle(e) {
    /**
     * Jalankan fungsi setTitile.
     * Set title nilai baru: input saat ini.
     */
    setTitle(e.target.value);
  }

  /**
   * Membuat fungsi handleDate
   * Dijalankan ketika nilai input berubah
   */
  function handleDate(e) {
    /**
     * Jalankan fungsi setDate.
     * Set date nilai baru: input saat ini.
     */
    setDate(e.target.value);
  }

  /**
   * Membuat fungsi handleImage
   * Dijalankan ketika nilai input berubah
   */
  function handleImage(e) {
    /**
     * Jalankan fungsi setImage.
     * Set date nilai baru: input saat ini.
     */
    setImage(e.target.value);
  }

  /**
   * Membuat fungsi handleGenre
   * Dijalankan ketika nilai input berubah
   */
  function handleGenre(e) {
    /**
     * Jalankan fungsi setGenre.
     * Set date nilai baru: input saat ini.
     */
    setGenre(e.target.value);
  }

  function handleSubmit(e) {
    /**
     * Mencegah perilaku default form.
     * Mencegah form direfresh ketika disubmit.
     */
    e.preventDefault();

    // Jika title kosong, set isTitleError true
    if (title === "") {
      setIsTitleError(true);
      setIsDateError(false);
      setIsImagesError(false);
    }
    // Jika date kosong, set isDateError true
    else if (date === "") {
      setIsTitleError(false);
      setIsDateError(true);
      setIsImagesError(false);
    }
    // Jika images kosong, set isImageError true
    else if (image === "") {
      setIsTitleError(false);
      setIsDateError(false);
      setIsImagesError(true);
    }
    // Jika tidak, maka push movie dan set error false
    else {
      const movie = {
        id: nanoid(),
        title: title,
        year: date,
        type: genre,
        poster: image,
      };

      // SOLVED: HOW TO ADD MOVIE TO MOVIES :)
      setMovies([...movies, movie]);

      setIsTitleError(false);
      setIsDateError(false);
      setIsImagesError(false);
    }
  }

  return (
    <div className={styles.container}>
      <section className={styles.form}>
        <div className={styles.form__left}>
          <img
            className={styles.form__image}
            src="https://picsum.photos/536/354"
            alt=""
          />
        </div>
        <div className={styles.form__right}>
          <h2 className={styles.form__title}>Add Movie Form</h2>
          <form onSubmit={handleSubmit}>
            <div className={styles.form__group}>
              <label htmlFor="title" className={styles.form__label}>
                Title
              </label>
              <input
                id="title"
                className={styles.form__input}
                type="text"
                name="title"
                // Memberikan value input: title
                value={title}
                // Memberikan event onChange
                onChange={handleTitle}
              />
              {/*
               * Menambahkan infline if: operator &&
               * Jika isTitleError true maka render error
               */}
              {isTitleError && <Alert>Title Wajib Diisi</Alert>}
            </div>
            <div className={styles.form__group}>
              <label htmlFor="date" className={styles.form__label}>
                Date
              </label>
              <input
                id="date"
                className={styles.form__input}
                type="number"
                name="date"
                // Memberikan value input: date
                value={date}
                // Memberikan event onChange
                onChange={handleDate}
              />
            </div>
            {/*
             * Menambahkan infline if: operator &&
             * Jika isDateError true maka render error
             */}
            {isDateError && <Alert>Date Wajib Diisi</Alert>}
            <div className={styles.form__group}>
              <label htmlFor="image" className={styles.form__label}>
                Input Image
              </label>
              <input
                id="image"
                className={styles.form__input}
                type="text"
                name="image"
                // Memberikan value input: date
                value={image}
                // Memberikan event onChange
                onChange={handleImage}
              />
            </div>
            {/*
             * Menambahkan infline if: operator &&
             * Jika isDateError true maka render error
             */}
            {isImageError && <Alert>Wajib Diisi</Alert>}
            <div className={styles.form__group}>
              {/* <label htmlFor="image" className={styles.form__label}> */}
              <label className={styles.form__label}>Choose Genre</label>
              <select
                className={styles.form__select}
                id="genre"
                name="genre"
                // Memberikan value input: date
                value={genre}
                // Memberikan event onChange
                onChange={handleGenre}
              >
                <option value="">Choose Genre</option>
                <option value="Horror">Horror</option>
                <option value="Action">Action</option>
                <option value="Drama">Drama</option>
                <option value="Historical">Historical</option>
                <option value="War">War</option>
              </select>
            </div>
            <div>
              <button className={styles.form__button}>Add Movie</button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}

export default AddMovieForm;
