'use client'
import React from "react";
import Button from "./button";
import deped from "@/public/images/DepEd BG.png";
import Image from "next/image";
import ResearchCard from "@/app/components/research/researchcard";
const hero = () => {
  return (
    <section className="h-screen relative hero">
   

      <div className="z-10">
        <h1 className="text-6xl ">Republic of the Philippines</h1>
      </div>
      <div>
        <ResearchCard/>
      </div>
    </section>
  );
};

export default hero;
