import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Linking } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { DrawerNavigationProp } from '@react-navigation/drawer';

// 👇 Defina sua lista de rotas aqui (mesmo nome usado no App.tsx)
type RootDrawerParamList = {
  Home: undefined;
  Sobremim: undefined;
  Experiencia: undefined;
  Projetos: undefined;
  Contato: undefined;
  // Outras rotas aqui se tiver
};

export default function Header() {
  const navigation = useNavigation<DrawerNavigationProp<RootDrawerParamList>>();

  return (
    <View style={styles.header}>
      <View style={styles.logo}>
        <FontAwesome name="globe" size={20} color="#fff" />
        <TouchableOpacity onPress={() => Linking.openURL('https://antoniomelli.kesug.com/?i=1')}>
        <Text style={styles.logoText}>Antonio Melli</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity onPress={() => navigation.openDrawer()}>
        <FontAwesome name="bars" size={24} color="#4aa5f0" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#0a192f',
    borderBottomColor: '#112240',
    borderBottomWidth: 1,
    marginTop: 35,
    paddingVertical: 26,
    paddingHorizontal: 20,
  },
  logo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logoText: {
    fontSize: 20,
        color: '#fff',
    fontWeight: 'bold',
    marginLeft: 8,
  }
  });