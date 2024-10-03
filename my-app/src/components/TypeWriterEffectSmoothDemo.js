"use client";
import { TypewriterEffectSmooth } from "./ui/TypeWriterEffect"; 
export function TypewriterEffectSmoothDemo() {
  const words = [
    {
      text: "Welcome",
    },
    {
      text: "to",
    },
    {
      text: "Pict",
    },
    {
      text: "Robotics.",
      className: "text-blue-500 dark:text-blue-500",
    },
    {
        text: "🤖",
    }
  ];
  return (
    (<div className="flex flex-col items-center justify-center h-[50rem]  ">
      <p className="text-neutral-600 dark:text-neutral-200 sm:text-large">
      Empowering students through hands-on robotics.
      </p>
      <TypewriterEffectSmooth words={words} />
      <div className="w-[60vw] text-center text-large">
      Pune Institute of Computer Technology (PICT) Robotics was established in 2008 with a mission to foster innovation and technical skills among students. Each year, the club actively participates in the prestigious International Competition of ABU Robocon, consistently showcasing its talent and dedication. PICT Robotics empowers students by providing them with hands-on experience in robotics, guiding them through various projects and competitions, and encouraging them to explore their potential in the field of technology.
      </div>
    </div>)
  );
}
