import React, { useRef, useCallback, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Linking, Animated } from 'react-native';
import { FontAwesome, AntDesign } from '@expo/vector-icons';
import Header from '../assets/components/cabecalho';
import { useFocusEffect } from '@react-navigation/native';

export default function Experiencia() {
    const fadeAnim = useRef(new Animated.Value(0)).current;

    const runFadeIn = useCallback((duration = 1200) => {
        fadeAnim.setValue(0);
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration,
            useNativeDriver: true,
        }).start();
    }, [fadeAnim]);

    useFocusEffect(
        useCallback(() => {
            runFadeIn();

            return () => {
                fadeAnim.setValue(0);
            };
        }, [runFadeIn, fadeAnim])
    );

  const experiencias = [
        {
      nome: 'Mundial Informática',
      url: 'https://www.mundialinformatica.com.br/',
      cargo: 'Suporte Técnico',
      periodo: 'Agosto 2025 - Outubro 2025',
      descricao: [
        'Atendimento técnico especializado a clientes de médio e grande porte.',
        'Elaboração de relatórios técnicos e sugestões de melhorias para processos internos.',
      ],
    },
    {
      nome: 'Dial Link',
      url: 'https://www.diallink.com.br',
      cargo: 'Operador de Telemarketing Receptivo',
      periodo: 'Abril 2025 — Maio 2025',
      descricao: [
        'Atendimento multicanais, receptivo, e-mail, WhatsApp, Ativo, com destaque para a linguagem correta e gentil.',
        'Prestação de suporte técnico ao consumidor, esclarecendo dúvidas, diagnosticando problemas.',
      ],
    }
  ];

  const [empresaSelecionada, setEmpresaSelecionada] = useState(0);
  const experiencia = experiencias[empresaSelecionada];

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
                  <Animated.View
                      style={[
                          styles.fadingContainer,
                          {
                              // Bind opacity to animated value
                              opacity: fadeAnim,
                          },
                  ]}>
                  <Text style={styles.titulo}>
                      <Text style={styles.numero}>02.</Text> Onde trabalhei
                  </Text>
                  <View style={styles.botoesEmpresa}>
                      {experiencias.map((empresa, index) => (
                          <TouchableOpacity
                              key={index}
                              style={[
                                  styles.empresaLink,
                                  empresaSelecionada === index && styles.empresaSelecionada,
                              ]}
                              onPress={() => setEmpresaSelecionada(index)}
                          >
                              <Text style={styles.empresaTexto}>{empresa.nome}</Text>
                          </TouchableOpacity>
                      ))}
                  </View>

                  <View style={styles.card}>
                      <Text style={styles.cargo} onPress={() => Linking.openURL(experiencia.url)}>
                          {experiencia.cargo} <Text style={styles.empresa}>@{experiencia.nome}</Text>
                      </Text>

                      <Text style={styles.periodo}>{experiencia.periodo}</Text>

                      <View style={styles.listaHabilidades}>
                          <View style={styles.coluna}>
                              {experiencia.descricao.map((item, i) => (
                                  <View key={i} style={styles.linhaItem}>
                                      <Text style={styles.seta}>›</Text>
                                      <Text style={styles.itemTexto}>{item}</Text>
                                  </View>
                              ))}
                          </View>
                      </View>
                  </View>
                  </Animated.View>

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
  botoesEmpresa: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginBottom: 16,
  },
  empresaLink: {
    backgroundColor: '#112240',
    borderBottomWidth: 2,
    borderBottomColor: 'transparent',
    padding: 10,
  
  },
  empresaSelecionada: {
    borderBottomColor: '#4aa5f0',
  },
  empresaTexto: {
    color: '#64ffda',
    textAlign: 'center',
  },
  card: {
    paddingTop: 10,
    alignItems: 'center',
  },
  cargo: {
    color: '#ccd6f6',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
  },
  empresa: {
    color: '#4aa5f0',
  },
  periodo: {
    color: '#8892b0',
    textAlign: 'center',
    marginVertical: 8,
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
    flex: 1,
    flexWrap: 'wrap',
  },
  footer: {
    alignItems: 'center',
    marginTop: 310,
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
    fadingContainer: {
        backgroundColor: '#0a192f',
    },
});
