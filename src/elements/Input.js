import React, { useState } from "react";
import {
  StyleSheet,
  TextInput,
} from "react-native";
import { TextInputMask } from "react-native-masked-text";
import Icon from "@expo/vector-icons/build/Ionicons";
import Text from "./Text";
import Block from "./Block";
import Button from "./Button";
import { theme } from "../constants";

const Input = ({
  label,
  error,
  secure,
  rightLabel,
  rightStyle,
  onRightPress,
  next,
  done,
  email,
  phone,
  number,
  style,
  reference,
  box,
  type,
  mask,
  value,
  defaultValue,
  onChangeText,
  submitEditing,
}) => {
  const [isToggleSecure, setIsToggleSecure] = useState(false);

  function renderToggle() {
    const toggleSecure = isToggleSecure;

    if (!secure) return null;

    return (
      <Button
        style={styles.toggle}
        onPress={() =>
          setIsToggleSecure((toggleSecure) => (toggleSecure = !toggleSecure))
        }
      >
        {rightLabel ? (
          rightLabel
        ) : (
          <Icon
            color={theme.colors.white}
            size={theme.sizes.font * 1.35}
            name={!toggleSecure ? "md-eye" : "md-eye-off"}
          />
        )}
      </Button>
    );
  }

  function renderRight() {
    if (!rightLabel) return null;

    return (
      <Button
        style={[styles.toggle, rightStyle]}
        onPress={() => onRightPress && onRightPress()}
      >
        {rightLabel}
      </Button>
    );
  }

  const [height, setHeight] = useState(theme.sizes.base * 3);

  const toggleSecure = isToggleSecure;
  const isSecure = toggleSecure ? false : secure;
  const inputStyles = [
    box
      ? { height: height, paddingTop: 12, paddingBottom: 12 }
      : { height: theme.sizes.base * 3 },
    styles.input,
    error && { borderColor: theme.colors.accent },
    style,
  ];

  const keyType = next ? "next" : done ? "done" : "done";

  const inputType = email
    ? "email-address"
    : number
    ? "numeric"
    : phone
    ? "phone-pad"
    : "default";

  if (mask) {
    return (
      <Block flex={false} margin={[theme.sizes.base / 1.5, 0]}>
        <TextInputMask
          placeholder={label}
          placeholderTextColor={theme.colors.white}
          value={value}
          type={type}
          style={inputStyles}
          secureTextEntry={isSecure}
          autoCompleteType={"off"}
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType={inputType}
          defaultValue={defaultValue}
          onChangeText={onChangeText}
          returnKeyType={keyType}
          onSubmitEditing={submitEditing}
          ref={reference}
        />
        {renderToggle()}
        {renderRight()}
      </Block>
    );
  } else {
    return (
      <Block flex={false} margin={[theme.sizes.base / 1.5, 0]}>
        <TextInput
          placeholder={label}
          placeholderTextColor={theme.colors.white}
          value={value}
          style={inputStyles}
          secureTextEntry={isSecure}
          autoCompleteType={"off"}
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType={inputType}
          defaultValue={defaultValue}
          onChangeText={onChangeText}
          returnKeyType={keyType}
          onSubmitEditing={submitEditing}
          ref={reference}
        />
        {renderToggle()}
        {renderRight()}
      </Block>
    );
  }
};

export default Input;

const styles = StyleSheet.create({
  input: {
    borderWidth: 2,
    borderColor: theme.colors.quaternary,
    borderRadius: theme.sizes.radius,
    fontSize: theme.sizes.font,
    color: theme.colors.white,
    paddingLeft: theme.sizes.base,
    paddingRight: theme.sizes.base,
    height: theme.sizes.base * 4
  },
  toggle: {
    position: "absolute",
    alignItems: "flex-end",
    width: theme.sizes.base * 2,
    height: theme.sizes.base * 2,
    top: theme.sizes.base * 1.5,
    paddingRight: theme.sizes.base - 6,
    right: 0,
  },
});
