import React from "react";
// import FormUser from "./FormUser";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import ProtectedRoute from "./routes/ProtectedRoute";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import UserListPage from "./pages/UserListPage";
import Register from "./pages/Register";

const App: React.FC = () => (
  <div className="flex justify-between flex-col w-screen h-screen">
    {/* <FormUser /> */}
    <div className="flex flex-col w-full justify-start items-center h-full">
      <Navbar />

      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/users"
          element={
            <ProtectedRoute>
              <UserListPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </div>

    <Footer />
  </div>
);
export default App;
