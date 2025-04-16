'use client';
import { ArrowBack, ArrowForward } from "@mui/icons-material";
import { Button } from "@mui/material";
import Image from "next/image"
import { useState } from "react";

const images = [
 "/book1.jpg",
 "/book2.jpg",
 "/book3.jpg",
];

export default function CarroselSection() {
 const [index, setIndex] = useState(0);

 const handlePrev = () => {
  setIndex((params) => (params === 0 ? images.length - 1 : params - 1));
 };

 const handleNext = () => {
  setIndex((params) => (params === images.length - 1 ? 0 : params + 1));
 };
 return (
  <div className="flex items-center justify-between w-full h-full">
   <Button onClick={handlePrev} className=""> <ArrowBack /> </Button>
   <Image
    src={images[index]}
    alt={`eBook ${index + 1}`}
    width={500}
    height={500}
    className=""
   />
   <Button onClick={handleNext} className=" "> <ArrowForward /> </Button>
  </div>
 )
}