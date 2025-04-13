import { Box, Button } from "@mui/material";
import Link from "next/link";

interface MenuItemProps {
  url: string;
  title: string;
  onClick?: () => void;
}
export default function MenuItem({ url, title }: MenuItemProps) {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100px', color: 'white', backgroundColor: 'rgb(46, 229, 242)' }}><Link href={url}>{title}</Link></Box>
  );
}