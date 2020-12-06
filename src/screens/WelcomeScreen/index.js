import React, { useEffect, useRef, useState } from 'react';
import { Animated, Dimensions, FlatList } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { theme } from '../../constants';
import { Block, Button, Photo, Text } from '../../elements';
import styles from './styles';

const { width, height } = Dimensions.get('window');

const WelcomeScreen = ({ illustrations, navigation }) => {
  const [scrollX, setScrollX] = useState(new Animated.Value(0));
  const [end, setEnd] = useState(false);

  const [widthButtonOne] = useState(new Animated.Value(60));
  const [widthButtonTwo] = useState(new Animated.Value(60));

  const flatListRef = useRef();

  const checkScroll = ({ layoutMeasurement, contentOffset, contentSize }) => {
    if (layoutMeasurement.width + contentOffset.x >= contentSize.width) {
      setEnd(true);
    } else {
      setEnd(false);
    }

    setScrollX(contentOffset.x);
  };

  useEffect(() => {
    if (end) {
      Animated.timing(widthButtonOne, {
        toValue: width / 2 - theme.sizes.padding * 2,
        duration: 150,
        useNativeDriver: false,
      }).start();

      Animated.timing(widthButtonTwo, {
        toValue: width - theme.sizes.padding * 4,
        duration: 150,
        useNativeDriver: false,
      }).start();
    } else {
      Animated.timing(widthButtonOne, {
        toValue: 60,
        duration: 150,
        useNativeDriver: false,
      }).start();

      Animated.timing(widthButtonTwo, {
        toValue: 60,
        duration: 150,
        useNativeDriver: false,
      }).start();
    }
  }, [end]);

  const jumpScroll = () => {
    flatListRef.current.scrollToIndex({
      animated: true,
      index: illustrations.indexOf(illustrations[illustrations.length - 1]),
      viewPosition: 0.5,
    });
  };

  const renderIllustrations = () => {
    return (
      <FlatList
        ref={flatListRef}
        horizontal
        pagingEnabled
        scrollEnabled
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={16}
        snapToAlignment="center"
        data={illustrations}
        keyExtractor={(item) => `${item.id}`}
        renderItem={({ item }) => (
          <>
            <Photo
              absolute
              image={item.source}
              resizeMode="contain"
              style={{
                top: item.top,
                width: item.width,
                height: item.height,
                overflow: 'visible',
                zIndex: 4,
              }}
            />
            <Block
              flex={false}
              width={width}
              height={260}
              padding={[0, theme.sizes.padding * 2]}
              style={{ alignSelf: item.title.align }}
            >
              <Text center bold size={item.title.fontSize}>
                {item.title.text}
              </Text>
            </Block>
          </>
        )}
        onScroll={({ nativeEvent }) => checkScroll(nativeEvent)}
      />
    );
  };

  const renderSteps = () => {
    const stepPosition = Animated.divide(scrollX, width);

    return (
      <Block
        color="transparent"
        row
        style={[styles.stepsContainer, { top: height / 1.22 }]}
      >
        {illustrations.map((item, index) => {
          const opacity = stepPosition.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: [0.4, 1, 0.4],
            extrapolate: 'clamp',
          });
          return (
            <Block
              key={`step-${item.id}`}
              animated
              flex={false}
              style={[styles.steps, { opacity }]}
            />
          );
        })}
      </Block>
    );
  };

  const interactiveButton = () => {
    return (
      <Block flex={false} absolute>
        <Block
          animated
          absolute
          color="transparent"
          flex={false}
          width={widthButtonOne}
          height={50}
          margin={[theme.sizes.padding * 2]}
          middle
          style={{ top: height / 1.25, zIndex: 2 }}
        >
          {!end ? (
            <Button
              color="secondary"
              style={{
                alignItems: 'center',
              }}
              onPress={() => jumpScroll()}
            >
              <MaterialIcons
                name="skip-next"
                size={34}
                color={theme.colors.white}
              />
            </Button>
          ) : (
            <Button
              color="secondary"
              style={{
                alignItems: 'center',
              }}
              onPress={() => navigation.navigate('SignIn')}
            >
              <Text bold>Sign in</Text>
            </Button>
          )}
        </Block>
        <Block
          animated
          absolute
          color={theme.colors.tertiary}
          flex={false}
          width={widthButtonTwo}
          height={65}
          margin={theme.sizes.padding * 2}
          padding={end ? [0, 0, 0, width / 2 - theme.sizes.padding * 2] : null}
          middle
          style={{ top: height / 1.26, left: -4, zIndex: 1 }}
          card
        >
          {end && (
            <Button
              style={{ alignItems: 'center' }}
              onPress={() => navigation.navigate('Register')}
            >
              <Text bold>Register</Text>
            </Button>
          )}
        </Block>
      </Block>
    );
  };

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
      <Block center middle>
        {renderIllustrations()}
      </Block>
      {renderSteps()}
      {interactiveButton()}
    </Block>
  );
};

WelcomeScreen.defaultProps = {
  illustrations: [
    {
      id: 1,
      title: {
        text:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Montes a.',
        fontSize: theme.sizes.h3,
        align: 'flex-end',
      },
      source: require('../../assets/images/Saly-15.png'),
      width,
      height: height / 2,
      top: 20,
    },
    {
      id: 2,
      title: {
        text: 'Eget sem vulputate sem sit est purus elit habitasse.',
        fontSize: theme.sizes.h3,
        align: 'flex-start',
      },
      source: require('../../assets/images/Saly-14.png'),
      width: width * 1.2,
      height: height / 1.5,
      top: 140,
    },
    {
      id: 3,
      title: {
        text: 'Amet urna proin sagittis sem.',
        fontSize: theme.sizes.h2,
        align: 'flex-start',
      },
      source: require('../../assets/images/Saly-9.png'),
      width,
      height: height / 2,
      top: 80,
    },
  ],
};

export default WelcomeScreen;
