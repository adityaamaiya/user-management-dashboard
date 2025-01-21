import React from "react";
import UserForm from "../components/UserForm";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function AddUser() {
  return (
    <div>
      <Navbar />

      <UserForm />
      <Footer />
    </div>
  );
}
