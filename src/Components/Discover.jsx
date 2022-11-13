import React from "react"
import { Box, Heading, Text, Image } from "@chakra-ui/react"
function Discover() {
    return (
        <>
            <Box bg='RGBA(0, 0, 0, 0.06)' w='100%' paddingTop='40px' paddingBottom="100px" mt='80px' >
                <Box textAlign="center"  >
                    <Heading mt='70px' color='gray.600' >
                        Discover your nutrition
                    </Heading>
                    <Text mt='20px' fontSize="23px" fontFamily="Open Sans,sans-serif" color='gray.600' >Cronometer encourages you to not just count your</Text>
                    <Text fontSize="23px" fontFamily="Open Sans,sans-serif" color='gray.600' >calories but to focus on your nutrition as a whole.</Text>
                </Box>
                <Box display='flex' justifyContent='space-around' textAlign='center' marginTop='60px' >
                    <Box   >
                        <Image src='https://cdn1.cronometer.com/2021/landing/community-icon.svg' w='20%' margin='auto' />
                        <Text fontSize="20px" fontFamily="Open Sans,sans-serif" mt='20px' color='RGBA(0, 0, 0, 0.80)'>Over 5 million users</Text>
                        <Text mt='10px' color="gray.700" fontFamily="Open Sans,sans-serif" >Join the community to get tips and </Text>
                        <Text color="gray.700" fontFamily="Open Sans,sans-serif" > inspiration from other users on our</Text>
                        <Text color="gray.700" fontFamily="Open Sans,sans-serif" > forums and Facebook group.</Text>
                    </Box>
                    <Box>
                        <Image src='https://cdn1.cronometer.com/2021/landing/nutrition-icon.svg' w='20%' margin='auto' />
                        <Text fontSize="20px" fontFamily="Open Sans,sans-serif" mt='15px' color='RGBA(0, 0, 0, 0.80)'>Accurate nutrition data</Text>
                        <Text mt='10px' color="gray.700" fontFamily="Open Sans,sans-serif" >Be confident that the food you log has </Text>
                        <Text color="gray.700" fontFamily="Open Sans,sans-serif">the correct nutrition data. We verify </Text>
                        <Text color="gray.700" fontFamily="Open Sans,sans-serif" > every food submission for accuracy.</Text>
                    </Box>

                    <Box>
                        <Image src='https://cdn1.cronometer.com/2021/landing/security-icon.svg' w='20%' margin='auto' />
                        <Text fontSize="20px" fontFamily="Open Sans,sans-serif" mt='20px' color='RGBA(0, 0, 0, 0.80)' >Data privacy & security</Text>
                        <Text mt='10px' color="gray.700" fontFamily="Open Sans,sans-serif" >We take the security of our users' </Text>
                        <Text color="gray.700" fontFamily="Open Sans,sans-serif" >accounts seriously - we will never sell</Text>
                        <Text color="gray.700" fontFamily="Open Sans,sans-serif" > your account data to third parties.</Text>
                    </Box>
                </Box>
            </Box>
        </>

    )
}

export default Discover
