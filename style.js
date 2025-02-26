import { StyleSheet } from "react-native";


const styles = StyleSheet.create({

    textInput: {
      alignItems: "center", 
        justifyContent: 'center',
        width: '100%',
        height: 40,
        backgroundColor: 'rgba(255, 255, 255, 0.45)',
        borderRadius: 15,
        marginVertical: 10,
        padding: 15,
      },

    viewCabecalho: {
        backgroundColor:'#44288c',
        flex:1,

        shadowOffset:{width: 0, height: 2}

    },

    viewcenter:{
        flex: 3,
        alignItems: "center",   
        justifyContent: "flex-start",
    },

        viewPrincipal: {
      flex: 1,
      backgroundColor: '#44288c',
      alignItems: 'center',
      justifyContent: 'center',
    },

    scrollView: {
      alignItems: 'center',
      justifyContent: 'center',
    },
    textoCad: {
      fontSize: 15,
      fontWeight: 'bold',
      color: 'rgb(0, 0, 0)',
      textAlign: 'center',
    },


    texto: {
      fontSize: 12,
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