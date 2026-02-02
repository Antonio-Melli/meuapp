import { View, Text, Linking, StyleSheet, TouchableOpacity, Animated } from 'react-native';
import Header from '../assets/components/cabecalho';
import { FontAwesome, AntDesign } from '@expo/vector-icons';
import React, { useRef, useCallback, useState, useEffect } from 'react';
import { useFocusEffect } from '@react-navigation/native';

type TypingTextProps = {
    text: string;
    speed?: number; // ms por caractere
    style?: any;
    start?: boolean;
    onComplete?: () => void;
};

function TypingText({ text, speed = 60, style, start = false, onComplete }: TypingTextProps) {
    const [visible, setVisible] = useState('');
    const intervalRef = useRef<number | null>(null);
    const completedRef = useRef(false);

    useEffect(() => {
        if (!start) {
            setVisible('');
            completedRef.current = false;
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
                intervalRef.current = null;
            }
            return;
        }

        let i = 0;
        setVisible('');
        completedRef.current = false;
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
        }
        intervalRef.current = (setInterval(() => {
            i++;
            setVisible(text.slice(0, i));
            if (i >= text.length && intervalRef.current) {
                clearInterval(intervalRef.current);
                intervalRef.current = null;
                if (!completedRef.current) {
                    completedRef.current = true;
                    onComplete && onComplete();
                }
            }
        }, speed) as unknown) as number;

        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
                intervalRef.current = null;
            }
        };
    }, [start, text, speed, onComplete]);

    return <Text style={style}>{visible}</Text>;
}

export default function Home() {
    const [startTyping, setStartTyping] = useState(false);

    // Animated values para fade-in
    const nameOpacity = useRef(new Animated.Value(0)).current;
    const subtitleOpacity = useRef(new Animated.Value(0)).current;
    const descriptionOpacity = useRef(new Animated.Value(0)).current;

    const resetOpacities = () => {
        nameOpacity.setValue(0);
        subtitleOpacity.setValue(0);
        descriptionOpacity.setValue(0);
    };

    // chamada quando a digitação termina — animar os textos em sequência (fade-in)
    const onTypingComplete = useCallback(() => {
        // garante que partimos de 0 antes de animar
        resetOpacities();

        const animName = Animated.timing(nameOpacity, {
            toValue: 1,
            duration: 400,
            useNativeDriver: true,
        });
        const animSubtitle = Animated.timing(subtitleOpacity, {
            toValue: 1,
            duration: 400,
            useNativeDriver: true,
        });
        const animDescription = Animated.timing(descriptionOpacity, {
            toValue: 1,
            duration: 400,
            useNativeDriver: true,
        });

        // stagger cria pequeno intervalo entre os fades
        Animated.stagger(650, [animName, animSubtitle, animDescription]).start();
    }, [nameOpacity, subtitleOpacity, descriptionOpacity]);

    useFocusEffect(
        useCallback(() => {
            setStartTyping(true);
            // reset visual quando entrar
            resetOpacities();

            return () => {
                // ao sair, reseta e interrompe possíveis animações
                setStartTyping(false);
                resetOpacities();
            };
        }, [])
    );

    // limpar ao desmontar (segurança)
    useEffect(() => {
        return () => {
            resetOpacities();
        };
    }, []);

    return (
        <View style={styles.container}>
            <Header />

            <View style={styles.content}>
                <Text style={styles.intro}>
                    <TypingText
                        text="Olá meu nome é"
                        speed={135}
                        style={styles.small}
                        start={startTyping}
                        onComplete={onTypingComplete}
                    />
                </Text>

                <Animated.Text style={[styles.name, { opacity: nameOpacity }]}>
                    Antonio Melli.
                </Animated.Text>

                <Animated.Text style={[styles.subtitle, { opacity: subtitleOpacity }]}>
                    Eu sou um desenvolvedor de sistemas.
                </Animated.Text>

                <Animated.Text style={[styles.description, { opacity: descriptionOpacity }]}>
                    Sou estudante de Análise e Desenvolvimento de Sistemas, dedicado e focado em
                    resultados. Tenho 19 anos e trabalho com desenvolvimento de sistemas, utilizando Node.JS,
                    MySQL, C#, JavaScript, React JS/Native e TypeScript. Tenho experiência em criar
                    sites especializados e extensos, buscando sempre oferecer soluções eficientes e
                    bem estruturadas.
                </Animated.Text>
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
    intro: {
        flexDirection: 'row',
        marginBottom: 12,
    },
    footer: {
        alignItems: 'center',
        marginTop: 261,
        paddingBottom: 50,
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
        fontSize: 18,
        color: '#5e97c5',
        marginBottom: 24,
    },
    description: {
        fontSize: 14,
        color: '#8892b0',
        lineHeight: 22,
    },
});