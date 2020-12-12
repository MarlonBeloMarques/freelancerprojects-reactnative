import { AntDesign } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import React, { useState } from 'react';
import { Dimensions, ScrollView } from 'react-native';
import { ProjectCard } from '../../components';
import { theme } from '../../constants';
import { Block, Button, Input, Photo, Text } from '../../elements';

const { width } = Dimensions.get('window');

const ProjectsScreen = ({ locations, startColor, endColor }) => {
  const [search, setSearch] = useState('');

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
        <ScrollView showsVerticalScrollIndicator={false}>
          <Block
            flex={false}
            padding={[theme.sizes.padding * 3, 0, theme.sizes.padding * 4, 0]}
          >
            <Block flex={false} padding={[0, theme.sizes.padding]}>
              <Block
                absolute
                flex={false}
                color="secondary"
                height={150}
                width={width - theme.sizes.padding * 2}
                margin={[theme.sizes.padding * 3, 0, theme.sizes.padding, 0]}
                card
                style={{ zIndex: 1, top: 6, left: 20 }}
              />
              <Block
                flex={false}
                color="quaternary"
                height={150}
                card
                margin={[theme.sizes.padding * 3, 0, theme.sizes.padding, 0]}
                style={{ zIndex: 2 }}
              >
                <Block
                  column
                  color="transparent"
                  padding={theme.sizes.caption}
                  space="between"
                >
                  <Block color="transparent" flex={false} width="50%">
                    <Text h3 primary bold>
                      What are you looking for?
                    </Text>
                  </Block>
                  <Block row flex={false}>
                    <AntDesign
                      name="search1"
                      size={18}
                      color={theme.colors.primary}
                      style={{
                        position: 'absolute',
                        alignSelf: 'center',
                        paddingLeft: 10,
                      }}
                    />
                    <Input
                      label=""
                      defaultValue={search}
                      onChangeText={setSearch}
                      style={{
                        borderColor: theme.colors.primary,
                        height: theme.sizes.base * 2,
                        borderRadius: theme.sizes.radius * 2,
                        width: 180,
                        paddingLeft: 40,
                      }}
                    />
                  </Block>
                </Block>
                <Block
                  absolute
                  color="transparent"
                  style={{ right: 0, bottom: 0 }}
                >
                  <Photo
                    image={require('../../assets/images/Saly-11.png')}
                    resizeMode="contain"
                    width={170}
                    height={180}
                  />
                </Block>
              </Block>
            </Block>
            <Block flex={false} padding={[0, theme.sizes.padding]}>
              <Block flex={false} middle row space="between">
                <Text bold h3 secondary>
                  Projects
                </Text>
                <Button style={null}>
                  <AntDesign
                    name="filter"
                    size={24}
                    color={theme.colors.secondary}
                  />
                </Button>
              </Block>
              <Block flex={false}>
                <Block
                  color="quaternary"
                  flex={false}
                  height={500}
                  card
                  style={{ zIndex: 2 }}
                  margin={[theme.sizes.padding, 0]}
                >
                  <ProjectCard
                    height={200}
                    hashtag="#reactnative #frontend"
                    title="Home sales app"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                    priceMin={7000}
                    priceMax={16000}
                    photo={require('../../assets/images/profile.jpg')}
                  />
                  <ProjectCard
                    height={200}
                    hashtag="#reactnative #frontend"
                    title="Finance application"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                    priceMin={7000}
                    priceMax={16000}
                    photo={require('../../assets/images/profile.jpg')}
                  />
                </Block>
                <Block
                  absolute
                  color="secondary"
                  flex={false}
                  width={width - theme.sizes.padding * 2}
                  height={500}
                  card
                  style={{ zIndex: 1, top: 6, right: 6 }}
                  margin={[theme.sizes.padding, 0]}
                />
              </Block>
            </Block>
          </Block>
        </ScrollView>
      </Block>
    </Block>
  );
};

ProjectsScreen.defaultProps = {
  startColor: theme.colors.primary,
  endColor: 'rgba(52, 52, 52, 0.0)',
  locations: [0.4, 1],
};

export default ProjectsScreen;
