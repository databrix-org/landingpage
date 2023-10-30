import HeroSection from "@/components/layout/hero-section";
import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description: "Home",
};

export default function Home() {
  return (
    <HeroSection />
  )
}
