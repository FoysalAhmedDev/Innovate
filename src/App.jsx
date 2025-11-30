import "./App.css";
import RootLayouts from "./components/layout/RootLayouts";
import About from "./components/pages/About";
import Error from "./components/pages/Error";
import Home from "./components/pages/Home";
import Service from "./components/pages/Service";
import Portfolio from "./components/pages/Portfolio";
import Price from "./components/pages/Price";
import Blog from "./components/pages/Blog";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<RootLayouts />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/price" element={<Price />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </>
  );
}
export default App;
