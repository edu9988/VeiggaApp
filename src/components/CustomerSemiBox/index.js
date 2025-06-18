import { FlatList, Text, View } from 'react-native'
import { useState } from 'react'
import { MaterialIcons } from '@expo/vector-icons'

import styles from './styles'
import ButtonBox from '../ButtonBox'
import Bold from '../Bold'
import ExpandAddresses from '../ExpandAddresses'
import Address from '../Address'

export default (props) => {
  const [show, setShow] = useState(false)
  const customer = props?.customer

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        id: <Bold>{customer?.id}</Bold>
      </Text>
      <Text style={styles.text}>
        Nome: <Bold>{customer?.name}</Bold>
      </Text>
      <Text style={styles.text}>
        E-mail: <Bold>{customer?.email}</Bold>
      </Text>
      <Text style={styles.text}>
        Total consumido: <Bold>{customer?.total_spent} {customer?.total_spent_currency}</Bold>
      </Text>
      <View style={styles.addresses}>
        <Text style={styles.text}>
          Endereços: {customer?.addresses?.length === 0 && <Bold>Nenhum</Bold>}
        </Text>
        {customer?.addresses?.length > 0 && (
          show && <ExpandAddresses
            expand={false}
            action={() => {
              setShow(false)}}
          />
          || <ExpandAddresses
            expand={true}
            action={() => {
              setShow(true)}}
          />
        )}
      </View>
      {show && <FlatList
        data={customer?.addresses}
        keyExtractor={item => item.id}
        renderItem={element => {
          const item = element.item
          return <Address address={item}/>
        }}
      />}
    </View>
  )
}
