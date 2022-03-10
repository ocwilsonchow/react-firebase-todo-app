import React, { useEffect } from 'react'
import { Flex, Center, VStack, Text, Checkbox, Badge, useColorModeValue, IconButton } from '@chakra-ui/react'
import { AddIcon } from '@chakra-ui/icons'
import moment from 'moment'
import { Link } from 'react-router-dom'
import { useTodos } from '@/contexts/ToDos'
import Loading from '@/components/Loading'

function PagesIndex() {
  const {
    todos: { data, error, loading },
    getTodos
  } = useTodos()

  const bgColor = useColorModeValue('gray.200', 'teal.700')
  const txtColor = useColorModeValue('gray.500', 'gray.400')

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
      <Link to="/todos/new"> <IconButton icon={<AddIcon />} /></Link>

      <Flex justifyContent="center" flexWrap="wrap" p={2}>
        {data.map((item) => (

          <Flex flexDir="column" key={item.id} bg={bgColor} m={3} p={5} w="200px" minH="200px" overflow="auto" borderRadius="lg">
            <Flex flexDir="column">
              <Link key={item.id} to={`/todos/${item.id}`}>
                <Text mb={1} fontSize="2xl" fontWeight="extrabold">{item.title}</Text>
              </Link>
              <Text fontSize="sm" color={txtColor} fontWeight="bold">
                {moment(item.createdAt).calendar()}
              </Text>

            </Flex>
            <Flex flexDir="column" mt={2}>
              {item.TodoItems.map((a) => (
                <Badge key={a.id} my={1} px={2} py={1} alignItems="center" checked={a.checked}>
                  <Checkbox colorScheme="blue">
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
