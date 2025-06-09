import { Text, TextInput, View } from 'react-native'

import styles from './styles'

export default (props) => (
  <View style={styles.container}>
    <Text style={styles.text}>
      {props.label}:
    </Text>
    <TextInput
      style={styles.input}
      inputMode={"text"}
      value={props.value}
      onChangeText={props.action}
    />
  </View>
)
