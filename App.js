import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import styles from "./estilos/style.js"
export default function App() {
  return (
    <View style={styles.viewPrincipal}>
         <View style={styles.viewCabecalho}>
         </View>
        
         <View style={styles.viewcenter}>
        <Image style={styles.img1} source={"./assets/molecu.png"} />
      </View>

        <View >
          <Text style={styles.texto}>Cadastro</Text>
          <TextInput style={styles.textInput} placeholder="Digite seu email" />
          <TextInput style={styles.textInput} placeholder="Digite sua senha" />
          <TouchableOpacity style={styles.botao}>
            <Text style={styles.botaoTexto}>Cadastrar</Text>
          </TouchableOpacity>'
         </View>

    </View>
  );
}

