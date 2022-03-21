import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { theme } from '../global/styles/theme';

import { Home } from '../pages/Home';
import { AppointmentDetails } from '../pages/AppointmentDetails';
import { AppointmentCreate } from '../pages/AppointmentCreate';

const App = createStackNavigator();

export function AppRoutes() {
  return (
    <App.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: theme.colors.secondary100 },
      }}
    >
      <App.Screen name="Home" component={Home} />
      <App.Screen name="AppointmentDetails" component={AppointmentDetails} />
      <App.Screen name="AppointmentCreate" component={AppointmentCreate} />
    </App.Navigator>
  );
}
