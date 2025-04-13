import { Instagram } from "@mui/icons-material"
import Image from "next/image"
import Link from "next/link"
export default function FooterSection() {
 return (
  <footer style={{ background: 'linear-gradient(45deg, rgb(46, 229, 242) 50%, rgb(64, 94, 245) 100%)' }} className="flex w-full items-center justify-evenly h-full">
   <Image src="/product_mindset_logo.png" alt="product mindset logo" width={200} height={200} />
   <p className="text-white">© 2025 Product Mindset Instituto. Todos os direitos reservados.</p>
   <span className="flex flex-col text-white gap-4 items-center">
    <p>Midias Sociais</p>
    <div className="flex gap-4 items-center">
     <Link target="_blank" href={'https://api.whatsapp.com/send?phone=5584999999999'}> 
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-tiktok"
      viewBox="0 0 16 16">
       <path d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3z" />
      </svg> 
     </Link>
     <Link target="_blank" href={'https://www.instagram.com/_productmindset'}> <Instagram /> </Link>
    </div>
   </span>
  </footer>
 )
}