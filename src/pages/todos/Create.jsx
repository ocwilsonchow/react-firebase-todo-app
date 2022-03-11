import React from 'react'
import { Flex, Center } from '@chakra-ui/react'

import { useTodos } from '@/contexts/ToDos'
import FormsTodoChange from '@/forms/todos/Change'

function PagesCreate() {
  const { createTodo } = useTodos()

  return (
    <Flex flexDir="column" justifyContent="center" alignItems="center">
      <Center w="100%" fontSize="3xl" fontWeight="extrabold">Create Todos</Center>
      <Flex>
        <FormsTodoChange handleSubmit={createTodo} />
      </Flex>
    </Flex>
  )
}

export default PagesCreate
