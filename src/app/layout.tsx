import type { Metadata } from "next";
import { Geist, Geist_Mono, Tajawal } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const tajawal = Tajawal({
  variable: "--font-tajawal",
  subsets: ["arabic", "latin"],
  weight: ["200", "300", "400", "500", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "مجموعة سلمان للمحاماة والاستشارات القانونية - مكة المكرمة",
  description: "مكتب سلمان للمحاماة والاستشارات القانونية في مكة المكرمة. نقدم خدمات قانونية متميزة في القانون المدني، التجاري، الجنائي، والأحوال الشخصية. استشارات قانونية موثوقة وخبرة تمتد لأكثر من 15 عاماً.",
  keywords: ["محاماة", "استشارات قانونية", "مكة المكرمة", "محامي", "قانون مدني", "قانون تجاري", "قانون جنائي", "أحوال شخصية", "مكتب قانوني"],
  authors: [{ name: "مكتب سلمان للمحاماة" }],
  creator: "مكتب سلمان للمحاماة",
  publisher: "مكتب سلمان للمحاماة",
  robots: "index, follow",
  viewport: "width=device-width, initial-scale=1",
  alternates: {
    canonical: "https://salman-law.com"
  },
  openGraph: {
    type: "website",
    locale: "ar_SA",
    url: "https://salman-law.com",
    title: "مكتب سلمان للمحاماة والاستشارات القانونية - مكة المكرمة",
    description: "مكتب سلمان للمحاماة والاستشارات القانونية في مكة المكرمة. نقدم خدمات قانونية متميزة في القانون المدني، التجاري، الجنائي، والأحوال الشخصية.",
    siteName: "مكتب سلمان للمحاماة",
    images: [
      {
        url: "/identity/logo.png",
        width: 1200,
        height: 630,
        alt: "مكتب سلمان للمحاماة والاستشارات القانونية"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "مكتب سلمان للمحاماة والاستشارات القانونية - مكة المكرمة",
    description: "مكتب سلمان للمحاماة والاستشارات القانونية في مكة المكرمة. نقدم خدمات قانونية متميزة في القانون المدني، التجاري، الجنائي، والأحوال الشخصية.",
    images: ["/identity/logo.png"]
  },
  verification: {
    google: "your-google-verification-code",
    other: {
      "msvalidate.01": "your-bing-verification-code"
    }
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    "name": "مكتب سلمان للمحاماة والاستشارات القانونية",
    "alternateName": "مكتب سلمان للمحاماة",
    "description": "مكتب سلمان للمحاماة والاستشارات القانونية في مكة المكرمة. نقدم خدمات قانونية متميزة في القانون المدني، التجاري، الجنائي، والأحوال الشخصية.",
    "url": "https://salman-law.com",
    "logo": "https://salman-law.com/identity/logo.png",
    "image": "https://salman-law.com/identity/logo.png",
    "telephone": "+966 55 593 5722",
    "email": "info@salman-law.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "شارع إبراهيم الخليل، حي العزيزية",
      "addressLocality": "مكة المكرمة",
      "postalCode": "24231",
      "addressCountry": "SA",
      "addressRegion": "مكة المكرمة"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 21.4225,
      "longitude": 39.8262
    },
    "openingHours": "Mo-Th 08:00-17:00, Su 08:00-17:00",
    "priceRange": "$$",
    "areaServed": {
      "@type": "Country",
      "name": "المملكة العربية السعودية"
    },
    "serviceType": [
      "القانون المدني",
      "القانون التجاري", 
      "القانون الجنائي",
      "قانون الأحوال الشخصية",
      "الاستشارات القانونية"
    ],
    "foundingDate": "2008",
    "founder": {
      "@type": "Person",
      "name": "سلمان الفيفي"
    },
    "sameAs": [
      "https://www.facebook.com/salman.law",
      "https://www.twitter.com/salman_law",
      "https://www.linkedin.com/company/salman-law",
      "https://www.instagram.com/salman.law"
    ]
  };

  return (
    <html lang="ar" dir="rtl">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${tajawal.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
