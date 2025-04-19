'use client';
import { Box, Button, FormControl, TextField, useMediaQuery, useTheme } from "@mui/material";
import { useState } from "react";

export default function ContentSection() {

 const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const isMediumScreen = useMediaQuery(theme.breakpoints.between('sm', 'md'));
  const isLargeScreen = useMediaQuery(theme.breakpoints.up('md'));

const [nome, setNome] = useState('');
const [sobrenome, setSobrenome] = useState('');
const [email, setEmail] = useState('');
const [assunto, setAssunto] = useState(''); 
const [mensagem, setMensagem] = useState('');

 return (
 <div>
  {isLargeScreen && (
    <Box className="flex flex-col items-center gap-5 justify-center h-screen">
    <p className="text-6xl">Fale conosco</p>
    <FormControl
     className="flex gap-4 mt-3 pl-4"
     component="form"
    >
     <Box className="flex gap-4">
      <TextField
       label="Nome"
       type="text"
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
      type="email"
      placeholder="Email"
      value={email}
      onChange={(ev) => setEmail(ev.target.value)}
     />
     <TextField
      label="Assunto"
      type="text"
      placeholder="Assunto"
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
  )}
  {(isSmallScreen || isMediumScreen) && (
    <Box className="flex flex-col items-center gap-5 justify-center h-screen">
    <p className="text-5xl">Fale conosco</p>
    <FormControl
     className="flex gap-4 w-4/5"
     component="form"
    >
     <Box className="flex gap-4">
      <TextField
       label="Nome"
       type="text"
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
      type="email"
      placeholder="Email"
      value={email}
      onChange={(ev) => setEmail(ev.target.value)}
     />
     <TextField
      label="Assunto"
      type="text"
      placeholder="Assunto"
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
  )}
 </div>
 )
}