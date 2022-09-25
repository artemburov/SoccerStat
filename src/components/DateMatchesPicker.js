import TextField from "@mui/material/TextField"
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider"
import { DatePicker } from "@mui/x-date-pickers/DatePicker"
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"
import {ru} from 'date-fns/locale'

function DateMatchesPicker({ date, minDate, maxDate, updateDate, label }) {
  return (
    <LocalizationProvider locale={ru} dateAdapter={AdapterDayjs}>
      <DatePicker
        label={label}
        inputFormat="DD.MM.YYYY"
        value={date}
        minDate={minDate}
        maxDate={maxDate}
        onChange={updateDate}
        renderInput={(params) => <TextField {...params} sx={{ mr: 2 }} />}
      />
    </LocalizationProvider>
  )
}

export default DateMatchesPicker