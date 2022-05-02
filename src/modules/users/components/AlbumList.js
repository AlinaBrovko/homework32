import { Link, useLocation } from "react-router-dom";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import ImageIcon from "@mui/icons-material/Image";

export default function AlbumList({ albums }) {
  const { pathname } = useLocation();
  return (
    <List>
      {albums.map((item) => {
        return (
          <ListItem
            key={item.id}
            component={Link}
            to={`${pathname}/albums/${item.id}`}
          >
            <ListItemAvatar>
              <Avatar>
                <ImageIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              sx={{ color: "black" }}
              primary={"Album"}
              secondary={item.title}
            />
          </ListItem>
        );
      })}
    </List>
  );
}
