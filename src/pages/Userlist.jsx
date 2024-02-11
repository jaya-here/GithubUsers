import UserListItem from "../components/UserList/UserListItem";
import useGetUsers from "../components/UserList/useGetUsers";
import { Box , List} from "@mui/material";




export default function Userlist() {

    let {isLoading, data:users, isError} = useGetUsers()
  
    if (isLoading)
    return <div>Loading..!</div>
  
    if (isError)
    return <div>Error...</div>
  
    console.log(users)
    return (
      <div>
        <Box 
        sx={{display:'flex',
        flexWrap:'wrap',
        justifyContent:'space-evenly'}}>
        {/*<List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>*/}
        {
            users?.map((user)=>{
                return (
                    <UserListItem user={user}></UserListItem>
              )
            })
        }

        </Box>
      </div>
    )
  }
  