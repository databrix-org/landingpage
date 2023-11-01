import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://databrix.org",
      lastModified: new Date(),
    },
    {
      url: "https://databrix.org/waitlist",
      lastModified: new Date(),
    },
  ];
}
