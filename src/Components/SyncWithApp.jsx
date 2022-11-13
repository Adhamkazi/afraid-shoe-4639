import React from "react"
import { Box, SimpleGrid, Text, Image, Heading } from "@chakra-ui/react"
import { Divider } from '@chakra-ui/react'

function SyncWithApp() {
    return (
        <>
            <Box>
                <Box textAlign='center' mt='100px' >
                    <Text color='gray.600' fontFamily="Open Sans,sans-serif" fontSize='35px'  >
                        Sync with Apps and Devices
                    </Text>
                    <Text color='gray.600' fontFamily="Open Sans,sans-serif" fontSize='20px' mt='10px'>Sync Cronometer with these activity trackers, Apple Health, Google Fit and Samsung Health.</Text>
                </Box>

                <Box>
                    <Image src='https://cdn1.cronometer.com/2021/landing/devices-p-1600.png' paddingTop='40px' width='60%' margin='auto' />
                </Box>
            </Box>
            <Divider width='80%' paddingTop='50px' margin='auto' />

        </>
    )
}

export default SyncWithApp