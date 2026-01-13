// import { Controller, useForm } from "react-hook-form";
// import { BirthDatePicker } from "../../components/molecule/BirthDatePicker";
// import { Container } from "./styles";

// export function Register() {
//   const { control, handleSubmit, formState: { errors } } = useForm({
//     defaultValues: {
//       birthDate: new Date()
//     }
//   })
//   return (
//     <Container>
//       <Controller
//         control={control}
//         name="birthDate"
//         render={({ field: { onBlur, onChange, value } }) => (
//           <BirthDatePicker
//             value={value || new Date()}
//           />
//         )} />
//     </Container>
//   )
// }