'use client';
import { ArrowBack, ArrowForward } from '@mui/icons-material';
import { Box, Button, Link, useMediaQuery, useTheme } from '@mui/material';
import { useState } from 'react';
import Image from 'next/image';
const images = ['/book1.jpg', '/book2.jpg', '/book3.jpg'];

const images2 = [
  '/book-processos-software.jpg',
  '/book-processos-software2.jpg',
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
      <Box>
        {isLargeScreen && (
          <header className="flex flex-col items-center justify-center bg-blue-900 gap-5 w-full h-[500px]">
            <div className="flex flex-col items-center text-white uppercase text-4xl w-full font-bold">
              <p>abra sua mente</p>
              <p>para a tecnologia</p>
            </div>
            <div className="flex flex-col items-center gap-2 text-white font-light">
              <p>Nova forma de encarar o desenvolvimento de produtos</p>
              <Button variant="contained">
                <Link  sx={{ color: 'white', textDecoration: 'none' }}  href={'/'}>Voltar </Link>
              </Button>
            </div>
          </header>
        )}
        {(isMediumScreen || isSmallScreen) && (
          <header className="flex flex-col items-center justify-center bg-blue-900 gap-2 w-full h-[400px]">
            <div className="flex flex-col items-center text-white uppercase text-xl w-full font-bold">
              <p>abra sua mente</p>
              <p>para a tecnologia</p>
            </div>
            <div className="flex flex-col items-center gap-5 text-white w-[280px] text-center  text-sm font-light">
              <p>Nova forma de encarar o desenvolvimento de produtos</p>
              <Button variant="contained">
                <Link sx={{ color: 'white', textDecoration: 'none' }} href={'/'}>Voltar </Link>
              </Button>
            </div>
          </header>
        )}
      </Box>
      {isLargeScreen && (
        <div className="flex flex-col items-center justify-center w-full h-full">
          <p className="text-2xl pt-5">Exemplares Publicados</p>
          <div className="flex">
            <Box className="flex flex-col items-center my-5 gap-5 justify-between">
              <div className="flex items-center gap-4">
                <Button onClick={handlePrev}>
                  {' '}
                  <ArrowBack />{' '}
                </Button>
                <div className="relative h-64 w-64">
                  <Image
                    src={images[index]}
                    alt={`Look ${index + 1}`}
                    fill
                    className="object-center rounded-lg"
                  />
                </div>
                <Button onClick={handleNext}>
                  {' '}
                  <ArrowForward />{' '}
                </Button>
              </div>
              <p className="text-justify w-2/5 text-sm">
                eBook prático sobre requisitos de software em 3 módulos: tipos
                de requisitos, captação das necessidades e metodologias ágeis.
                Ideal para quem quer desenvolver software focado no cliente.
              </p>
              <Button
                variant="contained"
                href="https://hotmart.com/pt-br/marketplace/produtos/necessidade-do-cliente-e-requisito-de-software/Y98319589B "
                color="primary"
                target="_blank"
              >
                Compre agora!
              </Button>
            </Box>
            <Box className="flex flex-col items-center my-5 gap-5 justify-between">
              <div className="flex items-center gap-4">
                <Button onClick={handlePrev2}>
                  {' '}
                  <ArrowBack />{' '}
                </Button>
                <div className="relative h-64 w-64">
                  <Image
                    src={images2[index2]}
                    alt={`Look ${index + 1}`}
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
                <Button onClick={handleNext2}>
                  {' '}
                  <ArrowForward />{' '}
                </Button>
              </div>
              <p className="text-justify w-2/5 text-sm">
                Aprenda os fundamentos dos processos de software com foco em
                eficiência e inovação. Explore modelos tradicionais e práticas
                ágeis modernas do setor. Ideal para quem quer criar produtos de
                qualidade e se destacar na tecnologia.
              </p>
              <div className="flex gap-2 w-2/5">
                <Button
                  className="w-full"
                  variant="contained"
                  href="https://go.hotmart.com/P99457867J?dp=1 "
                  color="primary"
                  target="_blank"
                >
                  Ebook!
                </Button>
                <Button
                  className="w-full"
                  variant="contained"
                  href="https://go.hotmart.com/P100542343K?dp=1"
                  color="primary"
                  target="_blank"
                >
                  Livro Físico!
                </Button>
              </div>
            </Box>
          </div>
        </div>
      )}
      {(isMediumScreen || isSmallScreen) && (
        <div className="flex flex-col items-center">
          <p className="text-2xl pt-5">Exemplares Publicados</p>
          <Box className="flex flex-col items-center my-5 gap-5 justify-between">
            <div className="flex items-center gap-4">
              <Button onClick={handlePrev}>
                {' '}
                <ArrowBack />{' '}
              </Button>
              <div className="relative h-40 w-40">
                <Image
                  src={images[index]}
                  alt={`Look ${index + 1}`}
                  fill
                  className="object-center rounded-lg"
                />
              </div>
              <Button onClick={handleNext}>
                {' '}
                <ArrowForward />{' '}
              </Button>
            </div>
            <p className="text-justify w-4/5 text-sm">
              eBook prático sobre requisitos de software em 3 módulos: tipos de
              requisitos, captação das necessidades e metodologias ágeis. Ideal
              para quem quer desenvolver software focado no cliente.
            </p>
            <Button
              variant="contained"
              href="https://hotmart.com/pt-br/marketplace/produtos/necessidade-do-cliente-e-requisito-de-software/Y98319589B "
              color="primary"
              target="_blank"
            >
              Compre agora!
            </Button>
          </Box>
          <Box className="flex flex-col items-center my-5 gap-5 justify-between">
            <div className="flex items-center gap-4">
              <Button onClick={handlePrev2}>
                {' '}
                <ArrowBack />{' '}
              </Button>
              <div className="relative h-40 w-40">
                <Image
                  src={images2[index2]}
                  alt={`Look ${index + 1}`}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <Button onClick={handleNext2}>
                {' '}
                <ArrowForward />{' '}
              </Button>
            </div>
            <p className="text-justify w-4/5 text-sm">
              Aprenda os fundamentos dos processos de software com foco em
              eficiência e inovação. Explore modelos tradicionais e práticas
              ágeis modernas do setor. Ideal para quem quer criar produtos de
              qualidade e se destacar na tecnologia.
            </p>
            <div className="flex gap-2 w-4/5">
              <Button
                className="w-full"
                variant="contained"
                href="https://go.hotmart.com/P99457867J?dp=1 "
                color="primary"
                target="_blank"
              >
                Ebook!
              </Button>
              <Button
                className="w-full"
                variant="contained"
                href="https://go.hotmart.com/P100542343K?dp=1
"
                color="primary"
                target="_blank"
              >
                Livro Físico!
              </Button>
            </div>
          </Box>
        </div>
      )}
    </div>
  );
}
