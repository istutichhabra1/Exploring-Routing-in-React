import { Link } from "react-router-dom";
import { Box, Button } from "@chakra-ui/react";

function Users() {
  const users = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
    { id: 3, name: "Charlie" },
  ];

  return (
    <Box p={4}>
      <h1>Users Page</h1>
      {users.map((user) => (
        <Box key={user.id} mb={2}>
          <Link to={`/users/${user.id}`}>
            <Button colorScheme="teal">{user.name}</Button>
          </Link>
        </Box>
      ))}
    </Box>
  );
}

export default Users;
