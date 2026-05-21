import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';

export default function buttonVerificarVantagem() {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.buttonVerificar} onPress={getValoresCombustiveis()}>
                <Text style={styles.titleButton}>VERIFICAR VANTAGEM</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2b6c47',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 20
    },

    buttonVerificar: {
        height: 40,
        width: 80,
        backgroundColor: '#2b2525'
    },

    titleButton: {
        color: '#fff',
    }
});