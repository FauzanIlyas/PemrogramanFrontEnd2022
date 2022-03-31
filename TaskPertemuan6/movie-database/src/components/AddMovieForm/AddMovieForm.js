// import styles from "./Hero.module.css";

// function Hero() {
//   return (
//     <div className={styles.container}>
//       <section className={styles.hero}>
//         <div className={styles.hero__left}>
//           <h2 className={styles.hero__title}>Spiderman</h2>
//           <h3 className={styles.hero__genre}>
//             Genre: Thriller, Drama, Romance
//           </h3>
//           <p className={styles.hero__description}>
//             Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam
//             cum accusamus quisquam earum velit ea nobis maiores exercitationem
//             nam temporibus.
//           </p>
//           <button className={styles.hero__button}>Watch</button>
//         </div>
//         <div className="hero__right">
//           <img
//             className={styles.hero__image}
//             src="https://picsum.photos/536/354"
//             alt="placeholder"
//           />
//         </div>
//       </section>
//     </div>
//   );
// }

// export default Hero;


import styles from "./AddMovieForm.module.css";


function FormMovie() {
  return (
    <div className={styles.container}>
      <section className={styles.FormMovie}>
        <div className="FormMovie__left">
          <img
            className={styles.FormMovie__image}
            src="https://picsum.photos/450/450"
            alt="placeholder"
          />
        </div>
        <div className="FormMovie__right">
          <h2 className={styles.FormMovie__title}>Add Movie</h2>
          {/* <tr> */}
            <label className={styles.FormMovie__label}>Title</label>
            <input className={styles.FormMovie__input} enable></input>
          {/* </tr>
          <tr> */}
            <label className={styles.FormMovie__label}>Year</label>
            <input className={styles.FormMovie__input} enable></input>
          {/* </tr> */}
          <button className={styles.FormMovie__button}>Submit</button>
        </div>
      </section>
    </div>
  );
}

export default FormMovie;
