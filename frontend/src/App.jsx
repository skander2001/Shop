import Box from '@mui/material/Box';
import Navbar from './components/Navbar';
import Home from './pages/HomePage';
import CreatePage from './pages/CreatePage';
import  { Routes,Route } from 'react-router-dom'
function App() {

  return (
    <Box minHeight={"100vh"} component="section" sx={{ p: 2, border: '1px grey' }}>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<CreatePage />} />
      </Routes>

    </Box>  
    )
}

export default App
