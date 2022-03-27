import React, { useState } from 'react';
import {
  Text,
  View,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';
import uuid from 'react-native-uuid';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import { COLLECTION_APPOINTMENTS } from '../../configs/database';

import { Background } from '../../components/Background';
import { CategorySelect } from '../../components/CategorySelect';
import { Header } from '../../components/Header';
import { GuildIcon } from '../../components/GuildIcon';
import { SmallInput } from '../../components/SmallInput';
import { TextArea } from '../../components/TextArea';
import { Button } from '../../components/Button';
import { ModalView } from '../../components/ModalView';
import { Guilds } from '../Guilds';

import { GuildProps } from '../../components/Guild';

import { Feather } from '@expo/vector-icons';

import { theme } from '../../global/styles/theme';
import { styles } from './styles';

import DiscordSvg from '../../assets/discord.svg';

interface Nav {
  navigate: (nav: string) => void;
}

interface FormData {
  name: string;
  day: number;
  month: number;
  hour: number;
  minute: number;
  description: string;
}

const schema = yup.object({
  day: yup
    .number()
    .typeError('Inisira um número válido')
    .required('Informe uma data')
    .max(31, 'Data inválida'),
  month: yup
    .number()
    .typeError('Inisira um número válido')
    .required('Informe um mês')
    .max(12, 'Mês inválido'),
  hour: yup
    .number()
    .typeError('Inisira um número válido')
    .required('Informe uma hora')
    .max(23, 'Hora inválida'),
  minute: yup
    .number()
    .typeError('Inisira um número válido')
    .required('Informe um minuto')
    .max(59, 'Minuto inválido'),
  description: yup
    .string()
    .required('Informe uma descrição')
    .max(100, 'Descrição inválida'),
});

export function AppointmentCreate() {
  const [category, setCategory] = useState('');
  const [openGuildsModal, setOpenGuildsModal] = useState(false);
  const [guild, setGuild] = useState<GuildProps>({} as GuildProps);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const navigation = useNavigation<Nav>();

  function handleOpenGuilds() {
    setOpenGuildsModal(true);
  }

  function handleCloseGuilds() {
    setOpenGuildsModal(false);
  }

  function handleOpenGuildSelect(guildSelect: GuildProps) {
    setGuild(guildSelect);
    setOpenGuildsModal(false);
  }

  function handleCategorySelect(categoryId: string) {
    setCategory(categoryId);
  }

  async function handleSave({
    day,
    month,
    hour,
    minute,
    description,
  }: FormData) {
    const newAppointment = {
      id: uuid.v4(),
      guild,
      category,
      date: `${day}/${month} às ${hour}:${minute}h`,
      description,
    };

    const storage = await AsyncStorage.getItem(COLLECTION_APPOINTMENTS);
    const appointments = storage ? JSON.parse(storage) : [];

    await AsyncStorage.setItem(
      COLLECTION_APPOINTMENTS,
      JSON.stringify([...appointments, newAppointment])
    );

    navigation.navigate('Home');
  }

  if (!category) {
    setCategory('1');
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <Background>
        <ScrollView>
          <Header title="Agendar Partida" />

          <Text
            style={[
              styles.label,
              { marginLeft: 24, marginTop: 26, marginBottom: 18 },
            ]}
          >
            Categoria
          </Text>

          <CategorySelect
            hasCheckBox
            setCategory={handleCategorySelect}
            categorySelected={category}
          />

          <View style={styles.form}>
            <RectButton onPress={handleOpenGuilds}>
              <View style={styles.select}>
                {guild.icon ? (
                  <GuildIcon guildId={guild.id} iconId={guild.icon} />
                ) : (
                  <View style={styles.image}>
                    <DiscordSvg width={40} height={40} />
                  </View>
                )}
                <View style={styles.selectBody}>
                  <Text style={styles.label}>
                    {guild.name ? guild.name : 'Selecione um servidor'}
                  </Text>
                </View>

                <Feather
                  name="chevron-right"
                  color={theme.colors.heading}
                  size={18}
                />
              </View>
            </RectButton>

            <View style={styles.field}>
              <View>
                <Text style={[styles.label, { marginBottom: 12 }]}>
                  Dia e mês
                </Text>
                <View style={styles.column}>
                  <View style={styles.errorContainer}>
                    <SmallInput
                      name="day"
                      control={control}
                      maxLength={2}
                      error={errors.day}
                    />
                  </View>
                  <Text style={styles.divider}>/</Text>
                  <View style={styles.errorContainer}>
                    <SmallInput
                      name="month"
                      control={control}
                      maxLength={2}
                      error={errors.month}
                    />
                  </View>
                </View>
              </View>

              <View>
                <Text style={[styles.label, { marginBottom: 12 }]}>
                  Horário
                </Text>
                <View style={styles.column}>
                  <View style={styles.errorContainer}>
                    <SmallInput
                      name="hour"
                      control={control}
                      maxLength={2}
                      error={errors.hour}
                    />
                  </View>

                  <Text style={styles.divider}>:</Text>
                  <View style={styles.errorContainer}>
                    <SmallInput
                      name="minute"
                      control={control}
                      maxLength={2}
                      error={errors.minute}
                    />
                  </View>
                </View>
              </View>
            </View>

            <View style={[styles.field, { marginBottom: 12 }]}>
              <Text style={styles.label}>Descrição</Text>

              <Text style={styles.caracteresLimit}>Max 100 caracteres</Text>
            </View>

            <TextArea
              name="description"
              control={control}
              multiline
              maxLength={100}
              numberOfLines={5}
              autoCorrect={false}
              error={errors.description}
            />

            <View style={styles.footer}>
              <Button title="Agendar" onPress={handleSubmit(handleSave)} />
            </View>
          </View>
        </ScrollView>
      </Background>

      <ModalView
        visible={openGuildsModal}
        closeModal={handleCloseGuilds}
        transparent={true}
      >
        <Guilds handleGuildSelect={handleOpenGuildSelect} />
      </ModalView>
    </KeyboardAvoidingView>
  );
}
