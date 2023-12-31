import Grid, { GridProps } from "@mui/material/Grid";

export default function Main(props: GridProps) {
  return (
    <Grid
      item
      container
      spacing={2}
      flexDirection="column"
      component="main"
      margin="1rem"
      {...props}
    />
  );
}
