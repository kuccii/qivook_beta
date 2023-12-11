import React from "react";
import { Container, Typography, Grid, Button, Badge, styled } from "@mui/material";

const LogoContainer = styled(Grid)`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 100px;
  border: 1px solid #ccc;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding-left: 16px;
`;

const LogoImage = styled("img")`
  max-width: 80px;
  max-height: 80px;
`;

const SectionContainer = styled(Grid)`
  border-bottom: 1px solid #ccc;
  padding-bottom: 20px;
  margin-bottom: 20px;
`;

const SupplierInformationPage: React.FC = () => {
  return (
    <Container>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <LogoContainer>
            <LogoImage src="path_to_logo.png" alt="Company Logo" />
          </LogoContainer>
        </Grid>

        <SectionContainer item xs={12} md={6}>
          <Typography variant="h4" component="h1" gutterBottom>
            Supplier Information
          </Typography>
          <Typography variant="body1" gutterBottom>
            <strong>Company Name:</strong> ABC Metals Inc.
          </Typography>
          <Typography variant="body1" gutterBottom>
            <strong>Address:</strong> 123 Main Street, City, State, Country
          </Typography>
          <Typography variant="body1" gutterBottom>
            <strong>Postal Code:</strong> 12345
          </Typography>
        </SectionContainer>

        <SectionContainer item xs={12} md={6}>
          <Typography variant="h6" component="h2" gutterBottom>
            About the Supplier
          </Typography>
          <Typography variant="body1" gutterBottom>
            ABC Metals Inc. is a leading supplier in the metal industry, specializing in the
            manufacturing and distribution of high-quality metal products. With years of experience
            and a strong reputation, we strive to provide our customers with superior products and
            exceptional service.
          </Typography>
          <Typography variant="body1" gutterBottom>
            Our products range from stainless steel, aluminum, and copper to various alloys and
            specialty metals. We cater to a wide range of industries, including construction,
            automotive, aerospace, and more.
          </Typography>
          <Typography variant="body1" gutterBottom>
            At ABC Metals Inc., we prioritize customer satisfaction and ensure timely delivery of
            orders. We have a dedicated team of experts who work closely with clients to understand
            their specific requirements and provide tailored solutions.
          </Typography>
        </SectionContainer>

        <Grid item xs={12}>
          <Button variant="contained" color="primary">
            Contact Supplier
          </Button>
        </Grid>

        <SectionContainer item xs={12}>
          <Typography variant="h6" component="h2" gutterBottom>
            Years of Experience
          </Typography>
          <Typography variant="body1" gutterBottom>
            ABC Metals Inc. has been serving the metal industry for over 20 years. Our extensive
            experience ensures that we understand the unique requirements of our customers and can
            provide them with the best solutions.
          </Typography>
        </SectionContainer>

        <SectionContainer item xs={12}>
          <Typography variant="h6" component="h2" gutterBottom>
            Vetted and Badges
          </Typography>
          <Grid container alignItems="center" spacing={1}>
            <Grid item>
              <Badge color="success" overlap="circular" />
            </Grid>
            <Grid item>
              <Typography variant="body1" gutterBottom>
                Verified Supplier
              </Typography>
            </Grid>
          </Grid>
          <Grid container alignItems="center" spacing={1}>
            <Grid item>
              <Badge color="error" overlap="circular" />
            </Grid>
            <Grid item>
              <Typography variant="body1" gutterBottom>
                Not Certified
              </Typography>
            </Grid>
          </Grid>
        </SectionContainer>

        <SectionContainer item xs={12}>
          <Typography variant="h6" component="h2" gutterBottom>
            Shipping Information
          </Typography>
          <Typography variant="body1" gutterBottom>
            ABC Metals Inc. offers worldwide shipping for our products. We work with reliable logistics
            partners to ensure safe and timely delivery to your desired location. Please contact us for
            specific shipping details and rates.
          </Typography>
        </SectionContainer>
      </Grid>
    </Container>
  );
};

export default SupplierInformationPage;