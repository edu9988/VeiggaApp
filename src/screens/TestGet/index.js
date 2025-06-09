import { useEffect, useState } from 'react'
import { Image, FlatList, Text, View } from 'react-native'

import productService from '../../services/products'
import Product from '../../components/Product'

export default () => {
  const [products, setProducts] = useState()

  useEffect(() => {
    const getAndPrint = async () => {
      try{
        const data = await productService.getAll()
        setProducts(data)
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
      ItemSeparatorComponent={() => (<View style={{
        marginHorizontal: 3,
        height: 50
      }}/>)}
      data={products}
      keyExtractor={product => product.id}
      renderItem={product => {
        const item = product.item

        return <Product data={item} />
      }}
    />
  )
}
