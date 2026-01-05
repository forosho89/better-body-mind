import React from "react";
import Ad from "../components/Ad";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import AffiliateTable from "../components/AffiliateTable";

export default function Exercise() {
  return (
    <>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HealthTopicContent",
            "name": "Exercise & Movement",
            "description":
              "Practical, science-backed exercise guidance for strength, mobility, and mental well-being.",
            "audience": {
              "@type": "Audience",
              "audienceType": "General public",
            },
          })}
        </script>

        <title>Exercise & Movement for a Healthier Body and Mind</title>
        <meta
          name="description"
          content="Discover simple, effective exercise routines that improve strength, mobility, mood, and long-term health — no gym required."
        />
        <link
          rel="canonical"
          href="https://aiandtechtoday.com/exercise"
        />
      </Helmet>

      <section className="content-section">
        <div className="page">
          <h1>Exercise & Movement</h1>

          <img
            src="/images/exercise-walking.jpg"
            alt="Person walking outdoors for daily exercise"
            className="content-image"
          />

          <Ad slot="1234567890" />

          <p>
            Exercise is one of the most powerful tools for improving both
            physical health and mental well-being. Regular movement strengthens
            muscles and bones, supports heart health, boosts energy levels, and
            plays a major role in reducing stress and anxiety. The good news is
            that exercise does not have to be extreme or time-consuming to be
            effective.
          </p>

          <p>
            Consistency matters far more than intensity. Activities such as
            walking, stretching, light strength training, or short home workouts
            can deliver significant benefits when done regularly. Even 20 to 30
            minutes of movement per day can improve circulation, sharpen focus,
            and support long-term health.
          </p>

          <img
            src="/images/home-workout.jpg"
            alt="Home workout with bodyweight exercises"
            className="content-image"
          />

          <p>
            Exercise works best when combined with other healthy habits.
            Quality sleep helps the body recover and build strength, while
            balanced nutrition fuels movement and improves performance. You can
            explore more on{" "}
            <Link to="/sleep">better sleep habits</Link> and{" "}
            <Link to="/nutrition">daily nutrition routines</Link> to support
            your fitness goals.
          </p>

          <p>
            Movement is also essential for mental health. Physical activity
            stimulates the release of endorphins — natural chemicals that
            improve mood and reduce feelings of stress. Over time, consistent
            exercise has been shown to improve confidence, cognitive function,
            and emotional resilience.
          </p>
        </div>
      </section>

      <section className="content-section">
        <h2>What You’ll Learn Here</h2>

        <ul className="bullet-list">
          <li>Beginner-friendly exercise routines</li>
          <li>Simple home workouts with no equipment</li>
          <li>Cardio, strength training, and mobility basics</li>
          <li>How much exercise you really need for health</li>
        </ul>
      </section>

      <section className="section">
        <h2>Latest Wellness Articles</h2>
        <p>
          Coming soon: in-depth, research-backed guides on exercise, recovery,
          and building sustainable fitness habits for everyday life.
        </p>
      </section>

      <Ad slot="1234567890" />

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
    </>
  );
}
