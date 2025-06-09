import { createStackNavigator } from '@react-navigation/stack'

import CustomerList from '../CustomerList'
import CreateEditCustomer from '../CreateEditCustomer'

const Stack = createStackNavigator()

export default () => (
  <Stack.Navigator initialRouteName='CustomerList' screenOptions={{ headerShown: false }}>
    <Stack.Screen name='CustomerList' component={CustomerList} />
    <Stack.Screen name='CreateEditCustomer' component={CreateEditCustomer} />
  </Stack.Navigator>
)
