import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import { NavLink } from "react-router-dom";
import { Grow } from '@mui/material';

export default function UserListItem({user}) {
  return (
    <Grow
    in={true}
    style={{ transformOrigin: '0 0 0' }}
    {...{ timeout: 500 }}
  >
      <NavLink to={`/userdetails/${user.login}`}>
        <ListItem sx={{
          minWidth:360, 
          maxWidth:400,
          backgroundColor:'whitesmoke', 
          borderRadius:1, 
          my:1, 
          py:2}}>
          <ListItemAvatar>
              <Avatar alt={user.login} src={user.avatar_url}>
              </Avatar>
          </ListItemAvatar>
          <ListItemText primary={user.login}/>
        </ListItem>
      </NavLink>
    </Grow>
  );
}
