'use client';
import { ArrowBack, ArrowForward } from "@mui/icons-material";
import { Box, Button, Link, useMediaQuery, useTheme } from "@mui/material";
import { useState } from "react";
import Image from "next/image";
const images = [
 "/book1.jpg",
 "/book2.jpg",
 "/book3.jpg",
];

export default function ContentSection() {

 const theme = useTheme();
 const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
 const isMediumScreen = useMediaQuery(theme.breakpoints.between('sm', 'md'));
 const isLargeScreen = useMediaQuery(theme.breakpoints.up('md'));

 const [index, setIndex] = useState(0);

 const handlePrev = () => {
  setIndex((params) => (params === 0 ? images.length - 1 : params - 1));
 };

 const handleNext = () => {
  setIndex((params) => (params === images.length - 1 ? 0 : params + 1));
 };
 return (
  <div>
   {isLargeScreen && (
    <Box className="flex flex-col items-center  my-5 justify-between w-full h-screen">
    <p className="text-2xl pt-5">eBooks Publicados</p>
    <div className="flex items-center gap-4">
     <Button onClick={handlePrev}> <ArrowBack /> </Button>
     <div className="relative h-64 w-64">
      <Image
       src={images[index]}
       alt={`Look ${index + 1}`}
       fill
       className="object-center rounded-lg"
      />
     </div>
     <Button onClick={handleNext}> <ArrowForward /> </Button>
    </div>
    <p className="text-justify w-1/2 text-sm">
    Este eBook apresenta uma abordagem prática e direta sobre requisitos de software, dividido em três módulos. No primeiro módulo, você aprenderá sobre os tipos de requisitos, como gerenciar mudanças, evitar o aumento de escopo e entender a relação entre requisitos e design. O segundo módulo foca em capturar as necessidades do cliente de forma eficaz, utilizando casos de uso e ferramentas visuais como wireframes e storyboards. Já o terceiro módulo mostra como adaptar os requisitos às metodologias ágeis, utilizando histórias de usuários, backlog e mapas de histórias para organizar e priorizar as funcionalidades. Um guia essencial para quem deseja desenvolver software realmente alinhado às necessidades do cliente.
    </p>
    <Button variant="contained" href="https://hotmart.com/pt-br/marketplace/produtos/necessidade-do-cliente-e-requisito-de-software/Y98319589B " color="secondary" target="_blank">Compre agora!</Button>
   </Box>
   )}
   {(isMediumScreen || isSmallScreen) && (
    <Box className="flex flex-col items-center  my-5 justify-between w-full h-screen">
    <p className="text-2xl pt-5">eBooks Publicados</p>
    <div className="flex items-center gap-4">
     <Button onClick={handlePrev}> <ArrowBack /> </Button>
     <div className="relative h-48 w-48">
      <Image
       src={images[index]}
       alt={`Look ${index + 1}`}
       fill
       className="object-center rounded-lg"
      />
     </div>
     <Button onClick={handleNext}> <ArrowForward /> </Button>
    </div>
    <p className="text-justify w-4/5 text-sm">
    Este eBook apresenta uma abordagem prática e direta sobre requisitos de software. Um guia essencial para quem deseja desenvolver software realmente alinhado às necessidades do cliente.
    </p>
    <Button variant="contained" href="https://hotmart.com/pt-br/marketplace/produtos/necessidade-do-cliente-e-requisito-de-software/Y98319589B " color="secondary" target="_blank">Compre agora!</Button>
   </Box>
   )}
  </div>
 )
}