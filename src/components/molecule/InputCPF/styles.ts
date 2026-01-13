import styled from "styled-components/native";
import { InputProps } from "../../../typesProps/inputProps";
import { RFValue } from "../../../utils/normalize";
import { theme } from './../../../theme/defalt.theme';


export const Container = styled.TextInput<InputProps>`
  width: ${theme.input.width}%;
  height: ${RFValue(49)}px;
  font-size: ${RFValue(theme.input.fontSize)}px;
  padding: ${RFValue(theme.input.padding)}px;
  background-color: ${theme.input.backgroundColor};
  border-radius: ${theme.input.borderRadius}px;
  border-width: 1px;
  border-color: ${props =>
    props.error
      ? theme.input.borderColor.danger
      : theme.input.borderColor.default
  };
`;

export const Error = styled.Text`
  width: ${theme.input.width}%;
  color: ${theme.input.errorColor};
  text-align: left;
`;