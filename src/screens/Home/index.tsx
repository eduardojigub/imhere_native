import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
  Alert,
} from 'react-native';
import Participant from '../../components/Participant';

import { styles } from './styles';

export default function Home() {
  const [participants, setParticipants] = useState<string[]>([]);
  const [participantName, setParticipantName] = useState('');

  const handleParticipantAdd = () => {
    if (participants.includes(participantName)) {
      return Alert.alert(
        'Participante existe',
        'Já existe um(a) participante na lista com esse nome'
      );
    }
    setParticipants((prevState) => [...prevState, participantName]);
    setParticipantName('');
  };

  const handleParticipantRemove = (name: string) => {
    Alert.alert('Remover', `Deseja remover o(a) participante ${name} ?`, [
      {
        text: 'Sim',
        onPress: () => Alert.alert('Participante removido!'),
      },
      {
        text: 'Não',
        style: 'cancel',
      },
    ]);
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
          onChangeText={(text) => setParticipantName(text)}
          value={participantName}
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
            onRemove={() => handleParticipantRemove(item)}
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
      <StatusBar style="light" translucent />
    </View>
  );
}
