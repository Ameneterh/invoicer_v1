import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import InvoicePage from "./pages/InvoicePage";
import HeaderComponent from "./components/HeaderComponent";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AddCashier from "./pages/AddCashier";
import AddSignature from "./pages/AddSignature";
import ProtectedPage from "./components/ProtectedPage";

function App() {
  const contentRef = useRef();
  const reactToPrintFn = useReactToPrint({ contentRef });

  return (
    <BrowserRouter>
      <HeaderComponent />
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedPage>
              <InvoicePage />
            </ProtectedPage>
          }
        />
        <Route path="/register" element={<Register />} />
        <Route path="/add-user-details" element={<AddCashier />} />
        <Route path="/add-user-signature" element={<AddSignature />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
