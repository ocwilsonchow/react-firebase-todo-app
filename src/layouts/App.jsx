import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '@/components/Navbar'
import { ChakraProvider } from '@chakra-ui/react'

function App() {
  return (
    <ChakraProvider>
      <Navbar />
      <Outlet />
    </ChakraProvider>

  )
}

export default App
