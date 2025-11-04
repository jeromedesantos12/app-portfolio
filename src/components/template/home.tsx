"use client";

import { Footer } from "@/components/molecules/footer";
import { Hero } from "@/components/molecules/hero";
import { Menu } from "@/components/molecules/menu";
import { Navbar } from "@/components/molecules/navbar";
import { Stack } from "@/components/molecules/stack";
import { useState } from "react";
import { Project } from "@/components/molecules/project";
import Experience from "@/components/molecules/experience";

export function Home() {
  const [isActive, setIsActive] = useState(false);
  const toggleMenu = () => setIsActive(!isActive);
  const handleDiv = () => setIsActive(false);

  return (
    <>
      <Navbar isActive={isActive} toggleMenu={toggleMenu} />
      <div onClick={handleDiv}>
        <Menu isActive={isActive} />
        <Hero />
        <Stack />
        <Project />
        <Experience />
        <Footer />
      </div>
    </>
  );
}
