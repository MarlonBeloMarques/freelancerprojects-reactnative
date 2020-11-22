import * as React from "react";
import { Block, Text } from "./src/elements";
import { StatusBar } from "expo-status-bar";

export default function App() {
  return (
    <Block center middle>
      <StatusBar style="light" />
      <Text>Freelance Projects</Text>
    </Block>
  );
}
