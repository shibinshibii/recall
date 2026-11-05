import { Box, Typography } from '@mui/material';
import Navbar from 'components/sections/landing/Navbar';

const Landing = () => {
  return (
    <div>
      <Navbar />
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '100vh',
        }}
      >
        <Typography variant="h1" color="info">
          Coming Soon!
        </Typography>
      </Box>
    </div>
  );
};

export default Landing;
