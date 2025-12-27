import { BrowserRouter, Routes, Route } from "react-router-dom";
import TeacherDashboard from "./pages/TeacherDashboard";
import TeacherGameStudio from "./pages/TeacherGameStudio";
import StudentLogin from "./pages/StudentLogin";
import StudentDashboard from "./pages/StudentDashboard";

import NotFound from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TeacherDashboard />} />
        <Route path="/teacher/games" element={<TeacherGameStudio />} />
        <Route path="/class/:className" element={<StudentLogin />} />
        <Route path="/class/:className/dashboard" element={<StudentDashboard />} />
        {/* Catch-all for 404s/Bad Links */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
