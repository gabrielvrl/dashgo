import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return(
    <Flex align="center">
      {
        showProfileData && (
          <Box mr="4" textAlign="right">
            <Text>Gabriel Varela</Text>
            <Text 
              color="gray.300"
              fontSize="small"
            >
              gabriel@email.com
            </Text>
          </Box>
        )
      }

      <Avatar size="md" name="Gabriel Varela" src="https://github.com/gabrielvrl.png" />
    </Flex>
  );
}