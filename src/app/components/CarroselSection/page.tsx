'use client';
import { Box, Button } from "@mui/material";

export default function CarroselSection() {
return(
  <Box className="flex flex-col items-center justify-center bg-blue-900 gap-5 w-full h-[500px]">
    <div className="flex flex-col items-center text-white uppercase text-4xl w-full font-bold">
      <p>abra sua mente</p>
      <p>para a tecnologia</p>
    </div>
    <div className="flex flex-col items-center gap-2 text-white font-light">
      <p>Nova forma de encarar o desenvolvimento produtos</p>
      <Button variant="contained">Saiba mais</Button>
    </div>
  </Box>
)
}