import React from "react";
import UserList from "../components/UserList";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <UserList />
      <Footer />
    </div>
  );
};

export default Home;
