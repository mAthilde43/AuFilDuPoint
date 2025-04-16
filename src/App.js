import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Layout from "./components/Layout";
import Techniques from "./pages/Techniques/Techniques";

import DebuterCouture from "./pages/DebuterCouture/DebuterCouture";

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
        debuterEnCouture
        <Route
          path="/techniques"
          element={<Layout hideHeader={true} hideNavbar={false} />}
        >
          <Route index element={<Techniques />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
