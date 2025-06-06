import { useEffect, useState } from 'react'
import { Image, FlatList, Text, View } from 'react-native'

import productService from '../../services/products'

export default () => {
  const [products, setProducts] = useState()

  useEffect(() => {
    const getAndPrint = async () => {
      try{
        const data = await productService.getAll()
        setProducts(data)
        console.log('data:', data)
        console.log('data.length:',data.length)
      }
      catch(error){
        console.error('getAll error:', error)
      }
    }

    getAndPrint()
  }, [])

  return (
    <FlatList
      style={{backgroundColor: '#fff'}}
      data={products}
      keyExtractor={product => product.id}
      renderItem={product => {
        const item = product.item
        console.log('item.images:', item.images)

        return <View>
          <Image
            style={{
              width: 150,
              height: 300,
              borderStyle: 'dashed',
              borderWidth: 2,
              borderColor: 'black',
              marginHorizontal: 'auto'
            }}
            src={item.images[0]?.src}
          />
          <Text
            style={{
              fontSize: 20,
              textAlign: 'center'
            }}
          >
            {item.name.pt}
          </Text>
        </View>
      }}
    />
  )
}
