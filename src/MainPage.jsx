import React, { useState } from "react";
import { Flex } from "@chakra-ui/react";
import Dashboard from "./components/Dashboard";
import Sidebar from "./components/Sidebar";

const MainPage = () => {

    return(
        <Flex w="100vw">
            {/* <Sidebar /> */}
            <Dashboard />
        </Flex>
    )
}

export default MainPage;