import React from "react";
import Gallery from "./components/Gallery";
import Header from "./components/Header";
import Footer from "./components/Footer";
import GithubIcon from "./components/GithubIcon";
import { VStack, Container, Box } from "@chakra-ui/react";

function App() {
  return (
    <Container maxW="container.lg">
      <VStack h="100vh" py={4}>
        <Header />
        <Gallery />
        <Footer />
      </VStack>
      <GithubIcon />
    </Container>
  );
}

export default App;
