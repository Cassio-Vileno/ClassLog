import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { BirthDatePicker } from "../../components/molecule/BirthDatePicker";
import { ButtonPrimary } from "../../components/molecule/ButtonPrimary";
import { InputCPF } from "../../components/molecule/InputCPF";
import { registerSchema } from "../../schemas/registerSchema";
import { Container } from "./styles";

export function Register() {
  const { control, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      birthday: new Date()
    }
  })
  const onSubmit = (data: any) => {
    console.log("dados enviados:", data)
  }

  return (
    <Container>
      <Controller
        control={control}
        name="birthday"
        render={({ field: { onBlur, onChange, value } }) => (
          <BirthDatePicker
            value={value}
            onChange={onChange}
            error={errors.birthday}
            onBlur={onBlur}
          />
        )}
      />
      <Controller
        control={control}
        name="cpf"
        render={({ field: { onChange, onBlur, value } }) => (
          <InputCPF
            onChangeText={onChange}
            onBlur={onBlur}
            value={value}
            error={errors?.cpf}
          />
        )}
      />
      <ButtonPrimary onPress={handleSubmit(onSubmit)}>Avançar</ButtonPrimary>
    </Container>
  )
}