import { useState } from "react";
import { theme } from "../../../theme/defalt.theme";
import { InputProps } from "../../../typesProps/inputProps";
import { Icon } from "../Icon";
import { ContainerButtonIcon, ContainerInputPassword, Error, Input } from "./styles";

export function InputPassword({ error, onChangeText, ...rest }: InputProps) {
  const [showPassword, setShowpassword] = useState(true)
  return (
    <>
      <ContainerInputPassword error={error?.message}>
        <Input
          placeholder="Senha"
          onChangeText={onChangeText}
          secureTextEntry={showPassword}
          placeholderTextColor={theme.input.placeholderColor}
          cursorColor={theme.input.placeholderColor}
          autoCapitalize="none"
          {...rest}
        />
        <ContainerButtonIcon onPress={() => setShowpassword(!showPassword)}>
          {showPassword
            ? <Icon name="eye-off" color={theme.color.neutralGray3} type="feather" />
            : <Icon name="eye" color={theme.color.neutralGray3} type="feather" />
          }
        </ContainerButtonIcon>
      </ContainerInputPassword>
      <Error>{error?.message}</Error>
    </>
  )
}