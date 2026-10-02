import Layout from "./components/Layout/Layout";
import { Routes, Route } from "react-router-dom";
import Pedidos from "./pages/Pedidos/Pedidos";
import CentralOperacoes from "./pages/Dashboard/CentralOperacoes";

function App() {
  return (
   <Routes>
  <Route element={<Layout />}>
    <Route path="/" element={<CentralOperacoes />} />
    <Route path="/pedidos" element={<Pedidos />} />
  </Route>
</Routes>
  );
}

export default App;