import styles from "./Dasia.module.css";

// Component dasia menerima props
function Dasia(props) {
  // Melakukan destructing props
  const { dasia } = props;

  return (
    <div className={styles.dasia}>
      <div className={styles.dasia__kolom}>
        <div className={styles.dasia__card}>
          <h3 className={styles.dasia__status}>{dasia.status}</h3>
          <h1 className={styles.dasia__total}>{dasia.total}</h1>
        </div>
      </div>
    </div>
  );
}

export default Dasia;