import React from 'react'
import { Box, Heading, Text, Image } from "@chakra-ui/react"
import { SimpleGrid } from '@chakra-ui/react'

function healthyHabits() {
    return (
        <>
            <Box>
                <Box textAlign='center' mt="70px" >
                    <Heading color='gray.600' >Develop healthy habits</Heading>
                    <Text mt="20px" fontSize='23px' fontFamily="Open Sans,sans-serif" color='gray.600'>Count your calories, ensure you're meeting </Text>
                    <Text fontSize='23px' fontFamily="Open Sans,sans-serif" color='gray.600'>nutrient targets, and see your progress over time.</Text>
                </Box>
                <Box>
                    <SimpleGrid columns={3} spacing='30px' justifyContent="space-around" textAlign='center' mt='70px'>
                        <Box  >
                            <Image src='https://cdn1.cronometer.com/2021/landing/micronutrients-icon.svg' w='25%' margin='auto' />
                            <Heading as='h4' size='md' color='gray.600' mt='10px'>Track up to 82 <br /> micronutrients</Heading>
                            <Text mt='10px' fontSize='18px' fontFamily="Open Sans,sans-serif" color='gray.600'>Log your meals and track all your <br />  macro and micronutrients.</Text>
                        </Box>

                        <Box ><Image src='https://cdn1.cronometer.com/2021/landing/diary-icon.svg' w='25%' margin='auto' />
                            <Heading as='h4' size='md' color='gray.600' mt='10px'>Log meals, exercise <br />and biometrics </Heading>
                            <Text mt='10px' fontSize='18px' fontFamily="Open Sans,sans-serif" color='gray.600' >Plus, you can create custom foods, <br />  recipes, exercises and biometrics!</Text>
                        </Box>

                        <Box ><Image src='https://cdn1.cronometer.com/2021/landing/reports-icon.svg' w='25%' margin='auto' />
                            <Heading as='h4' size='md' mt='10px' color='gray.600'>Valuable reports <br />and charts</Heading>
                            <Text mt='10px' fontSize='18px' fontFamily="Open Sans,sans-serif" color='gray.600'  >Learn how nutrients and<br />  biometrics correlate over time.</Text>
                        </Box>

                        <Box mt='30px' ><Image src='https://cdn1.cronometer.com/2021/landing/scale-icon.svg' w='25%' margin='auto' />
                            <Heading as='h4' size='md' mt='10px' color='gray.600'>Custom diet settings</Heading>
                            <Text mt='10px' fontSize='18px' fontFamily="Open Sans,sans-serif" color='gray.600' >Set weight, macro & nutrient <br />  targets to meet your goals.</Text>
                        </Box>

                        <Box mt='45px'><Image src='https://cdn1.cronometer.com/2021/landing/fasting-icon.svg' w='25%' margin='auto' />
                            <Heading as='h4' size='md' mt='10px' color='gray.600'>Fasting timer</Heading>
                            <Text mt='10px' fontSize='18px' fontFamily="Open Sans,sans-serif" color='gray.600' >Track your intermittent fasts and <br /> see their effect over time.</Text>
                        </Box>

                        <Box mt='30px'>
                            <Image src='https://cdn1.cronometer.com/2021/landing/food-icon.svg' w='25%' margin='auto' />
                            <Heading as='h4' size='md' mt='10px' color='gray.600'>Diet support</Heading>
                            <Text mt='10px' fontSize='18px' fontFamily="Open Sans,sans-serif" color='gray.600'>Whether you’re Keto, Vegan, or on one <br />  recommended by your doctor.</Text>
                        </Box>
                    </SimpleGrid>
                </Box>
            </Box >



        </>
    )
}

export default healthyHabits
