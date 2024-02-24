import { Box,Button,HStack, Image, Input, Text } from '@chakra-ui/react'
import { Minus, Plus } from 'phosphor-react'
import { useShop } from '../../context/shop-context'


export const CartItems = (props) => {
  const {id,productName,price,productImage} = props.data
  const {cartItems, addToCart, removeFromCart, updateCartItemsAmount} = useShop()
  return (
    <HStack mt='2rem'>
         <Box w='750px' h='250px' display='flex' alignItems='center' boxShadow='0px 3px 15px rgba(0, 0, 0, 0.2)' borderRadius='25px' m='30px'>
          <Image src={productImage}  boxSize='250px' />
          <Box>
            <Text as='b'> {productName} </Text>
            <Text>${price} </Text>
           
            <Box display='flex' mt='2rem'>
              <Button colorScheme='teal' onClick={() => removeFromCart(id)}> <Minus size={16} /> </Button>
                <Input value={cartItems[id]} size='md' w='60px' textAlign='center' onChange={(e) => updateCartItemsAmount(Number(e.target.value), id)}/>
              <Button colorScheme='teal' onClick={() => addToCart(id)}> <Plus size={16} /></Button>
            </Box>
          </Box>
          </Box>
    </HStack>
  )
}


