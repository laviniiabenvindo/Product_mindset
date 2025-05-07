'use client';
import { Box, Button, TextField, useMediaQuery, useTheme } from '@mui/material';
import { Search } from '@mui/icons-material';
import Image from 'next/image';
import Link from 'next/link';

export default function HeaderSection() {

 const theme = useTheme();
 const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
 const isMediumScreen = useMediaQuery(theme.breakpoints.between('sm', 'md'));
 const isLargeScreen = useMediaQuery(theme.breakpoints.up('md'));

 return (
  <div>
   {isLargeScreen && (
    <header style={{ background: 'linear-gradient(45deg, rgb(46, 229, 242) 50%, rgb(64, 94, 245) 100%)' }} className="flex w-full h-full items-center justify-evenly">
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
     <div className="flex justify-center w-full items-center gap-2">
      <TextField sx={{
       backgroundColor: "white",
       borderRadius: "8px",
       "& .MuiOutlinedInput-root": {
        borderRadius: "8px",
       },
      }} placeholder="Search"></TextField>
      <Button><Search className='text-white'></Search></Button>
     </div>
    </header>
   )
   }
   {(isMediumScreen || isSmallScreen) && (
    <header style={{ background: 'linear-gradient(45deg, rgb(46, 229, 242) 50%, rgb(64, 94, 245) 100%)' }} className="flex w-full h-full items-center">
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
     </Box>
     <div className="flex justify-center w-full items-center gap-2">
      <TextField sx={{
       backgroundColor: "white",
       width: "100px",
       height: "30px",
       borderRadius: "8px",
       "& .MuiOutlinedInput-root": {
        borderRadius: "8px",
        width: "100px",
        height: "30px",
       },
      }} placeholder="Search"></TextField>
      <Button><Search className='text-white'></Search></Button>
     </div>
    </header>
   )}
  </div>
 );
}
