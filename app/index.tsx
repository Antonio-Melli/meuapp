import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { createDrawerNavigator, DrawerContentComponentProps } from '@react-navigation/drawer';
import HomeScreen from '../screens/Home';

const Drawer = createDrawerNavigator();

function CustomDrawerContent(props: DrawerContentComponentProps) {
  const menuItems = [
    { label: 'Inicio', route: 'Inicio' },
    { label: 'Sobre mim', route: 'Sobre mim' },
    { label: 'Experiência', route: 'Experiencia' },
    { label: 'Projetos', route: 'Projetos' },
    { label: 'Contato', route: 'Contato' },
  ];

  return (
    <View style={styles.drawerContainer}>
      {menuItems.map((item, index) => (
  <TouchableOpacity
  key={item.route}
  onPress={() => props.navigation.navigate(item.route)}
  style={styles.menuItem}
>
  <Text style={styles.menuNumber}>
    {`${String(index + 1).padStart(2, '0')}.`}
  </Text>
  <Text style={styles.menuLabel}>{item.label}</Text>
</TouchableOpacity>
      ))}
    </View>
  );
}

export default function App() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerPosition: 'right',
        drawerStyle: {
          backgroundColor: '#0a192f', // fundo azul escuro parecido com o da imagem
          width: 250,
          marginTop: 116,
        },
        overlayColor: 'rgba(0,0,0,0.5)',
      }}
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen name="Inicio" component={HomeScreen} />
      <Drawer.Screen name="Sobre mim" component={HomeScreen} />
      <Drawer.Screen name="Experiencia" component={HomeScreen} />
      <Drawer.Screen name="Projetos" component={HomeScreen} />
      <Drawer.Screen name="Contato" component={HomeScreen} />
    </Drawer.Navigator>
  );
}

const styles = StyleSheet.create({
  drawerContainer: {
    flex: 1,
    backgroundColor: '#0c1634',
    paddingTop: 40,
    paddingHorizontal: 20,
    justifyContent: 'flex-start',
  },
  menuItem: {
    flexDirection: 'column',
    alignItems: 'center',
    marginVertical: 15,
  },
  menuNumber: {
  color: '#4aa5f0', 
  fontSize: 14,
  fontWeight: 'bold',
  marginBottom: 4,
},
menuLabel: {
  color: '#c4c4c4',
  fontSize: 20,
  textAlign: 'center',
},
});
