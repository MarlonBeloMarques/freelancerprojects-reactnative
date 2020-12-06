import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign } from '@expo/vector-icons';
import { Dimensions, TouchableOpacity } from 'react-native';
import { theme } from '../constants';
import ProjectsScreen from '../screens/ProjectsScreen';
import MyProjectsScreen from '../screens/MyProjectsScreen';
import { Block, Text } from '../elements';

const { width } = Dimensions.get('window');

const Tab = createBottomTabNavigator();

function MyTabBar({ state, descriptors, navigation }) {
  const focusedOptions = descriptors[state.routes[state.index].key].options;

  if (focusedOptions.tabBarVisible === false) {
    return null;
  }

  return (
    <>
      <Block
        flex={false}
        row
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          alignItems: 'center',
          marginBottom: theme.sizes.padding,
          backgroundColor: theme.colors.secondary,
          borderRadius: theme.sizes.radius,
          marginLeft: theme.sizes.padding,
          marginRight: theme.sizes.padding,
          height: theme.sizes.base * 4,
          zIndex: 2,
        }}
      >
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];

          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };

          if (index === 0) {
            return (
              <TouchableOpacity
                accessibilityRole="button"
                accessibilityState={isFocused ? { selected: true } : {}}
                accessibilityLabel={options.tabBarAccessibilityLabel}
                testID={options.tabBarTestID}
                activeOpacity={0.8}
                onPress={onPress}
                onLongPress={onLongPress}
                style={{ flex: 1, alignItems: 'center' }}
              >
                <AntDesign
                  name="appstore1"
                  size={24}
                  color={isFocused ? theme.colors.primary : theme.colors.white}
                />
              </TouchableOpacity>
            );
          }

          if (index === 1) {
            return (
              <TouchableOpacity
                accessibilityRole="button"
                accessibilityState={isFocused ? { selected: true } : {}}
                accessibilityLabel={options.tabBarAccessibilityLabel}
                testID={options.tabBarTestID}
                activeOpacity={0.8}
                onPress={onPress}
                onLongPress={onLongPress}
                style={{ flex: 1, alignItems: 'center' }}
              >
                <AntDesign
                  name="heart"
                  size={24}
                  color={isFocused ? theme.colors.primary : theme.colors.white}
                />
              </TouchableOpacity>
            );
          }
        })}
        <TouchableOpacity
          accessibilityRole="button"
          activeOpacity={0.8}
          onPress={() => navigation.navigate('Auth')}
          style={{ flex: 1, alignItems: 'center' }}
        >
          <AntDesign name="logout" size={24} color={theme.colors.white} />
        </TouchableOpacity>
      </Block>
      <Block
        flex={false}
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          backgroundColor: theme.colors.tertiary,
          borderRadius: theme.sizes.radius,
          height: theme.sizes.base * 4,
          width: width - theme.sizes.padding * 2,
          marginLeft: theme.sizes.padding,
          marginRight: theme.sizes.padding,
          marginBottom: theme.sizes.padding / 1.3,
          zIndex: 1,
        }}
      />
    </>
  );
}

export default function NavigationTabBottom() {
  return (
    <Tab.Navigator
      initialRouteName="Projects"
      tabBar={(props) => <MyTabBar {...props} />}
    >
      <Tab.Screen name="Projects" component={ProjectsScreen} />
      <Tab.Screen name="MyProjects" component={MyProjectsScreen} />
    </Tab.Navigator>
  );
}
