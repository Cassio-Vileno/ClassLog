import styled from "styled-components/native";
import { theme } from "../../../theme/defalt.theme";
import { RFValue } from "../../../utils/normalize";
import { InputProps } from './../../../typesProps/inputProps';

type InputPasswordProps = Omit<InputProps, 'onChangeText'>

export const ContainerInputPassword = styled.View<InputPasswordProps>`
  width: ${theme.input.width}%;
  height: ${RFValue(49)}px;
  flex-direction: row;
  justify-content: space-between;
  border-radius: ${theme.input.borderRadius}px;
  background-color: ${theme.input.backgroundColor};
  border-width: 1px;
  border-color: ${props =>
    props.error
      ? theme.input.borderColor.danger
      : theme.input.borderColor.default
  };
  border-width: 1px;
`;

export const ContainerButtonIcon = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  padding: 10px;
`;


export const Input = styled.TextInput`
  flex: 1;
  height: 100%;
  border-width: 1px;
  padding: 10px 18px;
  border-radius: ${theme.input.borderRadius}px;
  border-width: 0px;
  font-size: ${RFValue(theme.input.fontSize)}px;
`;

export const Error = styled.Text`
  width: ${theme.input.width}%;
  text-align: left;
  color: ${theme.input.errorColor};
  padding: 0;
`;