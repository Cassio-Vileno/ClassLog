import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { Image } from "react-native";
import { InputEmail } from "../../components/atom/InputEmail";
import { InputPassword } from "../../components/atom/inputPassword";
import Typography from "../../components/atom/Typography";
import { ButtonGhost } from "../../components/molecule/ButtonGhost";
import { ButtonPrimary } from "../../components/molecule/ButtonPrimary";
import { LoginFormData, loginSchema } from "../../schemas/schemas";
import { theme } from "../../theme/defalt.theme";
import { Container, ContainerButton, ContainerButtonRegister, ContainerForm } from "./styled";


export default function LogIn() {
  const { control, handleSubmit, formState: { errors } } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema)
  })


  const onSubmit = (data: LoginFormData) => {
    console.log("dados enviados:", data)
  }

  return (
    <Container>
      <Image
        source={require('../../assets/image/logoFull.jpg')}
        style={{ width: '100%', height: 250 }}
        resizeMode="contain"
      />
      <ContainerForm>
        <Controller
          control={control}
          name="email"
          render={({ field: { onChange, onBlur, value } }) => (
            <InputEmail
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              error={errors?.email}
            />
          )} />
        <Controller
          control={control}
          name="password"
          render={({ field: { onChange, onBlur, value } }) => (
            <InputPassword
              onChangeText={onChange}
              onBlur={onBlur}
              value={value}
              error={errors?.password}
            />
          )}
        />
        <ContainerButton>
          <ButtonPrimary width={60} onPress={handleSubmit(onSubmit)}>Entrar</ButtonPrimary>
          <ButtonGhost color='tertiary' onPress={() => console.log("ooo")}>Esqueceu a senha?</ButtonGhost>
          <ContainerButtonRegister>
            <Typography fontSize={15} color={theme.color.neutralGray3}>
              Não tem uma conta?
            </Typography>
            <ButtonGhost color="tertiary" fontSize={15} onPress={() => console.log("gg")}>Cadastre-se</ButtonGhost>
          </ContainerButtonRegister>
        </ContainerButton>
      </ContainerForm>
    </Container>
  )
}
