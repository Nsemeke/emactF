"use client"

import { Box, Button, Container, Flex, Heading, Input, Link, Text, Image, Stack, Icon } from "@chakra-ui/react";
import { FaPlay } from "react-icons/fa";
import { BsCheckCircleFill } from "react-icons/bs";

export default function HeroSection() {
    return (
        <Box minH="100vh" display="flex" flexDirection="column">
            <Box position="relative" pb={3} height={{ base: "75px", md: "75px" }}>
                <Container maxW="1800px" py={3}>
                    <Box position="absolute" left={{ base: 5, md: 5 }} top={3}>
                        <Image 
                            src="/logo.png" 
                            alt="Betr Beta Logo" 
                            height={{ base: "35px", md: "50px" }}
                            objectFit="contain"
                        />
                    </Box>
                    
                    <Box position="absolute" right={{ base: 15, md: 90 }} top={3}>
                        <Button 
                            color="#1155B2" 
                            borderColor="#1155B2"
                            variant="outline" 
                            size={{ base: "sm", md: "lg" }}
                            fontWeight="800"
                            borderRadius="md"
                            fontSize={{ base: "sm", md: "lg" }}
                            px={{ base: 3, md: 6 }}
                            py={{ base: 2, md: 6 }}
                            height={{ base: "32px", md: "25px" }}
                            _hover={{ bg: 'transparent', opacity: 0.8 }}
                        >
                            Book a Demo
                        </Button>
                    </Box>
                </Container>
                <Box position="absolute" bottom={0} left={0} right={0} height="1px" bg="gray.200" />
            </Box>

            <Box flex="1" display="flex" alignItems="flex-start" pt={{ base: 4, md: 8 }}>
                <Container maxW="1800px" p={0}>
                    <Flex 
                        direction={{ base: "column", lg: "row" }} 
                        align="center" 
                        justify="space-between" 
                        gap={4}
                    >
                        {/* Left Content */}
                        <Stack spacing={6} maxW={{ base: "100%", md: "800px" }} px={4}>
                            <Heading 
                                fontSize={{ base: "36px", md: "72px" }} 
                                lineHeight="1.2"
                            >
                                Your All-in-One{" "}
                                <Text as="span" color="#1155B2" display="inline">
                                    Email
                                </Text>{" "}
                                <Text as="span" color="#1155B2" display="block">
                                    Outreach
                                </Text>
                                <Text as="span" color="#1155B2" display="inline">
                                    Optimisation
                                </Text>
                                {" "}Tool
                            </Heading>
                            
                            <Text 
                                fontSize={{ base: "md", md: "2xl" }} 
                                color="gray.600" 
                                maxW={{ base: "100%", md: "650px" }}
                                lineHeight="1.6"
                            >
                                With Smart Send Time, Auto Segmentation, and Bot Detection Analytics, 
                                the Emact platform helps you achieve your engagement goals with less effort. 
                                Start optimizing your email strategy today. Choose results today.
                            </Text>

                            <Box>
                                <Button 
                                    backgroundColor="#1155B2" 
                                    color="white" 
                                    px={{ base: 4, md: 8 }} 
                                    mb={4}
                                    fontSize={{ base: "md", md: "xl" }}
                                    py={{ base: 6, md: 7 }}
                                    height="50px"
                                    w={{ base: "full", md: "auto" }}
                                >
                                    Start Optimizing Your Email Outreach
                                </Button>
                                
                                <Flex align="center" gap={2}>
                                    <Icon as={BsCheckCircleFill} color="green.500" boxSize={4} />
                                    <Text 
                                        color="#1155B2" 
                                        fontSize={{ base: "xs", md: "md" }}
                                    >
                                        Try us free | No sign up required | Privacy friendly
                                    </Text>
                                </Flex>
                            </Box>
                        </Stack>

                        {/* Right Illustration */}
                        <Box 
                            flex={1} 
                            position="relative" 
                            h={{ base: "300px", md: "700px" }} 
                            display="flex" 
                            alignItems="center"
                        >
                            <Image 
                                src="/mockup.png" 
                                alt="Email Optimization Platform"
                                w="full"
                                h="full"
                                objectFit="contain"
                                ml={8}
                            />
                        </Box>
                    </Flex>
                </Container>
            </Box>
        </Box>
    );
}