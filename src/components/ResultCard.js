import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';

export default function ResultCard({resultado, resultadoN}) {
    return (
    <View style={styles.resultCard}>
        <Text style={styles.result}>Abasteça com: <Text style={styles.resultadosBold}>{resultado}</Text></Text> 
        <Text style={styles.result}>O <Text style={styles.resultadosBold}>Etanol</Text> está custando <Text style={styles.resultadosBold}>{resultadoN}%</Text> da gasolina</Text>
    </View>
    );
}

const styles = StyleSheet.create({
    resultCard: {
        backgroundColor: '#4a12c3',
        gap: 20,
        width: 260,
        borderRadius: 10,
        padding: 15,
        
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
    },
    
    result: {
        fontWeight: 300,
        color: '#fff',
        textAlign:'center'
    },

    resultadosBold: {
        fontWeight: 700,
    },
});