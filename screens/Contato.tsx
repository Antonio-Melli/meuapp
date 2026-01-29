import { FontAwesome, AntDesign } from '@expo/vector-icons';
import { View, Text, StyleSheet, Linking, TouchableOpacity, Animated } from 'react-native';
import Header from '../assets/components/cabecalho';
import React, { useRef, useCallback } from 'react';
import { useFocusEffect } from '@react-navigation/native';

export default function Contato() {
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
                    <Text style={styles.numero}>04. O que vem a seguir? </Text>
                       <Text style={styles.titulo}>Entre em contato</Text>

                <Text style={styles.itemTexto}>
                    Estou em busca de novas oportunidades e minha caixa de entrada
                    está aberta. Se tiver dúvidas, propostas ou quiser apenas dizer oi, será um prazer
                    responder.
                </Text>

                <TouchableOpacity
                    style={styles.customButton}
                    onPress={() => Linking.openURL('mailto:antoniomelli79@gmail.com')}
                >
                    <Text style={styles.buttonText}>Diga olá!</Text>
                </TouchableOpacity>
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
        color: '#64ffda',
    },
    footer: {
        alignItems: 'center',
        marginTop: 350,
        paddingBottom: 20,
    },
    iconsRow: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 8,
    },
    icon: {
        marginHorizontal: 10,
        marginBottom: 5,
    },
    footerText: {
        color: '#8892b0',
        fontSize: 14,
        textAlign: 'center',
    },
    fadingContainer: {
        backgroundColor: '#0a192f',
        alignItems: 'center',
    },
});