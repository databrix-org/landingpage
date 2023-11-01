import PrivacyPolicySection from "@/src/components/layout/privacy-policy-section";
import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Datenschutzerklärung",
  description: "Datenschutzerklärung",
};

export default function Page() {
  return <PrivacyPolicySection />;
}
