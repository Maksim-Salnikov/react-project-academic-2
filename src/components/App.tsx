import { Route, Routes } from "react-router-dom";
import { AboutPageAsync } from "../pages/AboutPage/AboutPage.async";
import { MainPageAsync } from "../pages/MainPage/MainPage.async";
import { Link } from "react-router-dom";
import { Suspense } from "react";

const App = () => {
  return (
    <div className="App">
      <Link to={"/"}>Главная Страница</Link>
      <Link to={"/about"}>О сайте</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path={"/about"} element={<AboutPageAsync />} />
          <Route path={"/"} element={<MainPageAsync />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
