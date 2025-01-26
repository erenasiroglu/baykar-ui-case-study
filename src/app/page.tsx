import React from "react";
import Header from "@/app/components/Header";
import SectionOne from "@/app/components/SectionOne";
import SectionTwo from "@/app/components/SectionTwo";
import SectionThree from "@/app/components/SectionThree";
import SectionFour from "@/app/components/SectionFour";
import SectionFive from "@/app/components/SectionFive";
import SectionSix from "@/app/components/SectionSix";
import Footer from "@/app/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
      <SectionSix />
      <Footer />
    </div>
  );
}
