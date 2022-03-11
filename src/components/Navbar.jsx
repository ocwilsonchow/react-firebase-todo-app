import React from 'react'
import { Link } from 'react-router-dom'
import { Flex, IconButton, useColorMode, Container } from '@chakra-ui/react'
import { SunIcon, MoonIcon } from '@chakra-ui/icons'

function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <Flex justifyContent="space-between" px={5} py={3}>
      <Flex justifyContent="center" alignItems="center">

        <Container fontWeight="extrabold"><Link to="/todos">Home</Link></Container>
        <Container fontWeight="extrabold"><Link to="/todos">Browse</Link></Container>
        <Container fontWeight="extrabold"><Link to="/todos/new">Create</Link></Container>
        <Container fontWeight="extrabold"><Link to="/todos/550">Show</Link></Container>
      </Flex>
      <IconButton borderRadius="50%" onClick={toggleColorMode}>
        {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
      </IconButton>
    </Flex>
  )
}

export default Navbar
