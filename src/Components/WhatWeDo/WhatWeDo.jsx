"use client";

import React from "react";
import "./WhatWeDo.css";
import { features } from "@/src/utils/data";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  containerVarients,
  descVarients,
  tagVarients,
  titleVarients,
} from "@/src/utils/animation";

const WhatWeDo = () => {
  return (
    <div className="wwd-wrapper">
      <div className="container">
        <div className="wwd-container">
          <div className="wwd-head">
            <motion.span
              initial="offscreen"
              whileInView={"onscreen"}
              variants={tagVarients}
              className="tag"
            >
              What we do
            </motion.span>
            <motion.span
              initial="offscreen"
              whileInView={"onscreen"}
              variants={titleVarients}
              className="title"
            >
              Empowering Founders With Non Dilutive capital and Execution
              expertise
            </motion.span>
            <motion.span
              initial="offscreen"
              whileInView={"onscreen"}
              variants={descVarients}
              className="desc"
            >
              Here is how we can evaluate
            </motion.span>
          </div>
          {/*Two Blocks */}
          <div className="wwd-blocks">
            {/*first Block */}
            <div className="wwd-block">
              <motion.span
                initial="offscreen"
                whileInView={"onscreen"}
                variants={titleVarients}
                className="sec-title"
              >
                Blue Advances
              </motion.span>
              <motion.span
                initial="offscreen"
                whileInView={"onscreen"}
                variants={descVarients}
                className="text"
              >
                Fund recurring growth expenses e.g. customer acquisition,
                inventory
              </motion.span>

              <div className="block-features">
                {features.slice(0, 3).map((feature, i) => (
                  <motion.div
                    initial="offscreen"
                    whileInView={"onscreen"}
                    variants={containerVarients((i + 1) * 0.1)}
                    className="block-feature"
                    key={i}
                  >
                    <Image
                      src={feature.icon}
                      alt="feature"
                      width={60}
                      height={60}
                    />
                    <span>{feature.title} </span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/*Second Block */}
            <div className="wwd-block">
              <motion.span
                initial="offscreen"
                whileInView={"onscreen"}
                variants={titleVarients}
                className="sec-title"
              >
                Blue Seed
              </motion.span>
              <motion.span
                initial="offscreen"
                whileInView={"onscreen"}
                variants={descVarients}
                className="text"
              >
                Fund one-offs to scale e.g. product, hiring
              </motion.span>
              <div className="block-features">
                {features.slice(3, 6).map((feature, i) => (
                  <motion.div
                    initial="offscreen"
                    whileInView={"onscreen"}
                    variants={containerVarients((i + 1) * 0.1)}
                    className="block-feature"
                    key={i}
                  >
                    <Image
                      src={feature.icon}
                      alt="feature"
                      width={60}
                      height={60}
                    />
                    <span>{feature.title} </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
          {/*Support Block */}
          <motion.div
            initial="offscreen"
            whileInView={"onscreen"}
            variants={containerVarients(0.3)}
            className="wwd-support"
          >
            <div>
              <span className="sec-title">Blue Growth Support</span>
              <span className="desc">
                Data Insights and full stack expertise to supercharge growth
              </span>
            </div>

            <div>
              <span className="text">
                Actionable data insights by connecting revenue, marketing and
                social media platforms
              </span>
              <span className="text">
                On demand execution expertise at cost or revenue share across
                proposition design, engineering, marketing analytics,
                partnerships, brand, intellectual property, market expansion,
                talent management
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
