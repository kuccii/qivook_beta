import React, { useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  Typography,
  MenuItem,
  Button,
  Grid,
} from '@mui/material';

interface QuotationDialogProps {
  isModalOpen: boolean;
  closeModal: () => void;
}

const QuotationDialog: React.FC<QuotationDialogProps> = ({
  isModalOpen,
  closeModal,
}) => {
  const [selectedProduct, setSelectedProduct] = useState('');
  const [selectedSubtype, setSelectedSubtype] = useState('');
  const [selectedStainlessType, setSelectedStainlessType] = useState('');
  const [thickness, setThickness] = useState('');
  const [width, setWidth] = useState('');
  const [length, setLength] = useState('');
  const [price, setPrice] = useState('');
  const [deliveryLocation, setDeliveryLocation] = useState('');
  const [description, setDescription] = useState('');

  const handleProductChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedProduct(event.target.value);
    setSelectedSubtype('');
    setSelectedStainlessType('');
  };

  const handleSubtypeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedSubtype(event.target.value);
    setSelectedStainlessType('');
  };

  const handleStainlessTypeChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSelectedStainlessType(event.target.value);
  };

  const handleThicknessChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setThickness(event.target.value);
  };

  const handleWidthChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setWidth(event.target.value);
  };

  const handleLengthChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLength(event.target.value);
  };

  const handlePriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPrice(event.target.value);
  };

  const handleDeliveryLocationChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setDeliveryLocation(event.target.value);
  };

  const handleDescriptionChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setDescription(event.target.value);
  };

  return (
    <Dialog open={isModalOpen} onClose={closeModal} maxWidth="md" fullWidth>
      <DialogTitle>Request for Quotation</DialogTitle>
      <DialogContent>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <div>
              <Typography variant="subtitle1">Product:</Typography>
              <TextField
                select
                label="Product"
                variant="outlined"
                fullWidth
                margin="normal"
                value={selectedProduct}
                onChange={handleProductChange}
              >
                <MenuItem value="steel">Steel</MenuItem>
                <MenuItem value="coil">Coil</MenuItem>
                <MenuItem value="plates">Plates</MenuItem>
                <MenuItem value="pipes">Pipes</MenuItem>
                <MenuItem value="tubes">Tubes</MenuItem>
                <MenuItem value="beams">Beams</MenuItem>
              </TextField>
              {selectedProduct === 'steel' && (
                <>
                  <Typography variant="subtitle1">Subtype:</Typography>
                  <TextField
                    select
                    label="Subtype"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    value={selectedSubtype}
                    onChange={handleSubtypeChange}
                  >
                    <MenuItem value="stainless">Stainless Steel</MenuItem>
                    <MenuItem value="carbon">Carbon Steel</MenuItem>
                    <MenuItem value="alloy">Alloy Steel</MenuItem>
                    <MenuItem value="tool">Tool Steel</MenuItem>
                    <MenuItem value="structural">Structural Steel</MenuItem>
                  </TextField>
                  {selectedSubtype === 'stainless' && (
                    <>
                      <Typography variant="subtitle1">
                        Stainless Steel Type:
                      </Typography>
                      <TextField
                        select
                        label="Type"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        value={selectedStainlessType}
                        onChange={handleStainlessTypeChange}
                      >
                        <MenuItem value="201">201</MenuItem>
                        <MenuItem value="304">304</MenuItem>
                        <MenuItem value="316">316</MenuItem>
                        <MenuItem value="316L">316L</MenuItem>
                      </TextField>
                    </>
                  )}
                  {/* Add similar logic for other subtypes */}
                </>
              )}
              {/* Add similar logic for other product types */}
              {selectedProduct && selectedSubtype && (
                <>
                  <Typography variant="subtitle1">Measurements:</Typography>
                  <TextField
                    label="Thickness"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    value={thickness}
                    onChange={handleThicknessChange}
                  />
                  <TextField
                    label="Width"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    value={width}
                    onChange={handleWidthChange}
                  />
                  <TextField
                    label="Length"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    value={length}
                    onChange={handleLengthChange}
                  />
                  {/* Add other relevant fields */}
                </>
              )}
            </div>
          </Grid>

          <Grid item xs={6}>
            <div>
              <Typography variant="subtitle1">Price:</Typography>
              <TextField
                label="Price"
                variant="outlined"
                fullWidth
                margin="normal"
                value={price}
                onChange={handlePriceChange}
              />

              <Typography variant="subtitle1">Delivery Location:</Typography>
              <TextField
                label="Location"
                variant="outlined"
                fullWidth
                margin="normal"
                value={deliveryLocation}
                onChange={handleDeliveryLocationChange}
              />

              <Typography variant="subtitle1">Description:</Typography>
              <TextField
                label="Description"
                variant="outlined"
                fullWidth
                margin="normal"
                multiline
                rows={4}
                value={description}
                onChange={handleDescriptionChange}
              />
            </div>
          </Grid>
        </Grid>

        <Button variant="contained" onClick={closeModal} sx={{ mt: 3 }}>
          Submit
        </Button>
      </DialogContent>
    </Dialog>
  );
};

export default QuotationDialog;