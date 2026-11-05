import { Link } from 'react-router';
import { Button, Stack, Typography } from '@mui/material';

const Navbar = () => {
  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      sx={{ paddingX: { xs: 2, sm: 5 }, paddingTop: { xs: 2, sm: 3 } }}
    >
      <Button>
        <Typography variant="h4" sx={{ fontWeight: 'light', color: 'primary.main' }}>
          Recall
        </Typography>
      </Button>
      <Stack direction="row" spacing={2}>
        <Link to="/auth/login">
          <Button color="primary">Login</Button>
        </Link>
        <Link to="/auth/sign-up">
          <Button variant="contained">Create Account</Button>
        </Link>
      </Stack>
    </Stack>
  );
};

export default Navbar;
