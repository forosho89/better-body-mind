import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Exercise from "./pages/Exercise";
import Sleep from "./pages/Sleep";
import Mindfulness from "./pages/Mindfulness";
import Nutrition from "./pages/Nutrition";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import PrivacyPolicy from "./pages/legal/PrivacyPolicy";
import Terms from "./pages/legal/Terms";
import CookieConsent from "./pages/legal/CookieConsent";
import Disclaimer from "./pages/Disclaimer";
import Footer from "./components/Footer";


function App() {
  return (
    <>
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exercise" element={<Exercise />} />
        <Route path="/nutrition" element={<Nutrition />} />
        <Route path="/sleep" element={<Sleep />} />
        <Route path="/mindfulness" element={<Mindfulness />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/disclaimer" element={<Disclaimer />} />
        </Routes>
      <CookieConsent />
        <Footer />
      </Router>
    </>
  );
}

export default App;