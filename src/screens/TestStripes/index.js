import { FlatList, View } from 'react-native'

const arr = Array.from({length:40}, (_,i) => i)

export default () => (
  <FlatList
    style={{backgroundColor: '#fff'}}
    data={arr}
    keyExtractor={e => e}
    renderItem={e => {
      const item = e.item
      const x = (item%16).toString(16)
      const y = (15-(item%16)).toString(16)
      const z = ((5+item)%16).toString(16)
      return <View
        style={{
          margin: 50,
          height: 150,
          backgroundColor: `#${x}${y}${z}`
        }}>
      </View>
    }}
  />
)
