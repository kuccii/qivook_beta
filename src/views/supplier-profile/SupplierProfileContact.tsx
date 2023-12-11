import React from 'react';
import { Grid, TextField, Typography, Button } from '@mui/material';

const SupplierProfileContact = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={6}>
        <Typography variant="h6" component="h2">
          Contact Information
        </Typography>
        <TextField label="First Name" fullWidth />
        <TextField label="Last Name" fullWidth />
        <TextField label="Email" fullWidth />
        <TextField label="Phone Number" fullWidth />
        <TextField label="Address" fullWidth />
      </Grid>
      <Grid item xs={12} sm={6}>
        <Typography variant="h6" component="h2">
          Additional Information
        </Typography>
        <TextField label="Company Name" fullWidth />
        <TextField label="Website" fullWidth />
        <TextField label="Social Media" fullWidth />
        <TextField label="Preferred Contact Method" fullWidth select>
          <option value="email">Email</option>
          <option value="phone">Phone</option>
        </TextField>
        <TextField label="Preferred Language" fullWidth select>
          <option value="english">English</option>
          <option value="spanish">Spanish</option>
          <option value="french">French</option>
        </TextField>
      </Grid>
      <Grid item xs={12}>
        <Button variant="contained" color="primary">
          Save
        </Button>
      </Grid>
    </Grid>
  );
};

export default SupplierProfileContact;