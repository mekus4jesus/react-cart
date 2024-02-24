import './navbar.css'
import { Box } from '@chakra-ui/react'
import { ShoppingCart } from 'phosphor-react'
import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <Box bg='rgb(19,19,19)' w='100%' p={4} color='white'>
      <Box display='flex' justifyContent='flex-end' alignItems='center' fontSize='1.4rem' fontWeight='800
      '>
        <Link to='/'> Shop </Link>
        <Link to='/cart'> <ShoppingCart  size={32}/> </Link>
      </Box>
    </Box>
  )
}


