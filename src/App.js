import React from "react"
import './App.css';
import Navbar from './Components/Navbar'
import MidMenu from "./Components/MidMenu";
import Discover from "./Components/Discover";
import Habits from "./Components/Habits"
import SignUpAd from "./Components/SignUpAd";
import SyncWithApp from "./Components/SyncWithApp"
import CustomerReviews from "./Components/CustomerReviews";
import ProfessionalPage from "./Components/ProfessionalPage"
import AboutUs from "./Components/AboutUs";
import Footer from "./Footer/Footer";






function App() {
  return (
    <div className="App">

      <Navbar />
      <MidMenu />
      <Discover />
      <Habits />
      <SignUpAd />
      <SyncWithApp />
      <CustomerReviews />
      <ProfessionalPage />
      <AboutUs />
      <Footer />
    </div>
  );
}

export default App;

