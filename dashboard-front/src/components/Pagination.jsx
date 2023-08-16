import * as React from 'react';
import Typography from '@mui/material/Typography';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

const Paginate = () => {
    return(
        <Box 
            gridColumn="span 15"
            gridRow="span 1"
            justifyContent="center" 
            alignItems= "center" 
            display="flex"
            sx={{margin: "40px 0px"}}>
                <Pagination count={2} variant="outlined" color="secondary" size="large"/>
        </Box>
    );
};

export default Paginate;