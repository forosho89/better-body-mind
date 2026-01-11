import React from "react";
import useReveal from "../hooks/useReveal";
import Ad from "../components/Ad";
import AffiliateLink from "../components/AffiliateLink";
import { amazonSearchLink } from "../utils/amazonLink";
import AffiliateTable from "../components/AffiliateTable";
import SEO from "./legal/seo/SEO";

function BetterBodyMind() {
  useReveal();

  const jsonLdData = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Better Body & Mind",
  "description": "Your description here",
  "url": "https://your-site.com/better-body-mind"
};

  return (
    <>
    <SEO
  title="Better Body & Mind — Wellness, Habits & Mental Clarity (2026)"
  description="Improve your body and mind with sustainable wellness habits, fitness routines, nutrition guidance, better sleep and mental clarity strategies."
  canonical="https://bettermindandbody.com/better-body-mind"
  image="/images/hero-wellness.jpg"
  type="article"
  jsonLd={jsonLdData}
/>
      
      <main className="bbm">
          {/* HERO */}
          <header className="bbm__hero">
            <div className="bbm__hero-content">
              <h1>Better Body & Mind</h1>
              <p>
                Sustainable wellness for real life. Build better habits, improve
                energy, sharpen focus, and protect your mental health — without extremes.
              </p>

              <AffiliateLink href={amazonSearchLink("home workout equipment")}>
                View home workout equipment on Amazon
              </AffiliateLink>
            </div>

            <div className="bbm__hero-image">
              <img
                src="/images/hero-wellness.jpg"
                alt="Healthy lifestyle and wellness"
                loading="eager"
              />
            </div>
          </header>

          {/* AD ABOVE THE FOLD */}
          <section className="bbm__ad">
            <Ad slot="1234567890" />
          </section>

          {/* MODERN WELLNESS */}
          <section className="bbm__section">
            <h2>Wellness that works in 2026</h2>
            <p>
              Modern wellness is about consistency, not perfection. Science now
              favors small daily actions over extreme plans that burn people out.
            </p>

            <ul className="bbm__list">
              <li>
                <strong>Habit stacking:</strong> Build new habits by attaching
                them to routines you already follow.
              </li>
              <li>
                <strong>Micro-workouts:</strong> 5–15 minute sessions spread
                across the day improve strength and mobility.
              </li>
              <li>
                <strong>Mental fitness:</strong> Mindfulness, journaling, and
                stress regulation are core health skills.
              </li>
            </ul>
          </section>

          {/* PILLARS */}
          <section className="bbm__section bbm__cards">
            <h2>The 4 pillars of Better Body & Mind</h2>

            <div className="bbm__card-grid">
              <article className="bbm__card">
                <img src="/images/card-exercise.jpg" alt="Exercise and movement" />
                <h3>Movement & Strength</h3>
                <p>
                  Simple, equipment-free workouts designed for consistency and
                  long-term results.
                </p>
              </article>

              <article className="bbm__card">
                <img src="/images/card-nutrition.jpg" alt="Healthy nutrition" />
                <h3>Nutrition for Energy</h3>
                <p>
                  Practical nutrition strategies that support mood, digestion,
                  and energy without strict dieting.
                </p>
              </article>

              <article className="bbm__card">
                <img src="/images/card-sleep.jpg" alt="Restful sleep" />
                <h3>Sleep & Recovery</h3>
                <p>
                  Optimize sleep quality using evidence-based routines and
                  circadian rhythm alignment.
                </p>
              </article>

              <article className="bbm__card">
                <img src="/images/card-mindfulness.jpg" alt="Mindfulness practice" />
                <h3>Mental Wellness</h3>
                <p>
                  Reduce stress, improve focus, and build emotional resilience
                  with mindfulness practices.
                </p>
              </article>
            </div>
          </section>
          <Ad slot="1234567890" />

          {/* AFFILIATE SECTION */}
          <section className="bbm__section bbm__affiliate">
            <h2>Tools we actually recommend</h2>
            <p>
              These wellness tools are trusted, beginner-friendly, and aligned
              with our philosophy of sustainable health.
            </p>

            <ul>
              <li>
                <AffiliateLink href={amazonSearchLink("home workout equipment")}>
                  View home workout equipment on Amazon
                </AffiliateLink>
              </li>
              <li>
                <li>
                <AffiliateLink href={amazonSearchLink("meditation books")}>
                  View meditation books
                </AffiliateLink>
              </li>
              </li>
              <li>
                <AffiliateLink href={amazonSearchLink("sleep supplements")}>
                  View sleep supplements and more
                </AffiliateLink>
              </li>
            </ul>

            <AffiliateTable
              title="Best Home Workout Equipment (2025-2026)"
              products={[
                {
                  name: "Resistance Bands Set",
                  bestFor: "Strength & mobility",
                  rating: "4.7",
                  keyword: "resistance bands workout",
                },
                {
                  name: "Adjustable Dumbbells",
                  bestFor: "Home strength training",
                  rating: "4.6",
                  keyword: "adjustable dumbbells",
                },
                {
                  name: "Yoga Mat",
                  bestFor: "Stretching & yoga",
                  rating: "4.8",
                  keyword: "non slip yoga mat",
                },
              ]}
            />
          </section>

          {/* INTERNAL / EXTERNAL LINKS */}
          <nav className="bbm__links" aria-label="Related sites">
            <h3>Explore More</h3>
            <ul>
              <li>
                <a href="https://aiandtechtoday.com" target="_blank" rel="noopener noreferrer">
                  AI Tools & Tutorials
                </a>
              </li>
            </ul>
          </nav>
          
          <Ad slot="1234567890" />

        </main>
    </>
  );
}

export default BetterBodyMind;