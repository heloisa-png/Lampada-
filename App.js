import { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App() {
  const [acesa, setAcesa] = useState(false);
  const [cliques, setCliques] = useState(0);

  const alternarLampada = () => {
    setAcesa(!acesa);
    setCliques(cliques + 1);
  };

  return (
    <View style={[styles.container, { backgroundColor: acesa ? '#f1c40f' : '#2c3e50' }]}>
      <Text style={styles.emoji}>{acesa ? '☀️' : '🌙'}</Text>

      <Text style={[styles.status, { color: acesa ? '#2c3e50' : '#fff' }]}>
        {acesa ? 'Acesa' : 'Apagada'}
      </Text>

      <Text style={[styles.contador, { color: acesa ? '#2c3e50' : '#fff' }]}>
        Cliques: {cliques}
      </Text>

      <TouchableOpacity style={styles.botao} onPress={alternarLampada}>
        <Text style={styles.botaoTexto}>{acesa ? 'Apagar' : 'Acender'}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  emoji: {
    fontSize: 100,
    marginBottom: 20,
  },
  status: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  contador: {
    fontSize: 18,
    marginBottom: 30,
  },
  botao: {
    backgroundColor: '#3498db',
    borderRadius: 8,
    paddingVertical: 14,
    paddingHorizontal: 40,
    alignItems: 'center',
  },
  botaoTexto: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});