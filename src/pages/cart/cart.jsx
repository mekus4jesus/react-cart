import { Box, Button, HStack, Heading, Text, VStack } from '@chakra-ui/react'
import { PRODUCTS } from '../../products'
import { useShop } from '../../context/shop-context'
import { CartItems } from './cart-items'
import { useNavigate } from 'react-router-dom'


export const Cart = () => {
  const { cartItems, getTotalCartAmount } = useShop()
   const totalAmount = getTotalCartAmount()
   const navigate = useNavigate()
  return (
    <VStack>
      <HStack>
      <Box display='flex' flexDirection='column' justifyContent='center' alignItems='center'>
       <Box>
         <Heading as='h1' size='2xl'> Your Cart Items </Heading>
       </Box>
       <Box>
         {PRODUCTS.map((product) => {
           if(cartItems[product.id] !== 0 ){
             return <CartItems data={product} />
           }
         })}
       </Box>
       <VStack>
        {totalAmount > 0 ? (
          <Box>
            <Text mb='0.8rem' textAlign='center'> Subtotal: ${ totalAmount} </Text>
            <Button colorScheme='teal' mr='1rem' onClick={() => navigate("/")}> Continue Shopping </Button>
            <Button colorScheme='teal'>Checkout </Button>
          </Box>
         ) : ( <Heading as='h1' mt='1rem'> Your Cart is Empty!! </Heading>
         )} 
       </VStack>
    </Box>
      </HStack>
    </VStack>
  )
}


