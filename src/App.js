import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Layout from "./components/Layout";
import MaterielBase from "./components/MaterielBase/MaterielBase";
import Techniques from "./pages/Techniques/Techniques";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout hideHeader={false} />}>
          <Route index element={<Home />} />
        </Route>

        <Route
          path="/techniques"
          element={<Layout hideHeader={true} hideNavbar={false} />}
        >
          <Route index element={<Techniques />} />
        </Route>

        <Route
          path="/start/materiel"
          element={<Layout hideHeader={true} hideNavbar={false} />}
        >
          <Route index element={<MaterielBase />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
