import {NavigationContainer} from '@react-navigation/native'
import Feed from './screens/tabScreens/Feed'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Settings from './screens/tabScreens/Settings';
import Notifications from './screens/tabScreens/Notification';
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

{/* <Ionicons name="settings" size={24} color="black" /> */}

//Tab Bottom
const Tab = createBottomTabNavigator();

function TabGroup() {
    return (
        <Tab.Navigator
            screenOptions={({route,navigation}) => ({
                tabBarIcon:({color,focused,size}) => {
                    let iconName;
                    if (route.name === 'Feed'){
                        iconName= focused ? 'home' : 'home-outline';
                    }else if(route.name === 'Settings'){
                        iconName = focused ? 'settings' : 'ios-settings-outline'
                    
                    }else if(route.name === 'Notifications'){
                        iconName = focused ? 'notifications' : 'ios-notifications-outline'
                    }
                    return <Ionicons name={iconName} size={size} color={color}/>
                },
                tabBarActiveTintColor:"#1DA1F2",
                
            })}
        >
            <Tab.Screen name='Feed' component={Feed}/>
            <Tab.Screen name='Notifications' component={Notifications}/>
            <Tab.Screen name='Settings' component={Settings}/>
            
        </Tab.Navigator>
    )
}
export default function Navigation() {
    return (
        <NavigationContainer>
            <TabGroup/>
        </NavigationContainer>
    )
}