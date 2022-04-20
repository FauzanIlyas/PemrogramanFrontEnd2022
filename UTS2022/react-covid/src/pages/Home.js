import Navbar from "../components/Navbar";
import Hello from "../components/Hello";
import Dabals from "../components/Dabals/Dabals";
import Dapro from "../components/Dapro/Dapro";
import Coform from "../components/Coform/Coform";
import Footer from "../components/Footer";
import data from "../utils/constants/indonesia";
import { useState } from "react";

function Main() {

  const [dabals, setDabals] = useState(data);

  return (
    <main>
      <Hello />
      <Dabals dabals={dabals} setDabals={setDabals} />
      <Dapro />
      <Coform />
    </main>
  );
}

function Home() {
  return (
    <>
      <Navbar />
      <Main />
      <Footer />
    </>
  );
}

export default Home;
