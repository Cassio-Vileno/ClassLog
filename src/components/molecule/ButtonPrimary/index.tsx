import { theme } from "../../../theme/defalt.theme";
import { ButtonProps } from "../../../typesProps/buttonProps";
import Typography from "../../atom/Typography";
import { ContainerButton } from "./styled";

export function ButtonPrimary({
  color = 'primary',
  width,
  onPress,
  isEnabled,
  children,
  isLoading,
  ...rest
}: ButtonProps
) {
  return (
    <ContainerButton
      onPress={onPress}
      color={color}
      width={width}
      isEnabled={isEnabled}
      activeOpacity={0.7}
      {...rest}
    >
      <Typography weight="medium" fontSize={20} color={theme.button.textColor}>
        {!isLoading && children}
      </Typography>
    </ContainerButton>
  )
};
