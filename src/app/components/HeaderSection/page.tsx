import { Box, TextField } from '@mui/material';
import { Search } from '@mui/icons-material';
import Image from 'next/image';
import Link from 'next/link';

export default function HeaderSection() {
 return (
  <header style={{ background: 'linear-gradient(45deg, rgb(46, 229, 242) 50%, rgb(64, 94, 245) 100%)' }} className="flex w-full items-center justify-evenly">
   <Box className="flex justify-center w-full items-center gap-2">
    <Link href={'/'}>
     <Image
      src="/product_mindset_logo.png"
      alt="product mindset logo"
      className='cursor-pointer pt-2'
      width={150}
      height={150}
     />
    </Link>
    <p className='font-bold text-2xl text-white uppercase'>Product Mindset</p>
   </Box>
   <Box className="flex justify-center w-full items-center gap-2">
    <TextField sx={{
     backgroundColor: "white",
     borderRadius: "8px",
     "& .MuiOutlinedInput-root": {
      borderRadius: "8px",
     },
    }} placeholder="Search"></TextField>
    <Search className='text-white'></Search>
   </Box>
  </header>
 );
}
