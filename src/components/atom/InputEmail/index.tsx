import React from "react";
import { theme } from "../../../theme/defalt.theme";
import { InputProps } from "../../../typesProps/inputProps";
import { Error, InputEmailContainer } from "./styled";



export function InputEmail({ error, onChangeText, ...rest }: InputProps) {
  return (
    <>
      <InputEmailContainer
        error={error?.message}
        placeholder="E-mail"
        keyboardType="email-address"
        placeholderTextColor={theme.input.placeholderColor}
        cursorColor={theme.input.placeholderColor}
        autoCapitalize="none"
        onChangeText={onChangeText}
        {...rest}
      />
      <Error>{error?.message}</Error>
    </>
  )
}