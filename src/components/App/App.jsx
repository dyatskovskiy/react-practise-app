import { Route, Routes } from "react-router-dom";
import { Main } from "../../pages/Main";
import css from "./App.module.css";

export const App = () => {
  return (
    <div className={css.container}>
      <Routes>
        <Route path="/" element={<Main />} />
        {/* <Route path="/details/:id" element={<Details />} /> */}
        <Route />
        <Route />
      </Routes>
    </div>
  );
};

export default App;
