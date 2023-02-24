"use client"
import NavBar from '@/components/NavBar'
import {  ChakraProvider, GlobalStyle, LightMode } from '@chakra-ui/react'
import './globals.css'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head > 
      </head >
      <body>
        <ChakraProvider>         
        <NavBar/>
       
          {children}
        
        </ChakraProvider>
        </body>
    </html>
  )
}
