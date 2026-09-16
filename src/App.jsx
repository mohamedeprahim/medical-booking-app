import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Doctors from "./pages/Doctors";
import DoctorDetails from "./pages/DoctorDetails";
import BookAppointment from "./pages/BookAppointment";
import MyAppointments from "./pages/MyAppointments";
import Profile from "./pages/Profile";
import AIAssistant from "./pages/AIAssistant";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/doctors"
          element={<Doctors />}
        />

        <Route
          path="/doctors/:id"
          element={<DoctorDetails />}
        />

        <Route
          path="/book-appointment"
          element={<BookAppointment />}
        />

        <Route
          path="/my-appointments"
          element={<MyAppointments />}
        />

        <Route
          path="/profile"
          element={<Profile />}
        />

        <Route
          path="/ai-assistant"
          element={<AIAssistant />}
        />

        <Route
          path="*"
          element={<NotFound />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;