import { Link, useLocation } from "react-router-dom";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import PersonIcon from "@mui/icons-material/Person";

export default function UserList({ users }) {
  const { pathname } = useLocation();
  return (
    <List>
      {users.map((item) => {
        return (
          <ListItem key={item.id}>
            <ListItemAvatar>
              <Avatar>
                <PersonIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={item.name} secondary={item.email} />
            <Button
              edge="end"
              aria-label="delete"
              component={Link}
              to={`${pathname}${item.id}`}
            >
              Albums
            </Button>
          </ListItem>
        );
      })}
    </List>
  );
}
