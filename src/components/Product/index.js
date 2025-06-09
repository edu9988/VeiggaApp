import { Dimensions, Image, Text, View } from 'react-native'

export default (props) => {
  const name = props.data.name.pt
  const price = props.data.variants[0].price
  const img = props.data.images.length !== 0
    ? { uri: props.data.images[0].src }
    : require('../../assets/no-photo.png')


  /*the following is necessary because
  local images loaded with require()
  don't obey width: '80%'!*/
  const ratio = props.data.images.length !== 0
    ? props.data.images[0].width / props.data.images[0].height
    : 0.827586206896552

  const width = 0.8*Dimensions.get('window').width
  const height = width/ratio

  return (
    <View style={{ }}>
      <Image
        style={{
          width: width,
          height: height,
          resizeMode: 'contain',
          marginHorizontal: '10%'
        }}
        source={img}
      />
      <Text
        style={{
          fontFamily: 'Montserrat',
          width: '82%',
          marginHorizontal: '9%',
          fontSize: 18,
          textAlign: 'center'
        }}
      >
        {name}
      </Text>
      <Text
        style={{
          fontFamily: 'Montserrat',
          fontSize: 24,
          fontWeight: 'bold',
          textAlign: 'center'
        }}
      >
        R${price}
      </Text>
    </View>
  )
}
