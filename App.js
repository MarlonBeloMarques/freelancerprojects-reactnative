import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Block } from './src/elements';
import AppContainer from './src/routes';

export default function App() {
  return (
    <Block>
      <StatusBar style="light" />
      <AppContainer />
    </Block>
  );
}
