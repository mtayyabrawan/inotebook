import { Route, Routes } from "react-router";
import Home from "../pages/Home";
import About from "../pages/About";
import Login from "../pages/auth/Login";
import Signup from "../pages/auth/Signup";
import Logout from "../pages/auth/Logout";
import UpdateProfile from "../pages/auth/UpdateProfile";
import PrivacyPolicy from "../pages/PrivacyPolicy";
import Note from "../pages/notes/Note";
import Verify from "../pages/auth/Verify";
import NotFound from "../pages/NotFound";

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/logout" element={<Logout />} />
      <Route path="/update-profile" element={<UpdateProfile />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="note/:id" element={<Note />} />
      <Route path="verify/:token" element={<Verify />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default AppRouter;
