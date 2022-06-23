import Hello from "../components/Hello";
import Dabals from "../components/Dabals/Dabals";
import Global from "../components/Gambar/Global";
import data from "../utils/constants/indonesia";
import { useState } from "react";

function Main() {

  const [dabals, setDabals] = useState(data);

  return (
    <main>
      <Hello />
      <Dabals dabals={dabals} setDabals={setDabals} />
      <Global />
    </main>
  );
}

function Home() {
  return (
    <>
      {/* <Navbar /> */}
      <Main />
      {/* <Footer /> */}
    </>
  );
}

export default Home;
