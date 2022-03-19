import React from 'react';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import { SvgProps } from 'react-native-svg';
import { LinearGradient } from 'expo-linear-gradient';
import { View, Text } from 'react-native';

import { styles } from './styles';
import { theme } from '../../global/styles/theme';

interface Props extends RectButtonProps {
  title: string;
  icon: React.FC<SvgProps>;
  cheked?: boolean;
}

export function Category({
  title,
  icon: Icon,
  cheked = false,
  ...rest
}: Props) {
  const { secondary50, secondary70 } = theme.colors;

  return (
    <RectButton {...rest}>
      <LinearGradient
        style={styles.container}
        colors={[secondary50, secondary70]}
      >
        <View style={[styles.content, { opacity: cheked ? 1 : 0.4 }]}>
          <View style={cheked ? styles.cheked : styles.check}></View>
          <Icon width={48} height={48} />
          <Text style={styles.title}>{title}</Text>
        </View>
      </LinearGradient>
    </RectButton>
  );
}
