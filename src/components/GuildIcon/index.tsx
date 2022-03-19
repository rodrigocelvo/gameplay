import React from 'react';
import { Image } from 'react-native';
import { styles } from './styles';

export function GuildIcon() {
  return (
    <Image
      source={{
        uri: `https://ui-avatars.com/api/?background=random&name=Amigos`,
      }}
      style={styles.image}
      resizeMode="cover"
    />
  );
}
