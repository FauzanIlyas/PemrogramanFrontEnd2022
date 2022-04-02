// Import Halaman Home
// import Counter from "./components/Counter/Counter";
import Home from "./pages/Home";

function App() {
  /**
   * Menampilkan Halaman Home.
   * Tag div bisa diganti dengan tag <>.
   * Tag <> adalah React fragment
   */
  return (
    <div>
      <Home />
      {/* <Counter /> */}
    </div>
  );
}

export default App;
