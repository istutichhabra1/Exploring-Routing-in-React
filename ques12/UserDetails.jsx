import { useParams } from "react-router-dom";
import { Box, Text } from "@chakra-ui/react";

function UserDetails() {
  const { id } = useParams();


  const users = [
    { id: 1, name: "Alice", details: "Details about Alice." },
    { id: 2, name: "Bob", details: "Details about Bob." },
    { id: 3, name: "Charlie", details: "Details about Charlie." },
  ];

  const user = users.find((user) => user.id === parseInt(id));

  return (
    <Box p={4}>
      {user ? (
        <Box>
          <Text fontSize="2xl">User Details for {user.name}</Text>
          <Text>{user.details}</Text>
        </Box>
      ) : (
        <Text fontSize="xl" color="red.500">
          User not found
        </Text>
      )}
    </Box>
  );
}

export default UserDetails;
