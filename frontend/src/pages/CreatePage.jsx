import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { Input, Button } from '@mui/material';
import { useProductStore } from '../store/product';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

const CreatePage = () => {
    const [newProduct, setNewProduct] = useState({
        name: "",
        price: "",
        image: "",
    });

    const [open, setOpen] = useState(false); // Snackbar open state
    const [message, setMessage] = useState(""); // Snackbar message

    const { createProduct } = useProductStore();

    const handleAddProduct = async () => {
        const { success, message } = await createProduct(newProduct);
        setMessage(message); // Set message from response
        setOpen(true); // Open the Snackbar
        if (success) {
            setNewProduct({ name: "", price: "", image: "" }); // Reset form on success
        }
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false); // Close the Snackbar
    };

    const action = (
        <React.Fragment>
            <IconButton
                size="small"
                aria-label="close"
                color="inherit"
                onClick={handleClose}
            >
                <CloseIcon fontSize="small" />
            </IconButton>
        </React.Fragment>
    );

    return (
        <Container sx={{ maxWidth: 'sm' }}>
            <Stack
                direction="column" // Vertically stack items
                spacing={8} // Space between each child
                sx={{ alignItems: 'center' }} // Center align items
            >
                <Typography
                    variant="h2"
                    component="h1"
                    align="center"
                    gutterBottom
                >
                    Create New Product
                </Typography>

                <Box sx={{ width: '70%', padding: 6, borderRadius: '8px', boxShadow: 3 }}>
                    <Stack spacing={4}>
                        <Input
                            placeholder='Product Name'
                            name='name'
                            value={newProduct.name}
                            onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
                        />
                        <Input
                            placeholder='Product Price'
                            name='price'
                            value={newProduct.price}
                            onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
                        />
                        <Input
                            placeholder='Image URL'
                            name='image'
                            value={newProduct.image}
                            onChange={(e) => setNewProduct({ ...newProduct, image: e.target.value })}
                        />
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={handleAddProduct}
                            fullWidth
                        >
                            Add Product
                        </Button>
                    </Stack>
                </Box>

                {/* Snackbar Component */}
                <Snackbar
                    open={open}
                    autoHideDuration={6000}
                    onClose={handleClose}
                    message={message}
                    action={action}
                    anchorOrigin={{ vertical: 'top', horizontal: 'center' }} // Positioning
                />
            </Stack>
        </Container>
    );
};

export default CreatePage;
