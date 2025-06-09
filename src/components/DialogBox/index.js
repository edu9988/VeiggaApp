import { Pressable, Text, View } from 'react-native'

import styles from './styles'

export default (props) => (
  <View style={styles.container}>
    <Pressable style={styles.button} onPress={props.cancel}>
      <Text style={[styles.text,{color: 'red'}]}>Cancelar</Text>
    </Pressable>
    <Pressable style={styles.button} onPress={props.accept}>
      <Text style={[styles.text,{color: 'green'}]}>Salvar</Text>
    </Pressable>
  </View>
)
