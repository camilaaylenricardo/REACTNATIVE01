import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { RootStackParamList } from './Types'; // Importa tus tipos
import Login from '../components/Login';
import Register from '../components/Register';
import HomeScreen from '../app/(tabs)/index'; // Asegúrate de que esta importación sea correcta

const Stack = createStackNavigator<RootStackParamList>(); // Usa el tipo de los parámetros

const AppNavigator: React.FC = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator > {'Login'/* Asegúrate de que 'Login' esté aquí */}
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Register" component={Register}/>
                <Stack.Screen name="Home" component={HomeScreen} />
            
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default AppNavigator;