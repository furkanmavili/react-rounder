import { Container, VStack } from "@chakra-ui/react";
import React from "react";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Header from "./components/Header";

function App() {
  return (
    <Container maxW="container.lg">
      <VStack h="100vh" py={4}>
        <Header />
        <Gallery />
        <Footer />
      </VStack>
    </Container>
  );
}

export default App;
