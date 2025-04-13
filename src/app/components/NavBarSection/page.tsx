'use client';
import { useState } from "react";

import ContentSection from "../ContentSection/home";
import AboutSection from '../ContentSection/about';
import BooksSection from '../ContentSection/books';
import ContactSection from '../ContentSection/contact';
import { Box, Button } from "@mui/material";

export default function NavBarSection() {

  const [showHome, setShowHome] = useState(true);
  const [showAbout, setShowAbout] = useState(false);
  const [showBooks, setShowBooks] = useState(false);
  const [showContact, setShowContact] = useState(false);


  const handleAbout = () => {
    setShowHome(false);
    setShowAbout(true);
    setShowBooks(false);
    setShowContact(false);
  }

  const handlebooks = () => {
    setShowHome(false);
    setShowAbout(false);
    setShowBooks(true);
    setShowContact(false);
  }
  const handleContact = () => {
    setShowHome(false);
    setShowAbout(false);
    setShowBooks(false);
    setShowContact(true);
  }
  return (
    <section className="flex flex-col w-full h-full">
      <nav className="flex items-center justify-center w-full">
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100px', color: 'white', backgroundColor: 'rgb(46, 229, 242)', ':hover': { backgroundColor: 'rgb(64, 94, 245)', color: 'white', transition: 'linear 0.5s' } }}><Button className="text-white" onClick={handleAbout}>Sobre nós</Button></Box>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100px', color: 'white', backgroundColor: 'rgb(46, 229, 242)', ':hover': { backgroundColor: 'rgb(64, 94, 245)', color: 'white', transition: 'linear 0.5s' } }}><Button className="text-white" onClick={handlebooks}>Livros</Button></Box>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100px', color: 'white', backgroundColor: 'rgb(46, 229, 242)', ':hover': { backgroundColor: 'rgb(64, 94, 245)', color: 'white', transition: 'linear 0.5s' } }}><Button className="text-white" onClick={handleContact}>Contatos</Button></Box>
      </nav>
      <div>
        {showHome && <ContentSection />}
        {showAbout && <AboutSection />}
        {showBooks && <BooksSection />}
        {showContact && <ContactSection />}
      </div>
    </section>
  )
} 