import Dasia from '../Dasia/Dasia';
import styles from "./Dasias.module.css";
import dataindo from "../../utils/constants/indonesia";


function Dasias() {
  // Destructing props: state movies
  const dasias = dataindo.indonesia;

  return (
    <div>
      <div className={styles.container}>
        <section className={styles.dasias}>
          <h2 className={styles.dasias__title}>INDONESIA</h2>
          <div className={styles.dasias__container}>
            {dasias.map(function(dasia, key) {
              return <Dasia dasia={dasia} key={key}/>;
            })}
          </div>
        </section>
      </div>
    </div>
  );
}

export default Dasias;
