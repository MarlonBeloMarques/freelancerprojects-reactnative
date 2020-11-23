import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

import { theme } from '../constants';

const Button = ({
  style,
  opacity,
  color,
  shadow,
  children,
  radius,
  disableRadiusDefault,
  onPress,
}) => {
  const buttonStyles = [
    disableRadiusDefault
      ? { borderRadius: radius }
      : { borderRadius: theme.sizes.radius },
    styles.button,
    shadow && styles.shadow, // shadow for IOS, elevation for android
    color && styles[color], // predefined styles colors for backgroundColor
    color && !styles[color] && { backgroundColor: color }, // custom backgroundColor
    style,
  ];

  return (
    <TouchableOpacity
      style={buttonStyles}
      activeOpacity={opacity || 0.8}
      onPress={onPress}
    >
      {children}
    </TouchableOpacity>
  );
};

export default Button;

Button.defaultProps = {
  opacity: 0.8,
};

const styles = StyleSheet.create({
  button: {
    height: theme.sizes.base * 4,
    justifyContent: 'center',
    marginVertical: theme.sizes.padding / 3,
    marginTop: theme.sizes.base / 2,
    backgroundColor: theme.colors.secondary,
  },
  shadow: {
    shadowColor: theme.colors.tertiary,
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 10,
    shadowRadius: 1,
    elevation: 3, // for android devices
  },
  primary: { backgroundColor: theme.colors.primary },
  secondary: { backgroundColor: theme.colors.secondary },
  tertiary: { backgroundColor: theme.colors.tertiary },
  quaternary: { backgroundColor: theme.colors.quaternary },
  white: { backgroundColor: theme.colors.white },
  gray: { backgroundColor: theme.colors.gray },
  accent: { backgroundColor: theme.colors.accent },
});
