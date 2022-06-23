// Import Link dari React Router
import { Link } from "react-router-dom";
import StyledNavbar, { Container } from "./Navbar.styled";

function Navbar() {
  /**
   * Menggunakan styles yang sudah diimport.
   * Memanggilnya menggunakan expression.
   */
  return (
    <Container>
      <StyledNavbar>
        <div>
          <h1>COVID APP</h1>
        </div>
        <div>
          {/*
           * Membuat Link/Navigasi.
           * Menggunakan Link Component dari React Router
           */}
          <ul>
            <li>
              <Link to="/">HOME</Link>
            </li>
            <li>
              <Link to="/covid/indonesia">INDONESIA</Link>
            </li>
            <li>
              <Link to="/covid/provinsi">PROVINSI</Link>
            </li>
            <li>
              <Link to="/covid/about">ABOUT</Link>
            </li>
          </ul>
        </div>
      </StyledNavbar>
    </Container>
  );
}

export default Navbar;