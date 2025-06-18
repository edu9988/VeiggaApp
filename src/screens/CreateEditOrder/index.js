import { useState }  from 'react'
import { Alert, ScrollView }  from 'react-native'
import { useNavigation } from '@react-navigation/native'

import Input from '../../components/Input'
import DialogBox from '../../components/DialogBox'
import orderService from '../../services/orders'

export default (props) => {
  const [name, setName] = useState( props?.route?.params?.name ? props.route.params.name : '')
  const [email, setEmail] = useState( props?.route?.params?.email ? props.route.params.email : '')

  const oldId = props?.route?.params?.id 
  const navigation = useNavigation()

  const saveOrder = async () => {
    if( name === '' || email === '' ){
      Alert.alert('Campo vazio')
    }
    else if( name === props?.route?.params?.name
      && props?.route?.params?.email === email
    ){
      navigation.goBack()
    }
    else{
      if( oldId ){
        const updatedOrder = {
          ...props.route.params,
          name: name,
          email: email
        }
        setName('')
        setEmail('')
        try{
          await orderService.put(oldId, updatedOrder)
        }
        catch(error){
          console.error('order put error:', error)
        }
      }
      else{
        const newOrder = {
          name: name,
          email: email
        }
        setName('')
        setEmail('')
        try{
          await orderService.post(newOrder)
        }
        catch(error){
          console.error('order post error:', error)
        }
      }
      navigation.navigate('OrderList')
    }
  }

  return (
    <ScrollView>
      <Input
        label="Nome"
        value={name}
        action={text => setName(text)}
      />
      <Input
        label="E-mail"
        value={email}
        action={text => setEmail(text)}
      />
      <DialogBox
        cancel={() => navigation.goBack()}
        accept={() => saveOrder()}
      />
    </ScrollView>
  )
}
