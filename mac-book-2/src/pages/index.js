import Head from "next/head";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import GrowthSection from "../components/GrowthSection";
import ComparisonSection from "../components/ComparisonSection";
import InvestmentSection from "../components/InvestmentSection";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <Head>
        <title>革新的M3 MacBook Air - 研究と成長への投資</title>
      </Head>
      <Header />
      <HeroSection />
      <GrowthSection />
      <ComparisonSection />
      <InvestmentSection />
      <Footer />
    </div>
  );
}
