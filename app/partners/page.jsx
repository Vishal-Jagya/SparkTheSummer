import { Tabs, TabsContent, TabsList, TabsTrigger }
 from "@/components/ui/tabs";
 import Script from "next/script";
import SponsorCard from "@/components/ui/cards";
import ComingSoon from "@/components/ComingSoon";
import { Button } from "@/components/ui/button";
import { ArrowTopRightIcon } from "@radix-ui/react-icons";
import DevfolioApplyButton from "@/public/devfoliobutton.png";

import mlh from "@/public/partnersPage/mlh.webp";
import github from "@/public/partnersPage/github.png";
import postman from "@/public/partnersPage/postman.webp";
import godspeed from "@/public/partnersPage/godspeed.webp";
import devfolio from "@/public/partnersPage/devfolio.webp";
import Polygon from "@/public/partnersPage/pol.png";
import ethindia from "@/public/partnersPage/ethindia.png";
import edubard from "@/public/partnersPage/edubard.webp";
import bobble from "@/public/partnersPage/bobble.webp";
import wolfram from "@/public/partnersPage/wolfram.webp";
import balsamiq from "@/public/partnersPage/balsamiq.webp";
import IEEE from "@/public/partnersPage/IEEE.png";
import Nextgen from "@/public/partnersPage/Nextgen.webp";
import Finlatics from "@/public/partnersPage/Finlatics.webp";
import Mongodb from "@/public/partnersPage/Mongodb.webp";
import Auth0 from "@/public/partnersPage/Auth0.webp";
import Taipy from "@/public/partnersPage/taipy.webp";
import Godaddy from "@/public/partnersPage/Godaddy.webp";
import Dlogo from "@/public/partnersPage/Dlogo.png";

import CircleAnimation from "@/components/CircleAnimation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Devfoliobtn from "@/components/DevfolioButton/Devfoliobtn";

export const metadata = {
  title: "Partners | SparkTheSummer",
  description:
    "Explore the invaluable support from our esteemed sponsors and partners at SparkTheSummer – the premier hackathon hosted by Ganpat University. Discover their contributions and partnerships, playing a pivotal role in empowering the coding community.",
  keywords:
    "Sponsors, Partners, Hackathon, IIITDMJ, Hackbyte, Coding, Programming, Tech, Collaboration, Innovation, Community Support, Technology Events",
  openGraph: {
    title: "Partners | SparkTheSummer",
    description:
      "Explore the invaluable support from our esteemed sponsors and partners at SparkTheSummer – the premier hackathon hosted by Ganpat University. Discover their contributions and partnerships, playing a pivotal role in empowering the coding community.",
    url: "https://sparkthesummer.tech/partners",
    images:
    "https://raw.githubusercontent.com/fenilmodi00/SparkTheSummer/main/public/cdn1.png",
      siteName: "Spark The Summer - Ganpat University Hackathon",
      locale: "en_US",
      type: "website",
  },
};


const normalSponsorsData = [
  {
    sponsor: "Devfolio",
    category: "Platform Partner",
    sponsorimgsrc: devfolio,
    site: "https://devfolio.co",
  },
];

const inKindSponsorsData = [
  {
    sponsor: "Balsamiq",
    category: "Community Sponsor",
    sponsorimgsrc: balsamiq,
    site: "https://balsamiq.com",
  },
  {
    sponsor: "Polygon",
    category: "Sponser",
    sponsorimgsrc: Polygon,
    site: "https://polygon.technology/",
  },
  {
    sponsor: "ETHIndia",
    category: " Sponsor",
    sponsorimgsrc: ethindia,
    site: "https://ethindia.co ",
  },
];

const CommunityPartnersData = [
  {
    sponsor: "IEEE GUNI SB",
    category: "Community Partner",
    sponsorimgsrc: IEEE,
    site: "https://edubard.com",
  }
];
const Partners = () => {
  return (
    <>
      <Navbar />

      <div
        className="bg-[#101010] flex flex-col items-center min-h-screen 
          lg:px-20 px-4 py-48"
      >
        {/* <ComingSoon /> */}

        <Tabs
          defaultValue="Sponsors"
          className="flex flex-col justify-center items-center text-white"
        >
          <TabsList className="mb-16 w-[19rem] min-w-[321px]:w-80 sm:w-[488px]">
            <TabsTrigger
              value="Sponsors"
              className="sm:p-4 p-2 sm:w-60 w-40 min-[300px]:text-lg sm:text-2xl text-xl leading-7"
            >
              Sponsors
            </TabsTrigger>
            <TabsTrigger
              value="InKind Sponsors"
              className="sm:p-4 p-2 sm:w-60 w-40 min-[300px]:text-lg sm:text-2xl text-xl leading-7"
            >
              In Kind Sponsors
            </TabsTrigger>
            <TabsTrigger
              value="Community Partners"
              className="sm:p-4 p-2 sm:w-60 w-40 min-[300px]:text-lg sm:text-2xl text-xl leading-7"
            >
              Commnity Partners
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="Sponsors">
            <div className="flex flex-wrap justify-center gap-8 xl:gap-12 pt-8">
              {normalSponsorsData.map((sponsor, index) => {
                return <SponsorCard key={index} index={index} {...sponsor} />;
              })}
            </div>
          </TabsContent>
          <TabsContent value="InKind Sponsors">
            <div className="flex flex-wrap justify-center gap-8 xl:gap-12 pt-8">
              {inKindSponsorsData.map((sponsor, index) => {
                return <SponsorCard key={index} index={index} {...sponsor} />;
              })}
            </div>
          </TabsContent>
          <TabsContent value="Community Partners">
            <div className="flex flex-wrap justify-center gap-8 xl:gap-12 pt-8">
              {CommunityPartnersData.map((sponsor, index) => {
                return <SponsorCard key={index} index={index} {...sponsor} />;
              })}
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* error starts form here */}
      {/* <div
        className="apply-button"
        data-hackathon-slug="sparkthesummer"
        data-button-theme="Light"
        style={{ height: "44px", width: "312px" }}
      ></div> */}

      
      {/* <Devfoliobtn /> */}
      <Script
        defer
        async
        src="https://apply.devfolio.co/v2/sdk.js"
        strategy="lazyOnload"
      />

      {/* error ends here */}

      <div className="bg-black w-full h-full py-24 lg:py-40">
        <div
          className="flex flex-col justify-between gap-20 md:flex-row 
            px-4 md:px-8 xl:px-20 2xl:px-40"
        >
          <p
            className="max-w-3xl text-xl md:text-[5.5rem] lg:text-[7rem] xl:text-[9rem] 
            text-white font-normal font-['Clash Grotesk'] md:leading-[8rem] 
              lg:leading-[10rem] tracking-tighter md:tracking-[-0.2rem]"
          >
            Summer's
            <br /> Hottest Hackathon
            <br />
          </p>
          <CircleAnimation />
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Partners;
