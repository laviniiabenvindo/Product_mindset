'use client';
import { Box, Button, useMediaQuery, useTheme } from "@mui/material";
import ArrowBack from "@mui/icons-material/ArrowBack";
import ArrowForward from "@mui/icons-material/ArrowForward";
import Image from "next/image";
import { useState } from 'react';


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
    setIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
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
        <main className="flex flex-col items-center gap-8 justify-between pb-5">
          <Box className="flex items-center w-full justify-center">
            <div className="flex flex-col justify-center gap-5 h-full">
              <p className="text-4xl uppercase">Bem-vindo ao Product Mindset INSTITUTO!</p>
              <p className="text-xl border-l-8 border-l-sky-800 pl-5">Abra sua mente para o mundo da tecnologia! <br /> Nova forma de enxergar o desenvolvimento de produtos.</p>
            </div>
            <Box>
              <Image src="/imagen_home.png" alt="product mindset logo" width={400} height={500} />
            </Box>
          </Box>
          <Box className="flex flex-col items-center gap-4">
            <p className="text-2xl">eBooks/Livros Publicados</p>
            <div className="flex items-center gap-4">
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
                <p className="w-2/5 text-justify text-sm">
                  Este eBook apresenta uma abordagem prática e direta sobre requisitos de software. Um guia essencial para quem deseja desenvolver software realmente alinhado às necessidades do cliente.
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
          </Box>
        </main>
      )}
      {(isSmallScreen || isMediumScreen) && (
        <main className="flex flex-col items-center gap-8 justify-between w-full pb-5">
          <Box className="flex items-center w-full justify-center">
            <div className="flex flex-col items-center mt-5 justify-center gap-4 h-full">
              <Box>
                <p className="text-lg font-light">ÚLTIMO LANÇAMENTO!</p>
              </Box>
              <p className="text-base uppercase">Bem-vindo ao Product Mindset INSTITUTO!</p>
              <Box>
                <Image src="/imagen_home.png" alt="product mindset logo" width={250} height={250} />
              </Box>
              <p className="text-base mx-5 border-l-8 border-l-sky-800 pl-5">Abra sua mente para o mundo da tecnologia! Nova forma de enxergar o desenvolvimento de produtos.</p>
            </div>
          </Box>
          <Box className="flex flex-col items-center gap-4">
            <p>eBooks Publicados</p>
            <Box className="flex flex-col items-center gap-4">
              <div className="flex items-center gap-4">
                <Button onClick={handlePrev}> <ArrowBack /> </Button>
                <div className="relative h-32 w-32">
                  <Image
                    src={images[index]}
                    alt={`Look ${index + 1}`}
                    fill
                    className="object-center rounded-lg"
                  />
                </div>
                <Button onClick={handleNext}> <ArrowForward /> </Button>
              </div>
              <p className="w-4/5 text-justify text-sm">
                Este eBook apresenta uma abordagem prática e direta sobre requisitos de software. Um guia essencial para quem deseja desenvolver software realmente alinhado às necessidades do cliente.
              </p>
              <Button variant="contained" href="https://hotmart.com/pt-br/marketplace/produtos/necessidade-do-cliente-e-requisito-de-software/Y98319589B " color="secondary" target="_blank">Compre agora!</Button>
            </Box>
            <Box className="flex flex-col items-center my-5 gap-5 justify-between">
              <div className="flex items-center gap-4">
                <Button onClick={handlePrev2}> <ArrowBack /> </Button>
                <div className="relative h-32 w-32">
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
          </Box>
        </main>
      )}
    </div>
  )
}
