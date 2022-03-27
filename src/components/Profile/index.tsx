import React, { useState } from 'react';
import { Text, View, Alert, ActivityIndicator } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { useAuth } from '../../hooks/auth';

import { Avatar } from '../Avatar';
import { Button } from '../Button';
import { ModalView } from '../ModalView';

import { theme } from '../../global/styles/theme';
import { styles } from './styles';

export function Profile() {
  const { loading, user, signOut } = useAuth();
  const [openLogoutModal, setOpenLogoutModal] = useState(false);

  function handleOpenLogoutModal() {
    setOpenLogoutModal(true);
  }

  function handleCloseLogoutModal() {
    setOpenLogoutModal(false);
  }

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
        <RectButton onPress={handleOpenLogoutModal}>
          <Avatar urlImage={user.avatar} />
        </RectButton>

        <View>
          <View style={styles.user}>
            <Text style={styles.greeting}>Olá,</Text>

            <Text style={styles.username}>{user.firstName}</Text>
          </View>

          <Text style={styles.message}>Hoje é dia de vitória!</Text>
        </View>
      </View>

      <ModalView
        animationType="fade"
        visible={openLogoutModal}
        closeModal={handleCloseLogoutModal}
        small
      >
        <View style={styles.logout}>
          <Text style={styles.logoutTitle}>Deseja sair do Game</Text>
          <Text style={styles.logoutTitleSpan}>Play</Text>
          <Text style={styles.logoutTitle}>?</Text>
        </View>
        <View style={styles.logoutButtonContainer}>
          <View style={styles.logoutButton}>
            <Button title="Não" onPress={handleCloseLogoutModal} />
          </View>
          <View style={styles.logoutButton}>
            {loading ? (
              <ActivityIndicator color={theme.colors.primary} />
            ) : (
              <Button title="Sim" onPress={handleSignOut} />
            )}
          </View>
        </View>
      </ModalView>
    </>
  );
}
