'use client';
import { Box, Button } from "@mui/material";
import ArrowBack from "@mui/icons-material/ArrowBack";
import ArrowForward from "@mui/icons-material/ArrowForward";
import Image from "next/image";
import { useState } from 'react';


const images = [
 "/book1.jpg",
 "/book2.jpg",
 "/book3.jpg",
];

export default function ContentSection() {
 const [index, setIndex] = useState(0);

 const handlePrev = () => {
  setIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
 };

 const handleNext = () => {
  setIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
 };
 return (
  <main className="flex flex-col items-center gap-8 justify-between pb-5">
   <Box className="flex items-center w-full justify-center">
    <div className="flex flex-col justify-center gap-5 h-full">
     <Box>
      <p className="text-4xl font-light">ÚLTIMO LANÇAMENTO!</p>
     </Box>
     <p className="text-2xl uppercase">Bem-vindo ao Product Mindset INSTITUTO!</p>
     <p className="text-xl border-l-8 border-l-sky-800 pl-5">Abra sua mente para o mundo da tecnologia! <br /> Nova forma de enxergar o desenvolvimento de produtos.</p>
    </div>
    <Box>
     <Image src="/imagen_home.png" alt="product mindset logo" width={400} height={500} />
    </Box>
   </Box>
   <Box className="flex flex-col items-center gap-4">
    <p>eBooks Publicados</p>
    <Box className="flex flex-col items-center gap-4">
     <div className="flex items-center gap-4">
      <Button onClick={handlePrev}> <ArrowBack /> </Button>
      <div className="relative w-64 h-64">
       <Image
        src={images[index]}
        alt={`Look ${index + 1}`}
        fill
        className="object-center rounded-lg"
       />
      </div>
      <Button onClick={handleNext}> <ArrowForward /> </Button>
     </div>
     <p className="w-2/5 text-base">
      Este eBook apresenta uma abordagem prática e direta sobre requisitos de software. Um guia essencial para quem deseja desenvolver software realmente alinhado às necessidades do cliente.
     </p>
    </Box>
   </Box>
  </main>
 )
}