import React, { useState } from 'react';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/AddBoxOutlined';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const Navbar = () => {
  // State to track the current color mode (light or dark)
  const [colorMode, setColorMode] = useState('light');

  // Function to toggle between light and dark mode
  const toggleColorMode = () => {
    setColorMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };

  // Create the theme based on the colorMode state
  const theme = createTheme({
    palette: {
      mode: colorMode, // Set the mode to either 'light' or 'dark'
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline /> {/* Apply the theme globally */}

      <Container sx={{ maxWidth: '1140px', px: 4, mx: 'auto' }}>
        <Stack direction={{ xs: 'column', sm: 'row' }} alignItems="center" justifyContent="space-between" sx={{ height: 64 }}>
          <Typography
            sx={{
              fontSize: { xs: '22px', sm: '28px' },
              fontWeight: '800',
              textTransform: 'uppercase',
              textAlign: 'center',
              background: 'linear-gradient(to right, cyan, blue)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Product Store 🛒
          </Typography>

          <Stack direction="row" spacing={3} alignItems="center">
            <Link to="/create">
              <Button>
                <AddIcon />
              </Button>
            </Link>

            {/* Color mode toggle button */}
            <Button onClick={toggleColorMode}>
              {colorMode === 'light' ? '🌙' : '🌞'}
            </Button>
          </Stack>
        </Stack>
      </Container>
    </ThemeProvider>
  );
};

export default Navbar;
