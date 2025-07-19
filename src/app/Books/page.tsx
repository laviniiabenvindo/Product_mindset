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

const images2 = [
  "/book-processos-software.jpg",
  "/book-processos-software2.jpg",
];


export default function ContentSection() {

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const isMediumScreen = useMediaQuery(theme.breakpoints.between('sm', 'md'));
  const isLargeScreen = useMediaQuery(theme.breakpoints.up('md'));

  const [index, setIndex] = useState(0);
  const [index2, setIndex2] = useState(0);

  const handlePrev = () => {
    setIndex((params) => (params === 0 ? images.length - 1 : params - 1));
  };

  const handleNext = () => {
    setIndex((params) => (params === images.length - 1 ? 0 : params + 1));
  };
  const handlePrev2 = () => {
    setIndex2((params) => (params === 0 ? images2.length - 1 : params - 1));
  };

  const handleNext2 = () => {
    setIndex2((params) => (params === images2.length - 1 ? 0 : params + 1));
  };
  return (
    <div>
      {isLargeScreen && (
        <div className="flex flex-col items-center justify-center w-full h-full">
          <p className="text-2xl pt-5">eBooks/Livros Publicados</p>
          <div className="flex">
            <Box className="flex flex-col items-center my-5 gap-5 justify-between">
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
              <p className="text-justify w-2/5 text-sm">
                eBook prático sobre requisitos de software em 3 módulos:
                tipos de requisitos, captação das necessidades e metodologias ágeis.
                Ideal para quem quer desenvolver software focado no cliente.
              </p>
              <Button variant="contained" href="https://hotmart.com/pt-br/marketplace/produtos/necessidade-do-cliente-e-requisito-de-software/Y98319589B " color="secondary" target="_blank">Compre agora!</Button>
            </Box>
            <Box className="flex flex-col items-center my-5 gap-5 justify-between">
              <div className="flex items-center gap-4">
                <Button onClick={handlePrev2}> <ArrowBack /> </Button>
                <div className="relative h-64 w-64">
                  <Image
                    src={images2[index2]}
                    alt={`Look ${index + 1}`}
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
                <Button onClick={handleNext2}> <ArrowForward /> </Button>
              </div>
              <p className="text-justify w-2/5 text-sm">
                Aprenda os fundamentos dos processos de software com foco em eficiência e inovação.
                Explore modelos tradicionais e práticas ágeis modernas do setor.
                Ideal para quem quer criar produtos de qualidade e se destacar na tecnologia.

              </p>
              <div className="flex gap-2 w-2/5">
                <Button className="w-full" variant="contained" href="https://go.hotmart.com/P99457867J?dp=1 " color="secondary" target="_blank">Ebook!</Button>
                <Button className="w-full" variant="contained" href="https://go.hotmart.com/I99540919G?dp=1" color="secondary" target="_blank">Livro Físico!</Button>
              </div>
            </Box>
          </div>
        </div>
      )}
      {(isMediumScreen || isSmallScreen) && (
        <div className="flex flex-col items-center">
          <p className="text-2xl pt-5">eBooks/Livros Publicados</p>
          <Box className="flex flex-col items-center my-5 gap-5 justify-between">
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
            <p className="text-justify w-4/5 text-sm">
              eBook prático sobre requisitos de software em 3 módulos:
              tipos de requisitos, captação das necessidades e metodologias ágeis.
              Ideal para quem quer desenvolver software focado no cliente.
            </p>
            <Button variant="contained" href="https://hotmart.com/pt-br/marketplace/produtos/necessidade-do-cliente-e-requisito-de-software/Y98319589B " color="secondary" target="_blank">Compre agora!</Button>
          </Box>
          <Box className="flex flex-col items-center my-5 gap-5 justify-between">
            <div className="flex items-center gap-4">
              <Button onClick={handlePrev2}> <ArrowBack /> </Button>
              <div className="relative h-64 w-64">
                <Image
                  src={images2[index2]}
                  alt={`Look ${index + 1}`}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <Button onClick={handleNext2}> <ArrowForward /> </Button>
            </div>
            <p className="text-justify w-4/5 text-sm">
              Aprenda os fundamentos dos processos de software com foco em eficiência e inovação.
              Explore modelos tradicionais e práticas ágeis modernas do setor.
              Ideal para quem quer criar produtos de qualidade e se destacar na tecnologia.

            </p>
            <div className="flex gap-2 w-4/5">
              <Button className="w-full" variant="contained" href="https://go.hotmart.com/P99457867J?dp=1 " color="secondary" target="_blank">Ebook!</Button>
              <Button className="w-full" variant="contained" href="https://go.hotmart.com/I99540919G?dp=1" color="secondary" target="_blank">Livro Físico!</Button>
            </div>
          </Box>
        </div>
      )}
    </div>
  )
}