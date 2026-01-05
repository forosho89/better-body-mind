import { useEffect, useState } from "react";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) setVisible(true);
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookieConsent", "accepted");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="cookie-banner">
      <p>
        We use cookies to improve your experience, analyze traffic, and serve
        personalized ads. By continuing, you agree to our use of cookies.
      </p>
      <button onClick={acceptCookies}>Accept</button>
    </div>
  );
}