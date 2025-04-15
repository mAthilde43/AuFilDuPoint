import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Tissus from "./pages/Tissus/Tissus";
import Layout from "./components/Layout";
import Aiguilles from "./pages/Aiguilles/Aiguilles";
import Points from "./pages/Points/Points";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout hideHeader={false} />}>
          <Route index element={<Home />} />
        </Route>

        <Route
          path="/techniques/tissus"
          element={<Layout hideHeader={true} hideNavbar={false} />}
        >
          <Route index element={<Tissus />} />
        </Route>

        <Route
          path="/techniques/aiguilles"
          element={<Layout hideHeader={true} hideNavbar={false} />}
        >
          <Route index element={<Aiguilles />} />
        </Route>

        <Route
          path="/techniques/points"
          element={<Layout hideHeader={true} hideNavbar={false} />}
        >
          <Route index element={<Points />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
