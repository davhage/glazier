import React from 'react';
import { ChakraProvider, Center } from '@chakra-ui/react';
import Navbar from './components/Navbar/Navbar';
import Carousel from './components/Carousel/Carousel';
// import Footer from './components/Footer/Footer';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <ChakraProvider>
      <Navbar />
      <Carousel />
      {/* <Footer /> */}
    </ChakraProvider>
  )
}

export default App;