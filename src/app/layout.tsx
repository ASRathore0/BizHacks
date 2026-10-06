import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://bizhacksmedia.com"),
  title: "BizHacks Media™ — We Make Creators Brands.",
  description:
    "BizHacks Media™ is a premier digital marketing and creator-growth agency helping creators, influencers, and brands engineer visibility, virality, and exponential business growth.",
  keywords: [
    "BizHacks Media",
    "Creator Growth",
    "Influencer Marketing",
    "Digital Marketing Agency",
    "Social Media Marketing",
    "Content Strategy",
    "Brand Collaborations",
    "Talent Management",
    "Viral Growth",
  ],
  authors: [{ name: "BizHacks Media" }],
  openGraph: {
    title: "BizHacks Media™ — We Make Creators Brands.",
    description:
      "Digital marketing, creator growth and brand collaborations built to turn attention into influence.",
    url: "https://bizhacksmedia.com",
    siteName: "BizHacks Media™",
    images: [
      {
        url: "/assets/campaign_main.jpg",
        width: 1200,
        height: 630,
        alt: "BizHacks Media Campaign",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "BizHacks Media™ — We Make Creators Brands.",
    description:
      "Digital marketing, creator growth and brand collaborations built to turn attention into influence.",
    images: ["/assets/campaign_main.jpg"],
  },
  icons: {
    icon: "/assets/logo.jpg",
    apple: "/assets/logo.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="icon" href="/assets/logo.jpg" />
        <meta name="theme-color" content="#09090B" />
      </head>
      <body className="bg-background text-white antialiased selection:bg-burgundy-800 selection:text-white">
        {children}
      </body>
    </html>
  );
}
