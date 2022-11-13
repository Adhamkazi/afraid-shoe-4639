import React from "react"
import { Heading, Text, Box, Image, Divider, SimpleGrid } from "@chakra-ui/react"


function Footer() {
    return (
        <>
            <Box bg='#4F4E53' mt='50px' width='100%' paddingBottom='50px' >
                <Box display='flex' gap='10px' margin='auto' w='15%' paddingTop='50px' >
                    <Image src='https://cdn1.cronometer.com/2021/landing/social_instagram-icon.png' w='40px' h='40px' />
                    <Image src='https://cdn1.cronometer.com/2021/landing/social_facebook-icon.png' w='40px' h='40px' />
                    <Image src='https://cdn1.cronometer.com/2021/landing/social_twitter-icon.png' w='40px' h='40px' />
                    <Image src='https://cdn1.cronometer.com/2021/landing/social_youtube-icon.png' w='40px' h='40px' />
                </Box>
                <Box display='flex' w="30%" mt='30px' gap='30px' paddingLeft='70px' ml='33%' >
                    <Image src="https://cdn1.cronometer.com/2021/landing/ios-icon.svg" width='45%' />
                    <Image src='https://cdn1.cronometer.com/2021/landing/android-icon.svg' width='45%' />
                </Box>

                <Divider width='90%' paddingTop='50px' margin='auto' />
                <Box mt='50px' >
                    <SimpleGrid columns={4} spacing={10} display='flex' justifyContent='space-around' >
                        <Box >
                            <Image src='https://cdn1.cronometer.com/2021/landing/crono-logo-white.svg' w='70%' />
                        </Box>
                        <Box color='white' ml='-15%' >
                            <Heading as='h5' size='md' color='white' >   Cronometer  </Heading>
                            <Text fontSize='18px' mt='20px'>For Individuals</Text>
                            <Text fontSize='18px' mt='20px' >For Professionals</Text>
                            <Text fontSize='18px' mt='20px' >Privacy</Text>
                            <Text fontSize='18px' mt='20px' >Terms </Text>
                        </Box>

                        <Box color='white'>
                            <Heading as='h5' size='md' color='white' >   The Company  </Heading>
                            <Text fontSize='18px' mt='20px'>About Us</Text>
                            <Text fontSize='18px' mt='20px' >Crono Blog</Text>
                            <Text fontSize='18px' mt='20px' >Crono Forums</Text>
                            <Text fontSize='18px' mt='20px' >Job</Text>
                            <Text fontSize='18px' mt='20px' >Support</Text>
                        </Box>


                        <Box color='white'>
                            <Heading as='h5' size='md' color='white' > Partners & Affiliates     </Heading>
                            <Text fontSize='18px' mt='20px'>Affilate Program</Text>
                            <Text fontSize='18px' mt='20px' >Media Kit</Text>
                        </Box>
                    </SimpleGrid>
                </Box>
                <Box color='white ' textAlign='center' mt='70px' fontSize='21px' >
                    <Text>
                        Copyright © 2011-2022
                    </Text>
                    <Text>
                        All rights reserved
                    </Text>
                </Box>
            </Box>
        </>
    )
}


export default Footer
