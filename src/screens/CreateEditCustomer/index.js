import { useState }  from 'react'
import { Alert, ScrollView }  from 'react-native'
import { useNavigation } from '@react-navigation/native'

import Input from '../../components/Input'
import DialogBox from '../../components/DialogBox'
import customerService from '../../services/customers'

export default (props) => {
  const [name, setName] = useState( props?.route?.params?.name ? props.route.params.name : '')
  const [email, setEmail] = useState( props?.route?.params?.email ? props.route.params.email : '')

  const oldId = props?.route?.params?.id 
  const navigation = useNavigation()

  const saveCustomer = async () => {
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
        const updatedCustomer = {
          ...props.route.params,
          name: name,
          email: email
        }
        setName('')
        setEmail('')
        try{
          await customerService.put(oldId, updatedCustomer)
        }
        catch(error){
          console.error('customer put error:', error)
        }
      }
      else{
        const newCustomer = {
          name: name,
          email: email
        }
        setName('')
        setEmail('')
        try{
          await customerService.post(newCustomer)
        }
        catch(error){
          console.error('customer post error:', error)
        }
      }
      navigation.navigate('CustomerList')
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
        accept={() => saveCustomer()}
      />
    </ScrollView>
  )
}
