import React, { useRef, useState } from 'react';
import { Dimensions } from 'react-native';
import { theme } from '../../constants';
import { Block, Button, Input, Photo, Text } from '../../elements';

const { width } = Dimensions.get('window');

const RegisterScreen = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();

  return (
    <Block color="primary">
      <Block
        flex={false}
        padding={[theme.sizes.padding * 2, theme.sizes.padding]}
      >
        <Block flex={false} center>
          <Photo
            image={require('../../assets/icons/icon.png')}
            resizeMode="contain"
            width={80}
            height={40}
          />
        </Block>
        <Block
          flex={false}
          padding={[theme.sizes.padding * 2, theme.sizes.padding]}
        >
          <Text bold h3 center>
            Odio mollis a nec in sit feugiat lacus mi odio.
          </Text>
        </Block>
        <Block flex={false}>
          <Input
            label="Username"
            defaultValue={username}
            onChangeText={setUsername}
            next
            submitEditing={() => emailRef.current?.focus()}
          />
          <Input
            reference={emailRef}
            label="Email"
            defaultValue={email}
            next
            onChangeText={setEmail}
            submitEditing={() => passwordRef.current?.focus()}
          />
          <Input
            reference={passwordRef}
            secure
            label="Password"
            defaultValue={password}
            onChangeText={setPassword}
            submitEditing={() => confirmPasswordRef.current?.focus()}
          />
          <Input
            reference={confirmPasswordRef}
            secure
            label="Confirm password"
            defaultValue={confirmPassword}
            onChangeText={setConfirmPassword}
          />
        </Block>
        <Block
          flex={false}
          padding={[theme.sizes.padding, 0, theme.sizes.base, 0]}
        >
          <Button color="secondary" style={{ zIndex: 2 }}>
            <Text center bold>
              Register
            </Text>
          </Button>
          <Block
            absolute
            color={theme.colors.tertiary}
            flex={false}
            style={{ alignSelf: 'center', zIndex: 1, top: -12 }}
            width={width - theme.sizes.padding * 2}
            height={theme.sizes.base * 4}
            margin={theme.sizes.padding * 2}
            card
          />
        </Block>
      </Block>
    </Block>
  );
};

export default RegisterScreen;
