import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import ListSubheader from "@mui/material/ListSubheader";

export default function PhotoList({ photos }) {
  return (
    <ImageList sx={{ width: "100%", height: "100%" }} cols={4}>
      <ImageListItem key="Subheader" cols={4}>
        <ListSubheader component="div">Album</ListSubheader>
      </ImageListItem>
      {photos.map((item) => (
        <ImageListItem key={item.id}>
          <img
            src={item.url}
            srcSet={`${item.url} 2x`}
            alt={item.title}
            loading="lazy"
          />
          <ImageListItemBar title={item.title} />
        </ImageListItem>
      ))}
    </ImageList>
  );
}
