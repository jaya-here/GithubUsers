import { Box, Typography } from '@mui/material';
import {Zoom} from '@mui/material';

export default function Loader({message}) {
  return (
    <Box 
    sx={{
        width:'100%',
        minHeight:'100vh',
        display:'flex',
        placeContent:'center',
        placeItems:'center'
    }}>
        <Zoom in={true}>
            <Typography variant='h5'
            sx={{
                color:'lightred'
            }}>{message?message:'Something is going wrong!'}</Typography>
        </Zoom>
    </Box>
  )
}
