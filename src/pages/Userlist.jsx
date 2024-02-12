import UserListItem from "../components/UserList/UserListItem";
import useGetUsers from "../components/UserList/useGetUsers";
import { Box , Typography} from "@mui/material";
import Loader from "../components/Utils/Loader";
import Error from "../components/Utils/Error";

export default function Userlist() {

    let {isLoading, data:users, isError} = useGetUsers();
  
    if (isLoading)
    return <Loader></Loader>
  
    if (isError)
    return <Error></Error>
  
    return (
        <Box
        sx={{
        background: 'radial-gradient(circle at 0.2% 1.8%, rgb(255, 90, 8) 0%, rgb(88, 0, 0) 100.2%);'}}>
        <Typography gutterBottom variant="h2" component="div"
        sx={{color:'whitesmoke',
        textAlign:'center',
        pt:4}}>
          Github Users
        </Typography>
        <Box 
        sx={{display:'flex',
        flexWrap:'wrap',
        justifyContent:'space-around'}}>
        {
            users?.map((user)=>{
                return (
                    <UserListItem user={user} key={user.login}></UserListItem>
              )
            })
        }
        </Box> 
        </Box>
    );
  }
  