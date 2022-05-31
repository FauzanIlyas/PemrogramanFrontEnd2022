/**
 * Import CSS Module Footer.
 * Disimpan di object styles.
 */
// import styles from "./Footer.module.css";
import StyledFooter from "./Footer.Styled";

function Footer() {
  /**
   * Menggunakan styles yang sudah diimport.
   * Memanggilnya menggunakan expression.
   */
  //   return (
  //     <div className={styles.container}>
  //       <footer className={styles.footer}>
  //         <h2 className={styles.footer__title}>Movie App</h2>
  //         <p className={styles.footer__author}>Created by aufaroot18</p>
  //       </footer>
  //     </div>
  //   );
  // }

  return (
    <StyledFooter>
      <footer>
        <h2>ATLANTIS</h2>
        <p>Created By Fauzan Ilyas</p>
      </footer>
    </StyledFooter>
  );
}

export default Footer;
