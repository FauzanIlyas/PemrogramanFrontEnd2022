import styles from "./Hero.module.css";

function Hero() {
  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <div className={styles.hero__left}>
          <h2 className={styles.hero__title}>Loki</h2>
          <h3 className={styles.hero__genre}>
            Genre: Superhero fiction, Procedural drama, Fantasy television
          </h3>
          <p className={styles.hero__description}>
          Loki, the God of Mischief, steps out of his brother's shadow to embark on an adventure that takes place after the events of "Avengers: Endgame.
          </p>
          <button className={styles.hero__button}>Watch</button>
        </div>
        <div className="hero__right">
          <img
            className={styles.hero__image}
            src="https://cdn.shopify.com/s/files/1/0057/3728/3618/products/54362_2_480x.progressive.png.jpg?v=1634831916/536/354"
            alt="placeholder"
          />
        </div>
      </section>
    </div>
  );
}

export default Hero;
