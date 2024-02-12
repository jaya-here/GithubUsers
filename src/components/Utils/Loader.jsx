import HourglassBottomIcon from '@mui/icons-material/HourglassBottom';
import { Box } from '@mui/material';
import {Zoom} from '@mui/material';

export default function Loader() {
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
            <HourglassBottomIcon
            sx={{
                width:100,
                height:100
            }}
            animation="wave">
            </HourglassBottomIcon>
        </Zoom>
    </Box>
  )
}
