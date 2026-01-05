import { useEffect } from "react";

export default function SEO({
  title,
  description,
  canonical,
  image,
  type = "website",
  publishedTime,
  modifiedTime,
}) {
  useEffect(() => {
    document.title = title;

    setMeta("description", description);
    setLink("canonical", canonical);

    // OpenGraph
    setMeta("og:title", title, true);
    setMeta("og:description", description, true);
    setMeta("og:type", type, true);
    setMeta("og:url", canonical, true);
    if (image) setMeta("og:image", image, true);

    // Twitter
    setMeta("twitter:card", "summary_large_image");
    setMeta("twitter:title", title);
    setMeta("twitter:description", description);
    if (image) setMeta("twitter:image", image);

    // Article times
    if (type === "article") {
      if (publishedTime) setMeta("article:published_time", publishedTime, true);
      if (modifiedTime) setMeta("article:modified_time", modifiedTime, true);
    }
  }, [title, description, canonical, image, type, publishedTime, modifiedTime]);

  return null;
}

function setMeta(name, content, isProperty = false) {
  if (!content) return;
  const attr = isProperty ? "property" : "name";
  let tag = document.querySelector(`meta[${attr}="${name}"]`);
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute(attr, name);
    document.head.appendChild(tag);
  }
  tag.setAttribute("content", content);
}

function setLink(rel, href) {
  if (!href) return;
  let tag = document.querySelector(`link[rel="${rel}"]`);
  if (!tag) {
    tag = document.createElement("link");
    tag.setAttribute("rel", rel);
    document.head.appendChild(tag);
  }
  tag.setAttribute("href", href);
}