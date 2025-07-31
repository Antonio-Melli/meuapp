import { View, Text, Linking, StyleSheet, TouchableOpacity } from 'react-native';
import Header from '../assets/components/cabecalho';
import { FontAwesome, Entypo, AntDesign } from '@expo/vector-icons';

export default function Home() {
  return (
    <View style={styles.container}>
      <Header />

      <View style={styles.content}>
        <Text style={styles.intro}>
          <Text style={styles.small}>Olá</Text> <Text style={styles.small}>meu nome é</Text>
        </Text>

        <Text style={styles.name}>Antonio Melli.</Text>
        <Text style={styles.subtitle}>Eu sou um desenvolvedor web.</Text>

        <Text style={styles.description}>
          Sou estudante de Análise e Desenvolvimento de Sistemas, dedicado e focado em resultados.
          Tenho 18 anos e trabalho com desenvolvimento web, utilizando HTML, CSS, JavaScript, React JS e TypeScript.
          Tenho experiência em criar sites especializados e extensos, buscando sempre oferecer soluções eficientes e bem estruturadas.
        </Text>
      </View>
      <View style={styles.footer}>

  <View style={styles.iconsRow}>
    <TouchableOpacity onPress={() => Linking.openURL('https://github.com/Antonio-Melli')}>
  <AntDesign name="github" size={24} color="#8892b0" style={styles.icon} />
    </TouchableOpacity>

    <TouchableOpacity onPress={() => Linking.openURL('https://www.instagram.com/antmelli2/')}>
    <AntDesign name="instagram" size={24} color="#8892b0" style={styles.icon} />
    </TouchableOpacity>

    <TouchableOpacity onPress={() => Linking.openURL('https://www.linkedin.com/in/antonio-melli-b1598926a/')}>
    <AntDesign name="linkedin-square" size={24} color="#8892b0" style={styles.icon} />
    </TouchableOpacity>

    <TouchableOpacity onPress={() => Linking.openURL('https://wa.me/551985967435')}>
    <FontAwesome name="whatsapp" size={24} color="#8892b0" style={styles.icon} />
    </TouchableOpacity>
  </View>

  <Text style={styles.footerText}>Feito e criado por Antonio Melli</Text>
</View>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0a192f',
  },
  content: {
    paddingHorizontal: 24,
    paddingTop: 40,
  },
  intro: {
    flexDirection: 'row',
    marginBottom: 12,
  },
  footer: {
  alignItems: 'center',
  marginTop: 365,
  paddingBottom: 20,
},
iconsRow: {
  flexDirection: 'row',
  justifyContent: 'center',
  marginBottom: 8,
},

icon: {
  marginHorizontal: 10,
},

footerText: {
  color: '#8892b0',
  fontSize: 14,
  marginTop: 5,
  textAlign: 'center',
},
  small: {
    color: '#4aa5f0',
    fontSize: 14,
    marginLeft: 6,
  },
  name: {
    fontSize: 32,
    fontFamily: 'Poppins-Bold',
    fontWeight: 'bold',
    color: '#5e97c5',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 20,
    color: '#5e97c5',
    marginBottom: 24,
  },
  description: {
    fontSize: 14,
    color: '#8892b0',
    lineHeight: 22,
  },
});
