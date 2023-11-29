import React, { useState } from 'react';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import QuotationDialog from 'src/layouts/components/SteelPurchaseForm';

interface CardUserProps {
  image: string;
  title: string;
  subtitle: string;
}

const CardUser: React.FC<CardUserProps> = ({ image, title, subtitle }) => {
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

  return (
    <Card>
      <img src={image} alt="User" style={{ height: '12.625rem' }} />
      <CardContent>
        <Typography variant="h6" sx={{ mb: 1 }}>{title}</Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>{subtitle}</Typography>
        <Button variant="contained" onClick={openModal}>
          Request for quotation
        </Button>
        <QuotationDialog isModalOpen={isModalOpen} closeModal={closeModal} />
      </CardContent>
      
    </Card>
  );
};

export default CardUser;