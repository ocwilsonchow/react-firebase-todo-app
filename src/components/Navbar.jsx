import React from 'react'
import { Link } from 'react-router-dom'
import { Flex, IconButton, useColorMode } from '@chakra-ui/react'
import { SunIcon, MoonIcon } from '@chakra-ui/icons'

function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <Flex justifyContent="space-between" px={5} py={3}>
      <Flex justifyContent="center" alignItems="center">
        <Link to="/">Home</Link>
        <Link to="/todos">Browse</Link>
        <Link to="/todos/new">Create</Link>
      </Flex>
      <IconButton borderRadius="50%" onClick={toggleColorMode}>
        {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
      </IconButton>
    </Flex>
  )
}

export default Navbar
