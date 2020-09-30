import React from "react";
import { useState } from "react";
import { motion, AnimateSharedLayout } from "framer-motion";
import './style.css';

export default function AnimatedScrollbar() {
  const [selected, setSelected] = useState(-2);
 
  function getFrame() {
    let t = [];
    for (let i = 0; i < 15; i++) {
      t.push(
        <motion.div
          className='title'
          animate={ i === selected ? {width: '200px',height: '100px'} : i === selected-1 ? {width: '100px',height: '75px'} : i === selected+1 ? {width: '100px',height: '75px'}: {width: '50px',height: '50px'}}
          transition={{ duration: 0.5 }}
          onHoverStart={() => setSelected(i)}
        />
      )
    }

    return t;
  }

  return (
    <AnimateSharedLayout>
      <div style={{ transform: "translateZ(0)" }}>
        {getFrame()}
      </div>
    </AnimateSharedLayout>
  );
}