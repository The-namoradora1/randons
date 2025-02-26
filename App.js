import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import styles from "./estilos/style.js"
export default function App() {
  return (
    <View style={styles.viewPrincipal}>
         <View style={styles.viewCabecalho}>
         </View>
        
         <View style={styles.viewcenter}>
        <Image source={require("./assets/molecu.jpg")} />
      </View>

        <View >
          <Text style={styles.textoCad}>Cadastro</Text>
          <TextInput style={styles.textInput} placeholder="Digite seu email" />
          <TextInput style={styles.textInput} placeholder="Digite sua senha" />

         </View>
         <View style= {{flexDirection:'row'}}>
          <TouchableOpacity>
            <Text style ={styles.texto} >Esqueceu seu e-mail?</Text>
            </TouchableOpacity>

            <TouchableOpacity>
            <Text style ={styles.texto} >Esqueceu seu a senha?</Text>
            </TouchableOpacity>
         </View>

         <TouchableOpacity style={styles.botao}>
            <Text style={styles.botaoTexto}>Entrar</Text>
          </TouchableOpacity>'
    </View>
  );
}

