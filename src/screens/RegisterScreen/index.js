import React from 'react';
import { theme } from '../../constants';
import { Block, Photo } from '../../elements';

const RegisterScreen = () => {
  return (
    <Block>
      <Block
        center
        flex={false}
        padding={[theme.sizes.padding * 2, 0, theme.sizes.padding, 0]}
      >
        <Photo
          image={require('../../assets/icons/icon.png')}
          resizeMode="contain"
          width={80}
          height={40}
        />
      </Block>
    </Block>
  );
};

export default RegisterScreen;
