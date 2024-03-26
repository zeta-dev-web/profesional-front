import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeScreen from "./pages/HomeScreen";
import NavbarApp from "./components/NavbarApp";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="vh-100 vw-100 d-flex flex-column justify-content-between">
        <NavbarApp></NavbarApp>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
        </Routes>
        {/* <FooterApp></FooterApp> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
