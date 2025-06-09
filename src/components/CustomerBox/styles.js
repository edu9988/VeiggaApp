import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    flexDirection: 'column',
    gap: 10,
    marginHorizontal: 10,
    marginTop: 20,
    padding: 10,
    borderWidth: 2,
    borderStyle: 'solid',
    borderColor: 'black'
  },
  text: {
    fontSize: 20,
  },
  addresses: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10
  },
})
