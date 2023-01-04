import { StatusBar } from 'expo-status-bar';
import { Text, View, TextInput } from 'react-native';

import { styles } from './styles';

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do Evento</Text>
      <Text style={styles.eventDate}>Sexta-feira, 4 de janeiro de 2023</Text>
      <TextInput
        style={styles.input}
        placeholder="Nome do participante"
        placeholderTextColor="#6b6b6b"
      />
      <StatusBar style="auto" />
    </View>
  );
}
