import React, { useState } from "react";
import { Badge, Box, Flex, SimpleGrid, Text, Tooltip, useToast } from "@chakra-ui/react";
import { rounders } from "../rounders";

function Gallery() {
  return (
    <Box as="main" w="full" flex={1}>
      <SimpleGrid columns={[2, 3, 4]} spacing={5}>
        {rounders.map((rounder, index) => (
          <Card key={index} rounder={rounder} index={index} />
        ))}
      </SimpleGrid>
    </Box>
  );
}

function Card({ rounder, index }) {
  // for future:
  // const [color, setColor] = useState("red");
  // const [size, setSize] = useState(40);
  const [hovered, setHovered] = useState(false);
  const toast = useToast();

  const handleCopy = () => {
    const text = `<${rounder.title} />`;
    navigator.clipboard.writeText(text).then(
      function () {
        toast({
          title: "Copied to clipboard",
          status: "success",
          duration: 3000,
          isClosable: false,
          position: "bottom-right"
        });
      },
      function (err) {
        toast({
          title: "Copying failed",
          status: "error",
          duration: 3000,
          isClosable: false,
          position: "bottom-right"
        });
      }
    );
  };

  return (
    <Box
      position="relative"
      borderWidth="1px"
      borderRadius="lg"
      borderColor="gray.700"
      boxShadow=" 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocus={() => setHovered(true)}
      onBlur={() => setHovered(false)}
      tabIndex={index + 1}
    >
      <Flex height={36} alignItems="center" justifyContent="center" flexDir="column">
        <rounder.component />
      </Flex>
      <Text fontWeight="bold" pos="absolute" bottom={1} w="full" textAlign="center">
        {rounder.title}
      </Text>
      {hovered && (
        <Tooltip label="Copy JSX code">
          <Badge onClick={handleCopy} pos="absolute" cursor="pointer" right={2} top={2} pt={0.5}>
            copy
          </Badge>
        </Tooltip>
      )}
    </Box>
  );
}

export default Gallery;
