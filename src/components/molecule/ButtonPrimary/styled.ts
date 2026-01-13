import styled from "styled-components/native";
import { theme } from "../../../theme/defalt.theme";
import { ButtonProps, EnumColorButton } from "../../../typesProps/buttonProps";
import { RFValue } from "../../../utils/normalize";


export const ContainerButton = styled.TouchableOpacity<ButtonProps>`
  width: ${props => props.width || 100}%;
  background-color: ${props => EnumColorButton[props.color || 'primary']};
  border-radius: ${theme.button.borderRadius}px;
  height: ${RFValue(49)}px;
  justify-content: center;
  align-items: center; 
`; 