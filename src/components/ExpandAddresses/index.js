import { Pressable, Text } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

import styles from './styles'
import Bold from '../Bold'

export default (props) => (
  <Pressable
    style={styles.container}
    onPress={props.action}
  >
    <Text style={styles.text}>
      <Bold>{
        props.expand
          && 'expandir'
          || 'esconder'
      }</Bold>
    </Text>
    <MaterialIcons
      name={
        props.expand
          && "expand-more"
          || "expand-less"
      }
      style={styles.icon}
      size={30}
      color="green"
    />
  </Pressable>
)
