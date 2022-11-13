import React from "react"
import { Box, Heading, Text, Button, Image } from '@chakra-ui/react'
import { Link } from '@chakra-ui/react'

function MidMenu() {
    return (
        <>
            <Box width='100%' mt="70px" display='flex' justifyContent="space-between" >
                <Box ml="70px" >
                    <Heading as='h2' size='2xl' color='#4F4E53' >Eat smarter.</Heading>
                    <Heading as='h2' size='2xl' color='#4F4E53'      >  Live better.</Heading>
                    <Text fontSize='30px' color='#4F4E53' fontFamily="Open Sans,sans-serif" mt="30px">Track your calories, exercise,</Text>
                    <Text fontSize='30px' color='#4F4E53' fontFamily="Open Sans,sans-serif"   >  biometrics and health data.</Text>

                    <Button bg='#FF763F' color='#FFFF' w="70%" h='50px' fontSize='20px' mt="50px" >Sign Up - It's Free!</Button>
                    <Text ml="20px" mt='30px' fontSize="18px">Already have an account?<Link to='/home'>Log in</Link></Text>
                </Box>

                <Box width='40%' marginTop="-20px" mr="130px"    >
                    <Image src="https://cdn1.cronometer.com/2021/landing/cronometer-hero-graphic.svg" />
                </Box>
            </Box>
            <Box textAlign='center' >
                <Text fontSize='23px' fontFamily="Open Sans,sans-serif" color='gray.600'>As Seen On</Text>
                <Box display='flex' w="50%" justifyItems='center' alignItems='center' margin='auto' gap='40px' mt='30px' >
                    <Image src='https://cdn1.cronometer.com/2021/landing/media-mention-2.svg' width='30%' />
                    <Image src='https://cdn1.cronometer.com/2021/landing/media-mention-1.svg' width='30%' />
                    <Image src='https://cdn1.cronometer.com/2021/landing/media-mention-3.svg' width='30%' />
                </Box>
                <Box>
                    <Text mt='30px' fontSize='23px' fontFamily="Open Sans,sans-serif" >Available on Web, iOS and Android</Text>
                    <Box display='flex' w="40%" margin='auto' gap='30px' paddingLeft='70px' mt='20px'>
                        <Image src="https://cdn1.cronometer.com/2021/landing/ios-icon.svg" width='35%' />
                        <Image src='https://cdn1.cronometer.com/2021/landing/android-icon.svg' width='35%' />
                    </Box>

                </Box>
            </Box>
        </>
    )
}


export default MidMenu