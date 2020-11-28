import { StyleSheet } from 'react-native';
import { theme } from '../../constants';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  stepsContainer: {
    position: 'absolute',
    bottom: theme.sizes.base / 2,
    left: 55,
  },
  steps: {
    width: 8,
    height: 8,
    borderRadius: 5,
    marginHorizontal: 2.5,
    backgroundColor: theme.colors.white,
  },
});
