import React, { useState } from "react";
import {Button, Input, Flex, Box, Heading, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons"
import TodoComponent from "./TodoComponent";

const Dashboard = () => {
    const [todoText, setTodoText] = useState("");
    const [urgency, setUrgency] = useState("Set Urgency");
    const [todos, setTodos] = useState([]);
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const date = new Date();
    
    const deleteTodo = (todo) => {
        setTodos(todos.filter(task => task !== todo));
    }

    return(
        <Box flexDirection={"row"} w="100vw" backgroundColor={"#f4f4f4"}>
            <Flex p="5">
                <Heading fontSize="24px" bgClip="text" bgGradient='linear(to-r, blue.400, green.400)'>{date.toLocaleDateString("en-US", options)}</Heading>
            </Flex>
            <Flex pl="5">
                <Input placeholder='Enter your Todo' w="50%" value={todoText} onChange={(evt) => setTodoText(evt.target.value)}/>
                <Menu>
                    <MenuButton as={Button} rightIcon={<ChevronDownIcon />}  ml="5" variant="outline" colorScheme='blue'>
                        {urgency}
                    </MenuButton>
                    <MenuList>
                        <MenuItem onClick={() => {setUrgency("Urgent")}}>Urgent</MenuItem>
                        <MenuItem onClick={() => {setUrgency("Important")}}>Important</MenuItem>
                        <MenuItem onClick={() => {setUrgency("Normal")}}>Normal</MenuItem>
                    </MenuList>
                </Menu>
                <Button colorScheme='teal' variant='outline' ml="5" onClick={() => {
                    if(todoText !== "" && urgency !== "Set Urgency")
                    {
                        setTodos([...todos, {task: todoText, urgency: urgency}])
                        setTodoText("")
                        setUrgency("Set Urgency")
                    }
                }}>
                    Add Todo
                </Button>
            </Flex>  
            <Flex 
                w="90%" 
                h="91vh" 
                p="5" 
                flexDirection={"column"} 
                css={{ 
                    display: "flex",
                    overflowY: "auto",
                    position: "relative",
                    '&::-webkit-scrollbar': { 
                      display: "none"
                    },
                    "border-radius": "5px",
                  }}
            >
                {todos.map((todo) => (
                    <TodoComponent todo={todo} deleteTodo={deleteTodo}/>
                ))}  
            </Flex>    
        </Box>
    )
}

export default Dashboard;