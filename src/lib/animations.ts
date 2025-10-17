import { Variants } from "framer-motion";

// Common animation variants for consistent timing and easing
export const fadeInUp: Variants = {
  hidden: { 
    opacity: 0, 
    y: 60,
    transition: { duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] }
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] }
  }
};

export const fadeInLeft: Variants = {
  hidden: { 
    opacity: 0, 
    x: -60,
    transition: { duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] }
  },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] }
  }
};

export const fadeInRight: Variants = {
  hidden: { 
    opacity: 0, 
    x: 60,
    transition: { duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] }
  },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] }
  }
};

export const scaleIn: Variants = {
  hidden: { 
    opacity: 0, 
    scale: 0.8,
    transition: { duration: 0.5, ease: [0.6, -0.05, 0.01, 0.99] }
  },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.5, ease: [0.6, -0.05, 0.01, 0.99] }
  }
};

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1
    }
  }
};

export const staggerItem: Variants = {
  hidden: { 
    opacity: 0, 
    y: 20,
    transition: { duration: 0.5, ease: [0.6, -0.05, 0.01, 0.99] }
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: [0.6, -0.05, 0.01, 0.99] }
  }
};

// Card hover animations
export const cardHover: Variants = {
  rest: { 
    scale: 1, 
    rotateX: 0, 
    rotateY: 0,
    transition: { duration: 0.3, ease: [0.6, -0.05, 0.01, 0.99] }
  },
  hover: { 
    scale: 1.02, 
    rotateX: 5, 
    rotateY: 5,
    transition: { duration: 0.3, ease: [0.6, -0.05, 0.01, 0.99] }
  }
};

// Button animations
export const buttonHover: Variants = {
  rest: { 
    scale: 1,
    transition: { duration: 0.2, ease: [0.6, -0.05, 0.01, 0.99] }
  },
  hover: { 
    scale: 1.05,
    transition: { duration: 0.2, ease: [0.6, -0.05, 0.01, 0.99] }
  },
  tap: { 
    scale: 0.95,
    transition: { duration: 0.1, ease: [0.6, -0.05, 0.01, 0.99] }
  }
};

// Icon animations
export const iconHover: Variants = {
  rest: { 
    scale: 1, 
    rotate: 0,
    transition: { duration: 0.3, ease: [0.6, -0.05, 0.01, 0.99] }
  },
  hover: { 
    scale: 1.1, 
    rotate: 5,
    transition: { duration: 0.3, ease: [0.6, -0.05, 0.01, 0.99] }
  }
};

// Magnetic effect for buttons
export const magneticHover = {
  rest: { x: 0, y: 0 },
  hover: (distance: number) => ({
    x: distance * 0.1,
    y: distance * 0.1,
    transition: { duration: 0.3, ease: [0.6, -0.05, 0.01, 0.99] }
  })
};

// Page loader animations
export const loaderVariants: Variants = {
  initial: { 
    opacity: 1,
    scale: 1
  },
  animate: { 
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.6, -0.05, 0.01, 0.99]
    }
  },
  exit: { 
    opacity: 0,
    scale: 0.8,
    transition: {
      duration: 0.5,
      ease: [0.6, -0.05, 0.01, 0.99]
    }
  }
};

// Progress bar animation
export const progressVariants: Variants = {
  initial: { width: "0%" },
  animate: { 
    width: "100%",
    transition: { 
      duration: 2,
      ease: [0.6, -0.05, 0.01, 0.99]
    }
  }
};

// Timeline animations
export const timelineDot: Variants = {
  rest: { 
    scale: 1,
    transition: { duration: 0.3 }
  },
  hover: { 
    scale: 1.2,
    transition: { duration: 0.3 }
  },
  pulse: {
    scale: [1, 1.2, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

// Wave entrance for contact cards
export const waveEntrance: Variants = {
  hidden: { 
    opacity: 0, 
    y: 100,
    rotateX: -15,
    transition: { duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] }
  },
  visible: { 
    opacity: 1, 
    y: 0,
    rotateX: 0,
    transition: { duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] }
  }
};

// Shimmer effect for buttons
export const shimmerVariants: Variants = {
  rest: { 
    backgroundPosition: "-200% 0",
    transition: { duration: 0 }
  },
  hover: { 
    backgroundPosition: "200% 0",
    transition: { 
      duration: 1.5,
      ease: "linear",
      repeat: Infinity,
      repeatType: "loop" as const
    }
  }
};
