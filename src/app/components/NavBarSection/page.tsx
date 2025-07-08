'use client';
import { useState } from "react";

import ContentSection from "../ContentSection/home";
import AboutSection from '../ContentSection/about';
import BooksSection from '../ContentSection/books';
import ContactSection from '../ContentSection/contact';
import { Box, Button, useMediaQuery, useTheme } from "@mui/material";

export default function NavBarSection() {

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const isMediumScreen = useMediaQuery(theme.breakpoints.between('sm', 'md'));
  const isLargeScreen = useMediaQuery(theme.breakpoints.up('md'));

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
    <div>
      {isLargeScreen && (
        <section className="flex flex-col w-full h-full">
          {/* <nav className="flex items-center justify-center w-full">
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100px', color: 'white', backgroundColor: 'rgb(46, 229, 242)', ':hover': { backgroundColor: 'rgb(64, 94, 245)', color: 'white', transition: 'linear 0.5s' } }}><button className="text-white" onClick={handleAbout}>Sobre nós</button></Box>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100px', color: 'white', backgroundColor: 'rgb(46, 229, 242)', ':hover': { backgroundColor: 'rgb(64, 94, 245)', color: 'white', transition: 'linear 0.5s' } }}><button className="text-white" onClick={handlebooks}>Livros</button></Box>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100px', color: 'white', backgroundColor: 'rgb(46, 229, 242)', ':hover': { backgroundColor: 'rgb(64, 94, 245)', color: 'white', transition: 'linear 0.5s' } }}><button className="text-white" onClick={handleContact}>Contatos</button></Box>
          </nav> */}
          <div>
            {showHome && <ContentSection />}
            {showAbout && <AboutSection />}
            {showBooks && <BooksSection />}
            {showContact && <ContactSection />}
          </div>
        </section>
      )}
      {(isSmallScreen || isMediumScreen) && (
          <section className="flex flex-col w-full h-full">
          <nav className="flex items-center justify-center w-full">
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100px', color: 'white', backgroundColor: 'rgb(46, 229, 242)', ':hover': { backgroundColor: 'rgb(64, 94, 245)', color: 'white', transition: 'linear 0.5s' } }}><button className="text-white text-sm" onClick={handleAbout}>Sobre nós</button></Box>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100px', color: 'white', backgroundColor: 'rgb(46, 229, 242)', ':hover': { backgroundColor: 'rgb(64, 94, 245)', color: 'white', transition: 'linear 0.5s' } }}><button className="text-white text-sm" onClick={handlebooks}>Livros</button></Box>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100px', color: 'white', backgroundColor: 'rgb(46, 229, 242)', ':hover': { backgroundColor: 'rgb(64, 94, 245)', color: 'white', transition: 'linear 0.5s' } }}><button className="text-white text-sm" onClick={handleContact}>Contatos</button></Box>
          </nav>
          <div>
            {showHome && <ContentSection />}
            {showAbout && <AboutSection />}
            {showBooks && <BooksSection />}
            {showContact && <ContactSection />}
          </div>
        </section>
    )}
    </div>
  )
} 