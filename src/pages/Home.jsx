import { useState } from 'react';
import { Box, styled } from '@mui/material';
import Sunset from '../assets/images/bg.jpg';
import Form from '../components/Form';
import Information from '../components/Information';
import { BorderAll, BorderAllRounded } from '@mui/icons-material';

const Component = styled(Box)({
    height: '100vh',
    display: 'inline',
    alignItems: 'center',
    margin: ' 50px',
    width: '65%',

    
})






const Home = () => {
    const [result, setResult] = useState({})

    return (
        <Component>

<Box style={{ width: '100%', height: '100%' }}>

        <Form setResult={setResult} />
        
        <Information result={result} />
      </Box>

        </Component>
    )
}

export default Home;