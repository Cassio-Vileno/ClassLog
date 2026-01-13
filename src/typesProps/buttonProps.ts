import { TouchableOpacityProps } from "react-native";
import { FontWeight } from "../theme/fonts";

export enum EnumColorButton {
  primary = '#0C87CD',
  secondary = '#9D9FA0',
  tertiary = '#03408F'
}

export type ButtonProps = TouchableOpacityProps & {
  width?: number;
  color?: 'primary' | 'secondary' | 'tertiary'
  fontSize?: number;
  isEnabled?: boolean;
  isLoading?: boolean;
  onPress: () => void;
  weight?: FontWeight;
}
