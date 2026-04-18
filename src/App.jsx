
import WelcomePage from "./pages/WelcomePage";
import LoginPage from "./pages/LoginPage";
import CreateAccountPage from "./pages/CreateAccountPage";
import AccountSettingsPage from "./pages/AccountSettingsPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {


  return (
    <div className="phone-container">
      <div className="phone-frame">
       <BrowserRouter>
  <Routes>
    <Route path="/" element={<WelcomePage/>} />
    <Route path="/login" element={<LoginPage />} />
    <Route path="/signup" element={<CreateAccountPage />} />
    <Route path="/profile" element={<AccountSettingsPage />} />
  </Routes>
  </BrowserRouter>
        </div>
    </div>
  );
}
