import { BrowserRouter, Routes, Route } from "react-router-dom";
import PriorityNotifications from "./pages/PriorityNotifications";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PriorityNotifications />} />
      </Routes>
    </BrowserRouter>
  );
}
