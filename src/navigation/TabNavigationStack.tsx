import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { HomeScreen } from '../screens'
import { HOME_SCREEN } from './screens'
import TabBar from './TabBar'

const Tab = createBottomTabNavigator()

const TabNavigationStack: () => JSX.Element = () => {
  return (
    <Tab.Navigator
      initialRouteName={HOME_SCREEN.NAME}
      // eslint-disable-next-line react/no-unstable-nested-components
      tabBar={props => <TabBar {...props} />}
    >
      <Tab.Screen
        name={HOME_SCREEN.NAME}
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarLabel: HOME_SCREEN.TITLE,
        }}
      />
    </Tab.Navigator>
  )
}

export default TabNavigationStack
