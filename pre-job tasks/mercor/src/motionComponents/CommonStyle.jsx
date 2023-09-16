export const containerstyle = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.1,
    },
  },
};

export const itemstyle = {
  hidden: { z: 20, opacity: 0 },
  visible: {
    z: 0,
    opacity: 1,
  },
};
