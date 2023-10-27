import React, { useState } from 'react';
import './App.css';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import * as Yup from 'yup';
import { Formik } from 'formik';
import FetchCompanyData from './data-access-queries/fetchCompanyData';

function App() {
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zip, setZip] = useState('');

  const validationSchema = Yup.object().shape({
    city: Yup.string().required('City is required'),
    state: Yup.string().required('State is required'),
    zip: Yup.number().required('Radius is required').positive('Radius must be a positive number'),
  });

  const handleCityChange = (event: { target: { value: React.SetStateAction<string> }; }) => {
    setCity(event.target.value);
  };

  const handleStateChange = (event: { target: { value: React.SetStateAction<string> }; }) => {
    setState(event.target.value);
  };

  const handleZipChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setZip(event.target.value);
  };
  return (
    <div className="App">
      <div>
        <header className="App-header">
          <h1>Company ABC</h1>
        </header>
      </div>
      <Typography variant="h6" gutterBottom>
        Please add shipping locations
      </Typography>
      <div className="form-container">
        <Formik
          initialValues={{
            city: '',
            state: '',
            zip: '',
          }}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            // Handle form submission
          }}
        >
          {({ errors, touched, handleBlur, handleSubmit }) => (
            <form onSubmit={handleSubmit}>

              <div className="form-input">
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      id="city"
                      name="city"
                      label="City"
                      value={city}
                      onChange={handleCityChange}
                      autoComplete="city"
                      variant="standard"
                      error={!!(touched.city && errors.city)}
                      helperText={touched.city && errors.city}
                      onBlur={handleBlur}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      id="state"
                      name="state"
                      label="State"
                      value={state}
                      onChange={handleStateChange}
                      autoComplete='state'
                      variant="standard"
                      error={!!(touched.state && errors.state)}
                      helperText={touched.state && errors.state}
                      onBlur={handleBlur}                      
                    />
                  </Grid>

                  <div className="radius-container">
                    <Grid item xs={12} sm={6}>
                      <TextField
                        id="zip"
                        name="zip"
                        label="Radius"
                        value={zip}
                        onChange={handleZipChange}
                        autoComplete='zip'
                        variant="standard"
                        error={!!(touched.zip && errors.zip)}
                        helperText={touched.zip && errors.zip}
                        onBlur={handleBlur}
                      />
                    </Grid>
                  </div>

                </Grid>
              </div>
            </form>
          )}
        </Formik>

        <Grid>
          <div>
            <FetchCompanyData city={city} state={state} zip={zip} />
          </div>
        </Grid>
      </div>
    </div >
  );
}

export default App;
