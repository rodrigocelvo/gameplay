import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { theme } from '../global/styles/theme';

import { Home } from '../pages/Home';
import { AppointmentDetails } from '../pages/AppointmentDetails';
import { SignIn } from '../pages/SignIn';

const Auth = createStackNavigator();

export function AuthRoutes() {
  return (
    <Auth.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: theme.colors.secondary100 },
      }}
    >
      <Auth.Screen name="SignIn" component={SignIn} />
      <Auth.Screen name="Home" component={Home} />
      <Auth.Screen name="AppointmentDetails" component={AppointmentDetails} />
    </Auth.Navigator>
  );
}
