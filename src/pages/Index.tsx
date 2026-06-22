import { lazy, Suspense } from "react";
import CoverSection from "@/components/scale/CoverSection";
import ScrollFadeIn from "@/components/ScrollFadeIn";
import ParallaxBackground from "@/components/ParallaxBackground";
import { SectionLoadingFallback } from "@/components/LoadingFallback";

// Lazy load heavy sections
const IndexSection = lazy(() => import("@/components/scale/IndexSection"));
const Section01 = lazy(() => import("@/components/scale/Section01"));
const Section03 = lazy(() => import("@/components/scale/Section03"));
const Section04 = lazy(() => import("@/components/scale/Section04"));
const Section05 = lazy(() => import("@/components/scale/Section05"));
const Section06 = lazy(() => import("@/components/scale/Section06"));
const ClosingSection = lazy(() => import("@/components/scale/ClosingSection"));

const Index = () => (
  <div className="relative text-foreground">
    <ParallaxBackground />
    <CoverSection />
    <Suspense fallback={<SectionLoadingFallback />}>
      <ScrollFadeIn><IndexSection /></ScrollFadeIn>
    </Suspense>
    <Suspense fallback={<SectionLoadingFallback />}>
      <ScrollFadeIn><Section01 /></ScrollFadeIn>
    </Suspense>
    <Suspense fallback={<SectionLoadingFallback />}>
      <ScrollFadeIn><Section03 /></ScrollFadeIn>
    </Suspense>
    <Suspense fallback={<SectionLoadingFallback />}>
      <ScrollFadeIn><Section04 /></ScrollFadeIn>
    </Suspense>
    <Suspense fallback={<SectionLoadingFallback />}>
      <ScrollFadeIn><Section05 /></ScrollFadeIn>
    </Suspense>
    <Suspense fallback={<SectionLoadingFallback />}>
      <ScrollFadeIn><Section06 /></ScrollFadeIn>
    </Suspense>
    <Suspense fallback={<SectionLoadingFallback />}>
      <ScrollFadeIn><ClosingSection /></ScrollFadeIn>
    </Suspense>
  </div>
);

export default Index;
