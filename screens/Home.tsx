import { View, Text, StyleSheet } from 'react-native';
import Header from '../assets/components/cabecalho';

export default function Home() {
  return (
    <View style={styles.container}>
      <Header/>
      <Text style={styles.content}>
        Bem-vindo ao meu aplicativo! Esse layout foi inspirado no meu site.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
     backgroundColor: '#1f1f1f',
  },
  content: {
    padding: 16,
    fontSize: 16,
    color: '#333',
  },
});