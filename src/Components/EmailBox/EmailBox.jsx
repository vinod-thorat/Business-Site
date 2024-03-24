import React from "react";
import "./EmailBox.css";
import { LuMail } from "react-icons/lu";
import { motion } from "framer-motion";
import { containerVarients } from "@/src/utils/animation";

const EmailBox = () => {
  return (
    <motion.div
      initial={{ width: "0.5rem", borderRadius: "100%" }}
      whileInView={{
        width: "70%",
        borderRadius: "999px",
        transition: { type: "easeOut", duration: 1 },
      }}
      className="emailBox"
    >
      {/*icons */}
      <motion.div
        variants={containerVarients(0.6)}
        initial="offscreen"
        whileInView={"onscreen"}
        viewport={{ once: true }}
      >
        <LuMail size={30} color="grey" />
      </motion.div>
      {/*Input */}
      <motion.input
        variants={containerVarients(0.7)}
        initial="offscreen"
        whileInView={"onscreen"}
        viewport={{ once: true }}
        type="email"
        name="email"
        autoComplete="email"
        placeholder="Enter Email "
      />
      {/*G F Button */}
      <motion.div
        variants={containerVarients(0.9)}
        initial="offscreen"
        whileInView={"onscreen"}
        viewport={{ once: true }}
        className="getFunded"
      >
        Get funded
      </motion.div>
    </motion.div>
  );
};

export default EmailBox;
