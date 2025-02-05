import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import dayjs from 'dayjs';

export default function Step4({ data, termsAccepted, setTermsAccepted }) {
  const [paymentMethod, setPaymentMethod] = React.useState('');

  const handlePaymentMethodChange = (event) => {
    setPaymentMethod(event.target.value);
  };

  const handleTermsChange = (event) => {
    setTermsAccepted(event.target.checked);
  };

  let totalAmount;
  if (data.guests === '1 to 4') totalAmount = 10;
  else if (data.guests === '5 to 10') totalAmount = 20;
  else if (data.guests === '11 to 20') totalAmount = 30;
  else if (data.guests === '21 to 30') totalAmount = 40;
  else if (data.guests === '31 to 40') totalAmount = 50;

  return (
    <Box sx={{ width: '100%', maxWidth: 700, margin: 'auto' }}>
      {/* Review Information Box */}
      <Paper
        elevation={3}
        sx={{
          padding: 3,
          borderRadius: 2,
          marginBottom: 3,
          backgroundColor: '#495e57',
        }}
      >
        <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold', textAlign: 'center', fontFamily: 'Markazi Text, serif', fontSize
        : '2rem', color: '#c3a510'
         }}>
          Review Your Information
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', backgroundColor: '#edefee', p: 5, mb: 5, mt: 5, borderRadius: 2, border: 'none' }}>
          <Box>
            <Typography variant="body2" sx={{mb: 2, color: '#495E57'}}><strong className='review-str'>Name:</strong> {data.firstName} {data.lastName}</Typography>
            <Typography variant="body2" sx={{mb: 2, color: '#495E57'}}><strong className='review-str'>Phone:</strong> {data.phone}</Typography>
            <Typography variant="body2" sx={{mb: 2, color: '#495E57'}}><strong className='review-str'>Email:</strong> {data.email || 'N/A'}</Typography>
            <Typography variant="body2" sx={{mb: 2, color: '#495E57'}}><strong className='review-str'>Special Requests:</strong> {data.specialRequirements || 'N/A'}</Typography>
          </Box>
          <Box>
            <Typography variant="body2" sx={{mb: 2, color: '#495E57'}}><strong className='review-str'>Table Location:</strong> {data.tableLocation}</Typography>
            <Typography variant="body2" sx={{mb: 2, color: '#495E57'}}><strong className='review-str'>Occasion:</strong> {data.occasion}</Typography>
            <Typography variant="body2" sx={{mb: 2, color: '#495E57'}}><strong className='review-str'>Guests:</strong> {data.guests}</Typography>
            <Typography variant="body2" sx={{mb: 2, color: '#495E57'}}><strong className='review-str'>Date & Time:</strong> {dayjs(data.dateTime).format('MMMM D, YYYY h:mm A')}</Typography>
          </Box>
        </Box>
        <Typography variant="h6" sx={{ mt: 2, fontWeight: 'bold', textAlign: 'right', color: '#edefee', fontSize: '1.5rem' }}>
          Total: {`${totalAmount} TRY`}
        </Typography>
      </Paper>

      {/* Payment method selection */}
      <FormControl component="fieldset" sx={{ mb: 6, mt: 5 }}>
        <FormLabel component="legend" sx={{ fontWeight: 'bold' }}>
          Payment Method <span style={{ color: 'red' }}>*</span>
        </FormLabel>
        <RadioGroup
          aria-label="payment-method"
          name="payment-method"
          value={paymentMethod || 'cash'}
          onChange={handlePaymentMethodChange}
          row
        >
          <FormControlLabel value="cash" sx={{mr: 22}} control={<Radio />} label="Cash" />
          <FormControlLabel value="credit-card" control={<Radio />} label="Credit Card" />
        </RadioGroup>
      </FormControl>

      {/* Terms and Privacy Policy checkbox */}
      <Box sx={{ mb: 2 }}>
        <FormControlLabel
          control={<Checkbox checked={termsAccepted} onChange={handleTermsChange} />}
          label="By checking this box you’re agreeing to our terms and privacy policy *"
        />
      </Box>
    </Box>
  );
}
