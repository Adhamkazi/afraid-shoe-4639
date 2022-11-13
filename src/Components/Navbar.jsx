
import React from "react"
import { Image, Box, Text, Button, Label } from '@chakra-ui/react'

import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
} from '@chakra-ui/react'

import { ChevronDownIcon, } from "@chakra-ui/icons"


function Navbar() {
    return (
        <>
            <Box display="flex" width='100%' mt='30px'>

                <Image src="https://cdn1.cronometer.com/2021/landing/cronometer-logo.svg" alt="Logo" w='20%' ml='70px' />

                <Box w="60%" display="flex" alignItems="center" gap="40px" ml="20%" mt='10px' >
                    <Menu>
                        <MenuButton>
                            <Text fontSize="18px" fontFamily="Open Sans,sans-serif">Prodcuts<ChevronDownIcon /></Text>
                        </MenuButton  >
                        <MenuList w="30%" >
                            <Box display='flex' w="20%" >
                                <Image src='https://cdn1.cronometer.com/2021/landing/crono-icon-main-nav.svg' width="70%" ml='10px' mt="6px" />
                                <MenuItem>Cronometer</MenuItem>
                            </Box>
                            <Text marginLeft="50px" color="gray.400" fontSize="13px" mt='-5px' fontFamily="Open Sans,sans-serif">For Indiviuals</Text>
                            <Box display='flex' w="20%" >
                                <Image src='https://cdn1.cronometer.com/2021/landing/pro-icon-main-nav.svg' width="70%" ml='10px' mt='6px' />
                                <MenuItem>CronometerPro</MenuItem>
                            </Box>
                            <Text marginLeft="50px" color="gray.400" fontSize="13px" mt='-5px' fontFamily="Open Sans,sans-serif">For Healthcare Professionals</Text>
                        </MenuList>
                    </Menu>

                    <Text fontFamily="Open Sans,sans-serif" fontSize="18px" _hover="#FF763F" >Support </Text>
                    <Text fontFamily="Open Sans,sans-serif" fontSize="18px" >Blog</Text>
                    <Text fontFamily="Open Sans,sans-serif" fontSize="18px" >Forums</Text>
                    <Text fontFamily="Open Sans,sans-serif" fontSize="18px"  >About</Text>
                    <Button
                        size='md'
                        border='1px'
                        width='150px'
                        borderColor='#FF763F'
                        color='#FF763F'
                        backgroundColor='white'
                        boxShadow='md' p='6' rounded='md' bg='white'>Login</Button>
                </Box>
            </Box>



























        </>








    )
}


export default Navbar