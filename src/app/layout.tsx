import { Toaster } from "@/src/components/ui/toaster";
import { fontBold, fontMedium, fontSemiBold } from "@/src/lib/fonts";
import { cn } from "@/src/lib/utils";
import "@/src/styles/globals.css";
import { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon/favicon.ico",
    apple: "/favicon/apple-touch-icon.png",
  },
  openGraph: {
    title: "Databrix",
    description:
      "Databrix simplifies the entry into Data Science and Machine Learning by providing an intuitive, cloud-based learning and working platform that enables users to collaborate on projects through an innovative low-code approach and interactive learning content.",
    images: [
      {
        url: "https://databrix.org/opengraph-image",
      },
    ],
  },
  metadataBase: new URL("https://databrix.org"),
  themeColor: "#FFF",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <body
        className={cn(
          "bg-background font-medium min-h-screen scroll-smooth antialiased [font-feature-settings:'ss01']",
          fontMedium.variable,
          fontSemiBold.variable,
          fontBold.variable,
        )}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
