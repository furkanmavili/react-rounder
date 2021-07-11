import { Box, Code, Heading, Stack, Text } from "@chakra-ui/react";
import React from "react";
import GithubIcon from "./GithubIcon";

function Header() {
  return (
    <Box as="header" w="full" textAlign="center">
      <GithubIcon />
      <Heading as="h1" size="xl" mt="10">
        React Rounder
      </Heading>
      <Text mt={5} fontStyle="italic">
        A collection of rounding components based on styled-components.
      </Text>
      <Stack direction="row" justifyContent="center" spacing="4" mt="2">
        <Code>yarn add react-rounder</Code>
        <Code>npm install react-rounder</Code>
      </Stack>
    </Box>
  );
}

export default Header;
