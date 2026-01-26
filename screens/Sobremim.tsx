import { FontAwesome, AntDesign } from '@expo/vector-icons';
import { View, Text, StyleSheet, Linking, TouchableOpacity } from 'react-native';
import Header from '../assets/components/cabecalho';


export default function SobreMim() {

  return (
    <View style={styles.container}>
              <Header />
              <View style={styles.content}>
      <Text style={styles.titulo}>
        <Text style={styles.numero}>01.</Text> Sobre Mim
      </Text>

      <Text style={styles.texto}>
        Olá! Meu nome é Antonio e eu adoro criar soluções que vivem na internet. 
        Sou estudante de Análise e Desenvolvimento de Sistemas e comecei a desenvolver web ainda bem jovem, 
        descobri que criar sites personalizados é uma forma incrível de aprender lógica e criatividade.
      </Text>

      <Text style={styles.texto}>
                  Hoje, tenho me dedicado ao desenvolvimento de sites especializados e extensos com
                  foco em acessibilidade, usabilidade e performance. Meu stack atual inclui
                  TypeScript, React, JavaScript, C# e PHP.
      </Text>

      <Text style={styles.texto}>
        Estas são algumas das tecnologias com que venho trabalhando recentemente:
      </Text>

      <View style={styles.listaTecnologias}>
        <View style={styles.coluna}>

          <View style={styles.linhaItem}>
  <Text style={styles.seta}>›</Text>
  <Text style={styles.itemTexto}>JavaScript</Text>
</View>

          <View style={styles.linhaItem}>
  <Text style={styles.seta}>›</Text>
  <Text style={styles.itemTexto}>C#</Text>
</View>

          <View style={styles.linhaItem}>
  <Text style={styles.seta}>›</Text>
  <Text style={styles.itemTexto}>MYSQL</Text>
</View>

          <View style={styles.linhaItem}>
  <Text style={styles.seta}>›</Text>
  <Text style={styles.itemTexto}>React</Text>
</View>
        </View>
        <View style={styles.coluna}>

          <View style={styles.linhaItem}>
  <Text style={styles.seta}>›</Text>
  <Text style={styles.itemTexto}>HTML/CSS</Text>
</View>

          <View style={styles.linhaItem}>
  <Text style={styles.seta}>›</Text>
  <Text style={styles.itemTexto}>PHP</Text>
</View>

          <View style={styles.linhaItem}>
  <Text style={styles.seta}>›</Text>
  <Text style={styles.itemTexto}>Bootstrap</Text>
</View>

          <View style={styles.linhaItem}>
  <Text style={styles.seta}>›</Text>
  <Text style={styles.itemTexto}>TypeScript</Text>
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
    <AntDesign name="linkedin" size={24} color="#8892b0" style={styles.icon} />
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
  texto: {
    color: '#8892b0',
    fontSize: 14,
    lineHeight: 22,
    marginBottom: 12,
  },
  listaTecnologias: {
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
  alignItems: 'center',
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
 footer: {
  alignItems: 'center',
  marginTop: 83,
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
