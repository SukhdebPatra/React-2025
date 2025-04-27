import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { Layout } from "./Routing/Layout";
import Shop from "./Pages/Shop";
import About from "./Pages/About";
import ContactUs from "./Pages/ContactUs";
import { Skills } from "./Pages/Skills";
import Stories from "./Pages/Stories";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="shop" element={<Shop />} />
          <Route path="skills" element={<Skills />} />
          <Route path="stories" element={<Stories />} />{" "}
          <Route path="about" element={<About />} />
          <Route path="contact" element={<ContactUs />} />
          <Route path="*" element={<h1>404 - Page Not Found</h1>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
