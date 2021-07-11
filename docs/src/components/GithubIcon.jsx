import { Box, Link } from "@chakra-ui/react";
import React from "react";

function GithubIcon() {
  return (
    <Box display="flex" justifyContent="flex-end" >
     <Link href="https://www.github.com/furkanmavili/react-rounder" target="_blank">
        <img src="https://img.shields.io/github/stars/furkanmavili/react-rounder?style=social"/>
     </Link>
    </Box>
  );
}

export default GithubIcon;
