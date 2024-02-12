import useGetUser from "../components/Userdetail/useGetUser";
import Card from '@mui/material/Card';
import Avatar from '@mui/material/Avatar';
import { Box, Typography } from "@mui/material";
import CardContent from '@mui/material/CardContent'
import Userstat from "../components/Userdetail/Userstat";
import Loader from "../components/Utils/Loader";
import Error from "../components/Utils/Error";
import { styled } from "@mui/material";

const Avatar_wrapper = styled(Avatar)((theme)=>{
  return {
    border:'3px solid whitesmoke',
    transform:'translate(5%)',
    width:'20%',
    height:'20%',
    [theme.theme.breakpoints.up("lg")]: {
      width:'15%',
      height:'15%'
    }
  };
})

const About_wrapper =styled(Box)((theme)=>{
  return {
    backgroundColor:'white',
    padding:'1.5rem',
    margin:'2.5rem 0',
    borderRadius:'1rem',
    [theme.theme.breakpoints.up("lg")]: {
      padding:'3rem',
      margin:'3.5rem 5rem',
    }
  };
})

export default function User() {

  let {isLoading, data:user, isError} = useGetUser();

  if (isLoading)
  return <Loader></Loader>

  if (isError)
  return <Error></Error>

  return (
  <Card 
  sx={{
  minWidth:'100%',
  minHeight:'100vh',
  background: 'radial-gradient(circle at 0.2% 1.8%, rgb(255, 90, 8) 0%, rgb(88, 0, 0) 100.2%);',
  }}>
    <Box
    sx={{
    minWidth:'100%', 
    pt:1,
    py:2.5, 
    display:"flex",
    flexDirection:'column',
    alignItems:'center'}}>
      <Avatar_wrapper 
      alt={user?.login} 
      src={user?.avatar_url}
      sx={{
      width:'20%',
      height:'20%',
      
      }}></Avatar_wrapper>
      <Typography variant="h4"
      style={{color:'whitesmoke',margin:'0', fontSize:'xx-large'}}>{user?.login}</Typography>
    </Box>
    <CardContent>
      <Box
      sx={{
        py:1,
        display:'flex',
        justifyContent:'space-evenly',

      }}>
      <Userstat value={user?.followers} stat={"followers"}></Userstat>
      <Userstat value={user?.following} stat={"following"}></Userstat>
      <Userstat value={user?.public_repos} stat={"repositories"}></Userstat>
      </Box>
      
      <About_wrapper
      >
        <Typography gutterBottom variant="h5" component="div">
          About
        </Typography>

        {user?.name && <Typography variant="body1" color="text.primary" sx={{pb:1, fontWeight:600}}>
        {user?.name}
        </Typography>}

        {user?.company && <Typography variant="body2" color="text.primary" sx={{pb:1}}>
          Works at <Typography variantMapping={{body1:'span'}}  sx={{fontWeight:600, display:'inline'}}>{user?.company}</Typography>
        </Typography>}

        {user?.location && <Typography variant="body2" color="text.primary" sx={{pb:1}}>
        Located at <Typography variantMapping={{body1:'span'}} sx={{fontWeight:600, display:'inline'}}>{user?.location}</Typography>
        </Typography>}
      </About_wrapper>

    </CardContent>
  </Card>
  );
}
  