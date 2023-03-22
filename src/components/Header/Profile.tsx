import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

export function Profile() {
  return(
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text>Gabriel Varela</Text>
        <Text 
          color="gray.300"
          fontSize="small"
        >
          gabriel@email.com
        </Text>
      </Box>
      <Avatar size="md" name="Gabriel Varela" src="https://github.com/gabrielvrl.png" />
    </Flex>
  );
}