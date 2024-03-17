"use client";
import React, { useState } from "react";
import { BiMenuAltRight } from "react-icons/bi";
import { RxCross2 } from "react-icons/rx";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Link } from "react-scroll";
import "./Navbar.css";

const Navbar = () => {
  const [mobileMenuOpened, setMobileMenuOpened] = useState(false);
  const [navStyle, setNavStyle] = useState("");
  const { scrollYProgress } = useScroll();
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest > 0.2) {
      setNavStyle("sticky");
    } else {
      setNavStyle("");
    }
  });

  return (
    <div className={`n-wrapper ${navStyle}`}>
      {/*Desktop Version */}
      <div className="container">
        <div className="n-container">
          {/*left Side */}

          <div className="n-logo">
            <span>Vinod Thorat</span>
          </div>

          {/*Right Side */}
          <div className="n-right">
            <div className="n-menu">
              <Link to="wwd-wrapper" spy={true} smooth={true}>
                <span>What we do</span>
              </Link>
              <Link to="hiw-wrapper" spy smooth offset={100}>
                <span>How it works</span>
              </Link>
              <Link to="wwi-wrapper" spy smooth>
                <span>Who we invest in</span>
              </Link>
              <Link to="t-wrapper" spy smooth offset={100}>
                <span>Testimonials</span>
              </Link>
            </div>
            <div className="fund-button">get funded</div>
          </div>
        </div>
      </div>

      {/*Mobile Version */}
      <div className="nm-container">
        {/*Logo */}
        <div className="nm-logo">
          <span>Vinod Thorat</span>
        </div>
        {/*Menu Icon */}

        {!mobileMenuOpened ? (
          <BiMenuAltRight size={30} onClick={() => setMobileMenuOpened(true)} />
        ) : (
          <RxCross2
            size={30}
            onClick={() => {
              setMobileMenuOpened(false);
            }}
          />
        )}

        <div
          className="nm-menu"
          style={{ transform: mobileMenuOpened && "translateX(0%)" }}
        >
          <Link
            onClick={() => setMobileMenuOpened(false)}
            to="wwd-wrapper"
            smooth={true}
            spy={true}
          >
            <span>What we do</span>
          </Link>
          <Link
            onClick={() => setMobileMenuOpened(false)}
            to="hiw-wrapper"
            smooth
            spy
          >
            <span>How it works</span>
          </Link>
          <Link
            onClick={() => setMobileMenuOpened(false)}
            to="wwi-wrapper"
            smooth
            spy
          >
            <span>Who we invest in</span>
          </Link>
          <Link
            onClick={() => setMobileMenuOpened(false)}
            to="t-wrapper"
            smooth
            spy
          >
            <span>Testimonials</span>
          </Link>
          <div className="mf-button">Get funded</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
