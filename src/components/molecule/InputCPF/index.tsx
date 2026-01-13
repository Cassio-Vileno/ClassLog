import { InputProps } from "../../../typesProps/inputProps";
import { cpfMask } from "../../../utils/mask";
import { Container, Error } from "./styles";

export function InputCPF({ error, value, onChangeText }: InputProps) {
  return (
    <>
      <Container
        value={cpfMask(value || '')}
        onChangeText={onChangeText}
        error={error}
        maxLength={14}
      />
      <Error>{error?.message}</Error>
    </>
  )
}