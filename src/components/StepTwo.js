import React, { useState } from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDateTimePicker } from '@mui/x-date-pickers/StaticDateTimePicker';
import dayjs from 'dayjs';
import { styled } from '@mui/system';

const PickerWrapper = styled('div')({
  '.MuiPickersDay-root': {
    margin: '', // space between the day cells
  },
  '.MuiDialogActions-root': {
    display: 'none', // Hides the Cancel/OK buttons
  },
  // Adding space between elements in the left sidebar
  '.MuiPickersCalendarHeader-root': {
    paddingLeft: '10px', // Add padding to the left of the calendar header
  },
  '.MuiPickersToolbar-content': {
    gap: '1rem', // Add space between the day cells (left sidebar days)
    marginTop: '10px', // Add space between the day cells (left sidebar days)
  },
});

export default function Step2({ data, setData }) {
  // Set default time to two hours from now
  const defaultDateTime = data.dateTime ? dayjs(data.dateTime) : dayjs().add(2, 'hour').startOf('minute');

  const [selectedDateTime, setSelectedDateTime] = useState(defaultDateTime);

  const handleDateTimeChange = (newValue) => {
    setSelectedDateTime(newValue);
    setData((prev) => ({ ...prev, dateTime: newValue.toISOString() })); // Save as ISO string
  };

  // Disable past dates
  const disableOldDates = (date) => {
    return date.isBefore(dayjs(), 'day');
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <PickerWrapper>
        <StaticDateTimePicker
          orientation="landscape"
          value={selectedDateTime}
          onChange={handleDateTimeChange}
          shouldDisableDate={disableOldDates}
        />
      </PickerWrapper>
    </LocalizationProvider>
  );
}
