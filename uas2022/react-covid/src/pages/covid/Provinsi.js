import Coform from "../../components/Coform/Coform";
import Dapro from "../../components/Dapro/Dapro";
import Hello from "../../components/Hello";


function ProvinsiPage() {
  // Tidak perlu props movies (props drilling)
  return (
    <>
      <Hello />
      <Dapro />
      <Coform />
    </>
  );
}

export default ProvinsiPage;
