import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import Header from "./Components/Header";
import Profile from "./Pages/Profile";
import AuthProtection from "./Protected Routes/AuthProtection";
import LoggedInProtection from "./Protected Routes/LoggedInProtection";
import Friends from "./Pages/Friends";

function App() {
  return (
    <>
    <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<LoggedInProtection>
          <Login/>
        </LoggedInProtection>} />
        <Route path="/profile" element={<AuthProtection>
          <Profile/>
        </AuthProtection>}/>
        <Route path="/friends" element={<Friends />}/>
      </Routes>
    </>
  );
}

export default App;
