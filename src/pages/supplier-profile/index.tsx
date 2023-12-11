// ** React Imports
import React from 'react';
import { useState } from 'react';

// ** MUI Imports
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import TabContext from '@mui/lab/TabContext';
import { styled } from '@mui/material/styles';
import MuiTab, { TabProps } from '@mui/material/Tab';
import Icon from '@mui/material/Icon';

// ** Supplier Profile Components
import SupplierProfileHeader from 'src/views/supplier-profile/SupplierProfileHeader';
import SupplierProfileInfo from 'src/views/supplier-profile/SupplierProfileInfo';
import SupplierProfileProducts from 'src/views/supplier-profile/SupplierProfileProducts';
import SupplierProfileReviews from 'src/views/supplier-profile/SupplierProfileReviews';
import SupplierProfileContact from 'src/views/supplier-profile/SupplierProfileContact';
import SupplierProfileGallery from 'src/views/supplier-profile/SupplierProfileGallery';

const Tab = styled(MuiTab)<TabProps>(({ theme }) => ({
  [theme.breakpoints.down('md')]: {
    minWidth: 100
  },
  [theme.breakpoints.down('sm')]: {
    minWidth: 67
  }
}));

const TabName = styled('span')(({ theme }) => ({
  lineHeight: 1.71,
  fontSize: '0.875rem',
  marginLeft: theme.spacing(2.4),
  [theme.breakpoints.down('md')]: {
    display: 'none'
  }
}));

const SupplierProfile = () => {
  // ** State
  const [value, setValue] = useState<string>('info');

  const handleChange = (_event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Card>
      <TabContext value={value}>
        <TabList
          onChange={handleChange}
          aria-label='supplier-profile tabs'
          sx={{ borderBottom: theme => `1px solid ${theme.palette.divider}` }}
        >
          <Tab
            value='info'
            label={
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Icon>info</Icon>
                <TabName>Info</TabName>
              </Box>
            }
          />
          <Tab
            value='products'
            label={
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Icon>shopping_basket</Icon>
                <TabName>Products</TabName>
              </Box>
            }
          />
          <Tab
            value='reviews'
            label={
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Icon>rate_review</Icon>
                <TabName>Reviews</TabName>
              </Box>
            }
          />
          <Tab
            value='contact'
            label={
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Icon>mail</Icon>
                <TabName>Contact</TabName>
              </Box>
            }
          />
          <Tab
            value='gallery'
            label={
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Icon>photo_library</Icon>
                <TabName>Gallery</TabName>
              </Box>
            }
          />
        </TabList>

        <TabPanel sx={{ p: 0 }} value='info'>
          <SupplierProfileInfo />
        </TabPanel>
        <TabPanel sx={{ p: 0 }} value='products'>
          <SupplierProfileProducts />
        </TabPanel>
        <TabPanel sx={{ p: 0 }} value='reviews'>
          <SupplierProfileReviews />
        </TabPanel>
        <TabPanel sx={{ p: 0 }} value='contact'>
          <SupplierProfileContact />
        </TabPanel>
        <TabPanel sx={{ p: 0 }} value='gallery'>
          <SupplierProfileGallery />
        </TabPanel>
      </TabContext>
    </Card>
  );
};

export default SupplierProfile;