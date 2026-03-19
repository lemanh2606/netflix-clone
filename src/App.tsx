import EmailSignup from "./components/EmailSignup";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HeroBanner from "./components/HeroBanner";
import TopTrending from "./components/TopTrending";
import ValueProps from "./components/ValueProps";
import type { ReactNode } from "react";

// Container dùng chung
function Container({ children }: { children: ReactNode }) {
  return (
    <div
      style={{
        maxWidth: "1400px",
        width: "100%",
        margin: "0 auto",
        paddingLeft: "clamp(1rem, 5%, 4rem)",
        paddingRight: "clamp(1rem, 5%, 4rem)",
      }}
    >
      {children}
    </div>
  );
}

export default function App() {
  return (
    <div className="bg-black text-white min-h-screen">
      {/* Hero — full width, Header nằm trong Container */}
      <div className="relative">
        <HeroBanner />
        <div className="absolute top-0 left-0 right-0 z-30">
          <Container>
            <Header />
          </Container>
        </div>
      </div>

      {/* Các section bên dưới — căn đều 2 bên */}
      <Container>
        <TopTrending />
        <ValueProps />
        <FAQ />
        <EmailSignup />
        <Footer />
      </Container>
    </div>
  );
}
