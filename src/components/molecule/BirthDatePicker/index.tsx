// import DateTimePicker, { DateTimePickerEvent } from "@react-native-community/datetimepicker";
// import { useState } from "react";
// import { theme } from "../../../theme/defalt.theme";
// import { BrithDateProps } from "../../../typesProps/birthDateProps";
// import { Icon } from "../../atom/Icon";
// import Typography from "../../atom/Typography";
// import { Container } from "./styles";

// export function BirthDatePicker({ onChange, value, error, ...rest }: BrithDateProps) {
//   const [show, setShow] = useState(false)

//   const handleDateChange = (event: DateTimePickerEvent, selectedDate?: Date) => {
//     if (selectedDate) {
//       onChange(selectedDate)
//     }
//   }
//   return (
//     <>
//       <Container onPress={() => setShow(!show)} error={error} value={value}{...rest}>
//         <Typography color={theme.color.neutralGray3}>
//           Data de nascimento
//         </Typography>
//         <Icon name="chevron-down" color={theme.color.blue2} type="feather" />
//       </Container>
//       {show &&
//         <DateTimePicker
//           value={value || new Date()}
//           mode="date"
//           display="spinner"
//           onChange={handleDateChange}
//           maximumDate={new Date()}
//           onBlur={() => setShow(false)}
//         />
//       }
//     </>
//   )
// }