import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import { NavLink } from "react-router-dom";



export default function UserListItem({user}) {
  return (
    <NavLink to={`/user/${user.login}`}>
    <ListItem sx={{minWidth:360, maxWidth:400}}>
    <ListItemAvatar>
        <Avatar alt={user.login} src={user.avatar_url}>
        </Avatar>
    </ListItemAvatar>
    <ListItemText primary={user.login} />
    </ListItem>
    </NavLink>
  )
}
