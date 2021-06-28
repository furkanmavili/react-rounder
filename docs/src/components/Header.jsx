import { Box, Heading, Text } from "@chakra-ui/react";
import React from "react";

function Header() {
  return (
    <Box as="header" w="full" textAlign="center" py={10}>
      <Heading as="h1" size="xl">
        React Rounder
      </Heading>
      <Text mt={5} fontStyle="italic">
        A collection of rounding components based on styled-components.
      </Text>
    </Box>
  );
}

export default Header;
