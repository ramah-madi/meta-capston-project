import React, { useState, useRef } from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import dayjs from 'dayjs';
import Step1 from './StepOne';
import Step2 from './StepTwo';
import Step3 from './StepThree';
import Step4 from './StepFour';
import ReservationSuccess from './ReservationSuccess';

// Step labels
const steps = [
  'Preferences',
  'Date and Time',
  'Contact Information',
  'Review and Submit',
];

// Step components
const stepComponents = [Step1, Step2, Step3, Step4];

export default function ReservationForm() {
  const [activeStep, setActiveStep] = useState(0);
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [data, setData] = useState({
    tableLocation: 'Indoor',
    occasion: 'Casual',
    guests: '1 to 4',
    dateTime: dayjs().add(2, 'hour').startOf('minute').toISOString(),
    contactInfo: '',
  });

  const step3FormikRef = useRef(null); // Formik ref for validation in Step 3

  const handleNext = async () => {
    if (activeStep === 2) {
      await step3FormikRef.current.validateForm(); // Trigger validation

      if (Object.keys(step3FormikRef.current.errors).length > 0) {
        step3FormikRef.current.setTouched({
          firstName: true,
          lastName: true,
          phone: true,
        });
        return;
      }
    }

    setActiveStep((prevStep) => prevStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevStep) => prevStep - 1);
  };

  const CurrentStepComponent = stepComponents[activeStep];

  return (
    <Box sx={{ width: '100%', maxWidth: 900, margin: 'auto' }}>
      {/* Stepper Navigation */}
      {activeStep < steps.length && (
        <Stepper activeStep={activeStep} sx={{ pb: 5,
         
        }}>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
      )}

      {/* Step Content */}
      {activeStep === steps.length ? (
        <React.Fragment>
          <ReservationSuccess />
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Box sx={{ display: 'flex', flexDirection: 'column', pt: 4, pl: 2 }}>
            {/* Pass formikRef to Step 3 */}
            <CurrentStepComponent
              data={data}
              setData={setData}
              termsAccepted={termsAccepted}
              setTermsAccepted={setTermsAccepted}
              formikRef={activeStep === 2 ? step3FormikRef : null}
            />
          </Box>

          {/* Navigation Buttons */}
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 15, pb: 3, justifyContent: 'space-between' }}>
            <Button color="inherit" disabled={activeStep === 0} onClick={handleBack} sx={{ mr: 1 }}>
              Back
            </Button>
            <Button
              onClick={handleNext}
              disabled={activeStep === steps.length - 1 && !termsAccepted}
              sx={{ color: '#495E57', backgroundColor: '#edefee' }}
            >
              {activeStep === steps.length - 1 ? 'Submit' : 'Next'}
            </Button>
          </Box>
        </React.Fragment>
      )}
    </Box>
  );
}
