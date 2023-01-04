import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';

import { styles } from './styles';

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do Eventos</Text>
      <Text style={styles.eventDate}>Sexta-feira, 4 de janeiro de 2023</Text>
      <StatusBar style="auto" />
    </View>
  );
}
