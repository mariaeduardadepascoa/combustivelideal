import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import buttonVerificarVantagem from './src/components/button';

export default function App() {
  const [valorE, setValorE] = useState(0);
  const [valorG, setValorG] = useState(0);


  function getValoresCombustiveis () {
    let melhorValor = 0;
    const resultadoGasolina = valorG * 0.7;

    if (resultadoGasolina > valorE) {
      melhorValor = valorE;
    } else {
      melhorValor = resultadoGasolina;
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>ÁLCOOL OU GASOLINA</Text>
      <Image style={styles.imagem}
      source={require('./assets/OIP.webp')}/>
      <View style={styles.etanolView}>
        <Text style={styles.titleCombustiveis}>Preço do Etanol(R$):</Text>
        <TextInput
                placeholder="Digite o preço do etanol"
                placeholderTextColor='#bebebe'
                onChangeText={setValorE}
                style={styles.input} />
      </View>
      <View style={styles.gasolinaView}>
        <Text style={styles.titleCombustiveis}>Preço da Gasolina(R$):</Text>
        <TextInput
                placeholder="Digite o preço do etanol"
                placeholderTextColor='#bebebe'
                onChangeText={setValorG}
                style={styles.input} />
      </View>
      <buttonVerificarVantagem />
      <StatusBar style="auto" />
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

  title: {
    color: '#fff',
    fontWeight: 700,
  },

  imagem: {
    height: 150,
    width: 250,
  },

  titleCombustiveis: {
    color: '#fff',
  },
});
