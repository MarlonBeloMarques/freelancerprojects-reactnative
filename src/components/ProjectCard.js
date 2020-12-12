import { MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react';
import { theme } from '../constants';
import { Block, Button, Photo, Text } from '../elements';

const projectCard = ({
  height,
  hashtag,
  title,
  description,
  priceMax,
  priceMin,
  photo,
  style,
}) => {
  return (
    <Block
      color="gray"
      flex={false}
      height={height}
      padding={theme.sizes.base}
      style={style}
    >
      <Text bold caption white>
        {hashtag}
      </Text>
      <Text h3 bold secondary style={{ paddingVertical: theme.sizes.caption }}>
        {title}
      </Text>
      <Text white>{description}</Text>
      <Block row flex={false} padding={[theme.sizes.caption / 2, 0]}>
        <Text bold quaternary>
          {`$${priceMin} - `}
        </Text>
        <Text bold quaternary>
          {`$${priceMax}`}
        </Text>
      </Block>
      <Block
        padding={[theme.sizes.caption, 0, 0, 0]}
        center
        row
        flex={0.65}
        space="between"
      >
        <Photo
          image={photo}
          avatar
          style={{ borderRadius: theme.sizes.radius }}
        />
        <Block row flex={0.35} space="between">
          <Button style={null}>
            <Block
              center
              middle
              flex={false}
              style={{
                borderWidth: 1,
                borderColor: theme.colors.white,
                borderRadius: theme.sizes.radius / 2,
                width: 28,
                height: 28,
              }}
            >
              <MaterialCommunityIcons
                name="send"
                size={16}
                color={theme.colors.white}
              />
            </Block>
          </Button>
          <Button style={null}>
            <Block
              center
              middle
              flex={false}
              style={{
                borderWidth: 1,
                borderColor: theme.colors.white,
                borderRadius: theme.sizes.radius / 2,
                width: 28,
                height: 28,
              }}
            >
              <MaterialCommunityIcons
                name="message-text"
                size={16}
                color={theme.colors.white}
              />
            </Block>
          </Button>
        </Block>
      </Block>
    </Block>
  );
};

export default projectCard;
