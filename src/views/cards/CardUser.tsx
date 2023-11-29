import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import QuotationDialog from 'src/layouts/components/SteelPurchaseForm';

import FormLayoutIcons from '../../views/form-layouts/FormLayoutsIcons';

const CardUser = () => {
  
    const [isModalOpen, setIsModalOpen] = useState(false);
  
    const openModal = () => {
      setIsModalOpen(true);
    };
  
    const closeModal = () => {
      setIsModalOpen(false);
    };
  
    const handleSubmit = () => {
      // Handle form submission here
      closeModal();
    };
  
  const openFormLayoutIcon = () => {
    const popupWindow = window.open('', 'FormLayoutIcon', 'width=800,height=600');
    if (popupWindow) {
      popupWindow.document.write(`
        <html>
        <head>
          <title>FormLayoutIcon</title>
          <link rel="stylesheet" href="https://unpkg.com/mosaic-ui@1.0.0/dist/index.css">
        </head>
        <body>
          <div id="form-layout-icon"></div>
          <script src="/path/to/formLayoutIcon.js"></script>
        </body>
        </html>
      `);

      const formLayoutIconElement = popupWindow.document.getElementById('form-layout-icon');
      if (formLayoutIconElement) {
        formLayoutIconElement.innerHTML = '<FormLayoutIcons />';
      } else {
        console.log('Element with id "form-layout-icon" not found');
      }
    } else {
      console.log('Popup window blocked');
    }
  };

  return (
    <Card sx={{ position: 'relative' }}>
      <CardMedia
        sx={{ height: '12.625rem' }}
        image='https://www.stainless-structurals.com/wp-content/uploads/2022/07/SSA_0887-scaled.jpg'
      />
      {/* <Avatar
        alt='Robert Meyer'
        src='/images/avatars/1.png'
        sx={{
          width: 75,
          height: 75,
          left: '1.313rem',
          top: '10.28125rem',
          position: 'absolute',
          border: theme => `0.25rem solid ${theme.palette.common.white}`
        }}
      /> */}
      <CardContent>
        <Box
          sx={{
            mt: 5.75,
            mb: 8.75,
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}
        >
          <Box sx={{ mr: 2, mb: 1, display: 'flex', flexDirection: 'column' }}>
            <Typography variant='h6'>Steel</Typography>
            <Typography variant='caption'>stainless with durability</Typography>
          </Box>
          <Button variant='contained' onClick={openModal}>
            Request for quotation
          </Button>
          <QuotationDialog isModalOpen={isModalOpen} closeModal={closeModal} />
        </Box>
        <Box
          sx={{
            gap: 2,
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}
        >
          <Typography variant='subtitle2' sx={{ whiteSpace: 'nowrap', color: 'text.primary' }}>
            verified
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default CardUser;