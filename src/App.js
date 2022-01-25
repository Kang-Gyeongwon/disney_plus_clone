import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from "./pages/home"
import LogInPage from "./pages/login"
import MainPage from "./pages/main"
import SingUpPage from "./pages/signup"

const App = () => {
  return <BrowserRouter>
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/" element={<LogInPage />} />
      <Route path="/" element={<SingUpPage />} />
    </Routes>
  </BrowserRouter>
}

export default App