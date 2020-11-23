import React from 'react';
import { StyleSheet, Image, Animated } from 'react-native';

const Photo = ({
  width,
  height,
  style,
  avatar,
  animated,
  absolute,
  onLayout,
  reference,
  image,
  resizeMode,
}) => {
  const blockStyles = [
    absolute && { position: 'absolute' },
    // eslint-disable-next-line no-use-before-define
    width && height && { width, height },
    avatar && styles.avatar,
    style, // reescrever estilos predefinidos
  ];

  if (animated) {
    return (
      <Animated.Image
        style={blockStyles}
        ref={reference}
        source={typeof image === 'string' ? { uri: image } : image}
        onLayout={onLayout}
        resizeMode={resizeMode}
      />
    );
  }

  return (
    <Image
      style={blockStyles}
      ref={reference}
      source={typeof image === 'string' ? { uri: image } : image}
      onLayout={onLayout}
      resizeMode={resizeMode}
    />
  );
};

export default Photo;

export const styles = StyleSheet.create({
  avatar: {
    width: 32,
    height: 32,
    borderRadius: 26,
  },
});
