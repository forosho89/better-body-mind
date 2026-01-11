import React from "react";
import { Link } from "react-router-dom";
import { posts } from "../blog/posts";
import SEO from "./legal/seo/SEO";

export default function Blog() {
  return (
    <>
    <SEO
            title="About Us — Mindfulness & Mental Well-Being for a Balanced Life"
            description="Learn more about our mission to bring sustainable wellness and mental clarity to everyday life."
            canonical="https://bettermindandbody.com/about"
            image="/images/about-hero.jpg"
            type="website"
          />

    <div className="page">
      <h1>Blog</h1>
      <br />
      <p>Latest articles on AI, wellness, productivity, and smart living.</p>

      <div className="blog-list">
        {posts.map((post) => (
          <article key={post.slug} className="blog-card">
            <h2>
              <Link to={`/blog/${post.slug}`}>{post.title}</Link>
            </h2>
            <p className="blog-meta">
              {post.category} · {post.date}
            </p>
            <p>{post.excerpt}</p>
            <Link to={`/blog/${post.slug}`} className="read-more">
              Read more →
            </Link>
          </article>
        ))}
      </div>
    </div>
    </>
  );
}