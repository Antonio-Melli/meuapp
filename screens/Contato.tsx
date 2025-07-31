import { FontAwesome, AntDesign } from '@expo/vector-icons';
import { View, Text, StyleSheet, Linking, TouchableOpacity} from 'react-native';
import Header from '../assets/components/cabecalho';

export default function Contato() {
  return (
    <View style={styles.container}>
        <Header />
        <View style={styles.content}>
                    <Text style={styles.numero}>04. O que vem a seguir? </Text>
      <Text style={styles.titulo}>
        Entre em contato
      </Text>

        <Text style={styles.itemTexto}>Estou em busca de novas oportunidades, mas minha caixa de entrada continua aberta. Se tiver dúvidas ou quiser apenas dizer oi, será um prazer responder.</Text>
 
        <TouchableOpacity
          style={styles.customButton}
          onPress={() => Linking.openURL('mailto:antoniomelli79@gmail.com')}
        >
          <Text style={styles.buttonText}>Diga olá!</Text>
        </TouchableOpacity>

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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0a192f',
    flex: 1,
  },
    content: {
    paddingHorizontal: 24,
    paddingTop: 40,
    alignItems: 'center',
  },
  titulo: {
     fontSize: 28,
    borderBottomWidth: 2,
    paddingBottom: 15,
    width: '100%',
    textAlign: 'center',
    borderBottomColor: '#112240',
    fontWeight: 'bold',
    color: '#ccd6f6',
    marginBottom: 12,
  },
  numero: {
    color: '#4aa5f0',
    fontWeight: 'bold',
  },
  itemTexto: {
  color: '#8892b0',
  fontSize: 14,
  textAlign: 'center',
},
customButton: {
    borderWidth: 2,
    borderColor: '#4aa5f0',
    padding: 20,
    borderRadius: 5,
    marginTop: 20,
},
buttonText: {
    color:'#64ffda',
},
  footer: {
  alignItems: 'center',
  marginTop: 432,
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
});