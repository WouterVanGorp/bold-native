import React from "react";
import {
  Button,
} from "react-native";

interface Props {
  title: string,
  color: string,
  accessibilityLabel: string,
  disabled: boolean,
  onPress: (event: any) => void
}

const BoldButton = ({ title, color, accessibilityLabel, disabled = false, onPress}: Props) => (
  <Button
    onPress={onPress}
    title={title}
    color={color}
    disabled={disabled}
    accessibilityLabel={accessibilityLabel}
  />
);

export default BoldButton;
