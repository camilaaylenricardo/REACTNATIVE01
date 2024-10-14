import React, { useState } from 'react';
import { Alert, StyleSheet, Button, View, TextInput } from 'react-native';
import { registerUser } from '../../utils/api'; // Importa la función desde el archivo api.ts

const HomeScreen: React.FC = () => {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const showLoginAlert = async () => {
        if (email && username && password) {
            try {
                // Llamada a la API para registrar el usuario
                const response = await registerUser(username, email, password);

                if (response.data.success) {
                    // Si la respuesta de la API indica éxito
                    Alert.alert('Success', 'Your information has been saved successfully.');
                } else {
                    // Si la API devuelve algún error
                    Alert.alert('Error', 'There was an issue saving your information. Please try again.');
                }
            } catch (error) {
                // Manejo de errores si la API falla o hay un problema de red
                Alert.alert('Error', 'There was an error communicating with the server. Please try again.');
            }
        } else {
            // Si falta algún campo
            Alert.alert('Error', 'Please fill out all fields before submitting.');
        }
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
            />
            <TextInput
                style={styles.input}
                placeholder="Username"
                value={username}
                onChangeText={setUsername}
                autoCapitalize="none"
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />
            <Button title="Submit Info" onPress={showLoginAlert} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
    },
    input: {
        width: '100%',
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 12,
        paddingHorizontal: 8,
        borderRadius: 4,
    },
});

export default HomeScreen;