import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './screens/HomeScreen';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import CountryScreen from './screens/CountryScreen';
import FavoriteScreen from './screens/FavoriteScreen';
import { Text } from 'react-native-paper';
import MyScreen from './screens/MyScreen';
import { mainStyle } from './styles/main';
import { setStatusBarBackgroundColor } from 'expo-status-bar';

const Stack = createNativeStackNavigator();

export default function App() {
  // return (
  //   <SafeAreaProvider>
  //   <NavigationContainer>
  //     <Stack.Navigator initialRouteName='Home'>
  //       <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
  //       <Stack.Screen name="Country" component={CountryScreen} options={{ headerShown: false }} />
  //       <Stack.Screen name="Favorite" component={FavoriteScreen} options={{ headerBackTitleStyle: false}} />
  //     </Stack.Navigator>
  //   </NavigationContainer>
  //   </SafeAreaProvider>
  // );

  return (
    <SafeAreaProvider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName='Home'>
            <Stack.Screen name='Home' component={HomeScreen}  options={{headerShown: false}} />
            <Stack.Screen name='Country' component={CountryScreen} options={{
              headerTransparent: true, headerBackTitleVisible: false, headerTitle: ''
            }} />
            <Stack.Screen name='Favorite' component={FavoriteScreen} options={{headerShown: false, animation: 
              'fade_from_bottom'
            }} />
          </Stack.Navigator>
        </NavigationContainer>
    </SafeAreaProvider>
  )
}