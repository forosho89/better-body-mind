import React from "react";
import Ad from "../components/Ad";
import { Link } from "react-router-dom";
import AffiliateTable from "../components/AffiliateTable";
import SEO from "./legal/seo/SEO";

export default function Sleep() {
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
          <h1>Sleep & Recovery</h1>

          <img
            src="/images/better-sleep.jpg"
            alt="Peaceful bedroom environment for better sleep"
            className="content-image"
          />

          <Ad slot="1234567890" />

          <p>
            Sleep is essential for physical recovery, cognitive performance,
            and emotional balance. During sleep, the body repairs tissues,
            strengthens the immune system, and consolidates memory.
          </p>
          <br/>
          <p>
            Poor sleep can affect energy levels, focus, and decision-making,
            while increasing the risk of stress, anxiety, and chronic health
            conditions. Even small improvements in sleep habits can lead to
            noticeable benefits in daily life.
          </p>
          <br/>
          <p>
            Quality sleep works hand in hand with{" "}
            <Link to="/exercise">regular exercise</Link> and healthy{" "}
            <Link to="/nutrition">nutrition</Link>. Together, these habits form
            the foundation of a well-balanced lifestyle.
          </p>
          <br/>
          <p>
            Simple strategies such as maintaining a consistent sleep schedule,
            limiting screen time before bed, and creating a calm sleep
            environment can significantly improve sleep quality and recovery.
          </p>
        </div>
      </section>

      <section className="content-section">
        <h2>Sleep Topics Covered</h2>
        <ul className="bullet-list">
          <li>How much sleep you really need</li>
          <li>Improving sleep quality naturally</li>
          <li>Sleep routines and circadian rhythm</li>
          <li>Recovery and stress management</li>
        </ul>
      </section>

      <Ad slot="1234567890" />
     
      <AffiliateTable
  title="Best Sleep Products to Improve Rest (2025-2026)"
  products={[
    {
      name: "Melatonin Sleep Supplements",
      bestFor: "Falling asleep faster",
      rating: "4.6",
      keyword: "melatonin sleep supplement",
    },
    {
      name: "Weighted Blanket",
      bestFor: "Reducing anxiety & deeper sleep",
      rating: "4.7",
      keyword: "weighted blanket for adults",
    },
    {
      name: "White Noise Machine",
      bestFor: "Blocking background noise",
      rating: "4.8",
      keyword: "white noise machine sleep",
    },
    {
      name: "Memory Foam Pillow",
      bestFor: "Neck support & spinal alignment",
      rating: "4.5",
      keyword: "memory foam pillow",
    },
    {
      name: "Blue Light Blocking Glasses",
      bestFor: "Reducing screen-related sleep issues",
      rating: "4.6",
      keyword: "blue light blocking glasses",
    },
  ]}
/>
</>
  );
}