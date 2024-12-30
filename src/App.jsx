import { BrowserRouter, Route, Routes } from "react-router";
import WebsiteTemplate from "./website/template/website-template";
import Home from "./website/pages/Home";
import About from "./website/pages/About";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<WebsiteTemplate />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
