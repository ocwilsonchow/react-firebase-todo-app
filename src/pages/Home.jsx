import React, { useState, useEffect } from 'react'
import { Flex, Center } from '@chakra-ui/react'

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

  console.log(data)

  if (loading) return <Loading />
  if (error) { return <h2 className="text-center">There was an error fetching data</h2> }

  return (
    <Flex>
      <Center w="100%" fontSize="3xl" fontWeight="extrabold">
        <FormsTodoChange handleSubmit={createFbTodos} />
      </Center>
    </Flex>
  )
}

export default PagesHome
