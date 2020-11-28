import React from 'react';
import { Animated, Dimensions, FlatList } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { theme } from '../../constants';
import { Block, Button, Photo, Text } from '../../elements';
import styles from './styles';

const { width, height } = Dimensions.get('window');

const WelcomeScreen = ({ illustrations }) => {
  const scrollX = new Animated.Value(0);

  const renderIllustrations = () => {
    return (
      <FlatList
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
        onScroll={Animated.event([
          {
            nativeEvent: { contentOffset: { x: scrollX } },
          },
        ])}
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
          height={50}
        />
      </Block>
      <Block center middle>
        {renderIllustrations()}
      </Block>
      {renderSteps()}
      <Block flex={false} absolute>
        <Block
          absolute
          color="transparent"
          flex={false}
          width={60}
          height={50}
          margin={theme.sizes.padding * 2}
          middle
          style={{ top: height / 1.25, zIndex: 2 }}
        >
          <Button style={{ alignItems: 'center' }}>
            <MaterialIcons
              name="skip-next"
              size={34}
              color={theme.colors.white}
            />
          </Button>
        </Block>
        <Block
          absolute
          color={theme.colors.tertiary}
          flex={false}
          width={60}
          height={65}
          margin={theme.sizes.padding * 2}
          middle
          style={{ top: height / 1.255, left: -4, zIndex: 1 }}
          card
        />
      </Block>
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
