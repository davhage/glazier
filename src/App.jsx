import React from 'react';
import { ChakraProvider, Center } from '@chakra-ui/react';
import Navbar from './components/Navbar/Navbar';
import Carousel from './components/Carousel/Carousel';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <ChakraProvider>
      <Navbar />
      <Carousel />
    </ChakraProvider>
  )
}

export default App;