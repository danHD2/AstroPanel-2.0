import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Navbar from "./navbar";
import Overview from "./overview";
import Detail from "./detail";
import Darkness from "./darkness";
import Iss from "./iss";
import Calendar from "./calendar";
import Settings from "./settings";

function App() {
  return (
    <Router>
      <>
        <Navbar />
        <Routes>
          <Route path="/" element={<Navigate to="/overview" replace />} />
          <Route path="/overview" element={<Overview />} />
          <Route path="/detail" element={<Detail />} />
          <Route path="/darkness" element={<Darkness />} />
          <Route path="/iss" element={<Iss />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </>
    </Router>
  );
}

export default App;
