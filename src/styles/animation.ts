import { Center, CenterProps, Flex, FlexProps } from "@chakra-ui/react";
import { motion } from "framer-motion";

export const animationCenter = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1,
      delayChildren: 0.3,
      staggerChildren: 0.2
    }
  }
}

export const itemAnimation = {
  hidden: { y: -60, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
}

export const MotionCenter = motion<CenterProps>(Center);
export const MotionFlex = motion<FlexProps>(Flex);