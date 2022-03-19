import React from 'react';
import { useNavigation } from '@react-navigation/native';

import { View, Text, Image } from 'react-native';

import IlustrationImg from '../../assets/illustration.png';

import { Background } from '../../components/Background';
import { ButtonIcon } from '../../components/ButtonIcon';
import { styles } from './styles';

interface Nav {
  navigate: (value: string) => void;
}

export function SignIn() {
  const navigation = useNavigation<Nav>();

  function handleSignIn() {
    navigation.navigate('Home');
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
            Crie grupos para jogar seus games{`\n`} favoritos com seus amigos
          </Text>

          <ButtonIcon
            title="Entrar com o Discord"
            activeOpacity={0.7}
            onPress={handleSignIn}
          />
        </View>
      </View>
    </Background>
  );
}
