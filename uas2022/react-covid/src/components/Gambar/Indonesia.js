import styles from "./Indonesia.module.css";

function Indonesia() {
  return (
    <div className={styles.container}>
      <section className={styles.indonesia}>
        <div className="gambar__right">
          <img
            className={styles.indonesia__image}
            src="https://covid19.mathdro.id/api/countries/indonesia/og"
            alt="placeholder"
          />
        </div>
      </section>
    </div>
  );
}

export default Indonesia;