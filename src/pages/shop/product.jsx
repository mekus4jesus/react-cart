import { Box, Button, Image, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { useShop } from '../../context/shop-context'

export const Product = (props) => {
  const {id,productName,price,productImage} = props.data
  const { addToCart,cartItems } = useShop()
  const cartItemsAmount = cartItems[id]
  return (
    <VStack>
        <Box mt='1.4rem'>
        <Image src={productImage} />
        <Box textAlign='center' >
        <Text as='b'> {productName} </Text>
        <Text>${price}</Text>
        </Box>
        <VStack mt='1rem' mb='1rem'>
        <Button colorScheme='teal' variant='outline' borderRadius='15px' onClick={() => addToCart(id)}> Add to CART { cartItemsAmount > 0  && <>({cartItemsAmount})</>} </Button>
        </VStack>
      </Box>
    </VStack>
  )
}


