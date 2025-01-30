import React, { useEffect } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

// Validation Schema
const validationSchema = Yup.object({
  firstName: Yup.string().required('First name is required'),
  lastName: Yup.string().required('Last name is required'),
  phone: Yup.string()
    .matches(/^[0-9]{10}$/, 'Phone number must be 10 digits')
    .required('Phone number is required'),
});

export default function StepThree({ data, setData, formikRef }) {
  const formik = useFormik({
    initialValues: {
      firstName: data.firstName,
      lastName: data.lastName,
      phone: data.phone,
      email: data.email || '',
      specialRequirements: data.specialRequirements || '',
    },
    validationSchema,
    onSubmit: () => {}, // Empty, as submission happens at the final step
  });

  // Sync form state with `setData` selectively
  useEffect(() => {
    // Only update changed values
    setData((prevData) => ({
      ...prevData,
      firstName: formik.values.firstName,
      lastName: formik.values.lastName,
      phone: formik.values.phone,
      email: formik.values.email,
      specialRequirements: formik.values.specialRequirements,
    }));
  }, [formik.values, setData]);

  // Attach formik instance to ref for validation in ReservationForm
  useEffect(() => {
    if (formikRef) {
      formikRef.current = formik;
    }
  }, [formik, formikRef]);

  // Simulate phone verification
  const handlePhoneVerify = () => {
    if (!formik.errors.phone && formik.values.phone.trim()) {
      alert('✅ Phone number verified successfully!');
    } else {
      alert('❌ Please enter a valid phone number.');
    }
  };

  return (
    <Box sx={{ width: '100%', maxWidth: 500, margin: 'auto' }}>
      <TextField
        label="First Name *"
        variant="outlined"
        fullWidth
        {...formik.getFieldProps('firstName')}
        error={formik.touched.firstName && Boolean(formik.errors.firstName)}
        helperText={formik.touched.firstName && formik.errors.firstName}
        sx={{ mb: 6 }}
      />
      <TextField
        label="Last Name *"
        variant="outlined"
        fullWidth
        {...formik.getFieldProps('lastName')}
        error={formik.touched.lastName && Boolean(formik.errors.lastName)}
        helperText={formik.touched.lastName && formik.errors.lastName}
        sx={{ mb: 6 }}
      />
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 6 }}>
        <TextField
          label="Phone Number *"
          variant="outlined"
          fullWidth
          {...formik.getFieldProps('phone')}
          error={formik.touched.phone && Boolean(formik.errors.phone)}
          helperText={formik.touched.phone && formik.errors.phone}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={handlePhoneVerify}
          sx={{ marginLeft: 2, py: 1.8, mb: 0.5 }}
        >
          Verify
        </Button>
      </Box>
      <TextField
        label="Email (Optional)"
        variant="outlined"
        fullWidth
        {...formik.getFieldProps('email')}
        sx={{ mb: 6 }}
      />
      <TextField
        label="Special Requirements (Optional)"
        variant="outlined"
        fullWidth
        {...formik.getFieldProps('specialRequirements')}
      />
    </Box>
  );
}
