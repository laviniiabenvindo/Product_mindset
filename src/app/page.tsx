'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { Instagram } from '@mui/icons-material';
import ArrowBack from '@mui/icons-material/ArrowBack';
import ArrowForward from '@mui/icons-material/ArrowForward';
import { Box, Button, FormControl, TextField } from '@mui/material';
import { useMediaQuery, useTheme } from '@mui/material';
import Books from "./Books/page";
// const theme = useTheme();
// const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
// const isMediumScreen = useMediaQuery(theme.breakpoints.between('sm', 'md'));
// const isLargeScreen = useMediaQuery(theme.breakpoints.up('md'));

const images = ['/book1.jpg', '/book2.jpg', '/book3.jpg'];

const imagesL = [
  '/book-processos-software.jpg',
  '/book-processos-software2.jpg',
];

export default function Home() {
  const [index, setIndex] = useState(0);
  const [index2, setIndex2] = useState(0);
  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [email, setEmail] = useState('');
  const [assunto, setAssunto] = useState('');
  const [mensagem, setMensagem] = useState('');


  const enviarEmail = (e: any) => {
    e.preventDefault();

    const templateParams = {
      from_name: nome,
      from_sobrenome: sobrenome,
      from_email: email,
      subject: assunto,
      message: mensagem,
    };
    if (!nome || !email || !assunto || !mensagem) {
      alert('Preencha todos os campos');
      return;
    } else {
      emailjs
        .send(
          'service_q0xe4sf',
          'template_5l6udjo',
          templateParams,
          'j9dxDN9agJJVCvCum',
        )
        .then((result) => {
          alert('Email enviado com sucesso!');
          console.log('SUCCESS!', result.status, result.text);
          setNome('');
          setSobrenome('');
          setEmail('');
          setAssunto('');
          setMensagem('');
        })
        .catch((error) => {
          console.error('FAILED...', error);
        });
    }
  };

  const handlePrev = () => {
    setIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const handlePrevL = () => {
    setIndex2((params) => (params === 0 ? imagesL.length - 1 : params - 1));
  };

  const handleNextL = () => {
    setIndex2((params) => (params === imagesL.length - 1 ? 0 : params + 1));
  };

  return (
    <div>
      <nav className="flex bg-blue-900 fixed scroll-mt-0 w-full z-50 items-center justify-evenly">
        <Link
          className="cursor-pointer flex justify-center items-center w-full gap-2"
          href={'/'}
        >
          <Image
            src="/product_mindset_logo.png"
            alt="product mindset logo"
            className="pt-2"
            width={150}
            height={150}
          />
          <p className="font-bold text-2xl text-white uppercase">
            Product Mindset
          </p>
        </Link>
        <div className="flex justify-center w-full items-center gap-2">
          <ul className="flex gap-10 text-white">
            <li className="cursor-pointer">
              <Link href={'#/about'}>Sobre</Link>
            </li>
            <li className="cursor-pointer">
              <Link href={'#/books'}>Livros</Link>
            </li>
            <li className="cursor-pointer">
              <Link href={'#/contact'}>Contato</Link>
            </li>
          </ul>
        </div>
      </nav>
      <header className="flex flex-col items-center justify-center bg-blue-900 gap-5 w-full h-[500px]">
        <div className="flex flex-col items-center text-white uppercase text-4xl w-full font-bold">
          <p>abra sua mente</p>
          <p>para a tecnologia</p>
        </div>
        <div className="flex flex-col items-center gap-2 text-white font-light">
          <p>Nova forma de encarar o desenvolvimento de produtos</p>
          <Button variant="contained">
            <Link href={'/About'}>Saiba mais</Link>
          </Button>
        </div>
      </header>
      <main className="flex flex-col items-center gap-8 justify-between pb-5">
        <div className="flex items-center p-10 w-full flex-col justify-center gap-5 h-full">
          <p className="text-4xl uppercase">
            Bem-vindo ao Product Mindset INSTITUTO!
          </p>
          <p id="/books" className="text-xl border-l-8 border-l-sky-800 pl-5">
            Abra sua mente para o mundo da tecnologia! <br /> Nova forma de
            enxergar o desenvolvimento de produtos.
          </p>
        </div>
        <Box className="flex flex-col items-center gap-4">
          <p className="text-3xl">Exemplares Publicados</p>
          <div className="flex items-center">
            <Box className="flex flex-col h-full w-1/2 items-center gap-4">
              <div className="flex items-center gap-4">
                <Button onClick={handlePrev}>
                  <ArrowBack />
                </Button>
                <div className="relative w-64 h-64">
                  <Image
                    src={images[index]}
                    alt={`Look ${index + 1}`}
                    fill
                    className="object-center rounded-lg"
                  />
                </div>
                <Button onClick={handleNext}>
                  <ArrowForward />
                </Button>
              </div>
              <p className="w-2/5 text-justify text-sm">
                Este eBook apresenta uma abordagem prática e direta sobre
                requisitos de software. Um guia essencial para quem deseja
                desenvolver software realmente alinhado às
                necessidades do cliente.
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
            <Box className="flex flex-col items-center  gap-5 justify-between h-full w-1/2">
              <div className="flex items-center gap-4">
                <Button onClick={handlePrevL}>
                  <ArrowBack />
                </Button>
                <div className="relative h-64 w-64">
                  <Image
                    src={imagesL[index2]}
                    alt={`Look ${index + 1}`}
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
                <Button onClick={handleNextL}>
                  <ArrowForward />
                </Button>
              </div>
              <p className="text-justify w-2/5 text-sm">
                Aprenda os fundamentos dos processos de software com foco em
                eficiência e inovação. Explore modelos tradicionais e práticas
                ágeis modernas do setor. Ideal para quem quer criar produtos de
                qualidade e se destacar na tecnologia.
              </p>
              <div className="flex gap-2 w-1/2">
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
                   id="/about"
                >
                  Livro Físico!
                </Button>
              </div>
            </Box>
          </div>
          <Button variant="contained">
            <Link href={'/Books'}>Ir para a Página de Livros</Link>
          </Button>
        </Box>
      </main>
      <section className="flex p-10">
        <section
          className="flex flex-col items-center gap-10 justify-between h-full w-full"
        >
          <p className="text-3xl">Sobre o instituto</p>
          <Box className="flex flex-col items-center gap-10 justify-center">
            <Box className="flex flex-col items-center justify-center">
              <p className="text-justify w-1/2">
                O <strong>Product Mindset Instituto</strong> nasce com a missão
                de transformar a forma como empresas e profissionais enxergam o
                desenvolvimento de produtos, promovendo uma mentalidade voltada
                para inovação, eficiência e impacto real no mercado. Com uma
                abordagem fundamentada em metodologias ágeis, design thinking e
                estratégias de gestão de produtos, o instituto capacita líderes,
                times e organizações para alcançar excelência na entrega de
                valor.
              </p>
            </Box>
            <Button  id="/contact" variant="contained">
               <Link href={'/About'}>
                Conhecer o instituto
              </Link>
            </Button>
          </Box>
        </section>
      </section>
      <article>
        <Box
         
          className="flex flex-col items-center gap-5 justify-center w-full h-screen"
        >
          <p className="text-6xl">Fale conosco</p>
          <FormControl
            onSubmit={enviarEmail}
            className="flex gap-4 mt-3 pl-4"
            component="form"
          >
            <Box className="flex gap-4">
              <TextField
                label="Nome"
                type="text"
                required
                inputProps={{
                  pattern: '[A-Za-z ]{3,}',
                  maxLength: 10,
                }}
                placeholder="Nome"
                value={nome}
                onChange={(ev) => setNome(ev.target.value)}
              />
              <TextField
                label="Sobrenome"
                placeholder="Sobrenome"
                value={sobrenome}
                onChange={(ev) => setSobrenome(ev.target.value)}
              />
            </Box>
            <TextField
              label="Email"
              required
              type="email"
              placeholder="Email"
              value={email}
              inputProps={{
                maxLength: 30,
              }}
              onChange={(ev) => setEmail(ev.target.value)}
            />
            <TextField
              label="Assunto"
              type="text"
              placeholder="Assunto"
              required
              value={assunto}
              onChange={(ev) => setAssunto(ev.target.value)}
            />
            <TextField
              sx={{
                '& .MuiInputBase-input': {
                  height: '100px',
                  alignItems: 'start',
                  display: 'flex',
                },
              }}
              type="text"
              value={mensagem}
              label="Mensagem"
              required
              placeholder="Escreva a mensagem"
              onChange={(ev) => setMensagem(ev.target.value)}
            />
            <Box className="flex justify-center">
              <Button
                className="h-14 bg-yellow-500 hover:bg-yellow-500"
                variant="contained"
                type="submit"
              >
                Enviar dados
              </Button>
            </Box>
          </FormControl>
        </Box>
      </article>
      <footer className="flex bg-blue-900 w-full items-center justify-evenly h-full">
        <Image
          src="/product_mindset_logo.png"
          alt="product mindset logo"
          width={200}
          height={200}
        />
        <p className="text-white">
          © 2025 Product Mindset Instituto. Todos os direitos reservados.
        </p>
        <span className="flex flex-col text-white gap-4 items-center">
          <p>Midias Sociais</p>
          <div className="flex gap-4 items-center">
            <Link
              target="_blank"
              href={'https://www.tiktok.com/@product.mindset'}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-tiktok"
                viewBox="0 0 16 16"
              >
                <path d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3z" />
              </svg>
            </Link>
            <Link
              target="_blank"
              href={'https://www.instagram.com/_productmindset'}
            >
              <Instagram />
            </Link>
          </div>
        </span>
      </footer>
    </div>
  );
}
