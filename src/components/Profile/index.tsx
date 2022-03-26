import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { useAuth } from '../../hooks/auth';

import { Avatar } from '../Avatar';
import { Logout } from '../Logout';
import { ModalView } from '../ModalView';
import { styles } from './styles';

export function Profile() {
  const { user } = useAuth();
  const [openLogoutModal, setOpenLogoutModal] = useState(false);

  function handleOpenLogoutModal() {
    setOpenLogoutModal(true);
  }

  function handleCloseLogoutModal() {
    setOpenLogoutModal(false);
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
        visible={openLogoutModal}
        closeModal={handleCloseLogoutModal}
        small
      >
        <Logout />
      </ModalView>
    </>
  );
}
