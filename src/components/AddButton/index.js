import { Text, Pressable } from 'react-native'
import { FontAwesome6 } from '@expo/vector-icons'

import styles from './styles'

export default (props) => (
  <Pressable style={styles.button} onPress={props.action}>
    <FontAwesome6 name='add' size={50} color='black' />
  </Pressable>
)
