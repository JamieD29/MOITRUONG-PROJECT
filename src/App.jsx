import { BrowserRouter, Route, Routes } from "react-router";
import WebsiteTemplate from "./website/template/website-template";
import Home from "./website/pages/Home";
import About from "./website/pages/About";
import Services from "./website/pages/Services";
import DomesticWaste from "./website/pages/services/DomesticWaste";
import MainServices from "./website/pages/services/MainServices";
import Contact from "./website/pages/Contact";
import MainFields from "./website/pages/fields/MainFields";
import SingleField from "./website/pages/fields/Single-Field";
import Fields from "./website/pages/Fields";
import ConstructionWaste from "./website/pages/services/ConstructionWaste";
import IndustrialWaste from "./website/pages/services/IndustrialWaste";
import RecyclableWaste from "./website/pages/services/RecyclableWaste";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<WebsiteTemplate />}>
          <Route path="/" element={<Home />} />
          <Route path="/gioiThieu" element={<About />} />
          <Route path="/dichvu" element={<Services />}>
            <Route path="" element={<MainServices />} />
            <Route path="chatThai-sinhHoat" element={<DomesticWaste />} />
            <Route path="chatThai-xayDung" element={<ConstructionWaste />} />
            <Route path="chatThai-congNghiep" element={<IndustrialWaste />} />
            <Route path="chatThai-taiChe" element={<RecyclableWaste />} />
          </Route>
          <Route path="/lienhe" element={<Contact />} />
          <Route path="/linhvuc" element={<Fields />}>
            <Route path="" element={<MainFields />} />
            <Route path="single-field" element={<SingleField />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
