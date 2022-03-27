import React from 'react';
import { Text, View, TextInput, TextInputProps } from 'react-native';
import { Control, Controller, FieldError } from 'react-hook-form';

import { styles } from './styles';

interface Props extends TextInputProps {
  control: Control<any>;
  name: string;
  error?: FieldError;
}

export function SmallInput({ control, name, error, ...rest }: Props) {
  return (
    <>
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, value } }) => (
          <TextInput
            onChangeText={onChange}
            value={value}
            keyboardAppearance="dark"
            keyboardType="numeric"
            style={styles.container}
            {...rest}
          />
        )}
      />
      {error && <Text style={styles.error}>{error.message}</Text>}
    </>
  );
}
