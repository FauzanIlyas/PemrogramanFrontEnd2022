import styles from "./Global.module.css";

function Global() {
  return (
    <div className={styles.container}>
      <section className={styles.global}>
        <div className="gambar__right">
          <img
            className={styles.global__image}
            src="https://covid19.mathdro.id/api/og"
            alt="placeholder"
          />
        </div>
      </section>
    </div>
  );
}

export default Global;