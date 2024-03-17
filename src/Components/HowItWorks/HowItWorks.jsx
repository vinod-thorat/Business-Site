import React from "react";
import "./HowItWorks.css";
import { easeIn, motion } from "framer-motion";
import { hitFeatures } from "@/src/utils/data";
import { tagVarients, titleVarients } from "@/src/utils/animation";
const HowItWorks = () => {
  const featureVarients = {
    offscreen: {
      scale: 0.5,
    },
    onscreen: {
      scale: 1,
      transition: {
        type: "spring",
        duration: 1.5,
      },
    },
  };

  return (
    <div className="hiw-wrapper">
      <div className="container">
        <div className="hiw-container">
          <div className="hiw-head">
            <motion.span
              variants={tagVarients}
              initial="offscreen"
              whileInView={"onscreen"}
              className="tag"
            >
              How it works
            </motion.span>
            <motion.span
              variants={titleVarients}
              initial="offscreen"
              whileInView={"onscreen"}
              className="title"
            >
              Unlocking Potential Along The Growth Journey
            </motion.span>
          </div>
          <div className="hiw-features">
            {hitFeatures.map((feature, i) => (
              <motion.div
                variants={featureVarients}
                initial="offscreen"
                whileInView={"onscreen"}
                className="hiw-feature"
                key={i}
              >
                <motion.div
                  initial={{ opacity: 0, x: -100 }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                    transition: {
                      type: "easeIn",
                      duration: 1,
                      delay: 0.7,
                    },
                  }}
                  className="detail"
                >
                  <span className="desc">0{i + 1} </span>
                  <span className="sec-title">{feature.title} </span>
                  <span className="text">{feature.des} </span>
                </motion.div>
                <div className="icon">
                  <img
                    src={feature.icon}
                    alt="feature"
                    width={128}
                    height={128}
                    style={{ translate: "50% 0rem" }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
