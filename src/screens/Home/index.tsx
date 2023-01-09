import { StatusBar } from 'expo-status-bar';
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import Participant from '../../components/Participant';

import { styles } from './styles';

export default function Home() {
  const participants = [
    'Eduardo',
    'Roberta',
    'Guto',
    'Maria Roberta',
    'Eduarda',
    'Roberto',
    'Guta',
    'Mario Roberto',
    'Teste 1',
    'Joao',
    'Maria',
  ];

  const handleParticipantAdd = () => {
    console.log('Você clicou no botão de adicionar');
  };

  const handleParticipantRemove = () => {
    console.log('Clicou para remover');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do Evento</Text>
      <Text style={styles.eventDate}>Sexta-feira, 4 de janeiro de 2023</Text>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nome do participante"
          placeholderTextColor="#6b6b6b"
        />
        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={participants}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Participant
            key={item}
            name={item}
            onRemove={handleParticipantRemove}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>
            Ninguém chegou no evento ainda? Adicione participantes na sua lista
            de presença
          </Text>
        )}
      />
      <StatusBar style="auto" />
    </View>
  );
}
