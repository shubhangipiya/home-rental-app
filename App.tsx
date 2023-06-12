import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import BoardScreen from './screen/BoardScreen';
// import HomeScreen from './screen/HomeScreen';
// import DetailScreen from './screen/DetailScreen';

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="BoardScreen" component={BoardScreen} />
                {/* <Stack.Screen name="HomeScreen" component={HomeScreen} />
                <Stack.Screen name="DetailScreen" component={DetailScreen} /> */}
            </Stack.Navigator>
        </NavigationContainer>
    );
}