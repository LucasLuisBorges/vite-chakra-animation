import * as React from "react";
import { Box, Image, Badge, Text } from "@chakra-ui/react";

import { MotionCenter, animationCenter, MotionFlex, itemAnimation } from "../../styles/animation";

export function Home() {
  return (
    <MotionCenter
      h="100vh"
      variants={animationCenter}
      initial="hidden"
      animate="visible"
    >
      <Box p="5" maxW="320px" borderWidth="1px">
        <Image borderRadius="md" src="https://bit.ly/2k1H1t6" />
        <MotionFlex variants={itemAnimation} align="baselne" mt={2}>
          <Badge colorScheme="pink">Plus</Badge>
          <Text
            ml={2}
            textTransform="uppercase"
            fontSize="sm"
            fontWeight="bold"
            color="pink.800"
          >
            Verified &bull; Cape Town
          </Text>
        </MotionFlex>
        <MotionCenter variants={itemAnimation}>
          <Text mt={2} fontSize="xl" fontWeight="semibold" lineHeight="short">
            Modern, Chic Penthouse with Mountain, City & Sea Views
          </Text>
        </MotionCenter>
        <MotionFlex variants={itemAnimation}>
          <Text mt={2}>$119/night</Text>
        </MotionFlex>
        <MotionFlex variants={itemAnimation} mt={2} align="center">
          <Text ml={1} fontSize="sm">
            <b>4.84</b> (190)
          </Text>
        </MotionFlex>
      </Box>
    </MotionCenter>
  );
}