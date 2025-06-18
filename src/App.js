import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import { View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { AntDesign, FontAwesome, FontAwesome5 } from '@expo/vector-icons'

//import TestStripes from './screens/TestStripes'
import TestGet from './screens/TestGet'
import CustomerTab from './screens/CustomerTab'
import OrderTab from './screens/OrderTab'

const Tab = createBottomTabNavigator()

export default () => (
  <SafeAreaProvider>
    <SafeAreaView style={{flex: 1}}>
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName="Vendas"
          screenOptions={ ({ route }) => ({
            headerShown: false,
            tabBarStyle: {
              height: 90,
              position: 'absolute',
              elevation: 0,
              backgroundColor: 'rgba(255, 255, 255, 0.8)',
              borderTopWidth: 1,
              borderTopColor: '#ccc',
            },
            tabBarShowLabel: true,
            tabBarItemStyle: {
              padding: 0,
              height: 90,
            },
            //tabBarActiveTintColor: '#6200ee',
            tabBarActiveTintColor: '#000',
            tabBarInactiveTintColor: '#ccc',
            tabBarLabelStyle: {
              position: 'absolute',
              bottom: 0,
              fontSize: 15,
            },
            tabBarIcon: ({ color }) => (
              <View style={{
                width: 60,
                height: 60,
                alignItems: 'center',
                justifyContent: 'center',
                marginVertical: 'auto',
                borderStyle: 'solid',
                borderWidth: 1,
                borderColor: '#ccc',
                borderRadius: 40,
                backgroundColor: 'white',
              }}>
                {route.name === 'Produtos' && <FontAwesome name="shopping-bag" size={35} color={color}/>}
                {route.name === 'Vendas' && <AntDesign name="shoppingcart" size={40} color={color}/>}
                {route.name === 'Clientes' && <FontAwesome5 name="user" size={35} color={color}/>}
              </View>
            )
          })}
        >
          <Tab.Screen name="Produtos" component={TestGet} />
          <Tab.Screen name="Vendas" component={OrderTab} />
          <Tab.Screen name="Clientes" component={CustomerTab} />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  </SafeAreaProvider>
)
