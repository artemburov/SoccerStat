import TextField from "@mui/material/TextField"
import { LocalizationProvider} from "@mui/x-date-pickers/LocalizationProvider"
import { DatePicker } from "@mui/x-date-pickers/DatePicker"
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"
import 'dayjs/locale/ru'

function DateMatchesPicker({ date, minDate, maxDate, updateDate, label }) {
  return (
      <LocalizationProvider adapterLocale="ru" dateAdapter={AdapterDayjs}>
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