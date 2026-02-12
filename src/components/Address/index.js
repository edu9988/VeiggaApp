import { Text, View }  from 'react-native'

import styles from './styles'

export default (props) => {
  const address = props.address

  return(
    <View style={styles.container}>
      <Text style={styles.text}>{address.address} {address.number}{address.floor && `/${address.floor}`}, {address.locality}</Text>
      <Text style={styles.text}>{address.city}, {address.province} - {address.country}</Text>
      {address.zipcode !== null && <Text style={styles.text}>{address.zipcode.slice(0,5)}-{address.zipcode.slice(5)}</Text> || <Text style={styles.text}>CEP não fornecido</Text>}
    </View>
  )
}
