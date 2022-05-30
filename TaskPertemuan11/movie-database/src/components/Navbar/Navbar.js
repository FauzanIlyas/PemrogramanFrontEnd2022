/**
 * Import CSS Module Navbar.
 * Disimpan di object styles.
 */
//import styles from "./Navbar.module.css";
import StyledNavbar from "./Navbar.Styled";
// Import Link dari React Router
import { Link } from "react-router-dom";

function Navbar() {
  /**
   * Menggunakan styles yang sudah diimport.
   * Memanggilnya menggunakan expression.
   */
  //   return (
  //     <div className={styles.container}>
  //       <nav className={styles.navbar}>
  //         <div>
  //           <h1 className={styles.navbar__brand}>Movie App</h1>
  //         </div>
  //         <div>
  //           {/*
  //            * Membuat Link/Navigasi.
  //            * Menggunakan Link Component dari React Router
  //            */}
  //           <ul className={styles.navbar__list}>
  //             <li className={styles.navbar__item}>
  //               <Link className={styles.navbar__link} to="/">
  //                 Home
  //               </Link>
  //             </li>
  //             <li className={styles.navbar__item}>
  //               <Link className={styles.navbar__link} to="/movie/create">
  //                 Add Movie
  //               </Link>
  //             </li>
  //             <li className={styles.navbar__item}>
  //               <Link className={styles.navbar__link} to="/movie/popular">
  //                 Popular
  //               </Link>
  //             </li>
  //             <li className={styles.navbar__item}>
  //               <Link className={styles.navbar__link} to="/movie/now">
  //                 Now Playing
  //               </Link>
  //             </li>
  //             <li className={styles.navbar__item}>
  //               <Link className={styles.navbar__link} to="/movie/top">
  //                 Top Rated
  //               </Link>
  //             </li>
  //           </ul>
  //         </div>
  //       </nav>
  //     </div>
  //   );
  // }

  return (
    <StyledNavbar>
      <StyledNavbar>
        <nav>
          <StyledNavbar>
            <h1>Movie App</h1>
          </StyledNavbar>
          <StyledNavbar>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/movie/create">Add Movie</Link>
              </li>
              <li>
                <Link to="/movie/popular">Popular</Link>
              </li>
              <li>
                <Link to="/movie/NowPlaying">Now Playing</Link>
              </li>
              <li>
                <Link to="/movie/TopRated">Top Rated</Link>
              </li>
            </ul>
          </StyledNavbar>
        </nav>
      </StyledNavbar>
    </StyledNavbar>
  );
}

export default Navbar;
