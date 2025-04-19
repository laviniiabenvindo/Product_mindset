'use client';
import { ArrowBack, ArrowForward } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import Image from "next/image";
import { useState } from "react";

const images = [
  "/book1.jpg",
  "/book2.jpg",
  "/book3.jpg",
];

export default function CarroselSection() {
  const [index, setIndex] = useState(0);

  const handlePrev = () => {
    setIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative w-full h-[500px] overflow-hidden">
      {/* Imagem ocupando toda a largura e altura */}
      <Image
        src={images[index]}
        alt={`eBook ${index + 1}`}
        fill
        className="object-cover"
        priority
      />

      {/* Botão esquerdo */}
      <IconButton
        onClick={handlePrev}
        className="!absolute top-1/2 left-4 -translate-y-1/2 z-10 bg-white/70 hover:bg-white"
      >
        <ArrowBack />
      </IconButton>

      {/* Botão direito */}
      <IconButton
        onClick={handleNext}
        className="!absolute top-1/2 right-4 -translate-y-1/2 z-10 bg-white/70 hover:bg-white"
      >
        <ArrowForward />
      </IconButton>
    </div>
  );
}

// 'use client';
// import { ArrowBack, ArrowForward } from "@mui/icons-material";
// import { Button } from "@mui/material";
// import Image from "next/image"
// import { useState } from "react";

// const images = [
//  "/book1.jpg",
//  "/book2.jpg",
//  "/book3.jpg",
// ];

// export default function CarroselSection() {
//  const [index, setIndex] = useState(0);

//  const handlePrev = () => {
//   setIndex((params) => (params === 0 ? images.length - 1 : params - 1));
//  };

//  const handleNext = () => {
//   setIndex((params) => (params === images.length - 1 ? 0 : params + 1));
//  };
//  return (
//   <div className="flex items-center justify-between w-full h-full">
//    <Button onClick={handlePrev} className=""> <ArrowBack /> </Button>
//    <Image
//     src={images[index]}
//     alt={`eBook ${index + 1}`}
//     width={500}
//     height={500}
//     className=""
//    />
//    <Button onClick={handleNext} className=" "> <ArrowForward /> </Button>
//   </div>
//  )
// }