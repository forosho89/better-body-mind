import { useEffect } from "react";

export default function AdSidebar() {
  useEffect(() => {
    try {
      if (window.adsbygoogle && window.adsbygoogle.loaded !== true) {
        window.adsbygoogle.push({});
      }
    } catch (e) {
      console.warn("AdSense error", e);
    }
  }, []);

  return (
    <ins
      className="adsbygoogle"
      style={{ display: "block", width: "300px", height: "600px" }}
      data-ad-client="ca-pub-XXXXXXXXXXXX" // Replace with your AdSense publisher ID//
      data-ad-slot="XXXXXXXXXX"
      data-ad-format="auto"
      data-full-width-responsive="false"
    />
  );
}
