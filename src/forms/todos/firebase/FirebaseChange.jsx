import React from 'react'
import { Flex, VStack, Text, FormControl, Input, Checkbox, CloseButton } from '@chakra-ui/react'

function FirebaseChange() {
  return (
    <VStack w="100%">
      <Text>Firebase Form</Text>
      <Flex flexDir="column" maxW="500px" bg="gray.600" p={4}>
        <FormControl mb={3}>
          <Input name="title" placeholder="Title" />
        </FormControl>
        <FormControl display="flex" alignItems="center">
          <Checkbox mr={2} />
          <Input variant="flushed" />
          <CloseButton />
        </FormControl>
      </Flex>
    </VStack>
  )
}

export default FirebaseChange
