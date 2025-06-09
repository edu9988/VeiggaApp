import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import { View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { AntDesign, FontAwesome, FontAwesome5 } from '@expo/vector-icons'

import TestStripes from './screens/TestStripes'
import TestGet from './screens/TestGet'
import CustomerTab from './screens/CustomerTab'

const Tab = createBottomTabNavigator()

export default () => (
  <SafeAreaProvider>
    <SafeAreaView style={{flex: 1}}>
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName="Customers"
          screenOptions={ ({ route }) => ({
            headerShown: false,
            tabBarStyle: {
              width: '90%',
              height: 75,
              marginBottom: 10,
              marginHorizontal: '5%',
              position: 'absolute',
              elevation: 0,
              backgroundColor: 'rgba(27,27,27,0.5)',
              borderTopWidth: 0,
              borderRadius: 37.5,
            },
            tabBarShowLabel: false,
            tabBarItemStyle: {
              padding: 0,
              height: 75,
            },
            //tabBarActiveTintColor: '#6200ee',
            tabBarActiveTintColor: '#000',
            tabBarInactiveTintColor: 'gray',
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
                {route.name === 'Shop' && <FontAwesome name="shopping-bag" size={35} color={color}/>}
                {route.name === 'Cart' && <AntDesign name="shoppingcart" size={40} color={color}/>}
                {route.name === 'Customers' && <FontAwesome5 name="user" size={35} color={color}/>}
              </View>
            )
          })}
        >
          <Tab.Screen name="Shop" component={TestGet} />
          <Tab.Screen name="Cart" component={TestStripes} />
          <Tab.Screen name="Customers" component={CustomerTab} />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  </SafeAreaProvider>
)
