import React, { useEffect } from 'react'
import { Flex, Center, VStack, Text } from '@chakra-ui/react'

import { useTodos } from '@/contexts/ToDos'
import Loading from '@/components/Loading'

import FormsTodoChange from '@/forms/todos/Change'

function PagesHome() {
  const {
    fbTodos: { data, error, loading }, getFbTodos, createFbTodos
  } = useTodos()

  useEffect(() => {
    getFbTodos()
  }, [])

  console.log(data)  // eslint-disable-line

  if (loading) return <Loading />
  if (error) { return <h2 className="text-center">There was an error fetching data</h2> }

  return (
    <VStack>
      <Center w="100%" fontSize="3xl" fontWeight="extrabold">
        <Text>Firebase Todos</Text>
      </Center>
      <Flex flexWrap="wrap">
        <FormsTodoChange handleSubmit={createFbTodos} />

      </Flex>
    </VStack>
  )
}

export default PagesHome
