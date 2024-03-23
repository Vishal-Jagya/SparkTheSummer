import "./globals.css";
import Script from "next/script";
import "react-toastify/dist/ReactToastify.css";
import "./clash_grotesk.css";

export const metadata = {
  title: "SparkTheSummer - Ganpat University Hackathon",
  description:
    "SparkTheSummer is the Ganpat University's student-run hackathon, which centers on bringing developers and problem solvers from different foundations together and enables them to develop projects that can bring out an impact.",
  keywords: "hackathon, Ganpat University, SparkTheSummer, coding, programming, tech",
  url: "https://SparkTheSummer.in",
  openGraph: {
    title: "SparkTheSummer - Ganpat University Hackathon",
    description:
      "SparkTheSummer is the Ganpat University's student-run hackathon, which centers on bringing developers and problem solvers from different foundations together and enables them to develop projects that can bring out an impact.",
    url: "https://SparkTheSummer.in",
    images:
      "https://res.cloudinary.com/drtmfrghg/image/upload/v1708016443/opengraph-image_vkiopn.jpg",
    siteName: "SparkTheSummer - Ganpat University Hackathon",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-QCQ397E55G"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
             window.dataLayer = window.dataLayer || [];
             function gtag(){dataLayer.push(arguments);}
             gtag('js', new Date());
           
             gtag('config', 'G-QCQ397E55G');
          `}
        </Script>
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
