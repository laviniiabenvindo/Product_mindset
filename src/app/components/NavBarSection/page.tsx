'use client';
import { useState } from "react";
import MenuItem from "./MenuItem";

import ContentSection from "../ContentSection/home";

const itemMenu = [
 {
  url: "/about",
  title: "Sobre nós"
 },
 {
  url: "/books",
  title: "Livros"
 },
 {
  url: "/contact",
  title: "Contatos"
 }
]

export default function NavBarSection() {

 const [showHome, setShowHome] = useState(true);
 const [showAbout, setShowAbout] = useState(false);
 const [showBooks, setShowBooks] = useState(false);
 const [showContact, setShowContact] = useState(false);

 const handleHome = () =>{
  setShowHome(true);
  setShowAbout(false);
  setShowBooks(false);
  setShowContact(false);
 }

 const handleAbout = () =>{
  setShowHome(false);
  setShowAbout(true);
  setShowBooks(false);
  setShowContact(false);
 }

 const handlebooks = () =>{
  setShowHome(false);
  setShowAbout(false);
  setShowBooks(true);
  setShowContact(false);
 }
 const handleContact = () =>{
  setShowHome(false);
  setShowAbout(false);
  setShowBooks(false);
  setShowContact(true);
 }
 return (
  <section className="flex flex-col w-screen h-full">
   <nav className="flex items-center justify-center w-full">
    {itemMenu.map(({ url, title }, index) => (
     <MenuItem key={index} url={url} title={title} />
    ))}
   </nav>
  </section>
 )
} 