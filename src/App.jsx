import "./App.css";
import { Routes, Route } from "react-router-dom";
import Contents from "./components/Contents";

function App() {
  return (
    <>
      <Routes>
        <Route path="/:id?" element={<Contents />} />
      </Routes>
    </>
  );
}

export default App;
