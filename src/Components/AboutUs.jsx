import React from "react"
import { Box, Heading, Text, Image, Button, Divider } from "@chakra-ui/react"


function AboutUs() {
    return (
        <>
            <Box textAlign='center' mt='100px'>
                <Heading color='gray.600' >
                    We are Canadian
                </Heading>
                <Text color='gray.600' fontSize='23px' mt='10px' >Independently owned and operated by people who <br />care about their users' nutrition.</Text>
            </Box>
            <Box mt='60px' >
                <Image src='https://cdn1.cronometer.com/2021/landing/cronometer-staff-2-p-1600.jpeg' w='70%' m='auto' />
            </Box>
            <Box  >
                <Text mt='20px' fontSize='18px' textAlign='center' color='gray.600' >
                    Our headquarters are based in the idyllic mountain town of Revelstoke, BC, Canada. We are a team of <br />
                    over 25 professionals brought together by a love of nutrition, skiing, biking and the great outdoors.
                </Text>
            </Box>
            <Box margin='auto' w='20%' mt='30px'>
                <Button
                    size='md'
                    border='1px solid #FF763F '
                    width='100%'
                    color='#FF763F'
                    boxShadow='md' p='6' rounded='md' bg='white' fontSize='20px' >About US</Button>
            </Box>
            <Divider width='90%' paddingTop='70px' margin='auto' />
            <Box mt='50px' >
                <Text textAlign='center' color='gray.600' fontSize='20px'  >
                    Help us spread the good word about nutrition and become an affiliate.
                </Text>
                <Box margin='auto' w='20%' mt='30px'>
                    <Button
                        size='md'
                        border='1px solid #FF763F '
                        width='100%'
                        color='#FF763F'
                        boxShadow='md' p='6' rounded='md' bg='white' fontSize='20px' >Become an Affiliate</Button>
                </Box>
            </Box>
        </>
    )
}

export default AboutUs