import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    container: {
      flex: 1, //seta a tela toda
      backgroundColor: '#131016',
      padding: 24,
    },
    eventName: {
      color: '#Fff',
      fontSize: 24,
      fontWeight: 'bold',
      marginTop: 48,
    },
    eventDate: {
      color: '#6B6B6B',
      fontSize: 16,
    },
    input: {
      flex: 1,
      backgroundColor: '#1F1E25',
      height: 56,
      borderRadius: 5,
      color: "#Fff",
      padding: 16,
      fontSize: 16,
      marginRight: 12,
    },
    buttonText: {
      color: '#fff',
      fontSize: 24,
    },
    button: {
      width: 56,
      height: 56,
      borderRadius: 5,
      backgroundColor: '#31CF67',
      alignItems: 'center', //alinha na horizontal
      justifyContent: 'center' //alinha na vertical
    },
    form: {
      flexDirection: "row",
      width: "100%",
      marginTop: 36,
      marginBottom: 42,
    }
});