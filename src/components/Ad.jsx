import React, { useEffect } from "react";

const Ad = ({ slot }) => {
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {}
  }, []);

  return (
    <ins
      className="adsbygoogle"
      style={{ display: "block", margin: "32px 0" }}
      data-ad-client="ca-pub-5337088764018724" // Replace with your AdSense publisher ID//
      data-ad-slot={slot}
      data-ad-format="auto"
      data-full-width-responsive="true"
    ></ins>
  );
};

export default Ad;