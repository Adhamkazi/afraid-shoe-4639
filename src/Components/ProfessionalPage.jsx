import React from "react"
import { Box, Button, Text, Image, SimpleGrid } from "@chakra-ui/react"


function ProfessionalPage() {
    return (
        <>
            <Box bg='RGBA(0, 0, 0, 0.04)' >
                <SimpleGrid columns={2} spacing={10} mt='80px' >
                    <Box mt='70px' >
                        <Image src='https://cdn1.cronometer.com/2021/landing/crono-pro-graphic.svg' w='55%' ml='30%' />
                    </Box>

                    <Box mt='80px' mr='150px'>
                        <Image src='https://cdn1.cronometer.com/2021/landing/cronometer-pro-logo.svg' w='40%' m='auto' />
                        <Text fontWeight='bold' textAlign='center' mt='20px' fontSize='23px' color='gray.600' >Are you a healthcare professional?</Text>
                        <Text fontSize='21px' color='gray.600' textAlign='center' mt='20px'  >
                            Check out our software designed for nutritionists,<br /> dietitians, research teams, schools, and hospitals.</Text>

                        <Button
                            ml='90px'
                            size='md'
                            border='1px'
                            width='55%'
                            borderColor='#35934B'
                            color='#35934B'
                            backgroundColor='white'
                            boxShadow='md' p='6' rounded='md' bg='white' fontSize='20px' mt='30px' >Learn About Pro</Button>
                    </Box>
                </SimpleGrid>
            </Box >
        </>
    )

}



export default ProfessionalPage
