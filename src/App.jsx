import { BrowserRouter, Routes, Route } from "react-router-dom"
import LandingPage from "./pages/LandingPage/LandingPage.jsx"
import Home from "./pages/Home/Home"
import Main from "./pages/Main/Main"
import Login from "./pages/Login/Login"
import Signup from "./pages/Signup/Signup"
import FirstProvider from "./context/FirstContext"
import GraphsPerDay from "./pages/GraphsPerDay/GraphsPerDay"
import GraphsPerMonth from "./pages/GraphsPerMonth/GraphsPerMonth"
import GraphsPerYear from "./pages/GraphsPerYear/GraphsPerYear"
import About from "./pages/About/About"
import DashBoard from "./pages/DashBoard/DashBoard"
function App() {

  return (
    <FirstProvider>

      <BrowserRouter>
        <Routes>
        <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/Main" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Signup />} />
          <Route path="/dashboard" element={<DashBoard />} />
          <Route path="/graphperday" element={<GraphsPerDay />} />
          <Route path="/graphpermonth" element={<GraphsPerMonth />} />
          <Route path="/graphperyear" element={<GraphsPerYear />} />
          <Route path="/about" element={<About />} />
        </Routes>

      </BrowserRouter>
    </FirstProvider>
  )
}

export default App
