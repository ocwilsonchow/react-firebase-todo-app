import React, { useState } from 'react'
import { Flex, Center, FormControl, Input, Text, Checkbox, IconButton, Button } from '@chakra-ui/react'
import { AddIcon, CloseIcon } from '@chakra-ui/icons'
import { Formik, Field, Form, ErrorMessage, FieldArray } from 'formik'

function CreateNewTodoForm() {
  const [itemInputs, setItemInput] = useState([{ name: '', checked: false }, { name: '', checked: false }])

  const initForm = {
    title: '',
    TodoItems: itemInputs
  }

  const handleAddItemInput = () => {
    setItemInput([...itemInputs, { name: '', checked: false }])
  }
  const handleDeleteItemInput = () => {
    setItemInput()
  }

  return (
    <Flex flexDir="column" w="100%">

      <FormControl>
        <Input variant="flushed" placeholder="Title" />
      </FormControl>

      <Flex flexDir="column">
        <Text fontSize="xl" fontWeight="extrabold" mt={5}>
          Todo Items {' '}
          <IconButton icon={<AddIcon />} borderRadius="50%" onClick={handleAddItemInput} />
        </Text>

        <Flex flexDir="column" name="todos">
          {initForm.TodoItems.map((item, i) => (
            <FormControl display="flex" alignItems="center" key={i} my={2} w="100%">
              <Checkbox mr={2} />
              <Input variant="flushed" placeholder={item.name} />
              <IconButton size="xs" icon={<CloseIcon boxSize="0.5rem" />} borderRadius="50%" />
            </FormControl>

          ))}
        </Flex>
      </Flex>
      <Button mt={2} type="submit">Create</Button>
    </Flex>
  )
}

function PagesCreate() {
  return (
    <Flex flexDir="column" justifyContent="center" alignItems="center">
      <Center w="100%" fontSize="3xl" fontWeight="extrabold">Create Todos</Center>
      <Flex minW="500px" m={3} p={8} bg="teal.600">
        <CreateNewTodoForm />
      </Flex>
    </Flex>
  )
}

export default PagesCreate

//  <Formik
//     initialValues={{
//       title: '',
//       TodoItems: [{
//         name: '',
//         checked: false
//       }]
//     }}
//     validationSchema={Yup.object({
//       title: Yup.string().max(30, 'Must be 30 characters or less').required('Required'),
//       TodoItems: Yup.array({
//         name: Yup.string().max(15, 'Must be 15 characters or less').required('Required'),
//         checked: Yup.boolean()
//       })
//     })}
//     onSubmit={handleSubmit}
//   ></Formik>
