import { FlatList, Text, View }  from 'react-native'
import { useState, useEffect }  from 'react'
import { useNavigation } from '@react-navigation/native'

import AddButton from '../../components/AddButton'
import CustomerBox from '../../components/CustomerBox'
import customerService from '../../services/customers'
import styles from './styles'

export default () => {
  const [customers, setCustomers] = useState([])

  useEffect(() => {
    const getFromServer = async () => {
      try{
        const remoteCustomers = await customerService.getAll()
        setCustomers(remoteCustomers)
      }
      catch(error){
        console.log('useEffect error:',error)
      }
    }

    getFromServer()
  }, [])

  const navigation = useNavigation()

  const removeCustomer = async (id) => {
    try{
      await customerService.deleteById(id)
      setCustomers( customers.filter(customer => customer.id !== id) )
    }
    catch(error){
      console.error('delete error:', error)
    }
  }

  const editCustomer = (customer) => {
    navigation.navigate('CreateEditCustomer', customer)
  }

  return (<>
    {customers.length === 0
      && <Text style={styles.warning}>
        Nenhum cliente
      </Text>
    }
    <AddButton action={() => navigation.navigate('CreateEditCustomer')}/>
    <FlatList
      data={customers}
      keyExtractor={customer => customer.id}
      renderItem={customer => {
        const obj = customer.item
        return <CustomerBox
          customer={obj}
          remove={() => removeCustomer(obj.id)}
          edit={() => editCustomer(obj)}
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
