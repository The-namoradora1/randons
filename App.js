import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import styles from "./style.js";
import { useState } from 'react';

export default function App() {
  const [selectedOperation, setSelectedOperation] = useState("");
  const [firstNumber, setFirstNumber] = useState("");
  const [secondNumber, setSecondNumber] = useState("");
  const [result, setResult] = useState(null);

  const calculate = () => {
    const num1 = parseInt(firstNumber);
    const num2 = parseInt(secondNumber);
    let result;

        if (num2 === 0 || num1 === 0) {
          Alert.alert("Erro", "QUEM DIVIDE POR ZERO MERECE QUEIMAR NAS CHAMAS DO INFERNO.");
          console.log("Erro: Divisão por zero.");
          return;
        }

    switch (selectedOperation) {
      case "+":
        result = num1 + num2;
        break;
      case "-":
        result = num1 - num2;
        break;
      case "*":
        result = num1 * num2;
        break;
      case "/":

        result = num1 / num2;
        break;
      default:
        Alert.alert("Erro", "Por favor, selecione uma operação.");
        return;
    }

    setResult(result);
  };

  return (
    <View style={[styles.viewPrincipal, { justifyContent: 'center', alignItems: 'center' }]}>
      <Text style={styles.texto}>Calculator</Text>
      <TextInput
        style={styles.textInput}
        placeholder="primeiro numero"
        keyboardType="numeric"
        value={firstNumber}
        onChangeText={setFirstNumber}
      />
      <Picker
        selectedValue={selectedOperation}
        style={styles.textInput}
        onValueChange={(itemValue, itemIndex) => setSelectedOperation(itemValue)}
      >
        <Picker.Item label="Selecione a operação" value="" />
        <Picker.Item label="+" value="+" />
        <Picker.Item label="-" value="-" />
        <Picker.Item label="*" value="*" />
        <Picker.Item label="/" value="/" />
      </Picker>
      
      <TextInput
        style={styles.textInput}
        placeholder="segundo numero"
        keyboardType="numeric"
        value={secondNumber}
        onChangeText={setSecondNumber}
      />
      
      <TouchableOpacity style={styles.botao} onPress={calculate}>
        <Text style={styles.botaoTexto}>calcular</Text>
      </TouchableOpacity>

      {result !== null && (
        <Text style={styles.resultado}>Resultado: {result}</Text>
      )}
    </View>
  );
}
