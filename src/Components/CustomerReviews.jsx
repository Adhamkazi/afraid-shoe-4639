import React from "react"
import { Box, Heading, Text, SimpleGrid, Image } from "@chakra-ui/react"



function CustomerReviews() {
    return (
        <>
            <Box textAlign='center' mt='60px' paddingBottom='40px'>
                <Heading color='gray.600' >Cronometer Reviews</Heading>
                <Text color='gray.600' fontSize='25px' mt='10px' fontFamily="Open Sans,sans-serif">Check us out in your app store.</Text>
            </Box>

            <Box boxShadow='base' p='6' rounded='md' bg='white' w='90%' margin='auto' display='grid'>
                <SimpleGrid columns={2} spacing={10}>
                    <Box >
                        <Text fontFamily="Open Sans,sans-serif" color='#FF763F' fontSize='30px' ml='40px' mt='100px'  >
                            I wasn't the only one concerned  <br /> about the unreliability of the <br /> macros in both MyFitnessPal and <br />Carb Manager.
                        </Text>
                        <Image src="https://cdn1.cronometer.com/2021/landing/ios-icon.svg" width='30%' margin='auto' mt='30px' />
                    </Box>
                    <Box >
                        <Text fontSize='20px' mr='30px'>
                            I started Keto in July. MyFitnessPal seemed pretty cool. Spent hours setting it up and entering recipes only to discover the macros were not reliable due to all the contributions by the community. I was so frustrated. Then I found a review of several apps (on the Keto Mojo website) and discovered I wasn't the only one concerned about unreliability of the macros on both MFP and CarbManager (tried that too). Behold Cronometer! I love this app. It draws from nutrition databases with minimal community contributions so much, much more reliability. There are many more free features. The user interface is easy to navigate. I'm very happy with Cronometer.
                        </Text>
                        <Text mt='30px' fontSize='18px' fontWeight='bold' color='gray.600'>
                            iOS Review
                        </Text>
                        <Text as='em' fontWeight='bold' color='gray.600'  >September 23, 2019</Text>
                    </Box>
                </SimpleGrid>
            </Box>
            <Box boxShadow='base' p='6' rounded='md' bg='white' w='90%' margin='auto' display='grid' mt='70px' >
                <SimpleGrid columns={2} spacing={10} >
                    <Box >
                        <Text fontSize='18px' mt='30px' ml='30px'>
                            This app is my dream! I've been on the hunt for something that can track my daily nutritional needs and the majority of apps seem to think that only means macros. This tracks EVERYTHING! Getting my daily vitamins through food is so important to me and this has taken a HUGE load off of my plate. I bought gold within minutes. This is set up great, easy to use, links with my FitBit. I could go on and on.
                        </Text>
                        <Text ml='30px' mt='30px' fontSize='15px' fontWeight='bold' color='gray.600'>
                            Android Review
                        </Text>
                        <Text as='em' fontWeight='bold' color='gray.600' ml='30px' fontSize='15px' >November 23, 2020</Text>
                    </Box>
                    <Box >
                        <Text fontFamily="Open Sans,sans-serif" color='#FF763F' fontSize='27px' ml='50px' mt='80px' fontWeight='semibold' >
                            Cronometer tracks EVERYTHING!<br /> ... It's easy to use and links with <br />my FitBit
                        </Text>
                        <Image src="https://cdn1.cronometer.com/2021/landing/android-icon.svg" width='30%' margin='auto' mt='30px' />
                    </Box>
                </SimpleGrid>
            </Box>

        </>
    )
}
export default CustomerReviews