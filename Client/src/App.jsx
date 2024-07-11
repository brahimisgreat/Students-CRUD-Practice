import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./assets/Pages/Home";
import { CreateStudent } from "./assets/Pages/CreateStudent";
import { Read } from "./assets/Pages/Read";
import { Edit } from "./assets/Pages/Edit";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<CreateStudent />} />
          <Route path="/read/:id" element={<Read />} />
          <Route path="/edit/:id" element={<Edit />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
