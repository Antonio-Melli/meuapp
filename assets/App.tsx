import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import * as Font from 'expo-font';

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    async function loadFonts() {
      try {
        await Font.loadAsync({
          'Poppins-Regular': require('./assets/fonts/poppins.regular.ttf'),
          'Poppins-Bold': require('./assets/fonts/poppins.bold.ttf'),
        });
        setFontsLoaded(true);
      } catch (error) {
        console.error('Erro ao carregar fontes:', error);
      }
    }

    loadFonts();
  }, []);

  if (!fontsLoaded) {
    return (
      <View style={styles.loadingContainer}>
        <Text style={{ color: '#fff' }}>Carregando fontes...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.boldText}>Antonio Melli</Text>
      <Text style={styles.regularText}>Desenvolvedor Web</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    backgroundColor: '#0a192f',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: '#0a192f',
    justifyContent: 'center',
    alignItems: 'center',
  },
  boldText: {
    fontFamily: 'Poppins-Bold',
    fontSize: 24,
    color: '#4aa5f0',
  },
  regularText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 18,
    color: '#ccd6f6',
    marginTop: 8,
  },
});
