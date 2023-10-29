import "../styles/globals.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Databrix",
  openGraph: {
    title: "Databrix",
    description:
      "Databrix simplifies the entry into Data Science and Machine Learning by providing an intuitive, cloud-based learning and working platform that enables users to collaborate on projects through an innovative low-code approach and interactive learning content.",
    images: [
      {
        url: "https://demo.useliftoff.com/opengraph-image",
      },
    ],
  },
  // twitter: {
  //   card: "summary_large_image",
  //   title: "Databrix",
  //   description:
  //     "Databrix simplifies the entry into Data Science and Machine Learning by providing an intuitive, cloud-based learning and working platform that enables users to collaborate on projects through an innovative low-code approach and interactive learning content.",
  //   images: ["https://demo.useliftoff.com/opengraph-image"],
  //   creator: "@tmeyer_me",
  // },
  metadataBase: new URL("https://databrix.org"),
  themeColor: "#FFF",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="scroll-smooth antialiased [font-feature-settings:'ss01']">
        {children}
      </body>
    </html>
  );
}
