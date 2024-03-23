import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CircleAnimation from "@/components/CircleAnimation";
import TextAnimation from "@/components/TextAnimation";

export const metadata = {
  title: "Contact | Spark The Summer",
  description:
    "Connect with us at SparkTheSummer! Reach out for assistance, questions, or just to say hello. Find information on reaching Ganpat University, including travel options.",
  keywords: "contact, SparkTheSummer, reach us, get in touch",
  openGraph: {
    title: "Contact | Spark The Summer",
    description:
      "Connect with us at SparkTheSummer! Reach out for assistance, questions, or just to say hello. Find information on reaching Ganpat University, including travel options.",
    url: "https://SparkTheSummer.Tech/contact",
    images:
      "https://raw.githubusercontent.com/GDSC-UVPCE/SparkTheSummer/main/cdn.png",
    siteName: "Spark The Summer - Ganapat Univesity Hackathon",
    type: "website",
    locale: "en_US",
  },
};

export default function Contact() {
  return (
    <>
      <Navbar />
      <div
        className="bg-[#101010] flex flex-col min-h-screen
          p-4 md:pb-64 lg:px-0 md:pt-24 pt-16"
      >
        <div
          className="w-full h-full flex flex-col gap-24 px-4 pt-20 
            md:px-8 lg:px-16 xl:px-20 2xl:px-40"
        >
          <div
            className="flex flex-col justify-between items-start sm:items-center 
              gap-12 md:gap-0 md:flex-row"
          >
            <div className="flex flex-col items-start gap-8">
              <TextAnimation text="How can we help you? " />
              <p
                className="w-full text-[#C3C3C3] font-['Inter'] font-normal 
                  text-[1.25rem] sm:max-w-[32rem] lg:max-w-[40rem] xl:max-w-[50rem] 
                  2xl:max-w-[55rem] md:text-[1rem] xl:text-[1.5rem]"
              >
                Hacker Experience is what we prioritize! Have questions, need
                assistance, or just want to connect? Feel free to reach out!
              </p>
            </div>

            <img
              className="w-44 h-44 md:hidden lg:block xl:h-60 xl:w-60"
              src="/getInTouchImage.svg"
              alt="Get in touch"
            />
          </div>

          <div className="flex flex-col items-start gap-8 md:gap-12">
            <p className="text-[#F5F0D8] font-normal font-['Inter'] text-[1.5rem] md:text-[1.875rem]">
              Reaching Ganpat University
            </p>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3174.631325012539!2d80.02390068793628!3d23.17681212828739!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3981a94397365dd3%3A0x5f9aeb812c2678c9!2sIIITDM%20Jabalpur!5e0!3m2!1sen!2sin!4v1696615484249!5m2!1sen!2sin"
              className="w-full h-full md:h-[25rem] border-0 rounded-[1rem]"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            <div
              className="flex flex-col items-start p-6 gap-8 
                rounded-[1rem] border border-[rgba(255,255,255,0.5)]"
              style={{
                background:
                  "radial-gradient(371.89% 134.33% at 3.21% 1.26%, rgba(255, 255, 255, 0.07) 0%, rgba(217, 217, 217, 0.00) 100%)",
              }}
            >
              <img
                src="/contactPage/trainIcon.svg"
                alt="By Train"
                className=" hover:scale-110 hover:rotate-[360deg] transition-all duration-1000 ease-in-out"
              />
              <div className="flex flex-col items-start gap-3">
                <p className="text-white font-['Inter'] text-[1.125rem] font-[600] md:text-[1.25rem]">
                  By Train
                </p>
                <p className="text-[#D1CAC7] font-['Inter'] text-[1rem] font-normal md:text-[1.125rem]">
                  Book tickets from IRCTC : The campus is 12kms from the Railway
                  Terminal and auto fare is usually around ₹200-₹250.
                </p>
              </div>
            </div>

            {/* <div
              className="flex flex-col items-start p-6 gap-8 
                rounded-[1rem] border border-[rgba(255,255,255,0.5)]"
              style={{
                background:
                  "radial-gradient(371.89% 134.33% at 3.21% 1.26%, rgba(255, 255, 255, 0.07) 0%, rgba(217, 217, 217, 0.00) 100%)",
              }}
            >
              <img
                src="/contactPage/planeIcon.svg"
                alt="By Flight"
                className=" hover:scale-110 hover:rotate-[360deg] transition-all duration-1000 ease-in-out"
              />
              <div className="flex flex-col items-start gap-5">
                <p className="text-white font-['Inter'] text-[1.125rem] font-[600] md:text-[1.25rem]">
                  By Air
                </p>
                <p className="text-[#D1CAC7] font-['Inter'] text-[1rem] font-normal md:text-[1.125rem]">
                  Daily flights from{" "}
                  <span className="font-[600]">
                    Delhi, Mumbai, Hyderabad, Indore and Bilaspur.
                  </span>{" "}
                  From <span className="font-[600]">Bangalore</span>, connecting
                  flights are available.
                </p>
              </div>
            </div> */}

            <div
              className="flex flex-col items-start p-6 gap-8 
                rounded-[1rem] border border-[rgba(255,255,255,0.5)]"
              style={{
                background:
                  "radial-gradient(371.89% 134.33% at 3.21% 1.26%, rgba(255, 255, 255, 0.07) 0%, rgba(217, 217, 217, 0.00) 100%)",
              }}
            >
              <img
                src="/contactPage/busIcon.svg"
                alt="By Bus"
                className=" hover:scale-110 hover:rotate-[360deg] transition-all duration-1000 ease-in-out"
              />
              <div className="flex flex-col items-start gap-5">
                <p className="text-white font-['Inter'] text-[1.125rem] font-[600] md:text-[1.25rem]">
                  By Bus
                </p>
                <p className="text-[#D1CAC7] font-['Inter'] text-[1rem] font-normal md:text-[1.125rem]">
                  Only suggested if you live around{" "}
                  <span className="font-[600]">1.5-2hrs</span> from Gandhinagar-Ahemdabad.{" "}
                  <span className="font-[600]">
                    Gandhinagar bus stand
                  </span>{" "}
                  is around 13km from the venue, auto fare is usually around{" "}
                  <span className="font-[600]">₹110-₹160</span>.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-start gap-12 md:gap-20 md:flex-row">
            <div className="flex flex-col items-start gap-4 md:gap-8">
              <p className="text-[#F5F0D8] font-[500] text-[1.5rem] md:text-[1.875rem]">
                Call Us
              </p>
              <div
                className="flex flex-col gap-12 text-white
              font-normal text-[1rem] md:flex-row lg:text-[1.5rem]"
              >
                <div className="flex flex-col items-start gap-2">
                  <p>+91 7984630511</p>
                  <p>Fenil Modi</p>
                </div>
                <div className="flex flex-col items-start gap-2">
                <p>+91 7984630511</p>
                  <p>Fenil Modi</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start gap-4 md:gap-8">
              <p className="text-[#F5F0D8] font-[500] text-[1.5rem] md:text-[1.875rem]">
                Address
              </p>
              <p
                className="max-w-full md:max-w-[18rem] lg:max-w-[25rem] text-white 
              font-normal text-[1rem] lg:text-[1.5rem]"
              >
                Ganpat Vidyanagar Mehsana-Gozaria, Highway, Kherva, Gujarat 384012
              </p>
            </div>
          </div>
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
