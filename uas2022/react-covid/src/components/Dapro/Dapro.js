import data from "../../utils/constants/provinces";
import styles from "./Dapro.module.css";

function Dapro() {
  // Destructing props: state movies
  const dapro = data.provinces;
  let total = 0;

  return (
    <div>
      <div className={styles.container}>
        <section className={styles.dapro}>
          <h2 className={styles.dapro__title}>Provinsi</h2>
          <div className={styles.dapro__container}>
            <table className={styles.dapro__table}>
              <thead>
                <tr>
                  <th>No</th>
                  <th>Provinsi</th>
                  <th>Positif</th>
                  <th>Sembuh</th>
                  <th>Dirawat</th>
                  <th>Meninggal</th>
                </tr>
                {dapro.map((prov, key) => {
                  total += 1;
                  return (
                    <tr key={key}>
                      <td>{total}</td>
                      <td>{prov.kota}</td>
                      <td>{prov.kasus}</td>
                      <td>{prov.sembuh}</td>
                      <td>{prov.dirawat}</td>
                      <td>{prov.meninggal}</td>
                    </tr>
                  );
                })}
              </thead>
            </table>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Dapro;
