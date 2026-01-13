import DateTimePicker, { DateTimePickerEvent } from "@react-native-community/datetimepicker";
import { format } from "date-fns";
import { useState } from "react";
import { theme } from "../../../theme/defalt.theme";
import { BrithDateProps } from "../../../typesProps/birthDateProps";
import { Icon } from "../../atom/Icon";
import Typography from "../../atom/Typography";
import { Container } from "./styles";

export function BirthDatePicker({ onChange, value, error, ...rest }: BrithDateProps) {
  const [show, setShow] = useState(false)
  const formatDate = format(value, 'dd/MM/yyyy')
  const newDate = format(new Date, 'dd/MM/yyyy')

  const handleDateChange = (event: DateTimePickerEvent, selectedDate?: Date) => {
    setShow(prev => !prev)
    if (selectedDate) {
      onChange(selectedDate)
    }
  }
  return (
    <>
      <Container
        onPress={() => setShow(prev => !prev)}
        value={value}
        error={error}
        {...rest}
      >
        <Typography color={theme.color.neutralGray3}>
          {formatDate == newDate
            ? 'Data de nascimento'
            : formatDate
          }
        </Typography>
        <Icon name="chevron-down" color={theme.color.blue2} type="feather" />
      </Container>
      {show &&
        <DateTimePicker
          value={value || new Date()}
          mode="date"
          display="spinner"
          onChange={handleDateChange}
          maximumDate={new Date()}
          locale="pt-BR"
        />
      }
    </>
  )
}