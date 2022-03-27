import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  user: {
    flexDirection: 'row',
  },
  greeting: {
    fontFamily: theme.fonts.title500,
    fontSize: 24,
    color: theme.colors.heading,
    marginRight: 6,
  },
  username: {
    fontFamily: theme.fonts.title700,
    fontSize: 24,
    color: theme.colors.heading,
  },
  message: {
    fontFamily: theme.fonts.text400,
    color: theme.colors.highlight,
  },
  logout: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 24,
  },
  logoutTitle: {
    fontSize: 20,
    fontFamily: theme.fonts.title700,
    color: theme.colors.heading,
  },
  logoutTitleSpan: {
    fontSize: 20,
    fontFamily: theme.fonts.title700,
    color: theme.colors.primary,
  },
  logoutButtonContainer: {
    flexDirection: 'row',
  },
  logoutButton: {
    width: '40%',
    marginLeft: 25,
  },
});
