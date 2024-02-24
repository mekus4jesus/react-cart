import { Box, HStack, Heading, VStack } from '@chakra-ui/react'
import React from 'react'
import { PRODUCTS } from '../../products'
import { Product } from './product'

export const Shop = () => {
  return (
    <VStack>
      <HStack>
          <Box>
            <Box textAlign='center' mt='2rem'>
              <Heading as='h1' size='2xl'> Evangelist Shop </Heading>
            </Box>
            <Box 
            display='grid'
            gridTemplateColumns='repeat(3,1fr)'
            gridGap={8}
            px={8}
            >
               {PRODUCTS.map((product) => 
               <Product data={product}/>
               )}
            </Box>
          </Box>
      </HStack>
    </VStack>
  )
}


