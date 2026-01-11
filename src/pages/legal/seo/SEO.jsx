import { useEffect } from "react";

export default function SEO({
  title,
  description,
  canonical,
  image,
  type = "website",
  publishedTime,
  modifiedTime,
  jsonLd = null,
}) {
  useEffect(() => {
    document.title = title;

    setMeta("description", description);
    setLink("canonical", canonical);
    setMeta("robots", "max-image-preview:large");

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

    // Article metadata
    if (type === "article") {
      if (publishedTime) setMeta("article:published_time", publishedTime, true);
      if (modifiedTime) setMeta("article:modified_time", modifiedTime, true);
    }

    // JSON-LD
    const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Better Body & Mind",
  url: "https://bettermindandbody.com/better-body-mind",
  description:
    "Wellness, fitness, nutrition and mental clarity guidance for modern lifestyles.",
  mainEntity: [
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is Better Body & Mind?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A modern wellness guide focused on sustainable habits, fitness, nutrition, sleep, and mental clarity.",
          },
        },
        {
          "@type": "Question",
          name: "What tools do you recommend?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "We recommend resistance bands, adjustable dumbbells, yoga mats, and meditation tools.",
          },
        },
      ],
    },
    {
      "@type": "ItemList",
      itemListElement: [
        {
          "@type": "Product",
          name: "Resistance Bands Set",
          description: "Strength & mobility training",
        },
        {
          "@type": "Product",
          name: "Adjustable Dumbbells",
          description: "Home strength training",
        },
        {
          "@type": "Product",
          name: "Yoga Mat",
          description: "Stretching & yoga practice",
        },
      ],
    },
  ],
};
  }, [
    title,
    description,
    canonical,
    image,
    type,
    publishedTime,
    modifiedTime,
    jsonLd,
  ]);

  return null;
};


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