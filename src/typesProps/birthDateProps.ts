import { TextInputProps } from "react-native";

export type BrithDateProps = Omit<TextInputProps, 'value' | 'onChange'> & {
  placeholder?: string;
  value: Date;
  onChange: (date: Date) => void;
  error: any;
}