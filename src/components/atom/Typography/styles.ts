import styled from "styled-components/native";
import { TypographyProps } from ".";
import { theme } from "../../../theme/defalt.theme";
import { fonts } from "../../../theme/fonts";
import { RFValue } from "../../../utils/normalize";

export const Text = styled.Text<TypographyProps>`
  font-family: ${props => fonts[props.weight || 'medium']};
  font-size: ${props => props.fontSize ? RFValue(props.fontSize) : RFValue(theme.typography.fontSize)}px;
  color: ${props => props.color || theme.color.typography.default};
  ${props => props.textAlign && `text-align: ${props.textAlign}`};
  `;