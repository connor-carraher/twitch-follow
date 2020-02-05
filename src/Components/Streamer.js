import React, { useState } from "react";
import "./Streamer.scss";
import moment from "moment";
import { ArrowUp, ArrowDown } from "react-feather";
import { motion } from "framer-motion";

export default function Streamer({ streamer }) {
  const [isFolded, setIsFolded] = useState(true);

  const variants = {
    folded: { height: "0", scaleY: 1 },
    unfolded: { height: "24px", scaleY: -1 },
    unfoldedText: { height: "auto" },
    foldedText: { height: "0" }
  };

  function toggleContent() {
    setIsFolded(!isFolded);
  }

  return (
    <div className="card">
      <div className="folded-content">
        <div className="text">
          {streamer.to_name}
          {isFolded ? (
            ""
          ) : (
            <motion.div
              className="below text"
              animate={isFolded ? "foldedText" : "unfoldedText"}
              transition={{ duration: 1 }}
              variants={variants}
            >
              <div className="year-text">
                Years: {moment().diff(streamer.followed_at, "years")}
              </div>
              <div className="month-text">
                Months: {moment().diff(streamer.followed_at, "months") % 12}
              </div>
              <div className="day-text">
                Days: {moment().diff(streamer.followed_at, "days") % 31}
              </div>
            </motion.div>
          )}
        </div>
        <motion.div
          className="icon"
          onClick={toggleContent}
          animate={isFolded ? "folded" : "unfolded"}
          transition={{ duration: 1 }}
          variants={variants}
        >
          <ArrowUp />
        </motion.div>
      </div>
    </div>
  );
}
