import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from "./pages/home"
import LogInPage from "./pages/login"
import MainPage from "./pages/main"
import SearchPage from "./pages/search"
import SelectProfilePage from "./pages/selectProfile"
import SignUpPage from "./pages/signup"

const App = () => {
  return <BrowserRouter>
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/login" element={<LogInPage />} />
      <Route path="/sign-up" element={<SignUpPage />} />
      <Route path="/select-profile" element={<SelectProfilePage />} />
      <Route path="/search" element={<SearchPage />} />
    </Routes>
  </BrowserRouter>
}

export default App