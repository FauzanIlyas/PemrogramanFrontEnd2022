import Containers from "../components/Container/Container";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

/**
 * Membuat Component Layout.
 * Layout terdiri dari Navbar, Footer, children.
 * Menggunakan teknik Composition:
 *  - Menampilkan konten dinamis.
 *  - Menggunakan props children.
 */
function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main>
        {/*
         * Menggunakan Component Container.
         * Konten dibungkus dengan Container.
         */}
        <Containers>{children}</Containers>
      </main>
      <Footer />
    </>
  );
}

export default Layout;
