import ImprintSection from "@/src/components/layout/imprint-section";
import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Impressum",
  description: "Impressum",
};

export default function Page() {
  return <ImprintSection />;
}
