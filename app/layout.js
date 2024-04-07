import "./globals.css";
import Script from "next/script";
import "react-toastify/dist/ReactToastify.css";
import "./clash_grotesk.css";

export const metadata = {
  metadataBase: new URL('https://SparkTheSummer.tech'),
  title: "Spark The Summer - Ganpat University Hackathon",
  description:
    "Spark The Summer is the Ganpat University's student-run hackathon, which centers on bringing developers and problem solvers from different foundations together and enables them to develop projects that can bring out an impact.",
  keywords: "SparkTheSummer,hackathon, Ganpat University, Mehsana, sparkthesummer.tech, coding, programming, tech",
  url: "https://SparkTheSummer.tech",
  openGraph: {
    title: "Spark The Summer - Ganpat University Hackathon",
    description:
      "Spark The Summer is the Ganpat University's student-run hackathon, which centers on bringing developers and problem solvers from different foundations together and enables them to develop projects that can bring out an impact.",
    url: "https://SparkTheSummer.tech",
    images:
      "https://raw.githubusercontent.com/fenilmodi00/SparkTheSummer/main/public/cdn1.png",
    siteName: "Spark The Summer - Ganpat University Hackathon",
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
