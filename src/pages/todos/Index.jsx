import React, { useEffect } from 'react'
import { Flex, Center, VStack, Text, Checkbox, Badge, useColorModeValue, useDisclosure, IconButton, Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Box,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton
} from '@chakra-ui/react'
import { AddIcon, TriangleDownIcon } from '@chakra-ui/icons'
import moment from 'moment'
import { Link } from 'react-router-dom'
import { useTodos } from '@/contexts/ToDos'
import Loading from '@/components/Loading'
import FormsTodoChange from '@/forms/todos/Change'

function PagesIndex() {
  const { todos: { data, error, loading }, getTodos } = useTodos()

  const bgColor = useColorModeValue('gray.100', 'teal.700')
  const txtColor = useColorModeValue('gray.500', 'gray.400')
  const { isOpen, onOpen, onClose } = useDisclosure()

  useEffect(() => {
    getTodos()
  }, [])

  if (loading) return <Loading />
  if (error) { return <h2 className="text-center">There was an error fetching data</h2> }

  return (
    <VStack>
      <Center w="100%" fontSize="3xl" fontWeight="extrabold">
        Show All Todos
      </Center>

      <>
        <IconButton borderRadius="50%" icon={<AddIcon />} onClick={onOpen} />
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay
            bg=""
            backdropFilter="blur(5px)"
          />
          <ModalContent>
            <ModalHeader>Modal Title</ModalHeader>
            <ModalCloseButton />
            <ModalBody display="flex" justifyContent="center" alignItems="center">
              <FormsTodoChange />
            </ModalBody>

            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={onClose}>
                Close
              </Button>
              <Button variant="ghost">Secondary Action</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>

      <Flex justifyContent="center" flexWrap="wrap" p={2}>
        {data.map((item) => (

          <Flex flexDir="column" key={item.id} bg={bgColor} m={3} p={5} w="240px" minH="250px" maxH="300px" overflow="auto" borderRadius="lg">
            <Flex justifyContent="space-between" mb={2}>
              <Box>
                <Badge fontSize="xs" colorScheme="yellow">#{item.id}</Badge>
              </Box>
              <Menu>
                <MenuButton size="xs" variant="ghost" as={Button} rightIcon={<TriangleDownIcon />} />
                <MenuList>
                  <MenuItem>
                    <Link to={`/todos/${item.id}`}>Show</Link>
                  </MenuItem>
                  <MenuItem />
                  <MenuItem>Delete</MenuItem>
                </MenuList>
              </Menu>

            </Flex>
            <Flex flexDir="column">
              <Link key={item.id} to={`/todos/${item.id}`}>
                <Text mb={1} fontSize="xl" fontWeight="extrabold">{item.title}</Text>
              </Link>
              <Text fontSize="sm" color={txtColor} fontWeight="bold">
                {moment(item.createdAt).calendar()}
              </Text>

            </Flex>
            <Flex flexDir="column" mt={2}>
              {item.TodoItems.map((a) => (
                <Badge key={a.id} my={1} px={3} py={3} alignItems="center" borderRadius="md" colorScheme="facebook">
                  <Checkbox colorScheme="cyan" defaultChecked={a.checked}>
                    <Text fontSize="md" fontWeight="bold">{a.name}</Text>
                  </Checkbox>
                </Badge>
              ))}
            </Flex>
          </Flex>

        ))}
      </Flex>
    </VStack>
  )
}

export default PagesIndex
