import React, { useEffect } from 'react'
import { Flex, Center, Text, Checkbox, Badge, useColorModeValue, IconButton } from '@chakra-ui/react'
import { AddIcon } from '@chakra-ui/icons'
import { useParams, Link } from 'react-router-dom'
import moment from 'moment'

import { useTodos } from '@/contexts/ToDos'
import Loading from '@/components/Loading'

function PagesShow() {
  const { id } = useParams()
  const { todo: { data, error, loading }, getTodo } = useTodos()
  const bgColor = useColorModeValue('gray.100', 'teal.600')

  useEffect(() => {
    getTodo(id)
  }, [])

  if (loading) return <Loading />
  if (error) { return <h2 className="text-center">There was an error fetching data</h2> }

  return (
    <Flex flexDir="column">
      <Center w="100%" fontSize="3xl" fontWeight="extrabold" mb={2}>Show Specific Todo</Center>
      <Center><Link to="/todos/new"> <IconButton icon={<AddIcon />} /></Link></Center>
      <Flex justifyContent="center" alignItems="center" flexDir="column" mt={2}>
        <Flex flexDir="column" bg={bgColor} borderRadius="lg" w="500px" p={8} m={3}>
          <Text fontSize="3xl" fontWeight="extrabold">{data.title}</Text>
          <Text>{moment(data.createdAt).calendar()}</Text>
          <Flex flexDir="column" mt={2}>
            {data.TodoItems.map((item) => (
              <Badge key={item.id} my={2} px={2} py={1}>
                <Checkbox colorScheme="blue">
                  <Text fontSize="xl" fontWeight="bold">{item.name}</Text>
                </Checkbox>

              </Badge>
            ))}
          </Flex>
        </Flex>

      </Flex>
    </Flex>
  )
}

export default PagesShow
