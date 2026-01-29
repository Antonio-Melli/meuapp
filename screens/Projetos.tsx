import { FontAwesome, AntDesign } from '@expo/vector-icons';
import { View, Text, StyleSheet, Linking, TouchableOpacity, ImageBackground, Animated } from 'react-native';
import Header from '../assets/components/cabecalho';
import { ScrollView } from 'react-native-gesture-handler';
import { useFocusEffect } from '@react-navigation/native';
import React, { useRef, useCallback } from 'react';

export default function Projetos() {
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
  return (
    <ScrollView style={styles.container}>
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
        <Text style={styles.numero}>03. </Text>
        Alguns de meus projetos
                  </Text>
                  <View style={styles.projetosContainer}>
                      <TouchableOpacity onPress={() => Linking.openURL('https://www.antoniomelli.kesug.com')}>
                          <ImageBackground
                              source={require('./projetosimg/imagem4.png')}
                              style={styles.card}
                              imageStyle={{ borderRadius: 16, opacity: 0.3, }}
                          >
                              <Text style={styles.subTitle}>Projeto em destaque</Text>
                              <Text style={styles.title}>Antonio Melli Website</Text>
                              <Text style={styles.description}>
                                  Website criado para fins de portfólio e representação profissional.
                              </Text>
                              <View style={styles.techContainer}>
                                  <Text style={styles.tech}>Visual Studio</Text>
                                  <Text style={styles.tech}>React & TypeScript</Text>
                              </View>
                          </ImageBackground>
                      </TouchableOpacity>

                      <ImageBackground
                          source={require('./projetosimg/imagem5.png')}
                          style={styles.card}
                          imageStyle={{ borderRadius: 16, opacity: 0.3, }}
                      >
                          <Text style={styles.subTitle}>Projeto em desenvolvimento</Text>
                          <Text style={styles.title}>Antonio Melli App</Text>
                          <Text style={styles.description}>
                              Aplicativo criado para fins de portfólio e representação profissional.
                          </Text>
                          <View style={styles.techContainer}>
                              <Text style={styles.tech}>Visual Studio</Text>
                              <Text style={styles.tech}>React Native & Expo</Text>
                          </View>
                      </ImageBackground>

                      <ImageBackground
                          source={require('./projetosimg/imagem.png')}
                          style={styles.card}
                          imageStyle={{ borderRadius: 16, opacity: 0.3, }}
                      >
                          <Text style={styles.subTitle}>Projeto em desenvolvimento</Text>
                          <Text style={styles.title}>LightBuss Games Website</Text>
                          <Text style={styles.description}>
                              Um site criado com os mínimos detalhes, pensado na interatividade e simplicidade para o usuário.
                          </Text>
                          <View style={styles.techContainer}>
                              <Text style={styles.tech}>Visual Studio</Text>
                              <Text style={styles.tech}>React & TypeScript</Text>
                          </View>
                      </ImageBackground>

                      <ImageBackground
                          source={require('./projetosimg/imagem3.png')}
                          style={styles.card}
                          imageStyle={{ borderRadius: 16, opacity: 0.3, }}
                      >
                          <Text style={styles.subTitle}>Projeto em desenvolvimento</Text>
                          <Text style={styles.title}>The Big Heist</Text>
                          <Text style={styles.description}>
                              Jogo de mundo aberto 2D, desenvolvido em JavaScript e inspirado na era clássica de GTA.
                          </Text>
                          <View style={styles.techContainer}>
                              <Text style={styles.tech}>JavaScript</Text>
                              <Text style={styles.tech}>GameMaker Language</Text>
                          </View>
                      </ImageBackground>
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
 </ScrollView>

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
    projetosContainer: {
        flexDirection: 'column',
        alignItems: 'center',
    },
 card: {
    width: 320,
    padding: 13,
    borderRadius: 16,
     marginTop: 20,
    marginBottom: 10,
    alignItems  : 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  subTitle: {
    color: '#00AEEF',
    fontSize: 14,
    marginBottom: 8,
  },
  title: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 20,
  },
  description: {
    color: '#ddd',
    fontSize: 14,
    textAlign: 'center',
    marginVertical: 10,
  },
  techContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 12,

  },
  tech: {
    color: '#ccc',
    fontSize: 13,
        paddingLeft: 10,
  },
  footer: {
  alignItems: 'center',
      marginTop: 20,
  marginBottom: 30,
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