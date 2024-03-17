import React from "react";
import "./WhoWeInvest.css";
import { motion } from "framer-motion";
import { features, whoWeInvest } from "@/src/utils/data";
import {
  containerVarients,
  tagVarients,
  titleVarients,
} from "@/src/utils/animation";

const WhoWeInvest = () => {
  return (
    <div className="wwi-wrapper">
      <div className="container">
        <div className="wwi-container">
          <div className="wwi-left">
            <div className="head">
              <motion.span
                variants={tagVarients}
                initial="offscreen"
                whileInView={"onscreen"}
                className="tag"
              >
                Who we invest in
              </motion.span>
              <motion.span
                variants={titleVarients}
                initial="offscreen"
                whileInView={"onscreen"}
                className="title"
              >
                Digital Businesses
                <br />
                With Early Traction
              </motion.span>
            </div>
            <div className="wwi-features">
              {whoWeInvest.map((feature, i) => (
                <motion.div
                  variants={containerVarients(i * 0.05 + 1)}
                  initial="offscreen"
                  whileInView={"onscreen"}
                  className="wwi-feature"
                  key={i}
                >
                  <span className="desc">{feature.title} </span>
                  <span className="text">{feature.des} </span>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="wwi-right">
            <motion.img
              variants={containerVarients(0.5)}
              initial="offscreen"
              whileInView={"onscreen"}
              src="persons.png"
              alt="Persons"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoWeInvest;
