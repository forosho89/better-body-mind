import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  // Close menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  // Add shadow on scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`nav ${scrolled ? "nav--scrolled" : ""}`}>
      <div className="nav__container">

        {/* LOGO */}
        <Link to="/" className="nav__logo">
          <img
            src="/images/logo.svg"
            alt="Foroho Insights Logo"
            className="nav__logo-img"
          />
        </Link>

        {/* DESKTOP LINKS */}
        <ul className="nav__links">
          <li><Link to="https://aiandtechtoday.com">AI & Tech</Link></li>
          <li><Link to="https://bettermindandbody.com/better-body-mind">Body & Mind</Link></li>

           {/* NEW LINKS YOU ASKED FOR */}
          <li><Link to="/blog">Blog</Link></li>
          <li><Link to="/blogPost">BlogPost</Link></li>
          <li><Link to="/exercise">Exercise</Link></li>
          <li><Link to="/mindfulness">Mindfulness</Link></li>
          <li><Link to="/nutrition">Nutrition</Link></li>
          <li><Link to="/sleep">Sleep</Link></li>
        </ul>

        {/* DARK MODE TOGGLE */}
        <button
          className="nav__theme"
          onClick={() => {
            document.body.classList.toggle("dark");
            localStorage.setItem(
              "theme",
              document.body.classList.contains("dark") ? "dark" : "light"
            );
          }}
        >
          🌓
        </button>

        {/* MOBILE BURGER */}
        <div
          className="nav__hamburger"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <span />
          <span />
          <span />
        </div>
      </div>

      {/* MOBILE MENU */}
      <div className={`nav__mobile ${mobileOpen ? "open" : ""}`}>
        <Link to="https://aiandtechtoday.com">AI & Tech</Link>
        <Link to="https://bettermindandbody.com/better-body-mind">Body & Mind</Link>

        <Link to="/blog">Blog</Link>
        <Link to="/blogPost">BlogPost</Link>
        <Link to="/exercise">Exercise</Link>
        <Link to="/mindfulness">Mindfulness</Link>
        <Link to="/nutrition">Nutrition</Link>
        <Link to="/sleep">Sleep</Link>
      </div>
    </nav>
  );
}

export default Nav;