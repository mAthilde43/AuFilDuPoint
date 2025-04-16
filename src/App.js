import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Layout from "./components/Layout";
import Techniques from "./pages/Techniques/Techniques";

import DebuterCouture from "./pages/DebuterCouture/DebuterCouture";
import Astuces from "./pages/Astuces/Astuces";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout hideHeader={false} />}>
          <Route index element={<Home />} />
        </Route>
        <Route
          path="/debuterEnCouture"
          element={<Layout hideHeader={true} hideNavbar={false} />}
        >
          <Route index element={<DebuterCouture />} />
        </Route>

        <Route
          path="/techniques"
          element={<Layout hideHeader={true} hideNavbar={false} />}
        >
          <Route index element={<Techniques />} />
        </Route>

        <Route
          path="/astuces"
          element={<Layout hideHeader={true} hideNavbar={false} />}
        >
          <Route index element={<Astuces />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
