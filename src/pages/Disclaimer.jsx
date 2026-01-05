import SEO from "./legal/seo/SEO";

export default function Disclaimer() {
  return (
    <div className="container legal-page">
      <SEO
        title="Disclaimer | Better Body & Mind"
        description="Important health, medical, and affiliate disclaimers for Better Body & Mind."
        canonical="https://your-domain.com/disclaimer"
      />

      <h1>Disclaimer</h1>
      <p><strong>Last updated:</strong> December 2025</p>

      <p>
        The information on Better Body & Mind is for educational and informational
        purposes only and should not be considered medical advice.
      </p>

      <h2>Medical Disclaimer</h2>
      <p>
        We are not medical professionals. Always consult a qualified healthcare
        provider before making changes to your health, diet, or fitness routine.
      </p>

      <h2>Affiliate Disclaimer</h2>
      <p>
        Some links may be affiliate links. We may earn a commission at no extra
        cost to you.
      </p>

      <h2>Advertising Disclaimer</h2>
      <p>
        Advertising partners, including Google AdSense, may use cookies and
        tracking technologies.
      </p>
    </div>
  );
}