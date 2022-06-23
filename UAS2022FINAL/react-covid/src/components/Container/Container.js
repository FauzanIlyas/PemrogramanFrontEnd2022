import styles from "./Container.module.css";

/**
 * Membuat Component Container.
 * Menggunakan Teknik Composition: children.
 */
function Containers({ children }) {
  return <div className={styles.container}>{children}</div>;
}

export default Containers;
