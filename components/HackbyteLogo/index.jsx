"use client";

import { useEffect, useRef } from "react";
import Sketch from "./sktech";
import Image from "next/image";
import stsMob from "@/public/sts2.png";


const HackbyteLogo = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    let sketch;
    if (containerRef.current) {
      sketch = new Sketch({ dom: containerRef.current });
    }
    return () => {
      if (
        containerRef.current &&
        sketch &&
        containerRef.current.contains(sketch.renderer.domElement)
      ) {
        containerRef.current.removeChild(sketch.renderer.domElement);
      }
    };
  }, []);

  return (
    <div className="min-[1240px]:h-72 flex items-center justify-center my-12 lg:my-8">
      <Image
        src={stsMob}
        className={"max-w-[30rem] min-w-[15rem] w-[70%] min-[1240px]:invisible"}
        alt="HackByte Logo"
        priority
      />
      <div
        className="absolute top-0 -z-[1] left-0 w-full h-full"
        style={{
          backgroundColor: "#000",
          backgroundImage: "url(/newbackground.png)",
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
        }}
        id="canvasContainer"
        ref={containerRef}
        data-grid="30"
        data-mouse="0.25"
        data-strength="0.18"
      >
        <img
          src={"/sts3.png"}
          alt="HackByte Logo"
          id="hackbyteLogo"
          className="invisible"
        />
      </div>
    </div>
  );
};

export { HackbyteLogo };
