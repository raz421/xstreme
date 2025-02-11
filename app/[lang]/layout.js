import Header from "@/components/Header";
// import "../globals.css";

export default function LangLayout({ children, medium }) {
  return (
    <main className="bg-color-bg text-white font-exo">
      <div className="container mx-auto px-4 py-4">
        <Header />
        {medium}
        {children}
      </div>
      {/* <div id="modal-root-content" /> */}
    </main>
  );
}
