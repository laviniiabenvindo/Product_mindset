import { Box, Button, Menu, Typography } from "@mui/material"
import Image from "next/image"
import MenuItem from "./MenuItem"

const itemMenu = [
 {
  url: "/",
  title: "About"
 },
 {
  url: "/",
  title: "Books"
 },
 {
  url: "/",
  title: "Contact"
 }
]

export default function NavBarSection() {
 return (
  <section className="flex flex-col w-screen h-full">
   <nav className="flex items-center justify-center w-full">
    {itemMenu.map(({ url, title }, index) => (
     <MenuItem key={index} url={url} title={title} />
    ))}
   </nav>
   <main className="w-screen h-full">
    <Box className="flex items-center justify-center w-full h-screen">
     <div className="flex flex-col justify-center gap-5 h-full">
      <Box>
       <p className="text-4xl font-light">ÚLTIMO LANÇAMENTO!</p>
      </Box>
      <p className="text-2xl uppercase">Bem-vindo ao Product Mindset INSTITUTO!</p>
      <p className="text-xl border-l-8 border-l-sky-800 pl-5">Abra sua mente para o mundo da tecnologia! <br /> Nova forma de enxergar o desenvolvimento de produtos.</p>
     </div>
     <Box>
      <Image src="/imagen_home.png" alt="product mindset logo" width={500} height={500} />
     </Box>
    </Box>
   </main>
  </section>
 )
} 