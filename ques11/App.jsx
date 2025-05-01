import React from 'react';
import { Box, Flex, Link, Stack, Button } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <Box bg="gray.800" p={4}>
      <Flex justify="space-between" align="center">
        <Box>
          <NavLink to="/" exact>
            <Button variant="link" color="white" fontSize="lg">
              Logo
            </Button>
          </NavLink>
        </Box>
        <Box display={{ base: 'none', md: 'block' }}>
          <Stack direction="row" spacing={6}>
            <NavLink to="/" exact>
              <Link
                color="white"
                _activeLink={{ color: 'blue.500' }}
                _hover={{ color: 'blue.300' }}
                fontSize="lg"
              >
                Home
              </Link>
            </NavLink>
            <NavLink to="/about" exact>
              <Link
                color="white"
                _activeLink={{ color: 'blue.500' }}
                _hover={{ color: 'blue.300' }}
                fontSize="lg"
              >
                About
              </Link>
            </NavLink>
            <NavLink to="/contact" exact>
              <Link
                color="white"
                _activeLink={{ color: 'blue.500' }}
                _hover={{ color: 'blue.300' }}
                fontSize="lg"
              >
                Contact
              </Link>
            </NavLink>
            <NavLink to="/services" exact>
              <Link
                color="white"
                _activeLink={{ color: 'blue.500' }}
                _hover={{ color: 'blue.300' }}
                fontSize="lg"
              >
                Services
              </Link>
            </NavLink>
          </Stack>
        </Box>
        <Box display={{ base: 'block', md: 'none' }}>
          <Stack direction="column" spacing={4}>
            <NavLink to="/" exact>
              <Link color="white" fontSize="lg">
                Home
              </Link>
            </NavLink>
            <NavLink to="/about" exact>
              <Link color="white" fontSize="lg">
                About
              </Link>
            </NavLink>
            <NavLink to="/contact" exact>
              <Link color="white" fontSize="lg">
                Contact
              </Link>
            </NavLink>
            <NavLink to="/services" exact>
              <Link color="white" fontSize="lg">
                Services
              </Link>
            </NavLink>
          </Stack>
        </Box>
      </Flex>
    </Box>
  );
};

export default Navbar;
