import React from 'react';

import { View, Text, Image, Alert, ActivityIndicator } from 'react-native';

import IlustrationImg from '../../assets/illustration.png';

import { Background } from '../../components/Background';
import { ButtonIcon } from '../../components/ButtonIcon';
import { styles } from './styles';

import { useAuth } from '../../hooks/auth';
import { theme } from '../../global/styles/theme';

interface Nav {
  navigate: (nav: string) => void;
}

export function SignIn() {
  const { loading, signIn } = useAuth();

  async function handleSignIn() {
    try {
      await signIn();
    } catch (error) {
      Alert.alert(`${error}`);
    }
  }

  return (
    <Background>
      <View style={styles.container}>
        <Image
          source={IlustrationImg}
          style={styles.image}
          resizeMode="stretch"
        />

        <View style={styles.content}>
          <Text style={styles.title}>
            Conecte-se {`\n`}e organize suas {`\n`}
            jogatinas
          </Text>

          <Text style={styles.subtitle}>
            Crie grupos para jogar seus games{`\n`}
            favoritos com seus amigos
          </Text>
          {loading ? (
            <ActivityIndicator color={theme.colors.primary} />
          ) : (
            <ButtonIcon
              title="Entrar com o Discord"
              activeOpacity={0.5}
              onPress={handleSignIn}
            />
          )}
        </View>
      </View>
    </Background>
  );
}
