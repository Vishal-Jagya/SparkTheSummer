import HumansCard from "@/components/HumansCard";

import fenil from "@/public/humansPage/fenilpic.jpg";
import venish from "@/public/humansPage/venishPic.jpg";
import vishal from "@/public/humansPage/vishalPic.jpg";
import namit from "@/public/humansPage/namitPic.jpg";
import kanishka  from "@/public/humansPage/kanishkaPic.jpg"
import Tirth  from "@/public/humansPage/tirthPic.jpg"
import himanshu  from "@/public/humansPage/himanshuPic.png"





import CircleAnimation from "@/components/CircleAnimation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { LampContainer, LampDemo } from "@/components/lamp/lamp";

export const metadata = {
  title: "Humans | SparkTheSummer",
  description:
    "Meet the team behind SparkTheSummer 2.0! Discover the faces and roles of the passionate individuals who are working tirelessly to make the hackathon a grand success. Join us and be a part of the team!",
  keywords:
    "Humans, Team, Hackathon, Ganpat University, SparkTheSummer, Coding, Programming, Tech",
  openGraph: {
    title: "Humans | SparkTheSummer",
    description:
      "Meet the team behind SparkTheSummer 2.0! Discover the faces and roles of the passionate individuals who are working tirelessly to make the hackathon a grand success. Join us and be a part of the team!",
    url: "https://SparkTheSummer.tech/humans",
    images:
    "https://raw.githubusercontent.com/fenilmodi00/SparkTheSummer/main/public/cdn1.png",
      siteName: "Spark The Summer - Ganpat University Hackathon",
      locale: "en_US",
      type: "website",
  },
};

export default function Team() {
  const HumansData = [
    {
      name: "Fenil Modi",
      role: "Host Oragnizer",
      profilepic: fenil ,
      linkedin: "https://www.linkedin.com/in/fenilmodi-li/",
      instagram: "https://www.instagram.com/fenil_modii",
      github: "https://github.com/fenilmodi00/",
    },
    {
      name: "Venish Sureliya",
      role: "Oragnizer and Media",
      profilepic: venish ,
      linkedin: "https://www.linkedin.com/in/venishsureliya/",
      instagram: "https://instagram.com/venish_sureliya",
      github: "https://github.com/VenishSureliya",
    },
    {
      name: "Vishal Jagya",
      role: "Social Media and Content",
      profilepic: vishal ,
      linkedin: "https://www.linkedin.com/in/vishal-jagya-41498722b/",
      instagram: "https://www.instagram.com/infotech.vishal?utm_source=qr",
      github: "https://github.com/infotech-vishal",
    },
    {
      name: "Namit Joshi",
      role: "PR and Sponsorship Outreach",
      profilepic: namit ,
      linkedin: "https://www.linkedin.com/in/namit-joshi-29749a246",
      instagram: "https://www.instagram.com/bhudev.ji/",
      github: "https://github.com/iGeeklOrd",
    },
  ];

  const HumansData2 = [
    {
      name: "Kanishka Khandelwal",
      role: "Registration and Content",
      profilepic: kanishka ,
      linkedin: "https://www.linkedin.com/in/kanishka-khandelwal-463432232/",
      instagram : " ",
      github: "https://github.com/Kanishka-2004",
    },
    {
      name: "Tirth Patel",
      role: "PR and Event Management",
      profilepic: Tirth,
      linkedin: "https://www.linkedin.com/in/tirth-patel-1a5b14259/",
      instagram : "https://www.instagram.com/tirth__4935",
      github: " ",
    },
    {
      name: "Himanshu Patel",
      role: "Faculty Advisor",
      profilepic: himanshu ,
      linkedin: "https://www.linkedin.com/in/himanshu-patel-183b5b18/",
      instagram : "https://www.instagram.com/himanshupatelxyz/",
      github: "/",
    }
  ]
  return (
    <>
      <Navbar />
      <LampDemo/>
      <div
        className="bg-[#101010] flex flex-col min-h-screen
          px-4 md:px-10 lg:px-20 xl:px-10 2xl:px-48 py-40" 
          style={{
            backgroundColor: "#000",
            backgroundImage: "url(/newbackground.png)",
            backgroundAttachment: "fixed",
            backgroundSize: "cover",}}
      >
        <div className="flex flex-col items-center gap-4 md:gap-6">
          <div className="flex flex-col items-center gap-1 md:gap-3">
            <div
              className="w-fit rounded-full 
                border border-[#D1CAC7] px-4 py-1 mb-3"
            >
              <p
                className="w-full text-[#C3C3C3] font-[Inter] 
                text-center font-normal text-[1.25rem] tracking-[0.0625rem]"
              >
                THE TEAM
              </p>
            </div>
            {/* <p
              className="text-[#F5F0D8] text-center text-[2.5rem] font-normal 
                md:text-[4rem] xl:text-[5rem] xl:leading-[6.25rem] xl:tracking-[-0.1rem]"
            >
              Meet the humans of
              <br /> SparkTheSummer 
            </p> */}
          </div>
          {/* <p
            className="w-full lg:max-w-[80%] text-[#F5F0D8] font-[Inter] 
              text-center font-normal text-[1.25rem] "
          >
            We're a small team that loves to create great experiences and make
            meaningful connections between builders and customers. Join our
            remote ream!
          </p> */}
        </div>


      

        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 
            place-content-center place-items-center gap-10 pt-20"
        >
          {HumansData.map((human, index) => (
            <HumansCard key={index} index={index} {...human} />
          ))}
        </div>

        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 
            place-content-center place-items-center gap-10 pt-20"
        >
          {HumansData2.map((human, index) => (
            <HumansCard key={index} index={index} {...human} />
          ))}
        </div>
      </div>
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

          <CircleAnimation />
        </div>
      </div>
      <Footer />
    </>
  );
}
