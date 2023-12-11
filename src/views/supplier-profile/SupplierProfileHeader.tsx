import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';

interface SupplierProfileHeaderProps {
  name: string;
  location: string;
  rating: number;
  reviewsCount: number;
}

const SupplierProfileHeader: React.FC<SupplierProfileHeaderProps> = ({
  name,
  location,
  rating,
  reviewsCount,
}) => {
  return (
    <Box sx={{ padding: '16px' }}>
      <Typography variant="h5" sx={{ marginBottom: '8px' }}>
        {name}
      </Typography>
      <Typography variant="subtitle1" sx={{ marginBottom: '8px' }}>
        {location}
      </Typography>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Rating value={rating} readOnly />
        <Typography variant="body2" sx={{ marginLeft: '8px' }}>
          ({reviewsCount} reviews)
        </Typography>
      </Box>
    </Box>
  );
};

export default SupplierProfileHeader;