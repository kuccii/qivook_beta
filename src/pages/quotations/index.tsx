import React, { useState, ChangeEvent } from 'react';
import { Grid, Typography, TextField, Button, FormControl, InputLabel, Select, MenuItem, Box } from '@mui/material';
import ApexChartWrapper from 'src/@core/styles/libs/react-apexcharts';
import Table from 'src/views/dashboard/Table';

const Quotation = () => {
  const [productFilter, setProductFilter] = useState('');
  const [nameFilter, setNameFilter] = useState('');
  const [statusFilter, setStatusFilter] = useState('');

  const handleProductFilterChange = (event: ChangeEvent<HTMLInputElement>) => {
    setProductFilter(event.target.value);
  };
  
  const handleNameFilterChange = (event: ChangeEvent<HTMLInputElement>) => {
    setNameFilter(event.target.value);
  };
  
  const handleStatusFilterChange = (event: ChangeEvent<{ value: unknown }>) => {
    setStatusFilter(event.target.value as string);
  };
  
  const handleFilter = () => {
    // Perform filtering logic based on the filters
    // You can use the filter values: productFilter, nameFilter, statusFilter
  };

  return (
    <ApexChartWrapper>
      <Grid container spacing={2}>
        <Grid item xs={12} sx={{ paddingBottom: 2 }}>
          <Typography variant="h5">Quotations</Typography>
        </Grid>
        <Grid item xs={12} sm={3}>
          <TextField
            label="Product"
            value={productFilter}
            onChange={handleProductFilterChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={3}>
          <TextField
            label="Name"
            value={nameFilter}
            onChange={handleNameFilterChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={3}>
          <FormControl fullWidth>
            <InputLabel>Status</InputLabel>
            <Select
              value={statusFilter}
              onChange={handleStatusFilterChange}
              label="Status"
            >
              <MenuItem value="">All</MenuItem>
              <MenuItem value="ongoing">Ongoing</MenuItem>
              <MenuItem value="accepted">Accepted</MenuItem>
              <MenuItem value="rejected">Rejected</MenuItem>
              <MenuItem value="cancelled">Cancelled</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={3} sx={{ display: 'flex', alignItems: 'flex-end' }}>
          <Button variant="contained" onClick={handleFilter}>
            Filter
          </Button>
        </Grid>
        <Grid item xs={12}>
          <Box mt={8}>
            <Table
              
            />
          </Box>
        </Grid>
      </Grid>
    </ApexChartWrapper>
  );
};

export default Quotation;