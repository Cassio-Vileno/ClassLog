import { TextProps } from "react-native";
import { FontWeight } from "../../../theme/fonts";
import { Text } from "./styles";

export type TypographyProps = TextProps & {
  fontSize?: number;
  color?: string;
  weight?: FontWeight;
  textAlign?: 'center' | 'end' | 'start' | 'left' | 'right';
}

export default function Typography({ children, ...rest }: TypographyProps) {
  return (
    <Text {...rest}>{children}</Text>
  )
}