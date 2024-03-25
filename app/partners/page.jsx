import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SponsorCard from "@/components/ui/cards";
import ComingSoon from "@/components/ComingSoon";
import { Button } from "@/components/ui/button";
import { ArrowTopRightIcon } from "@radix-ui/react-icons";

import mlh from "@/public/partnersPage/mlh.webp";
import github from "@/public/partnersPage/github.png";
import postman from "@/public/partnersPage/postman.webp";
import godspeed from "@/public/partnersPage/godspeed.webp";
import devfolio from "@/public/partnersPage/devfolio.webp";
import edubard from "@/public/partnersPage/edubard.webp";
import bobble from "@/public/partnersPage/bobble.webp";
import wolfram from "@/public/partnersPage/wolfram.webp";
import balsamiq from "@/public/partnersPage/balsamiq.webp";
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
    url: "https://hackbyte.tech/partners",
    images:
      "https://raw.githubusercontent.com/GDSC-UVPCE/SparkTheSummer/main/cdn.png",
    siteName: "SparkTheSummer - GU Hackathon",
    type: "website",
    locale: "en_US",
  },
};

<script defer async src="https://apply.devfolio.co/v2/sdk.js"></script>

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
        </Tabs>
      </div> 

      {/* error starts form here */}
      <div 
        class="apply-button" 
        className="flex flex-col items-start gap-3 w-full lg:items-end lg:w-1/2"
        data-hackathon-slug="sparkthesummer" 
        data-button-theme="light"
      >
         <a href="" target="_blank">
              <Button
                class="apply-button"
                size="sm"
                data-hackathon-slug="sparkthesummer" 
	              data-button-theme="light"
                className="bg-[#FAF8ED] text-black text-[1.125rem] font-medium uppercase 
                p-6 rounded-none hover:bg-[#FAF8ED] hover:text-black hover:scale-105 transition-transform ease-in-out duration-300"
                style={{
                  boxShadow:
                    "0px 1px 1px 0px rgba(0, 0, 0, 0.12), 0px 0px 0px 1px rgba(103, 110, 118, 0.16), 0px 2px 5px 0px rgba(103, 110, 118, 0.08)",
                }}
              >
                Comming soon......
                <ArrowTopRightIcon className="w-5 h-5 ml-1" />
              </Button>
                
            </a>
      </div>

      {/* error ends here */}
              
      <div className="bg-black w-full h-full py-24 lg:py-40">
        <div
          className="flex flex-col justify-between gap-20 md:flex-row 
            px-4 md:px-8 xl:px-20 2xl:px-40"
        >
          <p
            className="max-w-3xl text-6xl md:text-[5.5rem] lg:text-[7rem] xl:text-[9rem] 
            text-white font-normal font-['Clash Grotesk'] md:leading-[8rem] 
              lg:leading-[10rem] tracking-tighter md:tracking-[-0.2rem]"
          >
            Empower
            <br /> Your Digital
            <br /> Odyssey!
          </p>
          <img src="Dlogo.png" alt="DEVFOLIO LOGO" className="hidden" />
          <img src="Dlogo.png" alt="ETHINDIA LOGO" className="hidden" />
          <img src="Dlogo.png" alt="POLYGON LOGO" className="hidden" />

      <CircleAnimation />
      
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Partners;
