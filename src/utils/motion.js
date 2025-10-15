// /src/utils/motion.js

export const staggerContainer = (staggerChildren, delayChildren) => {
  return {
    hidden: {},
    show: {
      transition: {
        staggerChildren: staggerChildren,
        delayChildren: delayChildren || 0,
      },
    },
  };
};

export const textVariant = (delay) => {
  return {
    hidden: {
      y: -50,
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration: 1.25,
        delay: delay,
        stiffness: 80,
        damping: 8,
      },
    },
  };
};

export const fadeIn = (direction, type, delay, duration) => {
  return {
    hidden: {
      x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
      y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
      opacity: 0,
    },
    show: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type: type,
        delay: delay,
        duration: duration,
        ease: "easeOut",
      },
    },
  };
};

export const zoomIn = (delay, duration) => {
  return {
    hidden: {
      scale: 0,
      opacity: 0,
    },
    show: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "tween",
        delay: delay,
        duration: duration,
        ease: "easeOut",
      },
    },
  };
};

export const slideIn = (direction, type, delay, duration) => {
  return {
    hidden: {
      x: direction === "left" ? "-100%" : direction === "right" ? "100%" : 0,
      y: direction === "up" ? "100%" : direction === "down" ? "100%" : 0,
    },
    show: {
      x: 0,
      y: 0,
      transition: {
        type: type,
        delay: delay,
        duration: duration,
        ease: "easeOut",
      },
    },
  };
};

export const rotateIn = (delay, duration) => {
  return {
    hidden: { rotate: 45, opacity: 0 },
    show: {
      rotate: 0,
      opacity: 1,
      transition: {
        type: "spring",
        delay: delay,
        duration: duration,
        ease: "easeOut",
      },
    },
  };
};

export const fadeScale = (delay, duration) => {
  return {
    hidden: { opacity: 0, scale: 0.95 },
    show: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "tween",
        delay: delay,
        duration: duration,
        ease: "easeInOut",
      },
    },
  };
};

export const slideRotate = (delay, duration) => {
  return {
    hidden: { opacity: 0, y: 50, rotate: -5 },
    show: {
      opacity: 1,
      y: 0,
      rotate: 0,
      transition: {
        type: "spring",
        delay: delay,
        duration: duration,
        ease: "easeOut",
      },
    },
  };
};

export const blurUp = (delay, duration) => {
  return {
    hidden: { opacity: 0, y: 20, filter: "blur(2px)" },
    show: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        type: "tween",
        delay: delay,
        duration: duration,
        ease: "easeInOut",
      },
    },
  };
};

export const flipIn = (delay, duration) => {
  return {
    hidden: {
      rotateX: -90,
      opacity: 0,
    },
    show: {
      rotateX: 0,
      opacity: 1,
      transition: {
        type: "spring",
        delay: delay,
        duration: duration,
        ease: "easeOut",
      },
    },
  };
};

export const scaleIn = (delay, duration) => {
  return {
    hidden: {
      scale: 0.8,
      opacity: 0,
    },
    show: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        delay: delay,
        duration: duration,
        bounce: 0.4,
      },
    },
  };
};

export const typingEffect = (duration = 2) => {
  return {
    hidden: { width: 0 },
    show: {
      width: "100%",
      transition: {
        duration: duration,
        ease: "easeInOut",
      },
    },
  };
};

export const floatAnimation = (y = [-10, 10]) => {
  return {
    show: {
      y: y,
      transition: {
        duration: 2,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
      },
    },
  };
};

export const gradientBackground = {
  hidden: { backgroundPosition: "0% 50%" },
  show: {
    backgroundPosition: "100% 50%",
    transition: {
      duration: 5,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "linear",
    },
  },
};

export const revealSlide = (delay, duration) => {
  return {
    hidden: {
      opacity: 0,
      x: -80,
      filter: "blur(10px)",
    },
    show: {
      opacity: 1,
      x: 0,
      filter: "blur(0px)",
      transition: {
        type: "spring",
        delay: delay,
        duration: duration,
        stiffness: 100,
        damping: 15,
      },
    },
  };
};

export const cardReveal = (delay, duration) => {
  return {
    hidden: {
      opacity: 0,
      y: 60,
      scale: 0.9,
      filter: "blur(8px)",
    },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        type: "spring",
        delay: delay,
        duration: duration,
        stiffness: 80,
        damping: 12,
      },
    },
  };
};
