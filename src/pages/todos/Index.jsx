import React, { useEffect } from 'react'
import { Flex, Center } from '@chakra-ui/react'

import {useTodos} from '@/contexts/ToDos'
import Loading from '@/components/Loading'


function PagesShow() {
 const { todos: { data, error, loading }, getTodos } = useTodos()

  useEffect(() => {
    getTodos()
  }, [])

  if (loading) return <Loading />
  if (error) return <h2 className="text-center">There was an error fetching data</h2>

  const { }

  return (
    <Flex>
      <Center w="100%">Show All Todos</Center>
    </Flex>
  )
}

export default PagesShow
