import { redirect } from "next/navigation";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import EditIcon from "@mui/icons-material/Edit";
import { update } from "@/actions/question";
import { auth } from "@/auth";
import { prisma } from "@/prisma";
import Main from "@/components/Main";
import TextField from "@/components/TextField";
import { CancelEditButton } from "@/components/BackToQuestionsButton";

export default async function QuestionEditPage({
  params: { id },
}: {
  params: { id: string };
}) {
  const session = await auth();
  if (!session || !session.user) return redirect(`/questions/${id}`);
  const where = { ownership: { userId: session.user.id, id } };
  const select = { subject: true, content: true };
  const question = await prisma.question.findUnique({ where, select });
  if (!question) return redirect(`/questions/${id}`);
  const { subject, content } = question;
  return (
    <Main>
      <CancelEditButton id={id} />
      <Grid
        item
        container
        spacing={2}
        flexDirection="column"
        component="form"
        action={update}
      >
        <input type="hidden" name="id" value={id} />
        <Grid item>
          <Typography variant="h2">Edit Question</Typography>
        </Grid>
        <Grid item>
          <TextField
            id="subject"
            label="Subject"
            name="subject"
            fullWidth
            defaultValue={subject}
          />
        </Grid>
        <Grid item>
          <TextField
            id="content"
            label="Content"
            name="content"
            multiline
            fullWidth
            rows={10}
            defaultValue={content}
          />
        </Grid>
        <Grid item container flexDirection="row-reverse">
          <Button type="submit" variant="contained" endIcon={<EditIcon />}>
            Edit Question
          </Button>
        </Grid>
      </Grid>
    </Main>
  );
}
