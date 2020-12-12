import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import Carousel from 'react-native-snap-carousel';
import { Dimensions } from 'react-native';
import { ProjectCard } from '../../components';
import { theme } from '../../constants';
import { Block, Photo, Text } from '../../elements';

const { width, height } = Dimensions.get('window');

const MyProjectsScreen = ({ locations, startColor, endColor }) => {
  const myProjects = [
    {
      title: 'Figure actions app',
      text:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus eget amet tincidunt dolor.',
      hashtag: '#reactnative #frontend',
      priceMin: '$ 7.000',
      priceMax: '$ 16.000',
      backgroundImage: require('../../assets/images/background_1.png'),
    },
    {
      title: 'Share Work Env. app',
      text:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus eget amet tincidunt dolor.',
      hashtag: '#reactnative #frontend',
      priceMin: '$ 7.000',
      priceMax: '$ 16.000',
      backgroundImage: require('../../assets/images/background_2.png'),
    },
    {
      title: 'Monster Burger Del. app',
      text:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus eget amet tincidunt dolor.',
      hashtag: '#reactnative #frontend',
      priceMin: '$ 7.000',
      priceMax: '$ 16.000',
      backgroundImage: require('../../assets/images/background_3.png'),
    },
  ];

  const renderItem = ({ item, index }) => {
    return (
      <Block flex={false} width={250}>
        <Photo
          image={item.backgroundImage}
          style={{
            width: 250,
            height: 200,
            resizeMode: 'cover',
            borderTopStartRadius: theme.sizes.radius,
            borderTopEndRadius: theme.sizes.radius,
          }}
        />
        <ProjectCard
          height={220}
          hashtag={item.hashtag}
          title={item.title}
          description={item.text}
          priceMin={item.priceMin}
          priceMax={item.priceMax}
          photo={require('../../assets/images/profile.jpg')}
          style={{
            borderBottomEndRadius: theme.sizes.radius,
            borderBottomStartRadius: theme.sizes.radius,
          }}
        />
      </Block>
    );
  };

  return (
    <Block color="primary">
      <Block flex={false}>
        <LinearGradient
          locations={locations}
          colors={[startColor, endColor]}
          style={{
            position: 'absolute',
            zIndex: 5,
            left: 0,
            right: 0,
            height: 120,
          }}
        >
          <Block
            center
            row
            flex={false}
            space="between"
            padding={[
              theme.sizes.padding * 2,
              theme.sizes.padding,
              0,
              theme.sizes.padding,
            ]}
          >
            <Photo
              image={require('../../assets/icons/icon.png')}
              resizeMode="contain"
              width={80}
              height={40}
            />
            <Photo image={require('../../assets/images/profile.jpg')} avatar />
          </Block>
        </LinearGradient>
      </Block>
      <Block middle padding={theme.sizes.padding}>
        <Block flex={false}>
          <Text bold h3 secondary>
            My Projects
          </Text>
          <Block
            margin={[theme.sizes.padding, 0]}
            padding={[theme.sizes.padding, 0]}
            flex={false}
            height={height / 1.6}
            color="quaternary"
            card
            style={{ zIndex: 2 }}
          >
            <Carousel
              layout="stack"
              renderItem={renderItem}
              data={myProjects}
              sliderWidth={320}
              itemWidth={250}
              layoutCardOffset="18"
            />
          </Block>
          <Block
            absolute
            margin={[theme.sizes.padding * 2.2, 0]}
            height={height / 1.6}
            width={width - theme.sizes.padding * 2}
            color="secondary"
            card
            style={{ zIndex: 1, left: -10 }}
          />
        </Block>
      </Block>
    </Block>
  );
};

MyProjectsScreen.defaultProps = {
  startColor: theme.colors.primary,
  endColor: 'rgba(52, 52, 52, 0.0)',
  locations: [0.4, 1],
};

export default MyProjectsScreen;
