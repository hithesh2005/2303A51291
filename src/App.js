import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import PriorityNotifications from "./pages/PriorityNotifications";

function Home() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Campus Notifications Dashboard</h1>

      <a href="/priority">
        <button>View Priority Notifications</button>
      </a>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/priority" element={<PriorityNotifications />} />
      </Routes>
    </BrowserRouter>
  );
}