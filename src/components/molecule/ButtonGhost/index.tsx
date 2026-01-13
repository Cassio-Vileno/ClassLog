import { ButtonProps, EnumColorButton } from "../../../typesProps/buttonProps";
import Typography from "../../atom/Typography";
import { Button } from "./styles";

export function ButtonGhost({
  onPress,
  children,
  fontSize,
  weight,
  color,
  ...rest }: ButtonProps) {

  return (
    <Button
      onPress={onPress}
      {...rest}
    >
      <Typography
        fontSize={fontSize}
        color={EnumColorButton[color || 'primary']}
        weight={weight}
      >
        {children}
      </Typography>
    </Button>
  )
}