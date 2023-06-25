"use client";

import { Children, type ReactNode } from "react";
import { motion } from "framer-motion";
import { useStore } from "./store";

const container = {
  hidden: { opacity: 0, height: 0, transition: { staggerChildren: 0.05 } },
  show: {
    opacity: 1,
    height: "auto",
    transition: { when: "beforeChildren", staggerChildren: 0.05 },
  },
};

const item = {
  hidden: { opacity: 0, y: "100%" },
  show: { opacity: 1, y: 0 },
};

function List({ children, open }: { children: ReactNode; open: boolean }) {
  return (
    <motion.ul
      animate={open ? "show" : "hidden"}
      initial="hidden"
      variants={container}
    >
      {Children.map(children, (child) => (
        <li>
          <motion.div variants={item}>{child}</motion.div>
        </li>
      ))}
    </motion.ul>
  );
}

export const Overlay = () => {
  const isOpen = useStore((state) => state.open);

  return (
    <div className="pointer-events-none absolute inset-0 z-10">
      <div className="mx-auto grid h-full w-1/2 place-items-center">
        <List open={isOpen}>
          <h1 className="text-6xl uppercase">36</h1>
          <h3 className="text-8xl font-bold">TECHONOGYM</h3>
          <h3 className="text-8xl font-bold">“RUN”</h3>
          <h3 className="text-7xl font-bold">
            <span className="text-stroke-3 text-transparent">
              Run. Push. More.
            </span>
          </h3>
          <h4 className="mt-4">Treadmills</h4>
          <p className="my-2 w-min rounded-md bg-black px-4 py-2 text-white">
            $10,850
          </p>
          <p>
            High intensity is the name of the game: run to your fastest, push to
            your strongest, and top off your workout with more exercises off the
            treadmill, all guided from the trainer on screen.
          </p>
        </List>
      </div>
    </div>
  );
};
