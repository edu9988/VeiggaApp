import { createStackNavigator } from '@react-navigation/stack'

import OrderList from '../OrderList'
import CreateEditOrder from '../CreateEditOrder'

const Stack = createStackNavigator()

export default () => (
  <Stack.Navigator initialRouteName='OrderList' screenOptions={{ headerShown: false }}>
    <Stack.Screen name='OrderList' component={OrderList} />
    <Stack.Screen name='CreateEditOrder' component={CreateEditOrder} />
  </Stack.Navigator>
)
