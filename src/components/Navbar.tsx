import {
  Avatar,
  AvatarBadge,
  Box,
  Button,
  Flex,
  HStack,
  Heading,
  Spacer,
  Text,
  useToast,
} from "@chakra-ui/react";
import React from "react";

const Navbar = () => {
  const toast = useToast()
  const showToast = ()=>{
    toast({
      title:"Logged out",
      description:"successfully logged out",
      duration:5000,
      isClosable:true,
      colorScheme:"green",
      position:"top"
    })
  }
  return (
    <Flex as="nav" p="10px" mb="40px" alignItems="center" gap="10px">
      <Heading as="h1">Frank Tasks</Heading>
      <Spacer />
      <HStack spacing="20px">
        <Avatar name="mario"  src="/img/mario.png" ><AvatarBadge w="1.3em" bg="teal.500">
          <Text fontSize="xs" color="white">3</Text>
          </AvatarBadge></Avatar>
        <Text>gamalgamer10@yahoo.com</Text>
        <Button onClick={showToast} colorScheme="purple">Logout</Button>
      </HStack>
    </Flex>
    
  );
};

export default Navbar;
