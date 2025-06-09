import { Pressable, View } from 'react-native'
import { FontAwesome6 } from '@expo/vector-icons'

import styles from './styles'

export default (props) => (
  <View style={styles.container}>
    <Pressable onPress={props.remove}>
      <FontAwesome6 name="trash-can" size={30} color="black" />
    </Pressable>
    <Pressable onPress={props.edit}>
      <FontAwesome6 name="edit" size={30} color="black" />
    </Pressable>
  </View>
)
