import CoverSection from "@/components/scale/CoverSection";
import IndexSection from "@/components/scale/IndexSection";
import Section01 from "@/components/scale/Section01";

import Section03 from "@/components/scale/Section03";
import Section04 from "@/components/scale/Section04";
import Section05 from "@/components/scale/Section05";
import Section06 from "@/components/scale/Section06";
import ClosingSection from "@/components/scale/ClosingSection";
import ScrollFadeIn from "@/components/ScrollFadeIn";
import ParallaxBackground from "@/components/ParallaxBackground";

const Index = () => (
  <div className="relative text-foreground">
    <ParallaxBackground />
    <CoverSection />
    <ScrollFadeIn><IndexSection /></ScrollFadeIn>
    <ScrollFadeIn><Section01 /></ScrollFadeIn>
    
    <ScrollFadeIn><Section03 /></ScrollFadeIn>
    <ScrollFadeIn><Section04 /></ScrollFadeIn>
    <ScrollFadeIn><Section05 /></ScrollFadeIn>
    <ScrollFadeIn><Section06 /></ScrollFadeIn>
    <ScrollFadeIn><ClosingSection /></ScrollFadeIn>
  </div>
);

export default Index;
