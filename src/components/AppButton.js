import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';

export default function ButtonVerificarVantagem({ onPress }) {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.buttonVerificar} onPress={onPress}>
                <Text style={styles.titleButton}>VERIFICAR VANTAGEM</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    
    buttonVerificar: {
        display: 'flex',
        paddingVertical: 5,
        width: 100,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#4a12c3',
        borderRadius: 8,
        width: 250,
        height: 40
    },

    titleButton: {
        color: '#fff',
        textAlign:'center',
    }
});