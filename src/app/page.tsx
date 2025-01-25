import React from "react";
import Header from "@/app/components/Header";
import SectionOne from "@/app/components/SectionOne";
import SectionTwo from "@/app/components/SectionTwo";
import SectionThree from "@/app/components/SectionThree";
import SectionFour from "@/app/components/SectionFour";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
    </div>
  );
}
