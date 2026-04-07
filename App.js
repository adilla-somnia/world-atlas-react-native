import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './screens/HomeScreen';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import CountryScreen from './screens/CountryScreen';
import FavoriteScreen from './screens/FavoriteScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Country" component={CountryScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Favorite" component={FavoriteScreen} options={{ headerBackTitleStyle: false, headerTitle: '' }} />
      </Stack.Navigator>
    </NavigationContainer>
    </SafeAreaProvider>
  );
}