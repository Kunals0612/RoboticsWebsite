import Image from "next/image";
import React from "react";
import { Timeline } from "../components/ui/Timeline";
import Navigation from "../components/Navigation";



export default function Achievements() {
  const data = [
    {
      title: "AIR 4",
      content: (
        <div>
          <div className="">
            <h1 className="text-2xl font-bold pb-3">2014</h1>
            <h2 className="text-xl pb-2 font-medium text-blue-400">A Salute To ParentHood</h2>
            <p className="">The theme was a tribute to the love parents have for their children. The game involved two teams playing with parent and child robots in a park. The parent robot would carry the child robot to the play area, where the child robot would play three activities: Seesaw, Pole walk, and Swing.</p>
          </div>
         
        </div>
      ),  
      link: "https://www.youtube.com/watch?v=9zgNDh8oFVE"
    },
    {
      title: "AIR 11",
      content: (
        <div>
          <div className="">
            <h1 className="text-2xl font-bold pb-3">2017</h1>
            <h2 className="text-xl pb-2 font-medium text-blue-400">The Landing Disc</h2>
            <p className="">In the competition, each team was given discs to land on poles of different heights and distances. The team that landed at least one disc on each pole won the game. If no team landed a disc on each pole, the winner was determined by the rulebook. The winner of the 2017 ABU Robocon was Lac Hong University of Vietnam</p>
          </div>
        </div>
      ), 
      link: "https://www.youtube.com/watch?v=boUMyBLQ_O0"
    },
    {
      title: "AIR 14",
      content: (
        <div>
          <div className="">
            <h1 className="text-2xl font-bold pb-3">2019</h1>
            <h2 className="text-xl pb-2 font-medium text-blue-400">The Great Urtuu</h2>
            <p className="">In the competition, each team had two robots: a manual robot that carried a tablet from the starting point to an automatic robot, which then raised the tablet on top of a mountain. .
            </p>
          </div>
        </div>
      ), 
      link: "https://www.youtube.com/watch?v=tAvVfpZSpZo"
    },
    {
      title: "AIR 6",
      content: (
        <div>
          <div className="">
            <h1 className="text-2xl font-bold pb-3">2022</h1>
            <h2 className="text-xl pb-2 font-medium text-blue-400">Lagori</h2>
            <p className="">A game played between two teams, "Seeker" and "Hitter", where the Seeker breaks a stone tower called "Lagori" with a ball, and the Hitter throws balls to interrupt the Seeker
            </p>
          </div>
        </div>
      ), 
      link: "https://www.youtube.com/watch?v=Ufcv3Uz_yO8"
    },
    {
      title: "AIR 12",
      content: (
        <div>
          <div className="">
            <h1 className="text-2xl font-bold pb-3">2023</h1>
            <h2 className="text-xl pb-2 font-medium text-blue-400">Casting Flowers over Angkor Wat</h2>
            <p className="">In 2023, the theme of the competition is to cast flowers over Angkor Wat by the corporation of a rabbit robot and an elephant robot. The actual competition is "Ring Toss Game’ using blue and red rings made of rubber hoses instead of flowers.

            </p>
          </div>
        </div>
      ), 
      link: "https://www.youtube.com/watch?v=mOXJfGUyQSk"
    },
    {
      title: "AIR 16",
      content: (
        <div>
          <div className="">
            <h1 className="text-2xl font-bold pb-3">2024</h1>
            <h2 className="text-xl pb-2 font-medium text-blue-400">Harvest Day
            </h2>
            <p className="">The task for the robots in this year's competition is to simulate the process of planting rice seedlings and collecting seed balls for storage.
            </p>
          </div>
        </div>
      ), 
      link: "https://www.youtube.com/watch?v=zavE1DzyH6Q"
    },
  ];
  return (
    <>
    <Navigation/>
    <div className="w-full">
      <Timeline data={data} />
    </div>
    </>
  );
}
