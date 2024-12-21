import React,{useState} from 'react'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import { Link } from 'react-router-dom'
import Button from '@mui/material/Button'
import AddIcon from '@mui/icons-material/AddBoxOutlined';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const Navbar = () => {
    return (
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

                    {/* <Button onClick={toggleColorMode}>
                        {colorMode === 'light' ? '🌙' : '🌞'}
                    </Button> */}

                    </Link>
                </Stack>

            </Stack>
        </Container>
    )
}

export default Navbar