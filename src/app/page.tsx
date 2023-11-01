import HeroSection from "@/src/components/layout/hero-section";
import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Databrix",
  description: "Databrix",
};

export default function Page() {
  return <HeroSection />;
}
