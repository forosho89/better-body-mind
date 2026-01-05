import React from "react";

export default function AffiliateLink({
  href,
  children,
  className = "",
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="nofollow sponsored noopener"
      className={className}
    >
      {children}
    </a>
  );
}