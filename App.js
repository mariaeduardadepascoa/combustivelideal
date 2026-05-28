import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import ButtonVerificarVantagem from './src/components/AppButton.js';
import ResultCard from './src/components/ResultCard.js';

export default function App() {
  const [valorE, setValorE] = useState(0);
  const [valorG, setValorG] = useState(0);
  const [resultado, setResultado] = useState('');
  const [resultadoN, setResultadoN] = useState(0);


  function melhorOpcao() {
    setValorE(Number(valorE));
    setValorG(Number(valorG));

    if (valorE < valorG * 0.7) {
      setResultado('ETANOL');
    } else {
      setResultado('GASOLINA');
    }

    setResultadoN(((valorE / valorG) * 100).toFixed(1));
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>ÁLCOOL OU GASOLINA</Text>
      <Image style={styles.imagem}
        source={require('./assets/OIP.webp')}/>
      <View style={styles.etanolView}>
        <Text style={styles.titleCombustiveis}>Preço do Etanol(R$):</Text>
        <TextInput style={styles.textsInputs}
          placeholder="Ex: 12.00"
          placeholderTextColor='#bebebe'
          onChangeText={setValorE}

          style={styles.input} />
      </View>
      <View style={styles.gasolinaView}>
        <Text style={styles.titleCombustiveis}>Preço da Gasolina(R$):</Text>
        <TextInput style={styles.textsInputs}
          placeholder="Ex: 14.50"
          placeholderTextColor='#bebebe'
          onChangeText={setValorG}
          style={styles.input} />
      </View>
      <ButtonVerificarVantagem onPress={melhorOpcao} />
      <ResultCard 
        resultado={resultado}
        resultadoN={resultadoN}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 20
  },

  title: {
    width: 250,
    backgroundColor: '#4a12c3',
    color: '#fafafa',
    textAlign: 'center',
    borderRadius: 8,
    paddingVertical: 5,
    fontWeight: 700,
  },

  imagem: {
    height: 150,
    width: 250,
    borderRadius: 8,
  },

  titleCombustiveis: {
    color: '#481baa',
  },

  textsInputs: {
    borderWidth: 3,
    borderColor: '#101010',
    borderStyle: 'solid',
  },
});