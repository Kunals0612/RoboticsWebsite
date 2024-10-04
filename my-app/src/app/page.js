import Landing from "@/app/components/Landing";
import Navigation from "./components/Navigation";
import Image from "next/image";

export default function Home() {
  return (
   <>
      <Landing/>
      <p className="text-sm ml-10 mt-[3vw] text-gray-500">© 2024 PICT Robotics. All rights reserved. </p>
   </>
  );
}