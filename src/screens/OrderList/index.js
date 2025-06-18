import { FlatList, Text, View }  from 'react-native'
import { useState, useEffect }  from 'react'
import { useNavigation } from '@react-navigation/native'

import AddButton from '../../components/AddButton'
import OrderBox from '../../components/OrderBox'
import orderService from '../../services/orders'
import styles from './styles'

export default () => {
  const [orders, setOrders] = useState([])

  useEffect(() => {
    const getFromServer = async () => {
      try{
        const remoteOrders = await orderService.getAll()
        setOrders(remoteOrders)
      }
      catch(error){
        console.log('useEffect error:',error)
      }
    }

    getFromServer()
  }, [])

  const navigation = useNavigation()

  const removeOrder = async (id) => {
    try{
      await orderService.deleteById(id)
      setOrders( orders.filter(order => order.id !== id) )
    }
    catch(error){
      console.error('delete error:', error)
    }
  }

  const editOrder = (order) => {
    navigation.navigate('CreateEditOrder', order)
  }

  return (<>
    {orders.length === 0
      && <Text style={styles.warning}>
        Nenhuma Venda
      </Text>
    }
    <AddButton action={() => navigation.navigate('CreateEditOrder')}/>
    <FlatList
      data={orders}
      keyExtractor={order => order.id}
      renderItem={order => {
        const obj = order.item
        return <OrderBox
          order={obj}
          remove={() => removeOrder(obj.id)}
          edit={() => editOrder(obj)}
        />
      }}
      ListFooterComponent={() => {
        return <View />
      }}
      ListFooterComponentStyle={{
        height: 105
      }}
    />
  </>)
}
