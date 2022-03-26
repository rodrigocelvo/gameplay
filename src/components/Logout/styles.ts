import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 24,
  },
  title: {
    fontSize: 20,
    fontFamily: theme.fonts.title700,
    color: theme.colors.heading,
  },
  titleSpan: {
    fontSize: 20,
    fontFamily: theme.fonts.title700,
    color: theme.colors.primary,
  },
  buttonContainer: {
    flexDirection: 'row',
  },
  button: {
    width: '40%',
    marginLeft: 25,
  },
});
