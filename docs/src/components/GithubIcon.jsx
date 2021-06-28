import { Button, Link } from "@chakra-ui/react";
import React from "react";
import { FaGithub } from "react-icons/fa/index";
function GithubIcon() {
  return (
    <Button
      as={Link}
      leftIcon={<FaGithub />}
      pos="absolute"
      href="https://github.com/furkanmavili/react-rounder"
      right={4}
      top={4}
      isExternal
      display="flex"
      alignItems="center"
    >
      Github
    </Button>
  );
}

export default GithubIcon;
