import React from "react"
import { Box, Heading, Button } from "@chakra-ui/react"

function SignUpAd() {
    return (
        <>
            <Box bg="RGBA(0, 0, 0, 0.06)" textAlign='center' mt='100px' paddingBottom='30px' >
                <Box paddingTop='60px' >
                    <Heading as='h3' size='lg' color='gray.600' fontFamily="Open Sans,sans-serif">
                        Find out if you're getting the vitamins and
                    </Heading>
                    <Heading as='h3' size='lg' color='gray.600' fontFamily="Open Sans,sans-serif">
                        minerals you need with our food diary app.
                    </Heading>

                </Box>
                <Button bg='#FF763F' color='#FFFF' w="25%" h='50px' fontSize='20px' mt="50px" >Sign Up - It's Free!</Button>
            </Box>
        </>
    )
}

export default SignUpAd