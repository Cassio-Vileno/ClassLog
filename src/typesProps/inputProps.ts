import { TextInputProps } from "react-native";

export type InputProps = TextInputProps & {
  error: any;
  onChangeText: () => void;
}