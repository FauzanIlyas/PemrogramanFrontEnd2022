import styles from "./Movies.module.css";

function Movies() {
  return (
    <div className={styles.container}>
      <section className={styles.movies}>
        <h2 className={styles.movies__title}>Latest Movies</h2>
        <div className={styles.movie__container}>
          <div className={styles.movie}>
            <img
              className={styles.movie__image}
              src="https://cdn.shopify.com/s/files/1/0057/3728/3618/products/b12a6731e35878c9b560b76efe15e06d_480x.progressive.jpg?v=1573572672/300/400"
              alt=""
            />
            <h3 className={styles.movie__title}>Stranger Things</h3>
            <p className={styles.movie__date}>July 15, 2016</p>
          </div>
          <div className={styles.movie}>
            <img
              className={styles.movie__image}
              src="https://picsum.photos/300/400"
              alt=""
            />
            <h3 className={styles.movie__title}>Movie Title</h3>
            <p className={styles.movie__date}>Date Title</p>
          </div>
          <div className={styles.movie}>
            <img
              className={styles.movie__image}
              src="https://picsum.photos/300/400"
              alt=""
            />
            <h3 className={styles.movie__title}>Movie Title</h3>
            <p className={styles.movie__date}>Date Title</p>
          </div>
          <div className={styles.movie}>
            <img
              className={styles.movie__image}
              src="https://picsum.photos/300/400"
              alt=""
            />
            <h3 className={styles.movie__title}>Movie Title</h3>
            <p className={styles.movie__date}>Date Title</p>
          </div>
          <div className={styles.movie}>
            <img
              className={styles.movie__image}
              src="https://picsum.photos/300/400"
              alt=""
            />
            <h3 className={styles.movie__title}>Movie Title</h3>
            <p className={styles.movie__date}>Date Title</p>
          </div>
          <div className={styles.movie}>
            <img
              className={styles.movie__image}
              src="https://picsum.photos/300/400"
              alt=""
            />
            <h3 className={styles.movie__title}>Movie Title</h3>
            <p className={styles.movie__date}>Date Title</p>
          </div>
          <div className={styles.movie}>
            <img
              className={styles.movie__image}
              src="https://picsum.photos/300/400"
              alt=""
            />
            <h3 className={styles.movie__title}>Movie Title</h3>
            <p className={styles.movie__date}>Date Title</p>
          </div>
          <div className={styles.movie}>
            <img
              className={styles.movie__image}
              src="https://picsum.photos/300/400"
              alt=""
            />
            <h3 className={styles.movie__title}>Movie Title</h3>
            <p className={styles.movie__date}>Date Title</p>
          </div>
          <div className={styles.movie}>
            <img
              className={styles.movie__image}
              src="https://picsum.photos/300/400"
              alt=""
            />
            <h3 className={styles.movie__title}>Movie Title</h3>
            <p className={styles.movie__date}>Date Title</p>
          </div>
          <div className={styles.movie}>
            <img
              className={styles.movie__image}
              src="https://picsum.photos/300/400"
              alt=""
            />
            <h3 className={styles.movie__title}>Movie Title</h3>
            <p className={styles.movie__date}>Date Title</p>
          </div>
          <div className={styles.movie}>
            <img
              className={styles.movie__image}
              src="https://picsum.photos/300/400"
              alt=""
            />
            <h3 className={styles.movie__title}>Movie Title</h3>
            <p className={styles.movie__date}>Date Title</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Movies;
