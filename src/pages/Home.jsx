import React, { useEffect } from 'react'
import { Flex, Text, Center, Checkbox, Badge, CloseButton, useColorModeValue } from '@chakra-ui/react'
import { useTodos } from '@/contexts/ToDos'
import Loading from '@/components/Loading'

import FormsTodoChange from '@/forms/todos/Change'

function PagesHome() {
  const bgColor = useColorModeValue('gray.100', 'teal.700')
  const txtColor = useColorModeValue('gray.500', 'gray.400')
  const {
    fbTodos: { data, error, loading }, getFbTodos, createFbTodos, destroyFbTodos
  } = useTodos()

  useEffect(() => {
    getFbTodos()
  }, [])

  console.log(data)  // eslint-disable-line

  if (loading) return <Loading />
  if (error) { return <h2 className="text-center">There was an error fetching data</h2> }

  return (
    <>
      <Center>
        <Text fontSize="2xl" fontWeight="bold">Firebase</Text>
      </Center>
      <Flex p={5}>
        <Flex flexWrap="wrap">
          <Flex w="280px">
            <FormsTodoChange handleSubmit={createFbTodos} />
          </Flex>
          {data?.map((item) => (
            <Flex flexDir="column" key={item.id} bg={bgColor} m={3} p={6} w="240px" minH="250px" maxH="350px" overflow="auto" borderRadius="lg">
              <Flex flexDir="column">
                <Flex justifyContent="space-between" alignItems="center" w="100%" mb={1}>
                  <Text mb={1} fontSize="xl" fontWeight="extrabold">{item.title}</Text>
                  <CloseButton onClick={() => destroyFbTodos(item.id)} />
                </Flex>

                <Text fontSize="sm" color={txtColor} fontWeight="bold">
                  {item.createdAt.toDate().toLocaleDateString()}
                </Text>
              </Flex>
              <Flex flexDir="column" mt={2}>
                {item.TodoItems.map((a, i) => (
                  <Badge key={i} my={1} px={3} py={3} alignItems="center" borderRadius="md" colorScheme="facebook">
                    <Checkbox colorScheme="cyan" defaultChecked={a.checked}>
                      <Text fontSize="md" fontWeight="bold">{a.name}</Text>
                    </Checkbox>
                  </Badge>
                ))}
              </Flex>
            </Flex>

          ))}
        </Flex>
      </Flex>
    </>
  )
}

export default PagesHome
