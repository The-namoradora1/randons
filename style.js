import { StyleSheet } from "react-native";


const styles = StyleSheet.create({

    textInput: {
        width: '80%',
        height: 40,
        backgroundColor: 'rgba(255, 255, 255, 0.45)',
        borderRadius: 15,
        marginVertical: 10,
        padding: 15,
      },

    viewCabecalho: {
        backgroundColor:'#44288c',
        flex:1,
        width:'100%',
        shadowOffset:{width: 0, height: 2}

    },

    viewcenter:{
        flex: 3,
        alignItems: "center",   
        justifyContent: "center",
        width: '100%',
        marginTop:-300            

    },

        viewPrincipal: {
      flex: 1,
      backgroundColor: '#171446',
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
    },
  
  })

  export default styles;