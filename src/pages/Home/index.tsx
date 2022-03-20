import React, { useState } from 'react';
import { View, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { styles } from './styles';

import { Profile } from '../../components/Profile';
import { Background } from '../../components/Background';
import { ButtonAdd } from '../../components/ButtonAdd';
import { CategorySelect } from '../../components/CategorySelect';
import { ListHeader } from '../../components/ListHeader';
import { Appointment } from '../../components/Appointment';
import { ListDivider } from '../../components/ListDivider';

interface Nav {
  navigate: (nav: string) => void;
}

export function Home() {
  const [category, setCategory] = useState('');

  const navigation = useNavigation<Nav>();

  const appointments = [
    {
      id: '1',
      guild: {
        id: '1',
        name: 'Amigos',
        icon: null,
        owner: true,
      },
      category: '3',
      date: '20/03/ às 15h',
      description: 'Fornite com a galera',
    },
    {
      id: '2',
      guild: {
        id: '1',
        name: 'Amigos',
        icon: null,
        owner: true,
      },
      category: '1',
      date: '20/03/ às 14h',
      description: 'Passando raiva no Valorant',
    },
  ];

  function handleCategorySelect(categoryId: string) {
    categoryId === category ? setCategory('') : setCategory(categoryId);
  }

  function handleAppointmentDetails() {
    navigation.navigate('AppointmentDetails');
  }

  function handleAppointmentCreate() {
    navigation.navigate('AppointmentCreate');
  }

  return (
    <Background>
      <View style={styles.header}>
        <Profile />
        <ButtonAdd onPress={handleAppointmentCreate} />
      </View>

      <CategorySelect
        categorySelected={category}
        setCategory={handleCategorySelect}
      />

      <View style={styles.content}>
        <ListHeader title="Partidas Agendadas" subtitle="Total 6" />
        <FlatList
          data={appointments}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Appointment data={item} onPress={handleAppointmentDetails} />
          )}
          ItemSeparatorComponent={() => <ListDivider />}
          style={styles.matches}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </Background>
  );
}
