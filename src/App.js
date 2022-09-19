import logo from "./logo.svg";
import "./App.css";
import "./css/sb-admin-2.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Portal from "./Portal";
import Students from "./Students";
import CreateStudent from "./CreateStudent";
import Studentview from "./Studentview";
import EditStudent from "./EditStudent";
import Mentors from "./Mentors";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Portal />}>
          <Route path="/students" element={<Students />} />
          <Route path="create-student" element={<CreateStudent />} />
          <Route path="students/:id" element={<Studentview />} />
          <Route path="students/edit/:id" element={<EditStudent />} />
          <Route path="/mentors" element={<Mentors />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
