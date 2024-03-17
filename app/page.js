"use client";
import Navbar from "@/src/Components/Navbar/Navbar";
import "./page.css";
import Hero from "@/src/Components/Hero/Hero";
import BrandingVideo from "@/src/Components/BrandingVideo/BrandingVideo";
import WhatWeDo from "@/src/Components/WhatWeDo/WhatWeDo";
import OurDiff from "@/src/Components/OurDiff/OurDiff";
import { motion, useAnimation } from "framer-motion";
import HowItWorks from "@/src/Components/HowItWorks/HowItWorks";
import WhoWeInvest from "@/src/Components/WhoWeInvest/WhoWeInvest";
import Testimonials from "@/src/Components/Testimonials/Testimonials";
import Footer from "@/src/Components/Footer/Footer";

export default function Home() {
  const controls = useAnimation();
  return (
    <motion.div className="app" animate={controls}>
      <Navbar />
      <Hero />
      <BrandingVideo />
      <WhatWeDo />
      <motion.div
        onViewportEnter={() =>
          controls.start({
            backgroundColor: "var(--secondary-color)",
          })
        }
        onViewportLeave={() =>
          controls.start({
            backgroundColor: "#FFFFFF",
          })
        }
        viewport={{ amount: 0.4 }}
      >
        <OurDiff />
      </motion.div>
      <HowItWorks />
      <motion.div
        onViewportEnter={() =>
          controls.start({
            backgroundColor: "var(--primary-color)",
          })
        }
        onViewportLeave={() =>
          controls.start({
            backgroundColor: "#FFFFFF",
          })
        }
        viewport={{ amount: 0.4 }}
      >
        <WhoWeInvest />
      </motion.div>
      <Testimonials />
      <Footer />
    </motion.div>
  );
}
