import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout/Layout";
import IndonesiaPage from "./pages/covid/Indonesia";
import ProvinsiPage from "./pages/covid/Provinsi";

// function App() {
//   return (
//     <div>
//       {/*
//        * Render Halaman Home
//        * Jika ingin diubah, maka ubah di Halaman Home.
//        */}
//       <Home />
//     </div>
//   );
// }

// export default App;

function App() {
  /**
   * Tidak membutuhkan state movies.
   * Tidak perlu kirim props movies ke setiap component (props drilling).
   */
  return (
    <>
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/covid/indonesia" element={<IndonesiaPage />} />
        <Route path="/covid/provinsi" element={<ProvinsiPage />} />
      </Routes>
    </Layout>
    </>
  );
}

export default App;
