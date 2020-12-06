import React, { useRef, useState } from 'react';
import { Dimensions } from 'react-native';
import { theme } from '../../constants';
import { Block, Button, Input, Photo, Text } from '../../elements';

const { width } = Dimensions.get('window');

const SigninScreen = ({ navigation }) => {
  const [emailOrUsername, setEmailOrUsername] = useState();
  const [password, setPassword] = useState();

  const passwordRef = useRef();

  return (
    <Block>
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
            label="Email or username"
            defaultValue={emailOrUsername}
            onChangeText={setEmailOrUsername}
            next
            submitEditing={() => passwordRef.current?.focus()}
          />
          <Input
            reference={passwordRef}
            secure
            label="Password"
            defaultValue={password}
            onChangeText={setPassword}
          />
        </Block>
        <Block
          flex={false}
          padding={[theme.sizes.padding, 0, theme.sizes.base, 0]}
        >
          <Button
            color="secondary"
            style={{ zIndex: 2 }}
            onPress={() => navigation.navigate('Navigation')}
          >
            <Text center bold>
              Sign in
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
        <Button style={null}>
          <Block flex={false} row middle>
            <Text color="quaternary">Did you forget your password?</Text>
            <Text color="white">{' to recovery'}</Text>
          </Block>
        </Button>
      </Block>
    </Block>
  );
};

export default SigninScreen;
