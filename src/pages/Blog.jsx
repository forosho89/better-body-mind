import React from "react";
import { Link } from "react-router-dom";
import { posts } from "../blog/posts";

export default function Blog() {
  return (
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
  );
}