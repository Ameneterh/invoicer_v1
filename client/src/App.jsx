import { Routes, Route } from "react-router-dom";
import { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import InvoicePage from "./pages/InvoicePage";

function App() {
  const contentRef = useRef();
  const reactToPrintFn = useReactToPrint({ contentRef });

  return (
    <Routes>
      <Route path="/" element={<InvoicePage />} />
    </Routes>
  );
}

export default App;
