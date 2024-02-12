import { Box, Typography } from "@mui/material";

export default function Userstat({value, stat}) {
  return (
    <Box
    sx={{
      backgroundColor:'white',
      display:'flex',
      flexDirection:'column',
      alignItems:'center',
      p:1.5,
      borderRadius:1,
    
    }}>
        <Typography
        sx={{
        fontWeight:600,
        fontSize:'large'
        }}>{value}</Typography>
        <Typography
        sx={{
        fontWeight:500,
        fontSize:'small',
        }}>{stat}</Typography>
    </Box>
  );
}
