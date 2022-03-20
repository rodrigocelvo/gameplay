import { Text, View } from 'react-native';

import React from 'react';
import { styles } from './styles';
import { Avatar } from '../../components/Avatar';
import { theme } from '../../global/styles/theme';

export interface MemberProps {
  id: string;
  username: string;
  avatar_url: string;
  status: string;
}

interface Props {
  data: MemberProps;
}

export function Member({ data }: Props) {
  const { on, primary } = theme.colors;
  const isOnline = data.status === 'online';

  return (
    <View style={styles.container}>
      <Avatar urlImage={data.avatar_url} />

      <View>
        <Text style={styles.title}>{data.username}</Text>

        <View style={styles.status}>
          <View
            style={[
              styles.bulletStatus,
              {
                backgroundColor: isOnline ? on : primary,
              },
            ]}
          />
          <Text style={styles.nameStatus}>
            {isOnline ? 'Disponível' : 'Ocupado'}
          </Text>
        </View>
      </View>
    </View>
  );
}