import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Block, Text } from './src/elements';

export default function App() {
  return (
    <Block center middle>
      <StatusBar style="light" />
      <Text>Freelance Projects</Text>
    </Block>
  );
}
