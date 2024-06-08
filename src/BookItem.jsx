import {Box, Grid, ListItem} from "@mui/material";
import { BooksContext } from "./BooksProvider";

function BookItem(props) {
  const { book } = props;

  return (
  <Box>
     <img src="src\assets\image1.webp" alt="" />
  </Box>
  );
}

export default BookItem;
