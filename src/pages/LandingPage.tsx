import { Header } from "../components/Header";
import { NewHero } from "../components/NewHero";
import { NewFeatures } from "../components/NewFeatures";
import { HowItWorks } from "../components/HowItWorks";
import { Modalities } from "../components/Modalities";
import { StatsSection } from "../components/StatsSection";
import { NewFooter } from "../components/NewFooter";
import { WelcomeDialog } from "../components/WelcomeDialog";

export function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      <WelcomeDialog />
      <Header />
      <NewHero />
      <NewFeatures />
      <HowItWorks />
      <Modalities />
      <StatsSection />
      <NewFooter />
    </div>
  );
}