import React, { useEffect } from 'react'
import { Flex, Center } from '@chakra-ui/react'
import { useParams } from 'react-router-dom'

import { useTodos } from '@/contexts/ToDos'
import FormsTodoChange from '@/forms/todos/Change'
import Loading from '@/components/Loading'

function PagesEdit() {
  const { id } = useParams()
  const { todo: { data, loading }, getTodo, editTodo, destroyTodo } = useTodos()

  useEffect(() => {
    getTodo(id)
  }, [])

  if (loading) return <Loading />
  if (!data) return <h1 className="text-center">Todo {id} Not Found</h1>

  return (
    <Flex flexDir="column" justifyContent="center" alignItems="center">
      <Center w="100%" fontSize="3xl" fontWeight="extrabold">Edit Todos</Center>
      <Flex p={4}>
        <FormsTodoChange handleSubmit={editTodo} handleDelete={destroyTodo} data={data} />
      </Flex>
    </Flex>
  )
}

export default PagesEdit
