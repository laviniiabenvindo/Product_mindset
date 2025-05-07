'use client';
import { Instagram } from "@mui/icons-material"
import { useMediaQuery, useTheme } from "@mui/material";
import Image from "next/image"
import Link from "next/link"

export default function FooterSection() {
 const theme = useTheme();
 const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
 const isMediumScreen = useMediaQuery(theme.breakpoints.between('sm', 'md'));
 const isLargeScreen = useMediaQuery(theme.breakpoints.up('md'));
 return (
  <div>
   {isLargeScreen && (
    <footer style={{ background: 'linear-gradient(45deg, rgb(46, 229, 242) 50%, rgb(64, 94, 245) 100%)' }} className="flex w-full items-center justify-evenly h-full">
     <Image src="/product_mindset_logo.png" alt="product mindset logo" width={200} height={200} />
     <p className="text-white">© 2025 Product Mindset Instituto. Todos os direitos reservados.</p>
     <span className="flex flex-col text-white gap-4 items-center">
      <p>Midias Sociais</p>
      <div className="flex gap-4 items-center">
       <Link target="_blank" href={'https://www.tiktok.com/@product.mindset'}>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-tiktok"
         viewBox="0 0 16 16">
         <path d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3z" />
        </svg>
       </Link>
       <Link target="_blank" href={'https://www.instagram.com/_productmindset'}> <Instagram /> </Link>
      </div>
     </span>
    </footer>
   )}
   {(isSmallScreen || isMediumScreen) && (
    <footer style={{ background: 'linear-gradient(45deg, rgb(46, 229, 242) 50%, rgb(64, 94, 245) 100%)' }} className="flex flex-col w-full items-center gap-2 justify-evenly h-full">
     <Image src="/product_mindset_logo.png" alt="product mindset logo" width={150} height={150} />
     <p className="text-white text-[11px]">© 2025 Product Mindset Instituto. Todos os direitos reservados.</p>
     <span className="flex flex-col text-white gap-2 mb-3 items-center">
      <p className="text-sm">Midias Sociais</p>
      <div className="flex gap-4 items-center">
       <Link target="_blank" href={'https://www.tiktok.com/@product.mindset'}>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-tiktok"
         viewBox="0 0 16 16">
         <path d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3z" />
        </svg>
       </Link>
       <Link target="_blank" href={'https://www.instagram.com/_productmindset'}> <Instagram /> </Link>
      </div>
     </span>
    </footer>
   )}
  </div>
 )
}