import React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Box from '@mui/material/Box';

export default function StepOne({ data, setData }) {
  const handleRadioChange = (event) => {
    setData((prev) => ({ ...prev, tableLocation: event.target.value }));
  };

  const handleOccasionChange = (event) => {
    setData((prev) => ({ ...prev, occasion: event.target.value }));
  };

  const handleGuestsChange = (event) => {
    setData((prev) => ({ ...prev, guests: event.target.value }));
  };
  
console.log(data)
  return (
    <Box>

      {/* Table Location */}
      <FormControl component="fieldset" sx={{ mb: 2 }}>
        <FormLabel component="legend">Select Table Location <span>*</span></FormLabel>
        <RadioGroup
          row
          value={data.tableLocation || 'Indoor'}
          onChange={handleRadioChange}
        >
          <FormControlLabel sx={{mr: 22}} value="Indoor" control={<Radio />} label="Indoor" />
          <FormControlLabel value="Outdoor" control={<Radio />} label="Outdoor" />
        </RadioGroup>
      </FormControl>

      {/* Occasion */}
      <FormControl fullWidth sx={{ mt: 5 ,mb: 10 }}>
      <FormLabel component="legend">Select Your Occasion <span>*</span></FormLabel>
        <Select
          labelId="occasion-label"
          value={data.occasion || 'Casual'}
          onChange={handleOccasionChange}
          sx={{ width: '100%', maxWidth: 350 }}
        >
          <MenuItem value="Casual">Casual</MenuItem>
          <MenuItem value="Birthday">Birthday</MenuItem>
          <MenuItem value="Engagement">Engagement</MenuItem>
          <MenuItem value="Anniversary">Anniversary</MenuItem>
          <MenuItem value="Business Meeting">Business Meeting</MenuItem>
        </Select>
      </FormControl>

      {/* Number of Guests */}
      <FormControl fullWidth>
        <FormLabel component="legend">Select No. of Guests <span>*</span></FormLabel>
        <Select
          labelId="guests-label"
          value={data.guests || '1 to 4'}
          onChange={handleGuestsChange}
          sx={{ width: '100%', maxWidth: 350 }}
        >
          <MenuItem value="1 to 4">1 to 4</MenuItem>
          <MenuItem value="5 to 10">5 to 10</MenuItem>
          <MenuItem value="11 to 20">11 to 20</MenuItem>
          <MenuItem value="21 to 30">21 to 30</MenuItem>
          <MenuItem value="31 to 40">31 to 40</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
