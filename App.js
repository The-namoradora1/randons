import { View, StyleSheet, Text, TouchableOpacity, Image, ScrollView } from 'react-native';

export default function App() {
  return (
    <View style={styles.viewPrincipal}>
      <ScrollView contentContainerStyle={styles.scrollView} 
      
      showsVerticalScrollIndicator={false}
      
      >
        <Text style={styles.titulo}>Randomizer</Text>

        <Text style={styles.texto}>pokemons aleatorios</Text>
        <TouchableOpacity style={styles.botao}><Text style={styles.botaoTexto}>Aleatorio</Text></TouchableOpacity>

        <View style={styles.imageContainer}>
          <Image
            style={styles.img1}
            source={{
              uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3QRSiUbRhXoj1CRA_C-WSZN8nfH_GvqoDWg&s',
            }}
          />
        </View>

        <Text style={styles.texto}>mylittle random</Text>

        <View style={styles.imageContainer}>
          <Image style={styles.img2} source={require('./assets/mylitteponey.png')} />
        </View>

        <TouchableOpacity style={styles.botao}><Text style={styles.botaoTexto}>Po neieu</Text></TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  viewPrincipal: {
    flex: 1,
    backgroundColor: 'rgba(253, 212, 244, 0.77)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollView: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'rgb(0, 0, 0)',
    textAlign: 'center',
  },
  botao: {
    fontSize: 42,
    width: '40%',
    height: 50,
    backgroundColor: 'rgba(255, 255, 255, 0.45)',
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
    marginVertical: 10,
  },
  botaoTexto: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'rgb(0, 0, 0)',
    textAlign: 'center',
  },
  img1: {
    width: 250,
    height: 265,
    borderRadius: 20,
  },
  img2: {
    width: 350,
    height: 265,
    borderRadius: 20,
  },
  titulo: {
    fontSize: 100,
    fontWeight: 'bold',
    color: 'rgb(0, 0, 0)',
    textShadowColor: 'rgba(87, 32, 78, 0.75)',
    textShadowOffset: { width: -4, height: 4 },
    textShadowRadius: 10,
    textAlign: 'center',
  },
  imageContainer: {
    marginVertical: 20,
    alignItems: 'center',
  },

  scroll: {
    alignItems: 'center',
    justifyContent: 'center',
  }

});