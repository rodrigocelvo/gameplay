import React from 'react';
import { View, Text, Alert, ActivityIndicator } from 'react-native';

import { useAuth } from '../../hooks/auth';
import { Button } from '../Button';

import { styles } from './styles';
import { theme } from '../../global/styles/theme';

interface Nav {
  navigate: (nav: string) => void;
}

export function Logout() {
  const { loading, signOut } = useAuth();

  async function handleSignOut() {
    try {
      await signOut();
      Alert.alert('Deslogado com sucesso!');
    } catch (error) {
      Alert.alert(`${error}`);
    }
  }

  return (
    <>
      <View style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.title}>Deseja sair do Game</Text>
          <Text style={styles.titleSpan}>Play</Text>
          <Text style={styles.title}>?</Text>
        </View>
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Não" />
          </View>
          {loading ? (
            <ActivityIndicator color={theme.colors.primary} />
          ) : (
            <View style={styles.button}>
              <Button title="Sim" onPress={handleSignOut} />
            </View>
          )}
        </View>
      </View>
    </>
  );
}
