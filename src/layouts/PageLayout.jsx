import AdSidebar from "../components/ads/AdSidebar";

export default function PageLayout({ children }) {
  return (
    <div className="page-layout">
      <main className="page-content">{children}</main>

      <aside className="page-ad">
        <AdSidebar />
      </aside>
    </div>
  );
}