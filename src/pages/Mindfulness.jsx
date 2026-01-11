import React from "react";
import Ad from "../components/Ad";
import { Link } from "react-router-dom";
import SEO from "./legal/seo/SEO";

export default function Mindfulness() {
  return (
    <>
      <SEO
        title="About Us — Mindfulness & Mental Well-Being for a Balanced Life"
        description="Learn more about our mission to bring sustainable wellness and mental clarity to everyday life."
        canonical="https://bettermindandbody.com/about"
        image="/images/about-hero.jpg"
        type="website"
      />


      <section className="content-section">
        <div className="page">
          <h1>Mindfulness & Mental Health</h1>

          <img
            src="/images/mindfulness-meditation.jpg"
            alt="Person practicing mindfulness meditation"
            className="content-image"
          />

          <Ad slot="1234567890" />

          <p>
            Mindfulness is the practice of being present and aware of your
            thoughts, emotions, and surroundings without judgment. It has been
            shown to reduce stress, improve focus, and enhance emotional
            resilience.
          </p>
          <br/>
          <p>
            In today’s fast-paced world, mindfulness helps create balance by
            slowing the mind and promoting intentional living. Even a few
            minutes per day can improve mental clarity and overall well-being.
          </p>
          <br/>
          <p>
            Mental health is deeply connected to physical habits such as{" "}
            <Link to="/exercise">exercise</Link>, quality{" "}
            <Link to="/sleep">sleep</Link>, and balanced{" "}
            <Link to="/nutrition">nutrition</Link>. Together, these practices
            support both mind and body.
          </p>
          <br/>
          <p>
            Mindfulness does not require long meditation sessions. Simple
            breathing exercises, journaling, or mindful movement can help reduce
            anxiety and improve emotional stability over time.
          </p>
        </div>
      </section>

      <section className="content-section">
        <h2>Mindfulness Topics Covered</h2>
        <ul className="bullet-list">
          <li>Stress reduction techniques</li>
          <li>Beginner mindfulness practices</li>
          <li>Mental clarity and emotional balance</li>
          <li>Building resilience through awareness</li>
        </ul>
      </section>

      <Ad slot="1234567890" />
    </>
  );
}