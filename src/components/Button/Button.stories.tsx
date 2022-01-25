import React from "react";
import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react-native";
import { boolean, text, color } from "@storybook/addon-knobs";

import CenterView from "../../../storybook/stories/CenterView";
import BoldButton from "./Button";


storiesOf("Button", module)
  .addDecorator((getStory) => (
      <CenterView>{getStory()}</CenterView>
  ))
  .add("Primary button", () => (
    <BoldButton
      title={text("Button label", 'Primary bold button')}
      disabled={boolean("Disabled", false)}
      accessibilityLabel="accessibility label"
      color={color('background color',"#FF66EE")}
      onPress={action("Primary button Press!")}
    />
  ), { notes: 'This is a button component'})
  .add("Secondary button", () => (
    <BoldButton
      title={text("Button label", 'Secondary bold button')}
      disabled={boolean("Disabled", true)}
      accessibilityLabel="accessibility label"
      color={color('background color',"#4169E1")}
      onPress={action("Secondary button Press!")}
    />
  ));
