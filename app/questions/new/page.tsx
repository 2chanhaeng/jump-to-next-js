import { create } from "@/actions/question";
import { Button, Typography, Grid } from "@mui/material";
import { Create } from "@mui/icons-material";
import Main from "@/components/Main";
import TextField from "@/components/TextField";
import { BackToQuestionsButton } from "@/components/BackToQuestionsButton";

export default function NewQuestionPage() {
  return (
    <Main>
      <Grid item>
        <BackToQuestionsButton />
      </Grid>
      <Grid item>
        <Typography variant="h2">New Question</Typography>
      </Grid>
      <Grid
        // as item
        item
        // as container
        container
        direction="column"
        spacing={2}
        // as form
        component="form"
        action={create}
      >
        <Grid item>
          <TextField id="subject" label="Subject" name="subject" fullWidth />
        </Grid>
        <Grid item flexGrow={1} container>
          <TextField
            id="content"
            label="Content"
            name="content"
            multiline
            fullWidth
            rows={10}
          />
        </Grid>
        <Grid item container flexDirection="row-reverse">
          <Button type="submit" variant="contained" endIcon={<Create />}>
            Create Question
          </Button>
        </Grid>
      </Grid>
    </Main>
  );
}
