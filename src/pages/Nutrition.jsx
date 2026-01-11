import React from "react";
import Ad from "../components/Ad";
import { Link } from "react-router-dom";
import SEO from "./legal/seo/SEO"

export default function Nutrition() {
  return (
    <>
      <SEO
       title="Exercise — Exercise & Movement for a Healthier Body and Mind"
       description="Learn more about our mission to bring sustainable wellness and mental clarity to everyday life."
       canonical="https://bettermindandbody.com/about"
       image="/images/about-hero.jpg"
       type="website"
      />

      <section className="content-section">
        <div className="page">
          <h1>Nutrition & Healthy Eating</h1>

          <img
            src="/images/healthy-meal.jpg"
            alt="Balanced healthy meal with vegetables and protein"
            className="content-image"
          />

          <Ad slot="1234567890" />

          <p>
            Nutrition plays a foundational role in overall health, energy
            levels, and mental clarity. What you eat directly affects how your
            body functions, how well your brain performs, and how effectively
            you recover from daily stress and physical activity.
          </p>
          <br/>
          <p>
            A healthy diet does not require extreme restrictions or complicated
            meal plans. Instead, focusing on whole foods such as vegetables,
            fruits, lean proteins, healthy fats, and complex carbohydrates
            provides your body with the nutrients it needs to thrive.
          </p>
          <br/>
          <p>
            Proper nutrition supports exercise performance, improves sleep
            quality, and helps regulate mood. When paired with regular
            <Link to="/exercise"> exercise</Link> and adequate{" "}
            <Link to="/sleep">sleep</Link>, good nutrition creates a powerful
            foundation for long-term wellness.
          </p>
          <br/>
          <p>
            Small changes can make a big difference. Staying hydrated, eating
            balanced meals, and reducing ultra-processed foods can improve
            digestion, stabilize blood sugar levels, and support heart and
            brain health over time.
          </p>
        </div>
      </section>

      <section className="content-section">
        <h2>Nutrition Topics Covered</h2>
        <ul className="bullet-list">
          <li>Balanced meals for daily energy</li>
          <li>Protein, carbs, and healthy fats explained</li>
          <li>Hydration and nutrient timing</li>
          <li>Simple habits for sustainable eating</li>
        </ul>
      </section>

      <Ad slot="1234567890" />
    </>
  );
}
