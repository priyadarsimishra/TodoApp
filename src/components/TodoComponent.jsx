import React from "react"
import { Flex, Text, Tag, IconButton } from "@chakra-ui/react";
import { CloseIcon } from "@chakra-ui/icons";

const TodoComponent = ({todo, deleteTodo}) => 
{
    return (
        <Flex w="100%" bgColor="white" borderRadius="10" borderColor={"gray.500"} borderWidth="1px" p="5" mt="5" justifyContent="space-between">
            <Flex>
                <Text fontSize={"18px"} fontWeight="bold">{todo.task}</Text>
                <Tag 
                    ml="5"
                    colorScheme={(todo.urgency === "Urgent" ? "red": (todo.urgency === "Important" ? "yellow" : "cyan"))}
                >
                    <Text fontWeight="bold">{todo.urgency}</Text>
                </Tag>
            </Flex>
            <Flex>
                <IconButton
                    w="50px"
                    h="30px"
                    colorScheme='red'
                    variant={"outline"}
                    aria-label='delete resource'
                    icon={<CloseIcon />}
                    onClick={() => {deleteTodo(todo)}}
                />
            </Flex>
        </Flex>
    )
}

export default TodoComponent;