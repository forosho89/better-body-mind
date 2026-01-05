import React from "react";
import { useParams } from "react-router-dom";
import { posts } from "../blog/posts";
import Ad from "../components/Ad";
import AffiliateTable from "../components/AffiliateTable";

export default function BlogPost() {
  const { slug } = useParams();
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return <h2>Post not found</h2>;
  }

  const contentBlocks = post.content.split("\n");

  return (
    <div className="page blog-post">
      <h1>{post.title}</h1>
      <p className="blog-meta">
        {post.category} · {post.date}
      </p>

      {/* AD 1 — After intro */}
      <Ad slot="1111111111" />

      {contentBlocks.map((line, index) => {
        if (line.startsWith("## ")) {
          return <h2 key={index}>{line.replace("## ", "")}</h2>;
        }

        if (line.startsWith("### ")) {
          return <h3 key={index}>{line.replace("### ", "")}</h3>;
        }

        if (line.startsWith("- ")) {
          return <li key={index}>{line.replace("- ", "")}</li>;
        }

        return <p key={index}>{line}</p>;
      })}

      {/* AFFILIATE TABLE — ONLY FOR RELEVANT POSTS */}
      {post.slug === "benefits-of-daily-walking" && (
        <AffiliateTable
          title="Best Home Workout Equipment (2025)"
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
              bestFor: "Stretching & recovery",
              rating: "4.8",
              keyword: "non slip yoga mat",
            },
          ]}
        />
      )}

      {/* AD 2 — Bottom of article */}
      <Ad slot="3333333333" />
    </div>
  );
}
