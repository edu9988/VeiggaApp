import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    flexDirection: 'column',
    gap: 5,
    padding: 10,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'gray'
  },
  text: {
    fontSize: 17,
  },
  addresses: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10
  },
})
