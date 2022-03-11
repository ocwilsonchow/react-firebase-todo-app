import React from 'react'
import { Flex, Input, IconButton, Checkbox, Center, Button, Badge, useColorModeValue, Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,

  ButtonGroup
} from '@chakra-ui/react'
import { CloseIcon, AddIcon } from '@chakra-ui/icons'
import { Formik, FieldArray, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup'

const initialValues = {
  title: '',
  TodoItems: [{ name: '', checked: false }]
}

function FormsTodoChange({ data, handleSubmit, handleDelete }) {
  const itemColor = useColorModeValue('gray.200', 'teal.600')
  const bgColor = useColorModeValue('gray.100', 'teal.700')

  return (
    <Flex m={3} p={8} bg={bgColor} borderRadius="md">
      <Formik
        initialValues={data || initialValues}
        validationSchema={
          Yup.object({
            title: Yup.string().required().label('Title'),
            TodoItems: Yup.array().of(Yup.object({
              name: Yup.string().required().label('Name'),
              checked: Yup.boolean()
            }))
          })
        }
        onSubmit={handleSubmit}
        onClick={handleDelete}
      >
        {
          ({ values, isSubmitting, handleChange,
            handleBlur }) => (
              <Form>
                <Flex justifyContent="space-between">
                  {data && <Badge colorScheme="blue" mb={4}>#{values?.id}</Badge>}
                  {data && (
                  <Popover placement="bottom" closeOnBlur={false}>
                    <PopoverTrigger>
                      <Button size="xs" colorScheme="red">Delete</Button>
                    </PopoverTrigger>
                    <PopoverContent color="white" bg="black">
                      <PopoverHeader pt={4} fontWeight="bold" border="0">
                        Warning
                      </PopoverHeader>
                      <PopoverArrow />
                      <PopoverCloseButton />
                      <PopoverBody>
                        Are you sure you want to delete this Todo item?
                      </PopoverBody>
                      <PopoverFooter
                        border="0"
                        d="flex"
                        alignItems="center"
                        justifyContent="space-between"
                        pb={4}
                      >
                        <ButtonGroup size="sm">
                          <Button colorScheme="red" onClick={(e) => { e.preventDefault(); handleDelete(data.id) }}>Confirm</Button>
                        </ButtonGroup>
                      </PopoverFooter>
                    </PopoverContent>
                  </Popover>
                  )}
                </Flex>
                <Flex>
                  <Input
                    name="title"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.title}
                    variant="flushed"
                    placeholder="Title"
                    fontSize="2xl"
                    borderColor="teal.300"
                  />
                  <ErrorMessage className="invalid-feedback" name="title" component="div" />
                </Flex>

                <FieldArray name="TodoItems">
                  {({ remove, push }) => (
                    <Flex flexDir="column" mt={6}>
                      {
                      values.TodoItems.map((item, index) => (
                        <Flex key={index} flexDir="column" my={2} px={3} py={5} pl={4} bg={itemColor} borderRadius="md">
                          <Flex>
                            <Checkbox
                              borderColor="teal.300"
                              colorScheme="blue"
                              name={`TodoItems[${index}].checked`}
                              type="checkbox"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.checked}
                              mr={3}
                              defaultChecked={values.TodoItems[index].checked}
                            />
                            <ErrorMessage className="invalid-feedback" name={`TodoItems[${index}].checked`} component="div" />
                            <Input
                              borderColor="teal.300"
                              name={`TodoItems[${index}].name`}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.TodoItems[index].name}
                              variant="flushed"
                              placeholder=""
                            />
                            <IconButton type="button" variant="ghost" onClick={() => remove(index)} icon={<CloseIcon boxSize={3} />} />

                            <ErrorMessage className="invalid-feedback" name={`TodoItems[${index}].name`} component="div" />
                          </Flex>

                        </Flex>
                      ))
                    }

                      <Center my={3}>
                        <IconButton variant="ghost" icon={<AddIcon boxSize={3} />} onClick={() => push({ name: '', checked: false })} />
                      </Center>

                    </Flex>

                  )}

                </FieldArray>
                <Flex justifyContent="flex-end">
                  <Button onClick={handleSubmit} disabled={isSubmitting} type="submit">Save</Button>
                </Flex>
              </Form>

          )
        }
      </Formik>
    </Flex>
  )
}

export default FormsTodoChange
