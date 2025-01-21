import React from "react";
import UserForm from "../components/UserForm";
import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
export default function EditUser() {
  const location = useLocation();
  const existingUser = location.state;
  return (
    <div>
      <Navbar />

      <UserForm existingUser={existingUser} />
      <Footer />
    </div>
  );
}
