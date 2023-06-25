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
          <h3 className="text-8xl font-bold">NIKE AIR</h3>
          <h3 className="text-8xl font-bold">“ZOOM”</h3>
          <h3 className="text-8xl font-bold">
            <span className="text-stroke-3 text-transparent">PEGASUS</span>
          </h3>
          <h4 className="mt-4">Running Shoes</h4>
          <p className="my-2 w-min rounded-md bg-black px-4 py-2 text-white">
            $98.97
          </p>
          <p>
            Year after year Pegasus has proven itself on the feet of runners
            everywhere. Now our most trusted style returns with new innovations
            that make it more itself than ever. Meet the reliable, comfortable,
            always ready-to-run Nike Air Zoom Pegasus.
          </p>
        </List>
      </div>
    </div>
  );
};
