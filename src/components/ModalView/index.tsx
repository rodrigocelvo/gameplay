import React, { ReactNode } from 'react';
import {
  View,
  Modal,
  ModalProps,
  TouchableWithoutFeedback,
  Dimensions,
} from 'react-native';
import { Background } from '../Background';

const { height } = Dimensions.get('screen');

const screenHeight = height < 700 ? 500 : 700;

import { styles } from './styles';

interface Props extends ModalProps {
  children: ReactNode;
  closeModal: () => void;
  small?: boolean;
}

export function ModalView({ children, closeModal, small, ...rest }: Props) {
  return (
    <Modal transparent animationType="slide" statusBarTranslucent {...rest}>
      <TouchableWithoutFeedback onPress={closeModal}>
        <View style={styles.overlay}>
          <View style={{ flex: 1, marginTop: small ? screenHeight : 100 }}>
            <Background>
              <View style={styles.bar} />
              {children}
            </Background>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
}
