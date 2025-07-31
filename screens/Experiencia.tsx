import { FontAwesome, AntDesign } from '@expo/vector-icons';
import { View, Text, StyleSheet, Linking, TouchableOpacity } from 'react-native';
import Header from '../assets/components/cabecalho';

export default function Experiencia() {
  return (
    <View style={styles.container}>
        <Header />
        <View style={styles.content}>
            
      <Text style={styles.titulo}>
        <Text style={styles.numero}>02. </Text>
        Onde Trabalhei
      </Text>

      <View style={styles.card}>
        <Text style={styles.empresaLink} onPress={() => Linking.openURL('https://www.diallink.com.br')}>
          Dial Link
        </Text>

        <Text style={styles.cargo}>
          Operador de Telemarketing Receptivo <Text style={styles.empresa}>@Dial Link</Text>
        </Text>

        <Text style={styles.periodo}>Abril 2025 — Maio 2025</Text>
                        <View style={styles.listaHabilidades}>
              <View style={styles.coluna}>
      
                <View style={styles.linhaItem}>
        <Text style={styles.seta}>›</Text>
        <Text style={styles.itemTexto}>Atendimento multicanais, receptivo, e-mail, WhatsApp, Ativo, com destaque para a linguagem correta e gentil, buscando tornar o ambiente mais positivo.</Text>
      </View>
      
                <View style={styles.linhaItem}>
        <Text style={styles.seta}>›</Text>
        <Text style={styles.itemTexto}>Prestação de suporte técnico ao consumidor, esclarecendo dúvidas, diagnosticando problemas e atendendo solicitações diversas.</Text>
      </View>
      
    </View>
    </View>
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0a192f',
    flex: 1,
  },
  listaHabilidades: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    marginBottom: 20,
  },
  coluna: {
    flex: 1,
  },
linhaItem: {
  flexDirection: 'row',
  marginBottom: 6,
},
seta: {
  color: '#4aa5f0',
  marginRight: 8,
  fontSize: 16,
  fontWeight: 'bold',
},
itemTexto: {
  color: '#8892b0',
  fontSize: 14,
},
    content: {
    paddingHorizontal: 24,
    paddingTop: 40,
  },
  titulo: {
     fontSize: 20,
    fontWeight: 'bold',
    color: '#ccd6f6',
    marginBottom: 12,
  },
  numero: {
    color: '#4aa5f0',
    fontWeight: 'bold',
  },
  card: {
paddingTop: 10,
alignItems: 'center',
  },
  empresaLink: {
backgroundColor: '#112240',
width: '30%',
            borderBottomWidth: 2,
            padding: 20,
    borderBottomColor: '#4aa5f0',
    textAlign: 'center',
        color:'#64ffda',
        marginBottom: 10,
  },
  cargo: {
    color: '#ccd6f6',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
  },
  empresa: {
    color: '#64ffda',
  },
  periodo: {
    color: '#8892b0',
    textAlign: 'center',
    marginVertical: 8,
  },
  item: {
    color: '#a8b2d1',
    marginTop: 8,
  },
  footer: {
  alignItems: 'center',
  marginTop: 330,
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